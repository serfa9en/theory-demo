<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  ref,
  watch,
} from 'vue'

import {
  useCustomContentStore,
} from '../stores/customContent'

import {
  useMenuStore,
} from '../stores/menu'

import type {
  Grade,
} from '../types/question'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const customContentStore =
  useCustomContentStore()

const menuStore =
  useMenuStore()

const newTopicTitle =
  ref('')

const selectedTopicId =
  ref<number | null>(null)

const questionGrade =
  ref<Grade>('junior')

const questionTitle =
  ref('')

const fullAnswer =
  ref('')

const shortAnswer =
  ref('')

const topicError =
  ref('')

const questionError =
  ref('')

const selectedTopic =
  computed(() => {
    if (
      selectedTopicId.value
      === null
    ) {
      return null
    }

    return (
      customContentStore
        .getTopic(
          selectedTopicId.value,
        )
    )
  })

const resetQuestionForm = () => {
  questionGrade.value =
    'junior'

  questionTitle.value = ''
  fullAnswer.value = ''
  shortAnswer.value = ''
  questionError.value = ''
}

const createTopic = () => {
  topicError.value = ''

  const topic =
    customContentStore
      .createTopic(
        newTopicTitle.value,
      )

  if (!topic) {
    topicError.value =
      'Введите название темы.'
    return
  }

  newTopicTitle.value = ''
  selectedTopicId.value =
    topic.id

  menuStore.selectItem(
    topic.id,
  )
}

const addQuestion = () => {
  questionError.value = ''

  if (
    selectedTopicId.value
    === null
  ) {
    questionError.value =
      'Сначала выберите тему.'
    return
  }

  const question =
    customContentStore
      .addQuestion(
        selectedTopicId.value,
        questionGrade.value,
        questionTitle.value,
        fullAnswer.value,
        shortAnswer.value,
      )

  if (!question) {
    questionError.value =
      'Заполните вопрос, подробный и краткий ответы.'
    return
  }

  resetQuestionForm()

  menuStore.selectItem(
    selectedTopicId.value,
  )
}

const selectTopic = (
  topicId: number,
) => {
  selectedTopicId.value =
    topicId

  resetQuestionForm()
}

const deleteTopic = (
  topicId: number,
) => {
  customContentStore
    .deleteTopic(topicId)

  if (
    selectedTopicId.value
    === topicId
  ) {
    selectedTopicId.value =
      customContentStore
        .topics[0]?.id
      ?? null
  }

  if (
    menuStore.selectedItemId
    === topicId
  ) {
    menuStore.clearSelection()
  }
}

const close = () => {
  emit('close')
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

watch(
  () => props.isOpen,
  isOpen => {
    if (
      isOpen
      && selectedTopicId.value
        === null
    ) {
      selectedTopicId.value =
        customContentStore
          .topics[0]?.id
        ?? null
    }
  },
)

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
    <Transition name="creator-backdrop">
      <div
        v-if="isOpen"
        class="creator-backdrop"
        @click="close"
      />
    </Transition>

    <Transition name="creator">
      <aside
        v-if="isOpen"
        class="creator-drawer"
        aria-label="Создание тем и вопросов"
      >
        <div class="creator-header">
          <div>
            <h2>
              Создать
            </h2>

            <p>
              Свои темы и вопросы
            </p>
          </div>

          <button
            type="button"
            class="close-button"
            aria-label="Закрыть"
            @click="close"
          >
            ×
          </button>
        </div>

        <div class="creator-body">
          <section class="creator-section">
            <h3>
              Новая тема
            </h3>

            <form
              class="topic-form"
              @submit.prevent="
                createTopic
              "
            >
              <input
                v-model="
                  newTopicTitle
                "
                class="input"
                type="text"
                placeholder="Например: Kubernetes"
              >

              <button
                class="primary-button"
                type="submit"
              >
                Создать тему
              </button>
            </form>

            <p
              v-if="topicError"
              class="form-error"
            >
              {{ topicError }}
            </p>
          </section>

          <section
            v-if="
              customContentStore
                .topics.length
            "
            class="creator-section"
          >
            <h3>
              Мои темы
            </h3>

            <div class="topic-list">
              <div
                v-for="
                  topic in
                    customContentStore
                      .topics
                "
                :key="topic.id"
                class="topic-row"
                :class="{
                  active:
                    selectedTopicId
                    === topic.id,
                }"
              >
                <button
                  type="button"
                  class="topic-select"
                  @click="
                    selectTopic(
                      topic.id,
                    )
                  "
                >
                  {{ topic.title }}
                </button>

                <button
                  type="button"
                  class="topic-delete"
                  title="Удалить тему"
                  aria-label="Удалить тему"
                  @click="
                    deleteTopic(
                      topic.id,
                    )
                  "
                >
                  ×
                </button>
              </div>
            </div>
          </section>

          <section
            v-if="selectedTopic"
            class="creator-section"
          >
            <div class="section-heading">
              <div>
                <h3>
                  Новый вопрос
                </h3>

                <p>
                  {{
                    selectedTopic.title
                  }}
                </p>
              </div>
            </div>

            <form
              class="question-form"
              @submit.prevent="
                addQuestion
              "
            >
              <label class="field">
                <span>
                  Уровень
                </span>

                <select
                  v-model="
                    questionGrade
                  "
                  class="input"
                >
                  <option value="junior">
                    Junior
                  </option>

                  <option value="middle">
                    Middle
                  </option>
                </select>
              </label>

              <label class="field">
                <span>
                  Вопрос
                </span>

                <textarea
                  v-model="
                    questionTitle
                  "
                  class="textarea question-textarea"
                  placeholder="Введите вопрос"
                  rows="3"
                />
              </label>

              <label class="field">
                <span>
                  Подробный ответ
                </span>

                <textarea
                  v-model="
                    fullAnswer
                  "
                  class="textarea full-answer"
                  placeholder="Подробный ответ. Можно использовать Markdown-разметку, как в существующих вопросах."
                  rows="9"
                />
              </label>

              <label class="field">
                <span>
                  Краткий ответ
                </span>

                <textarea
                  v-model="
                    shortAnswer
                  "
                  class="textarea"
                  placeholder="Короткий ответ для собеседования"
                  rows="4"
                />
              </label>

              <p
                v-if="questionError"
                class="form-error"
              >
                {{ questionError }}
              </p>

              <button
                type="submit"
                class="primary-button wide"
              >
                Добавить вопрос
              </button>
            </form>

            <div class="topic-summary">
              <span>
                Junior:
                {{
                  selectedTopic
                    .junior
                    .sections[0]
                    ?.questions
                    .length
                  ?? 0
                }}
              </span>

              <span>
                Middle:
                {{
                  selectedTopic
                    .middle
                    .sections[0]
                    ?.questions
                    .length
                  ?? 0
                }}
              </span>
            </div>
          </section>

          <div
            v-else
            class="empty-state"
          >
            <h3>
              Создай первую тему
            </h3>

            <p>
              После этого здесь
              появится форма
              добавления вопросов.
            </p>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.creator-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background:
    rgba(16, 24, 40, 0.28);
  backdrop-filter: blur(2px);
}

