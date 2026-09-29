import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = process.cwd()
const QUESTIONS_DIR = path.join(ROOT, 'src', 'data', 'questions')
const ORIGINAL_GENERATOR = path.join(ROOT, 'fill-all-answers.mjs')

const FULL_PLACEHOLDER = 'Подробный ответ пока не добавлен.'
const SHORT_PLACEHOLDER = 'Краткий ответ пока не добавлен.'

const QUESTION_RE =
  /(\{\s*"id":\s*`((?:\\`|[^`])*)`,\s*"title":\s*`((?:\\`|[^`])*)`,\s*"fullAnswer":\s*`)((?:\\`|[^`])*)(`,\s*"shortAnswer":\s*`)((?:\\`|[^`])*)(`,\s*\})/gs

const decode = (s) =>
  s
    .replace(/\\`/g, '`')
    .replace(/\\\$\{/g, '${')
    .replace(/\\\\/g, '\\')

const esc = (s) =>
  String(s)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')

const clean = (s) => s.toLowerCase().replace(/ё/g, 'е')
const has = (q, ...parts) => parts.some((p) => clean(q).includes(clean(p)))

function md(title, summary, bullets = [], code = '', note = '') {
  const parts = [`## ${title}`, '', summary.trim()]

  if (bullets.length) {
    parts.push('', '**Ключевые моменты:**')
    for (const bullet of bullets) parts.push(`- ${bullet}`)
  }

  if (code) parts.push('', '**Пример:**', '', code.trim())
  if (note) parts.push('', `**Для собеседования:** ${note.trim()}`)

  return parts.join('\n')
}

function nodeAnswer(q) {
  if (has(q, 'отличия от браузерного js')) {
    return md(
      'Node.js и браузерный JavaScript',
      'JavaScript — язык, а Node.js — среда выполнения JavaScript вне браузера, построенная вокруг V8 и системных API. В браузере код работает рядом с DOM, Web APIs и ограниченной sandbox-моделью; в Node.js доступны файловая система, процессы, TCP/HTTP-серверы и другие возможности ОС.',
      [
        'В Node.js нет DOM и window по умолчанию.',
        'В браузере нет прямого доступа к fs, process и большинству системных ресурсов.',
        'Node.js широко использует event loop и неблокирующий I/O.',
        'Модульная система в современном Node.js поддерживает CommonJS и ESM.',
      ],
      '',
      'Node.js — не другой язык, а runtime для JavaScript с серверными и системными API.',
    )
  }

  if (has(q, 'npm', 'package.json', 'express')) {
    return md(
      'npm, package.json и Express',
      '`npm` — пакетный менеджер экосистемы Node.js. `package.json` хранит метаданные проекта, scripts, dependencies и devDependencies. Express — минималистичный HTTP-фреймворк поверх Node.js.',
      [
        '`npm install` устанавливает зависимости, lock-файл фиксирует точное дерево версий.',
        '`dependencies` нужны приложению в runtime, `devDependencies` — обычно только для разработки/сборки.',
        'Маршрут Express задаётся методом HTTP и путём.',
      ],
      '```js\nimport express from "express"\nconst app = express()\napp.get("/users/:id", (req, res) => res.json({ id: req.params.id }))\napp.listen(3000)\n```',
    )
  }

  if (has(q, 'module.exports', 'require', 'import/export')) {
    return md(
      'CommonJS и ESM',
      'CommonJS использует `require()` и `module.exports`; ES Modules — `import`/`export`. ESM является стандартом языка и поддерживает статический анализ, top-level await и tree-shaking в инструментах сборки.',
      [
        'CommonJS исторически был основной системой модулей Node.js.',
        'ESM включается через `.mjs` или `"type": "module"` в package.json.',
        'Нельзя бездумно смешивать форматы: правила interop отличаются.',
      ],
      '```js\n// CommonJS\nconst fs = require("node:fs")\nmodule.exports = { read }\n\n// ESM\nimport fs from "node:fs"\nexport { read }\n```',
    )
  }

  if (has(q, 'callback', 'callback hell', 'promise', 'async/await')) {
    return md(
      'Callback, Promise и async/await',
      'Callback — функция, передаваемая для вызова позже. Глубокая вложенность callback-ов ухудшает читаемость и обработку ошибок. Promise описывает будущий результат операции, а `async/await` — синтаксический слой над Promise.',
      [
        'Ошибки callback-стиля в Node.js часто передаются первым аргументом.',
        'Promise имеет состояния pending, fulfilled и rejected.',
        '`await` не блокирует весь процесс Node.js, а приостанавливает только текущую async-функцию.',
        'Независимые операции лучше запускать параллельно через `Promise.all`, если это безопасно.',
      ],
    )
  }

  if (has(q, 'модули: fs', 'path', 'http')) {
    return md(
      'fs, path и http',
      '`fs` работает с файловой системой, `path` безопасно формирует и разбирает пути, `http` позволяет создавать HTTP-серверы и клиентов без Express.',
      [
        'Для серверного кода предпочтительны асинхронные fs-операции, чтобы не блокировать event loop.',
        '`path.join()` и `path.resolve()` учитывают особенности путей ОС.',
        'Встроенный `fetch` в современных Node.js удобен для исходящих HTTP-запросов.',
      ],
      '```js\nimport { readFile } from "node:fs/promises"\nimport path from "node:path"\n\nconst file = await readFile(path.join(process.cwd(), "data.json"), "utf8")\nconst response = await fetch("https://example.com/api")\n```',
    )
  }

  if (has(q, 'middleware', 'обработка ошибок', 'next')) {
    return md(
      'Middleware и обработка ошибок в Express',
      'Middleware — функция, выполняемая в цепочке обработки запроса. Она может изменить `req/res`, завершить ответ или передать управление дальше через `next()`.',
      [
        'Порядок регистрации middleware важен.',
        'Error middleware имеет сигнатуру `(err, req, res, next)`.',
        'Не вызывайте `next()` после того, как уже отправили ответ.',
        'В async-коде централизуйте обработку ошибок и не раскрывайте клиенту внутренние stack traces.',
      ],
      '```js\napp.use(express.json())\napp.use((req, _res, next) => {\n  console.log(req.method, req.url)\n  next()\n})\n\napp.use((err, _req, res, _next) => {\n  res.status(500).json({ error: "Internal Server Error" })\n})\n```',
    )
  }

  if (has(q, 'query-параметры', 'body parser')) {
    return md(
      'Query-параметры и body parser',
      'Query-параметры находятся в URL после `?` и в Express доступны как `req.query`. Тело запроса передаётся отдельно; JSON разбирает `express.json()`, form-urlencoded — `express.urlencoded()`.',
      [
        'Query удобно использовать для фильтрации, сортировки и пагинации.',
        'Body обычно содержит данные создаваемого или изменяемого ресурса.',
        'Входные данные нужно валидировать и приводить к нужным типам.',
        'Полезно ограничивать максимально допустимый размер body.',
      ],
      '```js\napp.use(express.json())\napp.get("/users", (req, res) => res.json({ page: Number(req.query.page ?? 1) }))\napp.post("/users", (req, res) => res.status(201).json(req.body))\n```',
    )
  }

  if (has(q, 'event loop')) {
    return md(
      'Event Loop в Node.js',
      'Event loop позволяет одному JavaScript-потоку обслуживать много I/O-операций: сетевые и файловые операции выполняются ОС/libuv, а готовые callback-и ставятся в очереди для последующего выполнения.',
      [
        'Основные фазы libuv включают timers, pending callbacks, poll, check и close callbacks.',
        'Promise callbacks и `queueMicrotask` выполняются как microtasks между переходами event loop.',
        '`process.nextTick()` имеет отдельную высокоприоритетную очередь и при злоупотреблении может вызвать starvation.',
        'CPU-тяжёлый синхронный код блокирует event loop.',
      ],
    )
  }

  if (has(q, 'streams', 'buffers')) {
    return md(
      'Streams и Buffers',
      'Buffer представляет бинарные данные в памяти. Stream обрабатывает данные частями, не требуя загружать весь объём сразу, поэтому подходит для файлов, HTTP, архивов и больших наборов данных.',
      [
        'Типы stream: Readable, Writable, Duplex, Transform.',
        'Backpressure не даёт производителю переполнить медленного потребителя.',
        '`pipeline()` помогает правильно прокидывать ошибки и закрывать цепочку.',
      ],
      '```js\nimport { pipeline } from "node:stream/promises"\nimport fs from "node:fs"\n\nawait pipeline(\n  fs.createReadStream("big.bin"),\n  fs.createWriteStream("copy.bin"),\n)\n```',
    )
  }

  if (has(q, 'cluster', 'worker threads', 'child_process')) {
    return md(
      'Cluster, Worker Threads и child_process',
      'Node.js выполняет JavaScript одного процесса в одном основном потоке. Для использования нескольких CPU применяют отдельные процессы или Worker Threads — выбор зависит от типа нагрузки и требований к изоляции.',
      [
        '`worker_threads` подходят для CPU-bound вычислений и могут обмениваться памятью через SharedArrayBuffer.',
        '`child_process` запускает отдельный процесс с изолированной памятью.',
        '`cluster` исторически использовали для нескольких worker-процессов, слушающих один порт; в инфраструктуре часто масштабируют несколько экземпляров приложения на уровне контейнеров/оркестратора.',
      ],
    )
  }

  if (has(q, 'orm', 'sequelize', 'typeorm', 'prisma')) {
    return md(
      'ORM в Node.js',
      'ORM/DB toolkit отображает таблицы и запросы БД на объекты и API языка. Sequelize и TypeORM — классические ORM, Prisma делает сильный упор на схему, генерацию типизированного клиента и миграции.',
      [
        'Плюсы: скорость разработки, типизация, миграции, единый подход к данным.',
        'Минусы: скрытая стоимость запросов, риск N+1 и сложность нетипичных SQL-сценариев.',
        'Критические запросы нужно проверять по SQL и плану выполнения.',
      ],
    )
  }

  if (has(q, 'jwt', 'passport', 'websocket', 'socket.io')) {
    return md(
      'Аутентификация и WebSocket',
      'JWT — формат подписанного токена с claims; Passport.js — middleware-экосистема стратегий аутентификации. WebSocket создаёт постоянный двунаправленный канал, а Socket.IO добавляет поверх транспорта события, reconnection, rooms и fallback-механизмы.',
      [
        'JWT не шифруется сам по себе: payload обычно читаем.',
        'Проверяйте signature, expiration, issuer/audience по модели системы.',
        'Refresh token обычно хранится и ротируется безопаснее access token.',
        'Для WebSocket всё равно нужна аутентификация и авторизация событий.',
      ],
    )
  }

  if (has(q, 'pm2', 'process manager', 'деплой', 'dotenv')) {
    return md(
      'PM2, process manager и конфигурация',
      'Process manager запускает приложение, перезапускает его после падения, собирает логи и может управлять несколькими экземплярами. PM2 — популярный вариант для Node.js без контейнерного оркестратора.',
      [
        'Конфигурацию окружения передавайте через environment variables.',
        '`dotenv` удобно загружает `.env` локально; production secrets не стоит коммитить.',
        'Настройте graceful shutdown для SIGTERM/SIGINT.',
        'В контейнерной среде часть функций process manager обычно берёт на себя orchestrator.',
      ],
    )
  }

  if (has(q, 'winston', 'pino', 'jest')) {
    return md(
      'Логирование и тестирование',
      'Winston и Pino дают структурированное логирование; Pino известен низким overhead. Jest используется для unit/integration тестов, mocks и assertions.',
      [
        'Для production предпочтителен JSON-лог с timestamp, level, request/correlation id и контекстом.',
        'Не логируйте пароли, токены и персональные данные без необходимости.',
        'Unit-тесты изолируют небольшую логику; integration-тесты проверяют взаимодействие с БД/HTTP.',
      ],
    )
  }

  if (has(q, 'redis', 'kafka', 'bull', 'rate limiting', 'helmet')) {
    return md(
      'Redis, Kafka, BullMQ и защита API',
      'Redis часто используют как кэш, хранилище сессий и примитив синхронизации. Kafka — распределённый commit log для событий. Bull/BullMQ строят очереди фоновых задач поверх Redis.',
      [
        'Rate limiting ограничивает частоту запросов по выбранному ключу.',
        '`helmet` выставляет набор защитных HTTP-заголовков, но не заменяет валидацию и авторизацию.',
        'Очереди задач полезны для email, генерации файлов, интеграций и retry.',
        'Для Kafka проектируйте ключ partition, retries, idempotency и обработку повторной доставки.',
      ],
    )
  }

  throw new Error(`Для Node.js не найден шаблон ответа: ${q}`)
}

function rewriteBeforeGeneration() {
  if (!fs.existsSync(ORIGINAL_GENERATOR)) {
    throw new Error(`Не найден ${ORIGINAL_GENERATOR}`)
  }

  let total = 0
  let nodeRewritten = 0
  let placeholdersReset = 0
  let shortReset = 0

  for (let topicId = 1; topicId <= 23; topicId++) {
    const file = path.join(QUESTIONS_DIR, `topic-${topicId}.ts`)
    if (!fs.existsSync(file)) throw new Error(`Не найден ${file}`)

    const original = fs.readFileSync(file, 'utf8')
    const backup = `${file}.before-answer-repair.bak`
    if (!fs.existsSync(backup)) fs.writeFileSync(backup, original, 'utf8')

    const updated = original.replace(
      QUESTION_RE,
      (_match, prefix, id, rawTitle, rawFull, mid, _rawShort, suffix) => {
        total++
        const title = decode(rawTitle)
        let full = decode(rawFull)

        // Тема 11 требует отдельной генерации, потому что текущий nodeAnswer()
        // в fill-all-answers.mjs слишком общий.
        if (topicId === 11) {
          full = nodeAnswer(title)
          nodeRewritten++
        }

        // Темы 12–23 сейчас содержат чужой Django-текст.
        // Возвращаем их в состояние "не заполнено", после чего штатный
        // fill-all-answers.mjs применит уже имеющиеся специализированные
        // генераторы sql/postgres/redis/.../http.
        if (topicId >= 12) {
          full = FULL_PLACEHOLDER
          placeholdersReset++
        }

        // Краткие ответы пересобираем для ВСЕХ тем из соответствующего fullAnswer.
        // Это чинит найденный сдвиг shortAnswer, в т.ч. в topic-1.
        shortReset++

        return `${prefix}${esc(full)}${mid}${esc(SHORT_PLACEHOLDER)}${suffix}`
      },
    )

    fs.writeFileSync(file, updated, 'utf8')
  }

  console.log(
    `Подготовлено: вопросов=${total}, Node.js=${nodeRewritten}, full reset=${placeholdersReset}, short reset=${shortReset}`,
  )
}

function runOriginalGenerator() {
  const result = spawnSync(process.execPath, [ORIGINAL_GENERATOR], {
    cwd: ROOT,
    stdio: 'inherit',
    encoding: 'utf8',
  })

  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error(`fill-all-answers.mjs завершился с кодом ${result.status}`)
  }
}

function validate() {
  const problems = []
  let questions = 0

  for (let topicId = 1; topicId <= 23; topicId++) {
    const file = path.join(QUESTIONS_DIR, `topic-${topicId}.ts`)
    const content = fs.readFileSync(file, 'utf8')

    for (const match of content.matchAll(QUESTION_RE)) {
      questions++
      const id = decode(match[2])
      const title = decode(match[3])
      const full = decode(match[4]).trim()
      const short = decode(match[6]).trim()

      if (!full || full === FULL_PLACEHOLDER) {
        problems.push(`${id}: отсутствует fullAnswer`)
      }

      if (!short || short === SHORT_PLACEHOLDER) {
        problems.push(`${id}: отсутствует shortAnswer`)
      }

      // Главная обнаруженная порча данных: Django-ответы в посторонних темах.
      if (topicId >= 11 && /^(\*\*)?Django\b/i.test(full)) {
        problems.push(`${id}: всё ещё начинается с Django, вопрос: ${title}`)
      }

    }
  }

  if (problems.length) {
    console.error('\nПроверка не пройдена:')
    for (const problem of problems) console.error(`- ${problem}`)
    process.exitCode = 1
    return
  }

  console.log(`\n✅ Проверено ${questions} вопросов: заглушек и Django-сдвига не осталось.`)
}

rewriteBeforeGeneration()
runOriginalGenerator()
validate()
