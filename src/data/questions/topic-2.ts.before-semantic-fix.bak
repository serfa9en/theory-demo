import type { TopicQuestions } from '../../types/question'

export const topic2Questions: TopicQuestions = {
"id": 2,
"slug": `topic-2`,
"title": `Vue 2, Vue 3`,
"junior": {
"sections": [
{
"id": `vue-2`,
"title": `Vue 2`,
"questions": [
{
"id": `2-junior-vue-2-1`,
"title": `Что такое Vue.js? Основные особенности фреймворка.`,
"fullAnswer": `**Vue.js** — это прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов.

**Основные особенности:**

**1. Прогрессивность:**
- Можно использовать постепенно (от виджетов до SPA)
- Не требует полного переписывания проекта
- Совместим с другими библиотеками

**2. Реактивность:**
- Автоматическое обновление DOM при изменении данных
- Не нужно вручную обновлять интерфейс

**3. Компонентный подход:**
- UI разбивается на переиспользуемые компоненты
- Каждый компонент — изолированная единица с собственной логикой

**4. Декларативный рендеринг:**
\`\`\`javascript
// Вместо: document.getElementById('app').innerHTML = 'Hello'
// Пишем:
<div>{{ message }}</div>
\`\`\`

**5. Виртуальный DOM:**
- Эффективное обновление только изменённых частей
- Минимизация операций с реальным DOM

**6. Простота изучения:**
- Понятный синтаксис (HTML + JS)
- Отличная документация
- Низкий порог входа

**7. Экосистема:**
- Vue Router — маршрутизация
- Pinia/Vuex — управление состоянием
- Vue CLI/Vite — инструменты сборки

💡 **Для собеседования:** Vue — прогрессивный фреймворк с реактивностью и компонентным подходом. Главное отличие от React — более простой синтаксис и двустороннее связывание из коробки.`,
"shortAnswer": `Vue — прогрессивный фреймворк с реактивностью и компонентным подходом. Главное отличие от React — более простой синтаксис и двустороннее связывание из коробки.`,
},
{
"id": `2-junior-vue-2-2`,
"title": `Что такое однофайловый компонент (SFC)? Из каких секций состоит?`,
"fullAnswer": `**Однофайловый компонент (Single File Component, SFC)** — это файл с расширением  \`.vue\` , который содержит всю логику компонента в одном месте.

**Структура SFC:**
\`\`\`vue
<template>
  <!-- HTML-разметка -->
  <div class="counter">
    <h1>{{ title }}</h1>
    <p>Счётчик: {{ count }}</p>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<script>
// JavaScript-логика
export default {
  name: "Counter",
  data() {
    return {
      title: "Мой счётчик",
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped>
/* CSS-стили (scoped — только для этого компонента) */
.counter {
  padding: 20px;
  border: 1px solid #ccc;
}
button {
  background: blue;
  color: white;
}
</style>
\`\`\`

**Три секции:**
1. ** \`<template>\` ** — HTML-разметка компонента. Должен иметь один корневой элемент (во Vue 2).
2. ** \`<script>\` ** — JavaScript-логика. Экспортирует объект с опциями компонента.
3. ** \`<style>\` ** — CSS-стили. Атрибут \`scoped\` ограничивает стили только этим компонентом.

**Преимущества SFC:**
- ✅ Всё в одном файле (удобно для навигации)
- ✅ Модульность и переиспользование
- ✅ Scoped CSS (нет конфликтов стилей)
- ✅ Поддержка препроцессоров (SCSS, Less)
- ✅ Hot Module Replacement (HMR)

💡 **Для собеседования:** SFC — это  \`.vue\`  файл с тремя секциями: template (HTML), script (JS), style (CSS). Это основа компонентного подхода во Vue.`,
"shortAnswer": `SFC — это .vue файл с тремя секциями: template (HTML), script (JS), style (CSS). Это основа компонентного подхода во Vue.`,
},
{
"id": `2-junior-vue-2-3`,
"title": `Что такое реактивность? Как она работает?`,
"fullAnswer": `**Реактивность** — это способность Vue автоматически обновлять DOM при изменении данных.

**Как работает:**
Vue оборачивает данные в реактивную систему, которая отслеживает изменения.

**Vue 2 — \`Object.defineProperty\`:**
Определяет getter/setter для каждого свойства. При чтении свойства Vue запоминает, кто его использует (track), а при записи уведомляет всех подписчиков об изменении (trigger).

**Ограничения Vue 2:**
- ❌ Нельзя отслеживать добавление новых свойств в объект
- ❌ Нельзя отслеживать изменение массива по индексу (\`arr[0] = newValue\`)
- ✅ Решение: \`Vue.set()\` или \`this.$set()\`

**Vue 3 — \`Proxy\`:**
Использует Proxy для перехвата любых операций с объектом (чтение, запись, удаление). Это решает проблемы Vue 2 и улучшает производительность.

💡 **Для собеседования:** Реактивность — это система, которая отслеживает изменения данных и автоматически обновляет DOM. Vue 2 использует \`Object.defineProperty\` (с ограничениями), Vue 3 — \`Proxy\` (без ограничений).`,
"shortAnswer": `Реактивность — это система, которая отслеживает изменения данных и автоматически обновляет DOM. Vue 2 использует Object.defineProperty (с ограничениями), Vue 3 — Proxy (без ограничений).`,
},
{
"id": `2-junior-vue-2-4`,
"title": `Основные директивы: v-if, v-show, v-for, v-bind, v-on, v-model.`,
"fullAnswer": `**Директивы** — это специальные атрибуты с префиксом  \`v-\` , которые говорят Vue делать что-то с DOM.

1. ** \`v-if\` / \`v-else-if\` / \`v-else\` ** — условный рендеринг. Полностью удаляет/добавляет элемент в DOM.
2. ** \`v-show\` ** — условное отображение. Всегда рендерится, но скрывается через \`display: none\`.
3. ** \`v-for\` ** — циклический рендеринг. Итерирует по массиву или объекту. **Обязательно** указывать  \`:key\` .
4. ** \`v-bind\`  (сокращённо  \`:\` ) — динамическая привязка атрибутов ( \`:src\` ,  \`:class\` ).
5. ** \`v-on\`  (сокращённо  \`@\` ) — обработка событий ( \`@click\` ,  \`@submit.prevent\` ).
6. ** \`v-model\` ** — двустороннее связывание данных для элементов форм ( \`input\` ,  \`select\` ,  \`textarea\` ).

💡 **Для собеседования:** Директивы — это  \`v-\`  атрибуты.  \`v-if\`  удаляет из DOM,  \`v-show\`  скрывает через CSS.  \`v-bind\`  ( \`:\` ) — для атрибутов,  \`v-on\`  ( \`@\` ) — для событий.`,
"shortAnswer": `Директивы — это v- атрибуты. v-if удаляет из DOM, v-show скрывает через CSS. v-bind ( : ) — для атрибутов, v-on ( @ ) — для событий.`,
},
{
"id": `2-junior-vue-2-5`,
"title": `В чём разница между v-if и v-show? Зачем нужен :key в v-for?`,
"fullAnswer": `### v-if vs v-show
- ** \`v-if\` **: Полностью удаляет элемент из DOM. Ленивый (не рендерится, если условие false). Дорогое переключение. Использовать, когда условие редко меняется.
- ** \`v-show\` **: Всегда в DOM, но с \`display: none\`. Дешёвое переключение (только CSS). Использовать, когда нужно часто переключать видимость.

### Зачем нужен :key в v-for?
 \`:key\`  — уникальный идентификатор для каждого элемента списка. Помогает Vue эффективно обновлять DOM.
- Без key: Vue переиспользует элементы, что может привести к багам состояния (например, сохранение текста в неправильном input).
- С key: Vue точно знает, какой элемент обновить, добавить или удалить.

**Правила для key:**
- ✅ Уникальный (обычно \`id\` из БД)
- ✅ Стабильный (не меняется)
- ❌ Не используйте \`index\` массива, если список может меняться (сортировка, удаление).

💡 **Для собеседования:**  \`v-if\`  удаляет из DOM,  \`v-show\`  скрывает через CSS.  \`:key\`  в  \`v-for\`  обязателен — помогает Vue эффективно обновлять DOM и избегать багов.`,
"shortAnswer": `v-if удаляет из DOM, v-show скрывает через CSS. :key в v-for обязателен — помогает Vue эффективно обновлять DOM и избегать багов.`,
},
{
"id": `2-junior-vue-2-6`,
"title": `Как передавать данные через props и $emit?`,
"fullAnswer": `**Props** — передача данных **от родителя к ребёнку** (однонаправленный поток).
** \`$emit\` ** — отправка событий **от ребёнка к родителю**.

**Родитель:**
\`\`\`vue
<ChildComponent 
  :title="pageTitle" 
  :count="5"
  @custom-event="handleCustomEvent"
/>
\`\`\`

**Ребёнок:**
\`\`\`vue
<script>
export default {
  props: {
    title: String,
    count: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    notifyParent() {
      this.$emit('custom-event', { id: 1 });
    }
  }
};
</script>
\`\`\`

💡 **Для собеседования:** Props — однонаправленный поток данных (родитель → ребёнок).  \`$emit\`  — события от ребёнка к родителю. Props нельзя мутировать напрямую в ребёнке!`,
"shortAnswer": `Props — однонаправленный поток данных (родитель → ребёнок). $emit — события от ребёнка к родителю. Props нельзя мутировать напрямую в ребёнке!`,
},
{
"id": `2-junior-vue-2-7`,
"title": `Что такое Options API? Секции: data, methods, computed, watch.`,
"fullAnswer": `**Options API** — это способ описания компонента через объект с опциями (свойствами).

- ** \`data\` **: Функция, возвращающая реактивное состояние компонента.
- ** \`methods\` **: Методы для обработки событий и логики. Не кэшируются.
- ** \`computed\` **: Вычисляемые свойства. **Кэшируются** (пересчитываются только при изменении зависимостей). Используются как свойства (без  \`()\` ).
- ** \`watch\` **: Наблюдатели за изменением конкретных данных. Полезны для асинхронных операций при изменении значения.

💡 **Для собеседования:** Options API — это объект с опциями: \`data\` (состояние), \`methods\` (методы), \`computed\` (кэшируемые вычисления), \`watch\` (наблюдатели).`,
"shortAnswer": `Options API — это объект с опциями: data (состояние), methods (методы), computed (кэшируемые вычисления), watch (наблюдатели).`,
},
{
"id": `2-junior-vue-2-8`,
"title": `Чем computed отличается от methods? Как работает watch (deep, immediate)?`,
"fullAnswer": `### computed vs methods
- ** \`computed\` **: **Кэшируется**. Пересчитывается только при изменении зависимостей. Используется как свойство ( \`{{ myProp }}\` ). Должен быть чистым (без побочных эффектов).
- ** \`methods\` **: **Не кэшируется**. Выполняется каждый раз при вызове ( \`{{ myMethod() }}\` ). Может иметь побочные эффекты.

### watch с опциями
- ** \`immediate: true\` **: Вызывает обработчик сразу при создании компонента (с начальным значением).
- ** \`deep: true\` **: Отслеживает изменения вложенных свойств объектов или массивов (по умолчанию watch отслеживает только ссылку на объект).

💡 **Для собеседования:**  \`computed\`  кэшируется,  \`methods\`  — нет. Используйте  \`computed\`  для вычислений на основе реактивных данных.  \`watch\`  с  \`immediate: true\`  вызывается сразу, с  \`deep: true\`  отслеживает вложенные изменения.`,
"shortAnswer": `computed кэшируется, methods — нет. Используйте computed для вычислений на основе реактивных данных. watch с immediate: true вызывается сразу, с deep: true отслеживает вложенные изменения.`,
},
{
"id": `2-junior-vue-2-9`,
"title": `Что такое v-model и его модификаторы (.lazy, .number, .trim)?`,
"fullAnswer": `** \`v-model\` ** — директива для **двустороннего связывания** (two-way binding) на формах. Под капотом это синтаксический сахар для  \`:value\`  +  \`@input\` .

**Модификаторы:**
- ** \`.lazy\` **: Обновляет данные по событию \`change\` (при потере фокуса), а не при каждом вводе (\`input\`).
- ** \`.number\` **: Автоматически преобразует введённое значение в число (если это возможно).
- ** \`.trim\` **: Автоматически удаляет пробелы по краям строки.

**Пример:**
\`\`\`vue
<input v-model.lazy.trim.number="age">
\`\`\`

💡 **Для собеседования:**  \`v-model\`  — двустороннее связывание для форм. Модификаторы:  \`.lazy\`  (по change),  \`.number\`  (преобразование в число),  \`.trim\`  (удаление пробелов).`,
"shortAnswer": `v-model — двустороннее связывание для форм. Модификаторы: .lazy (по change), .number (преобразование в число), .trim (удаление пробелов).`,
},
{
"id": `2-junior-vue-2-10`,
"title": `Модификаторы событий: .stop, .prevent, .once.`,
"fullAnswer": `**Модификаторы событий** — это суффиксы для  \`v-on\`  ( \`@\` ), которые изменяют поведение обработчика.

- ** \`.stop\` **: Останавливает всплытие события (эквивалент \`event.stopPropagation()\`).
- ** \`.prevent\` **: Отменяет стандартное поведение браузера (эквивалент \`event.preventDefault()\`, например, отмена перезагрузки страницы при submit формы).
- ** \`.once\` **: Обработчик сработает только один раз, затем автоматически удалится.

**Модификаторы клавиш:**  \`@keyup.enter\` ,  \`@keyup.esc\` .
**Комбинирование:**  \`@click.stop.prevent\` .

💡 **Для собеседования:** Модификаторы событий упрощают работу с DOM.  \`.stop\`  — stopPropagation,  \`.prevent\`  — preventDefault,  \`.once\`  — однократный вызов.`,
"shortAnswer": `Модификаторы событий упрощают работу с DOM. .stop — stopPropagation, .prevent — preventDefault, .once — однократный вызов.`,
},
{
"id": `2-junior-vue-2-11`,
"title": `Как работает :class и :style?`,
"fullAnswer": `### :class — динамические классы
Принимает объект или массив:
\`\`\`vue
<!-- Объект: ключ — имя класса, значение — условие -->
<div :class="{ active: isActive, 'text-danger': hasError }"></div>

<!-- Массив -->
<div :class="[activeClass, errorClass]"></div>
\`\`\`

### :style — динамические стили
Принимает объект со стилями (рекомендуется camelCase):
\`\`\`vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
\`\`\`
Vue автоматически добавляет vendor prefixes (например, \`-webkit-transform\`) при необходимости.

💡 **Для собеседования:**  \`:class\`  принимает объект ( \`{ active: isActive }\` ) или массив.  \`:style\`  принимает объект со стилями. Оба поддерживают вычисляемые свойства.`,
"shortAnswer": `:class принимает объект ( { active: isActive } ) или массив. :style принимает объект со стилями. Оба поддерживают вычисляемые свойства.`,
},
{
"id": `2-junior-vue-2-12`,
"title": `Что такое слоты (<slot>)? Именованные слоты.`,
"fullAnswer": `**Слоты** — это механизм для передачи контента от родителя к ребёнку.

**1. Default slot (базовый):**
\`\`\`vue
<!-- Ребёнок -->
<div class="card">
  <slot>Контент по умолчанию</slot>
</div>
\`\`\`

**2. Именованные слоты (named slots):**
Позволяют передавать контент в разные части компонента.
\`\`\`vue
<!-- Ребёнок -->
<header><slot name="header"></slot></header>
<main><slot></slot></main>

<!-- Родитель -->
<MyComponent>
  <template v-slot:header>
    <h1>Заголовок</h1>
  </template>
  <p>Основной контент</p>
</MyComponent>
\`\`\`
*(Сокращённый синтаксис:  \`#header\`  вместо  \`v-slot:header\` )*

**3. Scope slots (слоты с областью видимости):**
Ребёнок передаёт данные в слот, чтобы родитель мог их использовать.
\`\`\`vue
<!-- Ребёнок -->
<slot :item="userData"></slot>

<!-- Родитель -->
<template v-slot:default="{ item }">
  <span>{{ item.name }}</span>
</template>
\`\`\`

💡 **Для собеседования:** Слоты — для передачи контента в компонент. Default slot — основной контент. Named slots ( \`#header\` ) — для нескольких зон. Scope slots — когда ребёнок передаёт данные в слот.`,
"shortAnswer": `Слоты — для передачи контента в компонент. Default slot — основной контент. Named slots ( #header ) — для нескольких зон. Scope slots — когда ребёнок передаёт данные в слот.`,
},
{
"id": `2-junior-vue-2-13`,
"title": `Жизненный цикл компонента: основные хуки (created, mounted, updated, destroyed).`,
"fullAnswer": `Последовательность этапов от создания до уничтожения компонента:

1. ** \`beforeCreate\` **: Экземпляр создан, но \`data\`, \`methods\` ещё не инициализированы.
2. ** \`created\` **: \`data\`, \`methods\`, \`computed\` доступны. DOM ещё не создан. ✅ **Идеально для API-запросов.**
3. ** \`beforeMount\` **: Template скомпилирован, но DOM ещё не обновлён.
4. ** \`mounted\` **: DOM создан и доступен. ✅ **Идеально для работы с DOM (\`$refs\`) и инициализации сторонних библиотек.**
5. ** \`beforeUpdate\` **: Data изменился, DOM ещё не обновлён.
6. ** \`updated\` **: DOM обновлён.
7. ** \`beforeDestroy\` ** (Vue 2) / ** \`beforeUnmount\` ** (Vue 3): Компонент ещё доступен. ✅ **Идеально для очистки таймеров и слушателей событий.**
8. ** \`destroyed\` ** (Vue 2) / ** \`unmounted\` ** (Vue 3): Компонент полностью уничтожен.

💡 **Для собеседования:** API-запросы — в \`created\`, работа с DOM — в \`mounted\`, очистка ресурсов — в \`beforeDestroy\`.`,
"shortAnswer": `API-запросы — в created, работа с DOM — в mounted, очистка ресурсов — в beforeDestroy.`,
},
{
"id": `2-junior-vue-2-14`,
"title": `Как вызвать API при загрузке компонента?`,
"fullAnswer": `Рекомендуемый способ — использовать хук ** \`created\` ** (данные нужны до рендера) или ** \`mounted\` ** (если нужен доступ к DOM).

**Пример с async/await:**
\`\`\`javascript
export default {
  data() {
    return {
      users: [],
      loading: false,
      error: null
    };
  },
  
  created() {
    this.fetchUsers();
  },
  
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Ошибка сети');
        this.users = await response.json();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
\`\`\`

💡 **Для собеседования:** API-запросы делайте в \`created\` или \`mounted\`. Всегда обрабатывайте ошибки (\`try/catch\`) и показывайте состояние загрузки (\`loading\`).`,
"shortAnswer": `API-запросы делайте в created или mounted. Всегда обрабатывайте ошибки (try/catch) и показывайте состояние загрузки (loading).`,
},
{
"id": `2-junior-vue-2-15`,
"title": `Что такое $refs и $nextTick?`,
"fullAnswer": `### $refs
Объект, содержащий ссылки на DOM-элементы или дочерние компоненты, помеченные атрибутом  \`ref\` .
\`\`\`vue
<input ref="myInput">
\`\`\`
\`\`\`javascript
mounted() {
  this.$refs.myInput.focus(); // Доступ к DOM
}
\`\`\`
⚠️ **Важно:**  \`$refs\`  не реактивны и доступны только после хука \`mounted\`.

### $nextTick
Выполняет callback после следующего обновления DOM.
\`\`\`javascript
this.message = "Новое значение";
// DOM ещё не обновлён!

this.$nextTick(() => {
  // Теперь DOM обновлён, можно безопасно читать размеры или текст
  console.log(this.$refs.myElement.textContent);
});
\`\`\`

💡 **Для собеседования:**  \`$refs\`  — доступ к DOM-элементам и компонентам (не реактивны, доступны после \`mounted\`).  \`$nextTick\`  — выполнение кода после обновления DOM.`,
"shortAnswer": `$refs — доступ к DOM-элементам и компонентам (не реактивны, доступны после mounted). $nextTick — выполнение кода после обновления DOM.`,
},
{
"id": `2-junior-vue-2-16`,
"title": `Что такое Vue Router? Динамические маршруты, навигационные гарды.`,
"fullAnswer": `**Vue Router** — официальная библиотека для маршрутизации в Vue.js (SPA).

**Динамические маршруты:**
\`\`\`javascript
{ path: '/user/:id', component: User }
\`\`\`
Получение параметра:  \`this.$route.params.id\` .

**Query параметры:**
Получение:  \`this.$route.query.search\`  (для URL вида \`/path?search=vue\`).

**Навигационные гарды (Guards):**
Функции для защиты или контроля навигации.
- **Глобальные:** \`router.beforeEach((to, from, next) => { ... })\` — например, проверка авторизации.
- **Маршрута:** \`beforeEnter\` в конфигурации маршрута.
- **Компонента:** \`beforeRouteEnter\`, \`beforeRouteUpdate\`, \`beforeRouteLeave\`.

💡 **Для собеседования:** Vue Router — для SPA. Динамические маршруты ( \`:id\` ) — для параметров. Навигационные гарды ( \`beforeEach\` ) — для защиты маршрутов (например, проверка токена).`,
"shortAnswer": `Vue Router — для SPA. Динамические маршруты ( :id ) — для параметров. Навигационные гарды ( beforeEach ) — для защиты маршрутов (например, проверка токена).`,
},
{
"id": `2-junior-vue-2-17`,
"title": `Что такое Vuex / Pinia? state, getters, mutations, actions.`,
"fullAnswer": `**Vuex** и **Pinia** — библиотеки для управления глобальным состоянием (state management). Pinia является современной рекомендуемой альтернативой для Vue 3.

**Основные концепции (на примере Vuex):**
1. ** \`state\` **: Глобальное состояние (данные).
2. ** \`getters\` **: Вычисляемые свойства на основе state (аналог \`computed\`).
3. ** \`mutations\` **: **Синхронные** функции для изменения state. Вызываются через \`commit\`.
4. ** \`actions\` **: Функции для **асинхронных** операций (API-запросы). Внутри они вызывают мутации через \`commit\`.

**Отличие Pinia:**
В Pinia нет мутаций. Состояние изменяется напрямую внутри \`actions\` (или даже напрямую из компонента), что делает код проще и лучше поддерживает TypeScript.

💡 **Для собеседования:** Vuex/Pinia — для глобального состояния. Vuex: \`state\` (данные), \`getters\` (вычисления), \`mutations\` (синхронные изменения), \`actions\` (асинхронные). Pinia проще: нет мутаций, прямое изменение state.`,
"shortAnswer": `Vuex/Pinia — для глобального состояния. Vuex: state (данные), getters (вычисления), mutations (синхронные изменения), actions (асинхронные). Pinia проще: нет мутаций, прямое изменение state.`,
},
],
},
{
"id": `vue-3`,
"title": `Vue 3`,
"questions": [
{
"id": `2-junior-vue-3-1`,
"title": `Что такое <script setup> во Vue 3?`,
"fullAnswer": `**\`<script setup>\`** — это синтаксический сахар для Composition API во Vue 3. Он делает код компонента более лаконичным и удобным.

**Основные преимущества:**

**1. Меньше кода:**
\`\`\`vue
<!-- Обычный <script> -->
<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return { count, increment }
  }
}
</script>

<!-- <script setup> -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
</script>
\`\`\`

**2. Автоматическая регистрация компонентов:**
\`\`\`vue
<script setup>
import ChildComponent from './ChildComponent.vue'
// ChildComponent автоматически доступен в template
</script>

<template>
  <ChildComponent />
</template>
\`\`\`

**3. Автоматическая регистрация props и emits:**
\`\`\`vue
<script setup>
const props = defineProps(['title'])
const emit = defineEmits(['change'])
</script>
\`\`\`

**4. Лучшая поддержка TypeScript:**
\`\`\`vue
<script setup lang="ts">
const props = defineProps<{
  title: string
  count?: number
}>()
</script>
\`\`\`

**5. Приватные переменные:**
Всё, что объявлено в \`<script setup>\`, доступно в template, но не раскрывается родителю (в отличие от \`setup()\` с return).

**Ключевые моменты:**
- ✅ Меньше boilerplate-кода
- ✅ Автоматическая регистрация компонентов и макросов
- ✅ Лучшая производительность (компилируется эффективнее)
- ✅ Отличная поддержка TypeScript
- ⚠️ Нельзя использовать \`export default\` (только через \`defineOptions\`)

💡 **Для собеседования:** \`<script setup>\` — это синтаксический сахар для Composition API. Уменьшает код, автоматически регистрирует компоненты, props, emits. Всё объявленное доступно в template, но приватно для родителя.`,
"shortAnswer": `<script setup> — это синтаксический сахар для Composition API. Уменьшает код, автоматически регистрирует компоненты, props, emits. Всё объявленное доступно в template, но приватно для родителя.`,
},
{
"id": `2-junior-vue-3-2`,
"title": `Что такое ref и reactive? В чём разница?`,
"fullAnswer": `**\`ref\`** и **\`reactive\`** — два способа создания реактивных данных во Vue 3 (Composition API).

**\`ref\` — для примитивов и объектов:**
\`\`\`vue
<script setup>
import { ref } from 'vue'

const count = ref(0)           // число
const name = ref('John')       // строка
const isActive = ref(true)     // boolean
const user = ref({ name: 'John', age: 30 })  // объект

// Доступ в script: через .value
console.log(count.value)       // 0
count.value = 5

// Доступ в template: автоматически (без .value)
</script>

<template>
  <p>{{ count }}</p>           // 5
  <p>{{ user.name }}</p>       // John
</template>
\`\`\`

**\`reactive\` — только для объектов:**
\`\`\`vue
<script setup>
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  name: 'John',
  user: { age: 30 }
})

// Доступ БЕЗ .value
console.log(state.count)       // 0
state.count = 5
</script>

<template>
  <p>{{ state.count }}</p>     // 5
</template>
\`\`\`

**Ключевые различия:**

| Характеристика | \`ref\` | \`reactive\` |
|---|---|---|
| **Типы данных** | Примитивы и объекты | Только объекты/массивы |
| **Доступ в script** | Через \`.value\` | Напрямую |
| **Доступ в template** | Автоматически | Автоматически |
| **Переприсваивание** | ✅ Можно (\`count.value = 5\`) | ❌ Нельзя (\`state = {}\` сломает реактивность) |
| **Деструктуризация** | Сохраняет реактивность | Теряет реактивность (нужен \`toRefs\`) |

**Пример проблемы с reactive:**
\`\`\`javascript
// ❌ Плохо: теряется реактивность
let { count } = reactive({ count: 0 })
count = 5  // не реактивно!

// ✅ Хорошо: используем toRefs
const state = reactive({ count: 0 })
const { count } = toRefs(state)
count.value = 5  // реактивно!
\`\`\`

**Когда что использовать:**
- **\`ref\`** — для примитивов (числа, строки, boolean), для простых значений
- **\`reactive\`** — для сложных объектов с множеством свойств

**Популярная практика:**
Многие разработчики используют только \`ref\` для единообразия:
\`\`\`vue
<script setup>
const count = ref(0)
const user = ref({ name: 'John' })
const items = ref([])
</script>
\`\`\`

💡 **Для собеседования:** \`ref\` — для примитивов и объектов, требует \`.value\` в script. \`reactive\` — только для объектов, без \`.value\`. \`ref\` можно переприсваивать, \`reactive\` — нет. На практике часто используют только \`ref\` для единообразия.`,
"shortAnswer": `ref — для примитивов и объектов, требует .value в script. reactive — только для объектов, без .value. ref можно переприсваивать, reactive — нет. На практике часто используют только ref для единообразия.`,
},
{
"id": `2-junior-vue-3-3`,
"title": `Что такое Composition API?`,
"fullAnswer": `**Composition API** — это способ организации логики компонента во Vue 3 через функции, а не через опции (как в Options API).

**Сравнение подходов:**

**Options API (Vue 2 стиль):**
\`\`\`vue
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    },
    async fetchUser() {
      const res = await fetch('/api/user')
      this.user = await res.json()
    }
  }
}
</script>
\`\`\`
Проблема: логика размазана по разным опциям (\`data\`, \`computed\`, \`methods\`).

**Composition API (Vue 3):**
\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// Вся логика счётчика — вместе
const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const increment = () => count.value++

// Вся логика пользователя — вместе
const user = ref(null)
const fetchUser = async () => {
  const res = await fetch('/api/user')
  user.value = await res.json()
}

onMounted(fetchUser)
</script>
\`\`\`
Преимущество: связанная логика сгруппирована.

**Ключевые особенности Composition API:**

**1. Логическая группировка:**
Код одной фичи находится рядом, а не разбросан по \`data\`, \`methods\`, \`computed\`.

**2. Переиспользование логики (композируемые функции):**
\`\`\`javascript
// composables/useCounter.js
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--
  return { count, increment, decrement }
}

// Использование в компоненте
const { count, increment } = useCounter(10)
\`\`\`

**3. Лучшая TypeScript поддержка:**
\`\`\`vue
<script setup lang="ts">
const count = ref<number>(0)
const doubleCount = computed<number>(() => count.value * 2)
</script>
\`\`\`

**4. Гибкость:**
- Нет неявного \`this\`
- Можно создавать реактивные значения вне компонентов
- Лучший tree-shaking (меньше размер бандла)

**Когда использовать:**
- **Composition API** — для новых проектов, сложной логики, переиспользуемых хуков
- **Options API** — для простых компонентов, миграции со Vue 2

💡 **Для собеседования:** Composition API — способ организации кода через функции. Решает проблемы миксинов (конфликты имён), улучшает TypeScript-поддержку, позволяет группировать код по функциональности и переиспользовать логику через композируемые функции (composables).`,
"shortAnswer": `Composition API — способ организации кода через функции. Решает проблемы миксинов (конфликты имён), улучшает TypeScript-поддержку, позволяет группировать код по функциональности и переиспользовать логику через композируемые функции (composables).`,
},
{
"id": `2-junior-vue-3-4`,
"title": `Что такое Teleport и Suspense?`,
"fullAnswer": `### Teleport

**Teleport** — компонент для переноса DOM-элементов в другое место страницы (вне родительского компонента).

**Зачем нужен:**
- Модальные окна должны быть в \`<body>\`, а не внутри компонента (проблемы с z-index, overflow)
- Тултипы, уведомления, попапы

**Пример:**
\`\`\`vue
<template>
  <button @click="showModal = true">Открыть модалку</button>
  
  <Teleport to="body">
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Модальное окно</h2>
        <button @click="showModal = false">Закрыть</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>
\`\`\`

**Результат в DOM:**
\`\`\`html
<!-- Компонент -->
<div id="app">
  <button>Открыть модалку</button>
</div>

<!-- Teleport перенёс модалку в body -->
<body>
  <div class="modal">...</div>
</body>
\`\`\`

**Куда можно телепортировать:**
\`\`\`vue
<Teleport to="body">          <!-- в <body> -->
<Teleport to="#app">          <!-- в элемент с id="app" -->
<Teleport to=".modal-container"> <!-- в элемент с классом -->
\`\`\`

---

### Suspense

**Suspense** — компонент для отображения fallback-контента во время загрузки асинхронных данных.

⚠️ **Важно:** В Vue 3 Suspense экспериментальный, API может измениться.

**Пример:**
\`\`\`vue
<template>
  <Suspense>
    <!-- Основной контент (асинхронный компонент) -->
    <template #default>
      <AsyncComponent />
    </template>
    
    <!-- Fallback во время загрузки -->
    <template #fallback>
      <div>Загрузка...</div>
    </template>
  </Suspense>
</template>
\`\`\`

**Асинхронный компонент:**
\`\`\`vue
<!-- AsyncComponent.vue -->
<script setup>
// Suspense ждёт выполнения setup()
const data = await fetch('/api/data').then(r => r.json())
</script>

<template>
  <div>{{ data }}</div>
</template>
\`\`\`

**Как работает:**
 1. Suspense видит асинхронный компонент внутри \`#default\`
 2. Показывает \`#fallback\` (например, спиннер)
 3. Ждёт, пока компонент загрузится
4. Показывает основной контент

**Практическое применение:**
- Ленивая загрузка тяжёлых компонентов
- Ожидание данных от API
- Улучшение UX (пользователь видит загрузку, а не пустой экран)

💡 **Для собеседования:** \`Teleport\` переносит DOM-элементы в другое место (например, модалки в \`<body>\`). \`Suspense\` показывает fallback во время загрузки асинхронных компонентов (экспериментальная фича Vue 3).`,
"shortAnswer": `Teleport переносит DOM-элементы в другое место (например, модалки в <body>). Suspense показывает fallback во время загрузки асинхронных компонентов (экспериментальная фича Vue 3).`,
},
{
"id": `2-junior-vue-3-5`,
"title": `Что такое Fragments (несколько корневых элементов)?`,
"fullAnswer": `**Fragments (фрагменты)** — возможность иметь **несколько корневых элементов** в template компонента. Это нововведение Vue 3.

**Vue 2 — ограничение:**
\`\`\`vue
<!-- ❌ Ошибка: нужен один корневой элемент -->
<template>
  <div>Первый</div>
  <div>Второй</div>
</template>

<!-- ✅ Приходилось оборачивать в div -->
<template>
  <div>
    <div>Первый</div>
    <div>Второй</div>
  </div>
</template>
\`\`\`

**Vue 3 — Fragments:**
\`\`\`vue
<!-- ✅ Работает! Несколько корневых элементов -->
<template>
  <div>Первый</div>
  <div>Второй</div>
  <span>Третий</span>
</template>
\`\`\`

**Зачем это нужно:**

**1. Меньше лишних DOM-элементов:**
\`\`\`vue
<!-- Без фрагментов: лишний div -->
<template>
  <div class="wrapper">
    <h1>Заголовок</h1>
    <p>Текст</p>
  </div>
</template>

<!-- С фрагментами: чище DOM -->
<template>
  <h1>Заголовок</h1>
  <p>Текст</p>
</template>
\`\`\`

**2. Удобно для компонентов-обёрток:**
\`\`\`vue
<!-- Layout компонент без лишней обёртки -->
<template>
  <header>Шапка</header>
  <main>Контент</main>
  <footer>Подвал</footer>
</template>
\`\`\`

**3. Условный рендеринг без обёртки:**
\`\`\`vue
<template>
  <div v-if="isLoading">Загрузка...</div>
  <div v-else>Контент</div>
</template>
\`\`\`

**Ограничения:**

**1. Нельзя использовать \`v-for\` на фрагменте:**
\`\`\`vue
<!-- ❌ Не работает -->
<template v-for="item in items">
  <div>{{ item.name }}</div>
  <span>{{ item.age }}</span>
</template>

<!-- ✅ Нужно обернуть в div -->
<div v-for="item in items" :key="item.id">
  <div>{{ item.name }}</div>
  <span>{{ item.age }}</span>
</div>
\`\`\`

**2. Проблемы с \`$refs\`:**
\`\`\`vue
<template>
  <input ref="input1">
  <input ref="input2">
</template>

<script setup>
// $refs.input1 будет массивом, если несколько элементов с одинаковым ref
</script>
\`\`\`

**3. Атрибуты применяются к первому корневому элементу:**
\`\`\`vue
<!-- Родитель -->
<ChildComponent class="parent-class" />

<!-- Ребёнок (Fragments) -->
<template>
  <div>Первый</div>   <!-- class применится сюда -->
  <div>Второй</div>
</template>
\`\`\`

**Пример из жизни:**
\`\`\`vue
<!-- Компонент карточки без лишней обёртки -->
<template>
  <img :src="product.image" :alt="product.name">
  <h3>{{ product.name }}</h3>
  <p>{{ product.price }} ₽</p>
  <button @click="addToCart">В корзину</button>
</template>
\`\`\`

💡 **Для собеседования:** Fragments — возможность иметь несколько корневых элементов в template (нововведение Vue 3). Уменьшает количество лишних DOM-элементов, удобен для компонентов-обёрток. Ограничения: нельзя \`v-for\` на фрагменте, атрибуты применяются к первому элементу.`,
"shortAnswer": `Fragments — возможность иметь несколько корневых элементов в template (нововведение Vue 3). Уменьшает количество лишних DOM-элементов, удобен для компонентов-обёрток. Ограничения: нельзя v-for на фрагменте, атрибуты применяются к первому элементу.`,
},
{
"id": `2-junior-vue-3-6`,
"title": `Что нового в Vue 3 по сравнению с Vue 2?`,
"fullAnswer": `Vue 3 принёс множество улучшений. Вот ключевые изменения:

### 1. Composition API и \`<script setup>\`
- Новый способ организации логики через функции
- Лучшая группировка кода по функциональности
- Переиспользование логики через композируемые функции (composables)
- Лучшая поддержка TypeScript

### 2. Новая система реактивности (Proxy)
**Vue 2:** \`Object.defineProperty\` (ограничения)
**Vue 3:** \`Proxy\` (без ограничений)

\`\`\`javascript
// Vue 2: нельзя отслеживать добавление свойств
const obj = reactive({})
obj.newProp = 'value'  // ❌ не реактивно

// Vue 3: работает
const obj = reactive({})
obj.newProp = 'value'  // ✅ реактивно
\`\`\`

### 3. Fragments (несколько корневых элементов)
\`\`\`vue
<!-- Vue 2: ошибка -->
<template>
  <div>Первый</div>
  <div>Второй</div>
</template>

<!-- Vue 3: работает -->
<template>
  <div>Первый</div>
  <div>Второй</div>
</template>
\`\`\`

### 4. Teleport
Перенос DOM-элементов в другое место (модалки в \`<body>\`):
\`\`\`vue
<Teleport to="body">
  <div class="modal">Модалка</div>
</Teleport>
\`\`\`

### 5. Suspense
Отображение fallback во время загрузки асинхронных компонентов:
\`\`\`vue
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Загрузка...</div>
  </template>
</Suspense>
\`\`\`

### 6. Улучшенная типизация TypeScript
- Встроенная поддержка TypeScript
- Макросы \`defineProps<T>()\`, \`defineEmits<T>()\`
- Generic-компоненты

### 7. Новые хуки жизненного цикла
| Vue 2 | Vue 3 |
|---|---|
| \`beforeDestroy\` | \`beforeUnmount\` |
| \`destroyed\` | \`unmounted\` |

### 8. Улучшенная производительность
- **Tree-shaking:** неиспользуемые функции удаляются при сборке
- **Быстрый виртуальный DOM:** оптимизированный алгоритм сравнения
- **Статический анализ:** Vue 3 определяет, какие элементы никогда не изменятся
- **Меньший размер:** ~41% меньше, чем Vue 2

### 9. Новые директивы и возможности
- **\`v-memo\`:** мемоизация частей шаблона
- **\`v-bind\` в \`<style>\`:** реактивные CSS-переменные
- **Множественные \`v-model\`:** на одном компоненте
- **Компонентные \`v-model\` модификаторы:** \`.trim\`, \`.number\`

### 10. Pinia вместо Vuex
- Официально рекомендуемый стейт-менеджер
- Проще синтаксис (нет мутаций)
- Лучшая TypeScript поддержка
- Меньший размер

### 11. Улучшенная работа с формами
\`\`\`vue
<!-- Vue 3: несколько v-model -->
<ChildComponent v-model:title="title" v-model:count="count" />

<!-- Vue 2: только один v-model -->
<ChildComponent :value="title" @input="title = $event" />
\`\`\`

### 12. Async компоненты
\`\`\`javascript
// Vue 3
const AsyncComp = defineAsyncComponent(() => import('./Comp.vue'))

// Vue 2
const AsyncComp = () => import('./Comp.vue')
\`\`\`

### Сводная таблица изменений

| Фича | Vue 2 | Vue 3 |
|---|---|---|
| **Реактивность** | \`Object.defineProperty\` | \`Proxy\` |
| **API** | Options API | Options + Composition API |
| **Корневой элемент** | Один | Несколько (Fragments) |
| **TypeScript** | Ограниченная | Отличная |
| **Размер** | ~33KB | ~19KB |
| **Стейт-менеджер** | Vuex | Pinia (рекомендуется) |
| **Teleport** | ❌ | ✅ |
| **Suspense** | ❌ | ✅ (экспериментальный) |

💡 **Для собеседования:** Vue 3 — это Composition API, новая реактивность на Proxy, Fragments, Teleport, Suspense, лучшая TypeScript поддержка, улучшенная производительность (tree-shaking, быстрый виртуальный DOM), Pinia вместо Vuex.`,
"shortAnswer": `Vue 3 — это Composition API, новая реактивность на Proxy, Fragments, Teleport, Suspense, лучшая TypeScript поддержка, улучшенная производительность (tree-shaking, быстрый виртуальный DOM), Pinia вместо Vuex.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `vue-2`,
"title": `Vue 2`,
"questions": [
{
"id": `2-middle-vue-2-1`,
"title": `Как работает реактивность в Vue 2 (Object.defineProperty)?`,
"fullAnswer": `## Механизм реактивности Vue 2

Vue 2 реализует реактивность через **\`Object.defineProperty\`** — метод, который позволяет определять getter и setter для свойств объекта. Это даёт возможность перехватывать операции чтения и записи.

## Как это работает под капотом

**1. Обход объекта и определение getter/setter:**

При создании экземпляра Vue проходит по всем свойствам объекта \`data\` и для каждого свойства определяет getter и setter:

\`\`\`javascript
// Упрощённая реализация того, что делает Vue 2
function defineReactive(obj, key, val) {
  const dep = new Dep() // коллекция подписчиков
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    
    get() {
      // Если есть активный Watcher — добавляем его в подписчики
      if (Dep.target) {
        dep.depend() // Watcher подписывается на это свойство
      }
      return val
    },
    
    set(newVal) {
      if (newVal === val) return
      val = newVal
      // Уведомляем всех подписчиков об изменении
      dep.notify()
    }
  })
}
\`\`\`

**2. Класс Dep (Dependency) — менеджер подписчиков:**

\`\`\`javascript
class Dep {
  constructor() {
    this.subscribers = new Set()
  }
  
  depend() {
    if (Dep.target) {
      this.subscribers.add(Dep.target)
    }
  }
  
  notify() {
    this.subscribers.forEach(watcher => {
      watcher.update()
    })
  }
}

Dep.target = null // глобальная ссылка на текущий Watcher
\`\`\`

**3. Класс Watcher — наблюдатель:**

\`\`\`javascript
class Watcher {
  constructor(vm, expression, callback) {
    this.vm = vm
    this.expression = expression
    this.callback = callback
    this.value = this.get()
  }
  
  get() {
    Dep.target = this // устанавливаем себя как активный Watcher
    const value = this.vm[this.expression] // читаем свойство → срабатывает getter
    Dep.target = null // сбрасываем
    return value
  }
  
  update() {
    const newValue = this.get()
    if (newValue !== this.value) {
      this.value = newValue
      this.callback.call(this.vm, newValue, this.value)
    }
  }
}
\`\`\`

**4. Полный пример работы:**

\`\`\`javascript
const data = { count: 0 }

// Vue делает свойства реактивными
defineReactive(data, 'count', data.count)

// Создаём Watcher (например, для computed или render-функции)
new Watcher(data, 'count', (newVal, oldVal) => {
  console.log(\`count изменился: \${oldVal} → \${newVal}\`)
  // здесь происходит перерисовка компонента
})

// При чтении свойства:
console.log(data.count) // getter → Dep.target добавлен в subscribers

// При записи:
data.count = 5 // setter → dep.notify() → все Watcher обновляются
// Вывод: "count изменился: 0 → 5"
\`\`\`

## Глубокая реактивность (вложенные объекты)

Vue 2 рекурсивно обходит вложенные объекты и делает каждое свойство реактивным:

\`\`\`javascript
function observe(value) {
  if (typeof value !== 'object' || value === null) return
  
  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

const data = {
  user: {
    name: 'John',
    address: { city: 'NY' }
  }
}

// Vue рекурсивно делает реактивными:
// data.user, data.user.name, data.user.address, data.user.address.city
\`\`\`

## Реактивность массивов

Массивы обрабатываются отдельно, потому что \`Object.defineProperty\` не может перехватить:
- Изменение по индексу: \`arr[0] = 5\`
- Изменение длины: \`arr.length = 0\`

**Решение Vue 2:** переопределение 7 методов массива:

\`\`\`javascript
const arrayMethods = Object.create(Array.prototype)

const methodsToPatch = [
  'push', 'pop', 'shift', 'unshift',
  'splice', 'sort', 'reverse'
]

methodsToPatch.forEach(method => {
  const original = Array.prototype[method]
  
  Object.defineProperty(arrayMethods, method, {
    value: function mutator(...args) {
      const result = original.apply(this, args)
      const ob = this.__ob__
      
      // Для push, unshift, splice — новые элементы нужно сделать реактивными
      let inserted
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args
          break
        case 'splice':
          inserted = args.slice(2)
          break
      }
      if (inserted) ob.observeArray(inserted)
      
      // Уведомляем подписчиков
      ob.dep.notify()
      return result
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
})
\`\`\`

## Ограничения подхода

1. **Нельзя отследить добавление нового свойства:**
\`\`\`javascript
const vm = new Vue({ data: { user: { name: 'John' } } })
vm.user.age = 30  // ❌ НЕ реактивно! age не было в data при инициализации
\`\`\`

2. **Нельзя отследить изменение по индексу массива:**
\`\`\`javascript
vm.items[0] = 'new'  // ❌ НЕ реактивно!
\`\`\`

3. **Нельзя отследить изменение длины массива:**
\`\`\`javascript
vm.items.length = 0  // ❌ НЕ реактивно!
\`\`\`

4. **Производительность:** при большом количестве свойств создаётся много getter/setter, что замедляет инициализацию.

5. **Нельзя использовать Proxy** (ограничение ES5).

## Решения ограничений

**Для объектов — \`Vue.set\` / \`this.$set\`:**
\`\`\`javascript
Vue.set(vm.user, 'age', 30)  // ✅ реактивно
// или
this.$set(this.user, 'age', 30)
\`\`\`

**Для массивов:**
\`\`\`javascript
// Способ 1: Vue.set
Vue.set(vm.items, 0, 'new')

// Способ 2: splice (переопределён Vue)
vm.items.splice(0, 1, 'new')
\`\`\`

## Сравнение с Vue 3

| Характеристика | Vue 2 (Object.defineProperty) | Vue 3 (Proxy) |
|---|---|---|
| Отслеживание добавления свойств | ❌ Нет | ✅ Да |
| Изменение по индексу массива | ❌ Нет | ✅ Да |
| Поддержка Map/Set | ❌ Нет | ✅ Да |
| Производительность при инициализации | Медленнее (рекурсивный обход) | Быстрее (ленивый Proxy) |
| Поддержка IE11 | ✅ Да | ❌ Нет |

💡 **Для собеседования:** Vue 2 использует \`Object.defineProperty\` для определения getter/setter на каждом свойстве \`data\`. При чтении свойства Watcher подписывается через \`Dep\`, при записи — \`Dep.notify()\` запускает обновление. Ограничения: нельзя отследить добавление новых свойств и изменение массива по индексу. Решения: \`Vue.set()\` и переопределённые методы массива (\`push\`, \`splice\` и т.д.).`,
"shortAnswer": `Vue 2 использует Object.defineProperty для определения getter/setter на каждом свойстве data. При чтении свойства Watcher подписывается через Dep, при записи — Dep.notify() запускает обновление. Ограничения: нельзя отследить добавление новых свойств и изменение массива по индексу. Решения: Vue.set() и переопределённые методы массива (push, splice и т.д.).`,
},
{
"id": `2-middle-vue-2-2`,
"title": `Почему во Vue 2 нельзя отслеживать добавление свойств объекта напрямую?`,
"fullAnswer": `## Причина ограничения

Проблема кроется в самом механизме **\`Object.defineProperty\`** — он может определить getter/setter **только для уже существующих свойств** объекта. Если свойство не существовало в момент инициализации реактивности, Vue о нём просто не знает.

## Что происходит при инициализации

Когда создаётся экземпляр Vue, он вызывает функцию \`observe()\` для объекта \`data\`:

\`\`\`javascript
// Упрощённо
function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data
  
  // Рекурсивно обходим все свойства и делаем их реактивными
  observe(data)
}

function observe(value) {
  // Если не объект — выходим
  if (!isObject(value)) return
  
  let ob = new Observer(value)
  return ob
}

class Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    
    // Обходим только СУЩЕСТВУЮЩИЕ ключи
    Object.keys(value).forEach(key => {
      defineReactive(value, key, value[key])
    })
  }
}
\`\`\`

**Ключевой момент:** \`Object.keys(value)\` возвращает только те ключи, которые существовали в момент вызова. Если позже добавить новое свойство — getter/setter для него не определён, и Vue не сможет отследить изменения.

## Пример проблемы

\`\`\`javascript
const vm = new Vue({
  data() {
    return {
      user: {
        name: 'John'  // ← это свойство стало реактивным
      }
    }
  }
})

// ✅ Работает — свойство уже было реактивным
vm.user.name = 'Jane'

// ❌ НЕ работает — свойство age не существовало при инициализации
vm.user.age = 30

// Vue не знает об age, getter/setter не определены
// Изменение не триггерит обновление компонента
\`\`\`

## Почему нельзя просто "доопределить" getter/setter?

Теоретически можно вызвать \`Object.defineProperty\` после добавления свойства, но это создаёт проблемы:

**1. Непредсказуемость:**
\`\`\`javascript
// Если бы Vue автоматически отслеживал добавление:
vm.user.age = 30  // когда должно сработать?
// Сразу? А если это временное свойство?
// Только при следующем рендере? Тогда теряется реактивность
\`\`\`

**2. Производительность:**
Пришлось бы использовать \`Proxy\` (недоступен в ES5) или \`Object.observe()\` (устарел и удалён из браузеров).

**3. Совместимость с IE11:**
Vue 2 поддерживает IE11, где нет \`Proxy\`. Единственный доступный механизм — \`Object.defineProperty\`, который работает только с существующими свойствами.

## Как Vue обнаруживает проблему

Vue добавляет к каждому реактивному объекту скрытое свойство \`__ob__\`:

\`\`\`javascript
class Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    
    // Делаем объект "наблюдаемым"
    def(value, '__ob__', this)
    
    // ...observe keys
  }
}
\`\`\`

При попытке добавить свойство можно проверить наличие \`__ob__\` и выдать предупреждение в dev-режиме:

\`\`\`javascript
// Vue предупреждает в консоли:
// "Avoid adding reactive properties to a Vue instance or its root $data "
// "at runtime - declare it upfront in the data option."
\`\`\`

## Решения

### 1. \`Vue.set\` / \`this.$set\`

\`\`\`javascript
// Глобальный API
Vue.set(vm.user, 'age', 30)

// Инстанс API
this.$set(this.user, 'age', 30)
\`\`\`

**Что делает \`Vue.set\` под капотом:**

\`\`\`javascript
function set(target, key, val) {
  // Если массив — используем splice
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  
  // Если свойство уже существует — просто обновляем
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  
  const ob = target.__ob__
  
  // Если объект не реактивный — просто присваиваем
  if (!ob) {
    target[key] = val
    return val
  }
  
  // ✅ Главное: делаем новое свойство реактивным!
  defineReactive(ob.value, key, val)
  
  // Уведомляем подписчиков
  ob.dep.notify()
  
  return val
}
\`\`\`

### 2. Замена всего объекта

\`\`\`javascript
// ❌ Плохо
this.user.age = 30

// ✅ Хорошо — создаём новый объект
this.user = {
  ...this.user,
  age: 30
}

// Или через Object.assign
this.user = Object.assign({}, this.user, { age: 30 })
\`\`\`

Поскольку \`user\` был реактивным свойством, его **замена** триггерит setter и обновляет компонент.

### 3. Предварительное объявление в \`data\`

\`\`\`javascript
data() {
  return {
    user: {
      name: 'John',
      age: null  // ← объявляем заранее, даже если значение неизвестно
    }
  }
}

// Потом можно безопасно присваивать
this.user.age = 30  // ✅ реактивно
\`\`\`

## Пример с массивом

Та же проблема с массивами — добавление по индексу не отслеживается:

\`\`\`javascript
data() {
  return {
    items: ['a', 'b', 'c']
  }
}

// ❌ Не реактивно
this.items[0] = 'x'

// ✅ Реактивно — через Vue.set
this.$set(this.items, 0, 'x')

// ✅ Реактивно — через splice (переопределён Vue)
this.items.splice(0, 1, 'x')
\`\`\`

## Почему в Vue 3 этой проблемы нет?

Vue 3 использует **\`Proxy\`**, который перехватывает **любые** операции с объектом, включая добавление новых свойств:

\`\`\`javascript
// Vue 3
const state = reactive({})
state.newProp = 'value'  // ✅ Proxy перехватывает set

// Proxy handler
const handler = {
  set(target, key, value) {
    const result = Reflect.set(target, key, value)
    trigger(target, key) // уведомляем подписчиков
    return result
  }
}
\`\`\`

\`Proxy\` работает на уровне всего объекта, а не отдельных свойств, поэтому ему не важно, существовало ли свойство ранее.

## Практические рекомендации

**Правила для Vue 2:**
1. Всегда объявляйте все свойства в \`data()\` заранее
2. Для динамических свойств используйте \`this.$set()\`
3. Для массивов используйте \`splice()\` или \`Vue.set()\`
4. При работе с формами и динамическими полями — используйте объект-обёртку

**Паттерн для динамических форм:**
\`\`\`javascript
data() {
  return {
    formData: {
      // Все возможные поля объявлены заранее
      name: '',
      email: '',
      phone: '',
      address: ''
    }
  }
}

// Или через фабрику
function createFormData() {
  return {
    name: '',
    email: '',
    // ...
  }
}
\`\`\`

💡 **Для собеседования:** Vue 2 не может отслеживать добавление свойств, потому что \`Object.defineProperty\` работает только с существующими свойствами. При инициализации Vue обходит \`Object.keys(data)\` и определяет getter/setter для каждого. Новые свойства появляются без getter/setter. Решения: \`Vue.set()\` (добавляет getter/setter динамически), замена всего объекта, или предварительное объявление в \`data\`. В Vue 3 эта проблема решена через \`Proxy\`.`,
"shortAnswer": `Vue 2 не может отслеживать добавление свойств, потому что Object.defineProperty работает только с существующими свойствами. При инициализации Vue обходит Object.keys(data) и определяет getter/setter для каждого. Новые свойства появляются без getter/setter. Решения: Vue.set() (добавляет getter/setter динамически), замена всего объекта, или предварительное объявление в data. В Vue 3 эта проблема решена через Proxy.`,
},
],
},
{
"id": `vue-3`,
"title": `Vue 3`,
"questions": [
{
"id": `2-middle-vue-3-1`,
"title": `Options API vs Composition API: преимущества Composition API.`,
"fullAnswer": `**Composition API** — это способ организации логики компонента через функции, а не через опции. Появился во Vue 3 как альтернатива Options API.

**Ключевые преимущества Composition API:**

**1. Логическая группировка кода:**
В Options API код разбит по типам опций (\`data\`, \`methods\`, \`computed\`), что затрудняет понимание связанной логики. В Composition API вся логика одной фичи находится рядом.

\`\`\`javascript
// Options API — логика размазана по опциям
export default {
  data() { return { count: 0, user: null } },
  methods: {
    increment() { this.count++ },
    async fetchUser() { /* ... */ }
  },
  computed: { doubleCount() { return this.count * 2 } }
}

// Composition API — вся логика счётчика вместе
const count = ref(0)
const doubleCount = computed(() => count.value * 2)
function increment() { count.value++ }

// Вся логика пользователя — в другом месте
const user = ref(null)
async function fetchUser() { /* ... */ }
\`\`\`

**2. Переиспользование логики (композируемые функции):**
В Options API для переиспользования использовались миксины (mixins), которые имеют проблемы:
- Конфликты имён свойств
- Неявные зависимости между миксинами
- Плохая поддержка TypeScript

В Composition API логика выносится в **композируемые функции** (composables):

\`\`\`javascript
// useCounter.js
export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}

// В компоненте
const { count, increment } = useCounter()
\`\`\`

**3. Лучшая поддержка TypeScript:**
Composition API использует обычные функции и переменные, что идеально ложится на систему типов TypeScript. Options API требует сложных типов (\`PropType\`, \`DefineComponent\`).

**4. Меньший размер бандла (tree-shaking):**
Функции Composition API можно импортировать выборочно. Unused функции удаляются при сборке. Options API всегда включает весь рантайм.

**5. Гибкость и контроль:**
- Нет неявного \`this\` — меньше ошибок
- Явное управление реактивностью через \`ref\`/\`reactive\`
- Возможность создавать реактивные значения вне компонентов

**Когда использовать что:**
- **Composition API** — для новых проектов, сложной логики, переиспользуемых хуков
- **Options API** — для простых компонентов, миграции со Vue 2, команд с разным опытом

💡 **Для собеседования:** Composition API решает проблемы миксинов, улучшает TypeScript-поддержку, позволяет группировать код по функциональности и переиспользовать логику через композируемые функции.`,
"shortAnswer": `Composition API решает проблемы миксинов, улучшает TypeScript-поддержку, позволяет группировать код по функциональности и переиспользовать логику через композируемые функции.`,
},
{
"id": `2-middle-vue-3-2`,
"title": `Как работает реактивность в Vue 3 через Proxy?`,
"fullAnswer": `Vue 3 использует **Proxy** вместо \`Object.defineProperty\` (как во Vue 2) для реализации реактивности. Это решает многие ограничения Vue 2.

**Как работает Proxy:**
\`\`\`javascript
const target = { count: 0, user: { name: 'John' } }

const handler = {
  get(target, key, receiver) {
    // Отслеживаем чтение свойства (track)
    track(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    const oldValue = target[key]
    const result = Reflect.set(target, key, value, receiver)
    if (oldValue !== value) {
      // Уведомляем подписчиков об изменении (trigger)
      trigger(target, key)
    }
    return result
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key)
    trigger(target, key)
    return result
  }
}

const reactive = new Proxy(target, handler)
\`\`\`

**Преимущества перед Vue 2:**

**1. Отслеживание добавления/удаления свойств:**
\`\`\`javascript
const state = reactive({})
state.newProp = 'value' // Vue 2: не отслеживается, Vue 3: отслеживается ✅
delete state.newProp     // Vue 2: не отслеживается, Vue 3: отслеживается ✅
\`\`\`

**2. Отслеживание изменений массива по индексу:**
\`\`\`javascript
const arr = reactive([1, 2, 3])
arr[0] = 10        // Vue 2: не отслеживается, Vue 3: отслеживается ✅
arr.length = 2     // Vue 2: не отслеживается, Vue 3: отслеживается ✅
\`\`\`

**3. Поддержка Map и Set:**
\`\`\`javascript
const map = reactive(new Map())
map.set('key', 'value') // отслеживается ✅

const set = reactive(new Set())
set.add('item')         // отслеживается ✅
\`\`\`

**4. Глубокая реактивность «из коробки»:**
Vue 3 автоматически делает вложенные объекты реактивными через ленивое оборачивание в Proxy при обращении к свойству.

**Как работает track/trigger:**
- **track** — при чтении свойства Vue запоминает, какой эффект (computed, watch, render) его использует
- **trigger** — при записи Vue запускает все эффекты, которые зависят от этого свойства

**Ограничения Proxy:**
- Не работает в IE11 (нет поддержки Proxy)
- Сравнение через \`===\` может не работать (нужно использовать \`toRaw\`)

💡 **Для собеседования:** Vue 3 использует Proxy для перехвата операций get/set/delete. Это позволяет отслеживать добавление/удаление свойств, изменения массивов по индексу и работу с Map/Set. Система основана на track (отслеживание чтения) и trigger (уведомление об изменении).`,
"shortAnswer": `Vue 3 использует Proxy для перехвата операций get/set/delete. Это позволяет отслеживать добавление/удаление свойств, изменения массивов по индексу и работу с Map/Set. Система основана на track (отслеживание чтения) и trigger (уведомление об изменении).`,
},
{
"id": `2-middle-vue-3-3`,
"title": `Чем watch отличается от watchEffect?`,
"fullAnswer": `**watch** и **watchEffect** — два способа реагировать на изменения реактивных данных. У них разные подходы к отслеживанию зависимостей.

**watch — явные зависимости:**
\`\`\`javascript
import { ref, watch } from 'vue'

const count = ref(0)
const name = ref('John')

// Указываем зависимости явно
watch(count, (newVal, oldVal) => {
  console.log(\`Count изменился: \${oldVal} → \${newVal}\`)
})

// Несколько зависимостей
watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log('Что-то изменилось')
})

// С опциями
watch(count, handler, {
  immediate: true,  // вызвать сразу
  deep: true,       // глубокое отслеживание
  flush: 'post'     // 'pre' | 'post' | 'sync'
})
\`\`\`

**watchEffect — автоматические зависимости:**
\`\`\`javascript
import { ref, watchEffect } from 'vue'

const count = ref(0)
const name = ref('John')

// Vue сам отслеживает, какие реактивные переменные используются
watchEffect(() => {
  console.log(\`Count: \${count.value}, Name: \${name.value}\`)
  // Зависит от count и name автоматически
})
\`\`\`

**Ключевые различия:**

| Характеристика | watch | watchEffect |
|---|---|---|
| **Зависимости** | Явные (первый аргумент) | Автоматические (внутри функции) |
| **Запуск** | Ленивый (только при изменении) | Сразу при создании |
| **Доступ к значениям** | \`newVal\`, \`oldVal\` | Через \`.value\` внутри функции |
| **Глубокое отслеживание** | Нужно \`deep: true\` для объектов | Автоматически |
| **Остановка** | Возвращает функцию stop | Возвращает функцию stop |

**Когда что использовать:**

**watch:**
- Когда нужен доступ к старому и новому значению
- Когда нужно отслеживать конкретную переменную
- Когда не нужен немедленный запуск
- Для дорогих операций (API-запросы)

\`\`\`javascript
watch(userId, async (newId) => {
  const data = await fetchUser(newId)
  userData.value = data
})
\`\`\`

**watchEffect:**
- Когда нужно синхронизировать несколько значений
- Для побочных эффектов, зависящих от реактивных данных
- Когда нужен немедленный запуск

\`\`\`javascript
watchEffect(() => {
  document.title = \`\${count.value} - \${name.value}\`
})
\`\`\`

**Остановка watcher:**
\`\`\`javascript
const stop = watchEffect(() => { /* ... */ })
stop() // остановить отслеживание

// Автоматическая остановка при unmount компонента
onUnmounted(() => stop())
\`\`\`

💡 **Для собеседования:** \`watch\` требует явного указания зависимостей и не запускается сразу. \`watchEffect\` автоматически отслеживает зависимости внутри функции и запускается немедленно. Используйте \`watch\` для API-запросов, \`watchEffect\` для синхронизации побочных эффектов.`,
"shortAnswer": `watch требует явного указания зависимостей и не запускается сразу. watchEffect автоматически отслеживает зависимости внутри функции и запускается немедленно. Используйте watch для API-запросов, watchEffect для синхронизации побочных эффектов.`,
},
{
"id": `2-middle-vue-3-4`,
"title": `Как работают defineProps, defineEmits, defineExpose, defineModel?`,
"fullAnswer": `Это **компиляторные макросы** \`<script setup>\`, доступные без импорта. Они заменяют опции \`props\`, \`emits\`, \`expose\` из Options API.

**defineProps — объявление входных данных:**
\`\`\`vue
<script setup>
// Простое объявление типов
const props = defineProps({
  title: String,
  count: { type: Number, default: 0 }
})

// С TypeScript (рекомендуется)
const props = defineProps<{
  title: string
  count?: number
}>()

// Значения по умолчанию с withDefaults
const props = withDefaults(defineProps<{
  title: string
  count?: number
}>(), {
  count: 0
})

// Использование
console.log(props.title)
</script>
\`\`\`

**defineEmits — объявление событий:**
\`\`\`vue
<script setup>
// Простое объявление
const emit = defineEmits(['change', 'submit'])

// С TypeScript и валидацией
const emit = defineEmits<{
  change: [value: string]          // имя события и типы аргументов
  submit: [payload: { id: number }] // кортеж аргументов
}>()

// Вызов событий
emit('change', 'new value')
emit('submit', { id: 1 })
</script>
\`\`\`

**defineExpose — явное раскрытие свойств:**
По умолчанию компоненты в \`<script setup>\` **закрыты** (ничего не раскрывается родителю). \`defineExpose\` явно указывает, что доступно через \`$refs\`.

\`\`\`vue
<!-- Child.vue -->
<script setup>
const count = ref(0)
const increment = () => count.value++

// Раскрываем только нужное
defineExpose({
  count,
  increment
})
</script>

<!-- Parent.vue -->
<template>
  <Child ref="child" />
</template>

<script setup>
const child = ref()

onMounted(() => {
  child.value.increment() // ✅ работает
  console.log(child.value.count) // ✅ работает
})
</script>
\`\`\`

**defineModel (Vue 3.4+) — упрощённый v-model:**
До Vue 3.4 для кастомного \`v-model\` нужно было вручную объявлять prop и emit. \`defineModel\` делает это автоматически.

\`\`\`vue
<!-- Child.vue -->
<script setup>
// Двустороннее связывание
const modelValue = defineModel() // по умолчанию
const count = defineModel('count', { type: Number, default: 0 })

// Использование
modelValue.value = 'new value' // автоматически эмитит update:modelValue
</script>

<!-- Parent.vue -->
<template>
  <Child v-model="parentValue" />
  <Child v-model:count="parentCount" />
</template>
\`\`\`

**Сравнение подходов:**
\`\`\`javascript
// До Vue 3.4 (ручной v-model)
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function update(val) {
  emit('update:modelValue', val)
}

// Vue 3.4+ (defineModel)
const modelValue = defineModel()
modelValue.value = 'new' // автоматически эмитит
\`\`\`

💡 **Для собеседования:** \`defineProps\`/\`defineEmits\` — макросы для объявления props и событий в \`<script setup>\`. \`defineExpose\` явно раскрывает свойства родителю (по умолчанию всё закрыто). \`defineModel\` (Vue 3.4+) упрощает работу с \`v-model\` на кастомных компонентах.`,
"shortAnswer": `defineProps/defineEmits — макросы для объявления props и событий в <script setup>. defineExpose явно раскрывает свойства родителю (по умолчанию всё закрыто). defineModel (Vue 3.4+) упрощает работу с v-model на кастомных компонентах.`,
},
{
"id": `2-middle-vue-3-5`,
"title": `Что такое toRef, toRefs, shallowRef, shallowReactive, customRef?`,
"fullAnswer": `Это различные способы управления реактивностью во Vue 3, каждый со своей областью применения.

**toRef — создание реактивной ссылки на свойство объекта:**
\`\`\`javascript
const state = reactive({ count: 0, name: 'John' })

// Создаём ref, который ссылается на state.count
const countRef = toRef(state, 'count')

// Изменение ref меняет исходный объект
countRef.value = 5
console.log(state.count) // 5

// Изменение объекта меняет ref
state.count = 10
console.log(countRef.value) // 10
\`\`\`

**toRefs — деструктуризация с сохранением реактивности:**
\`\`\`javascript
const state = reactive({ count: 0, name: 'John' })

// ❌ Плохо: теряется реактивность
const { count, name } = state

// ✅ Хорошо: сохраняем реактивность
const { count, name } = toRefs(state)

// Теперь count и name — это ref
console.log(count.value) // 0
count.value = 5
console.log(state.count) // 5
\`\`\`

**shallowRef — реактивность только на верхнем уровне:**
\`\`\`javascript
const state = shallowRef({ count: 0, nested: { value: 1 } })

// ✅ Отслеживается
state.value = { count: 1, nested: { value: 2 } }

// ❌ Не отслеживается (вложенные изменения)
state.value.count = 5        // не триггерит обновление
state.value.nested.value = 2 // не триггерит обновление

// Принудительный триггер
triggerRef(state)
\`\`\`

**shallowReactive — реактивность только верхнего уровня объекта:**
\`\`\`javascript
const state = shallowReactive({
  count: 0,
  nested: { value: 1 }
})

// ✅ Отслеживается
state.count = 5

// ❌ Не отслеживается
state.nested.value = 2
\`\`\`

**Когда использовать shallow:**
- Большие объекты, которые редко меняются целиком
- Внешние библиотеки (например, классы сторонних библиотек)
- Оптимизация производительности

**customRef — кастомная реактивность:**
Позволяет полностью контролировать track и trigger.

\`\`\`javascript
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => ({
    get() {
      track() // отмечаем зависимость
      return value
    },
    set(newValue) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        value = newValue
        trigger() // уведомляем об изменении
      }, delay)
    }
  }))
}

// Использование
const searchQuery = useDebouncedRef('', 300)
\`\`\`

**Примеры использования customRef:**
- Debounce/throttle для input
- Интеграция с внешними системами (localStorage, URL)
- Ленивая загрузка данных

\`\`\`javascript
// Ref, синхронизированный с localStorage
function useLocalStorage(key, defaultValue) {
  return customRef((track, trigger) => ({
    get() {
      track()
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : defaultValue
    },
    set(value) {
      localStorage.setItem(key, JSON.stringify(value))
      trigger()
    }
  }))
}
\`\`\`

💡 **Для собеседования:** \`toRef\`/\`toRefs\` — для работы со свойствами реактивных объектов. \`shallowRef\`/\`shallowReactive\` — для оптимизации (реактивность только верхнего уровня). \`customRef\` — полный контроль над track/trigger для кастомной логики (debounce, localStorage).`,
"shortAnswer": `toRef/toRefs — для работы со свойствами реактивных объектов. shallowRef/shallowReactive — для оптимизации (реактивность только верхнего уровня). customRef — полный контроль над track/trigger для кастомной логики (debounce, localStorage).`,
},
{
"id": `2-middle-vue-3-6`,
"title": `Как работает система зависимостей (deps tracking) и effectScope?`,
"fullAnswer": `## Система зависимостей (Dependency Tracking)

Vue 3 использует систему **track/trigger** для автоматического отслеживания зависимостей между реактивными данными и эффектами (computed, watch, render).

**Как это работает:**

\`\`\`javascript
// Внутренняя структура Vue
const targetMap = new WeakMap() // Map<object, Map<key, Set<effect>>>

function track(target, key) {
  if (!activeEffect) return
  
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  
  dep.add(activeEffect) // добавляем текущий эффект в зависимые
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect()) // запускаем все зависимые эффекты
  }
}
\`\`\`

**Пример работы:**
\`\`\`javascript
const count = ref(0)
const double = computed(() => count.value * 2)

// При первом чтении double:
// 1. computed становится activeEffect
// 2. Чтение count.value вызывает track(count, 'value')
// 3. computed добавляется в Set зависимых эффектов count

// При изменении count:
count.value = 5
// 1. Вызывается trigger(count, 'value')
// 2. Все эффекты из Set (включая computed) запускаются
// 3. double пересчитывается
\`\`\`

## effectScope

**effectScope** позволяет группировать эффекты (watch, computed) и управлять их жизненным циклом централизованно.

\`\`\`javascript
import { effectScope, ref, watch, computed } from 'vue'

const scope = effectScope()

scope.run(() => {
  const count = ref(0)
  
  // Все эффекты внутри scope связаны с ним
  watch(count, () => console.log('changed'))
  const double = computed(() => count.value * 2)
  
  return { count, double }
})

// Остановка всех эффектов сразу
scope.stop()
\`\`\`

**Зачем нужен effectScope:**

**1. Переиспользуемая логика вне компонентов:**
\`\`\`javascript
// useCounter.js
export function useCounter() {
  const scope = effectScope()
  
  const count = ref(0)
  const double = computed(() => count.value * 2)
  
  scope.run(() => {
    watch(count, (val) => {
      console.log('Count changed:', val)
    })
  })
  
  return {
    count,
    double,
    dispose: () => scope.stop() // ручная очистка
  }
}
\`\`\`

**2. Интеграция с внешними системами:**
\`\`\`javascript
// Интеграция с роутером
const routerScope = effectScope()

routerScope.run(() => {
  watch(() => route.params.id, (newId) => {
    loadUser(newId)
  })
})

// При уничтожении роутера
routerScope.stop()
\`\`\`

**3. Автоматическая очистка в компонентах:**
Внутри \`<script setup>\` Vue автоматически создаёт effectScope для компонента и останавливает его при unmount.

**Методы effectScope:**
\`\`\`javascript
const scope = effectScope(detached = false)

scope.run(fn)        // выполнить функцию в контексте scope
scope.stop()         // остановить все эффекты
scope.effects        // массив всех эффектов
scope.scopes         // вложенные scopes
\`\`\`

💡 **Для собеседования:** Dependency tracking основан на track (регистрация зависимости при чтении) и trigger (запуск эффектов при записи). effectScope группирует эффекты для централизованного управления жизненным циклом, особенно полезен вне компонентов.`,
"shortAnswer": `Dependency tracking основан на track (регистрация зависимости при чтении) и trigger (запуск эффектов при записи). effectScope группирует эффекты для централизованного управления жизненным циклом, особенно полезен вне компонентов.`,
},
{
"id": `2-middle-vue-3-7`,
"title": `Что такое композаблы (composables)? Как их проектировать и переиспользовать?`,
"fullAnswer": `**Композаблы (composables)** — это функции, которые инкапсулируют и переиспользуют логику с состоянием во Vue 3. Аналог миксинов из Vue 2, но без их недостатков.

**Базовый пример:**
\`\`\`javascript
// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const double = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = initialValue
  }
  
  return {
    count,
    double,
    increment,
    decrement,
    reset
  }
}
\`\`\`

**Использование в компоненте:**
\`\`\`vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, double, increment } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">+</button>
  </div>
</template>
\`\`\`

**Правила проектирования композаблов:**

**1. Именование:**
- Всегда начинайте с \`use\` (например, \`useCounter\`, \`useFetch\`)
- Это соглашение помогает отличить композаблы от обычных функций

**2. Возврат реактивных данных:**
- Возвращайте \`ref\`/\`reactive\`, а не сырые значения
- Это сохраняет реактивность при деструктуризации

\`\`\`javascript
// ❌ Плохо: теряется реактивность
export function useCounter() {
  let count = 0
  return { count }
}

// ✅ Хорошо
export function useCounter() {
  const count = ref(0)
  return { count }
}
\`\`\`

**3. Параметры для гибкости:**
\`\`\`javascript
export function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  async function execute() {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      })
      
      if (!response.ok) throw new Error('Network error')
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  // Автозагрузка если нужно
  if (options.immediate !== false) {
    execute()
  }
  
  return { data, error, loading, execute }
}
\`\`\`

**4. Композиция композаблов:**
Композаблы могут использовать другие композаблы:

\`\`\`javascript
export function useUser(id) {
  const { data, error, loading } = useFetch(\`/api/users/\${id}\`)
  
  const fullName = computed(() => {
    if (!data.value) return ''
    return \`\${data.value.firstName} \${data.value.lastName}\`
  })
  
  return { data, error, loading, fullName }
}
\`\`\`

**5. Очистка ресурсов:**
Используйте \`onScopeDispose\` для очистки при уничтожении:

\`\`\`javascript
export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  
  // Очистка при unmount
  onScopeDispose(() => {
    window.removeEventListener('mousemove', update)
  })
  
  return { x, y }
}
\`\`\`

**Популярные примеры композаблов:**
- \`useFetch\` / \`useAxios\` — HTTP-запросы
- \`useLocalStorage\` — синхронизация с localStorage
- \`useDebounce\` / \`useThrottle\` — оптимизация событий
- \`useWindowSize\` — размер окна
- \`useDark\` — тёмная тема
- \`useRouter\` / \`useRoute\` — встроенные композаблы Vue Router

💡 **Для собеседования:** Композаблы — функции с префиксом \`use\`, возвращающие реактивные данные и методы. Они решают проблемы миксинов: нет конфликтов имён, явные зависимости, отличная TypeScript-поддержка. Правила: именование с \`use\`, возврат ref/reactive, очистка через \`onScopeDispose\`.`,
"shortAnswer": `Композаблы — функции с префиксом use, возвращающие реактивные данные и методы. Они решают проблемы миксинов: нет конфликтов имён, явные зависимости, отличная TypeScript-поддержка. Правила: именование с use, возврат ref/reactive, очистка через onScopeDispose.`,
},
{
"id": `2-middle-vue-3-8`,
"title": `Что такое provide / inject? Как написать кастомную директиву?`,
"fullAnswer": `## provide / inject

Механизм **Dependency Injection** во Vue для передачи данных через несколько уровней компонентов без пропсов.

**Базовое использование:**
\`\`\`vue
<!-- Родитель (предоставляет данные) -->
<script setup>
import { provide, ref } from 'vue'

const theme = ref('light')
const user = ref({ name: 'John' })

// Предоставляем данные
provide('theme', theme)
provide('user', user)

// С TypeScript (InjectionKey для типизации)
import { InjectionKey, Ref } from 'vue'

export const themeKey: InjectionKey<Ref<string>> = Symbol('theme')
provide(themeKey, theme)
</script>
\`\`\`

\`\`\`vue
<!-- Глубокий потомок (получает данные) -->
<script setup>
import { inject } from 'vue'
import { themeKey } from './parent.vue'

// Получаем данные
const theme = inject('theme', 'light') // со значением по умолчанию
const user = inject('user')

// С типизацией
const theme = inject(themeKey, ref('light'))
</script>
\`\`\`

**Когда использовать:**
- Глубокая вложенность компонентов (избегание prop drilling)
- Глобальные настройки (тема, локаль, авторизация)
- Плагины и библиотеки

**Реактивность:**
- Если передать \`ref\`/\`reactive\`, потомки получат реактивные данные
- Изменения у родителя автоматически отражаются у потомков

\`\`\`javascript
// Родитель
const count = ref(0)
provide('count', count)

// Потомок
const count = inject('count')
count.value++ // изменяет значение у родителя!
\`\`\`

**readonly для защиты:**
\`\`\`javascript
import { readonly } from 'vue'

provide('user', readonly(user)) // потомки не могут изменить
\`\`\`

---

## Кастомные директивы

Директивы — это способ добавить низкоуровневое поведение DOM-элементам.

**Локальная директива (в компоненте):**
\`\`\`vue
<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus>
</template>
\`\`\`

**Глобальная директива:**
\`\`\`javascript
// main.js
const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
\`\`\`

**Полный набор хуков (Vue 3):**
\`\`\`javascript
const vMyDirective = {
  // Вызывается до применения атрибутов и слушателей
  created(el, binding, vnode) {
    console.log('created')
  },
  
  // Вызывается перед монтированием элемента
  beforeMount(el, binding, vnode) {
    console.log('beforeMount')
  },
  
  // Вызывается при монтировании (элемент доступен в DOM)
  mounted(el, binding, vnode) {
    console.log('mounted')
    el.focus()
  },
  
  // Вызывается перед обновлением компонента
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log('beforeUpdate')
  },
  
  // Вызывается после обновления компонента
  updated(el, binding, vnode, prevVnode) {
    console.log('updated')
  },
  
  // Вызывается перед удалением элемента
  beforeUnmount(el, binding, vnode) {
    console.log('beforeUnmount')
  },
  
  // Вызывается при удалении элемента
  unmounted(el, binding, vnode) {
    console.log('unmounted')
    // Очистка: удаление слушателей событий
  }
}
\`\`\`

**Объект binding:**
\`\`\`javascript
{
  value: 'Hello',        // значение директивы
  oldValue: 'Prev',      // предыдущее значение (только в update)
  arg: 'foo',            // аргумент (v-my-dir:foo)
  modifiers: { bar: true }, // модификаторы (v-my-dir.bar)
  instance: null,        // экземпляр компонента
  dir: { /* объект директивы */ }
}
\`\`\`

**Практический пример — клик вне элемента:**
\`\`\`javascript
export const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event) // вызываем переданную функцию
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
\`\`\`

\`\`\`vue
<template>
  <div v-click-outside="handleClickOutside">
    Кликни вне этого элемента
  </div>
</template>
\`\`\`

💡 **Для собеседования:** \`provide/inject\` — для передачи данных через уровни компонентов (избегание prop drilling). Кастомные директивы — для низкоуровневой работы с DOM. Хуки директив: \`mounted\` (элемент в DOM), \`updated\` (после обновления), \`unmounted\` (очистка).`,
"shortAnswer": `provide/inject — для передачи данных через уровни компонентов (избегание prop drilling). Кастомные директивы — для низкоуровневой работы с DOM. Хуки директив: mounted (элемент в DOM), updated (после обновления), unmounted (очистка).`,
},
{
"id": `2-middle-vue-3-9`,
"title": `Что такое v-memo, v-bind в <style>, defineSlots, generic-компоненты?`,
"fullAnswer": `## v-memo (Vue 3.2+)

**\`v-memo\`** — директива для **мемоизации** (кэширования) части шаблона. Она кэширует результат рендера и пропускает обновление, если зависимости не изменились.

**Как работает:**
\`\`\`vue
<template>
  <div v-memo="[selectedItem.id]">
    <ProductCard :product="selectedItem" />
    <!-- Этот блок не перерендерится, пока id не изменится -->
  </div>
</template>
\`\`\`

Vue сравнивает значения в массиве зависимостей с предыдущим рендером. Если все значения совпадают — блок пропускается.

**Оптимизация больших списков:**
\`\`\`vue
<template>
  <div v-for="item in list" :key="item.id" 
       v-memo="[item.id, item.selected]">
    <HeavyComponent :item="item" />
  </div>
</template>
\`\`\`

**Когда использовать:**
- Тяжёлые компоненты в больших списках (тысячи элементов)
- Когда рендер дорогой, а данные меняются редко
- Для оптимизации производительности в критичных местах

**Когда НЕ использовать:**
- Для простых компонентов (оверхед на сравнение массива)
- Когда данные часто меняются (мемоизация не поможет)
- Без измерений производительности (premature optimization)

**Пустой массив = всегда мемоизировать:**
\`\`\`vue
<div v-memo="[]">Этот блок отрендерится только один раз</div>
\`\`\`

---

## v-bind в &lt;style&gt; (CSS-реактивность, Vue 3.2+)

Позволяет использовать **реактивные переменные** напрямую в CSS через специальные CSS-переменные.

**Базовый пример:**
\`\`\`vue
<script setup>
import { ref } from 'vue'

const theme = ref({
  color: 'red',
  fontSize: '16px',
  bgColor: '#f0f0f0'
})
</script>

<template>
  <div class="text">Привет</div>
  <button @click="theme.color = 'blue'">Сменить цвет</button>
</template>

<style scoped>
.text {
  color: v-bind('theme.color');
  font-size: v-bind('theme.fontSize');
  background-color: v-bind('theme.bgColor');
}
</style>
\`\`\`

**Как это работает под капотом:**
1. Vue анализирует \`v-bind()\` в \`<style scoped>\`
2. Генерирует уникальные CSS-переменные: \`--xxxxx-color\`, \`--xxxxx-fontSize\`
3. При изменении реактивных данных обновляет значения CSS-переменных через inline-стили на корневом элементе компонента

**Результат в DOM:**
\`\`\`html
<div class="text" style="--xxxxx-color: red; --xxxxx-fontSize: 16px;">
  Привет
</div>
\`\`\`

**Важные ограничения:**
- Работает **только** в \`<style scoped>\`
- Нельзя использовать в глобальных \`<style>\`
- Значения должны быть валидными CSS-значениями (строки)
- Для чисел нужно добавлять единицы: \`v-bind('fontSize + "px"')\`

**Пример с вычисляемыми значениями:**
\`\`\`vue
<script setup>
const baseSize = ref(16)
const scale = ref(1.5)
</script>

<style scoped>
.title {
  font-size: v-bind('baseSize * scale + "px"');
}
</style>
\`\`\`

**Практическое применение:**
- Динамические темы (light/dark mode)
- Анимации через CSS с реактивными значениями
- Компоненты с настраиваемыми размерами/цветами

---

## defineSlots (Vue 3.3+)

Макрос для **типизации слотов** в \`<script setup>\` с TypeScript. Заменяет неявную типизацию \`$slots\`.

**Базовая типизация:**
\`\`\`vue
<script setup lang="ts">
const slots = defineSlots<{
  default(props: { item: User }): any
  header(props: { title: string }): any
  footer?(): any  // опциональный слот
}>()
</script>

<template>
  <header>
    <slot name="header" :title="pageTitle" />
  </header>
  <main>
    <slot :item="currentUser" />
  </main>
  <footer v-if="$slots.footer">
    <slot name="footer" />
  </footer>
</template>
\`\`\`

**Проверка наличия слота:**
\`\`\`vue
<template>
  <!-- $slots доступен в template -->
  <div v-if="$slots.header" class="header-wrapper">
    <slot name="header" :title="title" />
  </div>
  
  <div v-else class="default-header">
    <h1>{{ title }}</h1>
  </div>
</template>
\`\`\`

**Типизация с дженериками:**
\`\`\`vue
<script setup lang="ts" generic="T extends { id: number }">
defineSlots<{
  default(props: { item: T }): any
  empty(): any
}>()
</script>
\`\`\`

**До Vue 3.3** приходилось использовать \`$slots\` без типизации:
\`\`\`vue
<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()
// slots.header — тип any, без автодополнения
</script>
\`\`\`

---

## Generic-компоненты (Vue 3.3+)

Позволяют создавать **типизированные компоненты с дженериками** через атрибут \`generic\` в \`<script setup>\`.

**Базовый пример — универсальный список:**
\`\`\`vue
<!-- List.vue -->
<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  renderItem: (item: T) => string
}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="(item as any).id">
      {{ renderItem(item) }}
    </li>
  </ul>
</template>
\`\`\`

**Использование с автоматическим выводом типа:**
\`\`\`vue
<template>
  <!-- TypeScript сам выводит T = User -->
  <List
    :items="users"
    :render-item="(user) => user.name"
  />
</template>

<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
]
</script>
\`\`\`

**Явное указание типа:**
\`\`\`vue
<List<number>
  :items="[1, 2, 3]"
  :render-item="(n) => n.toString()"
/>
\`\`\`

**Несколько дженериков:**
\`\`\`vue
<script setup lang="ts" generic="T extends { id: number }, K">
defineProps<{
  items: T[]
  transform: (item: T) => K
}>()
</script>
\`\`\`

**Пример — форма с типизированными данными:**
\`\`\`vue
<!-- FormField.vue -->
<script setup lang="ts" generic="T">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: T
  label: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

const internalValue = ref<T>(props.modelValue)
</script>

<template>
  <label>{{ label }}</label>
  <input 
    :value="internalValue" 
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value as unknown as T)"
  >
</template>
\`\`\`

**Использование:**
\`\`\`vue
<FormField<string>
  v-model="username"
  label="Имя пользователя"
/>

<FormField<number>
  v-model="age"
  label="Возраст"
/>
\`\`\`

**Ограничения generic-компонентов:**
- Работают только в \`<script setup>\`
- Нельзя использовать с Options API
- Сложные дженерики могут ухудшать автодополнение в IDE
- \`as any\` иногда нужен для \`:key\` в \`v-for\`

---

💡 **Для собеседования:**

- **\`v-memo\`** — мемоизация частей шаблона. Принимает массив зависимостей. Если значения не изменились — блок не перерендеривается. Полезно для тяжёлых компонентов в больших списках.

- **\`v-bind\` в \`<style>\`** — реактивные CSS-переменные. Vue генерирует уникальные переменные и обновляет их при изменении данных. Работает только в \`<style scoped>\`.

- **\`defineSlots\`** — макрос для типизации слотов в \`<script setup>\`. Даёт автодополнение и проверку типов для props слотов. Позволяет проверять наличие слота через \`$slots\`.

- **Generic-компоненты** (\`generic="T"\`) — типизированные переиспользуемые компоненты. TypeScript автоматически выводит тип из переданных props. Полезно для универсальных компонентов (списки, таблицы, формы).`,
"shortAnswer": `v-memo — мемоизация частей шаблона. Принимает массив зависимостей. Если значения не изменились — блок не перерендеривается. Полезно для тяжёлых компонентов в больших списках.`,
},
{
"id": `2-middle-vue-3-10`,
"title": `Что такое useTemplateRef, useId для accessibility?`,
"fullAnswer": `## useTemplateRef (Vue 3.5+)

Новый API для получения ссылок на DOM-элементы и дочерние компоненты в \`<script setup>\`. Заменяет старый подход с \`ref\` атрибутом.

**Старый подход (до Vue 3.5):**
\`\`\`vue
<template>
  <input ref="inputRef">
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputRef.value?.focus()
})
</script>
\`\`\`

**Новый подход с useTemplateRef:**
\`\`\`vue
<template>
  <input :ref="inputRef">
  <ChildComponent :ref="childRef" />
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')
const childRef = useTemplateRef('childRef')

onMounted(() => {
  inputRef.value?.focus()
  childRef.value?.someMethod()
})
</script>
\`\`\`

**Преимущества:**
- Явное разделение между реактивными данными и ссылками на шаблон
- Лучшая типизация
- Более понятный код

**Работа с v-for:**
\`\`\`vue
<template>
  <div v-for="item in items" :key="item.id">
    <input :ref="(el) => setInputRef(el, item.id)">
  </div>
</template>

<script setup>
const inputRefs = new Map<number, HTMLInputElement>()

function setInputRef(el, id) {
  if (el) {
    inputRefs.set(id, el)
  } else {
    inputRefs.delete(id)
  }
}
</script>
\`\`\`

---

## useId (Vue 3.5+)

Генерирует уникальные ID для accessibility (a11y). Решает проблему конфликтов ID при серверном рендеринге и множественных экземплярах компонента.

**Проблема без useId:**
\`\`\`vue
<template>
  <!-- Если компонент используется несколько раз, ID конфликтуют! -->
  <label for="email">Email</label>
  <input id="email" v-model="email">
</template>
\`\`\`

**Решение с useId:**
\`\`\`vue
<script setup>
import { useId } from 'vue'

const emailId = useId()
const passwordId = useId()
</script>

<template>
  <label :for="emailId">Email</label>
  <input :id="emailId" v-model="email">
  
  <label :for="passwordId">Password</label>
  <input :id="passwordId" v-model="password" type="password">
</template>
\`\`\`

**Примеры использования:**

**Связь label и input:**
\`\`\`vue
<script setup>
const id = useId()
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input :id="id" :value="modelValue">
</template>
\`\`\`

**ARIA-атрибуты:**
\`\`\`vue
<script setup>
const descriptionId = useId()
const errorId = useId()
</script>

<template>
  <input
    :aria-describedby="descriptionId"
    :aria-errormessage="errorId"
  >
  <p :id="descriptionId">Введите email</p>
  <p :id="errorId" v-if="error">{{ error }}</p>
</template>
\`\`\`

**Особенности:**
- ID стабильны между SSR и клиентом (гидратация)
- Уникальны в рамках приложения
- Работают с \`<Suspense>\` и асинхронными компонентами

💡 **Для собеседования:** \`useTemplateRef\` (Vue 3.5+) — новый API для ссылок на элементы шаблона, заменяет старый \`ref\` атрибут. \`useId\` (Vue 3.5+) — генерирует уникальные ID для accessibility, решает конфликты ID при SSR и множественных экземплярах компонента.`,
"shortAnswer": `useTemplateRef (Vue 3.5+) — новый API для ссылок на элементы шаблона, заменяет старый ref атрибут. useId (Vue 3.5+) — генерирует уникальные ID для accessibility, решает конфликты ID при SSR и множественных экземплярах компонента.`,
},
{
"id": `2-middle-vue-3-11`,
"title": `Как работает Suspense, async компоненты, KeepAlive (onActivated, onDeactivated)?`,
"fullAnswer": `## Suspense

Компонент для отображения fallback-контента во время загрузки асинхронных зависимостей.

\`\`\`vue
<template>
  <Suspense>
    <!-- Основной контент -->
    <template #default>
      <AsyncComponent />
    </template>
    
    <!-- Fallback во время загрузки -->
    <template #fallback>
      <div>Загрузка...</div>
    </template>
  </Suspense>
</template>
\`\`\`

**Как работает:**
- Suspense ждёт, пока все асинхронные компоненты внутри \`#default\` загрузятся
- Показывает \`#fallback\` во время ожидания
- Когда всё загружено — показывает основной контент

**Асинхронные зависимости:**
\`\`\`vue
<!-- AsyncComponent.vue -->
<script setup>
// Suspense ждёт выполнения setup()
const data = await fetch('/api/data').then(r => r.json())
</script>

<template>
  <div>{{ data }}</div>
</template>
\`\`\`

**Обработка ошибок:**
\`\`\`vue
<Suspense @resolve="onResolve" @pending="onPending" @fallback="onFallback">
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <LoadingSpinner />
  </template>
</Suspense>
\`\`\`

⚠️ **Статус:** В Vue 3 Suspense экспериментальный. API может измениться.

---

## Async компоненты

Ленивая загрузка компонентов через \`defineAsyncComponent\`.

\`\`\`javascript
import { defineAsyncComponent } from 'vue'

// Базовое использование
const AsyncComp = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)

// С опциями
const AsyncCompWithOptions = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200,        // задержка перед показом loading
  timeout: 3000,     // таймаут загрузки
  onError(error, retry, fail, attempts) {
    if (attempts <= 3) {
      retry() // повторить загрузку
    } else {
      fail()  // показать ошибку
    }
  }
})
\`\`\`

**Использование с Suspense:**
\`\`\`vue
<template>
  <Suspense>
    <AsyncComponent />
    <template #fallback>
      <p>Загрузка компонента...</p>
    </template>
  </Suspense>
</template>
\`\`\`

---

## KeepAlive

Кэширует неактивные компоненты, сохраняя их состояние.

\`\`\`vue
<template>
  <KeepAlive :include="['Home', 'About']" :max="10">
    <component :is="currentComponent" />
  </KeepAlive>
</template>
\`\`\`

**Опции:**
- \`include\` — строка/RegExp/массив имён компонентов для кэширования
- \`exclude\` — компоненты, которые НЕ кэшировать
- \`max\` — максимальное количество кэшированных экземпляров

**Хуки жизненного цикла:**
\`\`\`vue
<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('Компонент активирован (показан)')
  // Восстановление состояния, обновление данных
})

onDeactivated(() => {
  console.log('Компонент деактивирован (скрыт)')
  // Сохранение состояния, очистка таймеров
})
</script>
\`\`\`

**Порядок хуков:**
\`\`\`
Создание: onBeforeMount → onMounted → onActivated
Переключение: onDeactivated → (другой компонент) → onActivated
Уничтожение: onDeactivated → onBeforeUnmount → onUnmounted
\`\`\`

**Практический пример — вкладки:**
\`\`\`vue
<template>
  <div>
    <button @click="tab = 'Home'">Home</button>
    <button @click="tab = 'Settings'">Settings</button>
    
    <KeepAlive>
      <component :is="tab" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import Settings from './Settings.vue'

const tab = ref('Home')
</script>
\`\`\`

💡 **Для собеседования:** \`Suspense\` — для отображения fallback при загрузке асинхронных компонентов. \`defineAsyncComponent\` — ленивая загрузка компонентов. \`KeepAlive\` кэширует компоненты, хуки \`onActivated\`/\`onDeactivated\` срабатывают при переключении.`,
"shortAnswer": `Suspense — для отображения fallback при загрузке асинхронных компонентов. defineAsyncComponent — ленивая загрузка компонентов. KeepAlive кэширует компоненты, хуки onActivated/onDeactivated срабатывают при переключении.`,
},
{
"id": `2-middle-vue-3-12`,
"title": `Как работают Transition и TransitionGroup?`,
"fullAnswer": `## Transition

Компонент для анимации появления/исчезновения элементов.

**Базовое использование:**
\`\`\`vue
<template>
  <button @click="show = !show">Toggle</button>
  
  <Transition name="fade">
    <p v-if="show">Привет!</p>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<style>
/* Классы анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
\`\`\`

**CSS-классы Transition:**
- \`v-enter-from\` — начальное состояние входа
- \`v-enter-active\` — активная фаза входа (transition)
- \`v-enter-to\` — конечное состояние входа
- \`v-leave-from\` — начальное состояние выхода
- \`v-leave-active\` — активная фаза выхода
- \`v-leave-to\` — конечное состояние выхода

**JavaScript-хуки:**
\`\`\`vue
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <p v-if="show">Анимация</p>
</Transition>

<script setup>
function onEnter(el, done) {
  // el — DOM-элемент
  // done — callback завершения
  gsap.to(el, { opacity: 1, duration: 0.5, onComplete: done })
}
</script>
\`\`\`

**Режимы:**
\`\`\`vue
<!-- Одновременная анимация (по умолчанию) -->
<Transition>

<!-- Сначала выход, потом вход -->
<Transition mode="out-in">

<!-- Сначала вход, потом выход -->
<Transition mode="in-out">
\`\`\`

---

## TransitionGroup

Для анимации списков (\`v-for\`). В отличие от \`Transition\`, рендерит реальный элемент (по умолчанию \`<span>\`).

\`\`\`vue
<template>
  <button @click="add">Добавить</button>
  <button @click="remove">Удалить</button>
  
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </TransitionGroup>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Анимация перемещения */
.list-move {
  transition: transform 0.3s ease;
}
</style>
\`\`\`

**Ключевые особенности TransitionGroup:**
- Требует \`:key\` для каждого элемента
- Автоматически анимирует перемещение элементов (класс \`.move\`)
- Можно задать тег через \`tag\` (по умолчанию \`<span>\`)

**Пример с сортировкой:**
\`\`\`vue
<template>
  <TransitionGroup name="flip" tag="div" class="container">
    <div v-for="item in sortedItems" :key="item.id">
      {{ item.name }}
    </div>
  </TransitionGroup>
</template>

<style>
.flip-move {
  transition: transform 0.3s ease;
}
</style>
\`\`\`

**Анимация появления списка:**
\`\`\`vue
<TransitionGroup name="stagger" tag="ul">
  <li v-for="(item, index) in items" :key="item.id"
      :style="{ transitionDelay: \`\${index * 50}ms\` }">
    {{ item.text }}
  </li>
</TransitionGroup>

<style>
.stagger-enter-active {
  transition: all 0.3s ease;
}
.stagger-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
\`\`\`

💡 **Для собеседования:** \`Transition\` анимирует появление/исчезновение одного элемента через CSS-классы (\`enter-from\`, \`leave-to\`) или JS-хуки. \`TransitionGroup\` — для списков с \`v-for\`, автоматически анимирует перемещение через класс \`.move\`.`,
"shortAnswer": `Transition анимирует появление/исчезновение одного элемента через CSS-классы (enter-from, leave-to) или JS-хуки. TransitionGroup — для списков с v-for, автоматически анимирует перемещение через класс .move.`,
},
{
"id": `2-middle-vue-3-13`,
"title": `Как работает SSR во Vue 3 и что такое гидратация (hydration mismatch)?`,
"fullAnswer": `## SSR (Server-Side Rendering)

SSR рендерит Vue-компоненты на сервере в HTML, который отправляется клиенту. Это улучшает SEO и время первой отрисовки (FCP).

**Как работает:**

**1. Серверная часть:**
\`\`\`javascript
// server.js
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp(App)

const html = await renderToString(app)
// '<div id="app"><h1>Привет</h1></div>'
\`\`\`

**2. Клиентская часть:**
\`\`\`javascript
// client.js
import { createSSRApp } from 'vue'

const app = createSSRApp(App)
app.mount('#app') // гидратация
\`\`\`

**Ключевое отличие от CSR:**
- CSR: браузер получает пустой HTML + JS, рендерит на клиенте
- SSR: браузер получает готовый HTML, JS только «оживляет» его

---

## Гидратация (Hydration)

Процесс, при котором Vue «оживляет» статический HTML, добавляя реактивность и обработчики событий.

**Что происходит:**
1. Сервер отправляет HTML
2. Браузер отображает HTML сразу (быстрый FCP)
3. Загружается JS-бандл
4. Vue проходит по DOM и добавляет реактивность
5. Приложение становится интерактивным

---

## Hydration Mismatch

Ошибка, когда HTML от сервера не совпадает с тем, что сгенерировал бы клиент.

**Типичные причины:**

**1. Использование браузерных API:**
\`\`\`vue
<template>
  <!-- ❌ На сервере window недоступен -->
  <div>{{ window.innerWidth }}</div>
  
  <!-- ✅ Решение -->
  <div>{{ isClient ? window.innerWidth : 'loading' }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>
\`\`\`

**2. Случайные значения:**
\`\`\`vue
<template>
  <!-- ❌ Math.random() даст разные значения на сервере и клиенте -->
  <div>{{ Math.random() }}</div>
  
  <!-- ✅ Генерировать на клиенте -->
  <div>{{ randomValue }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const randomValue = ref(0)

onMounted(() => {
  randomValue.value = Math.random()
})
</script>
\`\`\`

**3. Дата и время:**
\`\`\`vue
<template>
  <!-- ❌ Разное время на сервере и клиенте -->
  <div>{{ new Date().toLocaleTimeString() }}</div>
</template>
\`\`\`

**4. v-if с условием на окружение:**
\`\`\`vue
<template>
  <!-- ❌ -->
  <div v-if="typeof window !== 'undefined'">Browser only</div>
  
  <!-- ✅ -->
  <ClientOnly>
    <div>Browser only</div>
  </ClientOnly>
</template>
\`\`\`

**Решения:**

**1. \`<ClientOnly>\` компонент (Nuxt):**
\`\`\`vue
<ClientOnly>
  <HeavyComponent />
  <template #fallback>
    <LoadingSpinner />
  </template>
</ClientOnly>
\`\`\`

**2. \`onMounted\` для клиентского кода:**
\`\`\`javascript
onMounted(() => {
  // Код выполнится только на клиенте
  initThirdPartyLibrary()
})
\`\`\`

**3. \`import.meta.env.SSR\`:**
\`\`\`javascript
if (import.meta.env.SSR) {
  // Серверный код
} else {
  // Клиентский код
}
\`\`\`

**4. \`v-show\` вместо \`v-if\`:**
\`\`\`vue
<!-- v-show рендерит элемент всегда, но скрывает через CSS -->
<div v-show="isClient">Контент</div>
\`\`\`

**Nuxt 3 специфика:**
\`\`\`vue
<!-- Компонент рендерится только на клиенте -->
<ClientOnly>
  <BrowserComponent />
</ClientOnly>

<!-- Компонент рендерится только на сервере -->
<ServerOnly>
  <ServerComponent />
</ServerOnly>
\`\`\`

💡 **Для собеседования:** SSR рендерит HTML на сервере для быстрого FCP и SEO. Гидратация — процесс «оживления» HTML на клиенте. Hydration mismatch возникает, когда серверный и клиентский HTML различаются (браузерные API, случайные значения, дата/время). Решения: \`onMounted\`, \`<ClientOnly>\`, \`import.meta.env.SSR\`.`,
"shortAnswer": `SSR рендерит HTML на сервере для быстрого FCP и SEO. Гидратация — процесс «оживления» HTML на клиенте. Hydration mismatch возникает, когда серверный и клиентский HTML различаются (браузерные API, случайные значения, дата/время). Решения: onMounted, <ClientOnly>, import.meta.env.SSR.`,
},
],
},
],
},
}
