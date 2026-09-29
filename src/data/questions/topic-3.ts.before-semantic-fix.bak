import type { TopicQuestions } from '../../types/question'

export const topic3Questions: TopicQuestions = {
"id": 3,
"slug": `topic-3`,
"title": `TypeScript`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `3-junior-общее-1`,
"title": `Что такое TypeScript? Зачем он нужен?`,
"fullAnswer": `**TypeScript** — это язык программирования, разработанный Microsoft, который является **надмножеством JavaScript**. Это значит, что любой валидный код на JavaScript является валидным кодом на TypeScript, но TypeScript добавляет к нему **статическую типизацию**.

**Зачем нужен TypeScript:**

**1. Статическая типизация:**
Ошибки типов обнаруживаются на этапе компиляции, а не во время выполнения.
\`\`\`typescript
// TypeScript поймает ошибку до запуска кода
let age: number = 25
age = "twenty five" // ❌ Ошибка: Type 'string' is not assignable to type 'number'
\`\`\`

**2. Автодополнение в IDE:**
Редакторы кода (VS Code) понимают типы и подсказывают свойства, методы и параметры.
\`\`\`typescript
interface User {
  name: string
  age: number
  email: string
}

const user: User = { name: "John", age: 30, email: "john@example.com" }
user. // IDE покажет: name, age, email
\`\`\`

**3. Улучшенная читаемость кода:**
Типы служат документацией. Другому разработчику сразу понятно, какие данные ожидаются.
\`\`\`typescript
// Без TypeScript — непонятно, что ожидает функция
function process(data) { ... }

// С TypeScript — сразу видна структура
function process(user: { name: string; age: number }) { ... }
\`\`\`

**4. Безопасный рефакторинг:**
При изменении структуры данных TypeScript покажет все места, которые нужно обновить.

**5. Поддержка современных возможностей:**
TypeScript компилируется в JavaScript, поэтому можно использовать новые возможности языка (ES6+) и компилировать их в старый синтаксис для совместимости.

**Как работает TypeScript:**
1. Пишете код на TypeScript (\`.ts\` файлы)
2. Компилятор \`tsc\` проверяет типы
3. Компилятор преобразует код в JavaScript (\`.js\` файлы)
4. Браузер/Node.js запускает JavaScript

**Ключевые моменты:**
- ✅ Находит ошибки до запуска кода
- ✅ Улучшает автодополнение в IDE
- ✅ Служит документацией
- ✅ Облегчает рефакторинг
- ️ Требует времени на изучение
- ️ Нужен этап компиляции

💡 **Для собеседования:** TypeScript — надмножество JavaScript со статической типизацией. Находит ошибки типов на этапе компиляции, улучшает автодополнение в IDE, служит документацией и облегчает рефакторинг. Компилируется в JavaScript.`,
"shortAnswer": `TypeScript — надмножество JavaScript со статической типизацией. Находит ошибки типов на этапе компиляции, улучшает автодополнение в IDE, служит документацией и облегчает рефакторинг. Компилируется в JavaScript.`,
},
{
"id": `3-junior-общее-2`,
"title": `Основные типы: string, number, boolean, array, object, any, unknown.`,
"fullAnswer": `TypeScript предоставляет систему типов для описания структуры данных.

**Примитивные типы:**

**\`string\`** — строки:
\`\`\`typescript
let name: string = "John"
let greeting: string = \`Hello, \${name}\`
\`\`\`

**\`number\`** — числа (целые и дробные):
\`\`\`typescript
let age: number = 30
let price: number = 19.99
let hex: number = 0xff
\`\`\`

**\`boolean\`** — логические значения:
\`\`\`typescript
let isActive: boolean = true
let hasError: boolean = false
\`\`\`

**\`bigint\`** — большие целые числа:
\`\`\`typescript
let bigNumber: bigint = 9007199254740991n
\`\`\`

**\`symbol\`** — уникальные идентификаторы:
\`\`\`typescript
let uniqueId: symbol = Symbol("id")
\`\`\`

**Специальные типы:**

**\`any\`** — отключает проверку типов (использовать осторожно):
\`\`\`typescript
let data: any = "hello"
data = 42        // ✅ OK
data = true      // ✅ OK
data.foo()       // ✅ OK (но может упасть в runtime)
\`\`\`

**\`unknown\`** — безопасная альтернатива \`any\`:
\`\`\`typescript
let data: unknown = "hello"
data = 42        // ✅ OK
// data.foo()    // ❌ Ошибка: нужно проверить тип сначала

if (typeof data === "string") {
  console.log(data.toUpperCase()) // ✅ OK после проверки
}
\`\`\`

**\`void\`** — отсутствие значения (для функций):
\`\`\`typescript
function log(message: string): void {
  console.log(message)
  // ничего не возвращает
}
\`\`\`

**\`null\` и \`undefined\`**:
\`\`\`typescript
let empty: null = null
let notDefined: undefined = undefined
\`\`\`

**Сложные типы:**

**Массивы:**
\`\`\`typescript
// Синтаксис 1
let numbers: number[] = [1, 2, 3]

// Синтаксис 2 (дженерики)
let strings: Array<string> = ["a", "b", "c"]

// Кортеж — массив фиксированной длины с разными типами
let pair: [string, number] = ["age", 30]
\`\`\`

**Объекты:**
\`\`\`typescript
let user: { name: string; age: number } = {
  name: "John",
  age: 30
}
\`\`\`

**Функции:**
\`\`\`typescript
let greet: (name: string) => string = (name) => \`Hello, \${name}\`
\`\`\`

**Ключевые моменты:**
- TypeScript выводит типы автоматически: \`let x = 5\` → \`x: number\`
- \`any\` отключает проверку типов — используйте осторожно
- \`unknown\` безопаснее \`any\` — требует проверки типа перед использованием
- Массивы типизируются через \`Type[]\` или \`Array<Type>\`

💡 **Для собеседования:** Основные типы TypeScript: примитивы (\`string\`, \`number\`, \`boolean\`), специальные (\`any\`, \`unknown\`, \`void\`, \`null\`, \`undefined\`), сложные (массивы \`Type[]\`, объекты \`{ key: Type }\`, функции). \`any\` отключает проверку типов, \`unknown\` требует проверки перед использованием.`,
"shortAnswer": `Основные типы TypeScript: примитивы (string, number, boolean), специальные (any, unknown, void, null, undefined), сложные (массивы Type[], объекты { key: Type }, функции). any отключает проверку типов, unknown требует проверки перед использованием.`,
},
{
"id": `3-junior-общее-3`,
"title": `Чем any отличается от unknown?`,
"fullAnswer": `**\`any\`** и **\`unknown\`** — оба представляют значения неизвестного типа, но ведут себя по-разному.

**\`any\` — отключает проверку типов:**
\`\`\`typescript
let data: any = "hello"

// Можно делать что угодно — TypeScript не проверяет
data = 42           // ✅
data = true         // ✅
data.foo()          // ✅ (но упадёт в runtime, если foo не существует)
data.toFixed(2)     // ✅ (но упадёт, если data — строка)

const result = data * 2  // ✅ (но может быть NaN)
\`\`\`

**\`unknown\` — требует проверки типа:**
\`\`\`typescript
let data: unknown = "hello"

// Можно присваивать что угодно
data = 42           // ✅
data = true         // ✅

// ❌ Нельзя использовать без проверки типа
data.foo()          // ❌ Ошибка: Object is of type 'unknown'
data.toFixed(2)     // ❌ Ошибка
const result = data * 2  // ❌ Ошибка

// ✅ Нужно проверить тип сначала
if (typeof data === "string") {
  console.log(data.toUpperCase())  // ✅ OK
}

if (typeof data === "number") {
  console.log(data.toFixed(2))  // ✅ OK
}
\`\`\`

**Сравнение в таблице:**

| Операция | \`any\` | \`unknown\` |
|---|---|---|
| Присваивание любого значения | ✅ | ✅ |
| Вызов методов | ✅ (без проверки) | ❌ (нужна проверка) |
| Арифметические операции | ✅ (без проверки) | ❌ (нужна проверка) |
| Присваивание другому типу | ✅ | ❌ (нужна проверка) |
| Безопасность |  Низкая | ✅ Высокая |

**Практические примеры:**

**Когда использовать \`any\`:**
- Миграция старого JavaScript кода
- Работа с библиотеками без типов
- Быстрый прототип (но потом заменить!)

\`\`\`typescript
// Временное решение при миграции
function legacyFunction(data: any) {
  // TODO: добавить типы позже
  return data.process()
}
\`\`\`

**Когда использовать \`unknown\`:**
- Данные из внешних источников (API, пользовательский ввод)
- Обработка ошибок в \`catch\`
- Когда тип действительно неизвестен

\`\`\`typescript
// Обработка ошибок
try {
  riskyOperation()
} catch (error: unknown) {
  // error — unknown, нужно проверить
  if (error instanceof Error) {
    console.error(error.message)
  } else if (typeof error === "string") {
    console.error(error)
  }
}

// Данные из API
async function fetchData(): Promise<unknown> {
  const response = await fetch("/api/data")
  return response.json()
}

const data = await fetchData()
// data — unknown, нужно проверить перед использованием
\`\`\`

**Type Guards для \`unknown\`:**
\`\`\`typescript
function processValue(value: unknown) {
  // typeof
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  
  // instanceof
  if (value instanceof Date) {
    return value.getTime()
  }
  
  // Array.isArray
  if (Array.isArray(value)) {
    return value.length
  }
  
  // Проверка на объект
  if (typeof value === "object" && value !== null) {
    // value теперь имеет тип object
  }
}
\`\`\`

**Ключевые моменты:**
- \`any\` — "я знаю, что делаю", отключает проверку типов
- \`unknown\` — "я не знаю тип", требует проверки перед использованием
- \`unknown\` безопаснее \`any\` — используйте его по умолчанию
- \`any\` можно присвоить чему угодно, \`unknown\` — только после проверки типа

💡 **Для собеседования:** \`any\` полностью отключает проверку типов — можно делать что угодно, но это небезопасно. \`unknown\` требует проверки типа перед использованием (через \`typeof\`, \`instanceof\`, \`Array.isArray\`). \`unknown\` безопаснее \`any\`, используйте его для данных из внешних источников и в \`catch\` блоках.`,
"shortAnswer": `any полностью отключает проверку типов — можно делать что угодно, но это небезопасно. unknown требует проверки типа перед использованием (через typeof, instanceof, Array.isArray). unknown безопаснее any, используйте его для данных из внешних источников и в catch блоках.`,
},
{
"id": `3-junior-общее-4`,
"title": `Что такое интерфейсы (interface) и типы (type)? Чем они отличаются?`,
"fullAnswer": `**\`interface\`** и **\`type\`** — два способа описания структуры данных в TypeScript. Они похожи, но имеют важные различия.

**Interface — описание формы объекта:**
\`\`\`typescript
interface User {
  name: string
  age: number
  email: string
}

const user: User = {
  name: "John",
  age: 30,
  email: "john@example.com"
}
\`\`\`

**Type — алиас для любого типа:**
\`\`\`typescript
type User = {
  name: string
  age: number
  email: string
}

const user: User = {
  name: "John",
  age: 30,
  email: "john@example.com"
}
\`\`\`

**Что может \`type\`, но не может \`interface\`:**

**1. Примитивные типы:**
\`\`\`typescript
type ID = string | number
type Status = "active" | "inactive"
type Callback = () => void

// interface ID = string | number  // ❌ Ошибка
\`\`\`

**2. Union и Intersection типы:**
\`\`\`typescript
type StringOrNumber = string | number
type User = Admin & { lastLogin: Date }

// interface StringOrNumber = string | number  // ❌ Ошибка
\`\`\`

**3. Кортежи:**
\`\`\`typescript
type Pair = [string, number]
const pair: Pair = ["age", 30]

// interface Pair = [string, number]  // ❌ Ошибка
\`\`\`

**4. Mapped типы:**
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// interface Readonly<T> = { ... }  // ❌ Ошибка
\`\`\`

**Что может \`interface\`, но не может \`type\`:**

**1. Declaration Merging (объединение объявлений):**
\`\`\`typescript
interface User {
  name: string
}

interface User {
  age: number
}

// Результат: User = { name: string; age: number }
// TypeScript автоматически объединяет интерфейсы с одинаковым именем

// type не поддерживает merging
type User = { name: string }
type User = { age: number }  // ❌ Ошибка: Duplicate identifier
\`\`\`

**2. Наследование через \`extends\`:**
\`\`\`typescript
interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

const dog: Dog = { name: "Rex", breed: "Labrador" }
\`\`\`

\`type\` тоже может наследовать, но через intersection:
\`\`\`typescript
type Animal = { name: string }
type Dog = Animal & { breed: string }
\`\`\`

**3. Реализация классами:**
\`\`\`typescript
interface Printable {
  print(): void
}

class Document implements Printable {
  print() {
    console.log("Printing...")
  }
}

// type тоже можно реализовать
type Printable = { print(): void }
class Document implements Printable { ... }
\`\`\`

**Когда что использовать:**

**Используйте \`interface\` для:**
- Описания формы объектов
- Публичных API (библиотеки, компоненты)
- Когда нужно declaration merging
- Описания контрактов для классов

\`\`\`typescript
interface ApiResponse {
  data: User[]
  status: number
  message: string
}

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}
\`\`\`

**Используйте \`type\` для:**
- Union типов
- Intersection типов
- Примитивных алиасов
- Кортежей
- Mapped типов
- Когда тип не является формой объекта

\`\`\`typescript
type Status = "loading" | "success" | "error"
type ID = string | number
type Point = [number, number]
type Callback<T> = (data: T) => void
\`\`\`

**Стиль кода:**
Многие проекты используют соглашение:
- \`interface\` — для объектов и контрактов
- \`type\` — для всего остального

**Ключевые моменты:**
- Оба описывают структуру данных
- \`interface\` поддерживает declaration merging и наследование через \`extends\`
- \`type\` более гибкий: union, intersection, примитивы, кортежи
- Для объектов они практически взаимозаменяемы

 **Для собеседования:** \`interface\` и \`type\` описывают структуру данных. \`interface\` поддерживает declaration merging (объединение объявлений с одинаковым именем) и наследование через \`extends\`. \`type\` более гибкий: поддерживает union (\`|\`), intersection (\`&\`), примитивы, кортежи, mapped типы. Для объектов они взаимозаменяемы.`,
"shortAnswer": `interface и type описывают структуру данных. interface поддерживает declaration merging (объединение объявлений с одинаковым именем) и наследование через extends. type более гибкий: поддерживает union (|), intersection (&), примитивы, кортежи, mapped типы. Для объектов они взаимозаменяемы.`,
},
{
"id": `3-junior-общее-5`,
"title": `Что такое дженерики (<T>)? Приведите пример.`,
"fullAnswer": `**Дженерики (Generics)** — это механизм создания переиспользуемых компонентов, которые работают с разными типами, сохраняя типобезопасность.

**Проблема без дженериков:**
\`\`\`typescript
// Функция возвращает любой тип — теряем информацию о типе
function getFirst(arr: any[]): any {
  return arr[0]
}

const numbers = [1, 2, 3]
const first = getFirst(numbers)  // first имеет тип any
first.toFixed(2)  // ✅ TypeScript не проверит (может упасть)
\`\`\`

**Решение с дженериками:**
\`\`\`typescript
// T — параметр типа (placeholder)
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

const numbers = [1, 2, 3]
const first = getFirst(numbers)  // first имеет тип number ✅
first.toFixed(2)  // ✅ TypeScript проверит

const strings = ["a", "b", "c"]
const firstStr = getFirst(strings)  // firstStr имеет тип string ✅
firstStr.toUpperCase()  // ✅ TypeScript проверит
\`\`\`

**Как это работает:**
- \`T\` — это переменная типа (как параметр функции, но для типов)
- TypeScript автоматически выводит \`T\` из аргументов
- Можно явно указать тип: \`getFirst<number>([1, 2, 3])\`

**Примеры использования:**

**1. Универсальная функция:**
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg
}

const num = identity(42)        // num: number
const str = identity("hello")   // str: string
\`\`\`

**2. Универсальный интерфейс:**
\`\`\`typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// Использование
const userResponse: ApiResponse<User> = {
  data: { name: "John", age: 30 },
  status: 200,
  message: "OK"
}

const usersResponse: ApiResponse<User[]> = {
  data: [{ name: "John", age: 30 }],
  status: 200,
  message: "OK"
}
\`\`\`

**3. Универсальный класс:**
\`\`\`typescript
class Stack<T> {
  private items: T[] = []
  
  push(item: T): void {
    this.items.push(item)
  }
  
  pop(): T | undefined {
    return this.items.pop()
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }
}

const numberStack = new Stack<number>()
numberStack.push(1)
numberStack.push(2)
const num = numberStack.pop()  // num: number | undefined

const stringStack = new Stack<string>()
stringStack.push("hello")
\`\`\`

**4. Несколько параметров типа:**
\`\`\`typescript
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second]
}

const result = pair("hello", 42)  // result: [string, number]
\`\`\`

**5. Ограничения (constraints):**
\`\`\`typescript
// T должен иметь свойство length
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}

getLength("hello")      // ✅ string имеет length
getLength([1, 2, 3])    // ✅ массив имеет length
// getLength(42)        // ❌ number не имеет length

// T должен расширять определённый интерфейс
interface HasId {
  id: number
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)
}
\`\`\`

**6. Дженерики в React/Vue:**
\`\`\`typescript
// React
function List<T>({ items, renderItem }: {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}) {
  return <ul>{items.map(renderItem)}</ul>
}

// Vue
type ListProps<T> = {
  items: T[]
  renderItem: (item: T) => string
}
\`\`\`

**Именование параметров типа:**
- \`T\` — Type (общий)
- \`U\`, \`V\` — дополнительные типы
- \`K\` — Key (ключ)
- \`V\` — Value (значение)
- \`E\` — Element (элемент)
- \`R\` — Return (возвращаемое значение)
- \`T\`, \`U\`, \`V\` — можно использовать любые буквы, но есть соглашения

**Ключевые моменты:**
- Дженерики позволяют создавать переиспользуемые компоненты
- TypeScript выводит типы автоматически
- Можно ограничить типы через \`extends\`
- Используются в функциях, интерфейсах, классах, типах

 **Для собеседования:** Дженерики — параметризованные типы, позволяющие создавать переиспользуемые компоненты. Синтаксис: \`<T>\`. TypeScript автоматически выводит тип из аргументов. Можно ограничить через \`extends\`. Используются для функций, интерфейсов, классов. Пример: \`function getFirst<T>(arr: T[]): T\`.`,
"shortAnswer": `Дженерики — параметризованные типы, позволяющие создавать переиспользуемые компоненты. Синтаксис: <T>. TypeScript автоматически выводит тип из аргументов. Можно ограничить через extends. Используются для функций, интерфейсов, классов. Пример: function getFirst<T>(arr: T[]): T.`,
},
{
"id": `3-junior-общее-6`,
"title": `Что такое enum, tuple, literal types?`,
"fullAnswer": `## Enum (перечисления)

**\`enum\`** — способ определить набор именованных констант.

**Числовые enum:**
\`\`\`typescript
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Up
console.log(move)  // 0
\`\`\`

**Строковые enum (рекомендуется):**
\`\`\`typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

let userStatus: Status = Status.Active
console.log(userStatus)  // "ACTIVE"
\`\`\`

**С явными значениями:**
\`\`\`typescript
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Success")
  }
}
\`\`\`

**Альтернатива enum — union types (часто предпочтительнее):**
\`\`\`typescript
// Вместо enum
const Status = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Pending: "PENDING"
} as const

type Status = typeof Status[keyof typeof Status]
// Status = "ACTIVE" | "INACTIVE" | "PENDING"
\`\`\`

**Почему union types часто лучше:**
- Меньше кода в скомпилированном JS
- Лучшая поддержка tree-shaking
- Проще отлаживать (видны строковые значения)

---

## Tuple (кортежи)

**Кортеж** — массив фиксированной длины с известными типами элементов.

**Базовый пример:**
\`\`\`typescript
// [string, number] — первый элемент строка, второй число
let pair: [string, number] = ["age", 30]

pair[0] = "name"   // ✅ string
pair[1] = 25       // ✅ number
// pair[2] = true  // ❌ Ошибка: индекс вне диапазона
\`\`\`

**Использование:**
\`\`\`typescript
// Координаты
type Point = [number, number]
const point: Point = [10, 20]

// 3D координаты
type Point3D = [number, number, number]

// Пара ключ-значение
type Entry = [string, any]
const entries: Entry[] = Object.entries({ name: "John", age: 30 })

// Возврат нескольких значений из функции
function getUser(): [string, number] {
  return ["John", 30]
}

const [name, age] = getUser()  // деструктуризация
\`\`\`

**Ограничения:**
\`\`\`typescript
let pair: [string, number] = ["age", 30]

// ✅ Можно изменять существующие элементы
pair[0] = "name"
pair[1] = 25

//  Нельзя добавлять новые (в строгом режиме)
pair.push(true)  // Ошибка в TypeScript 4.3+
\`\`\`

**Named tuples (именованные кортежи, TS 4.0+):**
\`\`\`typescript
type User = [name: string, age: number]

const user: User = ["John", 30]
// При наведении в IDE покажет: name: string, age: number
\`\`\`

---

## Literal Types (литеральные типы)

**Литеральный тип** — тип, который принимает только конкретное значение.

**Строковые литералы:**
\`\`\`typescript
type Direction = "up" | "down" | "left" | "right"

let move: Direction = "up"      // ✅
// move = "forward"             // ❌ Ошибка
\`\`\`

**Числовые литералы:**
\`\`\`typescript
type HttpStatus = 200 | 404 | 500

let status: HttpStatus = 200    // ✅
// status = 301                 // ❌ Ошибка
\`\`\`

**Boolean литералы:**
\`\`\`typescript
type IsAdmin = true | false
// По сути то же, что boolean, но можно использовать для различения
\`\`\`

**Практическое применение:**

**1. Ограничение значений:**
\`\`\`typescript
type ButtonVariant = "primary" | "secondary" | "danger"

interface ButtonProps {
  variant: ButtonVariant
  label: string
}

function Button({ variant, label }: ButtonProps) {
  // variant гарантированно один из трёх
}
\`\`\`

**2. Discriminated unions:**
\`\`\`typescript
type Success = {
  status: "success"
  data: string
}

type Error = {
  status: "error"
  message: string
}

type Result = Success | Error

function handleResult(result: Result) {
  if (result.status === "success") {
    console.log(result.data)    // ✅ TypeScript знает тип
  } else {
    console.log(result.message) // ✅ TypeScript знает тип
  }
}
\`\`\`

**3. Константные объекты:**
\`\`\`typescript
const COLORS = {
  primary: "#007bff",
  secondary: "#6c757d",
  danger: "#dc3545"
} as const

type Color = keyof typeof COLORS
// Color = "primary" | "secondary" | "danger"
\`\`\`

**Ключевые моменты:**
- **Enum** — именованные константы (числовые или строковые). Часто заменяется union types.
- **Tuple** — массив фиксированной длины с разными типами. Пример: \`[string, number]\`.
- **Literal types** — типы с конкретными значениями. Пример: \`"up" | "down"\`.

 **Для собеседования:** \`enum\` — именованные константы (часто заменяется union types). \`tuple\` — массив фиксированной длины с разными типами (\`[string, number]\`). \`literal types\` — типы с конкретными значениями (\`"up" | "down" | "left"\`), используются для ограничения допустимых значений.`,
"shortAnswer": `enum — именованные константы (часто заменяется union types). tuple — массив фиксированной длины с разными типами ([string, number]). literal types — типы с конкретными значениями ("up" | "down" | "left"), используются для ограничения допустимых значений.`,
},
{
"id": `3-junior-общее-7`,
"title": `Что такое union types (|) и intersection types (&)?`,
"fullAnswer": `## Union Types (|) — "ИЛИ"

**Union type** позволяет значению быть **одним из нескольких типов**.

**Базовый пример:**
\`\`\`typescript
let id: string | number
id = "abc"    // ✅
id = 123      // ✅
// id = true  // ❌ Ошибка
\`\`\`

**Практическое применение:**

**1. Функция принимает разные типы:**
\`\`\`typescript
function printId(id: string | number) {
  // Можно использовать только общие методы
  console.log(id.toString())  // ✅ есть и у string, и у number
  // console.log(id.toUpperCase())  // ❌ нет у number
  
  // Нужно проверить тип
  if (typeof id === "string") {
    console.log(id.toUpperCase())  // ✅ OK
  } else {
    console.log(id.toFixed(2))     // ✅ OK
  }
}

printId("abc")
printId(123)
\`\`\`

**2. Возврат разных типов:**
\`\`\`typescript
function getUser(id: number): User | null {
  const user = users.find(u => u.id === id)
  return user || null
}

const user = getUser(1)
if (user !== null) {
  console.log(user.name)  // ✅ TypeScript знает, что user не null
}
\`\`\`

**3. Строковые литералы:**
\`\`\`typescript
type Status = "loading" | "success" | "error"

let status: Status = "loading"  // ✅
// status = "pending"           // ❌ Ошибка
\`\`\`

**4. Discriminated unions:**
\`\`\`typescript
type Circle = {
  kind: "circle"
  radius: number
}

type Square = {
  kind: "square"
  side: number
}

type Shape = Circle | Square

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2  // ✅ TypeScript знает тип
    case "square":
      return shape.side ** 2              // ✅ TypeScript знает тип
  }
}
\`\`\`

---

## Intersection Types (&) — "И"

**Intersection type** объединяет **несколько типов в один**. Значение должно соответствовать **всем типам одновременно**.

**Базовый пример:**
\`\`\`typescript
type HasName = {
  name: string
}

type HasAge = {
  age: number
}

type User = HasName & HasAge

const user: User = {
  name: "John",
  age: 30
}
\`\`\`

**Практическое применение:**

**1. Комбинирование интерфейсов:**
\`\`\`typescript
interface Identifiable {
  id: number
}

interface Timestamped {
  createdAt: Date
  updatedAt: Date
}

interface User {
  name: string
  email: string
}

type UserWithMeta = User & Identifiable & Timestamped

const user: UserWithMeta = {
  name: "John",
  email: "john@example.com",
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}
\`\`\`

**2. Миксины (mixins):**
\`\`\`typescript
type Greetable = {
  greet(): void
}

type Loggable = {
  log(): void
}

type FullFeatured = Greetable & Loggable

class MyClass implements FullFeatured {
  greet() { console.log("Hello") }
  log() { console.log("Logging...") }
}
\`\`\`

**3. Добавление свойств к существующему типу:**
\`\`\`typescript
interface User {
  name: string
  age: number
}

type UserWithId = User & { id: number }

const user: UserWithId = {
  name: "John",
  age: 30,
  id: 1
}
\`\`\`

---

## Union vs Intersection

**Union (|) — "ИЛИ":**
\`\`\`typescript
type A = { x: number }
type B = { y: number }
type Union = A | B

const union: Union = { x: 1 }        // ✅
const union2: Union = { y: 2 }       // ✅
// const union3: Union = { x: 1, y: 2 }  // ✅ (но TypeScript не гарантирует y)
\`\`\`

**Intersection (&) — "И":**
\`\`\`typescript
type A = { x: number }
type B = { y: number }
type Intersection = A & B

const inter: Intersection = { x: 1, y: 2 }  // ✅ обязательно оба
// const inter2: Intersection = { x: 1 }     // ❌ Ошибка: нет y
\`\`\`

**Визуальная аналогия:**
- Union (\`|\`) — объединение множеств: значение может быть из A **или** из B
- Intersection (\`&\`) — пересечение множеств: значение должно быть **и** в A, **и** в B

**Ключевые моменты:**
- Union (\`|\`) — значение может быть одним из типов. Используется для \`string | number\`, \`"a" | "b" | "c"\`.
- Intersection (\`&\`) — значение должно соответствовать всем типам. Используется для комбинирования интерфейсов.
- Для union типов нужно проверять тип перед использованием специфичных свойств.

💡 **Для собеседования:** Union types (\`|\`) — значение может быть одним из типов (\`string | number\`). Intersection types (\`&\`) — значение должно соответствовать всем типам одновременно (комбинирование интерфейсов). Union используется для альтернатив, intersection — для расширения типов.`,
"shortAnswer": `Union types (|) — значение может быть одним из типов (string | number). Intersection types (&) — значение должно соответствовать всем типам одновременно (комбинирование интерфейсов). Union используется для альтернатив, intersection — для расширения типов.`,
},
{
"id": `3-junior-общее-8`,
"title": `Что такое type guards (typeof, in, instanceof)?`,
"fullAnswer": `**Type guards** — это способы проверить тип значения в runtime, чтобы TypeScript мог сузить тип (type narrowing) внутри блока проверки.

## typeof

Проверяет примитивные типы: \`string\`, \`number\`, \`boolean\`, \`symbol\`, \`undefined\`, \`object\`, \`function\`, \`bigint\`.

\`\`\`typescript
function process(value: string | number) {
  if (typeof value === "string") {
    // TypeScript знает: value — string
    console.log(value.toUpperCase())  // ✅
  } else {
    // TypeScript знает: value — number
    console.log(value.toFixed(2))     // ✅
  }
}
\`\`\`

**Важно:** \`typeof null === "object"\` (историческая ошибка JavaScript).

\`\`\`typescript
function check(value: unknown) {
  if (typeof value === "object") {
    // value может быть object ИЛИ null!
    // Нужно дополнительно проверить
    if (value !== null) {
      // Теперь точно object
    }
  }
}
\`\`\`

## instanceof

Проверяет, является ли объект экземпляром класса.

\`\`\`typescript
class Dog {
  bark() { console.log("Woof!") }
}

class Cat {
  meow() { console.log("Meow!") }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()  // ✅ TypeScript знает, что это Dog
  } else {
    animal.meow()  // ✅ TypeScript знает, что это Cat
  }
}
\`\`\`

**Пример с Date:**
\`\`\`typescript
function processDate(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.getTime())  // ✅
  } else {
    console.log(new Date(date).getTime())  // ✅
  }
}
\`\`\`

## in

Проверяет наличие свойства в объекте.

\`\`\`typescript
type Fish = {
  swim: () => void
  name: string
}

type Bird = {
  fly: () => void
  name: string
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim()  // ✅ TypeScript знает, что это Fish
  } else {
    animal.fly()   // ✅ TypeScript знает, что это Bird
  }
}
\`\`\`

**Пример с опциональными свойствами:**
\`\`\`typescript
interface Admin {
  name: string
  role: "admin"
  permissions: string[]
}

interface User {
  name: string
  role: "user"
}

function checkAccess(person: Admin | User) {
  if ("permissions" in person) {
    // TypeScript знает: person — Admin
    console.log(person.permissions)
  } else {
    // TypeScript знает: person — User
    console.log("Regular user")
  }
}
\`\`\`

## Другие type guards

**Пользовательские type guards:**
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string"
}

function process(value: unknown) {
  if (isString(value)) {
    // TypeScript знает: value — string
    console.log(value.toUpperCase())
  }
}
\`\`\`

**\`Array.isArray\`:**
\`\`\`typescript
function process(value: string | string[]) {
  if (Array.isArray(value)) {
    // TypeScript знает: value — string[]
    console.log(value.join(", "))
  } else {
    // TypeScript знает: value — string
    console.log(value)
  }
}
\`\`\`

**Проверка на null/undefined:**
\`\`\`typescript
function process(value: string | null | undefined) {
  if (value === null || value === undefined) {
    return "No value"
  }
  // TypeScript знает: value — string
  return value.toUpperCase()
}

// Или через optional chaining
function process2(value: string | null | undefined) {
  return value?.toUpperCase() ?? "No value"
}
\`\`\`

**Discriminated unions (через общее свойство):**
\`\`\`typescript
type Success = {
  status: "success"
  data: string
}

type Error = {
  status: "error"
  message: string
}

function handle(result: Success | Error) {
  if (result.status === "success") {
    console.log(result.data)    // ✅
  } else {
    console.log(result.message) // ✅
  }
}
\`\`\`

**Ключевые моменты:**
- **\`typeof\`** — для примитивов (\`string\`, \`number\`, \`boolean\`)
- **\`instanceof\`** — для экземпляров классов
- **\`in\`** — для проверки наличия свойства в объекте
- **\`Array.isArray\`** — для проверки массива
- **Пользовательские guards** — через \`value is Type\`
- После проверки TypeScript сужает тип внутри блока

💡 **Для собеседования:** Type guards — проверки типа в runtime для сужения типа в TypeScript. \`typeof\` — для примитивов, \`instanceof\` — для классов, \`in\` — для свойств объекта. После проверки TypeScript знает точный тип внутри блока. Можно создавать пользовательские guards через \`value is Type\`.`,
"shortAnswer": `Type guards — проверки типа в runtime для сужения типа в TypeScript. typeof — для примитивов, instanceof — для классов, in — для свойств объекта. После проверки TypeScript знает точный тип внутри блока. Можно создавать пользовательские guards через value is Type.`,
},
{
"id": `3-junior-общее-9`,
"title": `Что такое type assertion (as, <>), non-null assertion (!)?`,
"fullAnswer": `## Type Assertion (утверждение типа)

**Type assertion** — способ сказать TypeScript: "я знаю, какой здесь тип, доверься мне". Это не конвертация типа, а подсказка компилятору.

### Синтаксис \`as\`

\`\`\`typescript
const input = document.getElementById("myInput") as HTMLInputElement

// Теперь TypeScript знает, что input — HTMLInputElement
input.value = "Hello"  // ✅
input.focus()          // ✅
\`\`\`

**Когда использовать:**

**1. DOM-элементы:**
\`\`\`typescript
// getElementById возвращает HTMLElement | null
const element = document.getElementById("app")

// Утверждаем, что это конкретный элемент
const input = document.getElementById("search") as HTMLInputElement
const canvas = document.getElementById("canvas") as HTMLCanvasElement
\`\`\`

**2. Парсинг JSON:**
\`\`\`typescript
const data = JSON.parse(response) as User[]

// Теперь TypeScript знает структуру
data.forEach(user => console.log(user.name))
\`\`\`

**3. Работа с \`any\`:**
\`\`\`typescript
function legacyFunction(): any {
  return { name: "John", age: 30 }
}

const user = legacyFunction() as User
console.log(user.name)  // ✅
\`\`\`

### Синтаксис \`<>\` (угловые скобки)

\`\`\`typescript
const input = <HTMLInputElement>document.getElementById("myInput")
\`\`\`

⚠️ **Не работает в JSX/TSX файлах** (конфликт с React-синтаксисом). Используйте \`as\` в React-проектах.

### Двойное утверждение

Иногда нужно утвердить тип через промежуточный:
\`\`\`typescript
const value = "hello" as any as number
// Сначала as any (отключаем проверку), потом as number
\`\`\`

---

## Non-null Assertion (!)

**Оператор \`!\`** говорит TypeScript: "я гарантирую, что это значение не null и не undefined".

\`\`\`typescript
function process(user: User | null) {
  // user.name  // ❌ Ошибка: Object is possibly 'null'
  
  // С non-null assertion
  console.log(user!.name)  // ✅ TypeScript верит нам
}
\`\`\`

**Практические примеры:**

**1. DOM-элементы:**
\`\`\`typescript
const button = document.getElementById("submitBtn")!
// TypeScript знает: button — HTMLElement (не null)
button.addEventListener("click", handleClick)
\`\`\`

**2. Опциональные свойства:**
\`\`\`typescript
interface Config {
  apiUrl?: string
  timeout?: number
}

function getConfig(config: Config) {
  // config.apiUrl  // ❌ Object is possibly 'undefined'
  
  const url = config.apiUrl!  // ✅ Мы уверены, что apiUrl есть
  return url
}
\`\`\`

**3. Инициализация в классе:**
\`\`\`typescript
class MyClass {
  element!: HTMLElement  // Обещаем инициализировать позже
  
  init() {
    this.element = document.getElementById("app")!
  }
  
  doSomething() {
    this.element.focus()  // ✅ TypeScript верит нам
  }
}
\`\`\`

**4. С \`querySelector\`:**
\`\`\`typescript
const input = document.querySelector("input")!
input.value = "test"  // ✅
\`\`\`

---

## Когда использовать что

**Type assertion (\`as\`):**
- Когда вы знаете тип лучше, чем TypeScript
- Работа с DOM
- Парсинг JSON
- Миграция с JavaScript

**Non-null assertion (\`!\`):**
- Когда вы уверены, что значение не null/undefined
- DOM-элементы, которые точно существуют
- Опциональные свойства, которые точно будут
- Инициализация в конструкторе

**Альтернативы (более безопасные):**

**Вместо \`!\` используйте optional chaining:**
\`\`\`typescript
// Вместо
user!.name

// Лучше
user?.name  // вернёт undefined, если user — null
\`\`\`

**Вместо \`as\` используйте type guards:**
\`\`\`typescript
// Вместо
const input = element as HTMLInputElement

// Лучше
if (element instanceof HTMLInputElement) {
  element.value = "test"  // TypeScript знает тип
}
\`\`\`

**Ключевые моменты:**
- Type assertion (\`as\`) — подсказка TypeScript о типе
- Non-null assertion (\`!\`) — гарантия, что значение не null/undefined
- Оба отключают проверку типов — используйте осторожно
- Предпочитайте optional chaining (\`?.\`) и type guards

💡 **Для собеседования:** Type assertion (\`as\`) — подсказка TypeScript о типе (например, для DOM-элементов). Non-null assertion (\`!\`) — гарантия, что значение не null/undefined. Оба отключают проверку типов. Более безопасные альтернативы: optional chaining (\`?.\`) и type guards.`,
"shortAnswer": `Type assertion (as) — подсказка TypeScript о типе (например, для DOM-элементов). Non-null assertion (!) — гарантия, что значение не null/undefined. Оба отключают проверку типов. Более безопасные альтернативы: optional chaining (?.) и type guards.`,
},
{
"id": `3-junior-общее-10`,
"title": `Что такое optional chaining (?.) и nullish coalescing (??)?`,
"fullAnswer": `## Optional Chaining (?.)

**Optional chaining** — оператор для безопасного доступа к свойствам вложенных объектов, которые могут быть \`null\` или \`undefined\`.

**Проблема без optional chaining:**
\`\`\`typescript
interface User {
  name: string
  address?: {
    city: string
    street?: {
      name: string
    }
  }
}

function getCity(user: User) {
  // Без optional chaining — много проверок
  if (user.address && user.address.street && user.address.street.name) {
    return user.address.street.name
  }
  return null
}
\`\`\`

**Решение с optional chaining:**
\`\`\`typescript
function getCity(user: User) {
  // Коротко и читаемо
  return user.address?.street?.name
}
\`\`\`

**Как работает:**
- Если значение слева от \`?.\` — \`null\` или \`undefined\`, выражение возвращает \`undefined\`
- Иначе — продолжает вычисление

**Примеры использования:**

**1. Доступ к свойствам:**
\`\`\`typescript
const user: User | null = null

// Без optional chaining
const name = user && user.name  // undefined

// С optional chaining
const name = user?.name  // undefined (без ошибки)
\`\`\`

**2. Вызов методов:**
\`\`\`typescript
const callback: (() => void) | undefined = undefined

// Без optional chaining
callback && callback()  // ничего не произойдёт

// С optional chaining
callback?.()  // ничего не произойдёт (без ошибки)
\`\`\`

**3. Доступ к элементам массива:**
\`\`\`typescript
const users: User[] | undefined = undefined

const firstUser = users?.[0]  // undefined (без ошибки)
\`\`\`

**4. Цепочка вызовов:**
\`\`\`typescript
const city = user?.address?.street?.name?.toUpperCase()
// Если любое значение в цепочке null/undefined — вернёт undefined
\`\`\`

**5. С функциями:**
\`\`\`typescript
const response = {
  data: {
    user: { name: "John" }
  }
}

const userName = response.data?.user?.name  // "John"
\`\`\`

---

## Nullish Coalescing (??)

**Nullish coalescing** — оператор для предоставления значения по умолчанию, если значение \`null\` или \`undefined\`.

**Проблема с \`||\`:**
\`\`\`typescript
const count = 0
const result = count || 10  // 10 (но мы хотели 0!)

const name = ""
const displayName = name || "Anonymous"  // "Anonymous" (но мы хотели "")
\`\`\`

\`||\` считает "ложными" значения falsy: \`0\`, \`""\`, \`false\`, \`null\`, \`undefined\`, \`NaN\`.

**Решение с \`??\`:**
\`\`\`typescript
const count = 0
const result = count ?? 10  // 0 ✅ (только null/undefined заменяются)

const name = ""
const displayName = name ?? "Anonymous"  // "" ✅

const value = null
const defaultValue = value ?? 10  // 10 ✅

const value2 = undefined
const defaultValue2 = value2 ?? 10  // 10 ✅
\`\`\`

**Когда использовать \`??\`:**
- Значения по умолчанию для чисел (0 — валидное значение)
- Значения по умолчанию для строк ("" — валидное значение)
- Значения по умолчанию для boolean (false — валидное значение)

**Практические примеры:**

**1. Конфигурация со значениями по умолчанию:**
\`\`\`typescript
interface Config {
  timeout?: number
  retries?: number
  debug?: boolean
}

function createConfig(config: Config) {
  return {
    timeout: config.timeout ?? 5000,      // 5000 по умолчанию
    retries: config.retries ?? 3,         // 3 по умолчанию
    debug: config.debug ?? false          // false по умолчанию
  }
}

const config = createConfig({ timeout: 0 })
// { timeout: 0, retries: 3, debug: false }
// timeout = 0 (не 5000, потому что 0 — валидное значение)
\`\`\`

**2. Получение данных из объекта:**
\`\`\`typescript
const user = {
  name: "John",
  age: undefined
}

const name = user.name ?? "Anonymous"      // "John"
const age = user.age ?? 0                  // 0
const email = user.email ?? "no-email"     // "no-email"
\`\`\`

**3. Комбинирование с optional chaining:**
\`\`\`typescript
const city = user?.address?.city ?? "Unknown"
// Если user, address или city — null/undefined, вернёт "Unknown"
\`\`\`

**4. Обработка ответа от API:**
\`\`\`typescript
async function getUsers() {
  const response = await fetch("/api/users")
  const data = await response.json()
  
  return {
    users: data?.users ?? [],
    total: data?.total ?? 0,
    error: data?.error ?? null
  }
}
\`\`\`

---

## Комбинирование \`?.\` и \`??\`

Часто используются вместе:
\`\`\`typescript
const userName = user?.name ?? "Anonymous"
const itemCount = cart?.items?.length ?? 0
const config = settings?.theme?.color ?? "#000000"
\`\`\`

**Ключевые моменты:**
- **\`?.\`** — безопасный доступ к свойствам (возвращает \`undefined\` вместо ошибки)
- **\`??\`** — значение по умолчанию только для \`null\`/\`undefined\` (не для \`0\`, \`""\`, \`false\`)
- **\`||\`** — значение по умолчанию для всех falsy значений
- Часто комбинируются: \`obj?.prop ?? defaultValue\`

💡 **Для собеседования:** Optional chaining (\`?.\`) — безопасный доступ к свойствам вложенных объектов (возвращает \`undefined\` вместо ошибки). Nullish coalescing (\`??\`) — значение по умолчанию только для \`null\`/\`undefined\` (в отличие от \`||\`, который заменяет все falsy значения). Часто комбинируются: \`user?.name ?? "Anonymous"\`.`,
"shortAnswer": `Optional chaining (?.) — безопасный доступ к свойствам вложенных объектов (возвращает undefined вместо ошибки). Nullish coalescing (??) — значение по умолчанию только для null/undefined (в отличие от ||, который заменяет все falsy значения). Часто комбинируются: user?.name ?? "Anonymous".`,
},
{
"id": `3-junior-общее-11`,
"title": `Как типизировать функции и классы?`,
"fullAnswer": `## Типизация функций

**1. Типизация параметров:**
\`\`\`typescript
function greet(name: string, age: number): string {
  return \`Hello, \${name}! You are \${age} years old.\`
}

// Стрелочная функция
const greet2 = (name: string, age: number): string => {
  return \`Hello, \${name}!\`
}
\`\`\`

**2. Опциональные параметры:**
\`\`\`typescript
function greet(name: string, greeting?: string): string {
  const msg = greeting ?? "Hello"
  return \`\${msg}, \${name}!\`
}

greet("John")              // ✅
greet("John", "Hi")        // ✅
// greet("John", "Hi", "!")  // ❌ Ошибка: слишком много аргументов
\`\`\`

**3. Параметры по умолчанию:**
\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`
}

