import {
  computed,
  ref,
  watch,
} from 'vue'

import {
  defineStore,
} from 'pinia'

import type {
  Grade,
  Question,
  TopicQuestions,
} from '../types/question'

const STORAGE_KEY =
  'theory-demo:custom-topics'

function loadTopics(): TopicQuestions[] {
  if (
    typeof window === 'undefined'
  ) {
    return []
  }

  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY,
      )

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed as TopicQuestions[]
  } catch {
    return []
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

export const useCustomContentStore =
  defineStore(
    'customContent',
    () => {
      const topics =
        ref<TopicQuestions[]>(
          loadTopics(),
        )

      const hasTopics =
        computed(
          () => topics.value.length > 0,
        )

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
            slug: `custom-topic-${id}`,
            title: normalizedTitle,
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

      const getTopic = (
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

      const addQuestion = (
        topicId: number,
        grade: Grade,
        title: string,
        fullAnswer: string,
        shortAnswer: string,
      ): Question | null => {
        const topic =
          getTopic(topicId)

        if (!topic) {
          return null
        }

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

        let section =
          topic[grade].sections[0]

        if (!section) {
          section = {
            id: 'общее',
            title: 'Общее',
            questions: [],
          }

          topic[grade].sections.push(
            section,
          )
        }

        const question: Question = {
          id:
            createQuestionId(
              topicId,
            ),
          title: normalizedTitle,
          fullAnswer:
            normalizedFull,
          shortAnswer:
            normalizedShort,
        }

        section.questions.push(
          question,
        )

        return question
      }

      const deleteQuestion = (
        topicId: number,
        questionId: string,
      ) => {
        const topic =
          getTopic(topicId)

        if (!topic) {
          return
        }

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
            section.questions =
              section.questions.filter(
                question =>
                  question.id
                  !== questionId,
              )
          }
        }
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
        topics,
        value => {
          if (
            typeof window
            === 'undefined'
          ) {
            return
          }

          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(value),
          )
        },
        {
          deep: true,
        },
      )

      return {
        topics,
        hasTopics,
        createTopic,
        getTopic,
        addQuestion,
        deleteQuestion,
        deleteTopic,
      }
    },
  )
