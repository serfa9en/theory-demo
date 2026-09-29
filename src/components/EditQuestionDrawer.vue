<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  ref,
  watch,
} from 'vue'

import {
  getTopicQuestions,
} from '../data/questions'

import {
  useCustomContentStore,
} from '../stores/customContent'

import type {
  Question,
} from '../types/question'

const props = defineProps<{
  isOpen: boolean
  topicId: number | null
  question: Question | null
}>()

const emit = defineEmits<{
  close: []
  saved: [
    question: Question,
  ]
}>()

const customContentStore =
  useCustomContentStore()

const title =
  ref('')

const fullAnswer =
  ref('')

const shortAnswer =
  ref('')

const error =
  ref('')

const success =
  ref('')

const isBuiltInQuestion =
  computed(() => {
    if (
      props.topicId === null
      || !props.question
    ) {
      return false
    }

    const topic =
      getTopicQuestions(
        props.topicId,
      )

    if (!topic) {
      return false
    }

    return [
      ...topic.junior.sections,
      ...topic.middle.sections,
    ]
      .flatMap(
        section =>
          section.questions,
      )
      .some(
        question =>
          question.id
          === props.question?.id,
      )
  })

const hasOverride =
  computed(() => {
    if (!props.question) {
      return false
    }

    return (
      customContentStore
        .hasOverride(
          props.question.id,
        )
    )
  })

const fillForm = () => {
  if (!props.question) {
    title.value = ''
    fullAnswer.value = ''
    shortAnswer.value = ''
    return
  }

  title.value =
    props.question.title

  fullAnswer.value =
    props.question.fullAnswer

  shortAnswer.value =
    props.question.shortAnswer

  error.value = ''
  success.value = ''
}

const save = () => {
  error.value = ''
  success.value = ''

  if (
    props.topicId === null
    || !props.question
  ) {
    return
  }

  const updated =
    customContentStore
      .updateQuestion(
        props.topicId,
        props.question.id,
        title.value,
        fullAnswer.value,
        shortAnswer.value,
      )

  if (!updated) {
    error.value =
      'Не удалось сохранить изменения. Проверьте, что все поля заполнены.'
    return
  }

  const topic =
    customContentStore
      .getTopicWithCustomQuestions(
        props.topicId,
      )

  const freshQuestion =
    topic
      ? [
          ...topic
            .junior
            .sections,
          ...topic
            .middle
            .sections,
        ]
          .flatMap(
            section =>
              section.questions,
          )
          .find(
            question =>
              question.id
              === props.question?.id,
          )
      : null

  if (freshQuestion) {
    emit(
      'saved',
      freshQuestion,
    )
  }

  success.value =
    'Изменения сохранены.'
}

const resetBuiltIn = () => {
  if (!props.question) {
    return
  }

  customContentStore
    .resetQuestionOverride(
      props.question.id,
    )

  const topic =
    props.topicId === null
      ? null
      : customContentStore
          .getTopicWithCustomQuestions(
            props.topicId,
          )

  const freshQuestion =
    topic
      ? [
          ...topic
            .junior
            .sections,
          ...topic
            .middle
            .sections,
        ]
          .flatMap(
            section =>
              section.questions,
          )
          .find(
            question =>
              question.id
              === props.question?.id,
          )
      : null

  if (freshQuestion) {
    title.value =
      freshQuestion.title
    fullAnswer.value =
      freshQuestion.fullAnswer
    shortAnswer.value =
      freshQuestion.shortAnswer

    emit(
      'saved',
      freshQuestion,
    )
  }

  success.value =
    'Исходная версия восстановлена.'
}

const close = () => {
  emit('close')
}

