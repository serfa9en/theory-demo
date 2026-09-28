import type { TopicQuestions } from '@/types/question'

export const htmlCssJavascriptQuestions: TopicQuestions = {
  id: 1,
  slug: 'html-css-javascript',
  title: 'HTML, CSS, JavaScript',
  junior: {
    sections: [
      {
        id: 'html',
        title: 'HTML',

        questions: [
          {
            id: 'html-what-is-html',
            title:
              'Что такое HTML? Структура HTML-документа (<!DOCTYPE>, <html>, <head>, <body>)?',
            shortAnswer:
              'HTML — это язык разметки, который описывает структуру веб-страницы с помощью элементов и тегов. Базовый документ состоит из DOCTYPE, html, head и body.',

            fullAnswer: `
**HTML (HyperText Markup Language)** — это язык разметки для создания веб-страниц.

Он описывает структуру контента с помощью тегов.

**Базовая структура:**

\`\`\`html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>Заголовок страницы</title>
</head>
<body>
  <!-- Контент -->
</body>
</html>
\`\`\`

**Ключевые моменты:**

- DOCTYPE сообщает браузеру версию HTML
- html — корневой элемент
- head содержит метаданные
- body содержит отображаемый контент
            `.trim(),
          },

          {
            id: 'html-block-inline',

            title:
              'Чем отличаются блочные и строчные элементы?',
            shortAnswer:
              'Блочные элементы обычно занимают доступную ширину и начинаются с новой строки, а строчные занимают только необходимое место внутри строки.',
            fullAnswer: `
**Блочные элементы** обычно занимают доступную ширину и начинаются с новой строки.

**Строчные элементы** располагаются внутри строки и занимают ширину своего содержимого.

Примеры блочных элементов:

- div
- p
- section

Примеры строчных:

- span
- a
- strong

Поведение элемента также можно менять через свойство CSS display.
            `.trim(),
          },
        ],
      },

      {
        id: 'css',
        title: 'CSS',

        questions: [
          {
            id: 'css-box-model',

            title:
              'Что такое Box Model? Из чего состоит (content, padding, border, margin)?',

            shortAnswer:
              'Box Model описывает размеры элемента: content, padding, border и margin.',

            fullAnswer: `
**Box Model** — модель, по которой браузер рассчитывает размеры элемента.

Она состоит из:

1. Content
2. Padding
3. Border
4. Margin

\`\`\`css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
\`\`\`
            `.trim(),
          },
        ],
      },

      {
        id: 'javascript',
        title: 'JavaScript',

        questions: [
          {
            id: 'js-data-types',

            title:
              'Какие типы данных есть в JavaScript?',

            shortAnswer:
              'В JavaScript есть семь примитивных типов: string, number, boolean, null, undefined, symbol и bigint. Также есть ссылочный тип object.',

            fullAnswer: `
В JavaScript есть **примитивные** и **ссылочные** значения.

Примитивы:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Ссылочный тип:

- object

\`\`\`js
const name = 'Alex'
const age = 30
const active = true

const user = {
  name: 'Alex'
}
\`\`\`
            `.trim(),
          },
        ],
      },
    ],
  },

  middle: {
    sections: [
      {
        id: 'html-css',
        title: 'HTML & CSS',

        questions: [
          {
            id: 'css-specificity',

            title:
              'Что такое специфичность (specificity) селекторов?',

            shortAnswer:
              'Специфичность определяет, какое CSS-правило имеет приоритет, когда несколько селекторов применяются к одному элементу.',

            fullAnswer: `
Специфичность определяет приоритет CSS-селекторов.

Условно приоритет увеличивается так:

- селектор элемента
- class / attribute / pseudo-class
- id
- inline styles

При одинаковой специфичности выигрывает правило, объявленное позже.
            `.trim(),
          },
        ],
      },

      {
        id: 'javascript',
        title: 'JavaScript',

        questions: [
          {
            id: 'js-event-loop',

            title:
              'Как работает Event Loop? Чем макротаски отличаются от микротасок?',

            shortAnswer:
              'Event Loop координирует выполнение синхронного кода и очередей задач. После текущего call stack сначала выполняются microtasks, например Promise callbacks, а затем macrotasks вроде setTimeout.',

            fullAnswer: `
**Event Loop** управляет выполнением асинхронных задач JavaScript.

Упрощённо:

1. выполняется синхронный код;
2. освобождается Call Stack;
3. выполняются microtasks;
4. браузер может выполнить рендер;
5. выполняется следующая macrotask.

\`\`\`js
console.log('1')

setTimeout(() => {
  console.log('2')
}, 0)

Promise.resolve().then(() => {
  console.log('3')
})

console.log('4')

// 1
// 4
// 3
// 2
\`\`\`
            `.trim(),
          },
        ],
      },
    ],
  },
}
