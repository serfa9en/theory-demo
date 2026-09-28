<script setup lang="ts">
import type {
  Grade,
  Question,
  QuestionSection,
} from '@/types/question'

defineProps<{
  grade: Grade
  sections: QuestionSection[]
}>()

const emit = defineEmits<{
  selectQuestion: [question: Question]
}>()
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
        <button
          v-for="question in section.questions"
          :key="question.id"
          type="button"
          class="question"
          @click="emit('selectQuestion', question)"
        >
          {{ question.title }}
        </button>
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

.question {
  width: 100%;
  border: 0;
  background: transparent;

  padding: 7px 8px;

  text-align: left;
  font: inherit;
  font-size: 14px;
  line-height: 1.6;

  border-radius: 4px;
  cursor: pointer;

  transition:
    background-color 0.2s,
    transform 0.2s;
}

.question-column.junior .question:hover {
  background: rgba(76, 175, 80, 0.15);
  transform: translateX(4px);
}

.question-column.middle .question:hover {
  background: rgba(33, 150, 243, 0.15);
  transform: translateX(4px);
}
</style>
