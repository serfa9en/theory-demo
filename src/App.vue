<template>
  <div class="app-container">
    <Sidebar />

    <div class="app-main">
      <AppHeader
        @open-favorites="
          openFavorites
        "
        @open-creator="
          openCreator
        "
      />

      <MainContent
        @select-question="
          openQuestion
        "
      />
    </div>

    <FavoritesDrawer
      :is-open="
        isFavoritesOpen
      "
      @close="
        isFavoritesOpen = false
      "
      @select-question="
        openQuestionFromFavorites
      "
    />

    <CreateContentDrawer
      :is-open="
        isCreatorOpen
      "
      @close="
        isCreatorOpen = false
      "
    />

    <QuestionModal
      :is-open="
        selectedQuestion !== null
      "
      :question="
        selectedQuestion
      "
      @close="
        selectedQuestion = null
      "
    />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
} from 'vue'

import AppHeader
  from './components/AppHeader.vue'

import CreateContentDrawer
  from './components/CreateContentDrawer.vue'

import FavoritesDrawer
  from './components/FavoritesDrawer.vue'

import MainContent
  from './components/MainContent.vue'

import QuestionModal
  from './components/QuestionModal.vue'

import Sidebar
  from './components/Sidebar.vue'

import type {
  Question,
} from './types/question.ts'

const isFavoritesOpen =
  ref(false)

const isCreatorOpen =
  ref(false)

const selectedQuestion =
  ref<Question | null>(null)

const openFavorites = () => {
  isCreatorOpen.value =
    false

  isFavoritesOpen.value =
    true
}

const openCreator = () => {
  isFavoritesOpen.value =
    false

  isCreatorOpen.value =
    true
}

const openQuestion = (
  question: Question,
) => {
  selectedQuestion.value =
    question
}

const openQuestionFromFavorites = (
  question: Question,
) => {
  isFavoritesOpen.value =
    false

  selectedQuestion.value =
    question
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  overflow: hidden;
}

button,
input,
textarea,
select {
  font-family: inherit;
}

.app-container {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-main {
  flex: 1;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;
}
</style>
