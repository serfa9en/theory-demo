<template>
  <div class="app-container">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  overflow: hidden;
}

.app-container {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
