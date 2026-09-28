import type { TopicQuestions } from '../../types/question'

export const topic6Questions: TopicQuestions = {
"id": 6,
"slug": `topic-6`,
"title": `Vite / Webpack`,
"junior": {
"sections": [
{
"id": `основы`,
"title": `Основы`,
"questions": [
{
"id": `6-junior-основы-1`,
"title": `Что такое бандлер? Зачем он нужен?`,
"fullAnswer": `**Бандлер (сборщик)** — это инструмент, который собирает все файлы проекта (JavaScript, CSS, изображения) в один или несколько оптимизированных файлов для браузера.

**Зачем нужен:**

**1. Объединение файлов:**
В современном проекте десятки или сотни файлов. Браузеру тяжело загружать каждый отдельно — бандлер собирает их в один файл.

**2. Транспиляция:**
Браузеры не понимают новый синтаксис (TypeScript, JSX, современные JS-фичи). Бандлер преобразует код в понятный браузеру формат.

**3. Оптимизация:**
- Минификация (удаление пробелов, комментариев)
- Сжатие
- Удаление неиспользуемого кода (tree-shaking)

**4. Обработка ассетов:**
CSS, изображения, шрифты — бандлер обрабатывает всё это и подключает к проекту.

**Популярные бандлеры:**
- **Webpack** — самый популярный, гибкий, но сложный
- **Vite** — современный, быстрый, создан автором Vue
- **Rollup** — для библиотек
- **esbuild** — очень быстрый, написан на Go
- **Turbopack** — от создателей Next.js

**Пример без бандлера:**
\`\`\`html
<!-- Приходится подключать каждый файл вручную -->
<script src="utils.js"></script>
<script src="api.js"></script>
<script src="components.js"></script>
<script src="app.js"></script>
\`\`\`

**С бандлером:**
\`\`\`html
<!-- Один файл со всем кодом -->
<script src="bundle.js"></script>
\`\`\`

💡 **Для собеседования:** Бандлер — инструмент сборки проекта. Объединяет файлы, транслирует код (TypeScript → JS), оптимизирует (минификация, tree-shaking), обрабатывает ассеты. Популярные: Webpack, Vite, Rollup.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-2`,
"title": `Что такое npm / yarn / pnpm и package.json?`,
"fullAnswer": `**npm, yarn, pnpm** — это **менеджеры пакетов** для Node.js. Они устанавливают, обновляют и управляют библиотеками (зависимостями) проекта.

**npm (Node Package Manager):**
- Встроен в Node.js (устанавливается вместе с ним)
- Самый популярный
- Команды: \`npm install\`, \`npm run\`, \`npm publish\`

**yarn:**
- Создан Facebook как альтернатива npm
- Быстрее за счёт кэширования
- Команды: \`yarn add\`, \`yarn run\`

**pnpm:**
- Самый быстрый и экономный по месту
- Использует жёсткие ссылки (hard links)
- Команды: \`pnpm add\`, \`pnpm run\`

**Сравнение команд:**

| Действие | npm | yarn | pnpm |
|---|---|---|---|
| Установить всё | \`npm install\` | \`yarn\` | \`pnpm install\` |
| Добавить пакет | \`npm install lodash\` | \`yarn add lodash\` | \`pnpm add lodash\` |
| Удалить пакет | \`npm uninstall lodash\` | \`yarn remove lodash\` | \`pnpm remove lodash\` |
| Запустить скрипт | \`npm run dev\` | \`yarn dev\` | \`pnpm dev\` |

---

**package.json** — главный файл проекта на Node.js. Содержит:

\`\`\`json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Моё приложение",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0"
  },
  "devDependencies": {
    "vite": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

**Основные поля:**
- **\`name\`** — имя проекта
- **\`version\`** — версия (семвер: мажор.минор.патч)
- **\`scripts\`** — команды для запуска (\`npm run dev\`)
- **\`dependencies\`** — зависимости для продакшена
- **\`devDependencies\`** — зависимости для разработки

**Версии пакетов:**
- \`^3.3.0\` — любая версия 3.x.x (совместимая)
- \`~3.3.0\` — только патчи 3.3.x
- \`3.3.0\` — строго эта версия

 **Для собеседования:** npm/yarn/pnpm — менеджеры пакетов Node.js. Устанавливают зависимости из \`package.json\`. npm встроен в Node, yarn быстрее, pnpm экономит место. \`package.json\` содержит метаданные проекта, скрипты и список зависимостей.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-3`,
"title": `Чем dependencies отличаются от devDependencies?`,
"fullAnswer": `**dependencies** — пакеты, которые нужны для **работы приложения** в продакшене.

**devDependencies** — пакеты, которые нужны только для **разработки** (тесты, сборка, линтеры).

**Пример:**
\`\`\`json
{
  "dependencies": {
    "vue": "^3.3.0",         // нужно в браузере
    "pinia": "^2.1.0",       // нужно в браузере
    "axios": "^1.4.0"        // нужно в браузере
  },
  "devDependencies": {
    "vite": "^4.0.0",        // только для сборки
    "typescript": "^5.0.0",  // только для разработки
    "eslint": "^8.0.0",      // только для линтинга
    "vitest": "^0.34.0"      // только для тестов
  }
}
\`\`\`

**Почему это важно:**

**1. Размер продакшен-сборки:**
При установке только продакшен-зависимостей (\`npm install --production\` или \`NODE_ENV=production\`) devDependencies не устанавливаются. Это уменьшает размер.

**2. Безопасность:**
Меньше пакетов в продакшене = меньше потенциальных уязвимостей.

**3. Понятность:**
Сразу видно, что нужно для работы приложения, а что — инструменты разработки.

**Как добавить:**
\`\`\`bash
# В dependencies (по умолчанию)
npm install vue

# В devDependencies
npm install -D vite
npm install --save-dev typescript

# Аналогично для yarn
yarn add vue
yarn add -D vite

# Для pnpm
pnpm add vue
pnpm add -D vite
\`\`\`

**Правило:**
- Если пакет импортируется в коде приложения (\`import Vue from 'vue'\`) → **dependencies**
- Если пакет используется только в скриптах сборки/тестов → **devDependencies**

**Исключение:**
TypeScript-типы (\`@types/...\`) всегда в devDependencies, даже если библиотека в dependencies.

 **Для собеседования:** \`dependencies\` — пакеты для работы приложения в продакшене (Vue, Pinia). \`devDependencies\` — только для разработки (Vite, TypeScript, ESLint). Разделение уменьшает размер продакшен-сборки и улучшает безопасность.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-4`,
"title": `Что такое node_modules и lock-файлы? Почему их не коммитят?`,
"fullAnswer": `## node_modules

**\`node_modules\`** — папка, куда устанавливаются все зависимости проекта. Создаётся автоматически при \`npm install\`.

**Почему не коммитят:**

**1. Огромный размер:**
Даже простой проект может иметь 500+ пакетов. \`node_modules\` весит сотни мегабайт или даже гигабайты.

**2. Избыточность:**
Всё содержимое можно восстановить из \`package.json\` и lock-файла командой \`npm install\`.

**3. Проблемы с кроссплатформенностью:**
Некоторые пакеты содержат бинарные файлы, скомпилированные под конкретную ОС. На другой ОС они не работают.

**4. Конфликты в Git:**
Тысячи файлов = постоянные конфликты при мерже.

**Решение:**
Добавить в \`.gitignore\`:
\`\`\`
node_modules/
\`\`\`

---

## Lock-файлы

**Lock-файл** фиксирует **точные версии** всех установленных пакетов (включая вложенные зависимости).

**Названия:**
- npm → \`package-lock.json\`
- yarn → \`yarn.lock\`
- pnpm → \`pnpm-lock.yaml\`

**Зачем нужен:**

**1. Детерминированная установка:**
Без lock-файла \`npm install\` может установить разные версии вложенных зависимостей у разных разработчиков.

**Пример проблемы:**
\`\`\`json
// package.json
{
  "dependencies": {
    "lodash": "^4.17.0"
  }
}
\`\`\`
- У Васи: установится \`4.17.21\` (последняя на тот момент)
- У Пети через месяц: установится \`4.17.22\` (вышла новая)
- Возможны баги из-за различий!

**С lock-файлом:**
Все установят ровно ту версию, которая зафиксирована.

**2. Воспроизводимость:**
Баг воспроизводится у всех разработчиков одинаково.

**3. Безопасность:**
Можно проверить, какие именно версии установлены (аудит уязвимостей).

**Почему lock-файлы КОММИТЯТ:**
- Гарантируют одинаковые версии у всех
- Не занимают много места (текстовый файл)
- Критичны для стабильности проекта

**Правила работы:**
\`\`\`bash
# ✅ Правильно: коммитить lock-файл
git add package-lock.json
git commit -m "Update dependencies"

# ✅ Обновить зависимости
npm update

# ️ Пересоздать lock-файл (если сломался)
rm package-lock.json
rm -rf node_modules
npm install
\`\`\`

**⚠️ Важно:** Не используйте разные менеджеры пакетов в одном проекте! Если начали с npm — не смешивайте с yarn. Lock-файлы несовместимы.

💡 **Для собеседования:** \`node_modules\` — папка с зависимостями, не коммитят из-за размера и кроссплатформенности. Lock-файлы (\`package-lock.json\`, \`yarn.lock\`) фиксируют точные версии всех пакетов для воспроизводимости установки. Lock-файлы ОБЯЗАТЕЛЬНО коммитят.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-5`,
"title": `Что такое npm run build и npm run dev?`,
"fullAnswer": `Это **скрипты** из \`package.json\`, которые запускают разные режимы работы бандлера.

**\`npm run dev\` — режим разработки:**

\`\`\`json
{
  "scripts": {
    "dev": "vite"
  }
}
\`\`\`

**Что происходит:**
- Запускается dev-сервер (обычно на \`http://localhost:5173\`)
- Код **не собирается** в финальный бандл
- Используется **Hot Module Replacement (HMR)** — изменения видны мгновенно без перезагрузки страницы
- Исходный код с комментариями, без минификации
- Подробные ошибки в консоли
- Быстрый старт (Vite запускается за миллисекунды)

**Когда использовать:**
- Во время написания кода
- Для отладки
- Для тестирования функциональности

---

**\`npm run build\` — режим продакшена:**

\`\`\`json
{
  "scripts": {
    "build": "vite build"
  }
}
\`\`\`

**Что происходит:**
- Код **собирается** в оптимизированные файлы
- **Минификация** — удаление пробелов, комментариев, короткие имена переменных
- **Tree-shaking** — удаление неиспользуемого кода
- **Код-сплиттинг** — разделение на чанки для ленивой загрузки
- **Хэширование имён файлов** — для кэширования (\`app.a1b2c3.js\`)
- Исходники в папке \`dist/\` (или \`build/\`)

**Результат:**
\`\`\`
dist/
  assets/
    index.a1b2c3.js      # минифицированный JS
    index.d4e5f6.css     # минифицированный CSS
    logo.1a2b3c.png      # оптимизированные изображения
  index.html             # главная страница
\`\`\`

**Когда использовать:**
- Перед деплоем на продакшен
- Для проверки финального размера бандла
- Для CI/CD пайплайнов

---

**Другие популярные скрипты:**

\`\`\`json
{
  "scripts": {
    "dev": "vite",              # режим разработки
    "build": "vite build",      # сборка для продакшена
    "preview": "vite preview",  # локальный просмотр сборки
    "lint": "eslint .",         # проверка кода
    "test": "vitest",           # запуск тестов
    "type-check": "vue-tsc --noEmit"  # проверка типов
  }
}
\`\`\`

**\`npm run preview\`:**
Запускает локальный сервер для просмотра собранной версии. Полезно проверить, как приложение работает после сборки, до деплоя.

**Разница в таблице:**

| Характеристика | dev | build |
|---|---|---|
| Скорость запуска | Мгновенно | Медленнее |
| Минификация | Нет | Да |
| Source maps | Полные | Опционально |
| HMR | Да | Нет |
| Оптимизация | Минимальная | Максимальная |
| Результат | В памяти | Папка \`dist/\` |

💡 **Для собеседования:** \`npm run dev\` — режим разработки с HMR, без минификации, быстрый старт. \`npm run build\` — продакшен-сборка с минификацией, tree-shaking, код-сплиттингом. Результат в папке \`dist/\`. \`npm run preview\` — локальный просмотр сборки.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-6`,
"title": `Что такое транспиляция (Babel), минификация и source maps?`,
"fullAnswer": `## Транспиляция (Babel)

**Транспиляция** — преобразование кода из одного синтаксиса в другой (обычно из нового в старый для совместимости с браузерами).

**Зачем нужна:**
Не все браузеры поддерживают современный JavaScript. Babel преобразует новый синтаксис в старый.

**Пример:**
\`\`\`javascript
// Исходный код (ES6+)
const greet = (name) => \`Hello, \${name}!\`;
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// После Babel (ES5)
var greet = function(name) {
  return "Hello, " + name + "!";
};
var numbers = [1, 2, 3];
var doubled = numbers.map(function(n) {
  return n * 2;
});
\`\`\`

**Babel** — самый популярный транспайлер. Работает через плагины и пресеты:
- \`@babel/preset-env\` — для старого JS
- \`@babel/preset-typescript\` — для TypeScript
- \`@babel/preset-react\` — для JSX

**Современные бандлеры** (Vite, Webpack 5) используют **esbuild** или **SWC** вместо Babel — они быстрее (написаны на Go/Rust).

---

## Минификация

**Минификация** — уменьшение размера кода путём удаления всего лишнего.

**Что удаляется:**
- Пробелы и переносы строк
- Комментарии
- Длинные имена переменных
- Неиспользуемый код (tree-shaking)

**Пример:**
\`\`\`javascript
// До минификации (150 байт)
function calculateTotal(items) {
  // Подсчёт суммы
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// После минификации (85 байт)
function calculateTotal(i){let t=0;for(let e=0;e<i.length;e++)t+=i[e].price;return t}
\`\`\`

**Инструменты:**
- **Terser** — для JavaScript
- **cssnano** — для CSS
- **esbuild** — очень быстрый минификатор

**Эффект:**
- Уменьшение размера на 50-70%
- Быстрее загрузка страницы
- Меньше трафика

---

## Source Maps

**Source maps** — файлы, которые связывают минифицированный код с оригинальным. Нужны для отладки.

**Проблема без source maps:**
В консоли браузера ошибка указывает на минифицированный код:
\`\`\`
Error at app.a1b2c3.js:1:1234
\`\`\`
Невозможно понять, где ошибка в исходном коде.

**Решение — source maps:**
Браузер показывает оригинальный код с правильными строками:
\`\`\`
Error at App.vue:42
\`\`\`

**Как работает:**
1. Бандлер создаёт файл \`app.a1b2c3.js.map\`
2. В минифицированном файле ссылка: \`//# sourceMappingURL=app.a1b2c3.js.map\`
3. DevTools читает map-файл и показывает оригинал

**Типы source maps:**

| Тип | Скорость сборки | Точность | Размер |
|---|---|---|---|
| \`eval\` | Быстро | Низкая | Маленький |
| \`cheap-module-source-map\` | Средне | Средняя | Средний |
| \`source-map\` | Медленно | Высокая | Большой |

**Настройка в Vite:**
\`\`\`javascript
// vite.config.js
export default defineConfig({
  build: {
    sourcemap: true  // включить source maps в продакшене
  }
})
\`\`\`

**Важно:**
- В разработке source maps включены всегда
- В продакшене часто отключают (безопасность, размер)
- Для отладки продакшена можно включить скрытые source maps (\`hidden-source-map\`)

💡 **Для собеседования:** Транспиляция (Babel) — преобразование нового JS в старый для совместимости. Минификация — удаление лишнего (пробелы, комментарии, длинные имена) для уменьшения размера. Source maps — файлы для отладки минифицированного кода, связывают его с оригиналом.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-7`,
"title": `Что такое ESLint и Prettier? Как их настроить вместе?`,
"fullAnswer": `## ESLint

**ESLint** — инструмент для **поиска ошибок** и **соблюдения стиля кода** в JavaScript/TypeScript.

**Что проверяет:**
- Синтаксические ошибки
- Неиспользуемые переменные
- Потенциальные баги
- Стиль кода (отступы, кавычки, точки с запятой)

**Пример проблем, которые находит ESLint:**
\`\`\`javascript
// ❌ ESLint найдёт ошибки
var x = 5;              // предпочтительнее let/const
if (x = 10) { }         // присваивание вместо сравнения
console.log(y);         // y не определена
function foo() { }      // неиспользуемая функция
\`\`\`

**Установка:**
\`\`\`bash
npm install -D eslint
npm init @eslint/config  # интерактивная настройка
\`\`\`

**Конфигурация (\`.eslintrc.js\`):**
\`\`\`javascript
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'no-console': 'warn',        // предупреждение за console.log
    'no-unused-vars': 'error',   // ошибка за неиспользуемые переменные
    'eqeqeq': 'error'            // требовать === вместо ==
  }
}
\`\`\`

---

## Prettier

**Prettier** — инструмент для **автоматического форматирования кода**. Делает код единообразным.

**Что делает:**
- Выравнивает отступы
- Расставляет точки с запятой
- Переносит длинные строки
- Форматирует объекты и массивы

**Пример:**
\`\`\`javascript
// До Prettier
const user={name:"John",age:30,email:"john@example.com",isActive:true}

// После Prettier
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  isActive: true,
};
\`\`\`

**Установка:**
\`\`\`bash
npm install -D prettier
\`\`\`

**Конфигурация (\`.prettierrc\`):**
\`\`\`json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
\`\`\`

---

## Как настроить вместе

**Проблема:** ESLint и Prettier могут конфликтовать (оба пытаются форматировать код).

**Решение:**

**1. Установить плагин:**
\`\`\`bash
npm install -D eslint-config-prettier
\`\`\`

**2. Добавить в ESLint конфиг:**
\`\`\`javascript
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'  // ← отключает конфликтующие правила ESLint
  ],
  rules: {
    // Ваши правила
  }
}
\`\`\`

**3. Настроить VS Code:**
\`\`\`json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
\`\`\`

**4. Добавить скрипты в package.json:**
\`\`\`json
{
  "scripts": {
    "lint": "eslint . --ext .js,.vue",
    "lint:fix": "eslint . --ext .js,.vue --fix",
    "format": "prettier --write ."
  }
}
\`\`\`

**Разница:**
- **ESLint** — находит ошибки и проблемы с кодом
- **Prettier** — форматирует код (внешний вид)
- Вместе: ESLint следит за качеством, Prettier за стилем

💡 **Для собеседования:** ESLint — линтер для поиска ошибок и соблюдения стиля. Prettier — автоформатирование кода. Вместе настраиваются через \`eslint-config-prettier\` (отключает конфликтующие правила ESLint). В VS Code настраивается форматирование при сохранении.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-основы-8`,
"title": `Что такое tsconfig.json и .env файлы?`,
"fullAnswer": `## tsconfig.json

**tsconfig.json** — конфигурационный файл TypeScript. Определяет, как компилятор TypeScript (\`tsc\`) обрабатывает проект.

**Базовая структура:**
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

**Основные опции:**

**\`target\`** — в какую версию JS компилировать:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020"  // ES5, ES2015, ES2020, ESNext
  }
}
\`\`\`

**\`strict\`** — включить все строгие проверки:
\`\`\`json
{
  "compilerOptions": {
    "strict": true  // noImplicitAny, strictNullChecks и др.
  }
}
\`\`\`

**\`resolveJsonModule\`** — импортировать JSON:
\`\`\`json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
\`\`\`
\`\`\`typescript
import data from './data.json'  // ✅ работает
\`\`\`

**\`paths\`** — алиасы импортов:
\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
\`\`\`
\`\`\`typescript
import Button from '@/components/Button.vue'  // вместо ../../../components/Button.vue
\`\`\`

**Как используется:**
- Vite/Webpack читают tsconfig для настройки сборки
- IDE (VS Code) использует для автодополнения и проверки типов
- \`tsc\` использует для компиляции

---

## .env файлы

**\`.env\` файлы** — файлы с переменными окружения (конфигурация, секреты, URL API).

**Типы файлов:**
\`\`\`
.env                # загружается всегда
.env.local          # локальные настройки (в .gitignore)
.env.development    # только для режима разработки
.env.production     # только для продакшена
\`\`\`

**Пример \`.env\`:**
\`\`\`bash
# Публичные переменные (доступны в браузере)
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My App

# Приватные переменные (только на сервере)
DB_PASSWORD=secret123
API_KEY=abc123
\`\`\`

**Использование в коде:**

**Vite:**
\`\`\`javascript
// Переменные с префиксом VITE_ доступны в коде
const apiUrl = import.meta.env.VITE_API_BASE_URL
const appTitle = import.meta.env.VITE_APP_TITLE

// Все переменные
console.log(import.meta.env)
\`\`\`

**Webpack (через DefinePlugin или dotenv):**
\`\`\`javascript
// webpack.config.js
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(dotenv.config().parsed.API_URL)
    })
  ]
}
\`\`\`

**Правила безопасности:**

**✅ Можно коммитить:**
- Публичные URL API
- Настройки приложения
- Feature flags

**❌ НЕЛЬЗЯ коммитить:**
- Пароли и секреты
- API-ключи
- Приватные токены
- Данные БД

**Добавить в \`.gitignore\`:**
\`\`\`
.env.local
.env.development.local
.env.production.local
*.local
\`\`\`

**Загрузка в зависимости от режима:**
\`\`\`bash
# npm run dev → загружает .env + .env.development
# npm run build → загружает .env + .env.production
\`\`\`

💡 **Для собеседования:** \`tsconfig.json\` — конфиг TypeScript (target, strict, paths для алиасов). \`.env\` файлы — переменные окружения. В Vite переменные с префиксом \`VITE_\` доступны через \`import.meta.env\`. Секреты нельзя коммитить — использовать \`.env.local\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `webpack`,
"title": `Webpack`,
"questions": [
{
"id": `6-junior-webpack-1`,
"title": `Что такое Webpack? Для каких задач используется?`,
"fullAnswer": `**Webpack** — это модульный бандлер для JavaScript-приложений. Самый популярный и гибкий инструмент сборки.

**Основные задачи:**

**1. Сборка модулей:**
Объединяет все файлы проекта (JS, CSS, изображения) в оптимизированные бандлы.

\`\`\`javascript
// Исходный код
import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'

// Webpack собирает всё в один bundle.js
\`\`\`

**2. Транспиляция:**
Преобразует TypeScript, JSX, современный JS в код, понятный браузерам.

**3. Обработка ассетов:**
- CSS/SCSS/Less → CSS
- Изображения → оптимизированные файлы
- Шрифты → инлайн или отдельные файлы

**4. Оптимизация:**
- Минификация
- Code splitting (разделение на чанки)
- Tree-shaking (удаление неиспользуемого кода)
- Кэширование

**5. Dev-сервер:**
Встроенный сервер разработки с Hot Module Replacement (HMR).

**Архитектура Webpack:**

**Entry (точка входа):**
\`\`\`javascript
// webpack.config.js
module.exports = {
  entry: './src/main.js'  // с чего начинается сборка
}
\`\`\`

**Loaders (загрузчики):**
Обрабатывают разные типы файлов:
\`\`\`javascript
module: {
  rules: [
    { test: /\\.js$/, use: 'babel-loader' },
    { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\\.vue$/, use: 'vue-loader' }
  ]
}
\`\`\`

**Plugins (плагины):**
Расширяют функциональность:
\`\`\`javascript
plugins: [
  new HtmlWebpackPlugin(),
  new MiniCssExtractPlugin()
]
\`\`\`

**Output (результат):**
\`\`\`javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
}
\`\`\`

**Когда использовать Webpack:**
- Сложные проекты с кастомной конфигурацией
- Legacy-проекты (много существующих конфигов)
- Когда нужен полный контроль над сборкой
- React-проекты (Create React App использует Webpack)

**Недостатки:**
- Сложная конфигурация
- Медленный в больших проектах
- Много boilerplate

**Альтернативы:**
- **Vite** — быстрее, проще, для Vue/React
- **Rollup** — для библиотек
- **esbuild** — очень быстрый

 **Для собеседования:** Webpack — модульный бандлер для сборки JS-приложений. Обрабатывает модули, транслирует код, оптимизирует ассеты. Архитектура: entry (точка входа), loaders (обработка файлов), plugins (расширение функциональности), output (результат). Гибкий, но сложный в настройке.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-webpack-2`,
"title": `Что такое webpack.config.js, entry и output?`,
"fullAnswer": `## webpack.config.js

**\`webpack.config.js\`** — главный конфигурационный файл Webpack. Определяет, как собирать проект.

**Базовая структура:**
\`\`\`javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',  // 'development' | 'production'
  
  entry: './src/main.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      // loaders
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin()
  ],
  
  devServer: {
    port: 3000,
    hot: true
  }
}
\`\`\`

---

## Entry (точка входа)

**Entry** — файл, с которого Webpack начинает сборку. От него строится граф зависимостей.

**Один entry:**
\`\`\`javascript
module.exports = {
  entry: './src/main.js'
}
\`\`\`

**Несколько entry (multi-page app):**
\`\`\`javascript
module.exports = {
  entry: {
    main: './src/main.js',
    admin: './src/admin.js'
  },
  output: {
    filename: '[name].bundle.js'  // main.bundle.js, admin.bundle.js
  }
}
\`\`\`

**Как работает:**
1. Webpack читает \`main.js\`
2. Находит все \`import\`/\`require\`
3. Читает импортированные файлы
4. Рекурсивно строит граф всех зависимостей
5. Собирает всё в бандл

---

## Output (результат)

**Output** — куда и как сохранять собранные файлы.

**Базовая настройка:**
\`\`\`javascript
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),  // абсолютный путь
    filename: 'bundle.js'                    // имя файла
  }
}
\`\`\`

**Продвинутая настройка:**
\`\`\`javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  
  // Имя файла с хэшем (для кэширования)
  filename: '[name].[contenthash].js',
  
  // Для code splitting
  chunkFilename: '[name].[contenthash].chunk.js',
  
  // Очистка папки перед сборкой
  clean: true,
  
  // Публичный путь (для CDN)
  publicPath: 'https://cdn.example.com/'
}
\`\`\`

**Плейсхолдеры:**
- \`[name]\` — имя чанка (main, vendor, app)
- \`[hash]\` — хэш всей сборки
- \`[contenthash]\` — хэш содержимого файла (меняется только при изменении файла)
- \`[chunkhash]\` — хэш чанка

**Пример результата:**
\`\`\`
dist/
  main.a1b2c3.js        # основной бандл
  vendor.d4e5f6.js      # библиотеки (Vue, Pinia)
  styles.7g8h9i.css     # стили
  index.html            # HTML с подключёнными скриптами
\`\`\`

**Зачем хэши:**
Браузер кэширует файлы. Если файл не изменился — хэш тот же, браузер использует кэш. Если изменился — новый хэш, браузер загружает новую версию.

💡 **Для собеседования:** \`webpack.config.js\` — конфиг Webpack. \`entry\` — точка входа (файл, с которого начинается сборка). \`output\` — куда сохранять результат. Хэши в именах файлов (\`[contenthash]\`) нужны для кэширования — браузер загружает файл только если он изменился.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-webpack-3`,
"title": `Что такое loaders (babel-loader, css-loader, sass-loader)?`,
"fullAnswer": `**Loaders (загрузчики)** — это модули Webpack, которые преобразуют файлы перед добавлением в бандл. Каждый loader обрабатывает определённый тип файлов.

**Как работают:**
Webpack по умолчанию понимает только JavaScript. Для других типов файлов (CSS, изображения, TypeScript) нужны loaders.

**Синтаксис:**
\`\`\`javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,           // какие файлы обрабатывать
        use: ['style-loader', 'css-loader']  // какие loaders применить
      }
    ]
  }
}
\`\`\`

**Порядок применения:** справа налево (или снизу вверх).

---

## babel-loader

**babel-loader** — преобразует современный JavaScript в старый для совместимости с браузерами.

\`\`\`javascript
{
  test: /\\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
\`\`\`

**Что делает:**
\`\`\`javascript
// До (ES6+)
const greet = (name) => \`Hello, \${name}!\`;

// После (ES5)
var greet = function(name) {
  return "Hello, " + name + "!";
};
\`\`\`

---

## css-loader и style-loader

**css-loader** — читает CSS-файлы и обрабатывает \`@import\` и \`url()\`.

**style-loader** — добавляет CSS в DOM (вставляет \`<style>\` теги).

\`\`\`javascript
{
  test: /\\.css$/,
  use: ['style-loader', 'css-loader']  // порядок важен!
}
\`\`\`

**Порядок:**
1. \`css-loader\` читает CSS, обрабатывает импорты
2. \`style-loader\` вставляет CSS в DOM

---

## sass-loader / scss-loader

**sass-loader** — компилирует SCSS/SASS в CSS.

\`\`\`javascript
{
  test: /\\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'  // последний в цепочке
  ]
}
\`\`\`

**Цепочка:**
1. \`sass-loader\` — SCSS → CSS
2. \`css-loader\` — обрабатывает CSS
3. \`style-loader\` — вставляет в DOM

---

## Другие популярные loaders

**vue-loader:**
\`\`\`javascript
{
  test: /\\.vue$/,
  use: 'vue-loader'
}
\`\`\`

**file-loader / asset modules (Webpack 5):**
\`\`\`javascript
// Webpack 5 (встроенные asset modules)
{
  test: /\\.(png|jpg|gif|svg)$/,
  type: 'asset/resource'  // копирует файл и возвращает URL
}

// Или inline (для маленьких файлов)
{
  test: /\\.(png|jpg)$/,
  type: 'asset/inline'  // встраивает как base64
}
\`\`\`

**ts-loader:**
\`\`\`javascript
{
  test: /\\.ts$/,
  use: 'ts-loader',
  exclude: /node_modules/
}
\`\`\`

**Правила написания loaders:**
1. \`test\` — регулярное выражение для匹配 файлов
2. \`use\` — массив loaders (применяются справа налево)
3. \`exclude\` — какие файлы исключить (обычно \`node_modules\`)
4. \`options\` — настройки loader

 **Для собеседования:** Loaders — модули Webpack для обработки разных типов файлов. \`babel-loader\` — транспиляция JS. \`css-loader\` + \`style-loader\` — обработка CSS. \`sass-loader\` — SCSS → CSS. Применяются в порядке справа налево. В Webpack 5 есть встроенные asset modules для изображений.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-webpack-4`,
"title": `Что такое plugins (HtmlWebpackPlugin)?`,
"fullAnswer": `**Plugins (плагины)** — расширяют функциональность Webpack. В отличие от loaders (которые обрабатывают отдельные файлы), plugins работают на уровне всей сборки.

**Разница loaders vs plugins:**
- **Loaders** — преобразуют файлы (CSS → JS, SCSS → CSS)
- **Plugins** — выполняют задачи на уровне сборки (создание HTML, минификация, очистка папок)

---

## HtmlWebpackPlugin

**HtmlWebpackPlugin** — самый популярный плагин. Автоматически создаёт \`index.html\` и подключает к нему все бандлы.

**Установка:**
\`\`\`bash
npm install -D html-webpack-plugin
\`\`\`

**Использование:**
\`\`\`javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // шаблон
      filename: 'index.html',           // имя выходного файла
      title: 'My App',                  // заголовок
      minify: true                      // минификация HTML
    })
  ]
}
\`\`\`

**Что делает:**
1. Берёт шаблон \`index.html\`
2. Автоматически добавляет \`<script>\` и \`<link>\` теги для бандлов
3. Минифицирует HTML (в продакшене)
4. Кладёт результат в \`dist/\`

**Пример шаблона:**
\`\`\`html
<!-- public/index.html -->
<!DOCTYPE html>
<html>
<head>
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="app"></div>
  <!-- Webpack сам добавит: -->
  <!-- <script src="bundle.js"></script> -->
</body>
</html>
\`\`\`

---

## Другие популярные plugins

**MiniCssExtractPlugin** — извлекает CSS в отдельные файлы (вместо вставки в JS):
\`\`\`javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}
\`\`\`

**DefinePlugin** — задаёт глобальные константы:
\`\`\`javascript
const webpack = require('webpack')

plugins: [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    '__APP_VERSION__': JSON.stringify('1.0.0')
  })
]
\`\`\`

**CleanWebpackPlugin** — очищает папку \`dist/\` перед сборкой:
\`\`\`javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

plugins: [
  new CleanWebpackPlugin()
]
\`\`\`

**CopyWebpackPlugin** — копирует файлы (например, \`public/\`):
\`\`\`javascript
const CopyWebpackPlugin = require('copy-webpack-plugin')

plugins: [
  new CopyWebpackPlugin({
    patterns: [
      { from: 'public', to: 'public' }
    ]
  })
]
\`\`\`

**Как работают plugins:**
Plugins используют **хуки** Webpack — точки в процессе сборки, где можно вмешаться.

\`\`\`javascript
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      // Действие перед выводом файлов
      console.log('Начинаем запись файлов...')
      callback()
    })
  }
}
\`\`\`

💡 **Для собеседования:** Plugins расширяют функциональность Webpack на уровне всей сборки. \`HtmlWebpackPlugin\` создаёт HTML и подключает бандлы. \`MiniCssExtractPlugin\` извлекает CSS в файлы. \`DefinePlugin\` задаёт глобальные константы. Plugins работают через хуки компилятора.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-webpack-5`,
"title": `Что такое devServer и hot reload?`,
"fullAnswer": `## devServer

**Webpack Dev Server** — встроенный сервер разработки. Запускает приложение локально с поддержкой HMR.

**Установка:**
\`\`\`bash
npm install -D webpack-dev-server
\`\`\`

**Настройка:**
\`\`\`javascript
module.exports = {
  devServer: {
    port: 3000,           // порт
    hot: true,            // включить HMR
    open: true,           // открыть браузер автоматически
    historyApiFallback: true,  // для SPA (все запросы → index.html)
    proxy: {
      '/api': 'http://localhost:8080'  // проксирование API
    }
  }
}
\`\`\`

**Запуск:**
\`\`\`bash
webpack serve  # или webpack-dev-server
\`\`\`

**Что делает:**
- Раздаёт файлы из памяти (быстрее, чем с диска)
- Автоматически обновляет страницу при изменениях
- Проксирует API-запросы
- Поддерживает HTTPS

---

## Hot Reload vs Hot Module Replacement (HMR)

**Hot Reload (горячая перезагрузка):**
- Перезагружает всю страницу при изменениях
- Теряется состояние (заполненные формы, открытые модалки)
- Медленнее

**Hot Module Replacement (HMR):**
- Заменяет только изменённые модули **без перезагрузки страницы**
- Сохраняет состояние приложения
- Мгновенное обновление

**Как работает HMR:**
1. Изменяете файл (\`App.vue\`)
2. Webpack пересобирает только этот модуль
3. Dev Server отправляет обновление в браузер через WebSocket
4. Браузер заменяет старый модуль на новый
5. Состояние приложения сохраняется

**Настройка HMR:**
\`\`\`javascript
module.exports = {
  devServer: {
    hot: true  // включить HMR
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
\`\`\`

**В коде (опционально):**
\`\`\`javascript
// main.js
if (module.hot) {
  module.hot.accept('./App.vue', () => {
    console.log('App.vue обновлён')
    // Дополнительная логика при обновлении
  })
}
\`\`\`

**Ограничения HMR:**
- Не все модули поддерживают HMR (например, CSS — да, JS — частично)
- При ошибках может потребоваться полная перезагрузка
- Не работает в продакшене

**Сравнение:**

| Характеристика | Hot Reload | HMR |
|---|---|---|
| Перезагрузка страницы | Да | Нет |
| Сохранение состояния | Нет | Да |
| Скорость | Медленнее | Мгновенно |
| Настройка | Автоматически | Требует настройки |

**Современные альтернативы:**
- **Vite** — HMR из коробки, работает мгновенно
- **Webpack 5** — улучшенный HMR

💡 **Для собеседования:** Dev Server — сервер разработки Webpack с HMR. Hot Reload перезагружает страницу, HMR заменяет только изменённые модули без перезагрузки (сохраняет состояние). Настраивается через \`devServer: { hot: true }\`. Vite имеет встроенный HMR, работает быстрее.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `vite`,
"title": `Vite`,
"questions": [
{
"id": `6-junior-vite-1`,
"title": `Что такое Vite? Кто его создал?`,
"fullAnswer": `**Vite** (франц. "быстрый") — современный инструмент сборки для веб-разработки. Создан **Evan You** (автор Vue.js) в 2020 году.

**Философия Vite:**
- Мгновенный запуск dev-сервера
- Быстрый HMR (Hot Module Replacement)
- Оптимизированная продакшен-сборка
- Простая конфигурация

---

**Почему создан:**
Evan You был недоволен скоростью Webpack в больших проектах. При изменении файла Webpack пересобирает весь граф зависимостей — это медленно.

**Решение Vite:**
- **Dev-режим:** использует нативные ES-модули браузера (не собирает код)
- **Prod-режим:** использует Rollup для оптимизированной сборки

---

**Основные возможности:**

**1. Мгновенный запуск:**
\`\`\`bash
npm create vite@latest my-app -- --template vue
npm install
npm run dev  # запускается за ~100ms
\`\`\`

**2. Поддержка фреймворков:**
- Vue (из коробки)
- React
- Svelte
- Preact
- Vanilla JS

**3. Встроенные фичи:**
- TypeScript (без настройки)
- JSX/TSX
- CSS Modules
- Sass/Less/Stylus
- Web Workers
- WASM

**4. Экосистема:**
- **Vue** — \`@vitejs/plugin-vue\`
- **React** — \`@vitejs/plugin-react\`
- **SSR** — встроенная поддержка
- **Библиотеки** — режим сборки библиотек

---

**Сравнение с Webpack:**

| Характеристика | Vite | Webpack |
|---|---|---|
| Скорость dev | Мгновенно | Медленно (растёт с проектом) |
| HMR | Мгновенный | Замедляется в больших проектах |
| Конфигурация | Простая | Сложная |
| Плагины | Rollup-совместимые | Своя экосистема |
| Prod-сборка | Rollup | Встроенная |
| Поддержка | Vue, React, Svelte | Любой фреймворк |

---

**Когда использовать Vite:**
- Новые проекты на Vue/React
- Когда важна скорость разработки
- Когда не нужна сложная кастомизация сборки

**Когда Webpack:**
- Legacy-проекты
- Сложная кастомная конфигурация
- Специфичные требования к сборке

💡 **Для собеседования:** Vite — современный бандлер от Evan You (автор Vue). Использует нативные ES-модули в dev-режиме (мгновенный запуск) и Rollup в prod-режиме. Быстрее Webpack, проще в настройке, поддерживает Vue/React/Svelte.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-vite-2`,
"title": `Почему Vite быстрее Webpack на этапе разработки?`,
"fullAnswer": `## Ключевое отличие

**Webpack:** собирает **весь** граф зависимостей перед запуском dev-сервера.

**Vite:** использует **нативные ES-модули** браузера — собирает только то, что нужно.

---

## Как работает Webpack

1. Запуск \`webpack serve\`
2. Webpack читает entry-файл
3. Находит все импорты
4. Рекурсивно обходит **весь** граф зависимостей
5. Транспилирует каждый файл через loaders
6. Собирает всё в бандл
7. Отдаёт бандл браузеру

**Проблема:**
В большом проекте (1000+ файлов) это занимает **секунды или даже минуты**. При каждом изменении — пересборка.

---

## Как работает Vite

1. Запуск \`vite\`
2. Vite **не собирает** код
3. Браузер запрашивает файлы по мере необходимости (нативные ES-модули)
4. Vite транспилирует **только запрошенный файл**
5. Отдаёт файл браузеру

**Пример:**
\`\`\`javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
\`\`\`

**Webpack:**
- Собирает Vue + App.vue + router + все компоненты + все зависимости
- Время: 5-10 секунд

**Vite:**
- Браузер запрашивает \`main.js\`
- Vite транспилирует только \`main.js\`
- Браузер видит \`import\` и запрашивает \`vue\`, \`App.vue\`, \`router\`
- Vite транспилирует каждый по запросу
- Время: ~100 миллисекунд

---

## Pre-bundling (предварительная сборка)

Vite использует **esbuild** (написан на Go) для pre-bundling зависимостей.

**Что это:**
- Зависимости из \`node_modules\` (Vue, Pinia, lodash) собираются один раз
- Конвертируются в ES-модули
- Кэшируются

**Результат:**
- Повторные запуски ещё быстрее
- Зависимости загружаются как один файл

---

## HMR (Hot Module Replacement)

**Webpack HMR:**
- При изменении файла пересобирает весь граф
- В больших проектах HMR замедляется

**Vite HMR:**
- При изменении файла обновляет только его
- Не зависит от размера проекта
- Мгновенное обновление

---

## Сравнение скорости

| Операция | Webpack (большой проект) | Vite |
|---|---|---|
| Холодный старт | 10-30 секунд | < 1 секунда |
| HMR | 1-5 секунд | < 50 мс |
| Зависимость от размера | Линейная | Константная |

---

## Почему Vite не использует ES-модули в продакшене?

Нативные ES-модули требуют много сетевых запросов (каждый \`import\` = отдельный запрос). В продакшене это медленно.

**Решение:** Vite использует **Rollup** для продакшен-сборки:
- Объединяет код в оптимальные чанки
- Минифицирует
- Tree-shaking
- Code splitting

💡 **Для собеседования:** Vite быстрее Webpack, потому что использует нативные ES-модули браузера в dev-режиме — не собирает весь граф зависимостей, а транслирует файлы по запросу. Webpack собирает всё перед запуском. Vite использует esbuild для pre-bundling зависимостей. HMR в Vite не зависит от размера проекта.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-vite-3`,
"title": `Что такое vite.config.js?`,
"fullAnswer": `**\`vite.config.js\`** (или \`vite.config.ts\`) — конфигурационный файл Vite. Определяет настройки сборки, плагины, алиасы и другие опции.

**Базовая структура:**
\`\`\`javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
  server: {
    port: 3000,
    open: true
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
\`\`\`

---

## Основные секции

**1. plugins:**
\`\`\`javascript
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),                    // поддержка Vue
    viteCompression()         // gzip-сжатие
  ]
})
\`\`\`

**2. resolve.alias:**
\`\`\`javascript
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
\`\`\`
\`\`\`javascript
// Использование
import Button from '@/components/Button.vue'
import { formatDate } from '@utils/date'
\`\`\`

**3. server (dev-сервер):**
\`\`\`javascript
export default defineConfig({
  server: {
    port: 3000,           // порт
    open: true,           // открыть браузер
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    },
    cors: true            // включить CORS
  }
})
\`\`\`

**4. build (продакшен-сборка):**
\`\`\`javascript
export default defineConfig({
  build: {
    outDir: 'dist',           // папка вывода
    sourcemap: false,         // source maps
    minify: 'esbuild',        // 'esbuild' | 'terser' | false
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'pinia'],  // отдельный чанк для библиотек
          utils: ['lodash', 'dayjs']
        }
      }
    }
  }
})
\`\`\`

**5. css:**
\`\`\`javascript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@/styles/variables.scss";\`
      }
    },
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
\`\`\`

**6. env:**
\`\`\`javascript
export default defineConfig({
  envPrefix: 'VITE_',  // префикс для переменных окружения
  
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0')  // глобальные константы
  }
})
\`\`\`

---

## defineConfig

**\`defineConfig\`** — хелпер для типизации конфига (особенно в TypeScript):

\`\`\`typescript
import { defineConfig } from 'vite'

export default defineConfig({
  // Автодополнение и проверка типов
})
\`\`\`

**Функциональный конфиг:**
\`\`\`javascript
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    // настройки для dev
    return { server: { port: 3000 } }
  } else {
    // настройки для build
    return { build: { sourcemap: true } }
  }
})
\`\`\`

 **Для собеседования:** \`vite.config.js\` — конфиг Vite. Основные секции: \`plugins\` (плагины), \`resolve.alias\` (алиасы импортов), \`server\` (dev-сервер, прокси), \`build\` (продакшен-сборка, rollupOptions), \`css\` (препроцессоры). \`defineConfig\` даёт типизацию и автодополнение.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-vite-4`,
"title": `Как работать с переменными окружения (import.meta.env)?`,
"fullAnswer": `Vite использует **\`import.meta.env\`** для доступа к переменным окружения (вместо \`process.env\` в Webpack).

---

## Создание .env файлов

\`\`\`
.env                # загружается всегда
.env.local          # локальные (в .gitignore)
.env.development    # только для dev
.env.production     # только для build
\`\`\`

**Пример \`.env\`:**
\`\`\`bash
# Публичные переменные (доступны в браузере)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_ENABLE_ANALYTICS=true

# Приватные (только на сервере, НЕ начинаются с VITE_)
DB_PASSWORD=secret123
\`\`\`

---

## Использование в коде

\`\`\`javascript
// Доступ к переменным
const apiUrl = import.meta.env.VITE_API_URL
const appTitle = import.meta.env.VITE_APP_TITLE

// Все переменные
console.log(import.meta.env)
// {
//   VITE_API_URL: "https://api.example.com",
//   VITE_APP_TITLE: "My App",
//   MODE: "development",
//   DEV: true,
//   PROD: false,
//   SSR: false
// }
\`\`\`

**Встроенные переменные:**
- \`import.meta.env.MODE\` — режим (\`development\`, \`production\`, \`test\`)
- \`import.meta.env.BASE_URL\` — базовый URL (из \`base\` в конфиге)
- \`import.meta.env.PROD\` — \`true\` в продакшене
- \`import.meta.env.DEV\` — \`true\` в разработке
- \`import.meta.env.SSR\` — \`true\` при серверном рендеринге

---

## Типизация (TypeScript)

\`\`\`typescript
// env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_ENABLE_ANALYTICS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
\`\`\`

Теперь \`import.meta.env.VITE_API_URL\` имеет тип \`string\` с автодополнением.

---

## Динамические переменные

Переменные подставляются **во время сборки**, а не в runtime.

\`\`\`javascript
// ❌ Не работает (динамический ключ)
const key = 'VITE_API_URL'
console.log(import.meta.env[key])  // undefined

// ✅ Работает (статический ключ)
console.log(import.meta.env.VITE_API_URL)
\`\`\`

---

## Переопределение в конфиге

\`\`\`javascript
// vite.config.js
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
    __DEBUG__: process.env.NODE_ENV === 'development'
  }
})
\`\`\`

\`\`\`javascript
// В коде
console.log(__APP_VERSION__)  // "1.0.0"
\`\`\`

---

## Сравнение с Webpack

| Vite | Webpack |
|---|---|
| \`import.meta.env.VITE_*\` | \`process.env.*\` |
| Префикс \`VITE_\` обязателен | Любой ключ |
| Встроено в Vite | Требует \`dotenv-webpack\` |

**Миграция с Webpack:**
\`\`\`javascript
// Было (Webpack)
const apiUrl = process.env.API_URL

// Стало (Vite)
const apiUrl = import.meta.env.VITE_API_URL
\`\`\`

---

## Практический пример

\`\`\`javascript
// config/api.js
export const apiClient = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 5000,
  
  isProduction: import.meta.env.PROD,
  
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
}
\`\`\`

\`\`\`javascript
// .env.development
VITE_API_URL=http://localhost:3000
VITE_ENABLE_ANALYTICS=false

// .env.production
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true
\`\`\`

💡 **Для собеседования:** В Vite переменные окружения доступны через \`import.meta.env\`. Переменные должны иметь префикс \`VITE_\` для доступа в браузере. Файлы \`.env\`, \`.env.development\`, \`.env.production\` загружаются в зависимости от режима. Встроенные переменные: \`MODE\`, \`DEV\`, \`PROD\`, \`SSR\`. Динамические ключи не работают — только статические.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-junior-vite-5`,
"title": `Как подключить CSS/SCSS и плагины в Vite?`,
"fullAnswer": `## Подключение CSS

**1. Глобальный CSS:**
\`\`\`javascript
// main.js
import './styles/main.css'  // импортируется глобально
\`\`\`

**2. CSS Modules (scoped стили):**
\`\`\`css
/* Button.module.css */
.button {
  background: blue;
  color: white;
}

.button:hover {
  background: darkblue;
}
\`\`\`

\`\`\`vue
<script setup>
import styles from './Button.module.css'
</script>

<template>
  <button :class="styles.button">Кнопка</button>
</template>
\`\`\`

**3. Scoped CSS в Vue:**
\`\`\`vue
<style scoped>
.button {
  background: blue;
}
</style>
\`\`\`

---

## Подключение SCSS/Sass

**1. Установка:**
\`\`\`bash
npm install -D sass
\`\`\`

**2. Использование:**
\`\`\`vue
<style lang="scss">
$primary-color: #007bff;

.button {
  background: $primary-color;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}
</style>
\`\`\`

**3. Глобальные переменные:**
\`\`\`javascript
// vite.config.js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@/styles/variables.scss";\`
      }
    }
  }
})
\`\`\`

Теперь переменные из \`variables.scss\` доступны во всех \`.vue\` файлах без импорта.

**4. Отдельный SCSS файл:**
\`\`\`javascript
// main.js
import './styles/main.scss'
\`\`\`

---

## Подключение плагинов

**1. Установка плагина:**
\`\`\`bash
npm install -D @vitejs/plugin-vue
npm install -D vite-plugin-compression
\`\`\`

**2. Добавление в конфиг:**
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),                    // поддержка Vue SFC
    viteCompression(),        // gzip-сжатие
    VitePWA({                 // PWA
      registerType: 'autoUpdate',
      manifest: {
        name: 'My App',
        short_name: 'App',
        theme_color: '#ffffff'
      }
    })
  ]
})
\`\`\`

---

## Популярные плагины

**Официальные:**
- \`@vitejs/plugin-vue\` — Vue 3 SFC
- \`@vitejs/plugin-react\` — React
- \`@vitejs/plugin-vue-jsx\` — Vue JSX

**Сторонние:**
- \`vite-plugin-compression\` — gzip/brotli сжатие
- \`vite-plugin-pwa\` — Progressive Web App
- \`vite-plugin-inspect\` — инспекция трансформаций
- \`unplugin-auto-import\` — автоимпорт функций
- \`unplugin-vue-components\` — автоимпорт компонентов

---

## Создание собственного плагина

\`\`\`javascript
// vite.config.js
function myPlugin() {
  return {
    name: 'my-plugin',
    
    // Хук при запуске
    configResolved(config) {
      console.log('Конфиг загружен:', config)
    },
    
    // Хук при трансформации файла
    transform(code, id) {
      if (id.endsWith('.vue')) {
        // Модификация кода Vue-компонентов
        return code.replace('old', 'new')
      }
    },
    
    // Хук при сборке
    closeBundle() {
      console.log('Сборка завершена')
    }
  }
}

export default defineConfig({
  plugins: [vue(), myPlugin()]
})
\`\`\`

---

## Настройка PostCSS

\`\`\`javascript
// vite.config.js
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('tailwindcss')
      ]
    }
  }
})
\`\`\`

Или через \`postcss.config.js\`:
\`\`\`javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
\`\`\`

💡 **Для собеседования:** CSS в Vite подключается через импорт. SCSS требует установки \`sass\`. CSS Modules — через \`.module.css\`. Плагины добавляются в массив \`plugins\` в \`vite.config.js\`. Популярные: \`@vitejs/plugin-vue\`, \`vite-plugin-pwa\`, \`vite-plugin-compression\`. Можно создавать свои плагины через хуки.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `webpack`,
"title": `Webpack`,
"questions": [
{
"id": `6-middle-webpack-1`,
"title": `Как работает модульная система (CommonJS, ESM)?`,
"fullAnswer": `**Модульная система** позволяет разбивать код на независимые файлы и управлять зависимостями между ними. Webpack поддерживает обе основные системы: CommonJS и ES Modules.

**CommonJS (CJS):**
Это стандарт, исторически используемый в Node.js. Он загружает модули синхронно.
- Импорт: \`const module = require('./module')\`
- Экспорт: \`module.exports = ...\`
- Особенности: Загрузка происходит в рантайме (во время выполнения кода). Динамический импорт возможен, но статический анализ затруднен, что мешает tree-shaking.

**ES Modules (ESM):**
Современный стандарт для JavaScript, поддерживаемый браузерами и Node.js.
- Импорт: \`import module from './module'\`
- Экспорт: \`export default ...\` или \`export const ...\`
- Особенности: Загрузка асинхронная. Структура модуля статична и определяется на этапе компиляции. Это позволяет бандлерам (Webpack, Rollup) проводить статический анализ и удалять неиспользуемый код (tree-shaking).

**Роль Webpack:**
Webpack строит граф зависимостей, начиная с точки входа (entry). Он обходит все \`import\` и \`require\`, находит нужные файлы, пропускает их через loaders и собирает в один или несколько бандлов, которые браузер может выполнить. В современных сборках Webpack по умолчанию ориентирован на ESM.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-2`,
"title": `Что такое resolve.extensions, resolve.alias, externals?`,
"fullAnswer": `Эти опции в \`webpack.config.js\` управляют тем, как Webpack находит и обрабатывает импорты.

**resolve.extensions:**
Массив расширений файлов, которые Webpack будет автоматически подставлять при импорте, если расширение не указано явно. По умолчанию это \`['.js', '.json']\`. Если вы используете Vue или TypeScript, вы добавляете туда \`'.vue'\` и \`'.ts'\`. Это позволяет писать \`import Component from './Component'\` вместо \`import Component from './Component.vue'\`.

**resolve.alias:**
Позволяет создавать псевдонимы (сокращения) для путей импорта. Это избавляет от длинных относительных путей вроде \`../../../components/Button\`. Например, настроив алиас \`@\` на папку \`src/\`, вы сможете писать \`import Button from '@/components/Button'\`. Это также работает для замены целых библиотек их легковесными аналогами (например, замена \`vue\` на \`vue/dist/vue.esm-bundler.js\`).

**externals:**
Опция, которая указывает Webpack **не включать** определенные зависимости в итоговый бандл. Вместо этого Webpack предполагает, что эти библиотеки будут доступны в окружении потребителя (например, подключены через \`<script>\` тег в HTML или являются глобальными переменными). Это полезно, если вы собираете библиотеку и не хотите, чтобы пользователи загружали Vue или React дважды (один раз из вашего бандла, один раз из своего проекта).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-3`,
"title": `Как работает Hot Module Replacement (HMR)?`,
"fullAnswer": `**Hot Module Replacement (HMR)** — это механизм, который позволяет обновлять модули в работающем приложении без полной перезагрузки страницы, сохраняя при этом состояние приложения (например, введенный текст в формах или открытые модальные окна).

**Как это работает под капотом:**
1. **Компиляция:** Когда вы изменяете файл, Webpack (в режиме watch) перекомпилирует только измененный модуль и его зависимых.
2. **Уведомление:** Webpack Dev Server отправляет уведомление в браузер через WebSocket о том, что доступен новый чанк (кусок кода).
3. **Запрос:** HMR Runtime (код, внедренный в бандл) запрашивает у сервера обновленный манифест и новые чанки.
4. **Применение:** Webpack заменяет старый модуль в своем внутреннем реестре модулей на новый.
5. **Callback:** Если модуль экспортирует специальную функцию \`module.hot.accept\`, Webpack вызывает её, передавая обновленный модуль. Это позволяет фреймворкам (Vue, React) точечно перерисовать только изменившийся компонент.

Если модуль не знает, как обновиться, HMR поднимается по графу зависимостей, пока не найдет модуль, который умеет обрабатывать обновление, либо происходит полный reload страницы (fallback).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-4`,
"title": `Что такое code splitting, SplitChunksPlugin, динамические импорты?`,
"fullAnswer": `**Code Splitting (разделение кода)** — это техника разделения итогового бандла на несколько меньших файлов (чанков), которые можно загружать параллельно или по требованию. Это уменьшает размер первоначальной загрузки.

**Динамические импорты:**
Основной способ создания точек разделения. Вместо статического \`import\` используется функция \`import()\`, которая возвращает Promise. Webpack автоматически создает отдельный чанк для этого модуля и загружает его только когда код дойдет до этой строки.
\`\`\`javascript
const HeavyComponent = () => import('./HeavyComponent.vue');
\`\`\`

**SplitChunksPlugin:**
Встроенный плагин Webpack, который автоматически находит общие зависимости между разными чанками и выносит их в отдельные файлы. 
- **Пример:** Если \`page1.js\` и \`page2.js\` обе импортируют \`lodash\`, плагин вынесет \`lodash\` в отдельный файл \`vendors~page1~page2.js\`. Браузер загрузит его один раз и закэширует.
- **Оптимизация:** Плагин можно настроить так, чтобы он выносил все библиотеки из \`node_modules\` в отдельный \`vendor.js\` чанк, который меняется гораздо реже, чем код вашего приложения.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-5`,
"title": `Что такое Tree-shaking? Почему он может не сработать?`,
"fullAnswer": `**Tree-shaking** — это процесс удаления «мертвого кода» (dead code elimination). Бандлер анализирует граф импортов и исключает из финальной сборки экспорты модулей, которые нигде не используются.

**Почему tree-shaking может не сработать:**

**1. Использование CommonJS:**
Tree-shaking опирается на статическую структуру ES Modules. Если библиотека или ваш код использует \`require()\` и \`module.exports\`, Webpack не может statically определить, какие части кода используются, и включает весь файл целиком.

**2. Side Effects (побочные эффекты):**
Если модуль при импорте выполняет какие-то действия (например, изменяет глобальные переменные, добавляет полифиллы, регистрирует события), его нельзя удалять, даже если его экспорты не используются. Webpack смотрит на поле \`sideEffects\` в \`package.json\`. Если оно установлено в \`false\`, бандлер смело удаляет неиспользуемые части. Если там массив файлов, он сохраняет только их.

**3. Неправильная настройка Babel/TypeScript:**
Если транспайлер настроен так, что превращает \`import/export\` в \`require/module.exports\` (например, в Babel preset-env без настройки \`modules: false\`), tree-shaking ломается еще до того, как код попадает в Webpack.

**4. Динамические импорты и вычисляемые свойства:**
\`import(\`./locales/\${lang}.js\`)\` или \`obj[dynamicKey]\` не могут быть проанализированы статически, поэтому бандлер вынужден включать весь возможный код.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-6`,
"title": `Что такое long-term caching (contenthash) и runtime chunk?`,
"fullAnswer": `**Long-term caching (долгосрочное кэширование):**
Чтобы браузеры кэшировали файлы на долгий срок (например, на год), имена файлов должны меняться только тогда, когда меняется их содержимое. Для этого в Webpack используют плейсхолдер \`[contenthash]\` в именах файлов:
\`filename: '[name].[contenthash].js'\`
Если вы изменили код в \`app.js\`, хэш изменится только у \`app.js\`. Файл \`vendor.js\` (с библиотеками) останется с тем же хэшем, и браузер не будет скачивать его заново.

**Runtime chunk (чанк рантайма):**
Webpack генерирует небольшой кусок кода (runtime), который отвечает за загрузку модулей, разрешение зависимостей и работу HMR. По умолчанию этот код вшивается в главный entry-чанк (например, в \`app.js\`).
Проблема в том, что при **любом** изменении кода приложения меняется и этот runtime-код, а значит, меняется хэш всего \`app.js\`. Браузер будет вынужден заново скачивать весь бандл приложения, даже если изменилась одна строчка.

**Решение:**
Вынести runtime в отдельный файл с помощью опции \`optimization.runtimeChunk: 'single'\`. Теперь \`runtime.js\` будет меняться при каждой сборке (его можно не кэшировать вообще), а \`app.[contenthash].js\` и \`vendor.[contenthash].js\` будут оставаться стабильными, обеспечивая идеальное долгосрочное кэширование.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-7`,
"title": `Что такое DefinePlugin, ProvidePlugin, MiniCssExtractPlugin?`,
"fullAnswer": `**DefinePlugin:**
Позволяет создавать глобальные константы, которые подставляются в код на этапе компиляции. Самый частый пример — передача переменной окружения.
\`\`\`javascript
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
  '__APP_VERSION__': JSON.stringify('1.0.0')
})
\`\`\`
В коде вы можете писать \`if (process.env.NODE_ENV === 'production')\`, и Webpack заменит это на \`if ('production' === 'production')\`, а минификатор удалит ветку \`else\`.

**ProvidePlugin:**
Автоматически загружает модули и делает их доступными как глобальные переменные в каждом файле, без необходимости писать \`import\` или \`require\`.
\`\`\`javascript
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  React: 'react'
})
\`\`\`
Теперь в любом файле можно использовать \`$\` или \`React\`, не импортируя их явно.

**MiniCssExtractPlugin:**
По умолчанию CSS в Webpack обрабатывается через \`style-loader\`, который вставляет стили в тег \`<style>\` внутри DOM. Для продакшена это плохо (блокирует рендеринг, нельзя кэшировать отдельно). \`MiniCssExtractPlugin\` извлекает весь CSS в отдельные \`.css\` файлы, которые подключаются через тег \`<link>\`. Это позволяет браузеру загружать стили параллельно и кэшировать их.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-webpack-8`,
"title": `Что такое Module Federation и кэширование в Webpack 5?`,
"fullAnswer": `**Module Federation (Модульная федерация):**
Революционная фича Webpack 5, позволяющая нескольким независимым сборкам (часто разным приложениям или микрофронтендам) динамически загружать код друг друга в рантайме. 
Одно приложение может «расшарить» (share) свои модули (например, компоненты UI-кита или версию React), а другое приложение может их «потребить» (consume) без дублирования кода и без необходимости собирать всё в один монолит. Это идеальное решение для архитектуры микрофронтендов.

**Кэширование в Webpack 5:**
До 5-й версии Webpack кэшировал результаты сборки только в памяти. При перезапуске dev-сервера или команды build кэш терялся.
Webpack 5 представил **Persistent Caching (персистентное кэширование)** на файловой системе:
\`\`\`javascript
module.exports = {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename] // пересобирать кэш при изменении конфига
    }
  }
};
\`\`\`
Теперь Webpack сохраняет результаты парсинга, компиляции и модулей на диск (в папку \`node_modules/.cache\`). При следующем запуске он читает кэш, что ускоряет холодный старт сборки в разы, особенно в больших проектах.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `vite`,
"title": `Vite`,
"questions": [
{
"id": `6-middle-vite-1`,
"title": `Почему Vite использует esbuild для dev и Rollup для prod?`,
"fullAnswer": `Это архитектурное решение, основанное на компромиссе между скоростью и качеством сборки.

**Dev-режим (esbuild):**
В режиме разработки главная цель — мгновенный старт и быстрый HMR. Vite не бандлит код приложения, а отдает его браузеру как нативные ES-модули. Однако зависимости из \`node_modules\` (например, Vue, Lodash) часто написаны на CommonJS и состоят из сотен файлов. Vite использует **esbuild** (написан на Go) для их пре-бандлинга. esbuild невероятно быстр (в 10-100 раз быстрее JS-бандлеров), потому что парсит и трансформирует код за один проход. Для dev-режима, где нужна скорость, а идеальная оптимизация не важна, esbuild идеален.

**Prod-режим (Rollup):**
В продакшене нужны максимальная оптимизация, стабильность, продвинутый tree-shaking и сложное разделение кода. Rollup (написан на JS) создавался специально для сборки библиотек и приложений на ESM. Он имеет зрелую экосистему плагинов и выдает более предсказуемый и оптимальный код, чем esbuild. Хотя Rollup медленнее esbuild, в продакшене сборка запускается редко (обычно в CI/CD), поэтому время сборки менее критично, чем качество и размер итогового бандла.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-vite-2`,
"title": `Что такое dependency pre-bundling?`,
"fullAnswer": `**Dependency pre-bundling (пре-бандлинг зависимостей)** — это процесс, который Vite запускает перед стартом dev-сервера. Он берет библиотеки из \`node_modules\` и обрабатывает их с помощью esbuild.

**Зачем это нужно:**
1. **Конвертация CJS в ESM:** Многие библиотеки в npm до сих пор экспортируются как CommonJS или UMD. Браузеры не понимают \`require()\`. Pre-bundling превращает их в чистые ES-модули.
2. **Уменьшение количества сетевых запросов:** Библиотека вроде \`lodash\` состоит из сотен внутренних файлов. Если импортировать её как ESM, браузер сделает сотни HTTP-запросов. Pre-bundling собирает \`lodash\` в один файл.
3. **Кэширование:** Результат пре-бандлинга сохраняется в папку \`node_modules/.vite\`. При следующем запуске Vite проверяет \`package-lock.json\`. Если зависимости не менялись, он пропускает этот шаг, и сервер стартует мгновенно.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-vite-3`,
"title": `Как написать кастомный плагин для Vite (хуки: config, transform, resolveId)?`,
"fullAnswer": `Плагины Vite расширяют возможности сборщика. Они основаны на системе плагинов Rollup, но имеют дополнительные хуки, специфичные для Vite (например, для dev-сервера). Плагин — это объект с обязательным полем \`name\` и хуками.

**Хук \`config\`:**
Вызывается перед резолвингом конфига Vite. Позволяет модифицировать настройки или добавлять свои. Часто используется для инъекции алиасов или изменения поведения сервера.
\`\`\`javascript
config(userConfig, env) {
  return {
    resolve: { alias: { '@': '/src' } }
  }
}
\`\`\`

**Хук \`resolveId\`:**
Отвечает за разрешение импортов. Если вернуть строку, Vite будет использовать её как путь к модулю. Если вернуть \`null\`, резолвинг перейдет к следующему плагину. Используется для создания виртуальных модулей (файлов, которых нет на диске).
\`\`\`javascript
resolveId(source) {
  if (source === 'virtual-module') return '\\0virtual-module'
}
\`\`\`

**Хук \`transform\`:**
Получает код уже загруженного модуля и позволяет его изменить. Используется для компиляции кастомных форматов файлов, замены строк или инъекции кода.
\`\`\`javascript
transform(code, id) {
  if (id.endsWith('.md')) {
    return compileMarkdownToVue(code)
  }
}
\`\`\`

**Пример плагина:**
\`\`\`javascript
export function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.txt')) {
        return \`export default \${JSON.stringify(code)}\`
      }
    }
  }
}
\`\`\``,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-vite-4`,
"title": `Что такое import.meta.glob и import.meta.globEager?`,
"fullAnswer": `Это специальные импорты Vite для работы с группой файлов по маске (glob pattern).

**\`import.meta.glob\`:**
Возвращает объект, где ключами являются пути к файлам, а значениями — функции, которые возвращают Promise (ленивая загрузка). Файлы не загружаются, пока вы не вызовете функцию.
\`\`\`javascript
const modules = import.meta.glob('./dir/*.js')
// modules = { './dir/foo.js': () => import('./dir/foo.js'), ... }

// Загрузка конкретного файла
modules['./dir/foo.js']().then(mod => { ... })
\`\`\`
Идеально подходит для маршрутизации (загрузка страниц по требованию) или работы с большим количеством файлов.

**\`import.meta.globEager\` (Устарело в Vite 5):**
Возвращает объект, где значениями являются уже загруженные модули (импорт происходит сразу, синхронно).
\`\`\`javascript
const modules = import.meta.globEager('./dir/*.js')
// modules = { './dir/foo.js': { default: ... }, ... }
\`\`\`
**Важно:** Начиная с Vite 5, \`globEager\` удален. Вместо него используется второй аргумент с опцией \`eager: true\`:
\`\`\`javascript
const modules = import.meta.glob('./dir/*.js', { eager: true })
\`\`\`
Используется, когда файлов мало и они нужны сразу (например, загрузка всех иконок, Vuex/Pinia модулей или локализаций при старте приложения).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-vite-5`,
"title": `Как настроить SSR, Library Mode, multi-page app и optimizeDeps?`,
"fullAnswer": `**SSR (Server-Side Rendering):**
Vite предоставляет встроенную поддержку SSR через API \`vite.ssrLoadModule\`. Фреймворки вроде Nuxt или SvelteKit используют это под капотом. Для ручной настройки нужно создать отдельный entry-файл для сервера (например, \`entry-server.js\`), который будет рендерить приложение в строку, и настроить Vite так, чтобы он не бандлил внешние зависимости на сервере (\`ssr: { noExternal: [...] }\`).

**Library Mode:**
Если вы собираете не приложение, а библиотеку для публикации в npm, используйте \`build.lib\`.
\`\`\`javascript
build: {
  lib: {
    entry: resolve(__dirname, 'lib/main.js'),
    name: 'MyLib',
    formats: ['es', 'umd']
  },
  rollupOptions: {
    external: ['vue'] // не включать Vue в бандл
  }
}
\`\`\`

**Multi-page app (MPA):**
По умолчанию Vite собирает SPA (один \`index.html\`). Для MPA нужно указать несколько HTML файлов в \`build.rollupOptions.input\`:
\`\`\`javascript
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      nested: resolve(__dirname, 'nested/index.html')
    }
  }
}
\`\`\`

**optimizeDeps:**
Настраивает пре-бандлинг зависимостей.
- \`include\`: Принудительно пре-бандлить определенные зависимости (полезно для глубоко вложенных пакетов).
- \`exclude\`: Исключить зависимости из пре-бандлинга (например, если библиотека уже является чистым ESM и работает медленно при бандлинге).
- \`esbuildOptions\`: Передача специфичных настроек напрямую в esbuild.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-vite-6`,
"title": `Как работать с Web Workers (?worker), ?raw, ?url и server.proxy?`,
"fullAnswer": `Vite предоставляет удобные суффиксы импорта (query suffixes) для специфичных типов ассетов.

**Web Workers (\`?worker\`):**
Позволяет импортировать файл как Web Worker. Vite автоматически обработает его сборку.
\`\`\`javascript
import MyWorker from './worker.js?worker'
const worker = new MyWorker()
\`\`\`
Если добавить \`&inline\`, воркер будет инлайнён в основной бандл как base64 строка (полезно для маленьких воркеров, чтобы избежать лишних HTTP-запросов).

**\`?raw\`:**
Импортирует файл как обычную строку. Полезно для загрузки шейдеров, SVG-кода или текстовых шаблонов.
\`\`\`javascript
import shaderCode from './shader.glsl?raw'
\`\`\`

**\`?url\`:**
Импортирует файл как строку, содержащую его URL (путь после сборки). Используется для ассетов, которые не должны обрабатываться стандартным пайплайном Vite (например, специфичные видеоформаты).
\`\`\`javascript
import videoUrl from './video.mp4?url'
\`\`\`

**server.proxy:**
Настраивает проксирование запросов на dev-сервере. Критично важно для обхода CORS при разработке, когда фронтенд и бэкенд работают на разных портах.
\`\`\`javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\\/api/, '')
    }
  }
}
\`\`\`
Теперь запросы с фронта на \`/api/users\` будут прозрачно перенаправлены на бэкенд.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `сравнение-и-оптимизация`,
"title": `Сравнение и оптимизация`,
"questions": [
{
"id": `6-middle-сравнение-и-оптимизация-1`,
"title": `Vite vs Webpack: сравнение по скорости и экосистеме.`,
"fullAnswer": `**Скорость:**
Vite радикально быстрее Webpack в режиме разработки. Webpack должен построить весь граф зависимостей и собрать бандл до того, как dev-сервер начнет работать. Чем больше проект, тем дольше старт. Vite использует нативные ES-модули браузера и pre-bundling через esbuild, поэтому стартует почти мгновенно, а скорость HMR не зависит от размера приложения. В продакшен-сборке Vite (на базе Rollup) также обычно быстрее Webpack, хотя разница менее критична, так как сборка происходит редко.

**Экосистема и зрелость:**
Webpack существует с 2012 года. У него огромная, зрелая экосистема. Для любой, даже самой специфичной задачи (загрузка экзотических форматов файлов, сложная кастомизация бандла), скорее всего, уже есть готовый loader или plugin. Vite моложе. Хотя он совместим с большинством плагинов Rollup и быстро набирает популярность, в некоторых узкоспециализированных enterprise-сценариях или legacy-проектах Webpack всё ещё остается единственным viable вариантом из-за гибкости своей конфигурации.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-сравнение-и-оптимизация-2`,
"title": `Что такое Turbopack, esbuild, Rollup, SWC?`,
"fullAnswer": `Это современные инструменты, которые совершили революцию в скорости сборки JS.

**esbuild:**
Бандлер и минификатор, написанный на языке Go. Его главная фишка — невероятная скорость (в 10-100 раз быстрее аналогов на JS). Он используется в Vite для пре-бандлинга зависимостей и трансформации кода в dev-режиме. Недостаток: менее зрелая экосистема плагинов по сравнению с Rollup.

**SWC (Speedy Web Compiler):**
Инструментарий для JavaScript/TypeScript, написанный на Rust. Создан как сверхбыстрая альтернатива Babel. Используется в Next.js для компиляции и минификации. Vite также экспериментирует с использованием SWC вместо esbuild.

**Rollup:**
Бандлер, написанный на JavaScript. Создан специально для сборки библиотек и приложений на ES Modules. Его главная сила — агрессивный и качественный tree-shaking. Используется в Vite для продакшен-сборки.

**Turbopack:**
Инкрементальный бандлер, написанный на Rust. Создан командой Vercel как преемник Webpack для фреймворка Next.js. Обещает быть в 700 раз быстрее Webpack при холодном старте и в 10 раз быстрее при HMR. Пока находится в стадии активной разработки и альфа-тестирования.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-сравнение-и-оптимизация-3`,
"title": `Как оптимизировать размер бандла (code splitting, tree-shaking, lazy loading)?`,
"fullAnswer": `Оптимизация размера бандла критична для скорости загрузки сайта.

**Code Splitting (Разделение кода):**
Разбейте монолитный бандл на части. Вынесите библиотеки из \`node_modules\` (Vue, Pinia, Lodash) в отдельный \`vendor\` чанк. Код приложения изменятся часто, а библиотеки — редко. Это позволит браузеру кэшировать vendor-файл надолго.

**Tree-shaking (Удаление мертвого кода):**
Убедитесь, что ваш код и используемые библиотеки написаны на ES Modules. Проверьте \`package.json\` библиотек: поле \`sideEffects\` должно быть \`false\` (или содержать массив файлов с побочными эффектами). Импортируйте только нужное: \`import { debounce } from 'lodash-es'\` вместо \`import _ from 'lodash'\`.

**Lazy Loading (Ленивая загрузка):**
Используйте динамические импорты \`import()\` для маршрутов (страниц) и тяжелых компонентов (например, редакторов текста, графиков, модалок). Пользователь не должен загружать код страницы «Админка», если он находится на странице «Главная».

**Дополнительно:**
Включите сжатие Brotli или Gzip на сервере. Оптимизируйте изображения (WebP/AVIF) и используйте современные форматы шрифтов (woff2).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-сравнение-и-оптимизация-4`,
"title": `Что такое Critical Rendering Path и Core Web Vitals?`,
"fullAnswer": `**Critical Rendering Path (CRP, Критический путь рендеринга):**
Это последовательность шагов, которые браузер выполняет для преобразования HTML, CSS и JS в пиксели на экране. Чтобы ускорить первую отрисовку, нужно минимизировать количество критических ресурсов (блокирующих рендеринг) и их размер. CSS блокирует рендеринг, JS блокирует парсинг HTML. Оптимизация CRP включает инлайнинг критического CSS, отложенную загрузку скриптов (\`defer\`/\`async\`) и минимизацию цепочки зависимостей.

**Core Web Vitals (Базовые веб-метрики):**
Набор метрик от Google, которые напрямую влияют на SEO и оценивают пользовательский опыт.
1. **LCP (Largest Contentful Paint):** Время отрисовки самого большого видимого элемента (картинки, заголовка). Должно быть менее 2.5 секунд. Оптимизируется preload изображений, SSR, быстрым сервером.
2. **INP (Interaction to Next Paint):** Задержка между действием пользователя (клик) и отрисовкой отклика. Должна быть менее 200 мс. Оптимизируется разбивкой тяжелых JS-задач, использованием Web Workers.
3. **CLS (Cumulative Layout Shift):** Суммарное смещение макета. Насколько сильно «прыгают» элементы при загрузке. Должно быть менее 0.1. Оптимизируется заданием явных размеров (\`width\`/\`height\`) для изображений и резервированием места под динамический контент (рекламу, шрифты).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-сравнение-и-оптимизация-5`,
"title": `Что такое HTTP/2 и HTTP/3? Как они влияют на стратегию бандлинга?`,
"fullAnswer": `**HTTP/2:**
Главное улучшение по сравнению с HTTP/1.1 — **мультиплексирование**. Браузер может отправлять и получать множество запросов и ответов по одному TCP-соединению параллельно. Также есть сжатие заголовков и Server Push.

**HTTP/3:**
Использует протокол QUIC поверх UDP вместо TCP. Решает проблему «блокировки начала очереди» (head-of-line blocking), которая все еще существовала в HTTP/2 на уровне TCP. Если один пакет теряется, в HTTP/2 ждут все остальные, а в HTTP/3 остальные потоки продолжают идти. Это значительно снижает задержки в нестабильных сетях.

**Влияние на стратегию бандлинга:**
В эпоху HTTP/1.1 каждый HTTP-запрос был дорогим. Стратегия была такой: «Собрать всё в один огромный файл, чтобы сделать как можно меньше запросов».
С приходом HTTP/2 и HTTP/3 оверхед на множество мелких запросов исчез. Теперь стратегия меняется в пользу **гранулярного code splitting**. Лучше разбить приложение на много маленьких чанков по функциональности. Браузер загрузит их параллельно за одно соединение. Если пользователь изменит одну функцию, ему не придется скачивать заново весь гигантский бандл — он скачает только один маленький измененный чанк.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `6-middle-сравнение-и-оптимизация-6`,
"title": `Что такое preload, prefetch, preconnect и immutable cache?`,
"fullAnswer": `Это механизмы управления приоритетами загрузки ресурсов браузером.

**Preload (\`<link rel="preload">\`):**
Указывает браузеру немедленно начать загрузку критически важного ресурса, который понадобится на *текущей* странице, но обнаружен браузером слишком поздно (например, шрифт, спрятанный глубоко в CSS, или важное изображение). Загружается с высоким приоритетом.

**Prefetch (\`<link rel="prefetch">\`):**
Указывает браузеру загрузить ресурс, который *может понадобиться* в будущем (например, JS-чанк следующей страницы, куда пользователь может перейти). Загружается в свободное время с очень низким приоритетом, чтобы не мешать текущей странице.

**Preconnect (\`<link rel="preconnect">\`):**
Инициирует раннее соединение с важным сторонним доменом (например, CDN со шрифтами или API). Браузер заранее делает DNS-резолвинг, устанавливает TCP-соединение и проходит TLS-рукопожатие. Когда ресурс действительно понадобится, соединение уже готово, что экономит сотни миллисекунд.

**Immutable Cache (Неизменяемый кэш):**
Стратегия кэширования, используемая вместе с хэшированными именами файлов (contenthash). Сервер отправляет заголовок \`Cache-Control: immutable, max-age=31536000\`. Это говорит браузеру: «Этот файл никогда не изменится в течение года. Даже не спрашивай сервер, есть ли новая версия (не отправляй условные запросы If-None-Match), просто бери из кэша». Это экономит сетевой трафик и ускоряет повторные визиты.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
