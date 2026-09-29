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
          <span class="legend-badge junior">
            Junior
          </span>
        </div>

        <div class="grade-legend-item">
          <span class="legend-badge middle">
            Middle
          </span>
        </div>
      </div>

      <div class="questions-grid">
        <div class="questions-column">
          <QuestionColumn
            grade="junior"
            :sections="currentTopic.junior.sections"
            @select-question="
              question =>
                emit(
                  'selectQuestion',
                  question,
                )
            "
          />
        </div>

        <div class="questions-column">
          <QuestionColumn
            grade="middle"
            :sections="currentTopic.middle.sections"
            @select-question="
              question =>
                emit(
                  'selectQuestion',
                  question,
                )
            "
          />
        </div>
      </div>
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
} from 'vue'

import {
  useMenuStore,
} from '../stores/menu'

import QuestionColumn from './QuestionColumn.vue'

import {
  getTopicQuestions,
} from '../data/questions'

import type {
  Question,
} from '../types/question'

const emit = defineEmits<{
  selectQuestion: [
    question: Question,
  ]
}>()

const menuStore = useMenuStore()

const currentTopic = computed(() => {
  const id =
    menuStore.selectedItemId

  if (id === null) {
    return null
  }

  return getTopicQuestions(id)
})
</script>

<style scoped>
.main-content {
  flex: 1;
  min-width: 0;
  min-height: 0;
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

.questions-grid {
  display: grid;
  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );
  gap: 24px;

  width: 100%;
  align-items: start;
}

.questions-column {
  min-width: 0;
  width: 100%;
}

@media (max-width: 900px) {
  .main-content {
    padding: 22px;
  }

  .questions-grid,
  .grade-legend {
    grid-template-columns: 1fr;
  }
}
</style>
