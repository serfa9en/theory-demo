<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="handleBackdropClick">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <button class="modal-short-btn" @click="openShortModal">
              Кратко
            </button>
            <button class="modal-close" @click="close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <h3 class="modal-title">{{ question }}</h3>
            <div class="modal-answer" v-html="formattedAnswer"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <ShortAnswerModal
    :is-open="isShortModalOpen"
    :question="question"
    :answer="shortAnswer"
    @close="closeShortModal"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMenuStore } from '../stores/menu'
import ShortAnswerModal from './ShortAnswerModal.vue'

const props = defineProps<{
  isOpen: boolean
  question: string
  answer: string
  grade: 'junior' | 'middle'
  sectionName: string
  questionIndex: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const menuStore = useMenuStore()
const isShortModalOpen = ref(false)

const close = () => {
  emit('close')
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}

const openShortModal = () => {
  isShortModalOpen.value = true
}

const closeShortModal = () => {
  isShortModalOpen.value = false
}

const shortAnswer = computed(() => {
  const answer = menuStore.getShortAnswer(
    props.grade,
    props.sectionName,
    props.questionIndex
  )
  return answer || 'Краткий ответ пока не добавлен.'
})

const formattedAnswer = computed(() => {
  if (!props.answer) return ''

  let html = props.answer

  // Блоки кода
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim()
    return `<pre class="code-block"><code class="code-language-${lang || 'text'}">${escapedCode}</code></pre>`
  })

  // Инлайн код
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const escapedCode = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<code class="inline-code">${escapedCode}</code>`
  })

  // Жирный текст
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  // Курсив
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')

  // Заголовки
  html = html.replace(/^### (.+)$/gm, '<h4 class="answer-section">$1</h4>')
  html = html.replace(/^## (.+)$/gm, '<h4 class="answer-section">$1</h4>')

  // Списки
  html = html.replace(/^- (.+)$/gm, '<li class="answer-list-item">$1</li>')
  html = html.replace(/^\d+\. (.+)$/gm, '<p class="answer-item">$1</p>')

  // Переносы строк
  html = html.replace(/\n\n/g, '</p><p class="answer-paragraph">')
  html = html.replace(/\n/g, '<br>')

  return `<p class="answer-paragraph">${html}</p>`
})
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
</style>