.creator-drawer {
  position: fixed;
  z-index: 9001;
  top: 0;
  right: 0;
  bottom: 0;

  width: min(540px, 96vw);
  background: #ffffff;
  box-shadow:
    -12px 0 40px
    rgba(26, 26, 46, 0.16);

  display: flex;
  flex-direction: column;
}

.creator-header {
  min-height: 92px;
  padding: 22px 24px 18px;
  border-bottom:
    1px solid #edf0f4;

  display: flex;
  align-items: flex-start;
  justify-content:
    space-between;
  gap: 16px;
}

.creator-header h2 {
  margin: 0 0 5px;
  color: #1a1a2e;
  font-size: 24px;
}

.creator-header p {
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
  line-height: 1;
}

.close-button:hover {
  background: #eceef2;
  color: #1a1a2e;
}

.creator-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 20px 24px 32px;
}

.creator-section {
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom:
    1px solid #edf0f4;
}

.creator-section h3 {
  margin: 0 0 14px;
  color: #1a1a2e;
  font-size: 18px;
}

.topic-form {
  display: flex;
  gap: 10px;
}

.input,
.textarea {
  width: 100%;
  border: 1px solid #d8dde5;
  border-radius: 9px;
  background: #fff;
  color: #262936;
  font: inherit;
  font-size: 14px;

  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.input {
  min-height: 42px;
  padding: 9px 11px;
}

.textarea {
  padding: 11px 12px;
  resize: vertical;
  line-height: 1.5;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #72afe0;
  box-shadow:
    0 0 0 3px
    rgba(33, 150, 243, 0.11);
}

.primary-button {
  flex-shrink: 0;
  min-height: 42px;
  border: 0;
  border-radius: 9px;
  background: #2196f3;
  color: white;
  padding: 9px 15px;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.primary-button:hover {
  background: #1689e0;
}

.primary-button.wide {
  width: 100%;
}

.topic-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.topic-row {
  border: 1px solid #e2e6ec;
  border-radius: 9px;
  display: flex;
  overflow: hidden;
}

.topic-row.active {
  border-color: #8fc3ec;
  background: #f2f8ff;
}

.topic-select {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  padding: 10px 12px;
  text-align: left;
  color: #30323c;
  font: inherit;
  cursor: pointer;
}

.topic-delete {
  width: 40px;
  border: 0;
  background: transparent;
  color: #9c6677;
  font-size: 20px;
  cursor: pointer;
}

.topic-delete:hover {
  background: #fff0f4;
  color: #cf426e;
}

.section-heading {
  margin-bottom: 14px;
}

.section-heading h3 {
  margin-bottom: 3px;
}

.section-heading p {
  margin: 0;
  color: #727784;
  font-size: 13px;
}

.question-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field > span {
  color: #4d5260;
  font-size: 13px;
  font-weight: 600;
}

.full-answer {
  min-height: 180px;
}

.form-error {
  margin: 8px 0 0;
  color: #c23d60;
  font-size: 13px;
}

.topic-summary {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  color: #6c7280;
  font-size: 12px;
}

.topic-summary span {
  padding: 5px 8px;
  border-radius: 999px;
  background: #f2f4f7;
}

.empty-state {
  padding: 40px 10px;
  text-align: center;
  color: #6f7480;
}

.empty-state h3 {
  color: #2d303a;
  margin-bottom: 8px;
}

.empty-state p {
  margin: 0;
  line-height: 1.5;
}

.creator-enter-active,
.creator-leave-active {
  transition:
    transform 0.25s ease;
}

.creator-enter-from,
.creator-leave-to {
  transform:
    translateX(100%);
}

.creator-backdrop-enter-active,
.creator-backdrop-leave-active {
  transition:
    opacity 0.25s ease;
}

.creator-backdrop-enter-from,
.creator-backdrop-leave-to {
  opacity: 0;
}

@media (max-width: 560px) {
  .topic-form {
    flex-direction: column;
  }

  .primary-button {
    width: 100%;
  }
}
</style>
