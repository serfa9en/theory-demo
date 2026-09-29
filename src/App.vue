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
        @search="
          handleSearch
        "
      />

      <MainContent
        @select-question="
          openQuestion
        "
        @edit-question="
          openQuestionEditor
        "
      />
    </div>

    <SearchDrawer
      :is-open="
        isSearchOpen
      "
      :query="
        searchQuery
      "
      @close="
        isSearchOpen = false
      "
      @select-question="
        openQuestionFromSearch
      "
    />

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

    <EditQuestionDrawer
      :is-open="
        isEditorOpen
      "
      :topic-id="
        editingTopicId
      "
      :question="
        editingQuestion
      "
      @close="
        closeQuestionEditor
      "
      @saved="
        handleQuestionSaved
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

import EditQuestionDrawer
  from './components/EditQuestionDrawer.vue'

import FavoritesDrawer
  from './components/FavoritesDrawer.vue'

import MainContent
  from './components/MainContent.vue'

import QuestionModal
  from './components/QuestionModal.vue'

import SearchDrawer
  from './components/SearchDrawer.vue'

import Sidebar
  from './components/Sidebar.vue'

import type {
  Question,
} from './types/question.ts'

interface EditQuestionPayload {
  topicId: number
  question: Question
}

const isFavoritesOpen =
  ref(false)

const isCreatorOpen =
  ref(false)

const isEditorOpen =
  ref(false)

const isSearchOpen =
  ref(false)

const searchQuery =
  ref('')

const selectedQuestion =
  ref<Question | null>(null)

const editingTopicId =
  ref<number | null>(null)

const editingQuestion =
  ref<Question | null>(null)

const closeSidePanels = () => {
  isFavoritesOpen.value =
    false
  isCreatorOpen.value =
    false
  isEditorOpen.value =
    false
  isSearchOpen.value =
    false
}

const handleSearch = (
  query: string,
) => {
  searchQuery.value =
    query

  if (!query.trim()) {
    isSearchOpen.value =
      false
    return
  }

  isFavoritesOpen.value =
    false
  isCreatorOpen.value =
    false
  isEditorOpen.value =
    false

  isSearchOpen.value =
    true
}

const openFavorites = () => {
  closeSidePanels()
  isFavoritesOpen.value =
    true
}

const openCreator = () => {
  closeSidePanels()
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

const openQuestionFromSearch = (
  question: Question,
) => {
  isSearchOpen.value =
    false

  selectedQuestion.value =
    question
}

const openQuestionEditor = (
  payload: EditQuestionPayload,
) => {
  closeSidePanels()

  editingTopicId.value =
    payload.topicId

  editingQuestion.value =
    payload.question

  isEditorOpen.value =
    true
}

const closeQuestionEditor = () => {
  isEditorOpen.value =
    false

  editingTopicId.value =
    null

  editingQuestion.value =
    null
}

const handleQuestionSaved = (
  question: Question,
) => {
  editingQuestion.value =
    question

  if (
    selectedQuestion.value?.id
    === question.id
  ) {
    selectedQuestion.value =
      question
  }
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
