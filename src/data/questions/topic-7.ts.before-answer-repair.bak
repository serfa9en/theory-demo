import type { TopicQuestions } from '../../types/question'

export const topic7Questions: TopicQuestions = {
"id": 7,
"slug": `topic-7`,
"title": `Тестирование (Jest, Vitest, Playwright)`,
"junior": {
"sections": [
{
"id": `основы`,
"title": `Основы`,
"questions": [
{
"id": `7-junior-основы-1`,
"title": `Что такое Unit, Integration, E2E тестирование?`,
"fullAnswer": `Тестирование делится на три основных уровня, которые отличаются масштабом проверки.

**Unit-тестирование (модульное):**
Проверяет одну маленькую часть кода — обычно одну функцию или метод — в изоляции от остального приложения. Зависимости заменяются моками.

\`\`\`javascript
// Тестируем одну функцию
function sum(a, b) {
  return a + b
}

it('складывает два числа', () => {
  expect(sum(2, 3)).toBe(5)
})
\`\`\`

Быстрое, дешёвое, много тестов. Помогает найти баги на раннем этапе.

**Integration-тестирование (интеграционное):**
Проверяет, как несколько модулей работают вместе. Например, компонент Vue + стор Pinia, или сервис + база данных.

\`\`\`javascript
it('компонент отображает имя пользователя из стора', async () => {
  const wrapper = mount(UserCard, {
    global: {
      plugins: [createTestingPinia({
        initialState: { user: { name: 'John' } }
      })]
    }
  })
  expect(wrapper.text()).toContain('John')
})
\`\`\`

Медленнее unit-тестов, но проверяет реальное взаимодействие частей.

**E2E-тестирование (End-to-End):**
Проверяет весь сценарий использования приложения как настоящий пользователь — от открытия страницы до получения результата. Запускается в реальном браузере.

\`\`\`javascript
// Playwright
it('пользователь может войти в систему', async ({ page }) => {
  await page.goto('/login')
  await page.fill('[name="email"]', 'user@example.com')
  await page.fill('[name="password"]', 'secret')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
\`\`\`

Самое медленное, но даёт максимальную уверенность, что приложение работает.

**Ключевые моменты:**
- Unit — одна функция, быстро, много тестов
- Integration — несколько модулей вместе, средняя скорость
- E2E — весь сценарий в браузере, медленно, но максимально реалистично

💡 **Для собеседования:** Три уровня тестирования: Unit (одна функция в изоляции), Integration (взаимодействие модулей), E2E (полный сценарий в браузере). Чем выше уровень — тем медленнее тесты, но тем больше уверенности в работе приложения.`,
"shortAnswer": `Три уровня тестирования: Unit (одна функция в изоляции), Integration (взаимодействие модулей), E2E (полный сценарий в браузере). Чем выше уровень — тем медленнее тесты, но тем больше уверенности в работе приложения.`,
},
{
"id": `7-junior-основы-2`,
"title": `Что такое тестовая пирамида?`,
"fullAnswer": `**Тестовая пирамида** — это концепция, которая показывает, в каком соотношении должны быть разные виды тестов в проекте.

Называется пирамидой, потому что нижний уровень должен быть самым широким (больше всего тестов), а верхний — самым узким (меньше всего тестов).

**Нижний уровень — Unit-тесты:**
Самые многочисленные. Проверяют отдельные функции и методы. Быстрые, дешёвые, легко писать. Должны составлять примерно 70% всех тестов.

**Средний уровень — Integration-тесты:**
Проверяют взаимодействие между модулями. Их меньше, чем unit-тестов — примерно 20%. Медленнее и сложнее в поддержке.

**Верхний уровень — E2E-тесты:**
Проверяют полные сценарии в браузере. Их должно быть меньше всего — примерно 10%. Самые медленные, хрупкие и дорогие в поддержке.

**Почему именно такое соотношение:**

Unit-тесты быстрые — их можно запускать тысячи за секунды. Они дают быструю обратную связь разработчику.

E2E-тесты медленные — один тест может идти несколько секунд. Если их много, прогон всех тестов займёт часы.

E2E-тесты хрупкие — они ломаются при изменении вёрстки, даже если логика не менялась. Unit-тесты на такие изменения не реагируют.

**Антипаттерн — «рожок мороженого»:**
Когда E2E-тестов больше, чем unit-тестов. Проект становится медленным, тесты постоянно ломаются, разработчики перестают им доверять.

**Практическое применение:**
- На каждую новую функцию — сначала unit-тест
- На критичные взаимодействия (API + БД, компонент + стор) — integration
- На ключевые пользовательские сценарии (регистрация, оплата) — E2E

💡 **Для собеседования:** Тестовая пирамида — принцип, по которому unit-тестов должно быть больше всего (70%), integration — меньше (20%), E2E — меньше всего (10%). Это даёт быструю обратную связь и стабильность. Обратное соотношение называется «рожок мороженого» и считается антипаттерном.`,
"shortAnswer": `Тестовая пирамида — принцип, по которому unit-тестов должно быть больше всего (70%), integration — меньше (20%), E2E — меньше всего (10%). Это даёт быструю обратную связь и стабильность. Обратное соотношение называется «рожок мороженого» и считается антипаттерном.`,
},
{
"id": `7-junior-основы-3`,
"title": `Что такое mock, stub, spy, fixture, assertion?`,
"fullAnswer": `Это базовые понятия тестирования, которые помогают изолировать код и проверять его поведение.

**Mock (мок):**
Поддельный объект, который заменяет реальную зависимость. Мок не только возвращает нужные значения, но и запоминает, как его вызывали — сколько раз, с какими аргументами.

\`\`\`javascript
const mockApi = {
  fetchUser: vi.fn().mockResolvedValue({ id: 1, name: 'John' })
}

// После вызова можно проверить
await mockApi.fetchUser(1)
expect(mockApi.fetchUser).toHaveBeenCalledWith(1)
expect(mockApi.fetchUser).toHaveBeenCalledTimes(1)
\`\`\`

Используется, когда важно проверить не только результат, но и факт вызова зависимости.

**Stub (стаб):**
Упрощённая версия зависимости, которая возвращает заранее заданные значения. В отличие от мока, стаб не проверяет, как его вызывали — он просто «подставляет» данные.

\`\`\`javascript
const stubUser = { id: 1, name: 'John', role: 'admin' }
// Просто объект с данными для теста
\`\`\`

Stub проще мока. Используется, когда нужно только предоставить данные для теста.

**Spy (шпион):**
Обёртка над реальной функцией, которая запоминает все вызовы, но не меняет поведение функции. Можно использовать и для проверки вызовов, и для подмены реализации.

\`\`\`javascript
const callback = vi.fn()
button.addEventListener('click', callback)
button.click()

expect(callback).toHaveBeenCalled() // шпион записал вызов
\`\`\`

**Fixture (фикстура):**
Заранее подготовленные тестовые данные или состояние системы, которые нужны для теста. Могут быть объектами, файлами, записями в базе данных.

\`\`\`javascript
// Фикстура пользователя
const testUser = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com'
}

it('отображает имя пользователя', () => {
  const wrapper = mount(UserCard, { props: { user: testUser } })
  expect(wrapper.text()).toContain('Test User')
})
\`\`\`

**Assertion (утверждение):**
Проверка, что результат соответствует ожидаемому. Обычно выражается через \`expect\`.

\`\`\`javascript
expect(sum(2, 3)).toBe(5)           // утверждение о равенстве
expect(user.name).toBe('John')      // утверждение о свойстве
expect(items).toHaveLength(3)       // утверждение о длине
\`\`\`

Если assertion не проходит — тест падает с ошибкой.

**Ключевые моменты:**
- Mock — подделка с проверкой вызовов
- Stub — подделка только с данными
- Spy — обёртка, которая записывает вызовы реальной функции
- Fixture — подготовленные тестовые данные
- Assertion — проверка ожидаемого результата

💡 **Для собеседования:** Mock заменяет зависимость и проверяет вызовы. Stub只提供 данные. Spy записывает вызовы реальной функции. Fixture — тестовые данные. Assertion — проверка результата через expect.`,
"shortAnswer": `Mock заменяет зависимость и проверяет вызовы. Stub只提供 данные. Spy записывает вызовы реальной функции. Fixture — тестовые данные. Assertion — проверка результата через expect.`,
},
{
"id": `7-junior-основы-4`,
"title": `Что такое test coverage? Почему 100% — не всегда хорошо?`,
"fullAnswer": `**Test coverage (покрытие кода тестами)** — это метрика, которая показывает, какой процент кода проекта выполняется при запуске тестов.

Измеряется по нескольким параметрам:
- **Statements** — сколько операторов выполнено
- **Branches** — сколько веток (if/else) покрыто
- **Functions** — сколько функций вызвано
- **Lines** — сколько строк кода выполнено

**Как посмотреть покрытие:**
\`\`\`bash
# Vitest
npx vitest run --coverage

# Jest
npx jest --coverage
\`\`\`

Результат — отчёт в консоли и HTML-файл с детализацией по каждому файлу.

**Почему 100% покрытие — не всегда хорошо:**

**1. Coverage не измеряет качество тестов:**
Можно написать тест, который просто вызовет функцию без проверки результата. Покрытие будет 100%, но тест бесполезен.

\`\`\`javascript
// Плохой тест — покрытие есть, проверки нет
it('вызывает функцию', () => {
  doSomething() // функция выполнилась, покрытие засчитано
  // но мы ничего не проверили!
})
\`\`\`

**2. Тривиальный код не стоит тестировать:**
Геттеры, простые присваивания, конфигурационные объекты — их тестирование тратит время, но не даёт ценности.

\`\`\`javascript
// Не нужно тестировать
const config = { apiUrl: 'https://api.example.com' }
\`\`\`

**3. Погоня за 100% замедляет разработку:**
Написание тестов для покрытия последних 10-20% кода может занять больше времени, чем разработка самой фичи.

**4. Ложное чувство безопасности:**
Высокое покрытие не гарантирует отсутствие багов. Тесты могут не проверять важные граничные случаи.

**Разумные цели:**
- Для бизнес-логики — 80-90% покрытия
- Для утилит и хелперов — можно меньше
- Для E2E — покрытие не измеряют (там важнее сценарии)

**Что реально важно:**
- Покрытие критичных путей (оплата, авторизация)
- Покрытие сложной логики (алгоритмы, расчёты)
- Наличие тестов на граничные случаи и ошибки

 **Для собеседования:** Test coverage — процент кода, выполняемого тестами. 100% покрытие не гарантирует качество — можно написать тесты без проверок. Разумная цель — 80-90% для бизнес-логики. Важнее не процент, а покрытие критичных путей и граничных случаев.`,
"shortAnswer": `Test coverage — процент кода, выполняемого тестами. 100% покрытие не гарантирует качество — можно написать тесты без проверок. Разумная цель — 80-90% для бизнес-логики. Важнее не процент, а покрытие критичных путей и граничных случаев.`,
},
{
"id": `7-junior-основы-5`,
"title": `Что такое Arrange-Act-Assert (AAA) и Red-Green-Refactor?`,
"fullAnswer": `Это два важных паттерна, которые помогают писать хорошие тесты.

**Arrange-Act-Assert (AAA):**
Паттерн структуры теста. Каждый тест делится на три логические части.

**Arrange (Подготовка):**
Создаём тестовые данные, моки, настраиваем окружение.

**Act (Действие):**
Вызываем тестируемый код.

**Assert (Проверка):**
Проверяем результат.

\`\`\`javascript
it('складывает два числа', () => {
  // Arrange — подготовка
  const a = 2
  const b = 3
  
  // Act — действие
  const result = sum(a, b)
  
  // Assert — проверка
  expect(result).toBe(5)
})
\`\`\`

**Преимущества AAA:**
- Тест легко читать — сразу видно, что происходит
- Понятно, где подготовка, а где проверка
- Если тест падает — сразу видно, на каком этапе проблема

**Пример с компонентом Vue:**
\`\`\`javascript
it('отображает список пользователей', async () => {
  // Arrange
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
  
  // Act
  const wrapper = mount(UserList, {
    props: { users }
  })
  await wrapper.vm.$nextTick()
  
  // Assert
  expect(wrapper.findAll('li')).toHaveLength(2)
  expect(wrapper.text()).toContain('John')
  expect(wrapper.text()).toContain('Jane')
})
\`\`\`

---

**Red-Green-Refactor:**
Цикл разработки через тестирование (основа TDD).

**Red (Красный) — написать падающий тест:**
Сначала пишем тест для функциональности, которой ещё нет. Тест падает — это нормально.

\`\`\`javascript
// Тест для функции, которую ещё не написали
it('умножает число на 2', () => {
  expect(double(5)).toBe(10) // ❌ Red — функция не существует
})
\`\`\`

**Green (Зелёный) — написать минимальный код:**
Пишем самый простой код, который заставит тест пройти. Не думаем о красоте — главное, чтобы тест стал зелёным.

\`\`\`javascript
// Минимальная реализация
function double(n) {
  return 10 // просто возвращаем нужное значение
}
// ✅ Green — тест проходит
\`\`\`

**Refactor (Рефакторинг) — улучшить код:**
Теперь, когда тест зелёный, можно улучшать код — менять реализацию, улучшать читаемость. Тест гарантирует, что мы ничего не сломали.

\`\`\`javascript
// Рефакторинг к правильной реализации
function double(n) {
  return n * 2
}
// ✅ Всё ещё зелёный — рефакторинг успешен
\`\`\`

**Почему это работает:**
- Red гарантирует, что тест действительно проверяет функциональность
- Green даёт быструю обратную связь
- Refactor позволяет улучшать код без страха сломать

**Ключевые моменты:**
- AAA — структура теста: подготовка, действие, проверка
- Red-Green-Refactor — цикл TDD: падающий тест, минимальный код, улучшение

💡 **Для собеседования:** AAA — паттерн структуры теста (Arrange подготовка, Act действие, Assert проверка). Red-Green-Refactor — цикл TDD: сначала падающий тест (Red), потом минимальный рабочий код (Green), потом улучшение (Refactor).`,
"shortAnswer": `AAA — паттерн структуры теста (Arrange подготовка, Act действие, Assert проверка). Red-Green-Refactor — цикл TDD: сначала падающий тест (Red), потом минимальный рабочий код (Green), потом улучшение (Refactor).`,
},
],
},
{
"id": `jest-vitest`,
"title": `Jest / Vitest`,
"questions": [
{
"id": `7-junior-jest-vitest-1`,
"title": `Что такое Jest и Vitest? Почему Vitest стал стандартом для Vite?`,
"fullAnswer": `**Jest:**
Популярный тестовый фреймворк для JavaScript, созданный Facebook. Долгое время был стандартом для React-проектов и использовался во многих Vue-проектах.

Особенности Jest:
- Встроенный mock-механизм
- Snapshot-тестирование
- Параллельный запуск тестов
- Покрытие кода из коробки
- Работает на Node.js, использует свой трансформатор кода (Babel)

**Vitest:**
Современный тестовый фреймворк, созданный командой Vite. Полностью совместим с API Jest, но работает на базе Vite.

**Почему Vitest стал стандартом для Vite-проектов:**

**1. Единая конфигурация:**
Vitest использует тот же \`vite.config.ts\`, что и само приложение. Не нужно настраивать отдельный конфиг для тестов.

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
\`\`\`

**2. Скорость:**
Vitest использует esbuild для трансформации кода — это в разы быстрее, чем Babel в Jest. Hot Module Replacement работает и для тестов — изменения видны мгновенно.

**3. Нативная поддержка ESM:**
Jest исторически работал с CommonJS, и поддержка ESM в нём до сих пор неполная. Vitest работает с ES-модулями из коробки — как и Vite.

**4. Совместимость с API Jest:**
Большинство тестов на Jest можно запустить на Vitest без изменений. Те же \`describe\`, \`it\`, \`expect\`, \`vi.fn()\` (аналог \`jest.fn()\`).

**5. Watch mode из коробки:**
\`\`\`bash
npx vitest      # запуск в watch-режиме (автоматически)
npx vitest run  # однократный запуск
\`\`\`

**6. Поддержка Vue, React, Svelte:**
Через плагины Vite работает с любым фреймворком.

**Сравнение команд:**

Jest использует \`jest.fn()\`, \`jest.mock()\`, \`jest.spyOn()\`.
Vitest использует \`vi.fn()\`, \`vi.mock()\`, \`vi.spyOn()\` — полный аналог.

**Когда использовать Jest:**
- Legacy-проекты, где уже настроен Jest
- Проекты без Vite
- Когда нужна специфичная функциональность Jest

**Когда использовать Vitest:**
- Новые проекты на Vite
- Vue 3, React с Vite
- Когда важна скорость

**Ключевые моменты:**
- Jest — классический фреймворк от Facebook
- Vitest — современный аналог от команды Vite
- Vitest быстрее, использует ESM, единую конфигурацию с Vite
- API почти идентичен — миграция с Jest простая

💡 **Для собеседования:** Jest — популярный тестовый фреймворк от Facebook. Vitest — современный аналог от команды Vite, быстрее за счёт esbuild, использует единую конфигурацию с Vite, нативно поддерживает ESM. API совместим с Jest, миграция простая.`,
"shortAnswer": `Jest — популярный тестовый фреймворк от Facebook. Vitest — современный аналог от команды Vite, быстрее за счёт esbuild, использует единую конфигурацию с Vite, нативно поддерживает ESM. API совместим с Jest, миграция простая.`,
},
{
"id": `7-junior-jest-vitest-2`,
"title": `Что такое describe, it/test, expect и matcher'ы (toBe, toEqual, toThrow)?`,
"fullAnswer": `Это базовые строительные блоки любого теста в Jest и Vitest.

**describe — группировка тестов:**
Объединяет связанные тесты в группу. Помогает организовать код и видеть структуру в отчёте.

\`\`\`javascript
describe('Калькулятор', () => {
  // тесты внутри
})

describe('Авторизация', () => {
  describe('Валидация формы', () => {
    // вложенные группы
  })
})
\`\`\`

**it / test — сам тест:**
\`it\` и \`test\` — это одно и то же, просто разные названия для читаемости. Выбирайте то, что лучше читается в контексте.

\`\`\`javascript
it('складывает два числа', () => {
  expect(sum(2, 3)).toBe(5)
})

test('вычитает два числа', () => {
  expect(subtract(5, 3)).toBe(2)
})
\`\`\`

**expect — утверждение:**
Начало проверки. Возвращает объект с matcher'ами.

\`\`\`javascript
expect(значение).matcher(ожидаемое)
\`\`\`

**Matcher'ы — функции проверки:**

**toBe — строгое равенство (===):**
\`\`\`javascript
expect(5).toBe(5)
expect('hello').toBe('hello')
expect(true).toBe(true)
\`\`\`

**toEqual — глубокое равенство для объектов и массивов:**
\`\`\`javascript
expect({ name: 'John' }).toEqual({ name: 'John' })
expect([1, 2, 3]).toEqual([1, 2, 3])
\`\`\`

Разница между toBe и toEqual:
- \`toBe\` сравнивает по ссылке (для примитивов работает, для объектов — нет)
- \`toEqual\` сравнивает содержимое объектов рекурсивно

\`\`\`javascript
const obj1 = { a: 1 }
const obj2 = { a: 1 }

expect(obj1).toBe(obj2)      // ❌ упадёт — разные ссылки
expect(obj1).toEqual(obj2)   // ✅ пройдёт — одинаковое содержимое
\`\`\`

**toBeDefined / toBeUndefined:**
\`\`\`javascript
expect(value).toBeDefined()    // значение не undefined
expect(value).toBeUndefined()  // значение равно undefined
\`\`\`

**toBeNull / toBeTruthy / toBeFalsy:**
\`\`\`javascript
expect(value).toBeNull()     // строго null
expect(value).toBeTruthy()   // любое truthy значение
expect(value).toBeFalsy()    // любое falsy значение
\`\`\`

**toContain — содержит элемент:**
\`\`\`javascript
expect([1, 2, 3]).toContain(2)
expect('hello world').toContain('world')
\`\`\`

**toHaveLength — проверка длины:**
\`\`\`javascript
expect([1, 2, 3]).toHaveLength(3)
expect('hello').toHaveLength(5)
\`\`\`

**toMatch — регулярное выражение:**
\`\`\`javascript
expect('hello world').toMatch(/world/)
expect(email).toMatch(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)
\`\`\`

**toThrow — проверка ошибки:**
\`\`\`javascript
expect(() => {
  throw new Error('fail')
}).toThrow()

expect(() => {
  throw new Error('fail')
}).toThrow('fail')

expect(() => {
  throw new Error('fail')
}).toThrow(Error)
\`\`\`

**rejects / resolves — для Promise:**
\`\`\`javascript
await expect(promise).resolves.toBe('ok')
await expect(promise).rejects.toThrow('error')
\`\`\`

**Отрицание — .not:**
\`\`\`javascript
expect(5).not.toBe(10)
expect([1, 2]).not.toContain(3)
\`\`\`

**Ключевые моменты:**
- \`describe\` — группа тестов
- \`it\` / \`test\` — сам тест
- \`expect\` — начало проверки
- \`toBe\` — строгое равенство, \`toEqual\` — глубокое
- \`toThrow\` — проверка ошибок
- \`.not\` — отрицание

💡 **Для собеседования:** \`describe\` группирует тесты, \`it\`/\`test\` — сам тест, \`expect\` начинает проверку. Matcher'ы: \`toBe\` (строгое равенство), \`toEqual\` (глубокое для объектов), \`toThrow\` (ошибки), \`toContain\` (содержит). Разница \`toBe\` и \`toEqual\`: первый по ссылке, второй по содержимому.`,
"shortAnswer": `describe группирует тесты, it/test — сам тест, expect начинает проверку. Matcher'ы: toBe (строгое равенство), toEqual (глубокое для объектов), toThrow (ошибки), toContain (содержит). Разница toBe и toEqual: первый по ссылке, второй по содержимому.`,
},
{
"id": `7-junior-jest-vitest-3`,
"title": `Что такое beforeEach, afterEach, beforeAll, afterAll?`,
"fullAnswer": `Это хуки жизненного цикла тестов — функции, которые выполняются до или после тестов. Нужны для настройки и очистки окружения.

**beforeEach — перед каждым тестом:**
Выполняется перед каждым \`it\`/\`test\` внутри \`describe\`. Используется для сброса состояния.

\`\`\`javascript
describe('Счётчик', () => {
  let counter
  
  beforeEach(() => {
    // Сбрасываем перед каждым тестом
    counter = { value: 0 }
  })
  
  it('увеличивает значение', () => {
    counter.value++
    expect(counter.value).toBe(1)
  })
  
  it('снова начинается с нуля', () => {
    expect(counter.value).toBe(0) // ✅ благодаря beforeEach
  })
})
\`\`\`

**afterEach — после каждого теста:**
Выполняется после каждого теста. Используется для очистки.

\`\`\`javascript
describe('Работа с файлами', () => {
  afterEach(() => {
    // Удаляем тестовые файлы после каждого теста
    fs.unlinkSync('test-file.txt')
  })
  
  it('создаёт файл', () => {
    fs.writeFileSync('test-file.txt', 'data')
    expect(fs.existsSync('test-file.txt')).toBe(true)
  })
})
\`\`\`

**beforeAll — один раз перед всеми тестами:**
Выполняется один раз перед всеми тестами в группе. Используется для дорогих операций.

\`\`\`javascript
describe('Тесты с базой данных', () => {
  let db
  
  beforeAll(async () => {
    // Подключаемся к БД один раз
    db = await connectToDatabase()
  })
  
  it('тест 1', () => { /* ... */ })
  it('тест 2', () => { /* ... */ })
})
\`\`\`

**afterAll — один раз после всех тестов:**
Выполняется один раз после всех тестов. Используется для финальной очистки.

\`\`\`javascript
describe('Тесты с базой данных', () => {
  let db
  
  beforeAll(async () => {
    db = await connectToDatabase()
  })
  
  afterAll(async () => {
    // Отключаемся от БД после всех тестов
    await db.disconnect()
  })
})
\`\`\`

**Порядок выполнения:**
\`\`\`
beforeAll (один раз)
  beforeEach
    test 1
  afterEach
  beforeEach
    test 2
  afterEach
  beforeEach
    test 3
  afterEach
afterAll (один раз)
\`\`\`

**Вложенные describe:**
Хуки работают в своей области видимости.

\`\`\`javascript
describe('Внешняя группа', () => {
  beforeAll(() => console.log('Внешний beforeAll'))
  
  describe('Внутренняя группа', () => {
    beforeAll(() => console.log('Внутренний beforeAll'))
    
    it('тест', () => {
      // Выполнится:
      // 1. Внешний beforeAll
      // 2. Внутренний beforeAll
      // 3. Тест
    })
  })
})
\`\`\`

**Асинхронные хуки:**
Хуки могут быть асинхронными — просто добавьте \`async\`.

\`\`\`javascript
beforeEach(async () => {
  await db.clear()
  await seedTestData()
})
\`\`\`

**Когда что использовать:**
- \`beforeEach\` / \`afterEach\` — когда каждый тест должен начинаться с чистого состояния
- \`beforeAll\` / \`afterAll\` — для дорогих операций (подключение к БД, запуск сервера)

**Ключевые моменты:**
- \`beforeEach\` / \`afterEach\` — перед/после каждого теста
- \`beforeAll\` / \`afterAll\` — один раз перед/после всех тестов
- Используются для настройки и очистки окружения
- Поддерживают async/await

💡 **Для собеседования:** Хуки жизненного цикла тестов. \`beforeEach\`/\`afterEach\` выполняются перед/после каждого теста (сброс состояния). \`beforeAll\`/\`afterAll\` — один раз для всей группы (дорогие операции типа подключения к БД).`,
"shortAnswer": `Хуки жизненного цикла тестов. beforeEach/afterEach выполняются перед/после каждого теста (сброс состояния). beforeAll/afterAll — один раз для всей группы (дорогие операции типа подключения к БД).`,
},
{
"id": `7-junior-jest-vitest-4`,
"title": `Как тестировать асинхронный код и Promise?`,
"fullAnswer": `Асинхронный код требует особого подхода в тестах — нужно дождаться завершения операций перед проверкой.

**Тестирование async/await:**
Самый простой способ — сделать тест асинхронным и использовать \`await\`.

\`\`\`javascript
it('загружает пользователя', async () => {
  const user = await fetchUser(1)
  expect(user.name).toBe('John')
})
\`\`\`

Важно не забывать \`async\` перед функцией теста и \`await\` перед вызовом. Иначе тест завершится до получения результата.

**Тестирование Promise через .resolves / .rejects:**

\`\`\`javascript
it('возвращает данные', async () => {
  await expect(fetchUser(1)).resolves.toEqual({
    id: 1,
    name: 'John'
  })
})

it('выбрасывает ошибку', async () => {
  await expect(fetchUser(999)).rejects.toThrow('User not found')
})
\`\`\`

**Тестирование через .then / .catch (старый стиль):**
\`\`\`javascript
it('загружает пользователя', () => {
  return fetchUser(1).then(user => {
    expect(user.name).toBe('John')
  })
})
\`\`\`

Важно вернуть Promise из теста, иначе Jest/Vitest не будет ждать его завершения.

**Тестирование setTimeout:**
\`\`\`javascript
it('вызывает callback через 1 секунду', () => {
  vi.useFakeTimers()
  const callback = vi.fn()
  
  setTimeout(callback, 1000)
  
  expect(callback).not.toHaveBeenCalled()
  
  vi.advanceTimersByTime(1000)
  
  expect(callback).toHaveBeenCalled()
  
  vi.useRealTimers()
})
\`\`\`

**Тестирование setInterval:**
\`\`\`javascript
it('вызывает callback каждые 100мс', () => {
  vi.useFakeTimers()
  const callback = vi.fn()
  
  const interval = setInterval(callback, 100)
  
  vi.advanceTimersByTime(250)
  expect(callback).toHaveBeenCalledTimes(2)
  
  clearInterval(interval)
  vi.useRealTimers()
})
\`\`\`

**Тестирование fetch:**
\`\`\`javascript
it('делает запрос к API', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ id: 1, name: 'John' })
  })
  
  const user = await fetchUser(1)
  
  expect(user.name).toBe('John')
  expect(global.fetch).toHaveBeenCalledWith('/api/users/1')
})
\`\`\`

**Тестирование нескольких Promise параллельно:**
\`\`\`javascript
it('загружает несколько пользователей', async () => {
  const [user1, user2] = await Promise.all([
    fetchUser(1),
    fetchUser(2)
  ])
  
  expect(user1.name).toBe('John')
  expect(user2.name).toBe('Jane')
})
\`\`\`

**Обработка ошибок в async коде:**
\`\`\`javascript
it('обрабатывает ошибку сети', async () => {
  global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))
  
  await expect(fetchUser(1)).rejects.toThrow('Network error')
})
\`\`\`

**Ключевые моменты:**
- Используйте \`async/await\` в тестах
- \`resolves\` / \`rejects\` для проверки Promise
- \`vi.useFakeTimers()\` для тестирования setTimeout/setInterval
- Мокайте fetch через \`vi.fn()\`
- Всегда возвращайте Promise или используйте await

💡 **Для собеседования:** Асинхронный код тестируется через \`async/await\` в тестах. \`resolves\`/\`rejects\` проверяют Promise. \`vi.useFakeTimers()\` контролирует время. Fetch мокается через \`vi.fn()\`. Главное — не забывать \`await\`, иначе тест завершится до получения результата.`,
"shortAnswer": `Асинхронный код тестируется через async/await в тестах. resolves/rejects проверяют Promise. vi.useFakeTimers() контролирует время. Fetch мокается через vi.fn(). Главное — не забывать await, иначе тест завершится до получения результата.`,
},
{
"id": `7-junior-jest-vitest-5`,
"title": `Что такое snapshot testing?`,
"fullAnswer": `**Snapshot testing (снэпшот-тестирование)** — это вид тестов, который сохраняет «снимок» результата и сравнивает его с предыдущим при каждом запуске.

**Как работает:**
1. При первом запуске теста создаётся snapshot — файл с сериализованным результатом
2. При следующих запусках результат сравнивается с сохранённым snapshot
3. Если результат изменился — тест падает
4. Если изменение ожидаемое — snapshot обновляется командой

**Пример:**
\`\`\`javascript
it('рендерит компонент правильно', () => {
  const wrapper = mount(UserCard, {
    props: {
      user: { name: 'John', age: 30 }
    }
  })
  
  expect(wrapper.html()).toMatchSnapshot()
})
\`\`\`

При первом запуске создаётся файл \`__snapshots__/UserCard.test.js.snap\`:
\`\`\`javascript
exports[\`рендерит компонент правильно 1\`] = \`
<div class="user-card">
  <h2>John</h2>
  <p>Возраст: 30</p>
</div>
\`;
\`\`\`

При следующем запуске HTML сравнивается с этим snapshot. Если кто-то изменит вёрстку — тест упадёт.

**Когда использовать snapshot-тесты:**

**1. UI-компоненты:**
Проверка, что компонент рендерится ожидаемо.

\`\`\`javascript
it('рендерит кнопку', () => {
  const wrapper = mount(Button, {
    props: { label: 'Click me', variant: 'primary' }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
\`\`\`

**2. Сериализованные данные:**
\`\`\`javascript
it('форматирует пользователя', () => {
  const user = formatUser({ name: 'John', age: 30 })
  expect(user).toMatchSnapshot()
})
\`\`\`

**3. Большие объекты:**
Когда вручную писать \`toEqual\` для большого объекта неудобно.

\`\`\`javascript
it('возвращает конфигурацию', () => {
  const config = getConfig()
  expect(config).toMatchSnapshot()
})
\`\`\`

**Обновление snapshot:**
Если изменение ожидаемое (например, поменяли вёрстку), обновляем snapshot:

\`\`\`bash
# Vitest
npx vitest -u

# Jest
npx jest -u
\`\`\`

Или в watch-режиме нажать \`u\`.

**Проблемы snapshot-тестов:**

**1. Хрупкость:**
Любое изменение в вёрстке ломает тест, даже если изменение правильное. Приходится постоянно обновлять snapshots.

**2. Большие файлы:**
Snapshots могут разрастаться до тысяч строк. Их сложно ревьювить.

**3. Ложное чувство безопасности:**
Разработчики могут механически обновлять snapshots, не проверяя, что изменение корректно.

**Лучшие практики:**

**1. Не злоупотреблять:**
Snapshot — дополнение к обычным тестам, не замена. Проверяйте важное через \`expect\`, остальное — через snapshot.

\`\`\`javascript
it('рендерит компонент', () => {
  const wrapper = mount(UserCard, { props: { user } })
  
  // Важное проверяем явно
  expect(wrapper.text()).toContain('John')
  expect(wrapper.find('.avatar').exists()).toBe(true)
  
  // Остальное — snapshot
  expect(wrapper.html()).toMatchSnapshot()
})
\`\`\`

**2. Ревьювить snapshots:**
При обновлении snapshot проверяйте diff — что именно изменилось.

**3. Inline snapshots:**
Можно хранить snapshot прямо в коде теста:

\`\`\`javascript
it('форматирует дату', () => {
  expect(formatDate(new Date('2024-01-01'))).toMatchInlineSnapshot(\`"1 января 2024"\`)
})
\`\`\`

Удобно для маленьких значений — видно сразу в коде.

**Ключевые моменты:**
- Snapshot сохраняет результат и сравнивает при каждом запуске
- Обновляется через флаг \`-u\`
- Хорош для UI и больших объектов
- Не заменяет обычные assertion'ы
- Inline snapshots хранятся прямо в коде

💡 **Для собеседования:** Snapshot testing сохраняет «снимок» результата и сравнивает с предыдущим при каждом запуске. Обновляется через \`-u\`. Хорош для UI-компонентов и больших объектов. Не заменяет обычные тесты — используйте вместе. Inline snapshots хранятся в коде теста.`,
"shortAnswer": `Snapshot testing сохраняет «снимок» результата и сравнивает с предыдущим при каждом запуске. Обновляется через -u. Хорош для UI-компонентов и больших объектов. Не заменяет обычные тесты — используйте вместе. Inline snapshots хранятся в коде теста.`,
},
],
},
{
"id": `playwright`,
"title": `Playwright`,
"questions": [
{
"id": `7-junior-playwright-1`,
"title": `Что такое Playwright? Чем отличается от Cypress и Selenium?`,
"fullAnswer": `**Playwright:**
Библиотека для E2E-тестирования, созданная Microsoft. Позволяет автоматизировать браузеры Chromium, Firefox и WebKit (Safari) через один API.

**Ключевые особенности Playwright:**
- Поддержка трёх движков браузеров из коробки
- Автоматическое ожидание элементов (auto-waiting)
- Работа с несколькими вкладками и контекстами
- Эмуляция мобильных устройств
- Запись тестов через codegen
- Trace viewer для отладки
- Быстрый и надёжный

---

**Сравнение с Cypress:**

Cypress работает только с Chromium-браузерами (Chrome, Edge). Playwright поддерживает Chromium, Firefox и WebKit.

Cypress запускается внутри браузера и имеет доступ к JavaScript-контексту страницы. Playwright работает снаружи браузера через протокол DevTools — это даёт больше контроля, но нет прямого доступа к JS.

Cypress не поддерживает несколько вкладок одновременно. Playwright легко работает с несколькими вкладками и контекстами.

Cypress медленнее на больших проектах. Playwright быстрее за счёт параллельного запуска и оптимизированного API.

Cypress проще для новичков — хороший UI, запись тестов. Playwright мощнее, но требует больше знаний.

---

**Сравнение с Selenium:**

Selenium — старейшая библиотека для автоматизации браузеров. Работает через WebDriver — отдельный сервер для каждого браузера.

Selenium медленный — каждый запрос идёт через WebDriver. Playwright работает напрямую с браузером через DevTools Protocol — быстрее.

Selenium требует установки драйверов для каждого браузера. Playwright устанавливает браузеры сам через одну команду.

Selenium нестабильный — часто бывают flaky-тесты из-за проблем с синхронизацией. Playwright имеет встроенное auto-waiting — тесты стабильнее.

Selenium поддерживает много языков (Java, Python, C#, JS). Playwright официально поддерживает JS/TS, Python, Java, C#.

---

**Когда что использовать:**

Playwright — для новых проектов, когда нужна скорость и надёжность, поддержка нескольких браузеров.

Cypress — для простых проектов на React/Vue, когда важна простота и хороший UI для отладки.

Selenium — для legacy-проектов, когда нужна поддержка старых браузеров или специфичных языков.

**Ключевые моменты:**
- Playwright — современный, быстрый, поддерживает 3 браузера
- Cypress — проще, но только Chromium, работает внутри браузера
- Selenium — старый, медленный, но поддерживает много языков и браузеров

💡 **Для собеседования:** Playwright — библиотека от Microsoft для E2E-тестирования. Поддерживает Chromium, Firefox, WebKit. Быстрее Selenium (работает через DevTools Protocol, не WebDriver). Мощнее Cypress (несколько вкладок, контекстов). Имеет auto-waiting, trace viewer, codegen.`,
"shortAnswer": `Playwright — библиотека от Microsoft для E2E-тестирования. Поддерживает Chromium, Firefox, WebKit. Быстрее Selenium (работает через DevTools Protocol, не WebDriver). Мощнее Cypress (несколько вкладок, контекстов). Имеет auto-waiting, trace viewer, codegen.`,
},
{
"id": `7-junior-playwright-2`,
"title": `Какие браузеры поддерживает? Как написать первый E2E тест?`,
"fullAnswer": `**Поддерживаемые браузеры:**

Playwright поддерживает три браузерных движка:
- **Chromium** — Chrome, Edge, Opera
- **Firefox** — Mozilla Firefox
- **WebKit** — Safari (движок Apple)

Все три устанавливаются одной командой:
\`\`\`bash
npx playwright install
\`\`\`

Также Playwright поддерживает эмуляцию мобильных устройств — можно тестировать как на iPhone, так и на Android.

---

**Установка Playwright:**
\`\`\`bash
npm init playwright@latest
\`\`\`

Эта команда создаст:
- Папку \`tests/\` с примерами тестов
- Папку \`test-results/\` для результатов
- Папку \`playwright-report/\` для HTML-отчёта
- Файл \`playwright.config.ts\` с конфигурацией

---

**Первый E2E тест:**

\`\`\`typescript
// tests/example.spec.ts
import { test, expect } from '@playwright/test'

test('главная страница загружается', async ({ page }) => {
  // Открываем страницу
  await page.goto('https://example.com')
  
  // Проверяем заголовок
  await expect(page).toHaveTitle(/Example/)
  
  // Проверяем наличие элемента
  await expect(page.locator('h1')).toBeVisible()
  
  // Проверяем текст
  await expect(page.locator('h1')).toHaveText('Example Domain')
})
\`\`\`

**Запуск тестов:**
\`\`\`bash
npx playwright test              # все тесты
npx playwright test example      # конкретный файл
npx playwright test --headed     # в видимом браузере
npx playwright test --debug      # режим отладки
\`\`\`

**Более сложный пример — тест формы:**
\`\`\`typescript
test('пользователь регистрируется', async ({ page }) => {
  // Открываем страницу регистрации
  await page.goto('https://example.com/register')
  
  // Заполняем форму
  await page.fill('[name="email"]', 'user@example.com')
  await page.fill('[name="password"]', 'secret123')
  await page.fill('[name="confirmPassword"]', 'secret123')
  
  // Нажимаем кнопку
  await page.click('button[type="submit"]')
  
  // Проверяем результат
  await expect(page).toHaveURL('/profile')
  await expect(page.locator('.welcome')).toContainText('Добро пожаловать')
})
\`\`\`

**Тест с несколькими браузерами:**

В \`playwright.config.ts\` настраиваем проекты:
\`\`\`typescript
export default defineConfig({
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } }
  ]
})
\`\`\`

Теперь каждый тест запустится в трёх браузерах.

**Эмуляция мобильного устройства:**
\`\`\`typescript
import { devices } from '@playwright/test'

export default defineConfig({
  projects: [
    {
      name: 'iPhone 12',
      use: {
        ...devices['iPhone 12'],
        locale: 'ru-RU'
      }
    }
  ]
})
\`\`\`

**Запись тестов через codegen:**
\`\`\`bash
npx playwright codegen https://example.com
\`\`\`

Откроется браузер с панелью записи. Вы кликаете по элементам — Playwright генерирует код теста.

**Ключевые моменты:**
- Playwright поддерживает Chromium, Firefox, WebKit
- Установка: \`npm init playwright@latest\`
- Первый тест: \`page.goto()\` + \`expect()\`
- Запуск: \`npx playwright test\`
- Codegen записывает тесты автоматически

💡 **Для собеседования:** Playwright поддерживает Chromium, Firefox, WebKit. Установка через \`npm init playwright@latest\`. Первый тест — \`page.goto()\` и \`expect()\`. Запуск через \`npx playwright test\`. Есть codegen для записи тестов и эмуляция мобильных устройств.`,
"shortAnswer": `Playwright поддерживает Chromium, Firefox, WebKit. Установка через npm init playwright@latest. Первый тест — page.goto() и expect(). Запуск через npx playwright test. Есть codegen для записи тестов и эмуляция мобильных устройств.`,
},
{
"id": `7-junior-playwright-3`,
"title": `Что такое page, browser, context?`,
"fullAnswer": `Это три ключевых объекта в Playwright, которые представляют разные уровни работы с браузером.

**Browser — браузер:**
Экземпляр браузера (Chrome, Firefox, Safari). Запуск браузера — дорогая операция, обычно делается один раз на все тесты.

\`\`\`javascript
const browser = await chromium.launch()
// или firefox.launch(), webkit.launch()
\`\`\`

**Browser Context — изолированная среда:**
Аналог профиля браузера или инкогнито-режима. Каждый контекст имеет свои cookies, localStorage, сессию. Создание контекста быстрое.

\`\`\`javascript
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  locale: 'ru-RU',
  timezoneId: 'Europe/Moscow'
})
\`\`\`

Зачем нужен контекст:
- Изоляция тестов — каждый тест в своём контексте
- Разные пользователи — можно создать несколько контекстов с разными cookies
- Параллельное выполнение — каждый worker получает свой контекст
- Разные настройки — язык, часовой пояс, геолокация

**Page — страница:**
Одна вкладка браузера. В одном контексте может быть несколько страниц.

\`\`\`javascript
const page = await context.newPage()
await page.goto('https://example.com')
\`\`\`

**Иерархия:**
\`\`\`
Browser (браузер)
  └── Context (изолированная среда)
        └── Page (вкладка)
              └── Frame (iframe)
                    └── Element (элемент)
\`\`\`

**Практический пример:**
\`\`\`javascript
// Запуск браузера
const browser = await chromium.launch()

// Создание двух изолированных контекстов
const context1 = await browser.newContext()
const context2 = await browser.newContext()

// В каждом контексте — своя страница
const page1 = await context1.newPage()
const page2 = await context2.newPage()

// Разные пользователи в разных контекстах
await context1.addCookies([{ name: 'user', value: 'admin' }])
await context2.addCookies([{ name: 'user', value: 'guest' }])

// Оба работают параллельно
await page1.goto('/dashboard')
await page2.goto('/dashboard')

// Очистка
await browser.close()
\`\`\`

**В тестах Playwright:**
Обычно не нужно создавать browser/context/page вручную — Playwright делает это автоматически через fixtures.

\`\`\`javascript
test('пример', async ({ page }) => {
  // page уже создан и готов к использованию
  await page.goto('/')
})
\`\`\`

**Кастомные fixtures:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  use: {
    viewport: { width: 1280, height: 720 },
    locale: 'ru-RU'
  }
})
\`\`\`

**Ключевые моменты:**
- Browser — экземпляр браузера (дорогой, создаётся один раз)
- Context — изолированная среда (cookies, localStorage)
- Page — вкладка браузера
- В тестах создаются автоматически через fixtures

💡 **Для собеседования:** Browser — браузер, Context — изолированная среда (как инкогнито), Page — вкладка. Иерархия: Browser → Context → Page. Context даёт изоляцию тестов, разные cookies, настройки. В тестах Playwright создаются автоматически.`,
"shortAnswer": `Browser — браузер, Context — изолированная среда (как инкогнито), Page — вкладка. Иерархия: Browser → Context → Page. Context даёт изоляцию тестов, разные cookies, настройки. В тестах Playwright создаются автоматически.`,
},
{
"id": `7-junior-playwright-4`,
"title": `Как найти элемент (locator, getByRole, getByTestId)?`,
"fullAnswer": `В Playwright есть несколько способов найти элемент на странице. Главное правило — использовать самые устойчивые селекторы.

**locator — базовый метод:**
Принимает CSS-селектор или XPath.

\`\`\`javascript
// CSS-селектор
const button = page.locator('button.submit')
const input = page.locator('input[name="email"]')

// XPath
const element = page.locator('//div[@class="container"]')

// Текст
const button = page.locator('button', { hasText: 'Submit' })
\`\`\`

**getByRole — поиск по ARIA-роли (рекомендуется):**
Самый устойчивый способ. Опирется на семантику, а не на классы.

\`\`\`javascript
// Кнопка
const button = page.getByRole('button', { name: 'Submit' })

// Ссылка
const link = page.getByRole('link', { name: 'Home' })

// Заголовок
const heading = page.getByRole('heading', { level: 1 })

// Текстовое поле
const input = page.getByRole('textbox', { name: 'Email' })

// Чекбокс
const checkbox = page.getByRole('checkbox', { name: 'Accept terms' })
\`\`\`

Параметр \`name\` ищет по видимому тексту, aria-label или aria-labelledby.

**getByText — поиск по тексту:**
\`\`\`javascript
const element = page.getByText('Welcome')
const exact = page.getByText('Welcome', { exact: true })
\`\`\`

**getByLabel — поиск по label формы:**
\`\`\`javascript
const email = page.getByLabel('Email address')
\`\`\`

**getByPlaceholder — поиск по placeholder:**
\`\`\`javascript
const search = page.getByPlaceholder('Search...')
\`\`\`

**getByTestId — поиск по data-testid:**
Используется, когда другие способы не подходят. Требует добавления атрибутов в код.

\`\`\`javascript
// В коде компонента
<button data-testid="submit-btn">Submit</button>

// В тесте
const button = page.getByTestId('submit-btn')
\`\`\`

Настройка префикса для testid:
\`\`\`typescript
// playwright.config.ts
export default defineConfig({
  use: {
    testIdAttribute: 'data-testid'
  }
})
\`\`\`

**Приоритет селекторов (от лучшего к худшему):**

1. **getByRole** — по ARIA-роли, самый устойчивый
2. **getByLabel** — по label формы
3. **getByPlaceholder** — по placeholder
4. **getByText** — по видимому тексту
5. **getByTestId** — по data-testid (требует изменения кода)
6. **locator** — по CSS/XPath (последний вариант)

**Фильтрация локаторов:**
\`\`\`javascript
// Первый элемент
const first = page.getByRole('button').first()

// Последний элемент
const last = page.getByRole('button').last()

// По индексу
const third = page.getByRole('button').nth(2)

// Фильтр по тексту
const submit = page.getByRole('button').filter({ hasText: 'Submit' })

// Вложенность
const card = page.locator('.card')
const button = card.getByRole('button')
\`\`\`

**Ожидание элемента:**
\`\`\`javascript
// Ждём появления
await page.getByRole('button').waitFor()

// Ждём видимости
await expect(page.getByRole('button')).toBeVisible()

// Ждём наличия в DOM
await expect(page.getByRole('button')).toBeAttached()
\`\`\`

**Ключевые моменты:**
- getByRole — рекомендуется, по ARIA-роли
- getByTestId — по data-testid, требует атрибутов в коде
- locator — базовый метод, CSS/XPath
- Приоритет: role > label > text > testid > locator

💡 **Для собеседования:** В Playwright есть несколько способов найти элемент. getByRole — рекомендуется (по ARIA-роли), getByTestId — по data-testid (требует атрибутов), locator — базовый (CSS/XPath). Приоритет: role, label, placeholder, text, testid, locator.`,
"shortAnswer": `В Playwright есть несколько способов найти элемент. getByRole — рекомендуется (по ARIA-роли), getByTestId — по data-testid (требует атрибутов), locator — базовый (CSS/XPath). Приоритет: role, label, placeholder, text, testid, locator.`,
},
{
"id": `7-junior-playwright-5`,
"title": `Что такое auto-waiting? Как кликнуть, ввести текст, проверить видимость?`,
"fullAnswer": `**Auto-waiting (автоматическое ожидание):**

Одна из ключевых фич Playwright. Перед каждым действием (клик, ввод текста) Playwright автоматически ждёт, пока элемент станет готовым к взаимодействию.

Что проверяет auto-waiting:
- Элемент присутствует в DOM
- Элемент видим (не display: none, не opacity: 0)
- Элемент стабилен (не анимируется)
- Элемент доступен (не перекрыт другим элементом)
- Элемент включён (не disabled)

Это решает главную проблему Selenium — flaky-тесты из-за того, что элемент ещё не готов.

\`\`\`javascript
// Не нужно писать явные ожидания
await page.click('button')  // Playwright сам подождёт

// В Selenium пришлось бы писать:
// await WebDriverWait(driver, 10).until(
//   EC.element_to_be_clickable((By.CSS_SELECTOR, 'button'))
// )
// await page.click('button')
\`\`\`

---

**Клик по элементу:**

\`\`\`javascript
// Обычный клик
await page.click('button')

// Двойной клик
await page.dblclick('button')

// Правый клик
await page.click('button', { button: 'right' })

// Клик с модификаторами
await page.click('button', { modifiers: ['Control'] })

// Клик по координатам
await page.click('canvas', { position: { x: 100, y: 200 } })

// Клик через locator
await page.getByRole('button', { name: 'Submit' }).click()
\`\`\`

---

**Ввод текста:**

\`\`\`javascript
// Очистить поле и ввести текст
await page.fill('input[name="email"]', 'user@example.com')

// Ввести текст посимвольно (имитация клавиатуры)
await page.type('input[name="email"]', 'user@example.com', {
  delay: 100 // задержка между символами в мс
})

// Нажать клавишу
await page.press('input', 'Enter')
await page.press('input', 'Tab')
await page.press('input', 'Backspace')

// Комбинация клавиш
await page.press('input', 'Control+A')
\`\`\`

Разница между \`fill\` и \`type\`:
- \`fill\` — очищает поле и вставляет текст сразу (быстро)
- \`type\` — вводит посимвольно, как человек (медленно, но реалистично)

---

**Проверка видимости:**

\`\`\`javascript
// Элемент видим на странице
await expect(page.locator('.modal')).toBeVisible()

// Элемент скрыт
await expect(page.locator('.modal')).toBeHidden()

// Элемент есть в DOM
await expect(page.locator('.item')).toBeAttached()

// Элемента нет в DOM
await expect(page.locator('.item')).not.toBeAttached()

// Элемент содержит текст
await expect(page.locator('h1')).toContainText('Welcome')

// Точное совпадение текста
await expect(page.locator('h1')).toHaveText('Welcome')

// Атрибут
await expect(page.locator('input')).toHaveAttribute('type', 'email')

// Значение input
await expect(page.locator('input')).toHaveValue('test')

// CSS-свойство
await expect(page.locator('div')).toHaveCSS('color', 'rgb(255, 0, 0)')
\`\`\`

**Ожидание с таймаутом:**
\`\`\`javascript
// По умолчанию таймаут 5 секунд
await expect(page.locator('.loaded')).toBeVisible()

// Кастомный таймаут
await expect(page.locator('.loaded')).toBeVisible({
  timeout: 10000 // 10 секунд
})
\`\`\`

**Проверка URL:**
\`\`\`javascript
await expect(page).toHaveURL('/dashboard')
await expect(page).toHaveURL(/.*dashboard/)
\`\`\`

**Проверка заголовка:**
\`\`\`javascript
await expect(page).toHaveTitle('My App')
\`\`\`

**Ключевые моменты:**
- Auto-waiting — Playwright сам ждёт готовности элемента
- \`click\` — клик, \`fill\` — ввод текста, \`type\` — посимвольный ввод
- \`toBeVisible\`, \`toBeHidden\`, \`toContainText\` — проверки
- Таймаут по умолчанию 5 секунд, можно изменить

 **Для собеседования:** Auto-waiting — Playwright автоматически ждёт готовности элемента перед действием. \`click\` для клика, \`fill\` для ввода текста, \`type\` для посимвольного ввода. Проверки: \`toBeVisible\`, \`toContainText\`, \`toHaveURL\`. Таймаут по умолчанию 5 секунд.`,
"shortAnswer": `Auto-waiting — Playwright автоматически ждёт готовности элемента перед действием. click для клика, fill для ввода текста, type для посимвольного ввода. Проверки: toBeVisible, toContainText, toHaveURL. Таймаут по умолчанию 5 секунд.`,
},
],
},
{
"id": `методологии`,
"title": `Методологии`,
"questions": [
{
"id": `7-junior-методологии-1`,
"title": `Что такое TDD и BDD?`,
"fullAnswer": `**TDD (Test-Driven Development) — разработка через тестирование:**

Подход, при котором тесты пишутся **до** кода. Цикл: Red → Green → Refactor.

**Процесс:**
1. Пишем тест для функциональности, которой ещё нет
2. Запускаем — тест падает (Red)
3. Пишем минимальный код, чтобы тест прошёл (Green)
4. Улучшаем код, тест остаётся зелёным (Refactor)
5. Повторяем

**Пример:**
\`\`\`javascript
// Шаг 1: пишем тест
it('возвращает true для чётных чисел', () => {
  expect(isEven(4)).toBe(true)
  expect(isEven(3)).toBe(false)
})

// Шаг 2: тест падает — функции нет

// Шаг 3: минимальная реализация
function isEven(n) {
  return n % 2 === 0
}

// Шаг 4: тест зелёный

// Шаг 5: рефакторинг (если нужен)
\`\`\`

**Преимущества TDD:**
- Код сразу покрыт тестами
- Проектирование через тесты — получается более тестируемый код
- Быстрая обратная связь
- Меньше багов

**Недостатки:**
- Медленнее на старте
- Сложно применять к UI и интеграционным тестам
- Требует дисциплины

---

**BDD (Behavior-Driven Development) — разработка через поведение:**

Расширение TDD, где тесты описываются на языке, понятном бизнесу. Фокус на поведении системы, а не на реализации.

**Формат Given-When-Then:**
- **Given (Дано)** — начальное состояние
- **When (Когда)** — действие
- **Then (Тогда)** — ожидаемый результат

**Пример на обычном языке:**
\`\`\`
Сценарий: Пользователь входит в систему
  Дано пользователь зарегистрирован с email "user@example.com"
  Когда пользователь вводит email и пароль
  И нажимает кнопку "Войти"
  Тогда пользователь попадает на страницу профиля
  И видит приветствие "Добро пожаловать, User!"
\`\`\`

**Пример в коде (Vitest):**
\`\`\`javascript
describe('Авторизация', () => {
  it('пользователь входит в систему', async () => {
    // Given
    const user = await createUser({
      email: 'user@example.com',
      password: 'secret'
    })
    
    // When
    const page = await browser.newPage()
    await page.goto('/login')
    await page.fill('[name="email"]', user.email)
    await page.fill('[name="password"]', user.password)
    await page.click('button[type="submit"]')
    
    // Then
    await expect(page).toHaveURL('/profile')
    await expect(page.locator('.welcome')).toHaveText('Добро пожаловать, User!')
  })
})
\`\`\`

**Инструменты BDD:**
Cucumber, SpecFlow, Behave — фреймворки, которые позволяют писать тесты в формате Gherkin (Given-When-Then).

**Разница TDD и BDD:**
TDD фокусируется на технической реализации — «функция должна вернуть X». BDD фокусируется на поведении — «пользователь должен увидеть Y». BDD более понятен не-техническим участникам команды.

**Ключевые моменты:**
- TDD — тесты до кода, цикл Red-Green-Refactor
- BDD — тесты на языке поведения, формат Given-When-Then
- BDD расширяет TDD, добавляя бизнес-контекст

💡 **Для собеседования:** TDD — разработка через тестирование: сначала тест, потом код (Red-Green-Refactor). BDD — разработка через поведение: тесты в формате Given-When-Then на понятном бизнесу языке. BDD расширяет TDD, добавляя фокус на пользовательских сценариях.`,
"shortAnswer": `TDD — разработка через тестирование: сначала тест, потом код (Red-Green-Refactor). BDD — разработка через поведение: тесты в формате Given-When-Then на понятном бизнесу языке. BDD расширяет TDD, добавляя фокус на пользовательских сценариях.`,
},
{
"id": `7-junior-методологии-2`,
"title": `Что такое flaky tests и как с ними бороться?`,
"fullAnswer": `**Flaky tests (нестабильные тесты)** — это тесты, которые иногда проходят, а иногда падают без изменения кода. Сегодня зелёный, завтра красный, послезавтра снова зелёный.

**Почему это проблема:**
Разработчики перестают доверять тестам. Когда тест падает, все думают «это опять flaky», и могут пропустить реальный баг.

**Типичные причины flaky-тестов:**

**1. Зависимость от времени:**
\`\`\`javascript
// Плохо — зависит от текущего времени
it('показывает дату', () => {
  const today = new Date().toISOString()
  expect(wrapper.text()).toContain(today)
})
\`\`\`

**Решение:** мокать время через \`vi.useFakeTimers()\`.

**2. Зависимость от порядка тестов:**
\`\`\`javascript
// Плохо — тест зависит от состояния после предыдущего
let counter = 0

it('test 1', () => {
  counter++
  expect(counter).toBe(1)
})

it('test 2', () => {
  counter++
  expect(counter).toBe(2) // упадёт, если test 1 не запустился
})
\`\`\`

**Решение:** каждый тест должен быть независимым, использовать \`beforeEach\` для сброса состояния.

**3. Асинхронность без ожидания:**
\`\`\`javascript
// Плохо — не ждём завершения асинхронной операции
it('загружает данные', () => {
  fetchData()
  expect(wrapper.text()).toContain('data') // данные ещё не загрузились
})
\`\`\`

**Решение:** использовать \`await\`, \`waitFor\`, \`flushPromises\`.

**4. Сетевые запросы без мока:**
\`\`\`javascript
// Плохо — реальный запрос к API
it('получает пользователей', async () => {
  const users = await fetch('/api/users') // может упасть из-за сети
})
\`\`\`

**Решение:** мокать через MSW или \`vi.mock\`.

**5. Случайные значения:**
\`\`\`javascript
// Плохо
it('генерирует ID', () => {
  const id = generateId()
  expect(id).toBe(123) // ID случайный, тест нестабилен
})
\`\`\`

**Решение:** мокать генератор случайных чисел.

**Как бороться с flaky-тестами:**

**1. Изоляция тестов:**
Каждый тест должен работать независимо. Использовать \`beforeEach\` для настройки, \`afterEach\` для очистки.

\`\`\`javascript
describe('User tests', () => {
  beforeEach(() => {
    // Сброс состояния перед каждым тестом
    vi.clearAllMocks()
    db.clear()
  })
})
\`\`\`

**2. Явные ожидания:**
Вместо \`setTimeout\` использовать специальные функции ожидания.

\`\`\`javascript
// Playwright — авто-ожидание
await expect(page.locator('.loaded')).toBeVisible()

// Vitest — waitFor
import { waitFor } from '@testing-library/vue'
await waitFor(() => {
  expect(wrapper.text()).toContain('loaded')
})
\`\`\`

**3. Retry для известных flaky-тестов:**
\`\`\`javascript
// Playwright config
export default defineConfig({
  retries: 2 // повторить до 2 раз при падении
})

// Отметить конкретный тест
it('flaky test', async ({ page }) => {
  test.retry(3)
  // ...
})
\`\`\`

**4. Мониторинг:**
Отслеживать, какие тесты часто падают. Помечать их как flaky и чинить в первую очередь.

**5. Не игнорировать:**
Никогда не оставлять flaky-тесты «как есть». Либо чинить, либо удалять.

**Ключевые моменты:**
- Flaky — тесты, которые падают без изменения кода
- Причины: время, порядок, асинхронность, сеть, случайность
- Решения: изоляция, явные ожидания, моки, retry
- Главное — не игнорировать, а чинить

💡 **Для собеседования:** Flaky tests — нестабильные тесты, которые иногда падают без изменения кода. Причины: зависимость от времени, порядка тестов, асинхронности, сети. Борьба: изоляция тестов, явные ожидания, моки, retry. Главное правило — не игнорировать flaky-тесты.`,
"shortAnswer": `Flaky tests — нестабильные тесты, которые иногда падают без изменения кода. Причины: зависимость от времени, порядка тестов, асинхронности, сети. Борьба: изоляция тестов, явные ожидания, моки, retry. Главное правило — не игнорировать flaky-тесты.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `jest-vitest`,
"title": `Jest / Vitest`,
"questions": [
{
"id": `7-middle-jest-vitest-1`,
"title": `Как работает mock (jest.fn, vi.fn, mockReturnValue, mockImplementation)?`,
"fullAnswer": `**Mock-функции** — это поддельные функции, которые заменяют реальные зависимости в тестах. Они позволяют контролировать поведение зависимостей и отслеживать вызовы.

**Создание mock-функции:**
\`\`\`javascript
// Jest
const mockFn = jest.fn()

// Vitest
const mockFn = vi.fn()
\`\`\`

**Основные методы:**

**mockReturnValue** — возвращает фиксированное значение:
\`\`\`javascript
mockFn.mockReturnValue(42)
console.log(mockFn()) // 42
console.log(mockFn()) // 42 (всегда одно и то же)
\`\`\`

**mockReturnValueOnce** — возвращает значение только один раз:
\`\`\`javascript
mockFn
  .mockReturnValueOnce('первый вызов')
  .mockReturnValueOnce('второй вызов')
  .mockReturnValue('остальные')

console.log(mockFn()) // 'первый вызов'
console.log(mockFn()) // 'второй вызов'
console.log(mockFn()) // 'остальные'
\`\`\`

**mockImplementation** — задаёт полную реализацию функции:
\`\`\`javascript
mockFn.mockImplementation((a, b) => a + b)
console.log(mockFn(2, 3)) // 5
\`\`\`

**mockImplementationOnce** — реализация только для одного вызова:
\`\`\`javascript
mockFn
  .mockImplementationOnce(() => 'первый')
  .mockImplementationOnce(() => 'второй')

console.log(mockFn()) // 'первый'
console.log(mockFn()) // 'второй'
\`\`\`

**Отслеживание вызовов:**
\`\`\`javascript
mockFn('arg1', 'arg2')
mockFn('arg3')

// Сколько раз вызвана
expect(mockFn).toHaveBeenCalledTimes(2)

// С какими аргументами
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2')

// Последний вызов
expect(mockFn).toHaveBeenLastCalledWith('arg3')

// Все вызовы
expect(mockFn.mock.calls).toEqual([
  ['arg1', 'arg2'],
  ['arg3']
])

// Возвращённые значения
expect(mockFn.mock.results).toEqual([
  { type: 'return', value: undefined },
  { type: 'return', value: undefined }
])
\`\`\`

**Очистка mock:**
\`\`\`javascript
mockFn.mockClear()      // сбросить историю вызовов
mockFn.mockReset()      // сбросить всё, включая реализацию
mockFn.mockRestore()    // восстановить оригинальную функцию (если была)
\`\`\`

**Автоматическая очистка:**
\`\`\`javascript
// В конфиге (jest.config.js или vitest.config.ts)
{
  clearMocks: true,      // clear после каждого теста
  resetMocks: true,      // reset после каждого теста
  restoreMocks: true     // restore после каждого теста
}
\`\`\`

**Для собеседования:** Mock-функции заменяют реальные зависимости. \`mockReturnValue\` задаёт фиксированный возврат, \`mockImplementation\` — полную реализацию. Методы \`mock.calls\`, \`mock.results\` хранят историю вызовов. \`mockClear\` сбрасывает историю, \`mockReset\` — всё, \`mockRestore\` — восстанавливает оригинал.`,
"shortAnswer": `Mock-функции заменяют реальные зависимости. mockReturnValue задаёт фиксированный возврат, mockImplementation — полную реализацию. Методы mock.calls, mock.results хранят историю вызовов. mockClear сбрасывает историю, mockReset — всё, mockRestore — восстанавливает оригинал.`,
},
{
"id": `7-middle-jest-vitest-2`,
"title": `Как мокнуть модуль целиком (vi.mock) и использовать vi.importActual?`,
"fullAnswer": `**Мок модуля целиком** — замена всех экспортов модуля на mock-функции.

**Базовый синтаксис:**
\`\`\`javascript
// Vitest
import { describe, it, vi, expect } from 'vitest'
import { fetchData } from './api'

vi.mock('./api') // мокнет весь модуль

// fetchData теперь автоматически mock-функция
fetchData.mockResolvedValue({ data: 'test' })
\`\`\`

**Мок с кастомной реализацией:**
\`\`\`javascript
vi.mock('./api', () => ({
  fetchData: vi.fn().mockResolvedValue({ data: 'mocked' }),
  updateUser: vi.fn().mockResolvedValue({ success: true })
}))
\`\`\`

**vi.importActual — получить оригинальный модуль:**
Иногда нужно мокнуть только часть модуля, оставив остальное как есть.

\`\`\`javascript
vi.mock('./api', async () => {
  // Получаем оригинальный модуль
  const actual = await vi.importActual('./api')
  
  // Возвращаем модифицированную версию
  return {
    ...actual,
    // Мокнем только одну функцию
    fetchData: vi.fn().mockResolvedValue({ data: 'mocked' })
    // updateUser остаётся оригинальным
  }
})
\`\`\`

**Практический пример:**
\`\`\`javascript
// utils.js
export const formatDate = (date) => date.toISOString()
export const parseDate = (str) => new Date(str)
export const apiCall = async () => { /* реальный запрос */ }

// test.js
vi.mock('./utils', async () => {
  const actual = await vi.importActual('./utils')
  return {
    ...actual,
    apiCall: vi.fn().mockResolvedValue({ data: 'test' })
  }
})
\`\`\`

**Мок npm-пакетов:**
\`\`\`javascript
// Мок axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn().mockResolvedValue({ data: 'mocked' }),
    post: vi.fn().mockResolvedValue({ data: 'created' })
  }
}))

// Мок localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn()
}
vi.spyOn(window, 'localStorage', 'get').mockReturnValue(localStorageMock)
\`\`\`

**Автоматический мок:**
\`\`\`javascript
// Автоматически мокнет все импорты
vi.mock('./api', { spy: true })
// Все функции становятся spy, но сохраняют оригинальную реализацию
\`\`\`

**Мок в Jest:**
\`\`\`javascript
// Jest использует jest.mock вместо vi.mock
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'test' })
}))

// importActual в Jest
jest.mock('./api', async () => {
  const actual = await jest.requireActual('./api')
  return {
    ...actual,
    fetchData: jest.fn()
  }
})
\`\`\`

**Важные моменты:**
- \`vi.mock\` hoists (поднимается) наверх файла автоматически
- Нельзя использовать переменные внутри \`vi.mock\` (только константы)
- Для динамического мока используйте \`vi.doMock\`

**Для собеседования:** \`vi.mock\` заменяет весь модуль mock-функциями. \`vi.importActual\` получает оригинальный модуль для частичного мока. В Jest аналог — \`jest.mock\` и \`jest.requireActual\`. Мок поднимается наверх файла автоматически (hoisting).`,
"shortAnswer": `vi.mock заменяет весь модуль mock-функциями. vi.importActual получает оригинальный модуль для частичного мока. В Jest аналог — jest.mock и jest.requireActual. Мок поднимается наверх файла автоматически (hoisting).`,
},
{
"id": `7-middle-jest-vitest-3`,
"title": `Как мокнуть таймеры и ES-модули?`,
"fullAnswer": `**Мок таймеров:**

Тестирование кода с \`setTimeout\`, \`setInterval\`, \`Date.now\` требует контроля времени.

**Fake timers:**
\`\`\`javascript
import { vi, describe, it, expect } from 'vitest'

describe('Timer tests', () => {
  it('вызывает callback через 1 секунду', () => {
    vi.useFakeTimers() // включаем фейковые таймеры
    
    const callback = vi.fn()
    setTimeout(callback, 1000)
    
    // Время не прошло
    expect(callback).not.toHaveBeenCalled()
    
    // Перематываем время на 1 секунду
    vi.advanceTimersByTime(1000)
    
    expect(callback).toHaveBeenCalledTimes(1)
    
    vi.useRealTimers() // возвращаем реальные таймеры
  })
})
\`\`\`

**Методы fake timers:**
\`\`\`javascript
vi.useFakeTimers()

// Продвинуть время
vi.advanceTimersByTime(1000)        // на 1 секунду
vi.advanceTimersToNextTimer()       // до следующего таймера

// Прогнать все таймеры
vi.runAllTimers()                   // выполнить все pending таймеры
vi.runAllTimersAsync()              // асинхронная версия

// Прогнать только макротаски
vi.runOnlyPendingTimers()

// Установить конкретное время
vi.setSystemTime(new Date('2024-01-01'))
console.log(Date.now()) // 1704067200000

// Вернуть реальные таймеры
vi.useRealTimers()
\`\`\`

**Тестирование setInterval:**
\`\`\`javascript
it('вызывает callback каждые 100ms', () => {
  vi.useFakeTimers()
  const callback = vi.fn()
  
  const interval = setInterval(callback, 100)
  
  vi.advanceTimersByTime(250)
  expect(callback).toHaveBeenCalledTimes(2)
  
  clearInterval(interval)
  vi.useRealTimers()
})
\`\`\`

**Мок Date:**
\`\`\`javascript
it('работает с Date', () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2024-01-01'))
  
  const today = new Date()
  expect(today.getFullYear()).toBe(2024)
  
  vi.useRealTimers()
})
\`\`\`

**Мок ES-модулей:**

ES-модули имеют immutable exports — нельзя просто перезаписать \`module.export = ...\`. Нужны специальные подходы.

**Способ 1: vi.mock (рекомендуется):**
\`\`\`javascript
// api.js
export const fetchData = async () => {
  const res = await fetch('/api/data')
  return res.json()
}

// test.js
import { fetchData } from './api'

vi.mock('./api', () => ({
  fetchData: vi.fn().mockResolvedValue({ data: 'test' })
}))
\`\`\`

**Способ 2: vi.spyOn (для объектов):**
\`\`\`javascript
import * as api from './api'

const spy = vi.spyOn(api, 'fetchData').mockResolvedValue({ data: 'test' })

// После теста
spy.mockRestore()
\`\`\`

**Способ 3: Dependency Injection:**
\`\`\`javascript
// service.js
export const createService = (apiModule) => {
  return {
    getData: async () => apiModule.fetchData()
  }
}

// test.js
const mockApi = {
  fetchData: vi.fn().mockResolvedValue({ data: 'test' })
}

const service = createService(mockApi)
const result = await service.getData()
expect(mockApi.fetchData).toHaveBeenCalled()
\`\`\`

**Мок window/global объектов:**
\`\`\`javascript
// Мок window.fetch
const mockFetch = vi.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ data: 'test' })
})
vi.spyOn(window, 'fetch').mockImplementation(mockFetch)

// Мок console
const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
console.log('test') // ничего не выведет
expect(spy).toHaveBeenCalledWith('test')
spy.mockRestore()
\`\`\`

**Для собеседования:** Таймеры мокаются через \`vi.useFakeTimers()\` и \`vi.advanceTimersByTime()\`. ES-модули мокаются через \`vi.mock\` (полная замена) или \`vi.spyOn\` (шпионаж за объектом). Для Date используется \`vi.setSystemTime()\`. Альтернатива — dependency injection.`,
"shortAnswer": `Таймеры мокаются через vi.useFakeTimers() и vi.advanceTimersByTime(). ES-модули мокаются через vi.mock (полная замена) или vi.spyOn (шпионаж за объектом). Для Date используется vi.setSystemTime(). Альтернатива — dependency injection.`,
},
{
"id": `7-middle-jest-vitest-4`,
"title": `Как тестировать fetch/axios запросы с помощью MSW (Mock Service Worker)?`,
"fullAnswer": `**MSW (Mock Service Worker)** — библиотека для мока HTTP-запросов на уровне сети. В отличие от мока \`fetch\` или \`axios\`, MSW перехватывает реальные запросы, что делает тесты более реалистичными.

**Установка:**
\`\`\`bash
npm install -D msw
\`\`\`

**Настройка handlers:**
\`\`\`javascript
// mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  // GET запрос
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  }),
  
  // POST запрос
  http.post('/api/users', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json({ id: 3, ...body }, { status: 201 })
  }),
  
  // Динамический URL
  http.get('/api/users/:id', ({ params }) => {
    return HttpResponse.json({ id: params.id, name: 'John' })
  }),
  
  // Ошибка
  http.get('/api/error', () => {
    return HttpResponse.json({ error: 'Not found' }, { status: 404 })
  })
]
\`\`\`

**Использование в тестах:**
\`\`\`javascript
import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers'
import { fetchUsers } from './api'

// Создаём сервер
const server = setupServer(...handlers)

describe('API tests', () => {
  // Запускаем сервер перед всеми тестами
  beforeAll(() => server.listen())
  
  // Сбрасываем обработчики после каждого теста
  afterEach(() => server.resetHandlers())
  
  // Закрываем сервер после всех тестов
  afterAll(() => server.close())
  
  it('fetches users', async () => {
    const users = await fetchUsers()
    expect(users).toHaveLength(2)
    expect(users[0].name).toBe('John')
  })
  
  it('handles errors', async () => {
    // Переопределяем handler для конкретного теста
    server.use(
      http.get('/api/users', () => {
        return HttpResponse.json({ error: 'Failed' }, { status: 500 })
      })
    )
    
    await expect(fetchUsers()).rejects.toThrow()
  })
})
\`\`\`

**Преимущества MSW:**
- Работает на уровне сети, а не мока функций
- Один и тот же код для тестов и разработки
- Поддерживает REST и GraphQL
- Не зависит от библиотеки для запросов (fetch, axios, XMLHttpRequest)

**MSW в браузере (для интеграционных тестов):**
\`\`\`javascript
// mocks/browser.js
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

// В тесте
await worker.start()
\`\`\`

**Тестирование axios:**
\`\`\`javascript
// axios можно мокать через MSW или напрямую
import axios from 'axios'

vi.mock('axios')

axios.get.mockResolvedValue({ data: { users: [] } })
\`\`\`

**Для собеседования:** MSW перехватывает HTTP-запросы на уровне сети через Service Worker (в браузере) или node-сервер (в тестах). Настраивается через \`handlers\` с \`http.get/post\`. Использует \`setupServer\` для тестов и \`setupWorker\` для браузера. Преимущества: реалистичность, независимость от библиотеки запросов.`,
"shortAnswer": `MSW перехватывает HTTP-запросы на уровне сети через Service Worker (в браузере) или node-сервер (в тестах). Настраивается через handlers с http.get/post. Использует setupServer для тестов и setupWorker для браузера. Преимущества: реалистичность, независимость от библиотеки запросов.`,
},
{
"id": `7-middle-jest-vitest-5`,
"title": `Как настроить Jest/Vitest для TypeScript, path aliases и global setup?`,
"fullAnswer": `**Настройка для TypeScript:**

**Vitest (рекомендуется для Vite-проектов):**
\`\`\`typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,           // глобальные describe, it, expect
    environment: 'jsdom',    // или 'node', 'happy-dom'
    coverage: {
      provider: 'v8',        // или 'istanbul'
      reporter: ['text', 'json', 'html']
    }
  }
})
\`\`\`

**Jest:**
\`\`\`javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',         // поддержка TypeScript
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\\\.tsx?$': 'ts-jest'
  }
}
\`\`\`

**Path Aliases:**

**Vitest (через Vite config):**
\`\`\`typescript
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  test: {
    // ...
  }
})
\`\`\`

**Jest:**
\`\`\`javascript
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
}
\`\`\`

**Синхронизация с tsconfig.json:**
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

**Global Setup:**

Глобальные setup/teardown выполняются один раз перед/после всех тестов.

**Vitest:**
\`\`\`typescript
// vitest.config.ts
export default defineConfig({
  test: {
    globalSetup: './tests/setup.ts'
  }
})

// tests/setup.ts
export function setup() {
  // Выполняется перед всеми тестами
  console.log('Global setup')
  // Например, запуск базы данных, сервера
}

export function teardown() {
  // Выполняется после всех тестов
  console.log('Global teardown')
}
\`\`\`

**Jest:**
\`\`\`javascript
// jest.config.js
module.exports = {
  globalSetup: './tests/setup.js',
  globalTeardown: './tests/teardown.js'
}

// tests/setup.js
module.exports = async () => {
  console.log('Global setup')
  process.env.TEST_DB_URL = 'postgres://localhost/test'
}
\`\`\`

**Setup Files (для каждого тестового файла):**
\`\`\`typescript
// vitest.config.ts
export default defineConfig({
  test: {
    setupFiles: ['./tests/setup-each.ts']
  }
})

// tests/setup-each.ts
import '@testing-library/jest-dom'
// Глобальные моки, утилиты
\`\`\`

**Покрытие кода:**
\`\`\`typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/**/*.d.ts', 'src/**/*.test.ts'],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
})
\`\`\`

**Запуск тестов:**
\`\`\`bash
# Vitest
npm run test              # однократный запуск
npm run test:watch        # watch mode
npm run test:coverage     # с покрытием

# Jest
npm run test
npm run test:watch        # --watch
npm run test:coverage     # --coverage
\`\`\`

**Для собеседования:** Vitest настраивается через \`vitest.config.ts\` (интеграция с Vite). Jest использует \`jest.config.js\` с \`ts-jest\` для TypeScript. Path aliases настраиваются через \`resolve.alias\` (Vitest) или \`moduleNameMapper\` (Jest). Global setup выполняется один раз, setupFiles — перед каждым тестом.`,
"shortAnswer": `Vitest настраивается через vitest.config.ts (интеграция с Vite). Jest использует jest.config.js с ts-jest для TypeScript. Path aliases настраиваются через resolve.alias (Vitest) или moduleNameMapper (Jest). Global setup выполняется один раз, setupFiles — перед каждым тестом.`,
},
],
},
{
"id": `vue-test-utils`,
"title": `Vue Test Utils`,
"questions": [
{
"id": `7-middle-vue-test-utils-1`,
"title": `Чем mount отличается от shallowMount?`,
"fullAnswer": `**mount** и **shallowMount** — два способа рендеринга компонентов в Vue Test Utils.

**mount — полный рендеринг:**
Рендерит компонент со всеми дочерними компонентами. Создаёт полный DOM-дерево.

\`\`\`javascript
import { mount } from '@vue/test-utils'
import Parent from './Parent.vue'

const wrapper = mount(Parent)

// Рендерит Parent + все дочерние компоненты (Child1, Child2, и т.д.)
console.log(wrapper.html())
\`\`\`

**shallowMount — поверхностный рендеринг:**
Рендерит только тестируемый компонент. Дочерние компоненты заменяются заглушками (stubs).

\`\`\`javascript
import { shallowMount } from '@vue/test-utils'
import Parent from './Parent.vue'

const wrapper = shallowMount(Parent)

// Рендерит только Parent, дочерние компоненты — заглушки
console.log(wrapper.html())
// <parent>
//   <child-stub></child-stub>
//   <child-stub></child-stub>
// </parent>
\`\`\`

**Когда использовать mount:**
- Интеграционные тесты (проверка взаимодействия компонентов)
- Тестирование слотов и передачи props в дочерние компоненты
- Когда нужно проверить полный HTML-вывод
- Тестирование стилей и CSS-классов

**Когда использовать shallowMount:**
- Unit-тесты (тестирование изолированного компонента)
- Когда дочерние компоненты сложные или имеют побочные эффекты
- Для скорости (shallowMount быстрее)
- Когда не важно, как рендерятся дочерние компоненты

**Пример:**
\`\`\`javascript
// Parent.vue
<template>
  <div class="parent">
    <ChildComponent :data="data" />
    <AnotherChild />
  </div>
</template>

// Тест с mount
const wrapper = mount(Parent)
expect(wrapper.findComponent(ChildComponent).exists()).toBe(true)
expect(wrapper.find('.child-content').exists()).toBe(true)

// Тест с shallowMount
const wrapper = shallowMount(Parent)
expect(wrapper.findComponent(ChildComponent).exists()).toBe(true)
expect(wrapper.find('.child-content').exists()).toBe(false) // не рендерится
\`\`\`

**Кастомные заглушки:**
\`\`\`javascript
const wrapper = mount(Parent, {
  global: {
    stubs: {
      ChildComponent: true,                    // автоматическая заглушка
      AnotherChild: '<div class="stub">Stub</div>', // кастомный HTML
      'router-link': true                      // заглушка для router-link
    }
  }
})
\`\`\`

**Для собеседования:** \`mount\` рендерит компонент со всеми дочерними (полное дерево). \`shallowMount\` рендерит только тестируемый компонент, дочерние заменяются заглушками. \`mount\` для интеграционных тестов, \`shallowMount\` для unit-тестов и скорости.`,
"shortAnswer": `mount рендерит компонент со всеми дочерними (полное дерево). shallowMount рендерит только тестируемый компонент, дочерние заменяются заглушками. mount для интеграционных тестов, shallowMount для unit-тестов и скорости.`,
},
{
"id": `7-middle-vue-test-utils-2`,
"title": `Как тестировать props, emits, слоты, computed и watch?`,
"fullAnswer": `**Тестирование props:**
\`\`\`javascript
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

it('рендерит props', () => {
  const wrapper = mount(MyComponent, {
    props: {
      title: 'Test Title',
      count: 5
    }
  })
  
  expect(wrapper.text()).toContain('Test Title')
  expect(wrapper.props('title')).toBe('Test Title')
  expect(wrapper.props('count')).toBe(5)
})

it('валидирует props', () => {
  const wrapper = mount(MyComponent, {
    props: { title: 'Test' }
  })
  
  // Проверка значений по умолчанию
  expect(wrapper.props('count')).toBe(0)
})
\`\`\`

**Тестирование emits:**
\`\`\`javascript
it('эмитит события', async () => {
  const wrapper = mount(MyComponent)
  
  // Кликаем на кнопку
  await wrapper.find('button').trigger('click')
  
  // Проверяем emit
  expect(wrapper.emitted()).toHaveProperty('click')
  expect(wrapper.emitted('click')).toHaveLength(1)
  expect(wrapper.emitted('click')[0]).toEqual(['arg1', 'arg2'])
})

it('эмитит с payload', async () => {
  const wrapper = mount(MyComponent)
  
  await wrapper.find('input').setValue('test')
  
  expect(wrapper.emitted('update')).toBeTruthy()
  expect(wrapper.emitted('update')[0]).toEqual(['test'])
})
\`\`\`

**Тестирование слотов:**
\`\`\`javascript
it('рендерит default slot', () => {
  const wrapper = mount(MyComponent, {
    slots: {
      default: 'Default slot content'
    }
  })
  
  expect(wrapper.text()).toContain('Default slot content')
})

it('рендерит named slots', () => {
  const wrapper = mount(MyComponent, {
    slots: {
      header: '<h1>Header</h1>',
      footer: '<footer>Footer</footer>'
    }
  })
  
  expect(wrapper.find('h1').text()).toBe('Header')
  expect(wrapper.find('footer').text()).toBe('Footer')
})

it('рендерит scoped slots', () => {
  const wrapper = mount(MyComponent, {
    slots: {
      default: (props) => \`Item: \${props.item.name}\`
    }
  })
})
\`\`\`

**Тестирование computed:**
\`\`\`javascript
it('вычисляет computed property', () => {
  const wrapper = mount(MyComponent, {
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  })
  
  expect(wrapper.vm.fullName).toBe('John Doe')
  
  // Изменяем данные
  wrapper.vm.firstName = 'Jane'
  expect(wrapper.vm.fullName).toBe('Jane Doe')
})
\`\`\`

**Тестирование watch:**
\`\`\`javascript
it('реагирует на изменения через watch', async () => {
  const wrapper = mount(MyComponent)
  
  // Изменяем реактивное свойство
  await wrapper.setData({ searchQuery: 'test' })
  
  // Проверяем результат (watch должен был сработать)
  expect(wrapper.emitted('search')).toBeTruthy()
  expect(wrapper.emitted('search')[0]).toEqual(['test'])
})
\`\`\`

**Тестирование методов:**
\`\`\`javascript
it('вызывает методы', async () => {
  const wrapper = mount(MyComponent)
  
  // Вызываем метод напрямую
  await wrapper.vm.handleClick()
  
  expect(wrapper.emitted('click')).toBeTruthy()
})
\`\`\`

**Для собеседования:** Props передаются через опцию \`props\`, проверяются через \`wrapper.props()\`. Emits отслеживаются через \`wrapper.emitted()\`. Slots передаются через опцию \`slots\`. Computed тестируются через \`wrapper.vm.property\`. Watch тестируется через изменение данных и проверку побочных эффектов.`,
"shortAnswer": `Props передаются через опцию props, проверяются через wrapper.props(). Emits отслеживаются через wrapper.emitted(). Slots передаются через опцию slots. Computed тестируются через wrapper.vm.property. Watch тестируется через изменение данных и проверку побочных эффектов.`,
},
{
"id": `7-middle-vue-test-utils-3`,
"title": `Как тестировать компоненты с Vue Router и Pinia (createTestingPinia)?`,
"fullAnswer": `**Тестирование с Vue Router:**

**Способ 1: Мок router через global.mocks:**
\`\`\`javascript
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  currentRoute: {
    value: { path: '/test', params: { id: '123' } }
  }
}

const wrapper = mount(MyComponent, {
  global: {
    mocks: {
      $router: mockRouter,
      $route: mockRouter.currentRoute.value
    }
  }
})

// Тестирование навигации
await wrapper.find('button').trigger('click')
expect(mockRouter.push).toHaveBeenCalledWith('/other-page')
\`\`\`

**Способ 2: Использование реального router:**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/test', component: MyComponent }
  ]
})

const wrapper = mount(MyComponent, {
  global: {
    plugins: [router]
  }
})

// Переход на маршрут
await router.push('/test')
await wrapper.vm.$nextTick()
\`\`\`

**Тестирование с Pinia:**

**createTestingPinia:**
\`\`\`javascript
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '@/stores/counter'
import Counter from './Counter.vue'

const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,  // используем vi.fn для spy
        initialState: {
          counter: {
            count: 10  // начальное состояние стора
          }
        },
        stubActions: false  // false — actions выполняются, true — стабятся
      })
    ]
  }
})

// Получаем стор
const store = useCounterStore()

// Проверяем состояние
expect(store.count).toBe(10)

// Вызываем action
store.increment()
expect(store.count).toBe(11)

// Если stubActions: true, action не выполнится, но будет записан вызов
expect(store.increment).toHaveBeenCalled()
\`\`\`

**Тестирование getters:**
\`\`\`javascript
const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          counter: { count: 5 }
        }
      })
    ]
  }
})

const store = useCounterStore()
expect(store.doubleCount).toBe(10)
\`\`\`

**Мок actions:**
\`\`\`javascript
const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        stubActions: true  // actions стабятся
      })
    ]
  }
})

const store = useCounterStore()
store.fetchData()

expect(store.fetchData).toHaveBeenCalled()
// Реальный action не выполнился
\`\`\`

**Для собеседования:** Vue Router мокается через \`global.mocks\` ($router, $route) или используется реальный router через \`global.plugins\`. Pinia тестируется через \`createTestingPinia\` с опциями \`initialState\` (начальное состояние), \`stubActions\` (мок actions), \`createSpy\` (функция для spy).`,
"shortAnswer": `Vue Router мокается через global.mocks ($router, $route) или используется реальный router через global.plugins. Pinia тестируется через createTestingPinia с опциями initialState (начальное состояние), stubActions (мок actions), createSpy (функция для spy).`,
},
{
"id": `7-middle-vue-test-utils-4`,
"title": `Как тестировать provide/inject, Teleport, async компоненты и composables?`,
"fullAnswer": `**Тестирование provide/inject:**

\`\`\`javascript
import { mount } from '@vue/test-utils'
import Child from './Child.vue'

it('получает injected значение', () => {
  const wrapper = mount(Child, {
    global: {
      provide: {
        theme: 'dark',
        user: { name: 'John' }
      }
    }
  })
  
  expect(wrapper.text()).toContain('dark')
})
\`\`\`

**Тестирование Teleport:**

Teleport рендерит контент вне DOM-дерева компонента. Нужно использовать \`attachTo\`.

\`\`\`javascript
import { mount } from '@vue/test-utils'
import Modal from './Modal.vue'

it('рендерит Teleport', () => {
  // Создаём элемент для Teleport
  const target = document.createElement('div')
  target.id = 'modal-target'
  document.body.appendChild(target)
  
  const wrapper = mount(Modal, {
    attachTo: document.body
  })
  
  expect(document.body.querySelector('.modal')).toBeTruthy()
  
  wrapper.unmount()
  document.body.removeChild(target)
})

// Или через глобальные stubs
const wrapper = mount(Modal, {
  global: {
    stubs: {
      Teleport: true  // заглушка Teleport
    }
  }
})
\`\`\`

**Тестирование async компонентов:**

\`\`\`javascript
import { mount, flushPromises } from '@vue/test-utils'
import AsyncComponent from './AsyncComponent.vue'

it('загружает async компонент', async () => {
  const wrapper = mount(AsyncComponent)
  
  // Ждём разрешения всех Promise
  await flushPromises()
  
  expect(wrapper.find('.loaded').exists()).toBe(true)
})

it('показывает loading state', () => {
  const wrapper = mount(AsyncComponent)
  
  // До разрешения Promise
  expect(wrapper.find('.loading').exists()).toBe(true)
})
\`\`\`

**Тестирование Suspense:**
\`\`\`javascript
import { mount, flushPromises } from '@vue/test-utils'
import Parent from './Parent.vue'

it('рендерит Suspense', async () => {
  const wrapper = mount(Parent)
  
  // Ждём разрешения async компонентов
  await flushPromises()
  await wrapper.vm.$nextTick()
  
  expect(wrapper.find('.content').exists()).toBe(true)
})
\`\`\`

**Тестирование composables:**

Composables — это функции, которые используют Vue Composition API. Тестируются напрямую, без компонентов.

\`\`\`javascript
import { describe, it, expect } from 'vitest'
import { useCounter } from '@/composables/useCounter'

it('useCounter работает корректно', () => {
  const { count, increment, decrement } = useCounter()
  
  expect(count.value).toBe(0)
  
  increment()
  expect(count.value).toBe(1)
  
  decrement()
  expect(count.value).toBe(0)
})

it('useCounter с начальным значением', () => {
  const { count } = useCounter(10)
  expect(count.value).toBe(10)
})
\`\`\`

**Тестирование composable с реактивностью:**
\`\`\`javascript
import { ref } from 'vue'
import { useSearch } from '@/composables/useSearch'

it('useSearch фильтрует данные', async () => {
  const items = ref([
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Cherry' }
  ])
  
  const { query, filteredItems } = useSearch(items)
  
  query.value = 'app'
  
  // Ждём реактивного обновления
  await nextTick()
  
  expect(filteredItems.value).toHaveLength(1)
  expect(filteredItems.value[0].name).toBe('Apple')
})
\`\`\`

**Для собеседования:** Provide/inject тестируется через \`global.provide\`. Teleport требует \`attachTo: document.body\` или stubs. Async компоненты тестируются с \`flushPromises()\`. Composables тестируются напрямую как функции, без mount компонента.`,
"shortAnswer": `Provide/inject тестируется через global.provide. Teleport требует attachTo: document.body или stubs. Async компоненты тестируются с flushPromises(). Composables тестируются напрямую как функции, без mount компонента.`,
},
{
"id": `7-middle-vue-test-utils-5`,
"title": `Что такое Testing Library (@testing-library/vue) и принцип «тестировать как пользователь»?`,
"fullAnswer": `**Testing Library** — это библиотека для тестирования компонентов, которая фокусируется на тестировании поведения, а не реализации. Главный принцип: «Чем больше тесты похожи на то, как используется ПО, тем больше уверенности они дают».

**Установка:**
\`\`\`bash
npm install -D @testing-library/vue @testing-library/jest-dom
\`\`\`

**Основное отличие от Vue Test Utils:**
Vue Test Utils даёт доступ к внутренностям компонента (vm, props, state). Testing Library работает только с тем, что видит пользователь (DOM, текст, кнопки).

**Базовый пример:**
\`\`\`javascript
import { render, screen, fireEvent } from '@testing-library/vue'
import Counter from './Counter.vue'

it('увеличивает счётчик при клике', async () => {
  render(Counter)
  
  // Ищем элемент по тексту (как пользователь)
  const count = screen.getByText('Count: 0')
  const button = screen.getByRole('button', { name: 'Increment' })
  
  // Кликаем
  await fireEvent.click(button)
  
  // Проверяем результат
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})
\`\`\`

**Queries (поиск элементов):**

**Приоритет запросов (от лучшего к худшему):**

1. **getByRole** — по ARIA-роли (рекомендуется):
\`\`\`javascript
screen.getByRole('button')
screen.getByRole('button', { name: 'Submit' })
screen.getByRole('textbox')
screen.getByRole('heading', { level: 1 })
\`\`\`

2. **getByLabelText** — по label формы:
\`\`\`javascript
screen.getByLabelText('Username')
\`\`\`

3. **getByPlaceholderText** — по placeholder:
\`\`\`javascript
screen.getByPlaceholderText('Enter email')
\`\`\`

4. **getByText** — по тексту:
\`\`\`javascript
screen.getByText('Hello World')
\`\`\`

5. **getByDisplayValue** — по значению input:
\`\`\`javascript
screen.getByDisplayValue('John')
\`\`\`

6. **getByAltText** — по alt изображения:
\`\`\`javascript
screen.getByAltText('Profile photo')
\`\`\`

7. **getByTitle** — по title:
\`\`\`javascript
screen.getByTitle('Close')
\`\`\`

8. **getByTestId** — по data-testid (последний вариант):
\`\`\`javascript
screen.getByTestId('submit-button')
\`\`\`

**Варианты запросов:**
\`\`\`javascript
// getBy — находит элемент, ошибка если не найден
screen.getByText('Hello')

// queryBy — находит элемент, null если не найден
screen.queryByText('Hello')

// findBy — находит элемент (асинхронно, ждёт появления)
await screen.findByText('Loading...')

// getAllBy — находит все элементы (массив)
screen.getAllByRole('listitem')

// queryAllBy — находит все элементы (массив, пустой если нет)
screen.queryAllByRole('listitem')

// findAllBy — находит все элементы (асинхронно)
await screen.findAllByRole('listitem')
\`\`\`

**Negation (отрицание):**
\`\`\`javascript
expect(screen.queryByText('Not exists')).not.toBeInTheDocument()
\`\`\`

**FireEvent (события):**
\`\`\`javascript
await fireEvent.click(button)
await fireEvent.change(input, { target: { value: 'test' } })
await fireEvent.keyDown(input, { key: 'Enter' })
await fireEvent.submit(form)
\`\`\`

**userEvent (более реалистичные события):**
\`\`\`javascript
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

await user.click(button)
await user.type(input, 'Hello')
await user.keyboard('{Enter}')
\`\`\`

**Принцип «тестировать как пользователь»:**

**Плохо (тестирование реализации):**
\`\`\`javascript
// Зависит от внутренней структуры
expect(wrapper.vm.count).toBe(1)
expect(wrapper.emitted('increment')).toBeTruthy()
\`\`\`

**Хорошо (тестирование поведения):**
\`\`\`javascript
// Как пользователь
await user.click(screen.getByRole('button', { name: 'Increment' }))
expect(screen.getByText('Count: 1')).toBeInTheDocument()
\`\`\`

**Преимущества Testing Library:**
- Тесты не ломаются при рефакторинге (если поведение не изменилось)
- Лучшая доступность (использование ARIA-ролей)
- Проще читать и понимать
- Фокус на пользовательском опыте

**Для собеседования:** Testing Library тестирует поведение, а не реализацию. Использует queries (\`getByRole\`, \`getByText\`, \`findByText\`) для поиска элементов как пользователь. Принцип: тесты должны быть похожи на использование ПО. \`userEvent\` реалистичнее \`fireEvent\`.`,
"shortAnswer": `Testing Library тестирует поведение, а не реализацию. Использует queries (getByRole, getByText, findByText) для поиска элементов как пользователь. Принцип: тесты должны быть похожи на использование ПО. userEvent реалистичнее fireEvent.`,
},
],
},
{
"id": `playwright`,
"title": `Playwright`,
"questions": [
{
"id": `7-middle-playwright-1`,
"title": `Что такое Browser Context и fixtures в Playwright?`,
"fullAnswer": `**Browser Context** — изолированная среда внутри браузера, аналог инкогнито-режима. Каждый контекст имеет свои cookies, localStorage, сессию.

**Зачем нужен:**
- Параллельное выполнение тестов в изоляции
- Разные пользователи в одном браузере
- Разные настройки (геолокация, язык, permissions)

**Создание контекста:**
\`\`\`javascript
const browser = await chromium.launch()

// Создаём контекст
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  locale: 'ru-RU',
  timezoneId: 'Europe/Moscow',
  geolocation: { longitude: 37.6173, latitude: 55.7558 },
  permissions: ['geolocation'],
  colorScheme: 'dark',
  userAgent: 'Custom User Agent'
})

const page = await context.newPage()
await page.goto('https://example.com')
\`\`\`

**Изоляция тестов:**
\`\`\`javascript
test.describe('User tests', () => {
  let context
  let page
  
  test.beforeEach(async ({ browser }) => {
    // Новый контекст для каждого теста
    context = await browser.newContext()
    page = await context.newPage()
  })
  
  test.afterEach(async () => {
    await context.close()
  })
  
  test('test 1', async () => {
    await page.goto('/page1')
  })
  
  test('test 2', async () => {
    await page.goto('/page2')
  })
})
\`\`\`

**Fixtures:**

Fixtures — это переиспользуемые setup-функции, которые предоставляют зависимости для тестов.

**Встроенные fixtures:**
\`\`\`javascript
test('example', async ({ page, browser, context }) => {
  // page, browser, context — встроенные fixtures
  await page.goto('/')
})
\`\`\`

**Кастомные fixtures:**
\`\`\`javascript
// fixtures.ts
import { test as base } from '@playwright/test'

export const test = base.extend({
  // Фикстура с авторизацией
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'auth-state.json'
    })
    const page = await context.newPage()
    
    // Передаём в тест
    await use(page)
    
    // Cleanup после теста
    await context.close()
  },
  
  // Фикстура с тестовыми данными
  testData: async ({}, use) => {
    const data = {
      user: { name: 'Test User', email: 'test@example.com' },
      product: { name: 'Test Product', price: 100 }
    }
    await use(data)
  }
})

export { expect } from '@playwright/test'
\`\`\`

**Использование fixtures:**
\`\`\`javascript
import { test, expect } from './fixtures'

test('authenticated test', async ({ authenticatedPage }) => {
  await authenticatedPage.goto('/dashboard')
  // Уже авторизован
})

test('with test data', async ({ testData, page }) => {
  await page.fill('#name', testData.user.name)
})
\`\`\`

**Для собеседования:** Browser Context — изолированная среда (cookies, localStorage) внутри браузера. Используется для параллельных тестов и разных пользователей. Fixtures — переиспользуемые setup-функции. Встроенные: \`page\`, \`browser\`, \`context\`. Кастомные создаются через \`base.extend()\`.`,
"shortAnswer": `Browser Context — изолированная среда (cookies, localStorage) внутри браузера. Используется для параллельных тестов и разных пользователей. Fixtures — переиспользуемые setup-функции. Встроенные: page, browser, context. Кастомные создаются через base.extend().`,
},
{
"id": `7-middle-playwright-2`,
"title": `Что такое Page Object Model (POM) и Screenplay Pattern?`,
"fullAnswer": `**Page Object Model (POM):**

Паттерн проектирования, где каждая страница приложения представляется классом с методами для взаимодействия с элементами.

**Структура:**
\`\`\`
tests/
  pages/
    LoginPage.ts      # Page Object для страницы логина
    DashboardPage.ts  # Page Object для дашборда
  specs/
    login.spec.ts     # Тесты
\`\`\`

**Пример Page Object:**
\`\`\`typescript
// pages/LoginPage.ts
import { type Page, type Locator, expect } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator
  
  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('#username')
    this.passwordInput = page.locator('#password')
    this.submitButton = page.locator('button[type="submit"]')
    this.errorMessage = page.locator('.error-message')
  }
  
  async goto() {
    await this.page.goto('/login')
  }
  
  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
  
  async expectError(message: string) {
    await expect(this.errorMessage).toHaveText(message)
  }
  
  async expectLoggedIn() {
    await expect(this.page).toHaveURL('/dashboard')
  }
}
\`\`\`

**Использование в тестах:**
\`\`\`typescript
// specs/login.spec.ts
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('успешный вход', async ({ page }) => {
  const loginPage = new LoginPage(page)
  
  await loginPage.goto()
  await loginPage.login('admin', 'password')
  await loginPage.expectLoggedIn()
})

test('неверный пароль', async ({ page }) => {
  const loginPage = new LoginPage(page)
  
  await loginPage.goto()
  await loginPage.login('admin', 'wrong')
  await loginPage.expectError('Неверный пароль')
})
\`\`\`

**Преимущества POM:**
- Переиспользование кода
- Централизованное управление локаторами
- Легко поддерживать при изменении UI
- Читаемые тесты

---

**Screenplay Pattern:**

Альтернатива POM, фокусируется на действиях акторов (actors), а не страницах. Более гибкий для сложных сценариев.

**Концепции:**
- **Actor** — пользователь, который выполняет действия
- **Ability** — способности актора (BrowseTheWeb, CallApi)
- **Task** — задача (Login, AddToCart)
- **Question** — вопрос о состоянии (IsLoggedIn, CartCount)

**Пример:**
\`\`\`typescript
// tasks/Login.ts
export const Login = (username: string, password: string) =>
  task('Login', async (actor: Actor) => {
    await actor.attemptsTo(
      Navigate.to('/login'),
      Fill.in('#username').with(username),
      Fill.in('#password').with(password),
      Click.on('button[type="submit"]')
    )
  })

// questions/IsLoggedIn.ts
export const IsLoggedIn = () =>
  question<boolean>('Is logged in', async (actor: Actor) => {
    const page = actor.abilityTo(BrowseTheWeb).page()
    return await page.url().includes('/dashboard')
  })

// тест
actor.attemptsTo(Login('admin', 'pass'))
await actor.asks(IsLoggedIn())
\`\`\`

**Сравнение:**
POM проще и популярнее, подходит для большинства проектов. Screenplay более гибкий, но сложнее в реализации. POM организует код по страницам, Screenplay — по действиям.

**Для собеседования:** POM — паттерн, где каждая страница — класс с локаторами и методами. Упрощает поддержку и переиспользование. Screenplay — альтернативный паттерн с акторами, задачами и вопросами. POM проще и популярнее.`,
"shortAnswer": `POM — паттерн, где каждая страница — класс с локаторами и методами. Упрощает поддержку и переиспользование. Screenplay — альтернативный паттерн с акторами, задачами и вопросами. POM проще и популярнее.`,
},
{
"id": `7-middle-playwright-3`,
"title": `Как работать с iframe, диалоговыми окнами, загрузкой файлов и моком сетей (page.route)?`,
"fullAnswer": `**Работа с iframe:**

\`\`\`javascript
// Получение iframe
const iframe = page.frameLocator('#my-iframe')

// Взаимодействие с элементами внутри iframe
await iframe.locator('button').click()
await iframe.locator('input').fill('test')

// Вложенные iframe
const nestedIframe = page
  .frameLocator('#outer-iframe')
  .frameLocator('#inner-iframe')

await nestedIframe.locator('button').click()
\`\`\`

**Диалоговые окна (alert, confirm, prompt):**

\`\`\`javascript
// Обработка alert
page.on('dialog', async dialog => {
  console.log(dialog.message())
  await dialog.accept()
})

await page.locator('button').click() // вызывает alert

// Обработка confirm
page.on('dialog', async dialog => {
  if (dialog.type() === 'confirm') {
    await dialog.accept() // или dialog.dismiss()
  }
})

// Обработка prompt
page.on('dialog', async dialog => {
  if (dialog.type() === 'prompt') {
    await dialog.accept('Введённый текст')
  }
})
\`\`\`

**Загрузка файлов:**

\`\`\`javascript
// Одиночный файл
await page.locator('input[type="file"]').setInputFiles('file.txt')

// Несколько файлов
await page.locator('input[type="file"]').setInputFiles([
  'file1.txt',
  'file2.txt'
])

// Загрузка через буфер
const buffer = fs.readFileSync('file.txt')
await page.locator('input[type="file"]').setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: buffer
})

// Ожидание загрузки файла
const [fileChooser] = await Promise.all([
  page.waitForEvent('filechooser'),
  page.locator('button').click()
])
await fileChooser.setFiles('file.txt')
\`\`\`

**Скачивание файлов:**

\`\`\`javascript
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('a[download]').click()
])

const path = await download.path()
const filename = download.suggestedFilename()
\`\`\`

**Мок сетей (page.route):**

\`\`\`javascript
// Мок конкретного запроса
await page.route('**/api/users', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([{ id: 1, name: 'John' }])
  })
})

// Мок с динамическим ответом
await page.route('**/api/users/**', route => {
  const url = route.request().url()
  const userId = url.split('/').pop()
  
  route.fulfill({
    status: 200,
    body: JSON.stringify({ id: userId, name: 'Test' })
  })
})

// Abort запроса (блокировка)
await page.route('**/analytics/**', route => route.abort())

// Модификация запроса
await page.route('**/api/**', route => {
  const headers = route.request().headers()
  headers['Authorization'] = 'Bearer token'
  route.continue({ headers })
})

// Очистка всех route
await page.unrouteAll()
\`\`\`

**Глобальный route (для всех тестов):**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  use: {
    async onRequest(page, request) {
      if (request.url().includes('/api/')) {
        // логирование
      }
    }
  }
})
\`\`\`

**Для собеседования:** Iframe — через \`frameLocator()\`. Диалоги — через событие \`dialog\`. Файлы — \`setInputFiles()\` для загрузки, \`waitForEvent('download')\` для скачивания. Мок сетей — \`page.route()\` с \`fulfill\` (ответ), \`abort\` (блокировка), \`continue\` (модификация).`,
"shortAnswer": `Iframe — через frameLocator(). Диалоги — через событие dialog. Файлы — setInputFiles() для загрузки, waitForEvent('download') для скачивания. Мок сетей — page.route() с fulfill (ответ), abort (блокировка), continue (модификация).`,
},
{
"id": `7-middle-playwright-4`,
"title": `Как тестировать аутентификацию (storage state) и responsive design?`,
"fullAnswer": `**Тестирование аутентификации:**

**Storage State — сохранение и использование сессии:**

\`\`\`javascript
// Сохранение состояния после логина
const { storageState } = await page.context().storageState()
fs.writeFileSync('auth-state.json', JSON.stringify(storageState))

// Использование в тестах
const context = await browser.newContext({
  storageState: 'auth-state.json'
})
const page = await context.newPage()

// Уже авторизован — не нужно логиниться
await page.goto('/dashboard')
\`\`\`

**Глобальная настройка в конфиге:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  use: {
    storageState: 'auth-state.json'
  }
})
\`\`\`

**Логин через API (быстрее):**
\`\`\`javascript
// Вместо UI-логина, получаем токен через API
const response = await request.post('/api/login', {
  data: { username: 'admin', password: 'pass' }
})

const token = await response.json().token

// Устанавливаем cookie
await context.addCookies([
  {
    name: 'auth-token',
    value: token,
    domain: 'localhost',
    path: '/'
  }
])
\`\`\`

**Фикстура для авторизации:**
\`\`\`javascript
// fixtures.ts
export const test = base.extend({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'auth-state.json'
    })
    const page = await context.newPage()
    await use(page)
    await context.close()
  }
})

// тест
import { test } from './fixtures'

test('dashboard', async ({ authenticatedPage }) => {
  await authenticatedPage.goto('/dashboard')
})
\`\`\`

---

**Responsive Design Testing:**

**Тестирование разных viewport:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  use: {
    viewport: { width: 1280, height: 720 }
  },
  projects: [
    {
      name: 'Desktop',
      use: { viewport: { width: 1920, height: 1080 } }
    },
    {
      name: 'Tablet',
      use: { viewport: { width: 768, height: 1024 } }
    },
    {
      name: 'Mobile',
      use: { viewport: { width: 375, height: 667 } }
    }
  ]
})
\`\`\`

**Динамическое изменение viewport:**
\`\`\`javascript
test('responsive layout', async ({ page }) => {
  // Мобильный
  await page.setViewportSize({ width: 375, height: 667 })
  await expect(page.locator('.mobile-menu')).toBeVisible()
  
  // Десктоп
  await page.setViewportSize({ width: 1920, height: 1080 })
  await expect(page.locator('.desktop-menu')).toBeVisible()
})
\`\`\`

**Эмуляция устройств:**
\`\`\`javascript
import { devices } from '@playwright/test'

const iPhone = devices['iPhone 12']

const context = await browser.newContext({
  ...iPhone,
  locale: 'ru-RU'
})

const page = await context.newPage()
\`\`\`

**Тестирование тёмной темы:**
\`\`\`javascript
const context = await browser.newContext({
  colorScheme: 'dark'
})

const page = await context.newPage()
await page.goto('/')

// Проверяем тёмную тему
await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)')
\`\`\`

**Тестирование геолокации:**
\`\`\`javascript
const context = await browser.newContext({
  geolocation: { longitude: 37.6173, latitude: 55.7558 },
  permissions: ['geolocation']
})
\`\`\`

**Для собеседования:** Аутентификация тестируется через \`storageState\` (сохранение cookies/localStorage) или через API-логин с установкой cookies. Responsive design — через \`viewport\` в конфиге или \`setViewportSize()\` в тесте. Эмуляция устройств через \`devices\` из Playwright.`,
"shortAnswer": `Аутентификация тестируется через storageState (сохранение cookies/localStorage) или через API-логин с установкой cookies. Responsive design — через viewport в конфиге или setViewportSize() в тесте. Эмуляция устройств через devices из Playwright.`,
},
{
"id": `7-middle-playwright-5`,
"title": `Что такое trace viewer, reporter'ы, параллельный запуск и retry для flaky tests?`,
"fullAnswer": `**Trace Viewer:**

Trace — детальная запись выполнения теста с скриншотами, DOM-снимками, сетевыми запросами и действиями.

**Запись trace:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  use: {
    trace: 'on-first-retry'  // 'on', 'off', 'on-first-retry', 'retain-on-failure'
  }
})
\`\`\`

**Просмотр trace:**
\`\`\`bash
npx playwright show-trace trace.zip
\`\`\`

Trace Viewer показывает:
- Timeline всех действий
- Скриншоты до/после каждого действия
- DOM-дерево на каждом шаге
- Сетевые запросы
- Консоль браузера
- Источники ошибок

---

**Reporter'ы:**

**Встроенные reporter'ы:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  reporter: [
    ['list'],           // список тестов в консоли
    ['html'],           // HTML-отчёт
    ['json'],           // JSON-файл
    ['junit'],          // JUnit XML (для CI)
    ['github'],         // GitHub Actions
    ['blob']            // для merge отчётов
  ]
})
\`\`\`

**HTML-отчёт:**
\`\`\`bash
npx playwright show-report
\`\`\`

Генерирует интерактивный HTML с результатами, скриншотами, trace.

**Кастомный reporter:**
\`\`\`javascript
class MyReporter {
  onBegin(suite, tests) {
    console.log(\`Starting \${tests.length} tests\`)
  }
  
  onTestEnd(test, result) {
    console.log(\`\${test.title}: \${result.status}\`)
  }
  
  onEnd(result) {
    console.log(\`Total: \${result.total}, Passed: \${result.passed}\`)
  }
}
\`\`\`

---

**Параллельный запуск:**

**На уровне workers:**
\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  workers: 4,  // количество параллельных workers
  fullyParallel: true  // параллельный запуск тестов внутри файла
})
\`\`\`

**На уровне проектов:**
\`\`\`javascript
export default defineConfig({
  projects: [
    { name: 'Chrome', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Safari', use: { browserName: 'webkit' } }
  ]
})
\`\`\`

**Параллельный запуск в CI:**
\`\`\`bash
# GitHub Actions
npx playwright test --shard=1/3
npx playwright test --shard=2/3
npx playwright test --shard=3/3
\`\`\`

---

**Retry для flaky tests:**

\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  retries: 3,  // повторить до 3 раз при падении
  
  use: {
    trace: 'on-first-retry'  // записывать trace при первом retry
  }
})
\`\`\`

**Retry конкретного теста:**
\`\`\`javascript
test('flaky test', async ({ page }) => {
  test.retry(3)
  // ...
})
\`\`\`

**Метки для flaky тестов:**
\`\`\`javascript
test('flaky test', async ({ page }) => {
  test.slow()  // увеличить timeout
  test.fixme()  // пропустить тест
})
\`\`\`

**Аннотации:**
\`\`\`javascript
test('test', async ({ page }) => {
  test.skip(browserName === 'firefox', 'Не работает в Firefox')
  test.fail()  // ожидаем failure
  test.slow()  // x3 timeout
})
\`\`\`

**Для собеседования:** Trace Viewer — детальная запись теста (скриншоты, DOM, сеть). Reporter'ы: list, html, json, junit. Параллельный запуск через \`workers\` и \`fullyParallel\`. Retry настраивается через \`retries\` в конфиге. Аннотации: \`skip\`, \`fail\`, \`slow\`, \`fixme\`.`,
"shortAnswer": `Trace Viewer — детальная запись теста (скриншоты, DOM, сеть). Reporter'ы: list, html, json, junit. Параллельный запуск через workers и fullyParallel. Retry настраивается через retries в конфиге. Аннотации: skip, fail, slow, fixme.`,
},
{
"id": `7-middle-playwright-6`,
"title": `Что такое visual regression testing (toHaveScreenshot) и playwright-ct?`,
"fullAnswer": `**Visual Regression Testing:**

Тестирование визуальных изменений через сравнение скриншотов.

**Базовое использование:**
\`\`\`javascript
test('визуальный тест', async ({ page }) => {
  await page.goto('/page')
  
  // Сравнение с эталонным скриншотом
  await expect(page).toHaveScreenshot('page.png')
})
\`\`\`

**Опции:**
\`\`\`javascript
await expect(page).toHaveScreenshot('page.png', {
  maxDiffPixels: 100,           // максимальное количество разных пикселей
  maxDiffPixelRatio: 0.1,       // максимальная доля разных пикселей (0-1)
  threshold: 0.2,               // порог различия (0-1)
  animations: 'disabled',       // отключить анимации
  mask: [page.locator('.ads')], // замаскировать элементы
  fullPage: true                // скриншот всей страницы
})
\`\`\`

**Сравнение элементов:**
\`\`\`javascript
const element = page.locator('.component')
await expect(element).toHaveScreenshot('component.png')
\`\`\`

**Обновление эталонных скриншотов:**
\`\`\`bash
npx playwright test --update-snapshots
\`\`\`

**Настройка в конфиге:**
\`\`\`javascript
export default defineConfig({
  use: {
    screenshot: 'on',  // 'on', 'off', 'only-on-failure'
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 50
    }
  }
})
\`\`\`

**Маскирование динамических элементов:**
\`\`\`javascript
await expect(page).toHaveScreenshot('page.png', {
  mask: [
    page.locator('.avatar'),      // аватары меняются
    page.locator('.timestamp'),   // время
    page.locator('.ads')          // реклама
  ]
})
\`\`\`

---

**Playwright Component Testing (playwright-ct):**

Тестирование компонентов в изоляции, без полного приложения.

**Установка:**
\`\`\`bash
npm install -D @playwright/experimental-ct-vue
\`\`\`

**Настройка:**
\`\`\`javascript
// playwright-ct.config.ts
import { defineConfig } from '@playwright/experimental-ct-vue'

export default defineConfig({
  use: {
    ctPort: 3100,
    ctViteConfig: {
      // Vite конфиг для компонентных тестов
    }
  }
})
\`\`\`

**Тестирование компонента:**
\`\`\`javascript
import { test, expect } from '@playwright/experimental-ct-vue'
import Button from './Button.vue'

test('render button', async ({ mount }) => {
  const component = await mount(Button, {
    props: {
      label: 'Click me'
    }
  })
  
  await expect(component).toHaveText('Click me')
  await expect(component).toBeVisible()
})

test('button click', async ({ mount }) => {
  const clicks = []
  
  const component = await mount(Button, {
    props: {
      label: 'Click',
      onClick: () => clicks.push('clicked')
    }
  })
  
  await component.click()
  expect(clicks).toHaveLength(1)
})
\`\`\`

**Тестирование слотов:**
\`\`\`javascript
const component = await mount(Button, {
  slots: {
    default: '<span>Custom content</span>'
  }
})

await expect(component.locator('span')).toHaveText('Custom content')
\`\`\`

**Тестирование с провайдерами:**
\`\`\`javascript
const component = await mount(Component, {
  context: {
    provide: {
      theme: 'dark'
    }
  }
})
\`\`\`

**Преимущества playwright-ct:**
- Реальный браузер (не jsdom)
- Визуальное тестирование компонентов
- Быстрее E2E тестов
- Изоляция компонентов

**Для собеседования:** Visual regression — сравнение скриншотов через \`toHaveScreenshot\`. Опции: \`maxDiffPixels\`, \`mask\`, \`fullPage\`. Playwright Component Testing (\`@playwright/experimental-ct-vue\`) — тестирование компонентов в реальном браузере через \`mount()\`. Быстрее E2E, поддерживает визуальные тесты.`,
"shortAnswer": `Visual regression — сравнение скриншотов через toHaveScreenshot. Опции: maxDiffPixels, mask, fullPage. Playwright Component Testing (@playwright/experimental-ct-vue) — тестирование компонентов в реальном браузере через mount(). Быстрее E2E, поддерживает визуальные тесты.`,
},
],
},
{
"id": `бэкенд-java-python`,
"title": `Бэкенд (Java/Python)`,
"questions": [
{
"id": `7-middle-бэкенд-java-python-1`,
"title": `(Java) Что такое @SpringBootTest, @WebMvcTest, @DataJpaTest?`,
"fullAnswer": `**@SpringBootTest:**

Загружает полный Spring ApplicationContext. Интеграционный тест всего приложения.

\`\`\`java
@SpringBootTest
class UserServiceTest {
    
    @Autowired
    private UserService userService;
    
    @Test
    void shouldCreateUser() {
        User user = new User("John", "john@example.com");
        User saved = userService.save(user);
        
        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getName()).isEqualTo("John");
    }
}
\`\`\`

**Особенности:**
- Загружает все бины, конфигурации, автоконфигурации
- Медленный (полный контекст)
- Подходит для интеграционных тестов
- Можно использовать \`@MockBean\` для мока зависимостей

---

**@WebMvcTest:**

Тестирует только слой контроллеров (Web layer). Не загружает сервисы, репозитории, БД.

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void shouldGetUser() throws Exception {
        User user = new User(1L, "John");
        when(userService.findById(1L)).thenReturn(user);
        
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("John"));
    }
}
\`\`\`

**Особенности:**
- Быстрый (только контроллеры)
- Автоматически настраивает MockMvc
- Требует \`@MockBean\` для сервисов
- Тестирует валидацию, сериализацию, маппинг

---

**@DataJpaTest:**

Тестирует только слой репозиториев (JPA). Использует встроенную БД (H2).

\`\`\`java
@DataJpaTest
class UserRepositoryTest {
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void shouldFindByName() {
        User user = new User("John");
        entityManager.persistAndFlush(user);
        
        List<User> found = userRepository.findByName("John");
        
        assertThat(found).hasSize(1);
        assertThat(found.get(0).getName()).isEqualTo("John");
    }
}
\`\`\`

**Особенности:**
- Использует встроенную БД (H2 по умолчанию)
- Автоматически настраивает JPA
- Транзакции откатываются после каждого теста
- Не загружает сервисы и контроллеры

**Сравнение:**
\`@SpringBootTest\` — полный контекст, медленный, интеграционные тесты. \`@WebMvcTest\` — только контроллеры, быстрый, unit-тесты web-слоя. \`@DataJpaTest\` — только репозитории, встроенная БД, тестирование запросов.

**Для собеседования:** \`@SpringBootTest\` загружает полный контекст для интеграционных тестов. \`@WebMvcTest\` тестирует только контроллеры с MockMvc. \`@DataJpaTest\` тестирует репозитории со встроенной БД (H2). Выбор зависит от уровня тестирования.`,
"shortAnswer": `@SpringBootTest загружает полный контекст для интеграционных тестов. @WebMvcTest тестирует только контроллеры с MockMvc. @DataJpaTest тестирует репозитории со встроенной БД (H2). Выбор зависит от уровня тестирования.`,
},
{
"id": `7-middle-бэкенд-java-python-2`,
"title": `(Java) Что такое MockMvc, @MockBean, Testcontainers?`,
"fullAnswer": `**MockMvc:**

Фреймворк для тестирования Spring MVC контроллеров без запуска сервера.

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void shouldCreateUser() throws Exception {
        UserDto dto = new UserDto("John", "john@example.com");
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dto)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.name").value("John"));
    }
    
    @Test
    void shouldReturn404ForNotFound() throws Exception {
        when(userService.findById(999L)).thenReturn(null);
        
        mockMvc.perform(get("/api/users/999"))
            .andExpect(status().isNotFound());
    }
}
\`\`\`

**Методы MockMvc:**
- \`perform()\` — выполнение запроса
- \`andExpect()\` — проверка ответа
- \`andDo()\` — действия (логирование, печать)

---

**@MockBean:**

Создаёт mock-объект Spring-бина и добавляет его в контекст.

\`\`\`java
@SpringBootTest
class OrderServiceTest {
    
    @MockBean
    private PaymentGateway paymentGateway;
    
    @Autowired
    private OrderService orderService;
    
    @Test
    void shouldProcessOrder() {
        when(paymentGateway.charge(anyDouble())).thenReturn(true);
        
        Order order = orderService.createOrder(100.0);
        
        assertThat(order.getStatus()).isEqualTo("PAID");
        verify(paymentGateway).charge(100.0);
    }
}
\`\`\`

**Разница @MockBean и @Mock:**
- \`@MockBean\` — создаёт mock и добавляет в Spring контекст (заменяет реальный бин)
- \`@Mock\` (Mockito) — создаёт mock, но не добавляет в контекст

---

**Testcontainers:**

Библиотека для запуска Docker-контейнеров в тестах. Используется для интеграционных тестов с реальными базами данных, брокерами сообщений и т.д.

\`\`\`java
@SpringBootTest
class UserRepositoryTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Test
    void shouldSaveUser() {
        User user = new User("John");
        userRepository.save(user);
        
        assertThat(userRepository.findAll()).hasSize(1);
    }
}
\`\`\`

**Преимущества Testcontainers:**
- Реальная БД (не H2)
- Изоляция тестов
- Воспроизводимость
- Поддержка PostgreSQL, MySQL, Redis, Kafka, Elasticsearch

**Для собеседования:** MockMvc — тестирование контроллеров без сервера. \`@MockBean\` — mock-бин в Spring контексте. Testcontainers — Docker-контейнеры для интеграционных тестов с реальными БД (PostgreSQL, Redis, Kafka).`,
"shortAnswer": `MockMvc — тестирование контроллеров без сервера. @MockBean — mock-бин в Spring контексте. Testcontainers — Docker-контейнеры для интеграционных тестов с реальными БД (PostgreSQL, Redis, Kafka).`,
},
{
"id": `7-middle-бэкенд-java-python-3`,
"title": `(Python) Что такое pytest, fixtures, @pytest.mark.parametrize?`,
"fullAnswer": `**pytest:**

Самый популярный тестовый фреймворк для Python. Проще и мощнее встроенного unittest.

**Базовый тест:**
\`\`\`python
# test_math.py
def test_addition():
    assert 1 + 1 == 2

def test_string():
    assert "hello".upper() == "HELLO"
\`\`\`

**Запуск:**
\`\`\`bash
pytest                    # все тесты
pytest test_math.py       # конкретный файл
pytest -v                 # verbose
pytest -k "test_add"      # по имени
pytest --tb=short         # короткий traceback
\`\`\`

---

**Fixtures:**

Fixtures — функции, которые предоставляют тестовые данные и зависимости.

**Базовый fixture:**
\`\`\`python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "John", "age": 30}

def test_user_name(sample_user):
    assert sample_user["name"] == "John"
\`\`\`

**Scope fixtures:**
\`\`\`python
@pytest.fixture(scope="function")  # для каждого теста (по умолчанию)
def func_fixture():
    return "function"

@pytest.fixture(scope="class")     # для каждого класса
def class_fixture():
    return "class"

@pytest.fixture(scope="module")    # для каждого модуля
def module_fixture():
    return "module"

@pytest.fixture(scope="session")   # для всей сессии
def session_fixture():
    return "session"
\`\`\`

**Fixture с setup/teardown:**
\`\`\`python
@pytest.fixture
def database():
    # Setup
    db = create_database()
    yield db
    # Teardown
    db.close()
\`\`\`

**Parameterized fixtures:**
\`\`\`python
@pytest.fixture(params=["chrome", "firefox", "safari"])
def browser(request):
    return request.param

def test_browser(browser):
    assert browser in ["chrome", "firefox", "safari"]
\`\`\`

**conftest.py:**
Файл для общих fixtures, доступных всем тестам в директории.
\`\`\`python
# conftest.py
@pytest.fixture
def client():
    app = create_app()
    with app.test_client() as client:
        yield client
\`\`\`

---

**@pytest.mark.parametrize:**

Позволяет запускать один тест с разными наборами данных.

\`\`\`python
@pytest.mark.parametrize("input,expected", [
    (1, 2),
    (2, 4),
    (3, 6),
    (0, 0)
])
def test_double(input, expected):
    assert input * 2 == expected
\`\`\`

**Несколько параметров:**
\`\`\`python
@pytest.mark.parametrize("username,password,expected", [
    ("admin", "admin123", True),
    ("user", "user123", True),
    ("admin", "wrong", False),
    ("", "", False)
])
def test_login(username, password, expected):
    result = login(username, password)
    assert result == expected
\`\`\`

**Parametrize с fixtures:**
\`\`\`python
@pytest.fixture(params=[1, 2, 3])
def number(request):
    return request.param

@pytest.mark.parametrize("multiplier", [10, 100])
def test_multiply(number, multiplier):
    assert number * multiplier > 0
\`\`\`

**Для собеседования:** pytest — популярный тестовый фреймворк Python. Fixtures — функции с тестовыми данными (scope: function, class, module, session). \`@pytest.mark.parametrize\` — запуск теста с разными наборами данных. \`conftest.py\` — общие fixtures.`,
"shortAnswer": `pytest — популярный тестовый фреймворк Python. Fixtures — функции с тестовыми данными (scope: function, class, module, session). @pytest.mark.parametrize — запуск теста с разными наборами данных. conftest.py — общие fixtures.`,
},
{
"id": `7-middle-бэкенд-java-python-4`,
"title": `(Python) Как тестировать FastAPI (TestClient) и Django (TestCase)?`,
"fullAnswer": `**Тестирование FastAPI:**

**TestClient:**
\`\`\`python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_create_user():
    response = client.post("/users", json={
        "name": "John",
        "email": "john@example.com"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "John"
    assert "id" in data
\`\`\`

**Тестирование с зависимостями:**
\`\`\`python
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Мок зависимости
def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
\`\`\`

**Тестирование авторизации:**
\`\`\`python
def test_protected_route():
    # Без токена
    response = client.get("/protected")
    assert response.status_code == 401
    
    # С токеном
    response = client.get("/protected", headers={
        "Authorization": "Bearer token123"
    })
    assert response.status_code == 200
\`\`\`

**Async тесты:**
\`\`\`python
import pytest
from httpx import AsyncClient, ASGITransport

@pytest.mark.asyncio
async def test_async_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/")
        assert response.status_code == 200
\`\`\`

---

**Тестирование Django:**

**TestCase:**
\`\`\`python
from django.test import TestCase
from myapp.models import User

class UserModelTest(TestCase):
    def setUp(self):
        # Выполняется перед каждым тестом
        self.user = User.objects.create(
            username="testuser",
            email="test@example.com"
        )
    
    def test_user_creation(self):
        self.assertEqual(self.user.username, "testuser")
        self.assertTrue(self.user.is_active)
    
    def test_user_str(self):
        self.assertEqual(str(self.user), "testuser")
\`\`\`

**Тестирование views:**
\`\`\`python
from django.test import TestCase, Client

class ViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            username="testuser",
            password="testpass123"
        )
    
    def test_home_page(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Welcome")
    
    def test_protected_view(self):
        # Без авторизации
        response = self.client.get("/profile/")
        self.assertEqual(response.status_code, 302)
        
        # С авторизацией
        self.client.login(username="testuser", password="testpass123")
        response = self.client.get("/profile/")
        self.assertEqual(response.status_code, 200)
\`\`\`

**Тестирование API (DRF):**
\`\`\`python
from rest_framework.test import APIClient, APITestCase

class UserAPITest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username="testuser",
            password="testpass123"
        )
    
    def test_create_user(self):
        response = self.client.post("/api/users/", {
            "username": "newuser",
            "email": "new@example.com",
            "password": "newpass123"
        })
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["username"], "newuser")
    
    def test_authenticated_endpoint(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get("/api/profile/")
        self.assertEqual(response.status_code, 200)
\`\`\`

**Тестирование форм:**
\`\`\`python
def test_valid_form(self):
    form = UserForm(data={
        "username": "testuser",
        "email": "test@example.com"
    })
    self.assertTrue(form.is_valid())

def test_invalid_form(self):
    form = UserForm(data={
        "username": "",
        "email": "invalid"
    })
    self.assertFalse(form.is_valid())
\`\`\`

**Для собеседования:** FastAPI тестируется через \`TestClient\` (синхронно) или \`httpx.AsyncClient\` (асинхронно). Зависимости мокаются через \`dependency_overrides\`. Django использует \`TestCase\` с \`setUp()\`, \`Client\` для views, \`APIClient\` для DRF API. Авторизация через \`client.login()\` или \`force_authenticate()\`.`,
"shortAnswer": `FastAPI тестируется через TestClient (синхронно) или httpx.AsyncClient (асинхронно). Зависимости мокаются через dependency_overrides. Django использует TestCase с setUp(), Client для views, APIClient для DRF API. Авторизация через client.login() или force_authenticate().`,
},
],
},
{
"id": `общие-темы`,
"title": `Общие темы`,
"questions": [
{
"id": `7-middle-общие-темы-1`,
"title": `Что такое mutation testing и TestOps?`,
"fullAnswer": `**Mutation Testing (Мутационное тестирование):**

Метод оценки качества тестов путём внесения небольших изменений (мутаций) в код и проверки, ловят ли их тесты.

**Как работает:**
1. Берётся исходный код
2. Автоматически создаются мутанты (изменённые версии кода)
3. Для каждого мутанта запускаются тесты
4. Если тесты падают — мутант убит (тесты работают)
5. Если тесты проходят — мутант выжил (тесты не покрывают этот случай)

**Пример мутаций:**
\`\`\`javascript
// Исходный код
function add(a, b) {
  return a + b
}

// Мутанты:
function add(a, b) {
  return a - b  // мутация оператора
}

function add(a, b) {
  return a      // мутация возвращаемого значения
}
\`\`\`

**Метрики:**
- **Mutation Score** — процент убитых мутантов
- Формула: (Убитые мутанты / Всего мутантов) × 100%
- Хороший score: 80%+

**Инструменты:**
- **JavaScript:** Stryker Mutator
- **Java:** Pitest
- **Python:** Mutmut, Cosmic Ray

**Пример с Stryker:**
\`\`\`bash
npm install -D @stryker-mutator/core @stryker-mutator/jest-runner

# stryker.conf.js
module.exports = {
  mutator: 'javascript',
  testRunner: 'jest',
  reporters: ['html', 'clear-text'],
  mutate: ['src/**/*.js']
}
\`\`\`

**Преимущества:**
- Показывает реальное качество тестов (не только покрытие)
- Находит "ложноположительные" тесты
- Помогает улучшить тесты

**Недостатки:**
- Медленный (много прогонов)
- Сложная настройка

---

**TestOps:**

TestOps (Test Operations) — практика управления тестированием как частью DevOps-процесса.

**Ключевые принципы:**
- Автоматизация тестирования в CI/CD
- Мониторинг качества тестов
- Быстрая обратная связь разработчикам
- Инфраструктура для тестов как код

**Практики TestOps:**

**1. Тесты в CI/CD:**
\`\`\`yaml
# GitHub Actions
- name: Run tests
  run: npm test
  
- name: Upload coverage
  uses: actions/upload-artifact@v3
  with:
    name: coverage
    path: coverage/
\`\`\`

**2. Параллельный запуск:**
\`\`\`bash
# Разделение тестов на группы
npm run test:unit -- --shard=1/4
npm run test:unit -- --shard=2/4
npm run test:unit -- --shard=3/4
npm run test:unit -- --shard=4/4
\`\`\`

**3. Мониторинг метрик:**
- Coverage
- Mutation score
- Время выполнения тестов
- Количество flaky тестов

**4. Test Environment as Code:**
\`\`\`dockerfile
# Dockerfile для тестового окружения
FROM node:18
RUN apt-get update && apt-get install -y chromium
COPY . .
RUN npm ci
CMD ["npm", "test"]
\`\`\`

**5. Отчётность:**
- Allure Report
- HTML Reporter
- Интеграция с Jira, Slack

**Для собеседования:** Mutation testing оценивает качество тестов через внесение мутаций в код. Mutation Score — процент убитых мутантов. TestOps — управление тестированием в CI/CD: автоматизация, параллельный запуск, мониторинг метрик, инфраструктура как код.`,
"shortAnswer": `Mutation testing оценивает качество тестов через внесение мутаций в код. Mutation Score — процент убитых мутантов. TestOps — управление тестированием в CI/CD: автоматизация, параллельный запуск, мониторинг метрик, инфраструктура как код.`,
},
{
"id": `7-middle-общие-темы-2`,
"title": `Как организовать тестовые данные и обеспечить test isolation?`,
"fullAnswer": `**Организация тестовых данных:**

**1. Test Data Builders:**
Паттерн для создания тестовых объектов с дефолтными значениями.

\`\`\`javascript
// builders/userBuilder.js
export const createUser = (overrides = {}) => ({
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  ...overrides
})

// Использование
const user = createUser({ name: 'John', role: 'admin' })
const anotherUser = createUser({ id: 2 })
\`\`\`

**2. Factories (Fabrique):**
Более продвинутый вариант builders с генерацией уникальных данных.

\`\`\`javascript
import { faker } from '@faker-js/faker'

export const createRandomUser = () => ({
  id: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(['user', 'admin'])
})

// Уникальные данные для каждого теста
const user1 = createRandomUser()
const user2 = createRandomUser()
\`\`\`

**3. Fixtures (фикстуры):**
Статические тестовые данные в файлах.

\`\`\`json
// fixtures/users.json
[
  { "id": 1, "name": "John", "email": "john@example.com" },
  { "id": 2, "name": "Jane", "email": "jane@example.com" }
]
\`\`\`

\`\`\`javascript
import users from './fixtures/users.json'

it('should load users', () => {
  expect(users).toHaveLength(2)
})
\`\`\`

**4. Мок данных через MSW:**
\`\`\`javascript
const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  })
]
\`\`\`

---

**Test Isolation (Изоляция тестов):**

Каждый тест должен быть независимым и не влиять на другие.

**1. Изоляция состояния:**

**Плохо:**
\`\`\`javascript
let counter = 0

it('test 1', () => {
  counter++
  expect(counter).toBe(1)
})

it('test 2', () => {
  counter++
  expect(counter).toBe(2) // зависит от test 1!
})
\`\`\`

**Хорошо:**
\`\`\`javascript
it('test 1', () => {
  let counter = 0
  counter++
  expect(counter).toBe(1)
})

it('test 2', () => {
  let counter = 0
  counter++
  expect(counter).toBe(1) // независимо
})
\`\`\`

**2. Изоляция БД:**

**Транзакции:**
\`\`\`javascript
beforeEach(async () => {
  await db.beginTransaction()
})

afterEach(async () => {
  await db.rollback() // откат после каждого теста
})
\`\`\`

**Очистка БД:**
\`\`\`javascript
afterEach(async () => {
  await db.users.deleteMany()
  await db.posts.deleteMany()
})
\`\`\`

**Отдельная тестовая БД:**
\`\`\`javascript
// .env.test
DATABASE_URL=postgresql://localhost:5432/test_db
\`\`\`

**3. Изоляция моков:**

\`\`\`javascript
beforeEach(() => {
  vi.clearAllMocks()  // очистка всех моков
})

// или в конфиге
{
  clearMocks: true
}
\`\`\`

**4. Изоляция файлов:**

\`\`\`javascript
import { mkdtemp, rm } from 'fs/promises'
import { tmpdir } from 'os'
import { join } from 'path'

let tempDir

beforeEach(async () => {
  tempDir = await mkdtemp(join(tmpdir(), 'test-'))
})

afterEach(async () => {
  await rm(tempDir, { recursive: true })
})
\`\`\`

**5. Параллельное выполнение:**

\`\`\`javascript
// playwright.config.ts
export default defineConfig({
  fullyParallel: true,  // параллельный запуск тестов
  workers: 4            // количество workers
})
\`\`\`

**Проблемы параллельного выполнения:**
- Конфликты при записи в БД
- Общие файлы
- Глобальное состояние

**Решения:**
- Уникальные данные для каждого теста (faker)
- Транзакции с откатом
- Отдельные схемы/таблицы

**6. Order-independent тесты:**

Тесты не должны зависеть от порядка выполнения.

\`\`\`javascript
// Плохо
describe('User tests', () => {
  it('should create user', () => { /* ... */ })
  it('should update user', () => { /* требует создания из test 1 */ })
})

// Хорошо
describe('User tests', () => {
  it('should create user', () => {
    const user = createUser()
    // ...
  })
  
  it('should update user', () => {
    const user = createUser()  // создаём своего пользователя
    // ...
  })
})
\`\`\`

**Для собеседования:** Тестовые данные организуются через Builders (шаблоны с overrides), Factories (генерация уникальных данных через faker), Fixtures (статические JSON-файлы). Test isolation обеспечивается через: очистку моков (\`clearMocks\`), транзакции с откатом, уникальные данные, отдельные тестовые БД, order-independent тесты.`,
"shortAnswer": `Тестовые данные организуются через Builders (шаблоны с overrides), Factories (генерация уникальных данных через faker), Fixtures (статические JSON-файлы). Test isolation обеспечивается через: очистку моков (clearMocks), транзакции с откатом, уникальные данные, отдельные тестовые БД, order-independent тесты.`,
},
],
},
],
},
}
