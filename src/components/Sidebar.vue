<template>
  <div class="sidebar">
    <div
      v-for="
        group in
          menuStore.menuGroups
      "
      :key="group.id"
      class="menu-group"
      :class="{
        pinned:
          group.id === 'pinned',
      }"
    >
      <div class="group-title">
        <span>
          {{ group.title }}
        </span>

        <span
          v-if="
            group.id === 'pinned'
          "
          class="pinned-count"
        >
          {{ group.items.length }}
        </span>
      </div>

      <ul class="menu-list">
        <li
          v-for="
            item in group.items
          "
          :key="item.id"
          class="menu-item"
          :class="{
            active:
              menuStore
                .selectedItemId
              === item.id,
          }"
        >
          <button
            type="button"
            class="menu-item-main"
            @click="
              menuStore.selectItem(
                item.id,
              )
            "
          >
            <span
              class="menu-item-name"
            >
              {{ item.name }}
            </span>
          </button>

          <button
            type="button"
            class="pin-button"
            :class="{
              active:
                menuStore
                  .isPinned(
                    item.id,
                  ),
            }"
            :aria-label="
              menuStore
                .isPinned(
                  item.id,
                )
                ? 'Открепить тему'
                : 'Закрепить тему'
            "
            :title="
              menuStore
                .isPinned(
                  item.id,
                )
                ? 'Открепить'
                : 'Закрепить'
            "
            @click.stop="
              menuStore.togglePin(
                item.id,
              )
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="M14 4.5 19.5 10l-2 2-1.5-.5-4 4 .5 1.5-2 2L5 13.5l2-2 1.5.5 4-4L12 6.5l2-2Z"
              />
              <path
                d="m8.5 15.5-4 4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useMenuStore,
} from '../stores/menu'

const menuStore =
  useMenuStore()
</script>

<style scoped>
.sidebar {
  width:
    clamp(
      220px,
      20vw,
      300px
    );
  flex-shrink: 0;

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

.menu-group.pinned {
  padding-bottom: 16px;
  border-bottom:
    1px solid
    rgba(
      141,
      80,
      104,
      0.14
    );
}

.group-title {
  min-height: 20px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content:
    space-between;
  gap: 8px;

  font-size: 12px;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-group.pinned
.group-title {
  color: #9a4e69;
}

.pinned-count {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background:
    rgba(
      255,
      187,
      221,
      0.8
    );
  color: #8b4960;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
}

.menu-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.menu-item {
  min-height: 42px;
  background-color:
    rgba(
      255,
      255,
      255,
      0.3
    );
  border-radius: 8px;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.menu-item:hover {
  background-color:
    rgba(
      255,
      255,
      255,
      0.6
    );
  transform:
    translateX(5px);
}

.menu-item.active {
  background-color: #ffbbdd;
  color: white;
  box-shadow:
    0 4px 8px
    rgba(
      0,
      0,
      0,
      0.2
    );
}

.menu-item-main {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  padding: 10px 6px 10px 14px;

  display: flex;
  align-items: center;

  text-align: left;
  color: inherit;
  font: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.menu-item-name {
  min-width: 0;
  overflow-wrap: anywhere;
}

.pin-button {
  flex: 0 0 38px;
  width: 38px;
  border: 0;
  background: transparent;
  color:
    rgba(
      80,
      80,
      90,
      0.42
    );
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform:
    scale(0.9);

  transition:
    opacity 0.2s,
    transform 0.2s,
    color 0.2s,
    background-color 0.2s;
}

.menu-item:hover
.pin-button,
.pin-button.active,
.pin-button:focus-visible {
  opacity: 1;
  transform:
    scale(1);
}

.pin-button:hover {
  color: #a85070;
  background:
    rgba(
      255,
      255,
      255,
      0.36
    );
}

.pin-button.active {
  color: #a13f63;
}

.menu-item.active
.pin-button {
  color:
    rgba(
      255,
      255,
      255,
      0.82
    );
}

.menu-item.active
.pin-button:hover {
  color: white;
  background:
    rgba(
      255,
      255,
      255,
      0.18
    );
}
</style>
