export type Grade = 'junior' | 'middle'

export interface Question {
  id: string
  title: string
  fullAnswer: string
  shortAnswer: string
}

export interface QuestionSection {
  id: string
  title: string
  questions: Question[]
}

export interface GradeQuestions {
  sections: QuestionSection[]
}

export interface TopicQuestions {
  id: number
  slug: string
  title: string
  junior: GradeQuestions
  middle: GradeQuestions
}
