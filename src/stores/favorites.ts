import {
  computed,
  ref,
  watch,
} from 'vue'

import {
  defineStore,
} from 'pinia'

import {
  useCustomContentStore,
} from './customContent'

import type {
  Grade,
  Question,
} from '../types/question'

const STORAGE_KEY =
  'theory-demo:favorites'

export interface FavoriteQuestion {
  question: Question
  topicId: number
  topicTitle: string
  grade: Grade
  sectionTitle: string
}

function loadFavoriteIds():
  string[] {
  if (
    typeof window === 'undefined'
  ) {
    return []
  }

  try {
    const value =
      window.localStorage.getItem(
        STORAGE_KEY,
      )

    if (!value) {
      return []
    }

    const parsed =
      JSON.parse(value)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(
      (id): id is string =>
        typeof id === 'string',
    )
  } catch {
    return []
  }
}

export const useFavoritesStore =
  defineStore(
    'favorites',
    () => {
      const customContentStore =
        useCustomContentStore()

      const favoriteIds =
        ref<string[]>(
          loadFavoriteIds(),
        )

      const questionIndex =
        computed(() => {
          const index =
            new Map<
              string,
              FavoriteQuestion
            >()

          for (
            const topic
            of customContentStore
              .allTopicsWithCustomQuestions
          ) {
            const grades: Grade[] = [
              'junior',
              'middle',
            ]

            for (
              const grade
              of grades
            ) {
              for (
                const section
                of topic[grade].sections
              ) {
                for (
                  const question
                  of section.questions
                ) {
                  index.set(
                    question.id,
                    {
                      question,
                      topicId:
                        topic.id,
                      topicTitle:
                        topic.title,
                      grade,
                      sectionTitle:
                        section.title,
                    },
                  )
                }
              }
            }
          }

          return index
        })

      const favoriteIdSet =
        computed(() => {
          return new Set(
            favoriteIds.value,
          )
        })

      const favoriteQuestions =
        computed<
          FavoriteQuestion[]
        >(() => {
          return favoriteIds.value
            .map(id =>
              questionIndex.value
                .get(id),
            )
            .filter(
              (
                item,
              ): item is FavoriteQuestion =>
                item !== undefined,
            )
        })

      const count =
        computed(
          () =>
            favoriteQuestions.value
              .length,
        )

      const isFavorite = (
        questionId: string,
      ) => {
        return favoriteIdSet.value
          .has(questionId)
      }

      const toggleFavorite = (
        questionId: string,
      ) => {
        if (
          !questionIndex.value.has(
            questionId,
          )
        ) {
          return
        }

        if (
          isFavorite(questionId)
        ) {
          favoriteIds.value =
            favoriteIds.value
              .filter(
                id =>
                  id !== questionId,
              )

          return
        }

        favoriteIds.value = [
          questionId,
          ...favoriteIds.value,
        ]
      }

      const removeFavorite = (
        questionId: string,
      ) => {
        favoriteIds.value =
          favoriteIds.value
            .filter(
              id =>
                id !== questionId,
            )
      }

      watch(
        favoriteIds,
        ids => {
          if (
            typeof window
            === 'undefined'
          ) {
            return
          }

          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(ids),
          )
        },
        {
          deep: true,
        },
      )

      return {
        favoriteIds,
        favoriteQuestions,
        count,
        isFavorite,
        toggleFavorite,
        removeFavorite,
      }
    },
  )
