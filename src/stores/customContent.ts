import {
  computed,
  ref,
  watch,
} from 'vue'

import {
  defineStore,
} from 'pinia'

import {
  allTopics,
  getTopicQuestions,
} from '../data/questions'

import type {
  Grade,
  Question,
  QuestionSection,
  TopicQuestions,
} from '../types/question'

const STORAGE_KEY =
  'theory-demo:custom-topics'

interface TopicAdditions {
  junior: Question[]
  middle: Question[]
}

interface StoredCustomContent {
  version: 2
  customTopics: TopicQuestions[]
  additions: Record<
    string,
    TopicAdditions
  >
}

const emptyAdditions = ():
  TopicAdditions => ({
    junior: [],
    middle: [],
  })

function loadCustomContent():
  StoredCustomContent {
  if (
    typeof window === 'undefined'
  ) {
    return {
      version: 2,
      customTopics: [],
      additions: {},
    }
  }

  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY,
      )

    if (!raw) {
      return {
        version: 2,
        customTopics: [],
        additions: {},
      }
    }

    const parsed =
      JSON.parse(raw)

    // Совместимость с предыдущей версией,
    // где в localStorage лежал просто массив
    // пользовательских тем.
    if (Array.isArray(parsed)) {
      return {
        version: 2,
        customTopics:
          parsed as TopicQuestions[],
        additions: {},
      }
    }

    if (
      parsed
      && typeof parsed === 'object'
    ) {
      return {
        version: 2,
        customTopics:
          Array.isArray(
            parsed.customTopics,
          )
            ? parsed.customTopics
            : [],
        additions:
          parsed.additions
          && typeof parsed.additions
            === 'object'
            ? parsed.additions
            : {},
      }
    }
  } catch {
    // Если localStorage повреждён,
    // приложение просто стартует
    // с пустыми пользовательскими данными.
  }

  return {
    version: 2,
    customTopics: [],
    additions: {},
  }
}

function createTopicId(
  topics: TopicQuestions[],
) {
  const maxExistingId =
    topics.reduce(
      (max, topic) =>
        Math.max(max, topic.id),
      9999,
    )

  return maxExistingId + 1
}

function createQuestionId(
  topicId: number,
) {
  return [
    'custom',
    topicId,
    Date.now(),
    Math.random()
      .toString(36)
      .slice(2, 8),
  ].join('-')
}

function cloneSections(
  sections: QuestionSection[],
): QuestionSection[] {
  return sections.map(
    section => ({
      ...section,
      questions: [
        ...section.questions,
      ],
    }),
  )
}

function withCustomSection(
  sections: QuestionSection[],
  questions: Question[],
): QuestionSection[] {
  const cloned =
    cloneSections(sections)

  if (!questions.length) {
    return cloned
  }

  cloned.push({
    id: 'custom-questions',
    title: 'Мои вопросы',
    questions: [
      ...questions,
    ],
  })

  return cloned
}

