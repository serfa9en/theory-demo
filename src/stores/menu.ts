import {
  computed,
  ref,
  watch,
} from 'vue'

import {
  defineStore,
} from 'pinia'

import menuData
  from '../data/menuItems.json'

import {
  useCustomContentStore,
} from './customContent'

import type {
  MenuGroup,
  MenuItem,
} from '../types/menuItem'

const PINNED_STORAGE_KEY =
  'theory-demo:pinned-topics'

function loadPinnedIds():
  number[] {
  if (
    typeof window === 'undefined'
  ) {
    return []
  }

  try {
    const raw =
      window.localStorage.getItem(
        PINNED_STORAGE_KEY,
      )

    if (!raw) {
      return []
    }

    const parsed =
      JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(
      (id): id is number =>
        typeof id === 'number',
    )
  } catch {
    return []
  }
}

export const useMenuStore =
  defineStore(
    'menu',
    () => {
      const customContentStore =
        useCustomContentStore()

      const baseMenuGroups =
        ref<MenuGroup[]>(
          menuData as MenuGroup[],
        )

      const selectedItemId =
        ref<number | null>(null)

      const pinnedItemIds =
        ref<number[]>(
          loadPinnedIds(),
        )

      const allMenuGroups =
        computed<MenuGroup[]>(
          () => {
            const groups = [
              ...baseMenuGroups.value,
            ]

            if (
              customContentStore
                .topics.length
            ) {
              const customItems =
                customContentStore.topics
                  .map<MenuItem>(
                    topic => ({
                      id: topic.id,
                      name: topic.title,
                      juniorInfo: {},
                      middleInfo: {},
                    }),
                  )

              groups.push({
                id: 'custom',
                title: 'Мои темы',
                items: customItems,
              })
            }

            return groups
          },
        )

      const allItems =
        computed<MenuItem[]>(
          () => {
            return allMenuGroups.value
              .flatMap(
                group =>
                  group.items,
              )
          },
        )

      const validPinnedIds =
        computed<number[]>(
          () => {
            const existingIds =
              new Set(
                allItems.value.map(
                  item => item.id,
                ),
              )

            return pinnedItemIds.value
              .filter(
                id =>
                  existingIds.has(id),
              )
          },
        )

      const pinnedItems =
        computed<MenuItem[]>(
          () => {
            const byId =
              new Map(
                allItems.value.map(
                  item => [
                    item.id,
                    item,
                  ],
                ),
              )

            return validPinnedIds.value
              .map(
                id => byId.get(id),
              )
              .filter(
                (
                  item,
                ): item is MenuItem =>
                  item !== undefined,
              )
          },
        )

      const menuGroups =
        computed<MenuGroup[]>(
          () => {
            const pinnedIds =
              new Set(
                validPinnedIds.value,
              )

            const regularGroups =
              allMenuGroups.value
                .map(group => ({
                  ...group,
                  items:
                    group.items.filter(
                      item =>
                        !pinnedIds.has(
                          item.id,
                        ),
                    ),
                }))
                .filter(
                  group =>
                    group.items.length > 0,
                )

            if (
              pinnedItems.value.length
              === 0
            ) {
              return regularGroups
            }

            return [
              {
                id: 'pinned',
                title: 'Закреплённые',
                items:
                  pinnedItems.value,
              },
              ...regularGroups,
            ]
          },
        )

      const selectedItem =
        computed<MenuItem | null>(
          () => {
            if (
              selectedItemId.value
              === null
            ) {
              return null
            }

            return (
              allItems.value.find(
                item =>
                  item.id
                  ===
                  selectedItemId.value,
              )
              ?? null
            )
          },
        )

      const selectItem = (
        id: number,
      ) => {
        selectedItemId.value =
          id
      }

      const clearSelection = () => {
        selectedItemId.value =
          null
      }

      const isPinned = (
        id: number,
      ) => {
        return validPinnedIds.value
          .includes(id)
      }

      const pinItem = (
        id: number,
      ) => {
        if (
          isPinned(id)
        ) {
          return
        }

        const exists =
          allItems.value.some(
            item =>
              item.id === id,
          )

        if (!exists) {
          return
        }

        pinnedItemIds.value = [
          ...pinnedItemIds.value,
          id,
        ]
      }

      const unpinItem = (
        id: number,
      ) => {
        pinnedItemIds.value =
          pinnedItemIds.value
            .filter(
              pinnedId =>
                pinnedId !== id,
            )
      }

      const togglePin = (
        id: number,
      ) => {
        if (isPinned(id)) {
          unpinItem(id)
          return
        }

        pinItem(id)
      }

      watch(
        validPinnedIds,
        ids => {
          pinnedItemIds.value = [
            ...ids,
          ]

          if (
            typeof window
            === 'undefined'
          ) {
            return
          }

          window.localStorage.setItem(
            PINNED_STORAGE_KEY,
            JSON.stringify(ids),
          )
        },
        {
          deep: true,
        },
      )

      return {
        menuGroups,
        selectedItemId,
        selectedItem,
        pinnedItemIds,
        pinnedItems,
        selectItem,
        clearSelection,
        isPinned,
        pinItem,
        unpinItem,
        togglePin,
      }
    },
  )
