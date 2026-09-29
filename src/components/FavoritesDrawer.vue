<script setup lang="ts">
import {
  onBeforeUnmount,
  watch,
} from 'vue'

import {
  useFavoritesStore,
} from '../stores/favorites'

import type {
  Question,
} from '../types/question'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
  selectQuestion: [
    question: Question,
  ]
}>()

const favoritesStore =
  useFavoritesStore()

const close = () => {
  emit('close')
}

const openQuestion = (
  question: Question,
) => {
  emit(
    'selectQuestion',
    question,
  )
}

const handleKeydown = (
  event: KeyboardEvent,
) => {
  if (
    event.key === 'Escape'
    && props.isOpen
  ) {
    close()
  }
}

watch(
  () => props.isOpen,
  isOpen => {
    document.body.classList.toggle(
      'favorites-drawer-open',
      isOpen,
    )
  },
  {
    immediate: true,
  },
)

window.addEventListener(
  'keydown',
  handleKeydown,
)

onBeforeUnmount(() => {
  document.body.classList.remove(
    'favorites-drawer-open',
  )

  window.removeEventListener(
    'keydown',
    handleKeydown,
  )
})
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer-backdrop">
      <div
        v-if="isOpen"
        class="drawer-backdrop"
        @click="close"
      />
    </Transition>

    <Transition name="drawer">
      <aside
        v-if="isOpen"
        class="favorites-drawer"
        aria-label="Избранные вопросы"
      >
        <div class="drawer-header">
          <div>
            <h2>
              Избранное
            </h2>

            <p>
              {{
                favoritesStore.count
              }}
              {{
                favoritesStore.count === 1
                  ? 'вопрос'
                  : 'вопросов'
              }}
            </p>
          </div>

          <button
            type="button"
            class="close-button"
            aria-label="Закрыть избранное"
            @click="close"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </button>
        </div>

        <div
          v-if="
            favoritesStore.favoriteQuestions
              .length
          "
          class="favorite-list"
        >
          <article
            v-for="
              item in
                favoritesStore.favoriteQuestions
            "
            :key="item.question.id"
            class="favorite-item"
          >
            <button
              type="button"
              class="favorite-question"
              @click="
                openQuestion(
                  item.question,
                )
              "
            >
              <span
                class="favorite-meta"
              >
                {{ item.topicTitle }}
                ·
                {{
                  item.grade ===
                    'junior'
                    ? 'Junior'
                    : 'Middle'
                }}
              </span>

              <span
                class="favorite-title"
              >
                {{
                  item.question.title
                }}
              </span>
            </button>

            <button
              type="button"
              class="remove-button"
              aria-label="Удалить из избранного"
              title="Удалить из избранного"
              @click="
                favoritesStore
                  .removeFavorite(
                    item.question.id,
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
          </article>
        </div>

        <div
          v-else
          class="empty-favorites"
        >
          <div
            class="empty-heart"
            aria-hidden="true"
          >
            ♡
          </div>

          <h3>
            Пока пусто
          </h3>

          <p>
            Нажимай на сердечко
            рядом с вопросом, чтобы
            сохранить его здесь.
          </p>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(16, 24, 40, 0.28);
  backdrop-filter: blur(2px);
}

.favorites-drawer {
  position: fixed;
  z-index: 9001;
  top: 0;
  right: 0;
  bottom: 0;

  width: min(440px, 92vw);
  background: #ffffff;
  box-shadow: -12px 0 40px rgba(26, 26, 46, 0.16);

  display: flex;
  flex-direction: column;
}

.drawer-header {
  min-height: 92px;
  padding: 22px 22px 18px;
  border-bottom: 1px solid #edf0f4;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.drawer-header h2 {
  margin: 0 0 5px;
  color: #1a1a2e;
  font-size: 24px;
}

.drawer-header p {
  margin: 0;
  color: #7a7f8b;
  font-size: 14px;
}

.close-button {
  border: 0;
  background: #f5f6f8;
  color: #60646f;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: #eceef2;
  color: #1a1a2e;
}

.favorite-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px;
}

.favorite-item {
  border: 1px solid #eceff3;
  border-radius: 12px;
  margin-bottom: 9px;
  background: #fff;

  display: flex;
  align-items: stretch;

  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.favorite-item:hover {
  border-color: #e7b2c3;
  box-shadow: 0 5px 18px rgba(26, 26, 46, 0.07);
}

.favorite-question {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  padding: 14px 8px 14px 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  text-align: left;
  cursor: pointer;
}

.favorite-meta {
  color: #9b6073;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.35px;
  text-transform: uppercase;
}

.favorite-title {
  color: #2b2d39;
  font-size: 14px;
  line-height: 1.45;
  font-weight: 600;
}

.remove-button {
  flex: 0 0 46px;
  border: 0;
  background: transparent;
  color: #df4f7a;
  cursor: pointer;
  border-radius: 0 12px 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-button:hover {
  background: #fff1f5;
}

.remove-button svg {
  fill: currentColor;
}

.empty-favorites {
  flex: 1;
  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}

.empty-heart {
  color: #d9a1b3;
  font-size: 64px;
  line-height: 1;
  margin-bottom: 14px;
}

.empty-favorites h3 {
  margin: 0 0 8px;
  color: #2b2d39;
}

.empty-favorites p {
  max-width: 280px;
  margin: 0;
  color: #7a7f8b;
  line-height: 1.55;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-backdrop-enter-active,
.drawer-backdrop-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-backdrop-enter-from,
.drawer-backdrop-leave-to {
  opacity: 0;
}
</style>
