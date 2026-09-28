<template>
  <div class="sidebar">
    <div v-for="group in menuStore.menuGroups" :key="group.id" class="menu-group">
      <div class="group-title">{{ group.title }}</div>
      <ul class="menu-list">
        <li
          v-for="item in group.items"
          :key="item.id"
          class="menu-item"
          :class="{ active: menuStore.selectedItemId === item.id }"
          @click="menuStore.selectItem(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '../stores/menu'

const menuStore = useMenuStore()
</script>

<style scoped>
.sidebar {
  width: 20%;
  height: 100%;
  background-color: #ffe3e8;
  padding: 20px;
  margin: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group-title {
  font-size: 12px;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0 8px;
}

.menu-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.menu-item {
  padding: 10px 14px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(5px);
}

.menu-item.active {
  background-color: #ffbbdd;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
