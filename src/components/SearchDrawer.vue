<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
} from 'vue'

import {
  useCustomContentStore,
} from '../stores/customContent'

import type {
  Grade,
  Question,
} from '../types/question'

interface SearchResult {
  question: Question
  topicId: number
  topicTitle: string
  grade: Grade
  sectionTitle: string
  matchedIn:
    | 'topic'
    | 'question'
    | 'fullAnswer'
    | 'shortAnswer'
  snippet: string
}

const props = defineProps<{
  isOpen: boolean
  query: string
}>()

const emit = defineEmits<{
  close: []
  selectQuestion: [
    question: Question,
  ]
}>()

const customContentStore =
  useCustomContentStore()

const normalize = (
  value: string,
) => {
  return value
    .toLocaleLowerCase()
    .trim()
}

const stripMarkdown = (
  value: string,
) => {
  return value
    .replace(
      /```[\s\S]*?```/g,
      match =>
        match
          .replace(/```[\w-]*\n?/g, '')
          .replace(/```/g, ''),
    )
    .replace(
      /[`*_>#-]/g,
      ' ',
    )
    .replace(
      /\s+/g,
      ' ',
    )
    .trim()
}

const makeSnippet = (
  source: string,
  query: string,
) => {
  const plain =
    stripMarkdown(source)

  const lower =
    plain.toLocaleLowerCase()

  const normalizedQuery =
    query.toLocaleLowerCase()

  const index =
    lower.indexOf(
      normalizedQuery,
    )

  if (index === -1) {
    return plain.slice(0, 180)
  }

  const start =
    Math.max(
      0,
      index - 70,
    )

  const end =
    Math.min(
      plain.length,
      index
        + normalizedQuery.length
        + 110,
    )

  const prefix =
    start > 0
      ? '…'
      : ''

  const suffix =
    end < plain.length
      ? '…'
      : ''

  return (
    prefix
    + plain.slice(
      start,
      end,
    )
    + suffix
  )
}

const results =
  computed<SearchResult[]>(
    () => {
      const query =
        normalize(
          props.query,
        )

      if (!query) {
        return []
      }

      const matches:
        SearchResult[] = []

      for (
        const topic
        of customContentStore
          .allTopicsWithCustomQuestions
      ) {
        const topicMatches =
          normalize(
            topic.title,
          ).includes(query)

        const grades: Grade[] = [
          'junior',
          'middle',
        ]

        for (
          const grade
          of grades
        ) {
          for (
            const section
            of topic[grade].sections
          ) {
            for (
              const question
              of section.questions
            ) {
              const title =
                normalize(
                  question.title,
                )

              const full =
                normalize(
                  question.fullAnswer,
                )

              const short =
                normalize(
                  question.shortAnswer,
                )

              let matchedIn:
                SearchResult[
                  'matchedIn'
                ]
                | null = null

              let snippetSource =
                ''

              if (
                title.includes(
                  query,
                )
              ) {
                matchedIn =
                  'question'

                snippetSource =
                  question.title
              } else if (
                full.includes(
                  query,
                )
              ) {
                matchedIn =
                  'fullAnswer'

                snippetSource =
                  question.fullAnswer
              } else if (
                short.includes(
                  query,
                )
              ) {
                matchedIn =
                  'shortAnswer'

                snippetSource =
                  question.shortAnswer
              } else if (
                topicMatches
              ) {
                matchedIn =
                  'topic'

                snippetSource =
                  question.title
              }

              if (!matchedIn) {
                continue
              }

              matches.push({
                question,
                topicId:
                  topic.id,
                topicTitle:
                  topic.title,
                grade,
                sectionTitle:
                  section.title,
                matchedIn,
                snippet:
                  makeSnippet(
                    snippetSource,
                    props.query.trim(),
                  ),
              })
            }
          }
        }
      }

      return matches.slice(
        0,
        200,
      )
    },
  )

const matchLabel = (
  matchedIn:
    SearchResult[
      'matchedIn'
    ],
) => {
  switch (matchedIn) {
    case 'topic':
      return 'совпадение в теме'
    case 'question':
      return 'совпадение в вопросе'
    case 'fullAnswer':
      return 'совпадение в подробном ответе'
    case 'shortAnswer':
      return 'совпадение в кратком ответе'
  }
}

const close = () => {
  emit('close')
}

const selectQuestion = (
  question: Question,
) => {
  emit(
    'selectQuestion',
    question,
  )
}

const handleKeydown = (
  event: KeyboardEvent,
) => {
  if (
    event.key === 'Escape'
    && props.isOpen
  ) {
    close()
  }
}

window.addEventListener(
  'keydown',
  handleKeydown,
)

onBeforeUnmount(() => {
  window.removeEventListener(
    'keydown',
    handleKeydown,
  )
})
</script>

<template>
  <Teleport to="body">
    <Transition name="search-backdrop">
      <div
        v-if="isOpen"
        class="search-backdrop"
        @click="close"
      />
    </Transition>

    <Transition name="search-drawer">
      <aside
        v-if="isOpen"
        class="drawer"
        aria-label="Результаты поиска"
      >
        <div class="drawer-header">
          <div>
            <h2>
              Поиск
            </h2>

            <p>
              <template v-if="query.trim()">
                Найдено:
                {{ results.length }}
              </template>

              <template v-else>
                Введите ключевое слово
              </template>
            </p>
          </div>

          <button
            type="button"
            class="close-button"
            aria-label="Закрыть поиск"
            @click="close"
          >
            ×
          </button>
        </div>

        <div
          v-if="
            query.trim()
            && results.length
          "
          class="results"
        >
          <button
            v-for="
              result in results
            "
            :key="
              result.question.id
            "
            type="button"
            class="result-card"
            @click="
              selectQuestion(
                result.question,
              )
            "
          >
            <span class="meta">
              {{ result.topicTitle }}
              ·
              {{
                result.grade
                === 'junior'
                  ? 'Junior'
                  : 'Middle'
              }}
              ·
              {{
                result.sectionTitle
              }}
            </span>

            <strong
              class="question-title"
            >
              {{
                result.question
                  .title
              }}
            </strong>

            <span
              class="match-type"
            >
              {{
                matchLabel(
                  result.matchedIn,
                )
              }}
            </span>

            <span
              class="snippet"
            >
              {{ result.snippet }}
            </span>
          </button>
        </div>

        <div
          v-else-if="
            query.trim()
          "
          class="empty"
        >
          <div class="empty-icon">
            ⌕
          </div>

          <h3>
            Ничего не найдено
          </h3>

          <p>
            Попробуй другое слово
            или часть слова.
          </p>
        </div>

        <div
          v-else
          class="empty"
        >
          <div class="empty-icon">
            ⌕
          </div>

          <h3>
            Глобальный поиск
          </h3>

          <p>
            Ищет по названиям тем,
            вопросам, подробным и
            кратким ответам.
          </p>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.search-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9050;
  background:
    rgba(16, 24, 40, 0.22);
  backdrop-filter:
    blur(2px);
}

.drawer {
  position: fixed;
  z-index: 9051;
  top: 0;
  right: 0;
  bottom: 0;

  width:
    min(560px, 96vw);
  background: #fff;
  box-shadow:
    -12px 0 40px
    rgba(26, 26, 46, 0.16);

  display: flex;
  flex-direction: column;
}

.drawer-header {
  min-height: 92px;
  padding:
    22px 24px 18px;
  border-bottom:
    1px solid #edf0f4;

  display: flex;
  align-items: flex-start;
  justify-content:
    space-between;
}

.drawer-header h2 {
  margin: 0 0 5px;
  color: #1a1a2e;
  font-size: 24px;
}

.drawer-header p {
  margin: 0;
  color: #7a7f8b;
  font-size: 14px;
}

.close-button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 10px;
  background: #f5f6f8;
  color: #60646f;
  cursor: pointer;
  font-size: 26px;
}

.results {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px;
}

.result-card {
  width: 100%;
  border:
    1px solid #e9edf2;
  border-radius: 12px;
  background: #fff;
  padding: 14px;
  margin-bottom: 9px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  text-align: left;
  font: inherit;
  cursor: pointer;

  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}

.result-card:hover {
  border-color: #9cc8e8;
  box-shadow:
    0 6px 18px
    rgba(26, 26, 46, 0.07);
  transform:
    translateY(-1px);
}

.meta {
  color: #687482;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.question-title {
  color: #262936;
  font-size: 14px;
  line-height: 1.45;
}

.match-type {
  color: #3478aa;
  font-size: 11px;
  font-weight: 700;
}

.snippet {
  color: #686e79;
  font-size: 13px;
  line-height: 1.5;
}

.empty {
  flex: 1;
  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: #747a85;
}

.empty-icon {
  margin-bottom: 12px;
  color: #98a3ae;
  font-size: 52px;
}

.empty h3 {
  margin: 0 0 8px;
  color: #2c3038;
}

.empty p {
  max-width: 300px;
  margin: 0;
  line-height: 1.5;
}

.search-drawer-enter-active,
.search-drawer-leave-active {
  transition:
    transform 0.22s ease;
}

.search-drawer-enter-from,
.search-drawer-leave-to {
  transform:
    translateX(100%);
}

.search-backdrop-enter-active,
.search-backdrop-leave-active {
  transition:
    opacity 0.22s ease;
}

.search-backdrop-enter-from,
.search-backdrop-leave-to {
  opacity: 0;
}
</style>
