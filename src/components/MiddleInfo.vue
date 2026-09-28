<template>
  <div class="grade-card middle">
    <div class="grade-content">
      <p
        v-for="(line, index) in lines"
        :key="index"
        class="info-line clickable"
        @click="handleClick(line, index)"
      >
        {{ line }}
      </p>
    </div>
  </div>

  <QuestionModal
    :is-open="isModalOpen"
    :question="selectedQuestion"
    :answer="selectedAnswer"
    grade="middle"
    :section-name="sectionName"
    :question-index="selectedQuestionIndex"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMenuStore } from '../stores/menu'
import QuestionModal from './QuestionModal.vue'

const props = defineProps<{
  info: string
  sectionName: string
}>()

const menuStore = useMenuStore()
const isModalOpen = ref(false)
const selectedQuestion = ref('')
const selectedAnswer = ref('')
const selectedQuestionIndex = ref(0)

const lines = computed(() => {
  return props.info
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
})

const handleClick = (line: string, index: number) => {
  const answerData = menuStore.getAnswer('middle', props.sectionName, index + 1)

  if (answerData) {
    selectedQuestion.value = answerData.question
    selectedAnswer.value = answerData.answer
  } else {
    selectedQuestion.value = line
    selectedAnswer.value = `Ответ на этот вопрос пока не добавлен.`
  }

  selectedQuestionIndex.value = index + 1
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedQuestion.value = ''
  selectedAnswer.value = ''
  selectedQuestionIndex.value = 0
}
</script>

<style scoped>
.grade-card {
  background-color: rgba(33, 150, 243, 0.08);
  border: 1px solid rgba(33, 150, 243, 0.25);
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.info-line {
  font-size: 14px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 8px;
  padding: 4px 0;
}

.info-line.clickable {
  cursor: pointer;
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: 4px;
}

.info-line.clickable:hover {
  background-color: rgba(33, 150, 243, 0.15);
  color: #1976d2;
  transform: translateX(4px);
}

.info-line:last-child {
  margin-bottom: 0;
}
</style>
