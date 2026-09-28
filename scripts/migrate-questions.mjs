import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const root = path.resolve(__dirname, '..')

const dataDir = path.join(root, 'src', 'data')

const menuPath = path.join(dataDir, 'menuItems.json')

const outputDir = path.join(
  dataDir,
  'questions',
)

const registryPath = path.join(
  outputDir,
  'index.ts',
)

const menuData = JSON.parse(
  fs.readFileSync(menuPath, 'utf8'),
)

fs.mkdirSync(outputDir, {
  recursive: true,
})

/**
 * "1. Что такое..."
 * превращаем в
 * "Что такое..."
 */
function removeNumber(question) {
  return question
    .replace(/^\s*\d+\.\s*/, '')
    .trim()
}

/**
 * Разбиваем старую строку:
 *
 * 1. вопрос
 * 2. вопрос
 * 3. вопрос
 *
 * в нормальный массив.
 */
function parseQuestions(value) {
  if (!value) {
    return []
  }

  return value
    .split('\n')
    .map(removeNumber)
    .filter(Boolean)
}

/**
 * Для id файлов.
 */
function slugify(value) {
  return value
    .toLowerCase()

    .replace(/vue\.js/g, 'vue')
    .replace(/node\.js/g, 'nodejs')

    .replace(/html/g, 'html')
    .replace(/css/g, 'css')
    .replace(/javascript/g, 'javascript')
    .replace(/typescript/g, 'typescript')
    .replace(/pinia/g, 'pinia')
    .replace(/vuex/g, 'vuex')
    .replace(/webpack/g, 'webpack')
    .replace(/vite/g, 'vite')

    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Читаем JSON, если он существует.
 */
function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return {}
  }

  try {
    return JSON.parse(
      fs.readFileSync(filePath, 'utf8'),
    )
  } catch (error) {
    console.warn(
      `Не удалось прочитать ${filePath}`,
    )

    return {}
  }
}

function readAnswers(topicId, grade) {
  return readJsonIfExists(
    path.join(
      dataDir,
      'answers',
      grade,
      `${topicId}.json`,
    ),
  )
}

function readShortAnswers(topicId, grade) {
  return readJsonIfExists(
    path.join(
      dataDir,
      'short_answers',
      grade,
      `${topicId}.json`,
    ),
  )
}

/**
 * Экранируем содержимое для template literal.
 *
 * Нам нужно сохранить:
 * `
 * ${
 * \
 */
function escapeTemplateLiteral(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
}

function createQuestionId({
  topicId,
  grade,
  section,
  index,
}) {
  return [
    topicId,
    grade,
    slugify(section) || 'section',
    index,
  ].join('-')
}

function createSection({
  topicId,
  grade,
  sectionName,
  source,
  answers,
  shortAnswers,
  report,
}) {
  const questions = parseQuestions(
    source[sectionName],
  )

  const result = questions.map(
    (questionTitle, index) => {
      const questionNumber = index + 1

      const oldKey =
        `${sectionName}-${questionNumber}`

      const answerEntry =
        answers[oldKey]

      const shortAnswer =
        shortAnswers[oldKey]

      /**
       * ВАЖНО:
       *
       * title всегда берём из menuItems.json.
       *
       * Так мы гарантируем, что все вопросы
       * старой архитектуры попадут
       * в новую.
       */
      const fullAnswer =
        answerEntry?.answer ?? ''

      const finalShortAnswer =
        shortAnswer ?? ''

      if (!fullAnswer) {
        report.missingFull.push({
          topicId,
          grade,
          key: oldKey,
          question: questionTitle,
        })
      }

      if (!finalShortAnswer) {
        report.missingShort.push({
          topicId,
          grade,
          key: oldKey,
          question: questionTitle,
        })
      }

      return {
        id: createQuestionId({
          topicId,
          grade,
          section: sectionName,
          index: questionNumber,
        }),

        title: questionTitle,

        fullAnswer:
          fullAnswer ||
          'Подробный ответ пока не добавлен.',

        shortAnswer:
          finalShortAnswer ||
          'Краткий ответ пока не добавлен.',
      }
    },
  )

  return {
    id:
      slugify(sectionName) ||
      `section-${topicId}`,

    title: sectionName,

    questions: result,
  }
}

