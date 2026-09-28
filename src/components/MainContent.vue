<template>
  <div class="main-content">
    <div v-if="menuStore.selectedItem" class="item-container">
      <h1 class="item-title">{{ menuStore.selectedItem.name }}</h1>

      <div class="grade-legend">
        <span class="legend-badge junior">Junior</span>
        <span class="legend-badge middle">Middle</span>
      </div>

      <div class="sections-wrapper">
        <div
          v-for="section in allSections"
          :key="section"
          class="section-block"
        >
          <h2 v-if="section !== 'Общее'" class="section-title">
            {{ section }}
          </h2>
          <div class="section-grid">
            <JuniorInfo
              :info="menuStore.selectedItem.juniorInfo[section] || 'Нет информации'"
              :section-name="section"
            />
            <MiddleInfo
              :info="menuStore.selectedItem.middleInfo[section] || 'Нет информации'"
              :section-name="section"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <h2>Выберите пункт меню</h2>
      <p>Нажмите на любой пункт в левой панели, чтобы увидеть подробную информацию</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '../stores/menu'
import JuniorInfo from './JuniorInfo.vue'
import MiddleInfo from './MiddleInfo.vue'

const menuStore = useMenuStore()

const allSections = computed<string[]>(() => {
  const item = menuStore.selectedItem
  if (!item) return []

  const juniorKeys = Object.keys(item.juniorInfo)
  const middleKeys = Object.keys(item.middleInfo)

  const uniqueKeys = [...new Set([...juniorKeys, ...middleKeys])]

  const priorityOrder = [
    'HTML', 'CSS', 'JavaScript', 'HTML & CSS',
    'Vue 2', 'Vue 3',
    'Основы', 'Webpack', 'Vite', 'Сравнение и оптимизация',
    'Методологии', 'Jest / Vitest', 'Vue Test Utils', 'Playwright', 'Бэкенд (Java/Python)', 'Общие темы',
    'Java Core', 'Spring Core', 'Spring MVC', 'JPA / Hibernate', 'Spring Security', 'Spring Cloud'
  ]

  const sorted = uniqueKeys.sort((a, b) => {
    const indexA = priorityOrder.indexOf(a)
    const indexB = priorityOrder.indexOf(b)

    if (indexA !== -1 && indexB !== -1) return indexA - indexB
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1
    return a.localeCompare(b)
  })

  return sorted
})
</script>


<style scoped>
.main-content {
  width: 80%;
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
  display: flex;
  gap: 12px;
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
  margin-left: 640px;
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
</style>
