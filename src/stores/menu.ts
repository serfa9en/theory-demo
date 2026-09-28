import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { MenuGroup, MenuItem } from '../types/menuItem'
import menuData from '../data/menuItems.json'
// Импорт всех файлов с ответами
import juniorAnswers1 from '../data/answers/junior/1.json'
import juniorAnswers2 from '../data/answers/junior/2.json'
import juniorAnswers3 from '../data/answers/junior/3.json'
import juniorAnswers4 from '../data/answers/junior/4.json'
import juniorAnswers5 from '../data/answers/junior/5.json'
import juniorAnswers6 from '../data/answers/junior/6.json'
import juniorAnswers7 from '../data/answers/junior/7.json'
import juniorAnswers8 from '../data/answers/junior/8.json'
import juniorAnswers9 from '../data/answers/junior/9.json'
import juniorAnswers10 from '../data/answers/junior/10.json'
import juniorAnswers11 from '../data/answers/junior/11.json'
import juniorAnswers12 from '../data/answers/junior/12.json'
import juniorAnswers13 from '../data/answers/junior/13.json'
import juniorAnswers14 from '../data/answers/junior/14.json'
import juniorAnswers15 from '../data/answers/junior/15.json'
import juniorAnswers16 from '../data/answers/junior/16.json'
import juniorAnswers17 from '../data/answers/junior/17.json'
import juniorAnswers18 from '../data/answers/junior/18.json'

import middleAnswers1 from '../data/answers/middle/1.json'
import middleAnswers2 from '../data/answers/middle/2.json'
import middleAnswers3 from '../data/answers/middle/3.json'
import middleAnswers4 from '../data/answers/middle/4.json'
import middleAnswers5 from '../data/answers/middle/5.json'
import middleAnswers6 from '../data/answers/middle/6.json'
import middleAnswers7 from '../data/answers/middle/7.json'
import middleAnswers8 from '../data/answers/middle/8.json'
import middleAnswers9 from '../data/answers/middle/9.json'
import middleAnswers10 from '../data/answers/middle/10.json'
import middleAnswers11 from '../data/answers/middle/11.json'
import middleAnswers12 from '../data/answers/middle/12.json'
import middleAnswers13 from '../data/answers/middle/13.json'
import middleAnswers14 from '../data/answers/middle/14.json'
import middleAnswers15 from '../data/answers/middle/15.json'
import middleAnswers16 from '../data/answers/middle/16.json'
import middleAnswers17 from '../data/answers/middle/17.json'
import middleAnswers18 from '../data/answers/middle/18.json'
import middleAnswers19 from '../data/answers/middle/19.json'
import middleAnswers20 from '../data/answers/middle/20.json'
import middleAnswers21 from '../data/answers/middle/21.json'
import middleAnswers22 from '../data/answers/middle/22.json'
import middleAnswers23 from '../data/answers/middle/23.json'

// Импорт кратких ответов
import juniorShort1 from '../data/short_answers/junior/1.json'
import juniorShort2 from '../data/short_answers/junior/2.json'
// ... (добавьте все 23 файла)

import middleShort1 from '../data/short_answers/middle/1.json'
import middleShort2 from '../data/short_answers/middle/2.json'
// ... (добавьте все 23 файла)

// Тип для ответов
interface Answer {
  question: string
  answer: string
}

// Маппинг файлов ответов по ID блока
const juniorAnswersMap: Record<number, Record<string, Answer>> = {
  1: juniorAnswers1 as Record<string, Answer>,
  2: juniorAnswers2 as Record<string, Answer>,
  3: juniorAnswers3 as Record<string, Answer>,
  4: juniorAnswers4 as Record<string, Answer>,
  5: juniorAnswers5 as Record<string, Answer>,
  6: juniorAnswers6 as Record<string, Answer>,
  7: juniorAnswers7 as Record<string, Answer>,
  8: juniorAnswers8 as Record<string, Answer>,
  9: juniorAnswers9 as Record<string, Answer>,
  10: juniorAnswers10 as Record<string, Answer>,
  11: juniorAnswers11 as Record<string, Answer>,
  12: juniorAnswers12 as Record<string, Answer>,
  13: juniorAnswers13 as Record<string, Answer>,
  14: juniorAnswers14 as Record<string, Answer>,
  15: juniorAnswers15 as Record<string, Answer>,
  16: juniorAnswers16 as Record<string, Answer>,
  17: juniorAnswers17 as Record<string, Answer>,
  18: juniorAnswers18 as Record<string, Answer>
}

