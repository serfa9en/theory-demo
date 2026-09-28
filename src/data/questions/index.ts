import { topic1Questions } from './topic-1'
import { topic2Questions } from './topic-2'
import { topic3Questions } from './topic-3'
import { topic4Questions } from './topic-4'
import { topic5Questions } from './topic-5'
import { topic6Questions } from './topic-6'
import { topic7Questions } from './topic-7'
import { topic8Questions } from './topic-8'
import { topic9Questions } from './topic-9'
import { topic10Questions } from './topic-10'
import { topic11Questions } from './topic-11'
import { topic12Questions } from './topic-12'
import { topic13Questions } from './topic-13'
import { topic14Questions } from './topic-14'
import { topic15Questions } from './topic-15'
import { topic16Questions } from './topic-16'
import { topic17Questions } from './topic-17'
import { topic18Questions } from './topic-18'
import { topic19Questions } from './topic-19'
import { topic20Questions } from './topic-20'
import { topic21Questions } from './topic-21'
import { topic22Questions } from './topic-22'
import { topic23Questions } from './topic-23'

import type { TopicQuestions } from '../../types/question'

export const questionsByTopic: Record<number, TopicQuestions> = {
  1: topic1Questions,
  2: topic2Questions,
  3: topic3Questions,
  4: topic4Questions,
  5: topic5Questions,
  6: topic6Questions,
  7: topic7Questions,
  8: topic8Questions,
  9: topic9Questions,
  10: topic10Questions,
  11: topic11Questions,
  12: topic12Questions,
  13: topic13Questions,
  14: topic14Questions,
  15: topic15Questions,
  16: topic16Questions,
  17: topic17Questions,
  18: topic18Questions,
  19: topic19Questions,
  20: topic20Questions,
  21: topic21Questions,
  22: topic22Questions,
  23: topic23Questions,
}

export const allTopics = Object.values(questionsByTopic)

export function getTopicQuestions(
  topicId: number,
): TopicQuestions | null {
  return questionsByTopic[topicId] ?? null
}