greet("John")        // "Hello, John!"
greet("John", "Hi")  // "Hi, John!"
\`\`\`

**4. Rest параметры:**
\`\`\`typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

sum(1, 2, 3)        // 6
sum(1, 2, 3, 4, 5)  // 15
\`\`\`

**5. Тип функции (function type):**
\`\`\`typescript
// Синтаксис 1
type MathOperation = (a: number, b: number) => number

const add: MathOperation = (a, b) => a + b
const multiply: MathOperation = (a, b) => a * b

// Синтаксис 2 (interface)
interface MathOperation {
  (a: number, b: number): number
}

const add: MathOperation = (a, b) => a + b
\`\`\`

**6. Callback функции:**
\`\`\`typescript
function fetchData(
  url: string,
  onSuccess: (data: User[]) => void,
  onError: (error: Error) => void
) {
  fetch(url)
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => onError(error))
}

fetchData(
  "/api/users",
  (users) => console.log(users),
  (error) => console.error(error)
)
\`\`\`

**7. Возврат void:**
\`\`\`typescript
function log(message: string): void {
  console.log(message)
  // ничего не возвращает
}

// void не значит "нельзя возвращать"
function logAndReturn(message: string): void {
  console.log(message)
  return  // ✅ можно, но значение игнорируется
}
\`\`\`

**8. Never (функция никогда не завершается):**
\`\`\`typescript
function throwError(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {
    // бесконечный цикл
  }
}
\`\`\`

---

## Типизация классов

**1. Типизация свойств:**
\`\`\`typescript
class User {
  name: string
  age: number
  isActive: boolean
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.isActive = true
  }
}
\`\`\`

**2. Модификаторы доступа:**
\`\`\`typescript
class User {
  public name: string        // доступно везде (по умолчанию)
  private age: number        // доступно только внутри класса
  protected email: string    // доступно в классе и наследниках
  readonly id: number        // нельзя изменить после инициализации
  
  constructor(id: number, name: string, age: number, email: string) {
    this.id = id
    this.name = name
    this.age = age
    this.email = email
  }
  
  getAge(): number {
    return this.age  // ✅ внутри класса можно
  }
}

const user = new User(1, "John", 30, "john@example.com")
console.log(user.name)    // ✅
// console.log(user.age)  // ❌ Ошибка: private
// user.id = 2            // ❌ Ошибка: readonly
\`\`\`

**3. Сокращённая запись конструктора:**
\`\`\`typescript
class User {
  constructor(
    public id: number,
    public name: string,
    private age: number
  ) {
    // TypeScript автоматически создаст свойства
  }
}

const user = new User(1, "John", 30)
console.log(user.name)  // ✅
// console.log(user.age)  // ❌ private
\`\`\`

**4. Реализация интерфейсов:**
\`\`\`typescript
interface Printable {
  print(): void
}

interface Identifiable {
  id: number
}

class User implements Printable, Identifiable {
  id: number
  name: string
  
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  
  print(): void {
    console.log(\`User: \${this.name}\`)
  }
}
\`\`\`

**5. Наследование:**
\`\`\`typescript
class Animal {
  constructor(public name: string) {}
  
  speak(): void {
    console.log(\`\${this.name} makes a sound\`)
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name)  // вызов конструктора родителя
  }
  
  speak(): void {
    console.log(\`\${this.name} barks\`)
  }
  
  fetch(): void {
    console.log(\`\${this.name} fetches the ball\`)
  }
}

const dog = new Dog("Rex", "Labrador")
dog.speak()  // "Rex barks"
dog.fetch()  // "Rex fetches the ball"
\`\`\`

**6. Абстрактные классы:**
\`\`\`typescript
abstract class Shape {
  abstract getArea(): number
  
  describe(): string {
    return \`Shape with area \${this.getArea()}\`
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }
  
  getArea(): number {
    return Math.PI * this.radius ** 2
  }
}

// const shape = new Shape()  // ❌ Ошибка: нельзя создать экземпляр абстрактного класса
const circle = new Circle(5)
console.log(circle.describe())  // "Shape with area 78.54..."
\`\`\`

**7. Статические свойства и методы:**
\`\`\`typescript
class MathHelper {
  static PI = 3.14159
  
  static circleArea(radius: number): number {
    return MathHelper.PI * radius ** 2
  }
}

console.log(MathHelper.PI)              // 3.14159
console.log(MathHelper.circleArea(5))   // 78.54
\`\`\`

**8. Generic классы:**
\`\`\`typescript
class Stack<T> {
  private items: T[] = []
  
  push(item: T): void {
    this.items.push(item)
  }
  
  pop(): T | undefined {
    return this.items.pop()
  }
}

const numberStack = new Stack<number>()
numberStack.push(1)
numberStack.push(2)

const stringStack = new Stack<string>()
stringStack.push("hello")
\`\`\`

**Ключевые моменты:**
- Функции типизируются через параметры и возвращаемый тип
- Классы поддерживают модификаторы: \`public\`, \`private\`, \`protected\`, \`readonly\`
- Классы могут реализовывать интерфейсы через \`implements\`
- Наследование через \`extends\`
- Абстрактные классы нельзя инстанциировать
- Generic классы работают с разными типами

💡 **Для собеседования:** Функции типизируются через параметры (\`name: string\`) и возвращаемый тип (\`: string\`). Классы поддерживают модификаторы (\`public\`, \`private\`, \`protected\`, \`readonly\`), реализацию интерфейсов (\`implements\`), наследование (\`extends\`), абстрактные методы и дженерики.`,
"shortAnswer": `Функции типизируются через параметры (name: string) и возвращаемый тип (: string). Классы поддерживают модификаторы (public, private, protected, readonly), реализацию интерфейсов (implements), наследование (extends), абстрактные методы и дженерики.`,
},
{
"id": `3-junior-общее-12`,
"title": `Что такое readonly модификатор?`,
"fullAnswer": `**\`readonly\`** — модификатор, который делает свойство доступным только для чтения. Значение можно установить только при инициализации, изменить нельзя.

**В интерфейсах:**
\`\`\`typescript
interface User {
  readonly id: number
  name: string
  age: number
}

const user: User = { id: 1, name: "John", age: 30 }

// user.id = 2  // ❌ Ошибка: Cannot assign to 'id' because it is a read-only property
user.name = "Jane"  // ✅
\`\`\`

**В классах:**
\`\`\`typescript
class User {
  readonly id: number
  name: string
  
  constructor(id: number, name: string) {
    this.id = id      // ✅ можно в конструкторе
    this.name = name
  }
  
  changeName(newName: string) {
    this.name = newName  // ✅
    // this.id = 2       // ❌ Ошибка
  }
}

const user = new User(1, "John")
// user.id = 2  //  Ошибка
\`\`\`

**В типах:**
\`\`\`typescript
type Config = {
  readonly apiUrl: string
  readonly timeout: number
  debug: boolean
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  debug: true
}

// config.apiUrl = "..."  // ❌ Ошибка
config.debug = false      // ✅
\`\`\`

**В параметрах функций:**
\`\`\`typescript
function processItems(items: readonly string[]) {
  // items.push("new")  //  Ошибка: Property 'push' does not exist
  console.log(items.length)  // ✅
  console.log(items[0])      // ✅
}

processItems(["a", "b", "c"])
\`\`\`

**Readonly массивы:**
\`\`\`typescript
const numbers: readonly number[] = [1, 2, 3]

// numbers.push(4)      // ❌ Ошибка
// numbers[0] = 10      // ❌ Ошибка
console.log(numbers[0])  // ✅
\`\`\`

**Readonly кортежи:**
\`\`\`typescript
const point: readonly [number, number] = [10, 20]

// point[0] = 15  // ❌ Ошибка
console.log(point[0])  // ✅
\`\`\`

**Readonly Map и Set:**
\`\`\`typescript
const map: ReadonlyMap<string, number> = new Map([["a", 1]])
// map.set("b", 2)  //  Ошибка

const set: ReadonlySet<number> = new Set([1, 2, 3])
// set.add(4)       // ❌ Ошибка
\`\`\`

**Utility тип \`Readonly<T>\`:**
Делает все свойства объекта readonly.
\`\`\`typescript
interface User {
  name: string
  age: number
}

const user: User = { name: "John", age: 30 }
const readonlyUser: Readonly<User> = user

// readonlyUser.name = "Jane"  // ❌ Ошибка
\`\`\`

**Когда использовать:**
- ID сущностей (не должны меняться)
- Конфигурация
- Константы
- Параметры функций (для защиты от мутации)
- Возвращаемые значения (чтобы caller не мутировал)

**Разница между \`const\` и \`readonly\`:**
\`\`\`typescript
// const — нельзя переприсвоить переменную
const x = 5
// x = 10  //  Ошибка

// readonly — нельзя изменить свойство объекта
interface Obj {
  readonly value: number
}
const obj: Obj = { value: 5 }
// obj.value = 10  // ❌ Ошибка

// Но const объект можно мутировать (если свойства не readonly)
const mutableObj = { value: 5 }
mutableObj.value = 10  // ✅
\`\`\`

**Ключевые моменты:**
- \`readonly\` делает свойство неизменяемым после инициализации
- Работает в интерфейсах, типах, классах, параметрах функций
- \`Readonly<T>\` — utility тип для всех свойств
- \`const\` — для переменных, \`readonly\` — для свойств
- Защищает от случайных мутаций

 **Для собеседования:** \`readonly\` — модификатор, запрещающий изменение свойства после инициализации. Работает в интерфейсах, типах, классах. \`Readonly<T>\` делает все свойства объекта readonly. \`const\` — для переменных, \`readonly\` — для свойств объектов.`,
"shortAnswer": `readonly — модификатор, запрещающий изменение свойства после инициализации. Работает в интерфейсах, типах, классах. Readonly<T> делает все свойства объекта readonly. const — для переменных, readonly — для свойств объектов.`,
},
{
"id": `3-junior-общее-13`,
"title": `Что такое Partial, Required, Pick, Omit, Record?`,
"fullAnswer": `Это **utility типы** — встроенные типы TypeScript для трансформации других типов.

## Partial<T>

Делает **все свойства необязательными**.

\`\`\`typescript
interface User {
  name: string
  age: number
  email: string
}

type PartialUser = Partial<User>
// { name?: string; age?: number; email?: string }

const user: PartialUser = {
  name: "John"
  // age и email не обязательны
}
\`\`\`

**Применение:** обновление объекта (не все поля нужно менять):
\`\`\`typescript
function updateUser(id: number, updates: Partial<User>) {
  // updates может содержать любое подмножество полей
  const user = getUserById(id)
  return { ...user, ...updates }
}

updateUser(1, { name: "Jane" })  // ✅
updateUser(1, { age: 25 })       // ✅
\`\`\`

---

## Required<T>

Делает **все свойства обязательными** (противоположность \`Partial\`).

\`\`\`typescript
interface Config {
  host?: string
  port?: number
  debug?: boolean
}

type FullConfig = Required<Config>
// { host: string; port: number; debug: boolean }

const config: FullConfig = {
  host: "localhost",
  port: 3000,
  debug: true
  // все поля обязательны
}
\`\`\`

---

## Pick<T, K>

Выбирает **подмножество свойств** из типа.

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  password: string
  age: number
}

// Только публичные данные
type PublicUser = Pick<User, "id" | "name" | "email">
// { id: number; name: string; email: string }

const publicUser: PublicUser = {
  id: 1,
  name: "John",
  email: "john@example.com"
}
// password и age не доступны
\`\`\`

**Применение:** создание DTO (Data Transfer Object):
\`\`\`typescript
// Для API ответа не возвращаем пароль
type UserResponse = Pick<User, "id" | "name" | "email">

// Для формы создания — только нужные поля
type CreateUserInput = Pick<User, "name" | "email" | "password">
\`\`\`

---

## Omit<T, K>

Исключает **свойства** из типа (противоположность \`Pick\`).

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  password: string
}

// Без password
type SafeUser = Omit<User, "password">
// { id: number; name: string; email: string }

// Без id и password
type CreateUserInput = Omit<User, "id" | "password">
// { name: string; email: string }
\`\`\`

**Применение:**
\`\`\`typescript
// Исключаем внутренние поля для API
type UserDTO = Omit<User, "password" | "createdAt">

// Исключаем один ключ
type UserWithoutId = Omit<User, "id">
\`\`\`

---

## Record<K, V>

Создаёт тип объекта с **ключами типа K** и **значениями типа V**.

\`\`\`typescript
// Объект со строковыми ключами и числовыми значениями
type UserScores = Record<string, number>

const scores: UserScores = {
  john: 95,
  jane: 87,
  bob: 92
}

// С union типом ключей
type Status = "active" | "inactive" | "pending"
type StatusConfig = Record<Status, { color: string; label: string }>

const config: StatusConfig = {
  active: { color: "green", label: "Active" },
  inactive: { color: "gray", label: "Inactive" },
  pending: { color: "yellow", label: "Pending" }
}
\`\`\`

**Применение:**
\`\`\`typescript
// Словарь/маппинг
type Translations = Record<string, string>

const translations: Translations = {
  hello: "Привет",
  goodbye: "До свидания"
}

// Конфигурация с фиксированными ключами
type Theme = Record<"primary" | "secondary" | "accent", string>

const theme: Theme = {
  primary: "#007bff",
  secondary: "#6c757d",
  accent: "#ffc107"
}
\`\`\`

---

## Другие полезные utility типы

**\`Exclude<T, U>\`** — исключает типы из union:
\`\`\`typescript
type Status = "success" | "error" | "loading"
type ErrorStatus = Exclude<Status, "success">
// "error" | "loading"
\`\`\`

**\`Extract<T, U>\`** — извлекает типы из union:
\`\`\`typescript
type Status = "success" | "error" | "loading"
type SuccessStatus = Extract<Status, "success">
// "success"
\`\`\`

**\`NonNullable<T>\`** — исключает \`null\` и \`undefined\`:
\`\`\`typescript
type MaybeString = string | null | undefined
type DefinitelyString = NonNullable<MaybeString>
// string
\`\`\`

**\`ReturnType<T>\`** — тип возвращаемого значения функции:
\`\`\`typescript
function getUser() {
  return { name: "John", age: 30 }
}

type User = ReturnType<typeof getUser>
// { name: string; age: number }
\`\`\`

**\`Parameters<T>\`** — типы параметров функции:
\`\`\`typescript
function greet(name: string, age: number) {
  return \`Hello, \${name}!\`
}

type GreetParams = Parameters<typeof greet>
// [name: string, age: number]
\`\`\`

**Ключевые моменты:**
- **\`Partial<T>\`** — все свойства необязательны
- **\`Required<T>\`** — все свойства обязательны
- **\`Pick<T, K>\`** — выбрать свойства
- **\`Omit<T, K>\`** — исключить свойства
- **\`Record<K, V>\`** — объект с ключами K и значениями V

💡 **Для собеседования:** Utility типы для трансформации типов: \`Partial<T>\` (все необязательны), \`Required<T>\` (все обязательны), \`Pick<T, K>\` (выбрать свойства), \`Omit<T, K>\` (исключить свойства), \`Record<K, V>\` (объект с ключами K и значениями V).`,
"shortAnswer": `Utility типы для трансформации типов: Partial<T> (все необязательны), Required<T> (все обязательны), Pick<T, K> (выбрать свойства), Omit<T, K> (исключить свойства), Record<K, V> (объект с ключами K и значениями V).`,
},
{
"id": `3-junior-общее-14`,
"title": `Как настроить tsconfig.json и strict mode?`,
"fullAnswer": `**\`tsconfig.json\`** — конфигурационный файл TypeScript компилятора. Определяет, как компилировать проект.

## Базовая структура

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

## Основные опции

**\`target\`** — версия JavaScript для компиляции:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020"  // ES5, ES2015, ES2016, ..., ES2020, ESNext
  }
}
\`\`\`

**\`module\`** — система модулей:
\`\`\`json
{
  "compilerOptions": {
    "module": "ESNext"  // CommonJS, AMD, ESNext, ES2020
  }
}
\`\`\`

**\`lib\`** — библиотеки типов для включения:
\`\`\`json
{
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"]
  }
}
\`\`\`

**\`outDir\`** и **\`rootDir\`**:
\`\`\`json
{
  "compilerOptions": {
    "outDir": "./dist",    // куда компилировать
    "rootDir": "./src"     // корневая папка исходников
  }
}
\`\`\`

**\`strict\`** — включить все строгие проверки:
\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

---

## Strict Mode

**\`strict: true\`** включает сразу несколько строгих проверок:

**1. \`strictNullChecks\`** — \`null\` и \`undefined\` не совместимы с другими типами:
\`\`\`typescript
// strict: false
let name: string = null  // ✅

// strict: true
let name: string = null  // ❌ Ошибка
let name: string | null = null  // ✅
\`\`\`

**2. \`strictFunctionTypes\`** — строгая проверка типов функций:
\`\`\`typescript
type StringHandler = (s: string) => void
type ObjectHandler = (o: object) => void

let handler: StringHandler = (s: string) => console.log(s)

// strict: false
handler = (o: object) => console.log(o)  // ✅

// strict: true
handler = (o: object) => console.log(o)  // ❌ Ошибка
\`\`\`

**3. \`strictBindCallApply\`** — проверка \`bind\`, \`call\`, \`apply\`:
\`\`\`typescript
function greet(name: string) {
  return \`Hello, \${name}\`
}

// strict: true
greet.call(null, 42)  // ❌ Ошибка: 42 не string
\`\`\`

**4. \`strictPropertyInitialization\`** — свойства класса должны быть инициализированы:
\`\`\`typescript
class User {
  name: string  // ❌ Ошибка: Property 'name' has no initializer
  
  constructor(name: string) {
    this.name = name  // ✅
  }
}
\`\`\`

**5. \`noImplicitAny\`** — запрет неявного \`any\`:
\`\`\`typescript
// strict: false
function process(data) {  // data: any
  return data
}

// strict: true
function process(data) {  // ❌ Ошибка: Parameter 'data' implicitly has an 'any' type
  return data
}

// Нужно явно указать тип
function process(data: unknown) {
  return data
}
\`\`\`

**6. \`noImplicitThis\`** — запрет неявного \`this\`:
\`\`\`typescript
// strict: false
const button = {
  name: "Click",
  onClick: function() {
    console.log(this.name)  // this: any
  }
}

// strict: true
const button = {
  name: "Click",
  onClick: function() {
    console.log(this.name)  //  Ошибка: 'this' implicitly has type 'any'
  }
}
\`\`\`

**7. \`alwaysStrict\`** — добавлять \`"use strict"\` в скомпилированный код.

---

## Другие полезные опции

**\`esModuleInterop\`** — совместимость с CommonJS:
\`\`\`json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
\`\`\`
\`\`\`typescript
// Позволяет:
import fs from "fs"  // вместо import * as fs from "fs"
\`\`\`

**\`skipLibCheck\`** — пропускать проверку типов в \`.d.ts\` файлах:
\`\`\`json
{
  "compilerOptions": {
    "skipLibCheck": true  // ускоряет компиляцию
  }
}
\`\`\`

**\`resolveJsonModule\`** — импорт JSON файлов:
\`\`\`json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
\`\`\`
\`\`\`typescript
import data from "./data.json"
\`\`\`

**\`declaration\`** — генерировать \`.d.ts\` файлы:
\`\`\`json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./types"
  }
}
\`\`\`

**\`sourceMap\`** — генерировать source maps:
\`\`\`json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
\`\`\`

**\`baseUrl\`** и **\`paths\`** — алиасы импортов:
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
import Button from "@components/Button"
\`\`\`

**\`noUnusedLocals\`** и **\`noUnusedParameters\`**:
\`\`\`json
{
  "compilerOptions": {
    "noUnusedLocals": true,      // ошибка на неиспользуемые переменные
    "noUnusedParameters": true   // ошибка на неиспользуемые параметры
  }
}
\`\`\`

---

## Пример для Vue 3 проекта

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

**Ключевые моменты:**
- \`strict: true\` включает все строгие проверки
- \`target\` — версия JavaScript для компиляции
- \`module\` — система модулей
- \`lib\` — библиотеки типов
- \`esModuleInterop\` — совместимость с CommonJS
- \`resolveJsonModule\` — импорт JSON
- \`baseUrl\` + \`paths\` — алиасы импортов

💡 **Для собеседования:** \`tsconfig.json\` — конфигурация TypeScript компилятора. \`strict: true\` включает все строгие проверки (\`strictNullChecks\`, \`noImplicitAny\`, \`strictFunctionTypes\` и др.). Основные опции: \`target\`, \`module\`, \`lib\`, \`outDir\`, \`esModuleInterop\`, \`resolveJsonModule\`.`,
"shortAnswer": `tsconfig.json — конфигурация TypeScript компилятора. strict: true включает все строгие проверки (strictNullChecks, noImplicitAny, strictFunctionTypes и др.). Основные опции: target, module, lib, outDir, esModuleInterop, resolveJsonModule.`,
},
{
"id": `3-junior-общее-15`,
"title": `Что такое declaration files (.d.ts) и модули?`,
"fullAnswer": `## Declaration Files (.d.ts)

**Declaration files** — файлы с описаниями типов для JavaScript библиотек, которые не имеют встроенной типизации.

**Зачем нужны:**
- JavaScript библиотеки не имеют типов
- TypeScript не знает структуру библиотеки
- \`.d.ts\` файлы описывают типы для TypeScript

**Пример:**
\`\`\`typescript
// lodash.d.ts
declare module "lodash" {
  export function chunk<T>(array: T[], size: number): T[][]
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): T
  export function capitalize(string: string): string
}
\`\`\`

Теперь TypeScript знает типы lodash:
\`\`\`typescript
import { chunk, debounce } from "lodash"

const chunks = chunk([1, 2, 3, 4], 2)  // number[][]
const debouncedFn = debounce(() => {}, 300)  // функция
\`\`\`

**Типы declaration files:**

**1. Глобальные объявления:**
\`\`\`typescript
// globals.d.ts
declare const API_URL: string
declare function trackEvent(name: string, data: object): void

declare namespace Utils {
  function formatDate(date: Date): string
  function parseJSON(json: string): any
}
\`\`\`

**2. Модульные объявления:**
\`\`\`typescript
// my-library.d.ts
declare module "my-library" {
  export interface Config {
    apiUrl: string
    timeout: number
  }
  
  export function init(config: Config): void
  export function getData(): Promise<any>
}
\`\`\`

**3. Расширение существующих типов:**
\`\`\`typescript
// extend-window.d.ts
interface Window {
  myCustomProperty: string
  myCustomMethod(): void
}

// Теперь можно использовать
window.myCustomProperty = "hello"
window.myCustomMethod()
\`\`\`

**4. Расширение модулей:**
\`\`\`typescript
// extend-express.d.ts
declare module "express" {
  interface Request {
    user?: {
      id: number
      name: string
    }
  }
}

// В коде
app.get("/profile", (req, res) => {
  console.log(req.user?.name)  // ✅ TypeScript знает тип
})
\`\`\`

**Где хранить \`.d.ts\` файлы:**
\`\`\`
src/
  types/
    globals.d.ts
    modules.d.ts
    extensions.d.ts
\`\`\`

**Подключение в tsconfig.json:**
\`\`\`json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
\`\`\`

**@types пакеты:**
\`\`\`bash
npm install --save-dev @types/lodash
npm install --save-dev @types/node
npm install --save-dev @types/react
\`\`\`

Эти пакеты содержат \`.d.ts\` файлы для популярных библиотек.

---

## Модули в TypeScript

**Модуль** — файл с \`import\`/\`export\`. TypeScript поддерживает несколько систем модулей.

**ES Modules (ESM):**
\`\`\`typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b
}

export const PI = 3.14159

export default class Calculator {
  calculate() { ... }
}

// app.ts
import Calculator, { add, PI } from "./math"

const result = add(2, 3)
const calc = new Calculator()
\`\`\`

**CommonJS (Node.js):**
\`\`\`typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b
}

// app.ts
import { add } from "./math"
// Компилируется в: const { add } = require("./math")
\`\`\`

**Namespace (устаревший, но используется):**
\`\`\`typescript
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b
  }
  
  export const PI = 3.14159
}

const result = MathUtils.add(2, 3)
\`\`\`

**Ambient Modules (для библиотек без типов):**
\`\`\`typescript
// types/my-library.d.ts
declare module "my-library" {
  export function doSomething(input: string): string
  export interface Config {
    option1: boolean
    option2: number
  }
}

// Использование
import { doSomething, Config } from "my-library"
\`\`\`

**Type-only imports (TS 3.8+):**
\`\`\`typescript
// Импортируем только типы (не будут в скомпилированном JS)
import type { User, Config } from "./types"

// Или смешанный импорт
import { fetchData, type User } from "./api"
\`\`\`

**Re-export:**
\`\`\`typescript
// index.ts
export { User, Config } from "./types"
export { fetchData } from "./api"
export { default as Button } from "./components/Button"
\`\`\`

**Dynamic imports:**
\`\`\`typescript
async function loadModule() {
  const module = await import("./heavy-module")
  module.doSomething()
}
\`\`\`

**Ключевые моменты:**
- **\`.d.ts\` файлы** — описания типов для JavaScript библиотек
- **\`declare module\`** — объявление типов для внешних модулей
- **\`@types/*\`** — пакеты с типами для популярных библиотек
- **ES Modules** — современный стандарт (\`import\`/\`export\`)
- **Type-only imports** — импорт только типов (\`import type\`)

 **Для собеседования:** Declaration files (\`.d.ts\`) — описания типов для JavaScript библиотек. Используют \`declare module\`, \`declare namespace\`, \`declare function\`. \`@types/*\` пакеты содержат типы для популярных библиотек. Модули в TypeScript поддерживают ES Modules, CommonJS, namespaces. \`import type\` импортирует только типы.`,
"shortAnswer": `Declaration files (.d.ts) — описания типов для JavaScript библиотек. Используют declare module, declare namespace, declare function. @types/* пакеты содержат типы для популярных библиотек. Модули в TypeScript поддерживают ES Modules, CommonJS, namespaces. import type импортирует только типы.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `3-middle-общее-1`,
"title": `Как работают utility types: Exclude, Extract, ReturnType, Parameters?`,
"fullAnswer": `## Exclude<T, U>

**Исключает** из union типа \`T\` все типы, которые **присутствуют** в \`U\`.

\`\`\`typescript
type Status = "success" | "error" | "loading" | "idle"

// Исключаем "success" и "loading"
type ErrorStatus = Exclude<Status, "success" | "loading">
// Результат: "error" | "idle"

// Исключаем один тип
type WithoutIdle = Exclude<Status, "idle">
// Результат: "success" | "error" | "loading"
\`\`\`

**Под капотом:**
\`\`\`typescript
// Встроенная реализация
type Exclude<T, U> = T extends U ? never : T
\`\`\`

**Практическое применение:**
\`\`\`typescript
// Исключаем null/undefined из типа
type NonNullable<T> = Exclude<T, null | undefined>

type MaybeString = string | null | undefined
type DefinitelyString = NonNullable<MaybeString>  // string
\`\`\`

---

## Extract<T, U>

**Извлекает** из union типа \`T\` только те типы, которые **присутствуют** в \`U\` (противоположность \`Exclude\`).

\`\`\`typescript
type Event = "click" | "hover" | "scroll" | "resize"
type MouseEvent = "click" | "hover"

// Извлекаем только mouse-события
type Extracted = Extract<Event, MouseEvent>
// Результат: "click" | "hover"

// Извлекаем строки из union
type Mixed = string | number | boolean
type OnlyStrings = Extract<Mixed, string>
// Результат: string
\`\`\`

**Под капотом:**
\`\`\`typescript
type Extract<T, U> = T extends U ? T : never
\`\`\`

**Практическое применение:**
\`\`\`typescript
// Извлекаем только числовые ключи объекта
type NumericKeys<T> = Extract<keyof T, number>

// Извлекаем только функции из union
type Callbacks = Extract<string | (() => void) | number, () => void>
// Результат: () => void
\`\`\`

---

## ReturnType<T>

Извлекает **тип возвращаемого значения** функции.

\`\`\`typescript
function getUser() {
  return { name: "John", age: 30 }
}

type User = ReturnType<typeof getUser>
// Результат: { name: string; age: number }

// С async функцией
type AsyncUser = ReturnType<typeof fetchUser>
// Результат: Promise<User>

// Для извлечения типа из Promise используем Awaited
type User = Awaited<ReturnType<typeof fetchUser>>
// Результат: { name: string; age: number }
\`\`\`

**Практическое применение:**
\`\`\`typescript
// Типизация состояния на основе хука
function useCounter() {
  return {
    count: 0,
    increment: () => {},
    decrement: () => {}
  }
}

type CounterState = ReturnType<typeof useCounter>

// Типизация callback
type OnChangeCallback = ReturnType<typeof createOnChange>
\`\`\`

---

## Parameters<T>

Извлекает **типы параметров** функции в виде кортежа.

\`\`\`typescript
function greet(name: string, age: number, isAdmin: boolean) {
  return \`Hello, \${name}!\`
}

type GreetParams = Parameters<typeof greet>
// Результат: [name: string, age: number, isAdmin: boolean]

// Деструктуризация
type [Name, Age, IsAdmin] = Parameters<typeof greet>
// Name = string, Age = number, IsAdmin = boolean
\`\`\`

**Практическое применение:**
\`\`\`typescript
// Типизация wrapper-функции
function withLogging<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args) => {
    console.log(\`Calling \${fn.name}\`)
    return fn(...args)
  }
}

// Типизация event handler
type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type ClickHandler = Parameters<ButtonProps["onClick"]>[0]
// React.MouseEvent<HTMLButtonElement>
\`\`\`

---

## Другие полезные utility types

**\`InstanceType<T>\`** — тип экземпляра класса:
\`\`\`typescript
class User {
  constructor(public name: string) {}
}

type UserInstance = InstanceType<typeof User>
// User
\`\`\`

**\`ThisParameterType<T>\`** и **\`OmitThisParameter<T>\`**:
\`\`\`typescript
function greet(this: { name: string }, greeting: string) {
  return \`\${greeting}, \${this.name}\`
}

type ThisType = ThisParameterType<typeof greet>
// { name: string }
\`\`\`

**\`ConstructorParameters<T>\`** — параметры конструктора:
\`\`\`typescript
class User {
  constructor(public name: string, public age: number) {}
}

type UserParams = ConstructorParameters<typeof User>
// [name: string, age: number]
\`\`\`

**Ключевые моменты:**
- **\`Exclude<T, U>\`** — удаляет из T типы, присутствующие в U
- **\`Extract<T, U>\`** — оставляет в T только типы из U
- **\`ReturnType<T>\`** — тип возвращаемого значения функции
- **\`Parameters<T>\`** — кортеж типов параметров функции
- Все построены на conditional types (\`T extends U ? X : Y\`)

💡 **Для собеседования:** \`Exclude\` удаляет типы из union, \`Extract\` оставляет только нужные. \`ReturnType\` и \`Parameters\` извлекают информацию о функции через \`typeof\`. Все utility types построены на conditional types и \`infer\`.`,
"shortAnswer": `Exclude удаляет типы из union, Extract оставляет только нужные. ReturnType и Parameters извлекают информацию о функции через typeof. Все utility types построены на conditional types и infer.`,
},
{
"id": `3-middle-общее-2`,
"title": `Что такое conditional types (T extends U ? X : Y) и mapped types?`,
"fullAnswer": `## Conditional Types

**Conditional types** — условные типы, которые выбирают тип на основе условия (аналог тернарного оператора).

**Синтаксис:**
\`\`\`typescript
T extends U ? X : Y
\`\`\`

Если \`T\` совместим с \`U\` — возвращается \`X\`, иначе \`Y\`.

**Базовый пример:**
\`\`\`typescript
type IsString<T> = T extends string ? "yes" : "no"

type A = IsString<string>   // "yes"
type B = IsString<number>   // "no"
type C = IsString<string | number>  // "yes" | "no" (distributive)
\`\`\`

**Distributive conditional types:**
Когда \`T\` — union тип, conditional type применяется к каждому члену отдельно:
\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T

type Result = NonNullable<string | null | undefined>
// (string extends null | undefined ? never : string) |
// (null extends null | undefined ? never : null) |
// (undefined extends null | undefined ? never : undefined)
// = string | never | never = string
\`\`\`

**Отключение распределения** (оборачиваем в кортеж):
\`\`\`typescript
type NonDistributive<T> = [T] extends [null | undefined] ? never : T

type Result = NonDistributive<string | null>
// string | null (не распределяется)
\`\`\`

**Практические примеры:**

**1. Извлечение типа из Promise:**
\`\`\`typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

type A = UnwrapPromise<Promise<string>>  // string
type B = UnwrapPromise<number>           // number
\`\`\`

**2. Извлечение типа элемента массива:**
\`\`\`typescript
type ElementType<T> = T extends (infer U)[] ? U : T

type A = ElementType<string[]>   // string
type B = ElementType<number>     // number
\`\`\`

**3. Проверка на функцию:**
\`\`\`typescript
type IsFunction<T> = T extends (...args: any[]) => any ? true : false

type A = IsFunction<() => void>  // true
type B = IsFunction<string>      // false
\`\`\`

**4. Глубокое Readonly:**
\`\`\`typescript
type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T

interface User {
  name: string
  address: { city: string }
}

type ReadonlyUser = DeepReadonly<User>
// { readonly name: string; readonly address: { readonly city: string } }
\`\`\`

---

## Mapped Types

**Mapped types** — создают новые типы путём преобразования свойств существующего типа (аналог \`map\` для типов).

**Синтаксис:**
\`\`\`typescript
type Mapped<T> = {
  [K in keyof T]: NewType
}
\`\`\`

**Базовый пример:**
\`\`\`typescript
interface User {
  name: string
  age: number
  email: string
}

// Делаем все свойства опциональными
type PartialUser = {
  [K in keyof User]?: User[K]
}
// { name?: string; age?: number; email?: string }
\`\`\`

**Встроенные mapped types:**

**1. Partial<T>** — все свойства опциональны:
\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}
\`\`\`

**2. Required<T>** — все свойства обязательны:
\`\`\`typescript
type Required<T> = {
  [P in keyof T]-?: T[P]
}
// -? удаляет optional модификатор
\`\`\`

**3. Readonly<T>** — все свойства readonly:
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
\`\`\`

**4. Record<K, V>** — объект с ключами K и значениями V:
\`\`\`typescript
type Record<K extends keyof any, V> = {
  [P in K]: V
}

type StatusColors = Record<"success" | "error", string>
// { success: string; error: string }
\`\`\`

**Модификаторы в mapped types:**

**\`+\` и \`-\`** — добавляют или удаляют модификаторы:
\`\`\`typescript
type MakeOptional<T> = {
  [K in keyof T]-?: T[K]  // -? удаляет optional
}

type MakeMutable<T> = {
  -readonly [K in keyof T]: T[K]  // -readonly удаляет readonly
}
\`\`\`

**\`as\` clause (TS 4.1+)** — переименование ключей:
\`\`\`typescript
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}

interface Person {
  name: string
  age: number
}

type PersonGetters = Getters<Person>
// { getName: () => string; getAge: () => number }
\`\`\`

**Фильтрация ключей:**
\`\`\`typescript
type FunctionKeys<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K]
}

interface User {
  name: string
  greet(): void
  age: number
  save(): Promise<void>
}

type UserMethods = FunctionKeys<User>
// { greet: () => void; save: () => Promise<void> }
\`\`\`

**Комбинирование с conditional types:**
\`\`\`typescript
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}

interface Config {
  host: string
  port: number
  debug: boolean
  timeout: number
}

type NumberConfig = PickByType<Config, number>
// { port: number; timeout: number }
\`\`\`

**Ключевые моменты:**
- **Conditional types** — \`T extends U ? X : Y\`, выбирают тип по условию
- **Distributive** — применяются к каждому члену union отдельно
- **infer** — извлекает тип внутри conditional type
- **Mapped types** — \`{ [K in keyof T]: ... }\`, преобразуют свойства
- **Модификаторы** — \`+?\`, \`-?\`, \`+readonly\`, \`-readonly\`
- **\`as\` clause** — переименование и фильтрация ключей

💡 **Для собеседования:** Conditional types (\`T extends U ? X : Y\`) выбирают тип по условию, распределяются по union. Mapped types (\`{ [K in keyof T]: ... }\`) преобразуют свойства типа. Комбинируются для создания сложных utility types (DeepReadonly, PickByType).`,
"shortAnswer": `Conditional types (T extends U ? X : Y) выбирают тип по условию, распределяются по union. Mapped types ({ [K in keyof T]: ... }) преобразуют свойства типа. Комбинируются для создания сложных utility types (DeepReadonly, PickByType).`,
},
{
"id": `3-middle-общее-3`,
"title": `Что такое template literal types?`,
"fullAnswer": `**Template literal types** — типы, основанные на строковых литералах, которые позволяют создавать новые типы путём конкатенации и трансформации строк (аналог template strings в JavaScript).

**Базовый синтаксис:**
\`\`\`typescript
type Greeting = \`Hello, \${string}!\`

let msg: Greeting = "Hello, John!"  // ✅
// let msg2: Greeting = "Hi"        // ❌ Ошибка
\`\`\`

**Комбинирование union типов:**
\`\`\`typescript
type Color = "red" | "green" | "blue"
type Size = "small" | "large"

// Создаёт все возможные комбинации
type ClassName = \`\${Color}-\${Size}\`
// "red-small" | "red-large" | "green-small" | "green-large" | "blue-small" | "blue-large"
\`\`\`

**Практическое применение:**

**1. Типизация CSS-классов:**
\`\`\`typescript
type Direction = "top" | "right" | "bottom" | "left"
type Spacing = "sm" | "md" | "lg"

type MarginClass = \`m-\${Direction}-\${Spacing}\`
// "m-top-sm" | "m-top-md" | ... | "m-left-lg"

function applyMargin(className: MarginClass) {
  // className гарантированно валидный
}
\`\`\`

**2. Типизация event names:**
\`\`\`typescript
type EventName = "click" | "hover" | "focus"
type EventHandler<T extends EventName> = \`on\${Capitalize<T>}\`

type ClickHandler = EventHandler<"click">  // "onClick"
type HoverHandler = EventHandler<"hover">  // "onHover"
\`\`\`

**3. Типизация путей API:**
\`\`\`typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"
type Resource = "users" | "posts" | "comments"

type ApiEndpoint = \`/\${Resource}\`
type ApiMethod = \`\${HttpMethod} \${ApiEndpoint}\`

const endpoint: ApiMethod = "GET /users"  // ✅
// const bad: ApiMethod = "PATCH /users"  // ❌
\`\`\`

---

## Встроенные строковые utility types

**\`Capitalize<S>\`** — первая буква заглавная:
\`\`\`typescript
type A = Capitalize<"hello">  // "Hello"
\`\`\`

**\`Uncapitalize<S>\`** — первая буква строчная:
\`\`\`typescript
type A = Uncapitalize<"Hello">  // "hello"
\`\`\`

**\`Uppercase<S>\`** — все буквы заглавные:
\`\`\`typescript
type A = Uppercase<"hello">  // "HELLO"
\`\`\`

**\`Lowercase<S>\`** — все буквы строчные:
\`\`\`typescript
type A = Lowercase<"HELLO">  // "hello"
\`\`\`

**Применение в mapped types:**
\`\`\`typescript
interface User {
  name: string
  age: number
}

// Создаём getters с capitalize
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}

type UserGetters = Getters<User>
// { getName: () => string; getAge: () => number }

// Создаём setters
type Setters<T> = {
  [K in keyof T as \`set\${Capitalize<string & K>}\`]: (value: T[K]) => void
}

type UserSetters = Setters<User>
// { setName: (value: string) => void; setAge: (value: number) => void }
\`\`\`

---

## Инференс в template literal types

Можно извлекать части строки через \`infer\`:

\`\`\`typescript
type ParseEvent<T> = T extends \`on\${infer Event}\` ? Event : never

type A = ParseEvent<"onClick">    // "Click"
type B = ParseEvent<"onHover">    // "Hover"
type C = ParseEvent<"click">      // never
\`\`\`

**Извлечение типа из строки:**
\`\`\`typescript
type ParseId<T> = T extends \`user-\${infer Id}\` ? Id : never

type A = ParseId<"user-123">   // "123"
type B = ParseId<"post-456">   // never
\`\`\`

**Несколько infer:**
\`\`\`typescript
type ParseRoute<T> = T extends \`/api/\${infer Resource}/\${infer Id}\`
  ? { resource: Resource; id: Id }
  : never

type A = ParseRoute<"/api/users/123">
// { resource: "users"; id: "123" }
\`\`\`

---

## Рекурсивные template literal types

\`\`\`typescript
type Split<S extends string, D extends string> =
  S extends \`\${infer Head}\${D}\${infer Tail}\`
    ? [Head, ...Split<Tail, D>]
    : [S]

type A = Split<"a,b,c", ",">
// ["a", "b", "c"]
\`\`\`

**Join типов:**
\`\`\`typescript
type Join<T extends any[], D extends string = "."> =
  T extends [infer Head, ...infer Tail]
    ? Tail extends []
      ? \`\${Head & string}\`
      : \`\${Head & string}\${D}\${Join<Tail, D>}\`
    : ""

type A = Join<["a", "b", "c"]>
// "a.b.c"
\`\`\`

**Ключевые моменты:**
- Template literal types — строковые типы с интерполяцией
- Комбинируются с union для генерации всех комбинаций
- Встроенные utility: \`Capitalize\`, \`Uncapitalize\`, \`Uppercase\`, \`Lowercase\`
- Поддерживают \`infer\` для извлечения частей строки
- Можно использовать рекурсию для сложных трансформаций

💡 **Для собеседования:** Template literal types — строковые типы с интерполяцией (\`\` \`\${Color}-\${Size}\` \`\`). Генерируют union всех комбинаций. Встроенные utility (\`Capitalize\`, \`Uppercase\`) трансформируют строки. Поддерживают \`infer\` для парсинга строк и рекурсию для сложных трансформаций.`,
"shortAnswer": `Template literal types — строковые типы с интерполяцией (\` \${Color}-\${Size} ). Генерируют union всех комбинаций. Встроенные utility (Capitalize, Uppercase) трансформируют строки. Поддерживают infer\` для парсинга строк и рекурсию для сложных трансформаций.`,
},
{
"id": `3-middle-общее-4`,
"title": `Как работать с keyof, typeof и infer keyword?`,
"fullAnswer": `## keyof

**\`keyof\`** — оператор, который возвращает union всех ключей типа.

**Базовое использование:**
\`\`\`typescript
interface User {
  name: string
  age: number
  email: string
}

type UserKeys = keyof User
// "name" | "age" | "email"
\`\`\`

**С массивами:**
\`\`\`typescript
type ArrayKeys = keyof any[]
// number | "length" | "push" | "pop" | ... (все свойства массива)

// Только числовые индексы
type NumericKeys = keyof any[] & number
// number
\`\`\`

**С объектами:**
\`\`\`typescript
const config = {
  host: "localhost",
  port: 3000,
  debug: true
} as const

type ConfigKeys = keyof typeof config
// "host" | "port" | "debug"
\`\`\`

**Практическое применение:**

**1. Типобезопасный доступ к свойствам:**
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: "John", age: 30 }
const name = getProperty(user, "name")   // string ✅
// getProperty(user, "email")            // ❌ Ошибка
\`\`\`

**2. Типобезопасное обновление объекта:**
\`\`\`typescript
function updateField<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return { ...obj, [key]: value }
}

const user = { name: "John", age: 30 }
updateField(user, "name", "Jane")    // ✅
// updateField(user, "name", 42)     // ❌ Ошибка типа
\`\`\`

**3. Omit и Pick через keyof:**
\`\`\`typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
\`\`\`

---

## typeof

**\`typeof\`** в контексте типов — получает тип значения (переменной, функции, объекта).

**С переменными:**
\`\`\`typescript
const config = {
  host: "localhost",
  port: 3000
}

type Config = typeof config
// { host: string; port: number }
\`\`\`

**С функциями:**
\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}\`
}

type GreetFn = typeof greet
// (name: string) => string
\`\`\`

**С классами:**
\`\`\`typescript
class User {
  constructor(public name: string) {}
  greet() { return \`Hi, \${this.name}\` }
}

type UserClass = typeof User
// typeof User (конструктор)

type UserInstance = InstanceType<typeof User>
// User (экземпляр)
\`\`\`

**Практическое применение:**

**1. Типизация констант:**
\`\`\`typescript
const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading"
} as const

type Status = typeof STATUS[keyof typeof STATUS]
// "success" | "error" | "loading"
\`\`\`

**2. Типизация импортов:**
\`\`\`typescript
import axios from "axios"

type AxiosInstance = typeof axios
\`\`\`

**3. Типизация enum:**
\`\`\`typescript
enum Direction {
  Up = "UP",
  Down = "DOWN"
}

type DirectionType = typeof Direction
// { Up: "UP"; Down: "DOWN" }

type DirectionValue = typeof Direction[keyof typeof Direction]
// "UP" | "DOWN"
\`\`\`

---

## infer

**\`infer\`** — ключевое слово для **вывода типа** внутри conditional types. Позволяет "извлечь" тип из сложной структуры.

**Базовый синтаксис:**
\`\`\`typescript
type UnpackPromise<T> = T extends Promise<infer U> ? U : T

type A = UnpackPromise<Promise<string>>  // string
type B = UnpackPromise<number>           // number
\`\`\`

**Практические примеры:**

**1. Извлечение типа элемента массива:**
\`\`\`typescript
type ElementType<T> = T extends (infer U)[] ? U : T

type A = ElementType<string[]>   // string
type B = ElementType<number[]>   // number
\`\`\`

**2. Извлечение типа параметра функции:**
\`\`\`typescript
type FirstParam<T> = T extends (arg: infer P, ...args: any[]) => any ? P : never

type A = FirstParam<(name: string, age: number) => void>
// string
\`\`\`

**3. Извлечение типа возвращаемого значения:**
\`\`\`typescript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type A = MyReturnType<() => string>  // string
\`\`\`

**4. Извлечение типа из Promise:**
\`\`\`typescript
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T

type A = Awaited<Promise<Promise<string>>>  // string
\`\`\`

**5. Извлечение типа из Readonly:**
\`\`\`typescript
type Unreadonly<T> = T extends Readonly<infer U> ? U : T
\`\`\`

**6. Multiple infer:**
\`\`\`typescript
type FunctionParams<T> = T extends (...args: infer P) => infer R
  ? { params: P; return: R }
  : never

type A = FunctionParams<(name: string, age: number) => boolean>
// { params: [name: string, age: number]; return: boolean }
\`\`\`

**7. Рекурсивный infer для кортежей:**
\`\`\`typescript
type Last<T extends any[]> = T extends [...infer Init, infer Last]
  ? Last
  : never

type A = Last<[1, 2, 3]>  // 3
\`\`\`

**Ограничения \`infer\`:**
- Работает только внутри conditional types
- Нельзя использовать вне \`extends\`
- TypeScript выводит наиболее общий тип

\`\`\`typescript
//  Ошибка: infer используется вне conditional type
type Bad<T> = infer T

// ✅ Правильно
type Good<T> = T extends infer U ? U : never
\`\`\`

**Ключевые моменты:**
- **\`keyof\`** — union ключей типа. Используется для типобезопасного доступа к свойствам.
- **\`typeof\`** — тип значения (переменной, функции, объекта).
- **\`infer\`** — вывод типа внутри conditional types. Позволяет извлекать типы из сложных структур.

💡 **Для собеседования:** \`keyof\` возвращает union ключей типа, \`typeof\` получает тип значения, \`infer\` выводит тип внутри conditional types. Комбинируются для создания мощных utility types (UnpackPromise, ElementType, FirstParam).`,
"shortAnswer": `keyof возвращает union ключей типа, typeof получает тип значения, infer выводит тип внутри conditional types. Комбинируются для создания мощных utility types (UnpackPromise, ElementType, FirstParam).`,
},
{
"id": `3-middle-общее-5`,
"title": `Как создавать кастомные utility types?`,
"fullAnswer": `Кастомные utility types создаются путём комбинирования встроенных механизмов TypeScript: conditional types, mapped types, \`keyof\`, \`infer\` и template literal types.

## Базовые паттерны

**1. Трансформация свойств:**
\`\`\`typescript
// Делаем все свойства nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null
}

interface User {
  name: string
  age: number
}

type NullableUser = Nullable<User>
// { name: string | null; age: number | null }
\`\`\`

**2. Фильтрация по типу:**
\`\`\`typescript
// Оставляем только строковые свойства
type StringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K]
}

interface Config {
  host: string
  port: number
  debug: boolean
  path: string
}

type StringConfig = StringKeys<Config>
// { host: string; path: string }
\`\`\`

**3. Трансформация ключей:**
\`\`\`typescript
// Превращаем ключи в snake_case
type SnakeCase<S extends string> =
  S extends \`\${infer Head}\${infer Tail}\`
    ? Tail extends Uncapitalize<Tail>
      ? \`\${Lowercase<Head>}\${SnakeCase<Tail>}\`
      : \`\${Lowercase<Head>}_\${SnakeCase<Tail>}\`
    : S

type A = SnakeCase<"userName">    // "user_name"
type B = SnakeCase<"firstName">   // "first_name"
\`\`\`

---

## Продвинутые примеры

**1. DeepPartial — глубокое Partial:**
\`\`\`typescript
type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T

interface Address {
  city: string
  zip: string
}

interface User {
  name: string
  address: Address
}

type PartialUser = DeepPartial<User>
// {
//   name?: string;
//   address?: {
//     city?: string;
//     zip?: string;
//   };
// }
\`\`\`

**2. DeepReadonly — глубокий readonly:**
\`\`\`typescript
type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T
\`\`\`

**3. Mutable — убирает readonly:**
\`\`\`typescript
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

interface Config {
  readonly host: string
  readonly port: number
}

type MutableConfig = Mutable<Config>
// { host: string; port: number }
\`\`\`

**4. OptionalKeys и RequiredKeys:**
\`\`\`typescript
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

interface User {
  name: string
  age?: number
  email: string
}

type OptKeys = OptionalKeys<User>    // "age"
type ReqKeys = RequiredKeys<User>    // "name" | "email"
\`\`\`

**5. Merge типов:**
\`\`\`typescript
type Merge<A, B> = Omit<A, keyof B> & B

interface Base {
  id: number
  name: string
  createdAt: Date
}

interface Update {
  name: string
  updatedAt: Date
}

type Merged = Merge<Base, Update>
// { id: number; name: string; createdAt: Date; updatedAt: Date }
\`\`\`

**6. UnionToIntersection:**
\`\`\`typescript
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
  (k: infer I) => void ? I : never

type A = UnionToIntersection<{ a: string } | { b: number }>
// { a: string } & { b: number }
\`\`\`

**7. TupleToUnion:**
\`\`\`typescript
type TupleToUnion<T extends any[]> = T[number]

type A = TupleToUnion<["a", "b", "c"]>
// "a" | "b" | "c"
\`\`\`

**8. UnionToTuple (сложный):**
\`\`\`typescript
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
  (k: infer I) => void ? I : never

type LastOf<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R ? R : never

type Push<T extends any[], V> = [...T, V]

type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

type A = TuplifyUnion<"a" | "b" | "c">
// ["a", "b", "c"] (порядок может отличаться)
\`\`\`

**9. ValueOf:**
\`\`\`typescript
type ValueOf<T> = T[keyof T]

const STATUS = {
  SUCCESS: "success",
  ERROR: "error"
} as const

type StatusValue = ValueOf<typeof STATUS>
// "success" | "error"
\`\`\`

**10. DeepOmit:**
\`\`\`typescript
type DeepOmit<T, K extends keyof any> = T extends object
  ? { [P in keyof T as P extends K ? never : P]: DeepOmit<T[P], K> }
  : T

interface User {
  id: number
  name: string
  address: {
    id: number
    city: string
  }
}

type UserWithoutId = DeepOmit<User, "id">
// { name: string; address: { city: string } }
\`\`\`

**11. Conditional ключи:**
\`\`\`typescript
type Methods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}

interface User {
  name: string
  greet(): void
  save(): Promise<void>
}

type UserMethods = Methods<User>
// { greet: () => void; save: () => Promise<void> }
\`\`\`

**12. Async utility:**
\`\`\`typescript
type Asyncify<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T[K]
}

interface SyncService {
  getUser(id: number): { name: string }
  getUsers(): { name: string }[]
}

type AsyncService = Asyncify<SyncService>
// {
//   getUser: (id: number) => Promise<{ name: string }>;
//   getUsers: () => Promise<{ name: string }[]>;
// }
\`\`\`

**Правила создания utility types:**
1. Начинайте с простых трансформаций (Partial, Required)
2. Используйте mapped types для работы со свойствами
3. Conditional types для условий
4. \`infer\` для извлечения типов
5. Рекурсия для глубоких трансформаций
6. Тестируйте на сложных случаях (union, optional, readonly)

💡 **Для собеседования:** Кастомные utility types создаются через комбинацию mapped types, conditional types, \`keyof\`, \`infer\`. Популярные примеры: DeepPartial, Mutable, Merge, UnionToIntersection. Ключевые паттерны: фильтрация ключей через \`as\`, рекурсия для глубоких трансформаций, \`infer\` для извлечения типов.`,
"shortAnswer": `Кастомные utility types создаются через комбинацию mapped types, conditional types, keyof, infer. Популярные примеры: DeepPartial, Mutable, Merge, UnionToIntersection. Ключевые паттерны: фильтрация ключей через as, рекурсия для глубоких трансформаций, infer для извлечения типов.`,
},
{
"id": `3-middle-общее-6`,
"title": `Что такое declaration merging?`,
"fullAnswer": `**Declaration merging** (объединение объявлений) — это механизм TypeScript, при котором несколько объявлений с одинаковым именем объединяются в одно.

## Что можно объединять

**1. Interfaces:**
\`\`\`typescript
interface User {
  name: string
}

interface User {
  age: number
}

// Результат: объединённый интерфейс
const user: User = {
  name: "John",
  age: 30  // ✅ оба свойства доступны
}
\`\`\`

**2. Namespaces:**
\`\`\`typescript
namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString()
  }
}

namespace Utils {
  export function parseDate(str: string): Date {
    return new Date(str)
  }
}

// Оба метода доступны
Utils.formatDate(new Date())
Utils.parseDate("2024-01-01")
\`\`\`

**3. Enums:**
\`\`\`typescript
enum Color {
  Red = "RED",
  Green = "GREEN"
}

enum Color {
  Blue = "BLUE"
}

// Результат: { Red, Green, Blue }
const color: Color = Color.Blue
\`\`\`

**4. Functions (overloads):**
\`\`\`typescript
function process(input: string): string
function process(input: number): number
function process(input: string | number): string | number {
  return input
}

process("hello")  // string
process(42)       // number
\`\`\`

**5. Classes и interfaces:**
\`\`\`typescript
interface Loggable {
  log(): void
}

class User implements Loggable {
  name: string
  
  constructor(name: string) {
    this.name = name
  }
  
  log() {
    console.log(this.name)
  }
}
\`\`\`

**6. Classes и namespaces:**
\`\`\`typescript
class User {
  static defaultName = "Anonymous"
}

namespace User {
  export function create(name: string): User {
    return new User(name)
  }
}

const user = User.create("John")
console.log(User.defaultName)
\`\`\`

---

## Что НЕ объединяется

**Types (type aliases):**
\`\`\`typescript
type User = { name: string }
type User = { age: number }  // ❌ Ошибка: Duplicate identifier
\`\`\`

**Variables:**
\`\`\`typescript
const x = 5
const x = 10  // ❌ Ошибка
\`\`\`

---

## Практическое применение

**1. Расширение глобальных типов:**
\`\`\`typescript
// global.d.ts
interface Window {
  myCustomProperty: string
  myCustomMethod(): void
}

// В коде
window.myCustomProperty = "hello"
window.myCustomMethod()
\`\`\`

**2. Расширение Node.js глобалов:**
\`\`\`typescript
declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string
    DEBUG: "true" | "false"
  }
}

// process.env.API_URL — типизирован
\`\`\`

**3. Расширение Express:**
\`\`\`typescript
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number
        role: "admin" | "user"
      }
    }
  }
}

// В middleware
app.use((req, res, next) => {
  req.user = { id: 1, role: "admin" }  // ✅ типизировано
  next()
})
\`\`\`

**4. Расширение Vue:**
\`\`\`typescript
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}

// В компоненте
this.$translate("hello")  // ✅ типизировано
\`\`\`

**5. Расширение библиотек:**
\`\`\`typescript
declare module "lodash" {
  export function myCustomFunction(input: string): string
}

import { myCustomFunction } from "lodash"
\`\`\`

**6. Module augmentation:**
\`\`\`typescript
// types/express-user.d.ts
declare module "express-serve-static-core" {
  interface Request {
    user?: User
  }
}
\`\`\`

---

## Правила declaration merging

**1. Interfaces:**
- Свойства с одинаковым именем должны иметь совместимые типы
- Методы с одинаковой сигнатурой создают overloads

\`\`\`typescript
interface Processor {
  process(input: string): string
}

interface Processor {
  process(input: number): number
}

// process имеет две сигнатуры (overload)
\`\`\`

**2. Namespaces:**
- Экспортируемые члены объединяются
- Неэкспортируемые — остаются приватными

**3. Enums:**
- Члены объединяются
- Числовые и строковые enum нельзя смешивать

**4. Приоритет:**
- Interface merging происходит автоматически
- Для module augmentation нужен \`declare module\`

---

## Declaration merging vs type intersection

\`\`\`typescript
// Declaration merging
interface A { x: number }
interface A { y: string }
// A = { x: number; y: string }

// Type intersection
type B = { x: number } & { y: string }
// B = { x: number; y: string }

// Разница:
// - Interfaces поддерживают merging, types — нет
// - Types поддерживают union, interfaces — нет
// - Interfaces можно расширять через extends
\`\`\`

**Ключевые моменты:**
- Declaration merging объединяет interfaces, namespaces, enums, functions
- Types (type aliases) не поддерживают merging
- Используется для расширения глобальных типов и библиотек
- Module augmentation через \`declare module\`

💡 **Для собеседования:** Declaration merging — объединение нескольких объявлений с одинаковым именем. Работает для interfaces, namespaces, enums, functions. Не работает для type aliases. Используется для расширения глобальных типов (Window, NodeJS.ProcessEnv) и библиотек (Express, Vue).`,
"shortAnswer": `Declaration merging — объединение нескольких объявлений с одинаковым именем. Работает для interfaces, namespaces, enums, functions. Не работает для type aliases. Используется для расширения глобальных типов (Window, NodeJS.ProcessEnv) и библиотек (Express, Vue).`,
},
{
"id": `3-middle-общее-7`,
"title": `Как типизировать события DOM и this в функциях?`,
"fullAnswer": `## Типизация DOM-событий

**Базовые типы событий:**
\`\`\`typescript
// MouseEvent
function handleClick(event: MouseEvent) {
  console.log(event.clientX, event.clientY)
}

// KeyboardEvent
function handleKeydown(event: KeyboardEvent) {
  console.log(event.key, event.code)
}

// FocusEvent
function handleFocus(event: FocusEvent) {
  console.log(event.relatedTarget)
}

// InputEvent
function handleInput(event: InputEvent) {
  console.log(event.data)
}

// FormEvent (SubmitEvent)
function handleSubmit(event: SubmitEvent) {
  event.preventDefault()
}

// DragEvent
function handleDrag(event: DragEvent) {
  console.log(event.dataTransfer)
}
\`\`\`

**Generic типы событий (с конкретным элементом):**
\`\`\`typescript
// MouseEvent для конкретного элемента
function handleClick(event: MouseEvent<HTMLButtonElement>) {
  console.log(event.currentTarget.value)  // ✅ типизировано
}

// InputEvent для input
function handleInput(event: InputEvent<HTMLInputElement>) {
  console.log(event.target.value)  // ✅
}

// ChangeEvent для select
function handleChange(event: Event<HTMLSelectElement>) {
  const target = event.target as HTMLSelectElement
  console.log(target.value)
}
\`\`\`

**Типы для популярных элементов:**
\`\`\`typescript
// HTMLInputElement
const input: HTMLInputElement = document.querySelector("input")!
input.value = "test"

// HTMLTextAreaElement
const textarea: HTMLTextAreaElement = document.querySelector("textarea")!

// HTMLSelectElement
const select: HTMLSelectElement = document.querySelector("select")!

// HTMLFormElement
const form: HTMLFormElement = document.querySelector("form")!
form.submit()

// HTMLAnchorElement
const link: HTMLAnchorElement = document.querySelector("a")!
link.href = "/new-url"

// HTMLImageElement
const img: HTMLImageElement = document.querySelector("img")!
img.src = "/image.jpg"

// HTMLCanvasElement
const canvas: HTMLCanvasElement = document.querySelector("canvas")!
const ctx = canvas.getContext("2d")
\`\`\`

**Custom events:**
\`\`\`typescript
// Создание кастомного события
const event = new CustomEvent<{ userId: number }>("userLogin", {
  detail: { userId: 123 }
})

document.addEventListener("userLogin", (event: CustomEvent<{ userId: number }>) => {
  console.log(event.detail.userId)  // 123
})
\`\`\`

**Типизация addEventListener:**
\`\`\`typescript
// TypeScript автоматически выводит тип события
const button = document.querySelector("button")!

button.addEventListener("click", (event) => {
  // event: MouseEvent ✅
  console.log(event.clientX)
})

button.addEventListener("keydown", (event) => {
  // event: KeyboardEvent ✅
  console.log(event.key)
})

// Для кастомных событий нужна явная типизация
button.addEventListener("myCustomEvent", ((event: CustomEvent<string>) => {
  console.log(event.detail)
}) as EventListener)
\`\`\`

---

## Типизация this в функциях

**Проблема:**
\`\`\`typescript
const button = {
  name: "Click",
  onClick: function() {
    console.log(this.name)  // ❌ 'this' implicitly has type 'any'
  }
}
\`\`\`

**Решение 1: Явный параметр this:**
\`\`\`typescript
const button = {
  name: "Click",
  onClick: function(this: { name: string }) {
    console.log(this.name)  // ✅
  }
}
\`\`\`

**Решение 2: Interface с методом:**
\`\`\`typescript
interface Button {
  name: string
  onClick(): void
}

const button: Button = {
  name: "Click",
  onClick() {
    console.log(this.name)  // ✅
  }
}
\`\`\`

**Решение 3: Arrow function (this из внешнего контекста):**
\`\`\`typescript
const button = {
  name: "Click",
  onClick: () => {
    // this берётся из внешнего контекста
    console.log(button.name)  // ✅
  }
}
\`\`\`

**В классах:**
\`\`\`typescript
class Counter {
  count: number = 0
  
  // this типизирован автоматически
  increment(): void {
    this.count++  // ✅
  }
  
  // Arrow function сохраняет this
  handleClick = (): void => {
    this.count++  // ✅ this = экземпляр класса
  }
}
\`\`\`

**В callback-ах:**
\`\`\`typescript
class Timer {
  seconds: number = 0
  
  start() {
    //  this теряется в callback
    setInterval(function() {
      this.seconds++  // Ошибка: this = undefined
    }, 1000)
    
    // ✅ Arrow function сохраняет this
    setInterval(() => {
      this.seconds++  // ✅
    }, 1000)
    
    // ✅ bind
    setInterval(function() {
      this.seconds++
    }.bind(this), 1000)
  }
}
\`\`\`

**Типизация this в standalone функциях:**
\`\`\`typescript
function greet(this: { name: string }, greeting: string): string {
  return \`\${greeting}, \${this.name}!\`
}

const user = { name: "John", greet }
user.greet("Hello")  // "Hello, John!"

//  Нельзя вызвать без контекста
// greet("Hello")  // Ошибка: The 'this' context of type 'void' is not assignable
\`\`\`

**\`ThisType<T>\` utility:**
\`\`\`typescript
interface Methods {
  greet(): string
  farewell(): string
}

const obj: Methods & ThisType<{ name: string }> = {
  greet() {
    return \`Hello, \${this.name}\`  // this: { name: string }
  },
  farewell() {
    return \`Goodbye, \${this.name}\`
  }
}
\`\`\`

**Ключевые моменты:**
- DOM-события: \`MouseEvent\`, \`KeyboardEvent\`, \`InputEvent\` и т.д.
- Generic события: \`MouseEvent<HTMLButtonElement>\`
- \`this\` в функциях: явный параметр \`this: Type\`
- Arrow functions сохраняют \`this\` из внешнего контекста
- В классах \`this\` типизируется автоматически

💡 **Для собеседования:** DOM-события типизируются через встроенные типы (\`MouseEvent\`, \`KeyboardEvent\`). Generic версии (\`MouseEvent<HTMLButtonElement>\`) дают доступ к \`currentTarget\`. \`this\` в функциях типизируется через явный параметр \`this: Type\` или arrow functions.`,
"shortAnswer": `DOM-события типизируются через встроенные типы (MouseEvent, KeyboardEvent). Generic версии (MouseEvent<HTMLButtonElement>) дают доступ к currentTarget. this в функциях типизируется через явный параметр this: Type или arrow functions.`,
},
{
"id": `3-middle-общее-8`,
"title": `Что такое satisfies оператор и const assertions (as const)?`,
"fullAnswer": `## satisfies оператор (TS 4.9+)

**\`satisfies\`** — оператор для проверки, что значение соответствует типу, **без изменения самого типа**.

**Проблема без satisfies:**
\`\`\`typescript
// Проблема 1: теряем конкретные типы
const config: Record<string, string | number> = {
  host: "localhost",
  port: 3000,
  debug: true  // ❌ Ошибка: boolean не в Record<string, string | number>
}

// Проблема 2: слишком широкий тип
const colors = {
  primary: "#007bff",
  secondary: "#6c757d"
}
// Тип: { primary: string; secondary: string }
// Хотим: { primary: "#007bff"; secondary: "#6c757d" }
\`\`\`

**Решение с satisfies:**
\`\`\`typescript
const config = {
  host: "localhost",
  port: 3000,
  debug: true
} satisfies Record<string, string | number | boolean>

// Тип сохранён: { host: string; port: number; debug: boolean }
config.host      // string ✅
config.port      // number ✅
// config.unknown  // ❌ Ошибка
\`\`\`

**Практические примеры:**

**1. Валидация без потери типа:**
\`\`\`typescript
interface Theme {
  primary: string
  secondary: string
  accent: string
}

const theme = {
  primary: "#007bff",
  secondary: "#6c757d",
  accent: "#ffc107"
} satisfies Theme

// Тип: { primary: "#007bff"; secondary: "#6c757d"; accent: "#ffc107" }
// ✅ Проверка структуры + сохранение литеральных типов
\`\`\`

**2. Union типы:**
\`\`\`typescript
type Status = {
  type: "success"
  data: string
} | {
  type: "error"
  message: string
}

const result = {
  type: "success",
  data: "Hello"
} satisfies Status

// result.type: "success" (не Status["type"])
\`\`\`

**3. Массивы с разными типами:**
\`\`\`typescript
const routes = [
  { path: "/", component: "Home" },
  { path: "/about", component: "About" }
] satisfies Array<{ path: string; component: string }>

// routes[0].path: string (не literal)
\`\`\`

**4. Функции:**
\`\`\`typescript
type Handler = (input: string) => string | number

const handler = ((input: string) => {
  return input.length
}) satisfies Handler

// handler: (input: string) => number (уточнённый тип)
\`\`\`

**satisfies vs аннотация типа:**
\`\`\`typescript
// Аннотация типа — расширяет тип
const a: { x: number | string } = { x: 5 }
// a.x: number | string

// satisfies — сохраняет тип
const b = { x: 5 } satisfies { x: number | string }
// b.x: number
\`\`\`

---

## const assertions (as const)

**\`as const\`** — утверждает, что значение и все его свойства **readonly** и имеют **литеральные типы**.

**Базовое использование:**
\`\`\`typescript
const config = {
  host: "localhost",
  port: 3000,
  debug: true
} as const

// Тип:
// {
//   readonly host: "localhost";
//   readonly port: 3000;
//   readonly debug: true;
// }

// config.host = "other"  // ❌ Ошибка: readonly
\`\`\`

**С массивами:**
\`\`\`typescript
const colors = ["red", "green", "blue"] as const

// Тип: readonly ["red", "green", "blue"]
// colors.push("yellow")  // ❌ Ошибка

type Color = typeof colors[number]
// "red" | "green" | "blue"
\`\`\`

**С объектами:**
\`\`\`typescript
const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading"
} as const

type Status = typeof STATUS[keyof typeof STATUS]
// "success" | "error" | "loading"
\`\`\`

**Практические примеры:**

**1. Константы с типизацией:**
\`\`\`typescript
const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
} as const

type HttpMethod = typeof HTTP_METHODS[keyof typeof HTTP_METHODS]
// "GET" | "POST" | "PUT" | "DELETE"
\`\`\`

**2. Конфигурация роутов:**
\`\`\`typescript
const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" }
] as const

type Route = typeof routes[number]
// { readonly path: "/"; readonly name: "Home" } | { readonly path: "/about"; readonly name: "About" }
\`\`\`

**3. Enum-подобные константы:**
\`\`\`typescript
const ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest"
} as const

type Role = typeof ROLES[keyof typeof ROLES]
\`\`\`

---

## satisfies vs as const

\`\`\`typescript
// as const — делает всё readonly и literal
const a = { x: 5 } as const
// { readonly x: 5 }

// satisfies — проверяет тип, сохраняет исходный
const b = { x: 5 } satisfies { x: number }
// { x: 5 } (x: number, не readonly)

// Комбинирование
const c = { x: 5 } as const satisfies { x: number }
// { readonly x: 5 }
\`\`\`

**Когда что использовать:**
- **\`as const\`** — для констант, enum-подобных объектов, литеральных типов
- **\`satisfies\`** — для валидации структуры без потери типа
- **Оба вместе** — для констант с проверкой типа

**Ключевые моменты:**
- **\`satisfies\`** (TS 4.9+) — проверяет соответствие типу, сохраняя конкретный тип значения
- **\`as const\`** — делает значение и все свойства readonly с литеральными типами
- \`satisfies\` решает проблему "слишком широкого типа" при аннотации
- \`as const\` полезен для enum-подобных констант

💡 **Для собеседования:** \`satisfies\` (TS 4.9+) проверяет соответствие типу без изменения типа значения. \`as const\` делает значение readonly с литеральными типами. \`satisfies\` решает проблему потери конкретных типов при аннотации. Часто комбинируются: \`as const satisfies Type\`.`,
"shortAnswer": `satisfies (TS 4.9+) проверяет соответствие типу без изменения типа значения. as const делает значение readonly с литеральными типами. satisfies решает проблему потери конкретных типов при аннотации. Часто комбинируются: as const satisfies Type.`,
},
{
"id": `3-middle-общее-9`,
"title": `Как типизировать async функции, Promise и overloads (перегрузку функций)?`,
"fullAnswer": `## Async функции и Promise

**Базовая типизация:**
\`\`\`typescript
// Async функция всегда возвращает Promise
async function fetchData(): Promise<User> {
  const response = await fetch("/api/user")
  return response.json()
}

// Тип возвращаемого значения: Promise<User>
\`\`\`

**Обработка ошибок:**
\`\`\`typescript
async function safeFetch<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

// Использование
const user = await safeFetch<User>("/api/user")
if (user) {
  console.log(user.name)  // ✅ TypeScript знает, что user не null
}
\`\`\`

**Типизация Promise.all:**
\`\`\`typescript
async function loadAll() {
  const [users, posts] = await Promise.all([
    fetchUsers(),    // Promise<User[]>
    fetchPosts()     // Promise<Post[]>
  ])
  // users: User[], posts: Post[]
}
\`\`\`

**Типизация Promise.race:**
\`\`\`typescript
async function fetchWithTimeout<T>(
  promise: Promise<T>,
  timeout: number
): Promise<T> {
  const timeoutPromise = new Promise<T>((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), timeout)
  })
  
  return Promise.race([promise, timeoutPromise])
}
\`\`\`

**Async iterators:**
\`\`\`typescript
async function* generateNumbers(max: number): AsyncGenerator<number> {
  for (let i = 0; i < max; i++) {
    yield i
    await new Promise(resolve => setTimeout(resolve, 100))
  }
}

for await (const num of generateNumbers(5)) {
  console.log(num)
}
\`\`\`

**Типизация fetch:**
\`\`\`typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

async function apiFetch<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`)
  }
  return response.json()
}

