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

interface QuestionOverride {
  title: string
  fullAnswer: string
  shortAnswer: string
}

interface StoredCustomContent {
  version: 3
  customTopics: TopicQuestions[]
  additions: Record<
    string,
    TopicAdditions
  >
  overrides: Record<
    string,
    QuestionOverride
  >
}

const emptyAdditions = ():
  TopicAdditions => ({
    junior: [],
    middle: [],
  })

function emptyState():
  StoredCustomContent {
  return {
    version: 3,
    customTopics: [],
    additions: {},
    overrides: {},
  }
}

function loadCustomContent():
  StoredCustomContent {
  if (
    typeof window === 'undefined'
  ) {
    return emptyState()
  }

  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY,
      )

    if (!raw) {
      return emptyState()
    }

    const parsed =
      JSON.parse(raw)

    // v1: в storage лежал просто массив
    // пользовательских тем.
    if (Array.isArray(parsed)) {
      return {
        version: 3,
        customTopics:
          parsed as TopicQuestions[],
        additions: {},
        overrides: {},
      }
    }

    if (
      parsed
      && typeof parsed === 'object'
    ) {
      return {
        version: 3,
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
        overrides:
          parsed.overrides
          && typeof parsed.overrides
            === 'object'
            ? parsed.overrides
            : {},
      }
    }
  } catch {
    return emptyState()
  }

  return emptyState()
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

function applyOverride(
  question: Question,
  overrides: Record<
    string,
    QuestionOverride
  >,
): Question {
  const override =
    overrides[question.id]

  if (!override) {
    return question
  }

  return {
    ...question,
    ...override,
  }
}

function cloneSections(
  sections: QuestionSection[],
  overrides: Record<
    string,
    QuestionOverride
  >,
): QuestionSection[] {
  return sections.map(
    section => ({
      ...section,
      questions:
        section.questions.map(
          question =>
            applyOverride(
              question,
              overrides,
            ),
        ),
    }),
  )
}

function withCustomSection(
  sections: QuestionSection[],
  questions: Question[],
): QuestionSection[] {
  if (!questions.length) {
    return sections
  }

  return [
    ...sections,
    {
      id: 'custom-questions',
      title: 'Мои вопросы',
      questions: [
        ...questions,
      ],
    },
  ]
}

export const useCustomContentStore =
  defineStore(
    'customContent',
    () => {
      const stored =
        loadCustomContent()

      const topics =
        ref<TopicQuestions[]>(
          stored.customTopics,
        )

      const additions =
        ref<
          Record<
            string,
            TopicAdditions
          >
        >(
          stored.additions,
        )

      const overrides =
        ref<
          Record<
            string,
            QuestionOverride
          >
        >(
          stored.overrides,
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

      const getTopic = (
        topicId: number,
      ) => {
        return getCustomTopic(
          topicId,
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
          ensureAdditions(
            topicId,
          )[grade].push(
            question,
          )

          return question
        }

        return null
      }

      const updateQuestion = (
        topicId: number,
        questionId: string,
        title: string,
        fullAnswer: string,
        shortAnswer: string,
      ) => {
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
          return false
        }

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
              const question =
                section.questions.find(
                  item =>
                    item.id
                    === questionId,
                )

              if (question) {
                question.title =
                  normalizedTitle
                question.fullAnswer =
                  normalizedFull
                question.shortAnswer =
                  normalizedShort
                return true
              }
            }
          }
        }

        const topicAdditions =
          additions.value[
            String(topicId)
          ]

        if (topicAdditions) {
          const customQuestion =
            [
              ...topicAdditions.junior,
              ...topicAdditions.middle,
            ].find(
              item =>
                item.id
                === questionId,
            )

          if (customQuestion) {
            customQuestion.title =
              normalizedTitle
            customQuestion.fullAnswer =
              normalizedFull
            customQuestion.shortAnswer =
              normalizedShort
            return true
          }
        }

        const builtInTopic =
          getTopicQuestions(
            topicId,
          )

        if (builtInTopic) {
          const exists =
            (
              [
                ...builtInTopic
                  .junior
                  .sections,
                ...builtInTopic
                  .middle
                  .sections,
              ]
              .flatMap(
                section =>
                  section.questions,
              )
              .some(
                question =>
                  question.id
                  === questionId,
              )
            )

          if (exists) {
            overrides.value[
              questionId
            ] = {
              title:
                normalizedTitle,
              fullAnswer:
                normalizedFull,
              shortAnswer:
                normalizedShort,
            }

            return true
          }
        }

        return false
      }

      const resetQuestionOverride = (
        questionId: string,
      ) => {
        if (
          overrides.value[
            questionId
          ]
        ) {
          delete overrides.value[
            questionId
          ]
        }
      }

      const hasOverride = (
        questionId: string,
      ) => {
        return Boolean(
          overrides.value[
            questionId
          ],
        )
      }

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
                cloneSections(
                  baseTopic
                    .junior
                    .sections,
                  overrides.value,
                ),
                topicAdditions
                  .junior,
              ),
          },
          middle: {
            sections:
              withCustomSection(
                cloneSections(
                  baseTopic
                    .middle
                    .sections,
                  overrides.value,
                ),
                topicAdditions
                  .middle,
              ),
          },
        }
      }

      const allTopicsWithCustomQuestions =
        computed<
          TopicQuestions[]
        >(() => {
          const mergedBuiltIn =
            allTopics
              .map(
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

        const topicAdditions =
          additions.value[
            String(topicId)
          ]

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
          overrides,
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
              version: 3,
              customTopics:
                topics.value,
              additions:
                additions.value,
              overrides:
                overrides.value,
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
        overrides,
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
        updateQuestion,
        resetQuestionOverride,
        hasOverride,
        deleteQuestion,
        deleteTopic,
      }
    },
  )