watch(
  [
    () => props.isOpen,
    () => props.question,
  ],
  ([isOpen]) => {
    if (isOpen) {
      fillForm()
    }
  },
  {
    immediate: true,
  },
)

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
    <Transition name="edit-backdrop">
      <div
        v-if="isOpen"
        class="edit-backdrop"
        @click="close"
      />
    </Transition>

    <Transition name="edit">
      <aside
        v-if="isOpen"
        class="edit-drawer"
        aria-label="Редактирование вопроса"
      >
        <div class="edit-header">
          <div>
            <h2>
              Редактировать вопрос
            </h2>

            <p>
              {{
                isBuiltInQuestion
                  ? 'Встроенный вопрос'
                  : 'Пользовательский вопрос'
              }}
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

        <form
          class="edit-body"
          @submit.prevent="save"
        >
          <label class="field">
            <span>
              Вопрос
            </span>

            <textarea
              v-model="title"
              class="textarea"
              rows="3"
            />
          </label>

          <label class="field">
            <span>
              Подробный ответ
            </span>

            <textarea
              v-model="fullAnswer"
              class="textarea full-answer"
              rows="16"
            />
          </label>

          <label class="field">
            <span>
              Краткий ответ
            </span>

            <textarea
              v-model="shortAnswer"
              class="textarea"
              rows="5"
            />
          </label>

          <p
            v-if="error"
            class="message error"
          >
            {{ error }}
          </p>

          <p
            v-if="success"
            class="message success"
          >
            {{ success }}
          </p>

          <div class="actions">
            <button
              type="submit"
              class="save-button"
            >
              Сохранить
            </button>

            <button
              v-if="
                isBuiltInQuestion
                && hasOverride
              "
              type="button"
              class="reset-button"
              @click="
                resetBuiltIn
              "
            >
              Вернуть исходный ответ
            </button>
          </div>

          <p
            v-if="isBuiltInQuestion"
            class="hint"
          >
            Исходный файл вопроса не изменяется.
            Твоя версия сохраняется локально
            и подменяет встроенный вариант.
          </p>
        </form>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.edit-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9200;
  background:
    rgba(16, 24, 40, 0.28);
  backdrop-filter: blur(2px);
}

.edit-drawer {
  position: fixed;
  z-index: 9201;
  top: 0;
  right: 0;
  bottom: 0;

  width:
    min(620px, 96vw);
  background: #fff;
  box-shadow:
    -12px 0 40px
    rgba(26, 26, 46, 0.16);

  display: flex;
  flex-direction: column;
}

.edit-header {
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

.edit-header h2 {
  margin: 0 0 5px;
  color: #1a1a2e;
  font-size: 24px;
}

.edit-header p {
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

.edit-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding:
    22px 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.field > span {
  color: #4d5260;
  font-size: 13px;
  font-weight: 700;
}

.textarea {
  width: 100%;
  border:
    1px solid #d8dde5;
  border-radius: 9px;
  background: #fff;
  color: #262936;
  padding: 11px 12px;
  resize: vertical;
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
}

.textarea:focus {
  outline: none;
  border-color: #72afe0;
  box-shadow:
    0 0 0 3px
    rgba(33, 150, 243, 0.11);
}

.full-answer {
  min-height: 320px;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.save-button,
.reset-button {
  min-height: 42px;
  border-radius: 9px;
  padding: 9px 15px;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.save-button {
  border: 0;
  background: #2196f3;
  color: #fff;
}

.save-button:hover {
  background: #1689e0;
}

.reset-button {
  border: 1px solid #e0c3cc;
  background: #fff7f9;
  color: #9b4e68;
}

.reset-button:hover {
  background: #ffeef3;
}

.message {
  margin: 0;
  font-size: 13px;
}

.error {
  color: #c23d60;
}

.success {
  color: #2e7d32;
}

.hint {
  margin: 0;
  padding: 12px;
  border-radius: 9px;
  background: #f6f7f9;
  color: #6f7480;
  font-size: 12px;
  line-height: 1.5;
}

.edit-enter-active,
.edit-leave-active {
  transition:
    transform 0.25s ease;
}

.edit-enter-from,
.edit-leave-to {
  transform:
    translateX(100%);
}

.edit-backdrop-enter-active,
.edit-backdrop-leave-active {
  transition:
    opacity 0.25s ease;
}

.edit-backdrop-enter-from,
.edit-backdrop-leave-to {
  opacity: 0;
}
</style>