// Использование
const response = await apiFetch<User[]>("/api/users")
// response: ApiResponse<User[]>
\`\`\`

---

## Function Overloads (перегрузка функций)

**Overloads** позволяют функции иметь несколько сигнатур.

**Базовый пример:**
\`\`\`typescript
// Перегрузки (сигнатуры)
function process(input: string): string
function process(input: number): number
function process(input: boolean): boolean

// Реализация
function process(input: string | number | boolean): string | number | boolean {
  if (typeof input === "string") {
    return input.toUpperCase()
  }
  if (typeof input === "number") {
    return input * 2
  }
  return !input
}

// Использование
const a = process("hello")  // string ✅
const b = process(42)       // number ✅
const c = process(true)     // boolean ✅
// process([])              // ❌ Ошибка
\`\`\`

**Практические примеры:**

**1. Разные типы аргументов:**
\`\`\`typescript
function createElement(tag: "div"): HTMLDivElement
function createElement(tag: "span"): HTMLSpanElement
function createElement(tag: "input"): HTMLInputElement
function createElement(tag: string): HTMLElement

function createElement(tag: string): HTMLElement {
  return document.createElement(tag)
}

const div = createElement("div")    // HTMLDivElement
const span = createElement("span")  // HTMLSpanElement
const input = createElement("input") // HTMLInputElement
\`\`\`

**2. Опциональные параметры:**
\`\`\`typescript
function formatDate(date: Date): string
function formatDate(date: Date, format: string): string
function formatDate(date: Date, locale: string): string
function formatDate(date: Date, formatOrLocale?: string): string {
  if (formatOrLocale) {
    return date.toLocaleDateString(formatOrLocale)
  }
  return date.toISOString()
}
\`\`\`

**3. Generic overloads:**
\`\`\`typescript
function identity<T>(value: T): T
function identity<T, U>(value: T, defaultValue: U): T | U
function identity(value: any, defaultValue?: any): any {
  return value ?? defaultValue
}

const a = identity(42)              // number
const b = identity(null, "default") // string
\`\`\`

**4. Method overloads в классах:**
\`\`\`typescript
class Calculator {
  add(a: number, b: number): number
  add(a: string, b: string): string
  add(a: any, b: any): any {
    return a + b
  }
}

const calc = new Calculator()
calc.add(1, 2)        // number
calc.add("a", "b")    // string
\`\`\`

**5. Overloads с callback:**
\`\`\`typescript
function fetchData(url: string): Promise<Response>
function fetchData(url: string, callback: (data: any) => void): void
function fetchData(
  url: string,
  callback?: (data: any) => void
): Promise<Response> | void {
  const promise = fetch(url).then(r => r.json())
  
  if (callback) {
    promise.then(callback)
    return
  }
  
  return promise
}

// Promise версия
const data = await fetchData("/api/data")

// Callback версия
fetchData("/api/data", (data) => console.log(data))
\`\`\`

**Правила overloads:**
1. Сигнатуры идут перед реализацией
2. Реализация должна быть совместима со всеми сигнатурами
3. TypeScript проверяет вызовы по сигнатурам, не по реализации
4. Порядок сигнатур важен (от специфичных к общим)

\`\`\`typescript
// ❌ Неправильный порядок
function process(x: any): any
function process(x: string): string  // никогда не вызовется

// ✅ Правильный порядок
function process(x: string): string
function process(x: any): any
\`\`\`

**Ключевые моменты:**
- Async функции возвращают \`Promise<T>\`
- \`Promise.all\` возвращает кортеж типов
- Overloads — несколько сигнатур для одной функции
- Реализация должна быть совместима со всеми сигнатурами
- Порядок сигнатур: от специфичных к общим

💡 **Для собеседования:** Async функции типизируются через \`Promise<T>\`. Overloads позволяют функции иметь несколько сигнатур. Реализация должна быть совместима со всеми сигнатурами. Порядок важен: от специфичных к общим.`,
"shortAnswer": `Async функции типизируются через Promise<T>. Overloads позволяют функции иметь несколько сигнатур. Реализация должна быть совместима со всеми сигнатурами. Порядок важен: от специфичных к общим.`,
},
{
"id": `3-middle-общее-10`,
"title": `Что такое ambient declarations (declare) и как типизировать JSON-импорты?`,
"fullAnswer": `## Ambient Declarations (declare)

**Ambient declarations** — объявления типов для кода, который существует вне TypeScript (глобальные переменные, внешние библиотеки, браузерные API).

**declare var/let/const:**
\`\`\`typescript
// Глобальные переменные
declare const API_URL: string
declare let DEBUG_MODE: boolean
declare var VERSION: string

// Использование
console.log(API_URL)   // string
console.log(DEBUG_MODE) // boolean
\`\`\`

**declare function:**
\`\`\`typescript
declare function trackEvent(name: string, data: object): void
declare function formatDate(date: Date, locale?: string): string

// Использование
trackEvent("click", { button: "submit" })
const formatted = formatDate(new Date(), "ru-RU")
\`\`\`

**declare class:**
\`\`\`typescript
declare class Analytics {
  constructor(apiKey: string)
  track(event: string, data?: object): void
  flush(): Promise<void>
  static getInstance(): Analytics
}

// Использование
const analytics = new Analytics("key-123")
analytics.track("pageview")
\`\`\`

**declare namespace:**
\`\`\`typescript
declare namespace Utils {
  function formatDate(date: Date): string
  function parseJSON(json: string): any
  const VERSION: string
}

// Использование
const formatted = Utils.formatDate(new Date())
\`\`\`

**declare module:**
\`\`\`typescript
// Для библиотек без типов
declare module "my-library" {
  export interface Config {
    apiUrl: string
    timeout: number
  }
  
  export function init(config: Config): void
  export function getData(): Promise<any>
  export default class MyLibrary {
    constructor(config: Config)
  }
}

// Использование
import MyLibrary, { init, Config } from "my-library"
\`\`\`

**declare global:**
\`\`\`typescript
// Расширение глобальных типов
declare global {
  interface Window {
    myCustomProperty: string
    myCustomMethod(): void
  }
  
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
      DEBUG: "true" | "false"
    }
  }
}

// Использование
window.myCustomProperty = "hello"
console.log(process.env.API_URL)  // string
\`\`\`

**declare enum:**
\`\`\`typescript
declare enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}
\`\`\`

---

## Типизация JSON-импортов

**1. resolveJsonModule в tsconfig.json:**
\`\`\`json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
\`\`\`

**2. Импорт JSON:**
\`\`\`typescript
// data.json
{
  "users": [
    { "name": "John", "age": 30 },
    { "name": "Jane", "age": 25 }
  ],
  "config": {
    "theme": "dark",
    "language": "ru"
  }
}

// import.ts
import data from "./data.json"

// TypeScript автоматически выводит тип:
// {
//   users: { name: string; age: number }[];
//   config: { theme: string; language: string };
// }

data.users[0].name  // string ✅
\`\`\`

**3. Явная типизация:**
\`\`\`typescript
interface Data {
  users: User[]
  config: Config
}

import data from "./data.json" as Data
// Или
const typedData: Data = data
\`\`\`

**4. as const для литеральных типов:**
\`\`\`typescript
// config.json
{
  "status": {
    "active": "ACTIVE",
    "inactive": "INACTIVE"
  }
}

import config from "./config.json" assert { type: "json" }

// Тип: { status: { active: string; inactive: string } }
// Для литеральных типов нужен as const в коде
\`\`\`

**5. Declaration file для JSON:**
\`\`\`typescript
// types/json.d.ts
declare module "*.json" {
  const value: any
  export default value
}

// Или для конкретного файла
declare module "./data.json" {
  export interface Data {
    users: Array<{ name: string; age: number }>
    config: { theme: string; language: string }
  }
  const data: Data
  export default data
}
\`\`\`

**6. Import assertions (TC39 proposal):**
\`\`\`typescript
import data from "./data.json" assert { type: "json" }

// Или с import attributes (новее)
import data from "./data.json" with { type: "json" }
\`\`\`

**7. Fetch JSON с типизацией:**
\`\`\`typescript
async function loadConfig<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return response.json() as Promise<T>
}

interface Config {
  apiUrl: string
  timeout: number
}

const config = await loadConfig<Config>("/config.json")
\`\`\`

**Ограничения JSON-импортов:**
- JSON не поддерживает комментарии
- JSON не поддерживает trailing commas
- JSON не поддерживает undefined, функции, Date
- Большие JSON файлы могут замедлять компиляцию

**Ключевые моменты:**
- **\`declare\`** — объявления для внешнего кода (var, function, class, module, global)
- **\`declare module\`** — типы для библиотек без типов
- **\`declare global\`** — расширение глобальных типов
- **JSON-импорты** — требуют \`resolveJsonModule: true\`
- TypeScript автоматически выводит типы из JSON
- Для литеральных типов нужен \`as const\`

💡 **Для собеседования:** \`declare\` — объявления для внешнего кода (глобальные переменные, библиотеки). \`declare module\` — типы для библиотек без типов. JSON-импорты требуют \`resolveJsonModule: true\`, TypeScript автоматически выводит типы из структуры JSON.`,
"shortAnswer": `declare — объявления для внешнего кода (глобальные переменные, библиотеки). declare module — типы для библиотек без типов. JSON-импорты требуют resolveJsonModule: true, TypeScript автоматически выводит типы из структуры JSON.`,
},
{
"id": `3-middle-общее-11`,
"title": `Что такое isolatedModules и verbatimModuleSyntax?`,
"fullAnswer": `## isolatedModules

**\`isolatedModules\`** — опция компилятора, которая гарантирует, что каждый файл может быть безопасно транспилирован независимо (без контекста других файлов).

**Зачем нужна:**
- Требуется для инструментов, которые транспилируют файлы по отдельности (Babel, SWC, esbuild, ts-loader с \`transpileOnly\`)
- Эти инструменты не выполняют полную проверку типов
- Они не видят типы из других файлов

**Что проверяет:**

**1. Const enum:**
\`\`\`typescript
// ❌ Ошибка с isolatedModules
const enum Direction {
  Up,
  Down
}

// ✅ Правильно
enum Direction {
  Up,
  Down
}

// Или
const Direction = {
  Up: 0,
  Down: 1
} as const
\`\`\`

**2. Re-export типов:**
\`\`\`typescript
//  Ошибка: TypeScript не знает, тип это или значение
export { User } from "./types"

// ✅ Явно указываем, что это тип
export type { User } from "./types"

// Или
export { type User } from "./types"
\`\`\`

**3. Namespace с значениями:**
\`\`\`typescript
// ❌ Может вызвать проблемы
namespace Utils {
  export const VERSION = "1.0"
  export type Config = { url: string }
}

// ✅ Разделяем
const Utils = {
  VERSION: "1.0"
}

type Config = { url: string }
\`\`\`

**Включение в tsconfig.json:**
\`\`\`json
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
\`\`\`

**Когда обязательно:**
- Babel (не проверяет типы)
- SWC
- esbuild
- Vite (использует esbuild)
- ts-loader с \`transpileOnly: true\`
- fork-ts-checker-webpack-plugin

---

## verbatimModuleSyntax (TS 5.0+)

**\`verbatimModuleSyntax\`** — строгая опция, которая требует явного разделения импортов типов и значений.

**Что делает:**
- Запрещает неявные импорты типов
- Требует \`import type\` для типов
- Удаляет все импорты типов из скомпилированного JS
- Более строгая версия \`isolatedModules\`

**Правила:**

**1. Импорт только типов:**
\`\`\`typescript
// ✅ Правильно
import type { User, Config } from "./types"

// ❌ Ошибка
import { User, Config } from "./types"
\`\`\`

**2. Смешанные импорты:**
\`\`\`typescript
// ✅ Правильно
import { fetchData, type User } from "./api"

// fetchData — значение, User — тип
\`\`\`

**3. Re-export:**
\`\`\`typescript
// ✅ Правильно
export type { User } from "./types"

// ❌ Ошибка
export { User } from "./types"
\`\`\`

**4. Export type:**
\`\`\`typescript
// ✅ Правильно
export type User = { name: string }

// ❌ Ошибка (если User используется только как тип)
export const User = { name: "John" }
\`\`\`

**Включение в tsconfig.json:**
\`\`\`json
{
  "compilerOptions": {
    "verbatimModuleSyntax": true,
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
\`\`\`

**Отношение к другим опциям:**
- \`verbatimModuleSyntax\` заменяет \`importsNotUsedAsValues\` и \`preserveValueImports\`
- Более строгий, чем \`isolatedModules\`
- Требует \`module: ESNext\` или \`NodeNext\`

---

## Сравнение

| Опция | Строгость | Требует \`import type\` | Удаляет типы из JS |
|---|---|---|---|
| **\`isolatedModules\`** | Средняя | Нет (но рекомендуется) | Зависит от инструмента |
| **\`verbatimModuleSyntax\`** | Высокая | Да (обязательно) | Да (всегда) |

**Пример миграции:**

**До (без verbatimModuleSyntax):**
\`\`\`typescript
import { User, fetchData } from "./api"

function getUser(): User {
  return fetchData()
}
\`\`\`

**После (с verbatimModuleSyntax):**
\`\`\`typescript
import { fetchData, type User } from "./api"

function getUser(): User {
  return fetchData()
}
\`\`\`

**Преимущества verbatimModuleSyntax:**
- Явное разделение типов и значений
- Меньший размер бандла (типы удаляются)
- Быстрая компиляция (инструменты не анализируют типы)
- Предсказуемое поведение

**Недостатки:**
- Больше кода (нужно писать \`type\`)
- Миграция существующего кода
- Не все библиотеки поддерживают

**Ключевые моменты:**
- **\`isolatedModules\`** — каждый файл компилируется независимо. Требуется для Babel, SWC, esbuild.
- **\`verbatimModuleSyntax\`** (TS 5.0+) — строгое разделение типов и значений. Требует \`import type\`.
- Обе опции улучшают совместимость с инструментами транспиляции
- \`verbatimModuleSyntax\` строже и требует явных \`import type\`

💡 **Для собеседования:** \`isolatedModules\` гарантирует независимую компиляцию файлов (нужно для Babel, esbuild). \`verbatimModuleSyntax\` (TS 5.0+) требует явного \`import type\` для типов. Обе улучшают совместимость с инструментами и уменьшают размер бандла.`,
"shortAnswer": `isolatedModules гарантирует независимую компиляцию файлов (нужно для Babel, esbuild). verbatimModuleSyntax (TS 5.0+) требует явного import type для типов. Обе улучшают совместимость с инструментами и уменьшают размер бандла.`,
},
{
"id": `3-middle-общее-12`,
"title": `Как типизировать React/Vue компоненты, API-ответы и event emitters?`,
"fullAnswer": `## Типизация Vue компонентов

**Props:**
\`\`\`vue
<script setup lang="ts">
// С defineProps и TypeScript
const props = defineProps<{
  title: string
  count?: number
  items: User[]
  onClick: (id: number) => void
}>()

// С значениями по умолчанию
const props = withDefaults(defineProps<{
  title: string
  count?: number
}>(), {
  count: 0
})
</script>
\`\`\`

**Emits:**
\`\`\`vue
<script setup lang="ts">
const emit = defineEmits<{
  change: [value: string]
  submit: [payload: { id: number; name: string }]
  close: []
}>()

// Вызов
emit("change", "new value")
emit("submit", { id: 1, name: "Test" })
emit("close")
</script>
\`\`\`

**Slots:**
\`\`\`vue
<script setup lang="ts">
defineSlots<{
  default(props: { item: User }): any
  header(props: { title: string }): any
  footer?(): any
}>()
</script>
\`\`\`

**Expose:**
\`\`\`vue
<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++

defineExpose({
  count,
  increment
})
</script>
\`\`\`

**Generic компоненты:**
\`\`\`vue
<script setup lang="ts" generic="T extends { id: number }">
defineProps<{
  items: T[]
  renderItem: (item: T) => string
}>()
</script>
\`\`\`

**Refs:**
\`\`\`vue
<script setup lang="ts">
import { useTemplateRef } from "vue"

const inputRef = useTemplateRef<HTMLInputElement>("inputRef")
const childRef = useTemplateRef<ChildComponent>("childRef")
</script>

<template>
  <input ref="inputRef">
  <ChildComponent ref="childRef" />
</template>
\`\`\`

---

## Типизация React компонентов

**Functional компоненты:**
\`\`\`typescript
interface ButtonProps {
  label: string
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children || label}
    </button>
  )
}
\`\`\`

**С дженериками:**
\`\`\`typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}

// Использование
<List
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
  keyExtractor={(user) => user.id}
/>
\`\`\`

**Hooks:**
\`\`\`typescript
// useState
count: [number, React.Dispatch<React.SetStateAction<number>>]

// useRef
const inputRef = useRef<HTMLInputElement>(null)

// useCallback
const handleClick = useCallback((id: number) => {
  // ...
}, [dependency])

// useMemo
const filtered = useMemo(() => {
  return items.filter(item => item.active)
}, [items])
\`\`\`

---

## Типизация API-ответов

**Базовый подход:**
\`\`\`typescript
// types/api.ts
interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

// api/users.ts
async function getUsers(): Promise<PaginatedResponse<User>> {
  const response = await fetch("/api/users")
  return response.json()
}

async function getUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json()
}
\`\`\`

**С обработкой ошибок:**
\`\`\`typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string }

async function safeFetch<T>(url: string): Promise<Result<T>> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return { success: false, error: \`HTTP \${response.status}\` }
    }
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Использование
const result = await safeFetch<User[]>("/api/users")
if (result.success) {
  console.log(result.data)  // User[]
} else {
  console.error(result.error)
}
\`\`\`

**Типизация запросов:**
\`\`\`typescript
interface CreateUserInput {
  name: string
  email: string
  password: string
}

interface UpdateUserInput {
  name?: string
  email?: string
}

async function createUser(input: CreateUserInput): Promise<User> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  })
  return response.json()
}
\`\`\`

---

## Типизация Event Emitters

**Node.js EventEmitter:**
\`\`\`typescript
import { EventEmitter } from "events"

interface AppEvents {
  userLogin: [userId: number]
  userLogout: [userId: number]
  error: [error: Error]
}

class App extends EventEmitter {
  // Типизированные методы
  on<K extends keyof AppEvents>(
    event: K,
    listener: (...args: AppEvents[K]) => void
  ): this {
    return super.on(event, listener as any)
  }
  
  emit<K extends keyof AppEvents>(
    event: K,
    ...args: AppEvents[K]
  ): boolean {
    return super.emit(event, ...args)
  }
}

const app = new App()
app.on("userLogin", (userId) => { /* userId: number */ })
app.emit("userLogin", 123)
\`\`\`

**TypedEventEmitter (generic):**
\`\`\`typescript
type EventMap = Record<string, any>

class TypedEventEmitter<Events extends EventMap> {
  private emitter = new EventEmitter()
  
  on<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): void {
    this.emitter.on(event as string, listener)
  }
  
  emit<K extends keyof Events>(
    event: K,
    ...args: Events[K]
  ): void {
    this.emitter.emit(event as string, ...args)
  }
}

// Использование
interface MyEvents {
  change: [value: string]
  submit: [data: FormData]
}

const emitter = new TypedEventEmitter<MyEvents>()
emitter.on("change", (value) => { /* value: string */ })
emitter.emit("submit", formData)
\`\`\`

**Vue event emitters:**
\`\`\`vue
<script setup lang="ts">
const emit = defineEmits<{
  change: [value: string, oldValue: string]
  submit: [payload: FormData]
}>()

emit("change", "new", "old")
emit("submit", formData)
</script>
\`\`\`

**Ключевые моменты:**
- Vue: \`defineProps<T>\`, \`defineEmits<T>\`, \`defineSlots<T>\`
- React: \`React.FC<Props>\`, generic компоненты
- API: \`ApiResponse<T>\`, \`PaginatedResponse<T>\`, \`Result<T>\`
- Event emitters: generic тип с картой событий

💡 **Для собеседования:** Vue компоненты типизируются через \`defineProps<T>\`, \`defineEmits<T>\`. React — через \`React.FC<Props>\` и дженерики. API-ответы — через generic типы (\`ApiResponse<T>\`). Event emitters — через карту событий и generic типы.`,
"shortAnswer": `Vue компоненты типизируются через defineProps<T>, defineEmits<T>. React — через React.FC<Props> и дженерики. API-ответы — через generic типы (ApiResponse<T>). Event emitters — через карту событий и generic типы.`,
},
{
"id": `3-middle-общее-13`,
"title": `Что такое branded types (nominal types) и never тип?`,
"fullAnswer": `## Branded Types (Nominal Types)

**Branded types** — способ создать номинальную типизацию в TypeScript (который по умолчанию структурный). Позволяет различать типы с одинаковой структурой.

**Проблема структурной типизации:**
\`\`\`typescript
type UserId = number
type OrderId = number

function getUser(id: UserId) { ... }
function getOrder(id: OrderId) { ... }

const userId: UserId = 123
getOrder(userId)  // ✅ Ошибка не поймана! Оба — number
\`\`\`

**Решение — branded types:**
\`\`\`typescript
type Brand<T, B> = T & { __brand: B }

type UserId = Brand<number, "UserId">
type OrderId = Brand<number, "OrderId">

function getUser(id: UserId) { ... }
function getOrder(id: OrderId) { ... }

const userId = 123 as UserId
getOrder(userId)  // ❌ Ошибка: UserId не совместим с OrderId
\`\`\`

**Создание branded types:**
\`\`\`typescript
// Фабричная функция
function createUserId(id: number): UserId {
  return id as UserId
}

function createOrderId(id: number): OrderId {
  return id as OrderId
}

const userId = createUserId(123)
const orderId = createOrderId(456)

getUser(userId)    // ✅
getOrder(orderId)  // ✅
// getOrder(userId)  // ❌ Ошибка
\`\`\`

**Практические примеры:**

**1. Email и Phone:**
\`\`\`typescript
type Email = Brand<string, "Email">
type Phone = Brand<string, "Phone">

function sendEmail(email: Email) { ... }
function sendSMS(phone: Phone) { ... }

function validateEmail(value: string): Email | null {
  if (/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
    return value as Email
  }
  return null
}

const email = validateEmail("john@example.com")
if (email) {
  sendEmail(email)  // ✅
}
\`\`\`

**2. Currency:**
\`\`\`typescript
type USD = Brand<number, "USD">
type EUR = Brand<number, "EUR">

function convertToEUR(amount: USD): EUR {
  return (amount * 0.85) as EUR
}

const dollars = 100 as USD
const euros = convertToEUR(dollars)  // EUR
\`\`\`

**3. Non-empty string:**
\`\`\`typescript
type NonEmptyString = Brand<string, "NonEmptyString">

function createNonEmpty(value: string): NonEmptyString | null {
  return value.trim().length > 0 ? value as NonEmptyString : null
}
\`\`\`

**4. Positive number:**
\`\`\`typescript
type PositiveNumber = Brand<number, "PositiveNumber">

function createPositive(value: number): PositiveNumber | null {
  return value > 0 ? value as PositiveNumber : null
}
\`\`\`

**5. URL:**
\`\`\`typescript
type ValidURL = Brand<string, "ValidURL">

function validateURL(value: string): ValidURL | null {
  try {
    new URL(value)
    return value as ValidURL
  } catch {
    return null
  }
}
\`\`\`

---

## Never тип

**\`never\`** — тип, который представляет значение, которое **никогда не встречается**.

**Когда используется:**

**1. Функции, которые никогда не возвращают:**
\`\`\`typescript
function throwError(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {
    // бесконечный цикл
  }
}

function exitProcess(code: number): never {
  process.exit(code)
}
\`\`\`

**2. Exhaustiveness checking:**
\`\`\`typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number }

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
    case "triangle":
      return (shape.base * shape.height) / 2
    default:
      // shape здесь имеет тип never
      const exhaustiveCheck: never = shape
      return exhaustiveCheck
  }
}

// Если добавить новый тип в Shape, TypeScript покажет ошибку
\`\`\`

**3. Невозможные значения:**
\`\`\`typescript
type EmptyArray = never[]

const empty: EmptyArray = []
// empty.push(1)  // ❌ Ошибка
\`\`\`

**4. Исключение типов:**
\`\`\`typescript
type NoString<T> = T extends string ? never : T

type A = NoString<string | number | boolean>
// number | boolean
\`\`\`

**5. ReturnType функций, которые выбрасывают:**
\`\`\`typescript
type Unreachable = ReturnType<typeof throwError>
// never
\`\`\`

**never vs void:**
\`\`\`typescript
// void — функция ничего не возвращает (или возвращает undefined)
function log(message: string): void {
  console.log(message)
}

// never — функция никогда не завершается
function fail(message: string): never {
  throw new Error(message)
}

const a: void = undefined      // ✅
const b: void = log("hello")   // ✅
// const c: never = undefined  // ❌ Ошибка
\`\`\`

**Ключевые моменты:**
- **Branded types** — номинальная типизация через \`T & { __brand: B }\`. Различают типы с одинаковой структурой.
- **never** — тип для значений, которые никогда не встречаются. Используется для функций, которые не возвращают, и exhaustiveness checking.

💡 **Для собеседования:** Branded types (\`Brand<T, B>\`) создают номинальную типизацию в структурном TypeScript. \`never\` — тип для невозможных значений. Используется для функций, которые не возвращают (\`throw\`, бесконечный цикл), и exhaustiveness checking в switch.`,
"shortAnswer": `Branded types (Brand<T, B>) создают номинальную типизацию в структурном TypeScript. never — тип для невозможных значений. Используется для функций, которые не возвращают (throw, бесконечный цикл), и exhaustiveness checking в switch.`,
},
{
"id": `3-middle-общее-14`,
"title": `Что такое exhaustiveness checking и type narrowing?`,
"fullAnswer": `## Type Narrowing (сужение типа)

**Type narrowing** — механизм, при котором TypeScript сужает тип переменной после проверки.

**Способы narrowing:**

**1. typeof:**
\`\`\`typescript
function process(value: string | number) {
  if (typeof value === "string") {
    // value: string
    console.log(value.toUpperCase())
  } else {
    // value: number
    console.log(value.toFixed(2))
  }
}
\`\`\`

**2. instanceof:**
\`\`\`typescript
function handleError(error: Error | string) {
  if (error instanceof Error) {
    // error: Error
    console.error(error.message)
  } else {
    // error: string
    console.error(error)
  }
}
\`\`\`

**3. in:**
\`\`\`typescript
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // animal: Fish
    animal.swim()
  } else {
    // animal: Bird
    animal.fly()
  }
}
\`\`\`

**4. Discriminated unions:**
\`\`\`typescript
type Result =
  | { status: "success"; data: string }
  | { status: "error"; message: string }

function handle(result: Result) {
  if (result.status === "success") {
    // result: { status: "success"; data: string }
    console.log(result.data)
  } else {
    // result: { status: "error"; message: string }
    console.error(result.message)
  }
}
\`\`\`

**5. Проверка на null/undefined:**
\`\`\`typescript
function process(value: string | null | undefined) {
  if (value === null || value === undefined) {
    return "No value"
  }
  // value: string
  return value.toUpperCase()
}
\`\`\`

**6. Array.isArray:**
\`\`\`typescript
function process(value: string | string[]) {
  if (Array.isArray(value)) {
    // value: string[]
    console.log(value.join(", "))
  } else {
    // value: string
    console.log(value)
  }
}
\`\`\`

**7. Пользовательские type guards:**
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string"
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  )
}

function process(value: unknown) {
  if (isString(value)) {
    // value: string
    console.log(value.toUpperCase())
  } else if (isUser(value)) {
    // value: User
    console.log(value.name)
  }
}
\`\`\`

**8. Assertion functions:**
\`\`\`typescript
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string")
  }
}

function process(value: unknown) {
  assertIsString(value)
  // value: string (после assertion)
  console.log(value.toUpperCase())
}
\`\`\`

---

## Exhaustiveness Checking

**Exhaustiveness checking** — проверка, что все возможные случаи обработаны (обычно в switch).

**Базовый пример:**
\`\`\`typescript
type Status = "loading" | "success" | "error"

function getStatusMessage(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading..."
    case "success":
      return "Success!"
    case "error":
      return "Error!"
    default:
      // status здесь имеет тип never
      const exhaustiveCheck: never = status
      return exhaustiveCheck
  }
}
\`\`\`

**Как это работает:**
1. TypeScript проверяет все случаи в switch
2. Если все случаи обработаны, в \`default\` тип — \`never\`
3. Если добавить новый тип в union — TypeScript покажет ошибку в \`default\`

**Пример с ошибкой:**
\`\`\`typescript
type Status = "loading" | "success" | "error" | "idle"

function getStatusMessage(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading..."
    case "success":
      return "Success!"
    case "error":
      return "Error!"
    // ❌ Забыли "idle"
    default:
      const exhaustiveCheck: never = status
      // Ошибка: Type '"idle"' is not assignable to type 'never'
      return exhaustiveCheck
  }
}
\`\`\`

**Utility функция:**
\`\`\`typescript
function assertNever(value: never): never {
  throw new Error(\`Unexpected value: \${value}\`)
}

function handleStatus(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading..."
    case "success":
      return "Success!"
    case "error":
      return "Error!"
    default:
      return assertNever(status)
  }
}
\`\`\`

**С discriminated unions:**
\`\`\`typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number }

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
    case "triangle":
      return (shape.base * shape.height) / 2
    default:
      return assertNever(shape)
  }
}
\`\`\`

**С if/else:**
\`\`\`typescript
function handleResult(result: Result): string {
  if (result.status === "success") {
    return result.data
  } else if (result.status === "error") {
    return result.message
  } else {
    return assertNever(result)
  }
}
\`\`\`

**Преимущества exhaustiveness checking:**
- Компилятор ловит необработанные случаи
- Безопасный рефакторинг (добавление новых типов)
- Документация кода (видно, что все случаи учтены)
- Избегание runtime ошибок

**Ключевые моменты:**
- **Type narrowing** — сужение типа после проверки (\`typeof\`, \`instanceof\`, \`in\`, type guards)
- **Exhaustiveness checking** — проверка, что все случаи обработаны через \`never\` в \`default\`
- \`assertNever\` — utility функция для exhaustiveness checking
- При добавлении нового типа в union TypeScript покажет ошибку

💡 **Для собеседования:** Type narrowing — сужение типа через проверки (\`typeof\`, \`instanceof\`, \`in\`, type guards). Exhaustiveness checking — проверка полноты обработки через \`never\` в \`default\` ветке switch. \`assertNever\` — utility функция, которая выбрасывает ошибку для необработанных случаев.`,
"shortAnswer": `Type narrowing — сужение типа через проверки (typeof, instanceof, in, type guards). Exhaustiveness checking — проверка полноты обработки через never в default ветке switch. assertNever — utility функция, которая выбрасывает ошибку для необработанных случаев.`,
},
{
"id": `3-middle-общее-15`,
"title": `Как работать с discriminated unions и TypeScript Compiler API?`,
"fullAnswer": `## Discriminated Unions

**Discriminated unions** (tagged unions, algebraic data types) — union типы с общим свойством (discriminant), которое позволяет TypeScript сужать тип.

**Базовый пример:**
\`\`\`typescript
type Success = {
  status: "success"  // discriminant
  data: string
}

type Error = {
  status: "error"    // discriminant
  message: string
}

type Result = Success | Error

function handle(result: Result) {
  if (result.status === "success") {
    // result: Success
    console.log(result.data)    // ✅
    // console.log(result.message)  // ❌ Ошибка
  } else {
    // result: Error
    console.error(result.message)  // ✅
    // console.log(result.data)     // ❌ Ошибка
  }
}
\`\`\`

**Правила discriminated unions:**
1. Общий тип должен быть **литеральным типом** (строка, число, boolean, enum)
2. Общий тип должен быть **уникальным** для каждого члена union
3. TypeScript использует это свойство для narrowing

**Практические примеры:**

**1. API responses:**
\`\`\`typescript
type ApiResponse<T> =
  | { status: 200; data: T }
  | { status: 404; error: "Not found" }
  | { status: 500; error: "Internal server error" }

function handleResponse<T>(response: ApiResponse<T>) {
  switch (response.status) {
    case 200:
      console.log(response.data)    // T
      break
    case 404:
      console.error(response.error) // "Not found"
      break
    case 500:
      console.error(response.error) // "Internal server error"
      break
  }
}
\`\`\`

**2. State machines:**
\`\`\`typescript
type LoadingState = {
  status: "loading"
}

type SuccessState<T> = {
  status: "success"
  data: T
}

type ErrorState = {
  status: "error"
  error: Error
}

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState

function render<T>(state: AsyncState<T>) {
  switch (state.status) {
    case "loading":
      return <Spinner />
    case "success":
      return <DataView data={state.data} />
    case "error":
      return <ErrorMessage error={state.error} />
  }
}
\`\`\`

**3. Actions (Redux-like):**
\`\`\`typescript
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_VALUE"; payload: number }
  | { type: "RESET" }

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "SET_VALUE":
      return action.payload  // ✅ payload доступен
    case "RESET":
      return 0
  }
}
\`\`\`

**4. Form validation:**
\`\`\`typescript
type ValidationSuccess = {
  valid: true
  value: string
}

type ValidationError = {
  valid: false
  errors: string[]
}

type ValidationResult = ValidationSuccess | ValidationError

function validate(input: string): ValidationResult {
  if (input.length < 3) {
    return { valid: false, errors: ["Too short"] }
  }
  return { valid: true, value: input }
}

const result = validate("Hi")
if (result.valid) {
  console.log(result.value)  // ✅
} else {
  console.error(result.errors)  // ✅
}
\`\`\`

**5. Pattern matching:**
\`\`\`typescript
type Option<T> =
  | { type: "some"; value: T }
  | { type: "none" }

function match<T, R>(
  option: Option<T>,
  handlers: {
    some: (value: T) => R
    none: () => R
  }
): R {
  switch (option.type) {
    case "some":
      return handlers.some(option.value)
    case "none":
      return handlers.none()
  }
}

const result = match(
  { type: "some", value: 42 },
  {
    some: (value) => value * 2,
    none: () => 0
  }
)
// result: 84
\`\`\`

---

## TypeScript Compiler API

**Compiler API** — программный интерфейс для работы с TypeScript кодом (парсинг, анализ, трансформация).

**Установка:**
\`\`\`bash
npm install typescript
\`\`\`

**Базовое использование:**

**1. Парсинг кода:**
\`\`\`typescript
import * as ts from "typescript"

const sourceCode = \`
  function greet(name: string): string {
    return \\\`Hello, \\\${name}!\\\`;
  }
\`

const sourceFile = ts.createSourceFile(
  "example.ts",
  sourceCode,
  ts.ScriptTarget.Latest,
  true
)

// Обход AST
function visit(node: ts.Node) {
  if (ts.isFunctionDeclaration(node)) {
    console.log(\`Function: \${node.name?.text}\`)
  }
  ts.forEachChild(node, visit)
}

visit(sourceFile)
\`\`\`

**2. Получение информации о типах:**
\`\`\`typescript
import * as ts from "typescript"

const program = ts.createProgram(["example.ts"], {})
const checker = program.getTypeChecker()

const sourceFile = program.getSourceFile("example.ts")!

ts.forEachChild(sourceFile, (node) => {
  if (ts.isFunctionDeclaration(node) && node.name) {
    const symbol = checker.getSymbolAtLocation(node.name)
    if (symbol) {
      const type = checker.getTypeOfSymbolAtLocation(symbol, node)
      console.log(\`\${node.name.text}: \${checker.typeToString(type)}\`)
    }
  }
})
\`\`\`

**3. Трансформация кода:**
\`\`\`typescript
import * as ts from "typescript"

const sourceCode = \`const x: number = 5;\`

const sourceFile = ts.createSourceFile(
  "example.ts",
  sourceCode,
  ts.ScriptTarget.Latest
)

// Трансформер: удаляет аннотации типов
const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
  return (sourceFile) => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isVariableDeclaration(node) && node.type) {
        return ts.factory.updateVariableDeclaration(
          node,
          node.name,
          node.exclamationToken,
          undefined,  // удаляем тип
          node.initializer
        )
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(sourceFile, visit) as ts.SourceFile
  }
}

const result = ts.transform(sourceFile, [transformer])
const printer = ts.createPrinter()
const output = printer.printFile(result.transformed[0])

console.log(output)  // "const x = 5;"
\`\`\`

**4. Генерация кода:**
\`\`\`typescript
import * as ts from "typescript"

// Создаём функцию
const functionDecl = ts.factory.createFunctionDeclaration(
  undefined,
  undefined,
  ts.factory.createIdentifier("greet"),
  undefined,
  [
    ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      ts.factory.createIdentifier("name"),
      undefined,
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
    )
  ],
  ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  ts.factory.createBlock([
    ts.factory.createReturnStatement(
      ts.factory.createTemplateExpression(
        ts.factory.createTemplateHead("Hello, "),
        [
          ts.factory.createTemplateSpan(
            ts.factory.createIdentifier("name"),
            ts.factory.createTemplateTail("!")
          )
        ]
      )
    )
  ])
)

const printer = ts.createPrinter()
const output = printer.printNode(ts.EmitHint.Unspecified, functionDecl, sourceFile)

console.log(output)
// "function greet(name: string): string { return \\\`Hello, \${name}!\\\`; }"
\`\`\`

**5. Проверка типов:**
\`\`\`typescript
import * as ts from "typescript"

const program = ts.createProgram(["example.ts"], {})
const diagnostics = ts.getPreEmitDiagnostics(program)

diagnostics.forEach(diagnostic => {
  if (diagnostic.file && diagnostic.start !== undefined) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\\n")
    console.log(\`\${diagnostic.file.fileName} (\${line + 1},\${character + 1}): \${message}\`)
  }
})
\`\`\`

**Практическое применение Compiler API:**
- Кодогенерация (OpenAPI → TypeScript)
- Кастомные линтеры
- Рефакторинг инструментов
- Анализ зависимостей
- Документация (TypeDoc)
- Babel-плагины для TypeScript

**Ключевые моменты:**
- **Discriminated unions** — union с общим свойством (discriminant) для narrowing
- Общий тип должен быть литеральным и уникальным
- **Compiler API** — программный интерфейс для парсинга, анализа, трансформации TypeScript кода
- Используется для кодогенерации, линтеров, рефакторинга

💡 **Для собеседования:** Discriminated unions — union типы с общим свойством (discriminant) для type narrowing. Общий тип должен быть литеральным. Compiler API — интерфейс для работы с TypeScript кодом (парсинг, анализ, трансформация). Используется для кодогенерации, линтеров, рефакторинга.`,
"shortAnswer": `Discriminated unions — union типы с общим свойством (discriminant) для type narrowing. Общий тип должен быть литеральным. Compiler API — интерфейс для работы с TypeScript кодом (парсинг, анализ, трансформация). Используется для кодогенерации, линтеров, рефакторинга.`,
},
],
},
],
},
}
