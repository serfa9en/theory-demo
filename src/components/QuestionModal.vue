<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="modal-overlay"
        @click="handleBackdropClick"
      >
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <div class="answer-tabs">
              <button
                class="answer-tab"
                :class="{ active: answerMode === 'full' }"
                @click="answerMode = 'full'"
              >
                Подробно
              </button>

              <button
                class="answer-tab"
                :class="{ active: answerMode === 'short' }"
                @click="answerMode = 'short'"
              >
                Кратко
              </button>
            </div>

            <button
              class="modal-close"
              @click="close"
              aria-label="Закрыть"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                />
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <h3 class="modal-title">
              {{ question?.title }}
            </h3>

            <div
              v-if="answerMode === 'full'"
              class="modal-answer"
              v-html="formattedAnswer"
            />

            <div
              v-else-if="question"
              class="short-answer"
            >
              <h4>
                Как можно ответить на собеседовании
              </h4>

              <p>
                {{ question.shortAnswer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useMenuStore } from '../stores/menu'
import type { Question } from '@/types/question'

const props = defineProps<{
  isOpen: boolean
  question: Question | null
  answer: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const menuStore = useMenuStore()

type AnswerMode = 'full' | 'short'

const answerMode = ref<AnswerMode>('full')

const close = () => {
  emit('close')
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}

const formattedAnswer = computed(() => {
  if (!props.question) {
    return ''
  }

  let html = props.question.fullAnswer

  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    (match, lang, code) => {
      const escapedCode = code
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim()

      return `<pre class="code-block"><code class="code-language-${
        lang || 'text'
      }">${escapedCode}</code></pre>`
    },
  )

  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const escapedCode = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    return `<code class="inline-code">${escapedCode}</code>`
  })

  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong>$1</strong>',
  )

  html = html.replace(
    /\*([^*]+)\*/g,
    '<em>$1</em>',
  )

  html = html.replace(
    /^### (.+)$/gm,
    '<h4 class="answer-section">$1</h4>',
  )

  html = html.replace(
    /^## (.+)$/gm,
    '<h4 class="answer-section">$1</h4>',
  )

  html = html.replace(
    /^- (.+)$/gm,
    '<li class="answer-list-item">$1</li>',
  )

  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<p class="answer-item">$1</p>',
  )

  html = html.replace(
    /\n\n/g,
    '</p><p class="answer-paragraph">',
  )

  html = html.replace(/\n/g, '<br>')

  return html
})

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      answerMode.value = 'full'
    }
  },
)
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 32px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.modal-short-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.modal-short-btn:hover {
  background-color: #45a049;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;
  color: #666;
}

.modal-close:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
}

.modal-body {
  padding-right: 20px;
}

.modal-title {
  font-size: 24px;
  color: #1a1a2e;
  margin-bottom: 24px;
  font-weight: 700;
  line-height: 1.4;
  padding-right: 140px; /* ширина блока кнопок */
  padding-top: 40px;    /* отступ сверху от кнопок */
}

:deep(.code-block) {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  border: 1px solid #333;
}

:deep(.code-block code) {
  background: none;
  padding: 0;
  color: inherit;
}

:deep(.code-language-html) {
  color: #e06c75;
}

:deep(.code-language-css) {
  color: #61afef;
}

:deep(.code-language-javascript),
:deep(.code-language-js) {
  color: #98c379;
}

:deep(.code-language-typescript),
:deep(.code-language-ts) {
  color: #56b6c2;
}

:deep(.inline-code) {
  background-color: #f0f0f0;
  color: #d63384;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  border: 1px solid #e0e0e0;
}

:deep(.answer-section) {
  font-size: 18px;
  color: #333;
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 600;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 8px;
}

:deep(.answer-item) {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 12px;
  padding-left: 8px;
}

:deep(.answer-paragraph) {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 12px;
}

:deep(.answer-list-item) {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-left: 20px;
  margin-bottom: 8px;
  list-style-type: disc;
}

:deep(strong) {
  font-weight: 600;
  color: #1a1a2e;
}

:deep(em) {
  font-style: italic;
  color: #555;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

.answer-tabs {
  display: flex;
  gap: 8px;
}

.answer-tab {
  border: 1px solid #d5d5d5;
  background: white;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

.answer-tab:hover {
  background-color: #f3f3f3;
}

.answer-tab.active {
  background-color: #1a1a2e;
  color: white;
  border-color: #1a1a2e;
}

.short-answer {
  font-size: 16px;
  line-height: 1.7;
}

.short-answer h4 {
  margin-bottom: 16px;
  color: #1a1a2e;
}

.short-answer p {
  padding: 20px;
  background-color: #f5f8ff;
  border-radius: 10px;
}
</style>