function createGrade({
  topicId,
  grade,
  source,
  report,
}) {
  const answers =
    readAnswers(topicId, grade)

  const shortAnswers =
    readShortAnswers(topicId, grade)

  const sections = Object
    .keys(source || {})
    .map(sectionName =>
      createSection({
        topicId,
        grade,
        sectionName,
        source,
        answers,
        shortAnswers,
        report,
      }),
    )

  return {
    sections,
  }
}

function toTs(value) {
  if (typeof value === 'string') {
    return `\`${escapeTemplateLiteral(value)}\``
  }

  if (Array.isArray(value)) {
    return `[
${value
  .map(item => `${toTs(item)},`)
  .join('\n')}
]`
  }

  if (
    value !== null &&
    typeof value === 'object'
  ) {
    return `{
${Object.entries(value)
  .map(
    ([key, child]) =>
      `${JSON.stringify(key)}: ${toTs(child)},`,
  )
  .join('\n')}
}`
  }

  return JSON.stringify(value)
}

const report = {
  totalTopics: 0,
  totalQuestions: 0,

  missingFull: [],
  missingShort: [],
}

const generatedTopics = []

for (const group of menuData) {
  for (const item of group.items) {
    report.totalTopics++

    const topic = {
      id: item.id,

      slug:
        `topic-${item.id}`,

      title: item.name,

      junior: createGrade({
        topicId: item.id,
        grade: 'junior',
        source: item.juniorInfo,
        report,
      }),

      middle: createGrade({
        topicId: item.id,
        grade: 'middle',
        source: item.middleInfo,
        report,
      }),
    }

    const juniorCount =
      topic.junior.sections.reduce(
        (sum, section) =>
          sum + section.questions.length,
        0,
      )

    const middleCount =
      topic.middle.sections.reduce(
        (sum, section) =>
          sum + section.questions.length,
        0,
      )

    report.totalQuestions +=
      juniorCount + middleCount

    const variableName =
      `topic${item.id}Questions`

    const fileName =
      `topic-${item.id}.ts`

    const content =
`import type { TopicQuestions } from '../../types/question'

export const ${variableName}: TopicQuestions = ${toTs(topic)}
`

    fs.writeFileSync(
      path.join(outputDir, fileName),
      content,
      'utf8',
    )

    generatedTopics.push({
      id: item.id,
      variableName,
      fileName,
    })

    console.log(
      `✓ ${item.id}. ${item.name}: ` +
      `${juniorCount} junior / ` +
      `${middleCount} middle`,
    )
  }
}

/**
 * Генерируем index.ts автоматически.
 */
const imports = generatedTopics
  .map(
    topic =>
      `import { ${topic.variableName} } from './${topic.fileName.replace('.ts', '')}'`,
  )
  .join('\n')

const mapEntries = generatedTopics
  .map(
    topic =>
      `  ${topic.id}: ${topic.variableName},`,
  )
  .join('\n')

const registry =
`${imports}

import type { TopicQuestions } from '../../types/question'

export const questionsByTopic: Record<number, TopicQuestions> = {
${mapEntries}
}

export const allTopics = Object.values(questionsByTopic)

export function getTopicQuestions(
  topicId: number,
): TopicQuestions | null {
  return questionsByTopic[topicId] ?? null
}
`

fs.writeFileSync(
  registryPath,
  registry,
  'utf8',
)

/**
 * Отчёт о проблемах старых данных.
 */
const reportPath = path.join(
  outputDir,
  'migration-report.json',
)

fs.writeFileSync(
  reportPath,
  JSON.stringify(report, null, 2),
  'utf8',
)

console.log('')
console.log('--------------------------')
console.log('Миграция завершена')
console.log('--------------------------')
console.log(
  `Тем: ${report.totalTopics}`,
)
console.log(
  `Вопросов: ${report.totalQuestions}`,
)
console.log(
  `Без полного ответа: ${report.missingFull.length}`,
)
console.log(
  `Без краткого ответа: ${report.missingShort.length}`,
)
console.log('')
console.log(
  'Отчёт:',
  reportPath,
)
