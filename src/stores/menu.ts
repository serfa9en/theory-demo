import {
  computed,
  ref,
} from 'vue'

import {
  defineStore,
} from 'pinia'

import menuData from '../data/menuItems.json'

import type {
  MenuGroup,
  MenuItem,
} from '../types/menuItem'

export const useMenuStore =
  defineStore('menu', () => {
    const menuGroups =
      ref<MenuGroup[]>(
        menuData as MenuGroup[],
      )

    const selectedItemId =
      ref<number | null>(null)

    const selectedItem =
      computed<MenuItem | null>(() => {
        if (
          selectedItemId.value === null
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
                item.id ===
                selectedItemId.value,
            )

          if (item) {
            return item
          }
        }

        return null
      })

    const selectItem = (
      id: number,
    ) => {
      selectedItemId.value = id
    }

    const clearSelection = () => {
      selectedItemId.value = null
    }

    return {
      menuGroups,
      selectedItemId,
      selectedItem,

      selectItem,
      clearSelection,
    }
  })
