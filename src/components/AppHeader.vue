<script setup lang="ts">
import {
  useFavoritesStore,
} from '../stores/favorites'

defineEmits<{
  openFavorites: []
}>()

const favoritesStore =
  useFavoritesStore()
</script>

<template>
  <header class="app-header">
    <div class="header-spacer" />

    <button
      type="button"
      class="favorites-button"
      aria-label="Открыть избранное"
      @click="$emit('openFavorites')"
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
        v-if="favoritesStore.count > 0"
        class="favorites-count"
      >
        {{ favoritesStore.count }}
      </span>
    </button>
  </header>
</template>

<style scoped>
.app-header {
  flex-shrink: 0;
  height: 64px;
  padding: 0 28px;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid #e9eef3;
  box-shadow: 0 2px 12px rgba(26, 26, 46, 0.05);

  display: flex;
  align-items: center;
}

.header-spacer {
  flex: 1;
}

.favorites-button {
  min-height: 40px;
  border: 1px solid #f0c4d2;
  background: #fff6f9;
  color: #7d334c;
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
</style>
