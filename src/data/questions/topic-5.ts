import type { TopicQuestions } from '../../types/question'

export const topic5Questions: TopicQuestions = {
"id": 5,
"slug": `topic-5`,
"title": `Nuxt 4`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `5-junior-общее-1`,
"title": `Что такое Nuxt? Чем отличается от Vue? Что такое SSR, CSR, SSG, ISR?`,
"fullAnswer": `**Nuxt** — это фреймворк для создания Vue-приложений, который добавляет поверх Vue мощные возможности: файловую маршрутизацию, серверный рендеринг, автоимпорты, модульную систему и многое другое.

**Отличия Nuxt от «чистого» Vue:**
- Vue — это библиотека для создания UI-компонентов
- Nuxt — это полноценный фреймворк со встроенными решениями для маршрутизации, SEO, рендеринга, серверной части
- В Vue нужно настраивать роутер, сборку, SSR вручную. В Nuxt всё это работает «из коробки»

**Режимы рендеринга:**

**1. CSR (Client-Side Rendering) — рендеринг на клиенте:**
Браузер получает пустой HTML + JS-бандл, Vue рендерит страницу в браузере.
- ✅ Быстрая навигация после загрузки
- ❌ Медленная первая загрузка (FCP)
- ❌ Плохо для SEO (поисковики видят пустой HTML)
- Используется в обычных SPA на Vue

**2. SSR (Server-Side Rendering) — рендеринг на сервере:**
Сервер генерирует готовый HTML и отправляет его браузеру.
- ✅ Быстрая первая загрузка (FCP)
- ✅ Отличное SEO (поисковики видят готовый HTML)
- ❌ Нагрузка на сервер при каждом запросе
- Используется для контентных сайтов, интернет-магазинов

**3. SSG (Static Site Generation) — статическая генерация:**
HTML генерируется **один раз** при сборке проекта и раздаётся как статические файлы.
- ✅ Максимальная скорость (CDN)
- ✅ Отличное SEO
- ❌ Не подходит для динамического контента (нужна пересборка)
- Используется для блогов, документации, лендингов

**4. ISR (Incremental Static Regeneration) — инкрементальная статическая регенерация:**
Гибрид SSG и SSR. Страница генерируется статически, но периодически обновляется на сервере.
- ✅ Скорость статики + актуальность данных
- ✅ Не нужна полная пересборка
- Используется для новостных сайтов, каталогов товаров

**Сводная таблица:**

| Режим | Где рендерится | SEO | Скорость | Динамика |
|---|---|---|---|---|
| CSR | Браузер | ❌ | Средняя | ✅ |
| SSR | Сервер (каждый запрос) | ✅ | Быстрая | ✅ |
| SSG | Сервер (при сборке) | ✅ | Максимальная | ❌ |
| ISR | Сервер (периодически) | ✅ | Максимальная | ⚠️ |

💡 **Для собеседования:** Nuxt — фреймворк над Vue с файловой маршрутизацией, SSR и автоимпортами. CSR — рендер в браузере (SPA). SSR — рендер на сервере при каждом запросе (SEO). SSG — статическая генерация при сборке. ISR — гибрид: статика с периодическим обновлением.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-2`,
"title": `Что такое автоимпорты в Nuxt?`,
"fullAnswer": `**Автоимпорты (auto-imports)** — одна из ключевых фишек Nuxt. Фреймворк автоматически импортирует компоненты, композаблы, утилиты и API-функции без необходимости писать \`import\`.

**Что импортируется автоматически:**

**1. Vue API:**
\`\`\`vue
<script setup>
// Не нужно писать: import { ref, computed, watch } from 'vue'
const count = ref(0)           // ✅ работает
const double = computed(() => count.value * 2)
</script>
\`\`\`

**2. Компоненты из папки \`components/\`:**
\`\`\`
components/
  AppHeader.vue
  AppFooter.vue
  ui/AppButton.vue
\`\`\`
\`\`\`vue
<template>
  <!-- Не нужно импортировать -->
  <AppHeader />
  <AppFooter />
  <UiAppButton>Клик</UiAppButton>  <!-- вложенные папки = префикс -->
</template>
\`\`\`

**3. Композаблы из папки \`composables/\`:**
\`\`\`
composables/
  useAuth.js
  useCart.js
\`\`\`
\`\`\`vue
<script setup>
// Не нужно: import { useAuth } from '@/composables/useAuth'
const { user, login } = useAuth()  // ✅
</script>
\`\`\`

**4. Утилиты из папки \`utils/\`:**
\`\`\`javascript
// utils/format.js
export const formatDate = (date) => { ... }

// В любом месте проекта
const formatted = formatDate(new Date())  // ✅ без импорта
\`\`\`

**5. Nuxt-хуки и функции:**
\`\`\`vue
<script setup>
// Все эти функции доступны без импорта
const route = useRoute()
const router = useRouter()
const { data } = useAsyncData('key', () => $fetch('/api/data'))
onMounted(() => { ... })
useHead({ title: 'Home' })
</script>
\`\`\`

**6. Плагины и модули:**
Функции из установленных модулей (например, \`useI18n\` из \`@nuxtjs/i18n\`) тоже автоимпортируются.

**Как это работает:**
Nuxt сканирует папки \`components/\`, \`composables/\`, \`utils/\`, \`plugins/\` и генерирует файл \`.nuxt/imports.d.ts\` с объявлениями типов. Vite подставляет импорты во время сборки.

**Отключение автоимпортов:**
Если нужно отключить для конкретного случая (например, конфликт имён):
\`\`\`javascript
// nuxt.config.ts
export default defineNuxtConfig({
  imports: {
    dirs: []  // отключить автоимпорт из папок
  }
})
\`\`\`

**Преимущества:**
- ✅ Меньше boilerplate-кода
- ✅ Быстрее разработка
- ✅ Не нужно следить за путями импортов
- ✅ Автоматический tree-shaking (импортируется только то, что используется)

**Недостатки:**
- ⚠️ Может быть непонятно, откуда берётся функция (для новичков)
- ️ Конфликты имён при большом проекте

💡 **Для собеседования:** Автоимпорты в Nuxt — автоматический импорт компонентов, композаблов, утилит и Vue/Nuxt API без явного \`import\`. Работает через сканирование папок \`components/\`, \`composables/\`, \`utils/\`. Ускоряет разработку и уменьшает boilerplate.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-3`,
"title": `Как создать страницу, вложенный или динамический маршрут (File-based routing)?`,
"fullAnswer": `**File-based routing** — маршрутизация на основе структуры файлов в папке \`pages/\`. Каждый файл автоматически становится маршрутом.

**Базовые маршруты:**
\`\`\`
pages/
  index.vue       → /
  about.vue       → /about
  contact.vue     → /contact
\`\`\`

**Вложенные маршруты (nested routes):**
Создаются через вложенные папки или файлы с одинаковым именем.

\`\`\`
pages/
  users/
    index.vue     → /users
    list.vue      → /users/list
    [id].vue      → /users/:id (динамический)
\`\`\`

Или через вложенность с родителем:
\`\`\`
pages/
  users.vue       → /users (родительский layout)
  users/
    index.vue     → /users (вложенный)
    profile.vue   → /users/profile
\`\`\`

**Динамические маршруты:**
Используются квадратные скобки \`[param]\` в имени файла.

\`\`\`
pages/
  users/
    [id].vue          → /users/123
  products/
    [category]/
      [slug].vue      → /products/electronics/laptop-123
\`\`\`

**Получение параметров в компоненте:**
\`\`\`vue
<script setup>
const route = useRoute()

// Для /users/123
console.log(route.params.id)  // "123"

// Для /products/electronics/laptop-123
console.log(route.params.category)  // "electronics"
console.log(route.params.slug)      // "laptop-123"
</script>
\`\`\`

**Catch-all маршруты (ловят всё):**
\`\`\`
pages/
  [...slug].vue    → ловит любой путь: /a/b/c
\`\`\`
\`\`\`vue
<script setup>
const route = useRoute()
console.log(route.params.slug)  // ["a", "b", "c"]
</script>
\`\`\`

**Опциональные параметры:**
\`\`\`
pages/
  users/
    [[id]].vue   → /users И /users/123
\`\`\`

**Группировка маршрутов (без влияния на URL):**
Папки в скобках \`(group)\` не влияют на URL.
\`\`\`
pages/
  (auth)/
    login.vue     → /login (не /auth/login)
    register.vue  → /register
  (marketing)/
    landing.vue   → /landing
\`\`\`

**Пример структуры реального проекта:**
\`\`\`
pages/
  index.vue              → /
  about.vue              → /about
  blog/
    index.vue            → /blog
    [slug].vue           → /blog/my-post
  users/
    [id].vue             → /users/123
    [id]/
      settings.vue       → /users/123/settings
  [...all].vue           → 404 страница
\`\`\`

**Метаданные маршрута:**
\`\`\`vue
<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
  title: 'Админка'
})
</script>
\`\`\`

💡 **Для собеседования:** В Nuxt маршруты создаются автоматически из файлов в папке \`pages/\`. Вложенные папки = вложенные маршруты. Динамические параметры — через \`[param]\`. Catch-all — через \`[...slug]\`. Группировка без влияния на URL — через \`(group)\`. Параметры получаются через \`useRoute().params\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-4`,
"title": `Что такое useAsyncData и useFetch? В чём разница?`,
"fullAnswer": `**\`useAsyncData\`** и **\`useFetch\`** — композаблы Nuxt для загрузки данных с поддержкой SSR, кэширования и дедупликации запросов.

**\`useFetch\` — удобная обёртка над \`useAsyncData\` + \`$fetch\`:**
\`\`\`vue
<script setup>
// Простой GET-запрос
const { data, pending, error, refresh } = await useFetch('/api/users')

// С опциями
const { data } = await useFetch('/api/users', {
  method: 'POST',
  body: { name: 'John' },
  headers: { 'Authorization': 'Bearer token' },
  query: { page: 1 },
  transform: (res) => res.users  // трансформация ответа
})
</script>

<template>
  <div v-if="pending">Загрузка...</div>
  <div v-else-if="error">Ошибка: {{ error.message }}</div>
  <ul v-else>
    <li v-for="user in data" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
\`\`\`

**\`useAsyncData\` — более гибкий вариант:**
Позволяет использовать любую асинхронную функцию (не только \`$fetch\`).
\`\`\`vue
<script setup>
const { data, pending, error } = await useAsyncData('users', () => {
  return $fetch('/api/users')
  // Или любая другая асинхронная логика
  // return await myCustomApiCall()
})
</script>
\`\`\`

**Первый аргумент — уникальный ключ:**
Используется для кэширования и дедупликации. Если два компонента запросят данные с одинаковым ключом, запрос выполнится только один раз.

**Возвращаемые значения:**
- \`data\` — результат запроса (реактивный ref)
- \`pending\` — boolean, идёт ли загрузка
- \`error\` — объект ошибки
- \`refresh\` — функция для повторного запроса
- \`status\` — строка: \`'idle' | 'pending' | 'success' | 'error'\`

**Ключевые опции:**

\`\`\`javascript
const { data } = await useFetch('/api/users', {
  // Метод и тело
  method: 'POST',
  body: { ... },
  
  // Параметры запроса
  query: { page: 1, limit: 10 },
  headers: { 'X-Custom': 'value' },
  
  // Кэширование
  key: 'custom-key',         // ключ кэша
  lazy: false,               // если true — не блокирует навигацию
  
  // Трансформация
  transform: (res) => res.data,
  pick: ['id', 'name'],      // выбрать только эти поля из ответа
  
  // Наблюдение
  watch: [someRef],          // перезапрос при изменении
  immediate: true,           // выполнить сразу (по умолчанию true)
  
  // Сервер/клиент
  server: true,              // выполнять на сервере (SSR)
  getCachedData: (key) => {  // кастомная логика кэша
    return useNuxtData(key).data.value
  }
})
\`\`\`

**Разница между \`useFetch\` и \`useAsyncData\`:**

| Характеристика | \`useFetch\` | \`useAsyncData\` |
|---|---|---|
| Источник данных | Только \`$fetch\` (HTTP) | Любая async функция |
| Первый аргумент | URL | Уникальный ключ |
| Удобство | Выше (меньше кода) | Ниже (больше контроля) |
| Когда использовать | Обычные API-запросы | Сложная логика, не HTTP |

**Пример с \`useAsyncData\` для не-HTTP задачи:**
\`\`\`javascript
const { data } = await useAsyncData('config', async () => {
  const config = await import('@/config/app.json')
  return config.default
})
\`\`\`

**Дедупликация запросов:**
Если два компонента на одной странице вызовут \`useFetch('/api/users')\`, Nuxt выполнит запрос **только один раз** и передаст результат обоим.

**Обновление данных:**
\`\`\`javascript
const { data, refresh } = await useFetch('/api/users')

// Принудительное обновление
await refresh()

// Или через watch
watch(someRef, () => refresh())
\`\`\`

💡 **Для собеседования:** \`useFetch\` — удобная обёртка для HTTP-запросов (использует \`$fetch\`). \`useAsyncData\` — более гибкий вариант для любой async-логики. Оба поддерживают SSR, кэширование, дедупликацию запросов. Возвращают \`data\`, \`pending\`, \`error\`, \`refresh\`. Первый аргумент \`useAsyncData\` — уникальный ключ для кэша.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-5`,
"title": `Что такое <NuxtLink>, <NuxtPage> и <NuxtLayout>?`,
"fullAnswer": `Это три базовых компонента Nuxt для навигации и структуры приложения.

---

## \`<NuxtLink>\`

Компонент для навигации между страницами. Аналог \`<router-link>\` во Vue Router, но с дополнительными возможностями.

**Базовое использование:**
\`\`\`vue
<template>
  <NuxtLink to="/about">О нас</NuxtLink>
  <NuxtLink :to="{ path: '/users', query: { page: 1 } }">Пользователи</NuxtLink>
</template>
\`\`\`

**Преимущества перед \`<a>\`:**
- Не перезагружает страницу (SPA-навигация)
- **Prefetching**: Nuxt автоматически предзагружает данные и код страницы при наведении мыши
- Поддержка активного класса

**Активные классы:**
\`\`\`vue
<NuxtLink 
  to="/about"
  active-class="text-blue-500"
  exact-active-class="font-bold"
>
  О нас
</NuxtLink>
\`\`\`
- \`active-class\` — применяется, когда маршрут начинается с \`/about\`
- \`exact-active-class\` — применяется только при точном совпадении

**Внешние ссылки:**
\`\`\`vue
<NuxtLink to="https://google.com" external>Google</NuxtLink>
<!-- Или просто <a> для внешних ссылок -->
\`\`\`

---

## \`<NuxtPage>\`

Компонент для отображения содержимого текущей страницы (аналог \`<router-view>\`).

**Где используется:**
Обычно размещается в layout-файле.

\`\`\`vue
<!-- layouts/default.vue -->
<template>
  <div>
    <AppHeader />
    <main>
      <NuxtPage />  <!-- здесь рендерится страница из pages/ -->
    </main>
    <AppFooter />
  </div>
</template>
\`\`\`

**Передача props в страницу:**
\`\`\`vue
<template>
  <NuxtPage :some-prop="value" />
</template>

<!-- В странице pages/index.vue -->
<script setup>
const props = defineProps(['someProp'])
</script>
\`\`\`

**Ключи для анимаций:**
\`\`\`vue
<NuxtPage :transition="{ name: 'fade' }" />
\`\`\`

---

## \`<NuxtLayout>\`

Компонент для переключения layout'ов динамически.

**Статическое использование:**
В \`definePageMeta\` указывается layout, и он применяется автоматически:
\`\`\`vue
<script setup>
definePageMeta({
  layout: 'admin'
})
</script>
\`\`\`

**Динамическое переключение:**
\`\`\`vue
<template>
  <NuxtLayout :name="dynamicLayout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const dynamicLayout = ref('default')

function switchToAdmin() {
  dynamicLayout.value = 'admin'
}
</script>
\`\`\`

**Вложенные layout'ы:**
\`\`\`vue
<!-- layouts/admin.vue -->
<template>
  <div class="admin-wrapper">
    <AdminSidebar />
    <NuxtLayout name="default">  <!-- вложенный layout -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
\`\`\`

**Layout по умолчанию:**
Если не указан — используется \`layouts/default.vue\`. Если его нет — рендерится без layout.

**Пустой layout (для изолированных страниц):**
\`\`\`vue
<script setup>
definePageMeta({
  layout: false  // без layout
})
</script>
\`\`\`

---

**Связь между компонентами:**
\`\`\`
<NuxtLayout>          <!-- обёртка (шапка, меню, подвал) -->
  <NuxtPage>          <!-- содержимое текущей страницы -->
    <NuxtLink>        <!-- ссылки для навигации -->
  </NuxtPage>
</NuxtLayout>
\`\`\`

💡 **Для собеседования:** \`<NuxtLink>\` — компонент навигации с автопрефетчингом. \`<NuxtPage>\` — точка рендера текущей страницы (аналог \`<router-view>\`). \`<NuxtLayout>\` — для динамического переключения layout'ов. Обычно \`<NuxtPage>\` размещается внутри layout-файла.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-6`,
"title": `Как создать layout и middleware?`,
"fullAnswer": `## Layouts (макеты)

**Layout** — это обёртка для страниц с общей структурой (шапка, меню, подвал).

**1. Создание layout:**
Создайте файл в папке \`layouts/\`:
\`\`\`
layouts/
  default.vue      → layout по умолчанию
  admin.vue        → кастомный layout
  auth.vue         → для страниц авторизации
  empty.vue        → без шапки и подвала
\`\`\`

**Пример \`layouts/default.vue\`:**
\`\`\`vue
<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </nav>
    </header>
    
    <main>
      <slot />  <!-- здесь рендерится страница -->
    </main>
    
    <footer>
      <p>© 2024 My Site</p>
    </footer>
  </div>
</template>
\`\`\`

**2. Применение layout к странице:**

**Способ А: Через \`definePageMeta\` (рекомендуется):**
\`\`\`vue
<!-- pages/dashboard.vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})
</script>
\`\`\`

**Способ Б: Через \`<NuxtLayout>\`:**
\`\`\`vue
<template>
  <NuxtLayout name="admin">
    <NuxtPage />
  </NuxtLayout>
</template>
\`\`\`

**3. Layout по умолчанию:**
Если файл \`layouts/default.vue\` существует, он применяется ко всем страницам автоматически. Если нет — страницы рендерятся без layout.

**4. Отключение layout:**
\`\`\`vue
<script setup>
definePageMeta({
  layout: false  // страница без layout
})
</script>
\`\`\`

---

## Middleware (промежуточные обработчики)

**Middleware** — функции, которые выполняются **перед** рендером страницы. Используются для проверки авторизации, редиректов, логирования.

**1. Глобальный middleware:**
Выполняется для **каждого** маршрута.

\`\`\`
middleware/
  auth.global.ts   → суффикс .global делает его глобальным
\`\`\`

\`\`\`typescript
// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('auth-token')
  
  // Если нет токена и страница не публичная
  if (!token.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
\`\`\`

**2. Именованный middleware:**
Применяется только к указанным страницам.

\`\`\`
middleware/
  admin.ts         → именованный middleware
\`\`\`

\`\`\`typescript
// middleware/admin.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useAuthStore().user
  
  if (user.role !== 'admin') {
    return abortNavigation('Доступ запрещён')
    // или
    return navigateTo('/forbidden')
  }
})
\`\`\`

**Применение к странице:**
\`\`\`vue
<script setup>
definePageMeta({
  middleware: ['auth', 'admin']  // массив middleware
})
</script>
\`\`\`

**3. Inline middleware (внутри страницы):**
\`\`\`vue
<script setup>
definePageMeta({
  middleware: [(to, from) => {
    console.log('Переход на', to.path)
  }]
})
</script>
\`\`\`

**Параметры middleware:**
- \`to\` — маршрут, на который переходим
- \`from\` — маршрут, с которого уходим

**Возвращаемые значения:**
- \`undefined\` или ничего — продолжить навигацию
- \`navigateTo('/path')\` — редирект
- \`abortNavigation()\` или \`false\` — отменить навигацию
- \`abortNavigation(error)\` — отменить с ошибкой

**4. Порядок выполнения:**
1. Глобальные middleware (в порядке регистрации)
2. Middleware из \`definePageMeta\`
3. Рендер страницы

**5. Практический пример — проверка авторизации:**
\`\`\`typescript
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  
  // Публичные страницы
  const publicPages = ['/login', '/register', '/about']
  
  if (!auth.isAuthenticated && !publicPages.includes(to.path)) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }  // сохранить целевой путь
    })
  }
})
\`\`\`

💡 **Для собеседования:** Layout — обёртка для страниц с общей структурой, создаётся в \`layouts/\` и применяется через \`definePageMeta({ layout: 'name' })\`. Middleware — функция перед рендером страницы для проверки условий. Бывает глобальный (\`.global.ts\`) и именованный. Возвращает \`navigateTo()\` для редиректа или \`abortNavigation()\` для отмены.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-7`,
"title": `Что такое серверные маршруты и nuxt.config.ts?`,
"fullAnswer": `## Серверные маршруты (Server Routes)

Nuxt имеет встроенный сервер на базе **Nitro** (от создателей Nuxt). Можно создавать API-эндпоинты прямо в проекте.

**1. Структура папки \`server/api/\`:**
\`\`\`
server/
  api/
    users.ts         → /api/users
    users/
      [id].ts        → /api/users/:id
    posts.ts         → /api/posts
  routes/
    hello.ts         → /hello (без префикса /api)
\`\`\`

**2. Создание эндпоинта:**
\`\`\`typescript
// server/api/users.ts
export default defineEventHandler((event) => {
  return [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
})
\`\`\`

**3. Получение параметров:**
\`\`\`typescript
// server/api/users/[id].ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return { id, name: 'John' }
})
\`\`\`

**4. HTTP-методы:**
\`\`\`typescript
export default defineEventHandler((event) => {
  const method = event.method  // GET, POST, PUT, DELETE
  
  if (method === 'GET') {
    return { message: 'GET запрос' }
  }
})

// Или через хелперы:
export const get = defineEventHandler(() => 'GET')
export const post = defineEventHandler(() => 'POST')
\`\`\`

**5. Чтение тела запроса:**
\`\`\`typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // body = { name: 'John', email: '...' }
  
  return { success: true, received: body }
})
\`\`\`

**6. Чтение query-параметров:**
\`\`\`typescript
export default defineEventHandler((event) => {
  const query = getQuery(event)
  // ?page=1&limit=10 → { page: '1', limit: '10' }
  
  return query
})
\`\`\`

**7. Заголовки и статус:**
\`\`\`typescript
export default defineEventHandler((event) => {
  setResponseHeader(event, 'X-Custom', 'value')
  setResponseStatus(event, 201)
  
  return { created: true }
})
\`\`\`

**8. Использование на клиенте:**
\`\`\`vue
<script setup>
const { data } = await useFetch('/api/users')
</script>
\`\`\`

---

## \`nuxt.config.ts\`

Главный конфигурационный файл Nuxt-приложения.

**Базовая структура:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // Метаданные приложения
  app: {
    head: {
      title: 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // Модули
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  
  // Runtime config (переменные окружения)
  runtimeConfig: {
    apiSecret: '123',  // только на сервере
    public: {
      apiBase: '/api'  // доступно и на клиенте
    }
  },
  
  // Настройки сборки
  vite: {
    // кастомные настройки Vite
  },
  
  // Настройки Nitro (сервер)
  nitro: {
    // ...
  },
  
  // Плагины
  plugins: [
    '~/plugins/my-plugin.ts'
  ],
  
  // CSS глобально
  css: [
    '~/assets/css/main.css'
  ],
  
  // Настройки TypeScript
  typescript: {
    strict: true
  }
})
\`\`\`

**Основные секции:**

**\`app\`** — глобальные настройки приложения (head, layout, rootId).

**\`modules\`** — массив Nuxt-модулей (аналог плагинов, но мощнее).

**\`runtimeConfig\`** — переменные окружения:
- Корневые свойства — только на сервере (секреты)
- \`public\` — доступны и на клиенте

**\`plugins\`** — Vue-плагины для инициализации.

**\`css\`** — глобальные CSS-файлы.

**\`vite\` / \`webpack\`** — настройки сборщика.

**\`nitro\`** — настройки сервера (кэширование, prerender, prerender routes).

**\`devtools\`** — включить Nuxt DevTools:
\`\`\`typescript
devtools: { enabled: true }
\`\`\`

**Переопределение для разных окружений:**
\`\`\`typescript
export default defineNuxtConfig({
  // Общие настройки
  
  $development: {
    // Только для dev
  },
  
  $production: {
    // Только для prod
  },
  
  $test: {
    // Только для тестов
  }
})
\`\`\`

💡 **Для собеседования:** Серверные маршруты создаются в \`server/api/\` через \`defineEventHandler\`. Nuxt использует Nitro-сервер. \`nuxt.config.ts\` — главный конфиг: модули, runtimeConfig, плагины, CSS, настройки сборки. \`runtimeConfig.public\` доступен на клиенте, корневые свойства — только на сервере.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-8`,
"title": `Что такое useHead и useSeoMeta?`,
"fullAnswer": `Это композаблы Nuxt для управления \`<head>\` документа (мета-теги, заголовок, скрипты, стили).

---

## \`useHead\`

Универсальный композабл для управления всем содержимым \`<head>\`.

**Базовое использование:**
\`\`\`vue
<script setup>
useHead({
  title: 'Моя страница',
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Описание страницы' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto' }
  ],
  script: [
    {
      src: 'https://analytics.example.com/script.js',
      async: true
    }
  ],
  style: [
    { innerHTML: 'body { background: #f0f0f0; }' }
  ]
})
</script>
\`\`\`

**Реактивность:**
\`\`\`vue
<script setup>
const route = useRoute()

useHead({
  title: computed(() => \`\${route.meta.title} | My Site\`),
  meta: [
    {
      name: 'description',
      content: computed(() => route.meta.description || 'Default description')
    }
  ]
})
</script>
\`\`\`

**Управление отдельными тегами:**
\`\`\`javascript
useHead({
  // Добавить canonical URL
  link: [
    { rel: 'canonical', href: 'https://example.com/page' }
  ],
  
  // Open Graph
  meta: [
    { property: 'og:title', content: 'Заголовок' },
    { property: 'og:description', content: 'Описание' },
    { property: 'og:image', content: '/image.jpg' }
  ]
})
\`\`\`

---

## \`useSeoMeta\`

Специализированный композабл **только для SEO-мета-тегов**. Более удобный синтаксис для популярных мета-тегов.

**Использование:**
\`\`\`vue
<script setup>
useSeoMeta({
  title: 'Моя страница',
  description: 'Описание страницы для поисковиков',
  ogTitle: 'Заголовок для соцсетей',
  ogDescription: 'Описание для соцсетей',
  ogImage: 'https://example.com/image.jpg',
  ogUrl: 'https://example.com/page',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Заголовок для Twitter',
  twitterDescription: 'Описание для Twitter',
  twitterImage: 'https://example.com/image.jpg',
  robots: 'index, follow',
  author: 'John Doe',
  keywords: 'vue, nuxt, seo'
})
</script>
\`\`\`

**Разница между \`useHead\` и \`useSeoMeta\`:**

| Характеристика | \`useHead\` | \`useSeoMeta\` |
|---|---|---|
| Назначение | Всё содержимое \`<head>\` | Только SEO-мета-теги |
| Синтаксис | Объект с массивами | Плоский объект |
| Поддерживает | title, meta, link, script, style | Только meta-теги |
| Open Graph | Вручную через \`meta\` | Автоматически (\`ogTitle\` → \`og:title\`) |
| Twitter Cards | Вручную | Автоматически |

**Комбинирование:**
\`\`\`vue
<script setup>
// SEO-мета-теги
useSeoMeta({
  title: 'Моя страница',
  description: 'Описание'
})

// Остальные head-теги
useHead({
  link: [
    { rel: 'canonical', href: 'https://example.com/page' }
  ],
  script: [
    { src: '/analytics.js', async: true }
  ]
})
</script>
\`\`\`

**Глобальные мета-теги:**
Можно задать в \`nuxt.config.ts\`:
\`\`\`typescript
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
\`\`\`

А в страницах переопределять через \`useHead\`/\`useSeoMeta\`.

**Пример для блога:**
\`\`\`vue
<script setup>
const { data: post } = await useAsyncData('post', () => 
  $fetch(\`/api/posts/\${useRoute().params.slug}\`)
)

useSeoMeta({
  title: post.value.title,
  description: post.value.excerpt,
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt,
  ogImage: post.value.coverImage,
  articlePublishedTime: post.value.publishedAt,
  articleAuthor: post.value.author
})
</script>
\`\`\`

💡 **Для собеседования:** \`useHead\` — универсальный композабл для управления всем \`<head>\` (title, meta, link, script). \`useSeoMeta\` — специализированный для SEO-мета-тегов с удобным синтаксисом (автоматически генерирует \`og:title\`, \`twitter:card\` и т.д.). Оба реактивны.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-9`,
"title": `Как работать с переменными окружения и useRuntimeConfig?`,
"fullAnswer": `В Nuxt переменные окружения работают через систему **runtime config** — это безопасный способ передавать конфигурацию между сервером и клиентом.

---

## 1. Файлы \`.env\`

Nuxt автоматически загружает переменные из \`.env\` файлов:

\`\`\`
.env                # загружается всегда
.env.local          # локальные настройки (в .gitignore)
.env.development    # только для dev
.env.production     # только для prod
\`\`\`

**Пример \`.env\`:**
\`\`\`bash
NUXT_API_SECRET=my-secret-key
NUXT_PUBLIC_API_BASE=https://api.example.com
NUXT_PUBLIC_APP_VERSION=1.0.0
\`\`\`

**Важное правило:**
- Переменные с префиксом \`NUXT_PUBLIC_\` — доступны **и на сервере, и на клиенте**
- Переменные с префиксом \`NUXT_\` (без PUBLIC) — доступны **только на сервере**

---

## 2. \`useRuntimeConfig\`

Композабл для доступа к переменным окружения в коде.

**Настройка в \`nuxt.config.ts\`:**
\`\`\`typescript
export default defineNuxtConfig({
  runtimeConfig: {
    // Приватные (только сервер)
    apiSecret: 'default-secret',
    dbPassword: '',
    
    // Публичные (сервер + клиент)
    public: {
      apiBase: 'http://localhost:3000/api',
      appVersion: '1.0.0'
    }
  }
})
\`\`\`

**Использование в коде:**
\`\`\`vue
<script setup>
const config = useRuntimeConfig()

// Приватные (только в server/)
console.log(config.apiSecret)

// Публичные
console.log(config.public.apiBase)
console.log(config.public.appVersion)
</script>
\`\`\`

**Использование в серверных маршрутах:**
\`\`\`typescript
// server/api/secret.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  
  // Здесь доступны и приватные, и публичные
  return {
    secret: config.apiSecret,
    apiBase: config.public.apiBase
  }
})
\`\`\`

---

## 3. Переопределение через переменные окружения

Значения из \`.env\` переопределяют значения из \`nuxt.config.ts\`:

\`\`\`bash
# .env
NUXT_API_SECRET=real-secret-from-env
NUXT_PUBLIC_API_BASE=https://production-api.com
\`\`\`

\`\`\`typescript
// nuxt.config.ts
runtimeConfig: {
  apiSecret: 'default-secret',          // будет переопределено
  public: {
    apiBase: 'http://localhost:3000/api'  // будет переопределено
  }
}
\`\`\`

**После сборки:**
\`\`\`bash
NUXT_API_SECRET=prod-secret node .output/server/index.mjs
\`\`\`

---

## 4. Типизация runtime config

\`\`\`typescript
// types/runtime.d.ts
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
    dbPassword: string
    public: {
      apiBase: string
      appVersion: string
    }
  }
}

export {}
\`\`\`

Теперь \`useRuntimeConfig()\` будет иметь автодополнение и проверку типов.

---

## 5. Практические примеры

**API-клиент с динамическим baseURL:**
\`\`\`typescript
// composables/useApi.ts
export const useApi = () => {
  const config = useRuntimeConfig()
  
  return $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'Authorization': \`Bearer \${useCookie('token').value}\`
    }
  })
}
\`\`\`

**Feature flags:**
\`\`\`typescript
runtimeConfig: {
  public: {
    enableAnalytics: process.env.NUXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    maintenanceMode: process.env.NUXT_PUBLIC_MAINTENANCE === 'true'
  }
}
\`\`\`

---

## 6. Безопасность

**❌ Никогда не храните в публичных переменных:**
- Пароли от БД
- API-ключи платных сервисов
- Секретные токены
- Приватные ключи шифрования

**✅ Храните в публичных:**
- URL публичных API
- Версию приложения
- Feature flags
- ID публичных сервисов (Google Analytics ID)

**Пример утечки:**
\`\`\`typescript
// ❌ Плохо — секрет попадёт в клиентский бандл
runtimeConfig: {
  public: {
    databasePassword: '12345'  // видно в DevTools!
  }
}

// ✅ Хорошо
runtimeConfig: {
  databasePassword: '12345',  // только сервер
  public: {
    apiBase: '/api'
  }
}
\`\`\`

💡 **Для собеседования:** Переменные окружения в Nuxt работают через \`runtimeConfig\` в \`nuxt.config.ts\`. Переменные с префиксом \`NUXT_PUBLIC_\` доступны на клиенте, с \`NUXT_\` — только на сервере. Доступ через \`useRuntimeConfig()\`. Значения из \`.env\` переопределяют конфиг. Никогда не храните секреты в \`public\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-junior-общее-10`,
"title": `Как обрабатывать ошибки? Что такое useRouter, useRoute и navigateTo?`,
"fullAnswer": `## Обработка ошибок в Nuxt

**1. Глобальная страница ошибок \`error.vue\`:**

Создайте файл \`error.vue\` в корне проекта — он будет показываться при любых необработанных ошибках.

\`\`\`vue
<!-- error.vue -->
<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page">
    <h1>{{ error?.statusCode || 500 }}</h1>
    <p>{{ error?.message || 'Произошла ошибка' }}</p>
    <button @click="handleError">На главную</button>
  </div>
</template>
\`\`\`

**2. Создание ошибок:**
\`\`\`vue
<script setup>
// В странице или компоненте
throw createError({
  statusCode: 404,
  statusMessage: 'Страница не найдена',
  message: 'Запрошенный ресурс не существует'
})

// Или короче
throw createError({ statusCode: 404, message: 'Not found' })
\`\`\`

**3. Обработка ошибок в \`useAsyncData\`/\`useFetch\`:**
\`\`\`vue
<script setup>
const { data, error } = await useFetch('/api/users')

if (error.value) {
  console.error('Ошибка загрузки:', error.value.message)
}
</script>

<template>
  <div v-if="error">
    <p>Не удалось загрузить данные</p>
    <button @click="refresh">Повторить</button>
  </div>
</template>
\`\`\`

**4. Обработка ошибок в middleware:**
\`\`\`typescript
export default defineNuxtRouteMiddleware((to) => {
  const user = useAuthStore().user
  
  if (!user) {
    return abortNavigation('Требуется авторизация')
    // или
    return navigateTo('/login')
  }
})
\`\`\`

**5. Глобальный обработчик через плагин:**
\`\`\`typescript
// plugins/error-handler.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.error('Vue error:', error)
    // Отправка в Sentry
  })
  
  nuxtApp.hook('app:error', (error) => {
    console.error('Nuxt error:', error)
  })
})
\`\`\`

---

## \`useRouter\`, \`useRoute\`, \`navigateTo\`

**\`useRoute()\`** — получение информации о **текущем** маршруте.
\`\`\`vue
<script setup>
const route = useRoute()

console.log(route.path)        // "/users/123"
console.log(route.params)      // { id: "123" }
console.log(route.query)       // { page: "1" }
console.log(route.fullPath)    // "/users/123?page=1"
console.log(route.name)        // "users-id"
console.log(route.meta)        // метаданные из definePageMeta
console.log(route.hash)        // "#section"
</script>
\`\`\`

**\`useRouter()\`** — объект роутера для **программной навигации**.
\`\`\`vue
<script setup>
const router = useRouter()

// Переход на другую страницу
router.push('/about')
router.push({ path: '/users', query: { page: 1 } })

// Замена текущего маршрута (без истории назад)
router.replace('/login')

// Назад/вперёд
router.back()
router.forward()
router.go(-1)

// Получить текущий маршрут
console.log(router.currentRoute.value)
</script>
\`\`\`

**\`navigateTo()\`** — композабл Nuxt для навигации (работает и на сервере, и на клиенте).

**Отличие от \`router.push\`:**
- \`navigateTo\` можно использовать в middleware и серверном коде
- Поддерживает внешние редиректы
- Работает с \`return\` в middleware

\`\`\`vue
<script setup>
// Простой переход
await navigateTo('/about')

// С опциями
await navigateTo({
  path: '/users',
  query: { page: 1 }
}, {
  replace: true,       // заменить в истории
  redirectCode: 301,   // код редиректа (для SSR)
  external: true       // внешняя ссылка
})

// Внешний URL
await navigateTo('https://google.com', { external: true })
</script>
\`\`\`

**В middleware:**
\`\`\`typescript
export default defineNuxtRouteMiddleware((to) => {
  if (!isAuthenticated()) {
    return navigateTo('/login')  // ✅ работает
    // router.push('/login')     // ❌ не сработает в SSR
  }
})
\`\`\`

**Сравнение методов навигации:**

| Метод | Где работает | Когда использовать |
|---|---|---|
| \`<NuxtLink>\` | Template | Основная навигация |
| \`navigateTo()\` | Везде (SSR + CSR) | Middleware, actions, серверный код |
| \`router.push()\` | Только клиент | Клиентская навигация |

**Практический пример — форма входа:**
\`\`\`vue
<script setup>
const router = useRouter()
const route = useRoute()

async function login(credentials) {
  try {
    await useAuthStore().login(credentials)
    
    // Редирект на страницу, с которой пришли
    const redirect = route.query.redirect || '/'
    await navigateTo(redirect)
  } catch (error) {
    console.error('Ошибка входа:', error)
  }
}
</script>
\`\`\`

💡 **Для собеседования:** Ошибки в Nuxt обрабатываются через \`error.vue\`, \`createError()\`, и хуки \`vue:error\`/\`app:error\`. \`useRoute()\` — информация о текущем маршруте. \`useRouter()\` — программная навигация на клиенте. \`navigateTo()\` — универсальная навигация (работает в middleware и SSR). В middleware используйте \`navigateTo\`, а не \`router.push\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
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
"id": `5-middle-общее-1`,
"title": `Что такое гидратация и hydration mismatch? Как избежать (<ClientOnly>, <ServerOnly>)?`,
"fullAnswer": `## Гидратация (Hydration)

**Гидратация** — процесс, при котором Vue «оживляет» статический HTML, отрендеренный на сервере, добавляя реактивность и обработчики событий.

**Этапы:**
1. Сервер рендерит компонент в HTML-строку
2. Браузер получает HTML и сразу отображает (быстрый FCP)
3. Загружается JS-бандл
4. Vue создаёт виртуальный DOM и сравнивает с реальным
5. Навешивает реактивность и обработчики на существующие DOM-узлы

**Ключевой принцип:** HTML от сервера и HTML, который сгенерировал бы клиент, должны **идентично совпадать**.

---

## Hydration Mismatch

Ошибка, когда серверный и клиентский HTML различаются. Vue 3 показывает предупреждение в консоли и пытается «починить» DOM, но это может привести к багам.

**Типичные причины:**

**1. Браузерные API на сервере:**
\`\`\`vue
<!-- ❌ На сервере window недоступен -->
<div>{{ window.innerWidth }}</div>

<!-- ✅ Решение -->
<div>{{ isClient ? window.innerWidth : 'loading' }}</div>

<script setup>
const isClient = ref(false)
onMounted(() => { isClient.value = true })
</script>
\`\`\`

**2. Случайные значения:**
\`\`\`vue
<!-- ❌ Разные значения на сервере и клиенте -->
<div>{{ Math.random() }}</div>
<div>{{ new Date().toLocaleTimeString() }}</div>

<!-- ✅ Генерировать только на клиенте -->
<ClientOnly>
  <div>{{ Math.random() }}</div>
</ClientOnly>
\`\`\`

**3. v-if с проверкой окружения:**
\`\`\`vue
<!-- ❌ -->
<div v-if="typeof window !== 'undefined'">Browser only</div>

<!-- ✅ -->
<ClientOnly>
  <div>Browser only</div>
</ClientOnly>
\`\`\`

**4. Контент из localStorage/cookies:**
\`\`\`vue
<!-- ❌ На сервере localStorage недоступен -->
<div>{{ localStorage.getItem('theme') }}</div>
\`\`\`

---

## Решения

**\`<ClientOnly>\`** — рендерит содержимое только на клиенте:
\`\`\`vue
<template>
  <ClientOnly fallback-tag="span">
    <ThirdPartyWidget />
    <template #fallback>
      <div>Загрузка виджета...</div>
    </template>
  </ClientOnly>
</template>
\`\`\`

**\`<ServerOnly>\`** (Nuxt 3.4+) — рендерит только на сервере:
\`\`\`vue
<ServerOnly>
  <SecretContent />
</ServerOnly>
\`\`\`

**\`onMounted\` для клиентского кода:**
\`\`\`vue
<script setup>
onMounted(() => {
  // Код выполнится только на клиенте
  initThirdPartyLibrary()
  const theme = localStorage.getItem('theme')
})
</script>
\`\`\`

**\`import.meta.env.SSR\`:**
\`\`\`javascript
if (import.meta.env.SSR) {
  // Серверный код
} else {
  // Клиентский код
}
\`\`\`

**\`v-show\` вместо \`v-if\`:**
\`\`\`vue
<!-- v-show рендерит элемент всегда, но скрывает через CSS -->
<div v-show="isClient">Контент</div>
\`\`\`

**\`client:only\` для компонентов:**
\`\`\`vue
<template>
  <!-- Компонент загружается только на клиенте -->
  <HeavyWidget client:only="vue" />
</template>
\`\`\`

 **Для собеседования:** Гидратация — процесс «оживления» серверного HTML. Hydration mismatch возникает при различиях между серверным и клиентским HTML (браузерные API, случайные значения, localStorage). Решения: \`<ClientOnly>\`, \`<ServerOnly>\`, \`onMounted\`, \`import.meta.env.SSR\`, \`v-show\` вместо \`v-if\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-2`,
"title": `Как работает useAsyncData под капотом? Опции (server, lazy, transform, pick).`,
"fullAnswer": `## Архитектура useAsyncData

\`useAsyncData\` — это обёртка над системой кэширования Nuxt, которая обеспечивает:
- **Дедупликацию запросов** (один запрос на несколько компонентов)
- **SSR-совместимость** (данные передаются с сервера на клиент)
- **Кэширование** (повторное использование данных)

**Под капотом:**

\`\`\`javascript
// Упрощённая внутренняя логика
export function useAsyncData(key, handler, options) {
  const nuxtApp = useNuxtApp()
  
  // 1. Проверяем кэш (важно для SSR)
  const cached = nuxtApp.payload.data[key]
  if (cached) {
    return { data: ref(cached), pending: ref(false), ... }
  }
  
  // 2. Создаём реактивные состояния
  const data = ref(null)
  const pending = ref(true)
  const error = ref(null)
  
  // 3. Выполняем handler
  Promise.resolve(handler())
    .then(result => {
      // Применяем transform если есть
      if (options.transform) {
        result = options.transform(result)
      }
      // Применяем pick если есть
      if (options.pick) {
        result = pick(result, options.pick)
      }
      data.value = result
    })
    .catch(err => { error.value = err })
    .finally(() => { pending.value = false })
  
  // 4. Сохраняем в payload для гидратации
  nuxtApp.payload.data[key] = data.value
  
  return { data, pending, error, refresh, status }
}
\`\`\`

**Ключевые механизмы:**

**1. Ключ (key):**
- Используется для идентификации запроса
- По умолчанию генерируется автоматически из стека вызовов
- Два компонента с одинаковым ключом = один запрос

**2. Payload для SSR:**
- На сервере результат сохраняется в \`nuxtApp.payload.data\`
- Сериализуется в \`__NUXT__\` в HTML
- На клиенте читается из payload, запрос не повторяется

**3. Дедупликация:**
\`\`\`javascript
// Компонент A
const { data: usersA } = await useAsyncData('users', () => $fetch('/api/users'))

// Компонент B (на той же странице)
const { data: usersB } = await useAsyncData('users', () => $fetch('/api/users'))

// usersA === usersB — запрос выполнен ОДИН раз
\`\`\`

---

## Опции

**\`server: boolean\`** — выполнять ли на сервере:
\`\`\`javascript
// ❌ Только на клиенте (полезно для персональных данных)
const { data } = await useAsyncData('profile', () => $fetch('/api/me'), {
  server: false
})
\`\`\`

**\`lazy: boolean\`** — не блокировать навигацию:
\`\`\`javascript
// Страница отрисуется сразу, данные подгрузятся позже
const { data, pending } = await useAsyncData('heavy', () => 
  $fetch('/api/heavy-data'),
  { lazy: true }
)
// pending = true на первом рендере
\`\`\`

**\`transform: (response) => transformed\`** — трансформация ответа:
\`\`\`javascript
const { data } = await useAsyncData('users', () => 
  $fetch('/api/users'),
  {
    transform: (res) => res.users.map(u => ({
      id: u.id,
      name: u.name.toUpperCase()
    }))
  }
)
// data.value уже трансформирован
\`\`\`

**\`pick: string[]\`** — выбрать только нужные поля:
\`\`\`javascript
const { data } = await useAsyncData('user', () => 
  $fetch('/api/user/1'),
  {
    pick: ['id', 'name', 'email']
    // Остальные поля (пароль, токен) не попадут в payload
  }
)
\`\`\`

**Другие опции:**
\`\`\`javascript
{
  watch: [someRef],           // перезапрос при изменении
  immediate: true,            // выполнить сразу (по умолчанию)
  default: () => [],          // значение по умолчанию
  dedupe: 'cancel' | 'defer', // стратегия дедупликации
  getCachedData: (key) => {   // кастомная логика кэша
    return useNuxtData(key).data.value
  }
}
\`\`\`

**\`dedupe\` стратегии:**
- \`'cancel'\` (по умолчанию) — отменяет предыдущий запрос
- \`'defer'\` — ждёт завершения предыдущего

💡 **Для собеседования:** \`useAsyncData\` использует ключ для дедупликации и кэширования. На сервере результат сохраняется в \`nuxtApp.payload.data\` и сериализуется в HTML для гидратации. Опции: \`server\` (выполнять на сервере), \`lazy\` (не блокировать навигацию), \`transform\` (трансформация ответа), \`pick\` (выбор полей), \`dedupe\` (стратегия дедупликации).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-3`,
"title": `Чем useFetch отличается от useAsyncData? Что такое useLazyFetch и refreshNuxtData?`,
"fullAnswer": `## useFetch vs useAsyncData

**\`useFetch\`** — это обёртка над \`useAsyncData\` + \`$fetch\`. Предназначена специально для HTTP-запросов.

**\`useAsyncData\`** — более универсальный композабл для любой асинхронной логики.

**Внутренняя реализация useFetch:**
\`\`\`javascript
// Упрощённо
export function useFetch(url, options = {}) {
  return useAsyncData(options.key || url, () => {
    return $fetch(url, {
      ...options,
      // useFetch добавляет:
      baseURL: config.public.apiBase,
      headers: { ...options.headers }
    })
  }, options)
}
\`\`\`

**Ключевые отличия:**

| Характеристика | \`useFetch\` | \`useAsyncData\` |
|---|---|---|
| Первый аргумент | URL | Уникальный ключ |
| Источник данных | Только \`$fetch\` | Любая async функция |
| HTTP-опции | \`method\`, \`body\`, \`headers\`, \`query\`, \`baseURL\` | Нет |
| Когда использовать | Обычные API-запросы | Сложная логика, не HTTP |

**Пример useFetch с HTTP-опциями:**
\`\`\`javascript
const { data } = await useFetch('/api/users', {
  method: 'POST',
  body: { name: 'John' },
  headers: { 'Authorization': 'Bearer token' },
  query: { page: 1, limit: 10 },
  baseURL: 'https://api.example.com',
  onResponse({ response }) {
    console.log('Response:', response.status)
  },
  onResponseError({ response }) {
    console.error('Error:', response.status)
  }
})
\`\`\`

**Эквивалент через useAsyncData:**
\`\`\`javascript
const { data } = await useAsyncData('users', () => {
  return $fetch('/api/users', {
    method: 'POST',
    body: { name: 'John' },
    headers: { 'Authorization': 'Bearer token' },
    query: { page: 1, limit: 10 },
    baseURL: 'https://api.example.com'
  })
})
\`\`\`

---

## useLazyFetch

**\`useLazyFetch\`** — это \`useFetch\` с \`lazy: true\` по умолчанию. Не блокирует навигацию.

\`\`\`javascript
// Обычный useFetch — блокирует переход на страницу
const { data } = await useFetch('/api/heavy-data')

// useLazyFetch — страница отрисуется сразу
const { data, pending } = useLazyFetch('/api/heavy-data')
// pending = true, пока данные грузятся
\`\`\`

**Когда использовать:**
- Тяжёлые запросы, которые не критичны для первого рендера
- Данные «ниже сгиба» (below the fold)
- Аналитика, рекомендации, похожие товары

**Аналог — \`useLazyAsyncData\`:**
\`\`\`javascript
const { data } = useLazyAsyncData('stats', () => $fetch('/api/stats'))
\`\`\`

---

## refreshNuxtData

Функция для **принудительного обновления кэша** данных.

\`\`\`javascript
import { refreshNuxtData } from '#app'

// Обновить конкретный ключ
await refreshNuxtData('users')

// Обновить все данные
await refreshNuxtData()
\`\`\`

**Практическое применение:**

**1. После мутации данных:**
\`\`\`javascript
async function deleteUser(id) {
  await $fetch(\`/api/users/\${id}\`, { method: 'DELETE' })
  await refreshNuxtData('users') // обновить список
}
\`\`\`

**2. Pull-to-refresh:**
\`\`\`javascript
async function onPullRefresh() {
  await refreshNuxtData('feed')
}
\`\`\`

**3. После изменения фильтра:**
\`\`\`javascript
watch(filters, async () => {
  await refreshNuxtData('products')
})
\`\`\`

**Альтернатива — метод \`refresh\` из useAsyncData:**
\`\`\`javascript
const { data, refresh } = await useAsyncData('users', () => 
  $fetch('/api/users')
)

// Локальное обновление (только для этого вызова)
await refresh()
\`\`\`

**Разница:**
- \`refresh()\` — обновляет только конкретный вызов
- \`refreshNuxtData(key)\` — обновляет все вызовы с этим ключом (включая другие компоненты)

💡 **Для собеседования:** \`useFetch\` — обёртка над \`useAsyncData\` + \`$fetch\` с HTTP-опциями. \`useLazyFetch\` — не блокирует навигацию (\`lazy: true\`). \`refreshNuxtData(key)\` — глобальное обновление кэша по ключу. \`useAsyncData\` — для любой async-логики, не только HTTP.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-4`,
"title": `Что такое $fetch и useRequestFetch? Как работать с куками (useCookie)?`,
"fullAnswer": `## $fetch

**\`$fetch\`** — универсальный HTTP-клиент Nuxt, основанный на \`ofetch\`. Работает **и на сервере, и на клиенте**.

**Ключевые особенности:**

**1. Автоматический baseURL:**
\`\`\`javascript
// На сервере: прямой вызов без сети (через Nitro)
// На клиенте: обычный HTTP-запрос
const data = await $fetch('/api/users')
\`\`\`

**2. Умная маршрутизация:**
На сервере \`$fetch('/api/...')\` идёт **напрямую** в серверные обработчики Nitro, без сетевого запроса. Это быстрее и не требует CORS.

**3. Автопарсинг JSON:**
\`\`\`javascript
// Не нужно делать .json()
const user = await $fetch('/api/user/1')  // уже объект
\`\`\`

**4. Обработка ошибок:**
\`\`\`javascript
try {
  const data = await $fetch('/api/data')
} catch (error) {
  console.error(error.data)    // тело ошибки
  console.error(error.status)  // HTTP статус
  console.error(error.message) // сообщение
}
\`\`\`

**5. Создание инстанса:**
\`\`\`javascript
const apiFetch = $fetch.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': \`Bearer \${token}\`
  },
  onResponse({ response }) {
    // логирование
  }
})

const users = await apiFetch('/users')
\`\`\`

---

## useRequestFetch

**\`useRequestFetch\`** — создаёт \`$fetch\`, который **на сервере** сохраняет заголовки и cookies **исходного запроса** пользователя.

**Проблема:**
Обычный \`$fetch\` на сервере не знает о cookies и заголовках браузерного запроса.

\`\`\`javascript
// ❌ На сервере cookies браузера не передадутся
const data = await $fetch('/api/protected')
\`\`\`

**Решение:**
\`\`\`javascript
const $fetch = useRequestFetch()

// ✅ Заголовки и cookies исходного запроса передадутся
const data = await $fetch('/api/protected')
\`\`\`

**Когда использовать:**
- Серверные вызовы к защищённым эндпоинтам
- Когда нужно передать cookies авторизации
- Проксирование запросов

**Пример:**
\`\`\`typescript
// server/api/me.ts
export default defineEventHandler(async (event) => {
  const $fetch = useRequestFetch()
  // Запрос к внутреннему API с cookies пользователя
  const user = await $fetch('/api/internal/user')
  return user
})
\`\`\`

---

## useCookie

**\`useCookie\`** — реактивный композабл для работы с cookies. Работает и на сервере, и на клиенте.

**Базовое использование:**
\`\`\`javascript
const token = useCookie('auth-token')

// Чтение
console.log(token.value)  // string | undefined

// Запись
token.value = 'new-token'

// Удаление
token.value = null
\`\`\`

**Опции:**
\`\`\`javascript
const theme = useCookie('theme', {
  default: () => 'light',       // значение по умолчанию
  maxAge: 60 * 60 * 24 * 30,    // 30 дней в секундах
  secure: true,                 // только HTTPS
  httpOnly: false,              // доступен из JS
  sameSite: 'lax',              // 'strict' | 'lax' | 'none'
  path: '/',                    // путь
  domain: '.example.com'        // домен
})
\`\`\`

**Реактивность:**
\`\`\`javascript
const token = useCookie('token')

// Изменение в одном месте обновляет везде
watch(token, (newVal) => {
  console.log('Token changed:', newVal)
})
\`\`\`

**Практические примеры:**

**1. Авторизация:**
\`\`\`javascript
// stores/auth.ts
export const useAuthStore = defineStore('auth', () => {
  const token = useCookie('auth-token', {
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    sameSite: 'strict'
  })
  
  const user = useState('user', () => null)
  
  async function login(credentials) {
    const data = await $fetch('/api/login', {
      method: 'POST',
      body: credentials
    })
    token.value = data.token
    user.value = data.user
  }
  
  function logout() {
    token.value = null
    user.value = null
    navigateTo('/login')
  }
  
  const isAuthenticated = computed(() => !!token.value)
  
  return { token, user, login, logout, isAuthenticated }
})
\`\`\`

**2. Тема оформления:**
\`\`\`javascript
const theme = useCookie('theme', {
  default: () => 'light',
  maxAge: 60 * 60 * 24 * 365
})

watch(theme, (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
})
\`\`\`

**3. Аналитика (opt-out):**
\`\`\`javascript
const analyticsConsent = useCookie('analytics-consent', {
  default: () => null  // не согласился и не отказался
})
\`\`\`

**Безопасность:**
- Никогда не храните чувствительные данные в cookies без \`httpOnly\` и \`secure\`
- Используйте \`sameSite: 'strict'\` для критичных cookies
- Ограничивайте \`maxAge\`

💡 **Для собеседования:** \`$fetch\` — универсальный HTTP-клиент (ofetch), на сервере идёт напрямую в Nitro без сети. \`useRequestFetch\` сохраняет заголовки и cookies исходного запроса. \`useCookie\` — реактивный композабл для cookies с опциями (\`maxAge\`, \`secure\`, \`sameSite\`, \`httpOnly\`).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-5`,
"title": `Что такое Nitro и серверное хранилище (useStorage)?`,
"fullAnswer": `## Nitro

**Nitro** — это серверный движок Nuxt, созданный командой Nuxt (Pooya Parsa). Отвечает за SSR, API-эндпоинты, серверные функции и деплой.

**Ключевые возможности:**

**1. Универсальный деплой:**
Nitro поддерживает множество платформ из коробки:
- Node.js (стандартный сервер)
- Serverless (AWS Lambda, Vercel, Netlify)
- Edge (Cloudflare Workers, Deno Deploy)
- Static (полностью статические сайты)

\`\`\`javascript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'  // или 'vercel', 'cloudflare', 'static'
  }
})
\`\`\`

**2. Серверные обработчики:**
\`\`\`typescript
// server/api/hello.ts
export default defineEventHandler((event) => {
  return { message: 'Hello from Nitro!' }
})
\`\`\`

**3. Серверные функции (Server Functions):**
\`\`\`typescript
// composables/useServer.ts
export const getUser = defineServerFunction(async (id: number) => {
  // Выполняется только на сервере
  return await db.users.findById(id)
})

// В компоненте
const user = await getUser(1)  // вызов как обычной функции
\`\`\`

**4. Кэширование на уровне сервера:**
\`\`\`typescript
// server/api/cached.ts
export default cachedEventHandler(async (event) => {
  const data = await expensiveOperation()
  return data
}, {
  maxAge: 60 * 5,  // 5 минут
  group: 'api',
  name: 'cached-data'
})
\`\`\`

**5. Prerendering:**
\`\`\`javascript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/about', '/contact'],
      crawlLinks: true
    }
  }
})
\`\`\`

---

## useStorage

**\`useStorage\`** — универсальный API для работы с различными хранилищами на сервере (файловая система, Redis, memory, S3 и т.д.).

**Базовое использование:**
\`\`\`typescript
// server/api/cache.ts
export default defineEventHandler(async () => {
  const storage = useStorage()
  
  // Запись
  await storage.setItem('my-key', { data: 'value' })
  
  // Чтение
  const value = await storage.getItem('my-key')
  
  // Удаление
  await storage.removeItem('my-key')
  
  // Проверка
  const exists = await storage.hasItem('my-key')
  
  // Список ключей
  const keys = await storage.getKeys()
})
\`\`\`

**Именованные хранилища:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        url: process.env.REDIS_URL
      },
      s3: {
        driver: 's3',
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        bucket: 'my-bucket'
      }
    }
  }
})

// Использование
const redis = useStorage('redis')
await redis.setItem('session:123', { userId: 1 })

const s3 = useStorage('s3')
await s3.setItem('uploads/image.png', fileBuffer)
\`\`\`

**Встроенные драйверы:**
- \`memory\` — в памяти (по умолчанию)
- \`fs\` — файловая система
- \`redis\` — Redis
- \`s3\` — Amazon S3
- \`cloudflare-kv\` — Cloudflare KV
- \`vercel-kv\` — Vercel KV
- \`github\` — GitHub

**Практические примеры:**

**1. Кэширование API-ответов:**
\`\`\`typescript
export default defineEventHandler(async (event) => {
  const cache = useStorage('cache')
  const key = 'products:list'
  
  let products = await cache.getItem(key)
  
  if (!products) {
    products = await fetchProductsFromDB()
    await cache.setItem(key, products, {
      ttl: 60 * 5  // 5 минут
    })
  }
  
  return products
})
\`\`\`

**2. Rate limiting:**
\`\`\`typescript
export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event)
  const key = \`ratelimit:\${ip}\`
  const storage = useStorage()
  
  const count = await storage.getItem<number>(key) || 0
  
  if (count > 100) {
    throw createError({ statusCode: 429, message: 'Too many requests' })
  }
  
  await storage.setItem(key, count + 1, { ttl: 60 })
})
\`\`\`

**3. Сессии:**
\`\`\`typescript
export async function getSession(sessionId: string) {
  const storage = useStorage('sessions')
  return await storage.getItem(\`session:\${sessionId}\`)
}

export async function saveSession(sessionId: string, data: any) {
  const storage = useStorage('sessions')
  await storage.setItem(\`session:\${sessionId}\`, data, {
    ttl: 60 * 60 * 24 * 7  // 7 дней
  })
}
\`\`\`

**На клиенте:**
\`useStorage\` работает **только на сервере**. На клиенте используйте \`localStorage\` или \`useCookie\`.

💡 **Для собеседования:** Nitro — серверный движок Nuxt с поддержкой множества платформ деплоя (Node, Serverless, Edge). \`useStorage\` — универсальный API для работы с хранилищами (memory, fs, Redis, S3). Используется для кэширования, сессий, rate limiting. Настраивается через \`nitro.storage\` в \`nuxt.config.ts\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-6`,
"title": `Что такое серверные middleware и Nuxt plugins?`,
"fullAnswer": `## Серверные middleware

**Серверные middleware** — функции, которые выполняются **перед** каждым серверным запросом (API-эндпоинты, страницы, ассеты). Аналог middleware в Express.

**Структура:**
\`\`\`
server/
  middleware/
    auth.ts        → выполняется для ВСЕХ запросов
    logger.ts      → выполняется для ВСЕХ запросов
  api/
    users.ts       → только для /api/users
\`\`\`

**Создание middleware:**
\`\`\`typescript
// server/middleware/auth.ts
export default defineEventHandler((event) => {
  // Выполняется для каждого запроса
  const token = getHeader(event, 'authorization')
  
  // Можно добавить данные в контекст
  event.context.user = { id: 1, role: 'admin' }
  
  // Можно прервать запрос
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }
})
\`\`\`

**Порядок выполнения:**
1. Серверные middleware (\`server/middleware/\`)
2. Серверные обработчики (\`server/api/\`, \`server/routes/\`)

**Примеры использования:**

**1. Логирование:**
\`\`\`typescript
// server/middleware/logger.ts
export default defineEventHandler((event) => {
  console.log(\`\${event.method} \${event.path}\`)
  event.context.startTime = Date.now()
  
  // Можно использовать onResponse для логирования после
  event.node.res.on('finish', () => {
    const duration = Date.now() - event.context.startTime
    console.log(\`Completed in \${duration}ms\`)
  })
})
\`\`\`

**2. CORS:**
\`\`\`typescript
// server/middleware/cors.ts
export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  })
  
  if (event.method === 'OPTIONS') {
    setResponseStatus(event, 204)
    return ''
  }
})
\`\`\`

**3. Rate limiting:**
\`\`\`typescript
// server/middleware/ratelimit.ts
const requests = new Map()

export default defineEventHandler((event) => {
  const ip = getRequestIP(event)
  const count = requests.get(ip) || 0
  
  if (count > 100) {
    throw createError({ statusCode: 429 })
  }
  
  requests.set(ip, count + 1)
  setTimeout(() => requests.delete(ip), 60000)
})
\`\`\`

**4. Проверка API-ключа:**
\`\`\`typescript
export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/protected')) {
    const key = getHeader(event, 'x-api-key')
    if (key !== process.env.API_KEY) {
      throw createError({ statusCode: 403 })
    }
  }
})
\`\`\`

---

## Nuxt Plugins

**Nuxt plugins** — код, который выполняется **до** создания Vue-приложения. Используется для инициализации библиотек, регистрации глобальных компонентов, настройки.

**Структура:**
\`\`\`
plugins/
  my-plugin.ts       → выполняется везде (client + server)
  my-plugin.client.ts → только на клиенте
  my-plugin.server.ts → только на сервере
\`\`\`

**Создание плагина:**
\`\`\`typescript
// plugins/analytics.ts
export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp — экземпляр приложения
  
  // Регистрация глобального метода
  nuxtApp.provide('analytics', {
    track(event: string, data?: any) {
      console.log('Track:', event, data)
      // Отправка в аналитику
    }
  })
})
\`\`\`

**Использование в компоненте:**
\`\`\`vue
<script setup>
const { $analytics } = useNuxtApp()

$analytics.track('page_view', { page: '/about' })
</script>
\`\`\`

**Типы плагинов:**

**1. Order (порядок выполнения):**
\`\`\`typescript
export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre',  // 'pre' | 'post' (по умолчанию)
  setup(nuxtApp) {
    // ...
  }
})
\`\`\`

**2. Client-only:**
\`\`\`typescript
// plugins/only-client.client.ts
export default defineNuxtPlugin(() => {
  window.something = 'client only'
})
\`\`\`

**3. Регистрация Vue-плагинов:**
\`\`\`typescript
// plugins/vue-plugins.ts
import { createPinia } from 'pinia'
import vuetify from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  nuxtApp.vueApp.use(vuetify)
})
\`\`\`

**4. Хуки Nuxt:**
\`\`\`typescript
export default defineNuxtPlugin((nuxtApp) => {
  // Хуки приложения
  nuxtApp.hook('app:created', () => {
    console.log('App created')
  })
  
  nuxtApp.hook('app:beforeMount', () => {
    console.log('Before mount')
  })
  
  nuxtApp.hook('app:mounted', () => {
    console.log('App mounted')
  })
  
  nuxtApp.hook('app:error', (error) => {
    console.error('App error:', error)
  })
  
  // Хуки Vue
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.error('Vue error:', error)
  })
  
  // Хуки страницы
  nuxtApp.hook('page:start', () => {
    console.log('Page start loading')
  })
  
  nuxtApp.hook('page:finish', () => {
    console.log('Page finished loading')
  })
})
\`\`\`

**Разница между middleware и plugins:**

| Характеристика | Server Middleware | Nuxt Plugin |
|---|---|---|
| Где выполняется | Только сервер | Client + Server |
| Когда | Перед каждым HTTP-запросом | До создания Vue-приложения |
| Для чего | CORS, auth, логирование | Инициализация библиотек, хуки |
| Доступ к Vue | Нет | Да (nuxtApp.vueApp) |

💡 **Для собеседования:** Серверные middleware (\`server/middleware/\`) выполняются перед каждым HTTP-запросом (CORS, auth, логирование). Nuxt plugins (\`plugins/\`) инициализируют приложение до создания Vue (регистрация библиотек, хуки). Плагины могут быть client-only (\`.client.ts\`) или server-only (\`.server.ts\`). Доступ к хукам через \`nuxtApp.hook()\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-7`,
"title": `Как реализовать аутентификацию и работать с хуками жизненного цикла Nuxt?`,
"fullAnswer": `## Аутентификация в Nuxt

**Архитектура:**
1. Пользователь логинится → получаем токен
2. Токен сохраняем в cookie (\`useCookie\`)
3. Middleware проверяет токен на каждом запросе
4. Серверные эндпоинты валидируют токен

**1. Стор авторизации:**
\`\`\`typescript
// stores/auth.ts
export const useAuthStore = defineStore('auth', () => {
  const token = useCookie<string | null>('auth-token', {
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    sameSite: 'strict',
    httpOnly: false
  })
  
  const user = useState<User | null>('user', () => null)
  
  const isAuthenticated = computed(() => !!token.value)
  
  async function login(credentials: LoginPayload) {
    const { data } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    
    if (data.value) {
      token.value = data.value.token
      user.value = data.value.user
    }
  }
  
  async function logout() {
    await $fetch('/api/auth/logout', { method: 'POST' })
    token.value = null
    user.value = null
    await navigateTo('/login')
  }
  
  async function fetchUser() {
    if (!token.value) return
    
    try {
      const { data } = await useFetch('/api/auth/me')
      user.value = data.value
    } catch {
      token.value = null
    }
  }
  
  return { token, user, isAuthenticated, login, logout, fetchUser }
})
\`\`\`

**2. Middleware авторизации:**
\`\`\`typescript
// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()
  
  // Публичные страницы
  const publicPages = ['/login', '/register', '/about']
  if (publicPages.includes(to.path)) return
  
  // Если нет токена — редирект на логин
  if (!auth.token.value) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  
  // Проверяем валидность токена
  if (!auth.user.value) {
    await auth.fetchUser()
    if (!auth.user.value) {
      return navigateTo('/login')
    }
  }
})
\`\`\`

**3. Серверный middleware:**
\`\`\`typescript
// server/middleware/auth.ts
export default defineEventHandler((event) => {
  // Только для защищённых эндпоинтов
  if (!event.path.startsWith('/api/protected')) return
  
  const token = getHeader(event, 'authorization')?.replace('Bearer ', '')
  
  if (!token) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  
  // Валидация токена (например, JWT)
  try {
    const decoded = verifyToken(token)
    event.context.user = decoded
  } catch {
    throw createError({ statusCode: 401, message: 'Invalid token' })
  }
})
\`\`\`

**4. Защита страниц через meta:**
\`\`\`typescript
// middleware/check-role.ts
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  
  if (to.meta.requiresAdmin && auth.user.value?.role !== 'admin') {
    return abortNavigation('Доступ запрещён')
  }
})

// pages/admin.vue
<script setup>
definePageMeta({
  middleware: ['auth', 'check-role'],
  requiresAdmin: true
})
</script>
\`\`\`

---

## Хуки жизненного цикла Nuxt

**Хуки приложения (nuxtApp.hook):**

\`\`\`typescript
export default defineNuxtPlugin((nuxtApp) => {
  // Создание приложения
  nuxtApp.hook('app:created', (vueApp) => {
    console.log('Vue app created')
  })
  
  // Перед монтированием
  nuxtApp.hook('app:beforeMount', (vueApp) => {
    console.log('Before mount')
  })
  
  // После монтирования
  nuxtApp.hook('app:mounted', (vueApp) => {
    console.log('App mounted')
  })
  
  // Перед обновлением (CSR навигация)
  nuxtApp.hook('app:beforeUpdate', () => {
    console.log('Before update')
  })
  
  // После обновления
  nuxtApp.hook('app:updated', () => {
    console.log('App updated')
  })
  
  // Ошибка приложения
  nuxtApp.hook('app:error', (error) => {
    console.error('App error:', error)
    // Отправка в Sentry
  })
  
  // Очистка ошибки
  nuxtApp.hook('app:error:cleared', ({ redirect }) => {
    console.log('Error cleared')
  })
})
\`\`\`

**Хуки страницы:**
\`\`\`typescript
nuxtApp.hook('page:start', (pageComponent) => {
  console.log('Page start loading')
  // Показать индикатор загрузки
})

nuxtApp.hook('page:loading:start', () => {
  // Начало загрузки прогресс-бара
})

nuxtApp.hook('page:loading:end', () => {
  // Конец загрузки
})

nuxtApp.hook('page:finish', (pageComponent) => {
  console.log('Page finished')
  // Скрыть индикатор
})

nuxtApp.hook('page:transition:finish', (pageComponent) => {
  console.log('Transition finished')
})
\`\`\`

**Хуки Vue:**
\`\`\`typescript
nuxtApp.hook('vue:error', (error, instance, info) => {
  console.error('Vue component error:', error)
})
\`\`\`

**Хуки в компонентах:**
\`\`\`vue
<script setup>
onNuxtReady(() => {
  // Выполнится когда Nuxt полностью готов
})

// Стандартные Vue хуки тоже работают
onMounted(() => { ... })
onUnmounted(() => { ... })
</script>
\`\`\`

**Порядок выполнения:**
1. \`app:created\` — создание Vue-приложения
2. \`app:beforeMount\` — перед монтированием
3. \`page:start\` — начало загрузки страницы
4. \`app:mounted\` — приложение смонтировано
5. \`page:finish\` — страница загружена
6. \`page:transition:finish\` — анимация перехода завершена

💡 **Для собеседования:** Аутентификация в Nuxt: токен в cookie (\`useCookie\`), стор с \`useState\`, глобальный middleware для проверки, серверный middleware для валидации. Хуки Nuxt: \`app:created\`, \`app:mounted\`, \`page:start\`, \`page:finish\`, \`app:error\`. Доступ через \`nuxtApp.hook()\` в плагинах.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-8`,
"title": `Как оптимизировать изображения, кэширование маршрутов и prerendering?`,
"fullAnswer": `## Оптимизация изображений

**\`<NuxtImg>\` и \`<NuxtPicture>\`** — компоненты из модуля \`@nuxt/image\` для автоматической оптимизации.

**Установка:**
\`\`\`bash
npm i @nuxt/image
\`\`\`

\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  image: {
    domains: ['example.com'],
    formats: ['webp', 'avif'],
    quality: 80
  }
})
\`\`\`

**Использование:**
\`\`\`vue
<template>
  <!-- Автоматическая оптимизация -->
  <NuxtImg
    src="/images/photo.jpg"
    :width="800"
    :height="600"
    format="webp"
    quality="80"
    loading="lazy"
    alt="Photo"
  />
  
  <!-- Адаптивные изображения -->
  <NuxtPicture
    src="/images/photo.jpg"
    :width="1200"
    sizes="sm:100vw md:50vw lg:400px"
  />
</template>
\`\`\`

**Модификаторы:**
\`\`\`vue
<NuxtImg
  src="/photo.jpg"
  :modifiers="{
    width: 400,
    height: 300,
    fit: 'cover',
    quality: 75,
    format: 'webp'
  }"
/>
\`\`\`

**Преимущества:**
- Автоматическая конвертация в WebP/AVIF
- Responsive images через \`srcset\`
- Lazy loading из коробки
- Кэширование на CDN
- Blur placeholder

---

## Кэширование маршрутов

**1. Route Rules (Nuxt 3.8+):**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    // Статические страницы — кэш на 1 час
    '/about': { swr: true, isr: 3600 },
    
    // API — кэш на 10 минут
    '/api/products': { swr: 600 },
    
    // Динамические — без кэша
    '/dashboard/**': { cache: false },
    
    // Редиректы
    '/old-page': { redirect: '/new-page' },
    
    // Заголовки
    '/api/**': {
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    },
    
    // Пререндеринг
    '/blog/**': { prerender: true }
  }
})
\`\`\`

**2. SWR (Stale-While-Revalidate):**
\`\`\`typescript
// Страница отдаётся из кэша, а в фоне обновляется
export default defineNuxtConfig({
  routeRules: {
    '/products': { swr: true }
  }
})
\`\`\`

**3. ISR (Incremental Static Regeneration):**
\`\`\`typescript
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { isr: 60 }  // регенерация каждые 60 секунд
  }
})
\`\`\`

**4. Кэширование в useAsyncData:**
\`\`\`javascript
const { data } = await useAsyncData('products', () => 
  $fetch('/api/products'),
  {
    // Кастомная логика кэша
    getCachedData: (key) => {
      const cached = useNuxtData(key).data.value
      if (cached && Date.now() - cached.timestamp < 60000) {
        return cached
      }
      return undefined
    }
  }
)
\`\`\`

---

## Prerendering

**Prerendering** — генерация HTML для указанных маршрутов **во время сборки**.

**1. Базовая настройка:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/about', '/contact', '/blog'],
      crawlLinks: true,  // автоматически находить ссылки
      failOnError: false
    }
  }
})
\`\`\`

**2. Динамические маршруты:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: async () => {
        const products = await $fetch('/api/products')
        return products.map(p => \`/products/\${p.slug}\`)
      }
    }
  }
})
\`\`\`

**3. Prerender через routeRules:**
\`\`\`typescript
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { prerender: true }
  }
})
\`\`\`

**4. Команда для сборки:**
\`\`\`bash
npx nuxt generate  # полный статический сайт
# или
npx nuxt build     # с частичным prerendering
\`\`\`

**Когда использовать prerendering:**
- Блоги, документация, лендинги
- Страницы, которые редко меняются
- SEO-критичные страницы

**Когда НЕ использовать:**
- Персонализированный контент
- Дашборды, админки
- Страницы с частыми обновлениями

**Гибридный подход:**
\`\`\`typescript
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },              // статика
    '/blog/**': { isr: 60 },               // ISR
    '/products/**': { swr: 300 },          // SWR
    '/dashboard/**': { ssr: true },        // обычный SSR
    '/admin/**': { ssr: false }            // только клиент
  }
})
\`\`\`

💡 **Для собеседования:** Изображения оптимизируются через \`@nuxt/image\` (\`<NuxtImg>\`, \`<NuxtPicture>\`). Кэширование маршрутов — через \`routeRules\` (SWR, ISR, headers). Prerendering генерирует HTML при сборке для указанных маршрутов. Гибридный рендеринг позволяет комбинировать разные стратегии для разных маршрутов.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-9`,
"title": `Что такое hybrid rendering, i18n, Nuxt Layers и extends?`,
"fullAnswer": `## Hybrid Rendering

**Hybrid rendering** — возможность использовать **разные стратегии рендеринга для разных маршрутов** в одном приложении.

**Настройка через routeRules:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    // Статический контент — prerender
    '/': { prerender: true },
    '/about': { prerender: true },
    
    // Контент с обновлениями — ISR
    '/blog/**': { isr: 60 },
    '/products/**': { isr: 300 },
    
    // Персонализированный контент — SSR
    '/dashboard/**': { ssr: true },
    '/profile': { ssr: true },
    
    // Только клиент (SPA)
    '/admin/**': { ssr: false },
    '/editor': { ssr: false }
  }
})
\`\`\`

**Преимущества:**
- Максимальная производительность для статичных страниц
- Актуальность данных для динамических
- Снижение нагрузки на сервер
- Гибкость под разные типы контента

---

## i18n (Интернационализация)

**Модуль \`@nuxtjs/i18n\`** — официальное решение для мультиязычности.

**Установка:**
\`\`\`bash
npm i @nuxtjs/i18n
\`\`\`

**Настройка:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    // 'prefix' — /ru/about, /en/about
    // 'prefix_except_default' — /about (ru), /en/about
    // 'prefix_and_default' — /ru/about, /about (ru)
    
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    }
  }
})
\`\`\`

**Файлы переводов:**
\`\`\`json
// locales/ru.json
{
  "welcome": "Добро пожаловать",
  "login": "Войти"
}

// locales/en.json
{
  "welcome": "Welcome",
  "login": "Sign in"
}
\`\`\`

**Использование:**
\`\`\`vue
<template>
  <h1>{{ $t('welcome') }}</h1>
  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
</template>

<script setup>
const { t, locale, setLocale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

function changeLanguage(code: string) {
  setLocale(code)
}
</script>
\`\`\`

**Плюрализация:**
\`\`\`json
{
  "items": "@:count item | @:count items"
}
\`\`\`
\`\`\`vue
{{ $t('items', { count: items.length }) }}
\`\`\`

**SEO для i18n:**
\`\`\`typescript
i18n: {
  seo: true,  // автоматические hreflang теги
}
\`\`\`

---

## Nuxt Layers

**Nuxt Layers** — механизм переиспользования кода между проектами. Позволяет создавать базовые темы/шаблоны.

**Структура layer:**
\`\`\`
nuxt-layer/
  nuxt.config.ts
  app.vue
  components/
  composables/
  layouts/
  pages/
  plugins/
  assets/
\`\`\`

**Использование:**
\`\`\`typescript
// nuxt.config.ts основного проекта
export default defineNuxtConfig({
  extends: [
    './base-theme',           // локальная папка
    '@my-company/ui-layer',   // npm-пакет
    'github:user/repo#main'   // GitHub репозиторий
  ]
})
\`\`\`

**Приоритет файлов:**
1. Основной проект (highest priority)
2. Первый в массиве extends
3. Второй в массиве extends
4. ...

**Пример:**
\`\`\`
base-theme/
  components/
    AppHeader.vue       ← базовый header
  layouts/
    default.vue         ← базовый layout

my-app/
  components/
    AppHeader.vue       ← переопределяет базовый
  pages/
    index.vue           ← своя страница
\`\`\`

**Использование layer из npm:**
\`\`\`bash
npm i @my-company/base-theme
\`\`\`
\`\`\`typescript
export default defineNuxtConfig({
  extends: '@my-company/base-theme'
})
\`\`\`

---

## extends (Расширение конфигурации)

**\`extends\`** позволяет наследовать конфигурацию из другого \`nuxt.config.ts\`.

\`\`\`typescript
// base/nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Base App'
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})

// app/nuxt.config.ts
export default defineNuxtConfig({
  extends: '../base',
  app: {
    head: {
      title: 'My App'  // переопределяет базовый
    }
  }
})
\`\`\`

**Множественное наследование:**
\`\`\`typescript
export default defineNuxtConfig({
  extends: [
    '../base-theme',
    '../shared-config'
  ]
})
\`\`\`

**Практическое применение Layers:**
- Корпоративный UI-kit для нескольких проектов
- Базовая тема для сети сайтов
- Общий код для white-label решений
- Monorepo с общими компонентами

💡 **Для собеседования:** Hybrid rendering — разные стратегии рендеринга для разных маршрутов через \`routeRules\`. i18n — модуль \`@nuxtjs/i18n\` с файлами переводов и \`useI18n()\`. Nuxt Layers — переиспользование кода между проектами через \`extends\`. Приоритет: основной проект > extends.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `5-middle-общее-10`,
"title": `Как оптимизировать Core Web Vitals и обрабатывать CORS в серверных маршрутах?`,
"fullAnswer": `## Core Web Vitals

**Core Web Vitals** — метрики Google, влияющие на SEO и UX.

**Три ключевые метрики:**

**1. LCP (Largest Contentful Paint) — до 2.5s:**
Время отрисовки самого большого видимого элемента.

**Оптимизация:**
\`\`\`vue
<!-- Preload критичных ресурсов -->
<template>
  <NuxtImg
    src="/hero.jpg"
    fetchpriority="high"
    preload
    width="1200"
    height="600"
  />
</template>

<script setup>
useHead({
  link: [
    { rel: 'preload', href: '/fonts/main.woff2', as: 'font', crossorigin: '' }
  ]
})
</script>
\`\`\`

**2. INP (Interaction to Next Paint) — до 200ms:**
Задержка между взаимодействием и отрисовкой.

**Оптимизация:**
\`\`\`javascript
// Разбиение тяжёлых задач
const { data } = await useAsyncData('heavy', () => 
  $fetch('/api/data'),
  { lazy: true }  // не блокировать взаимодействие
)

// Использование Web Workers для вычислений
const worker = new Worker('/workers/heavy.js')
worker.postMessage(data)
\`\`\`

**3. CLS (Cumulative Layout Shift) — до 0.1:**
Неожиданные сдвиги layout.

**Оптимизация:**
\`\`\`vue
<!-- Всегда указывать размеры изображений -->
<NuxtImg src="/photo.jpg" width="800" height="600" />

<!-- Резервировать место для динамического контента -->
<div class="ad-slot" style="min-height: 250px">
  <AdComponent />
</div>

<!-- Не вставлять контент выше существующего -->
\`\`\`

**Nuxt-специфичные оптимизации:**

**1. Code splitting:**
\`\`\`vue
<!-- Ленивая загрузка компонентов -->
<template>
  <HeavyComponent v-if="show" />
</template>

<script setup>
const HeavyComponent = defineAsyncComponent(() => 
  import('@/components/HeavyComponent.vue')
)
</script>
\`\`\`

**2. Prefetching:**
\`\`\`vue
<NuxtLink to="/about" prefetch>О нас</NuxtLink>
\`\`\`

**3. Оптимизация бандла:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['some-heavy-lib']
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            ui: ['@headlessui/vue']
          }
        }
      }
    }
  }
})
\`\`\`

**4. Измерение:**
\`\`\`typescript
// plugins/web-vitals.ts
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    import('web-vitals').then(({ onLCP, onINP, onCLS }) => {
      onLCP(metric => console.log('LCP:', metric.value))
      onINP(metric => console.log('INP:', metric.value))
      onCLS(metric => console.log('CLS:', metric.value))
    })
  }
})
\`\`\`

---

## CORS в серверных маршрутах

**CORS (Cross-Origin Resource Sharing)** — механизм безопасности браузера.

**1. Глобальный CORS middleware:**
\`\`\`typescript
// server/middleware/cors.ts
export default defineEventHandler((event) => {
  const allowedOrigins = [
    'https://example.com',
    'https://app.example.com'
  ]
  
  const origin = getHeader(event, 'origin') || ''
  
  if (allowedOrigins.includes(origin)) {
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400'  // кэш preflight на 24 часа
    })
  }
  
  // Обработка preflight
  if (event.method === 'OPTIONS') {
    setResponseStatus(event, 204)
    return ''
  }
})
\`\`\`

**2. Через routeRules:**
\`\`\`typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Max-Age': '3600'
      }
    }
  }
})
\`\`\`

**3. Через h3 (Nitro):**
\`\`\`typescript
import { handleCors } from 'h3'

export default defineEventHandler((event) => {
  const corsHandled = handleCors(event, {
    origin: ['https://example.com'],
    methods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600
  })
  
  if (corsHandled) return
  
  // Основная логика
  return { data: '...' }
})
\`\`\`

**4. Для конкретных эндпоинтов:**
\`\`\`typescript
// server/api/data.ts
export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': 'https://trusted-site.com'
  })
  
  return { data: '...' }
})
\`\`\`

**Важные моменты:**
- \`Access-Control-Allow-Credentials: true\` требует конкретный origin (не \`*\`)
- Preflight (\`OPTIONS\`) кэшируется через \`Max-Age\`
- На сервере между своими доменами CORS не нужен
- \`$fetch\` на сервере обходит CORS

**Безопасность:**
- Никогда не используйте \`*\` для credentials
- Валидируйте origin из белого списка
- Ограничивайте методы и заголовки
- Используйте \`Max-Age\` для снижения нагрузки

💡 **Для собеседования:** Core Web Vitals: LCP (крупный контент), INP (взаимодействие), CLS (сдвиги layout). Оптимизация: preload, lazy loading, фиксированные размеры, code splitting. CORS настраивается через server middleware, routeRules или h3 \`handleCors\`. На сервере между своими доменами CORS не нужен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