const middleAnswersMap: Record<number, Record<string, Answer>> = {
  1: middleAnswers1 as Record<string, Answer>,
  2: middleAnswers2 as Record<string, Answer>,
  3: middleAnswers3 as Record<string, Answer>,
  4: middleAnswers4 as Record<string, Answer>,
  5: middleAnswers5 as Record<string, Answer>,
  6: middleAnswers6 as Record<string, Answer>,
  7: middleAnswers7 as Record<string, Answer>,
  8: middleAnswers8 as Record<string, Answer>,
  9: middleAnswers9 as Record<string, Answer>,
  10: middleAnswers10 as Record<string, Answer>,
  11: middleAnswers11 as Record<string, Answer>,
  12: middleAnswers12 as Record<string, Answer>,
  13: middleAnswers13 as Record<string, Answer>,
  14: middleAnswers14 as Record<string, Answer>,
  15: middleAnswers15 as Record<string, Answer>,
  16: middleAnswers16 as Record<string, Answer>,
  17: middleAnswers17 as Record<string, Answer>,
  18: middleAnswers18 as Record<string, Answer>,
  19: middleAnswers19 as Record<string, Answer>,
  20: middleAnswers20 as Record<string, Answer>,
  21: middleAnswers21 as Record<string, Answer>,
  22: middleAnswers22 as Record<string, Answer>,
  23: middleAnswers23 as Record<string, Answer>,
}

const juniorShortMap: Record<number, Record<string, string>> = {
  1: juniorShort1 as Record<string, string>,
  2: juniorShort2 as Record<string, string>,
  // ... остальные
}

const middleShortMap: Record<number, Record<string, string>> = {
  1: middleShort1 as Record<string, string>,
  2: middleShort2 as Record<string, string>,
  // ... остальные
}


export const useMenuStore = defineStore('menu', () => {
  const menuGroups = ref<MenuGroup[]>(menuData as MenuGroup[])
  const selectedItemId = ref<number | null>(null)

  const selectedItem = computed<MenuItem | null>(() => {
    if (selectedItemId.value === null) return null

    for (const group of menuGroups.value) {
      const item = group.items.find(item => item.id === selectedItemId.value)
      if (item) return item
    }

    return null
  })

  // Actions
  const getAnswer = (grade: 'junior' | 'middle', sectionName: string, questionIndex: number): Answer | null => {
    const itemId = selectedItemId.value
    if (itemId === null) return null

    const answersMap = grade === 'junior' ? juniorAnswersMap : middleAnswersMap
    const blockAnswers = answersMap[itemId]

    if (!blockAnswers) return null

    const key = `${sectionName}-${questionIndex}`
    return blockAnswers[key] || null
  }

  const getShortAnswer = (grade: 'junior' | 'middle', sectionName: string, questionIndex: number): string | null => {
    const itemId = selectedItemId.value
    if (itemId === null) return null

    const shortMap = grade === 'junior' ? juniorShortMap : middleShortMap
    const blockShorts = shortMap[itemId]

    if (!blockShorts) return null

    const key = `${sectionName}-${questionIndex}`
    return blockShorts[key] || null
  }

  const selectItem = (id: number) => {
    selectedItemId.value = id
  }

  const clearSelection = () => {
    selectedItemId.value = null
  }

  return {
    menuGroups,
    selectedItemId,
    selectedItem,
    getAnswer,
    getShortAnswer,
    selectItem,
    clearSelection
  }
})