export const useCustomContentStore =
  defineStore(
    'customContent',
    () => {
      const stored =
        loadCustomContent()

      /**
       * Свои полностью созданные темы.
       *
       * Имя `topics` сохранено специально,
       * чтобы существующие menu.ts / Sidebar
       * продолжили работать без изменений.
       */
      const topics =
        ref<TopicQuestions[]>(
          stored.customTopics,
        )

      /**
       * Вопросы, добавленные пользователем
       * во встроенные темы.
       *
       * Ключ — id встроенной темы.
       */
      const additions =
        ref<
          Record<
            string,
            TopicAdditions
          >
        >(
          stored.additions,
        )

      const hasTopics =
        computed(
          () =>
            topics.value.length > 0,
        )

      const builtInTopics =
        computed(
          () => allTopics,
        )

      const getCustomTopic = (
        topicId: number,
      ) => {
        return (
          topics.value.find(
            topic =>
              topic.id === topicId,
          )
          ?? null
        )
      }

      const isCustomTopic = (
        topicId: number,
      ) => {
        return (
          getCustomTopic(topicId)
          !== null
        )
      }

      const isBuiltInTopic = (
        topicId: number,
      ) => {
        return (
          getTopicQuestions(topicId)
          !== null
        )
      }

      const createTopic = (
        title: string,
      ) => {
        const normalizedTitle =
          title.trim()

        if (!normalizedTitle) {
          return null
        }

        const id =
          createTopicId(
            topics.value,
          )

        const topic:
          TopicQuestions = {
            id,
            slug:
              `custom-topic-${id}`,
            title:
              normalizedTitle,
            junior: {
              sections: [
                {
                  id: 'общее',
                  title: 'Общее',
                  questions: [],
                },
              ],
            },
            middle: {
              sections: [
                {
                  id: 'общее',
                  title: 'Общее',
                  questions: [],
                },
              ],
            },
          }

        topics.value.push(topic)

        return topic
      }

      /**
       * Старое имя метода сохраняем:
       * оно возвращает только полностью
       * пользовательскую тему.
       */
      const getTopic = (
        topicId: number,
      ) => {
        return getCustomTopic(
          topicId,
        )
      }

      const ensureAdditions = (
        topicId: number,
      ) => {
        const key =
          String(topicId)

        if (!additions.value[key]) {
          additions.value[key] =
            emptyAdditions()
        }

        return additions.value[key]
      }

      const addQuestion = (
        topicId: number,
        grade: Grade,
        title: string,
        fullAnswer: string,
        shortAnswer: string,
      ): Question | null => {
        const normalizedTitle =
          title.trim()

        const normalizedFull =
          fullAnswer.trim()

        const normalizedShort =
          shortAnswer.trim()

        if (
          !normalizedTitle
          || !normalizedFull
          || !normalizedShort
        ) {
          return null
        }

        const question: Question = {
          id:
            createQuestionId(
              topicId,
            ),
          title:
            normalizedTitle,
          fullAnswer:
            normalizedFull,
          shortAnswer:
            normalizedShort,
        }

        const customTopic =
          getCustomTopic(
            topicId,
          )

        if (customTopic) {
          let section =
            customTopic[grade]
              .sections[0]

          if (!section) {
            section = {
              id: 'общее',
              title: 'Общее',
              questions: [],
            }

            customTopic[grade]
              .sections.push(
                section,
              )
          }

          section.questions.push(
            question,
          )

          return question
        }

        if (
          isBuiltInTopic(topicId)
        ) {
          const topicAdditions =
            ensureAdditions(
              topicId,
            )

          topicAdditions[grade].push(
            question,
          )

          return question
        }

        return null
      }

      /**
       * Возвращает тему уже с подмешанными
       * пользовательскими вопросами.
       */
      const getTopicWithCustomQuestions = (
        topicId: number,
      ): TopicQuestions | null => {
        const customTopic =
          getCustomTopic(
            topicId,
          )

        if (customTopic) {
          return customTopic
        }

        const baseTopic =
          getTopicQuestions(
            topicId,
          )

        if (!baseTopic) {
          return null
        }

        const topicAdditions =
          additions.value[
            String(topicId)
          ]
          ?? emptyAdditions()

        return {
          ...baseTopic,
          junior: {
            sections:
              withCustomSection(
                baseTopic
                  .junior
                  .sections,
                topicAdditions
                  .junior,
              ),
          },
          middle: {
            sections:
              withCustomSection(
                baseTopic
                  .middle
                  .sections,
                topicAdditions
                  .middle,
              ),
          },
        }
      }

      /**
       * Все темы в одном месте:
       * встроенные уже с пользовательскими
       * вопросами + полностью свои темы.
       */
      const allTopicsWithCustomQuestions =
        computed<
          TopicQuestions[]
        >(() => {
          const mergedBuiltIn =
            allTopics.map(
              topic =>
                getTopicWithCustomQuestions(
                  topic.id,
                ),
            )
            .filter(
              (
                topic,
              ): topic is TopicQuestions =>
                topic !== null,
            )

          return [
            ...mergedBuiltIn,
            ...topics.value,
          ]
        })

      const deleteQuestion = (
        topicId: number,
        questionId: string,
      ) => {
        const customTopic =
          getCustomTopic(
            topicId,
          )

        if (customTopic) {
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
              of customTopic[grade]
                .sections
            ) {
              section.questions =
                section.questions
                  .filter(
                    question =>
                      question.id
                      !== questionId,
                  )
            }
          }

          return
        }

        const key =
          String(topicId)

        const topicAdditions =
          additions.value[key]

        if (!topicAdditions) {
          return
        }

        topicAdditions.junior =
          topicAdditions.junior
            .filter(
              question =>
                question.id
                !== questionId,
            )

        topicAdditions.middle =
          topicAdditions.middle
            .filter(
              question =>
                question.id
                !== questionId,
            )
      }

      const deleteTopic = (
        topicId: number,
      ) => {
        // Удаляем только пользовательские
        // темы. Встроенную тему удалить
        // через этот store нельзя.
        topics.value =
          topics.value.filter(
            topic =>
              topic.id !== topicId,
          )
      }

      watch(
        [
          topics,
          additions,
        ],
        () => {
          if (
            typeof window
            === 'undefined'
          ) {
            return
          }

          const payload:
            StoredCustomContent = {
              version: 2,
              customTopics:
                topics.value,
              additions:
                additions.value,
            }

          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(payload),
          )
        },
        {
          deep: true,
        },
      )

      return {
        topics,
        additions,
        hasTopics,
        builtInTopics,
        allTopicsWithCustomQuestions,
        createTopic,
        getTopic,
        getCustomTopic,
        getTopicWithCustomQuestions,
        isCustomTopic,
        isBuiltInTopic,
        addQuestion,
        deleteQuestion,
        deleteTopic,
      }
    },
  )
