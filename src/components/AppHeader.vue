<script setup lang="ts">
import {
  ref,
} from 'vue'

import {
  useFavoritesStore,
} from '../stores/favorites'

const emit = defineEmits<{
  openFavorites: []
  openCreator: []
  search: [
    query: string,
  ]
}>()

const favoritesStore =
  useFavoritesStore()

const searchQuery =
  ref('')

const submitSearch = () => {
  emit(
    'search',
    searchQuery.value,
  )
}

const clearSearch = () => {
  searchQuery.value = ''

  emit(
    'search',
    '',
  )
}
</script>

<template>
  <header class="app-header">
    <div class="search-wrapper">
      <svg
        class="search-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="7"
        />
        <line
          x1="16.65"
          y1="16.65"
          x2="21"
          y2="21"
        />
      </svg>

      <input
        v-model="searchQuery"
        class="search-input"
        type="search"
        placeholder="Поиск по темам, вопросам и ответам..."
        @input="submitSearch"
        @keydown.enter.prevent="
          submitSearch
        "
      >

      <button
        v-if="searchQuery"
        type="button"
        class="clear-search"
        aria-label="Очистить поиск"
        title="Очистить"
        @click="clearSearch"
      >
        ×
      </button>
    </div>

    <div class="header-actions">
      <button
        type="button"
        class="create-button"
        @click="
          $emit('openCreator')
        "
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          />
        </svg>

        <span>
          Создать
        </span>
      </button>

      <button
        type="button"
        class="favorites-button"
        aria-label="Открыть избранное"
        @click="
          $emit('openFavorites')
        "
      >
        <svg
          class="favorites-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 21s-7-4.35-9.35-8.08C.62 9.7 1.47 5.5 5.28 4.36 7.45 3.71 9.34 4.5 12 7.09c2.66-2.59 4.55-3.38 6.72-2.73 3.81 1.14 4.66 5.34 2.63 8.56C19 16.65 12 21 12 21Z"
          />
        </svg>

        <span>
          Избранное
        </span>

        <span
          v-if="
            favoritesStore.count > 0
          "
          class="favorites-count"
        >
          {{ favoritesStore.count }}
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  flex-shrink: 0;
  min-height: 64px;
  padding: 10px 28px;
  background:
    rgba(255, 255, 255, 0.96);
  border-bottom:
    1px solid #e9eef3;
  box-shadow:
    0 2px 12px
    rgba(26, 26, 46, 0.05);

  display: flex;
  align-items: center;
  gap: 18px;
}

.search-wrapper {
  flex: 1;
  max-width: 720px;
  min-width: 220px;
  position: relative;

  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 13px;
  color: #8a909c;
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 42px;
  padding:
    9px 40px 9px 40px;
  border:
    1px solid #dce1e8;
  border-radius: 11px;
  background: #f8fafc;
  color: #242733;
  font: inherit;
  font-size: 14px;

  transition:
    background-color 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  background: #fff;
  border-color: #8fc3ec;
  box-shadow:
    0 0 0 3px
    rgba(33, 150, 243, 0.10);
}

.clear-search {
  position: absolute;
  right: 8px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #8a909c;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
}

.clear-search:hover {
  background: #edf0f4;
  color: #4f5560;
}

.header-actions {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 10px;
}

.create-button,
.favorites-button {
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 10px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  transition:
    transform 0.2s,
    background-color 0.2s,
    border-color 0.2s;
}

.create-button {
  border: 1px solid #b8d8f4;
  background: #f2f8ff;
  color: #236596;
}

.create-button:hover {
  transform: translateY(-1px);
  background: #e6f2ff;
  border-color: #8fc3ec;
}

.favorites-button {
  border: 1px solid #f0c4d2;
  background: #fff6f9;
  color: #7d334c;
}

.favorites-button:hover {
  transform: translateY(-1px);
  background: #ffeaf1;
  border-color: #e6a7bb;
}

.favorites-icon {
  fill: #df4f7a;
}

.favorites-count {
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: #df4f7a;
  color: white;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 1;
}

@media (max-width: 850px) {
  .app-header {
    align-items: stretch;
    flex-wrap: wrap;
  }

  .search-wrapper {
    order: 2;
    flex-basis: 100%;
    max-width: none;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
