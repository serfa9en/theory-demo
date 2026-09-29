<script setup lang="ts">
import {
  useFavoritesStore,
} from '../stores/favorites.ts'

import type {
  Grade,
  Question,
  QuestionSection,
} from '../types/question'

defineProps<{
  grade: Grade
  sections: QuestionSection[]
}>()

const emit = defineEmits<{
  selectQuestion: [
    question: Question,
  ]
}>()

const favoritesStore =
  useFavoritesStore()
</script>

<template>
  <div
    class="question-column"
    :class="grade"
  >
    <section
      v-for="section in sections"
      :key="section.id"
      class="question-section"
    >
      <h2 class="section-title">
        {{ section.title }}
      </h2>

      <div class="questions">
        <div
          v-for="question in section.questions"
          :key="question.id"
          class="question-row"
        >
          <button
            type="button"
            class="question"
            @click="
              emit(
                'selectQuestion',
                question,
              )
            "
          >
            {{ question.title }}
          </button>

          <button
            type="button"
            class="favorite-toggle"
            :class="{
              active:
                favoritesStore
                  .isFavorite(
                    question.id,
                  ),
            }"
            :aria-label="
              favoritesStore
                .isFavorite(
                  question.id,
                )
                ? 'Удалить из избранного'
                : 'Добавить в избранное'
            "
            :aria-pressed="
              favoritesStore
                .isFavorite(
                  question.id,
                )
            "
            :title="
              favoritesStore
                .isFavorite(
                  question.id,
                )
                ? 'Удалить из избранного'
                : 'Добавить в избранное'
            "
            @click="
              favoritesStore
                .toggleFavorite(
                  question.id,
                )
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 21s-7-4.35-9.35-8.08C.62 9.7 1.47 5.5 5.28 4.36 7.45 3.71 9.34 4.5 12 7.09c2.66-2.59 4.55-3.38 6.72-2.73 3.81 1.14 4.66 5.34 2.63 8.56C19 16.65 12 21 12 21Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.question-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.question-section {
  border-radius: 10px;
  padding: 20px;
}

.question-column.junior .question-section {
  background: rgba(76, 175, 80, 0.08);
  border: 1px solid rgba(76, 175, 80, 0.25);
}

.question-column.middle .question-section {
  background: rgba(33, 150, 243, 0.08);
  border: 1px solid rgba(33, 150, 243, 0.25);
}

.section-title {
  margin: 0 0 16px;
  font-size: 20px;
}

.questions {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.question-row {
  width: 100%;
  border-radius: 6px;

  display: flex;
  align-items: center;

  transition:
    background-color 0.2s,
    transform 0.2s;
}

.question {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;

  padding: 7px 8px;

  text-align: left;
  font: inherit;
  font-size: 14px;
  line-height: 1.6;

  border-radius: 4px;
  cursor: pointer;
}

.favorite-toggle {
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  border: 0;
  background: transparent;
  color: #a8adb7;
  border-radius: 7px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    color 0.2s,
    background-color 0.2s,
    transform 0.2s;
}

.favorite-toggle svg {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 1.8;
  transition: fill 0.2s;
}

.favorite-toggle:hover {
  color: #df4f7a;
  background: rgba(223, 79, 122, 0.09);
  transform: scale(1.06);
}

.favorite-toggle.active {
  color: #df4f7a;
}

.favorite-toggle.active svg {
  fill: currentColor;
}

.question-column.junior .question-row:hover {
  background: rgba(76, 175, 80, 0.15);
  transform: translateX(4px);
}

.question-column.middle .question-row:hover {
  background: rgba(33, 150, 243, 0.15);
  transform: translateX(4px);
}
</style>
