<template>
  <Teleport to="body">
    <Transition name="short-modal">
      <div v-if="isOpen" class="short-modal-overlay" @click="handleBackdropClick">
        <div class="short-modal-content" @click.stop>
          <button class="short-modal-close" @click="close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="short-modal-body">
            <h4 class="short-modal-title">{{ question }}</h4>
            <div class="short-modal-answer" v-html="formattedAnswer"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  question: string
  answer: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}

const formattedAnswer = computed(() => {
  if (!props.answer) return ''

  let html = props.answer

  // Инлайн код
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const escapedCode = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<code class="short-inline-code">${escapedCode}</code>`
  })

  // Жирный текст
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  return html
})
</script>

<style scoped>
.short-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.short-modal-content {
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.short-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s;
  color: #666;
  z-index: 10;
}

.short-modal-close:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
}

.short-modal-body {
  padding-right: 16px;
}

.short-modal-title {
  font-size: 18px;
  color: #1a1a2e;
  margin-bottom: 16px;
  font-weight: 700;
  line-height: 1.4;
  padding-right: 30px;
}

.short-modal-answer {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
}

:deep(.short-inline-code) {
  background-color: #f0f0f0;
  color: #d63384;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  border: 1px solid #e0e0e0;
}

:deep(strong) {
  font-weight: 600;
  color: #1a1a2e;
}

/* Анимации */
.short-modal-enter-active,
.short-modal-leave-active {
  transition: all 0.2s ease;
}

.short-modal-enter-from,
.short-modal-leave-to {
  opacity: 0;
}

.short-modal-enter-from .short-modal-content,
.short-modal-leave-to .short-modal-content {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>
