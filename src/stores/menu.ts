import {
  computed,
  ref,
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

      const menuGroups =
        computed<MenuGroup[]>(
          () => {
            const groups =
              baseMenuGroups.value

            if (
              !customContentStore
                .topics.length
            ) {
              return groups
            }

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

            return [
              ...groups,
              {
                id: 'custom',
                title: 'Мои темы',
                items: customItems,
              },
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

            for (
              const group
              of menuGroups.value
            ) {
              const item =
                group.items.find(
                  item =>
                    item.id
                    ===
                    selectedItemId.value,
                )

              if (item) {
                return item
              }
            }

            return null
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

      return {
        menuGroups,
        selectedItemId,
        selectedItem,
        selectItem,
        clearSelection,
      }
    },
  )
