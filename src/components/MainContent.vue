<template>
  <main class="main-content">
    <div
      v-if="currentTopic"
      class="content"
    >
      <h1 class="item-title">
        {{ currentTopic.title }}
      </h1>

      <div class="grade-legend">
        <div class="grade-legend-item">
          <span
            class="legend-badge junior"
          >
            Junior
          </span>
        </div>

        <div class="grade-legend-item">
          <span
            class="legend-badge middle"
          >
            Middle
          </span>
        </div>
      </div>

      <div class="questions-grid">

        <QuestionColumn
          grade="middle"
          :sections="
            currentTopic.middle.sections
          "
          @select-question="
            openQuestion
          "
        />
      </div>

      <QuestionModal
        :is-open="
          isQuestionModalOpen
        "
        :question="
          selectedQuestion
        "
        @close="
          closeQuestion
        "
      />
    </div>

    <div
      v-else
      class="empty-state"
    >
      <h2>
        Выберите тему
      </h2>

      <p>
        Нажмите на тему в левой панели,
        чтобы увидеть вопросы.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
} from 'vue'

import { useMenuStore } from '../stores/menu'

import QuestionColumn from './QuestionColumn.vue'

import {
  getTopicQuestions,
} from '../data/questions'

import type {
  Question,
} from '../types/question'

const menuStore = useMenuStore()

const selectedQuestion =
  ref<Question | null>(null)

/**
 * Получаем данные текущей темы.
 */
const currentTopic = computed(() => {
  const id =
    menuStore.selectedItemId

  if (id === null) {
    return null
  }

  return getTopicQuestions(id)
})

const isQuestionModalOpen =
  computed(() => {
    return selectedQuestion.value !== null
  })

const openQuestion = (
  question: Question,
) => {
  selectedQuestion.value = question
}

const closeQuestion = () => {
  selectedQuestion.value = null
}

/**
 * При переключении темы закрываем
 * предыдущий вопрос.
 */
watch(
  () => menuStore.selectedItemId,
  () => {
    selectedQuestion.value = null
  },
)
</script>


<style scoped>
.main-content {
  flex: 1;
  min-width: 0;
  height: 100%;
  background-color: #f7fdff;
  padding: 32px;
  margin: 0;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #333;
}

.empty-state h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.empty-state p {
  font-size: 18px;
  color: #555;
}

.item-container {
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.item-title {
  font-size: 32px;
  color: #1a1a2e;
  margin-bottom: 16px;
  font-weight: bold;
}

.grade-legend {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.legend-badge {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
}

.legend-badge.junior {
  background-color: #4caf50;
}

.legend-badge.middle {
  background-color: #2196f3;
}

.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-size: 22px;
  color: #1a1a2e;
  font-weight: 700;
  padding-bottom: 6px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}

.new-questions-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 16px;
}
</style>
