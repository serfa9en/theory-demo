import type { TopicQuestions } from '../../types/question'

export const topic4Questions: TopicQuestions = {
"id": 4,
"slug": `topic-4`,
"title": `Pinia / Vuex`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `4-junior-общее-1`,
"title": `Что такое state management? Зачем он нужен?`,
"fullAnswer": `**State management** (управление состоянием) — это паттерн организации и хранения данных приложения в одном централизованном месте.

**Проблема без state management:**
В большом Vue-приложении компоненты часто нуждаются в одних и тех же данных (например, информация о пользователе, корзина товаров, настройки темы). Если хранить данные в каждом компоненте отдельно:
- Приходится передавать данные через множество \`props\` (prop drilling)
- Сложно синхронизировать изменения между компонентами
- Трудно отлаживать, где и когда изменилось значение

**Решение — централизованный стор:**
Все общие данные хранятся в одном месте (store). Любой компонент может:
- Читать данные из стора
- Изменять данные через предсказуемый механизм
- Реагировать на изменения автоматически

**Пример из жизни:**
Представьте интернет-магазин:
- Корзина товаров нужна в шапке (иконка с количеством), в странице товара (кнопка "Добавить"), в странице оформления заказа
- Без стора: передавать корзину через 5 уровней компонентов
- Со стором: каждый компонент обращается к стору напрямую

**Когда нужен state management:**
- Несколько компонентов используют одни и те же данные
- Данные меняются из разных мест приложения
- Нужно отслеживать историю изменений (для отладки)
- Приложение растёт и становится сложно управлять данными

**Популярные решения:**
- **Vuex** — официальный менеджер состояния для Vue 2 и Vue 3
- **Pinia** — современный преемник Vuex, рекомендован для Vue 3
- **Redux** — для React (аналогичная концепция)

💡 **Для собеседования:** State management — централизованное хранение данных приложения. Решает проблемы prop drilling и синхронизации состояния между компонентами. Pinia и Vuex — основные решения для Vue.`,
"shortAnswer": `State management — централизованное хранение данных приложения. Решает проблемы prop drilling и синхронизации состояния между компонентами. Pinia и Vuex — основные решения для Vue.`,
},
{
"id": `4-junior-общее-2`,
"title": `Что такое Vuex и Pinia? Почему Pinia стала стандартом для Vue?`,
"fullAnswer": `**Vuex** — официальная библиотека управления состоянием для Vue.js. Создана автором Vue (Evan You). Использует паттерн Flux/Redux с мутациями, actions и getters.

**Pinia** — более современная альтернатива Vuex, также созданная Evan You. Название — игра слов: "piña" (ананас по-испански) звучит похоже на "pinia" (пинья — команда, которая произносится как "peenya").

**Почему Pinia стала стандартом:**

**1. Проще синтаксис:**
\`\`\`javascript
// Vuex — много boilerplate
const store = createStore({
  state: { count: 0 },
  mutations: {
    INCREMENT(state) { state.count++ }
  },
  actions: {
    increment({ commit }) { commit('INCREMENT') }
  },
  getters: {
    doubleCount: state => state.count * 2
  }
})

// Pinia — лаконично
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  },
  getters: {
    doubleCount: state => state.count * 2
  }
})
\`\`\`

**2. Нет мутаций:**
В Vuex нужно писать мутации для каждого изменения state. В Pinia можно менять state напрямую в actions или даже в компонентах.

**3. Отличная поддержка TypeScript:**
Pinia создана с учётом TypeScript. Автодополнение работает из коробки, без сложных типов.

**4. Модульность без вложенности:**
В Vuex модули вкладываются друг в друга. В Pinia каждый стор независим — импортируете только нужные.

**5. Меньший размер:**
Pinia весит около 1 KB (gzip), Vuex — около 12 KB.

**6. Поддержка Composition API:**
Pinia имеет Setup Store синтаксис, который работает как композируемая функция.

**7. Официальная рекомендация:**
С 2022 года Pinia — официально рекомендуемый стейт-менеджер для Vue 3.

**Сравнительная таблица:**

| Характеристика | Vuex | Pinia |
|---|---|---|
| Мутации | Обязательны | Нет |
| TypeScript | Сложная типизация | Нативная поддержка |
| Модули | Вложенные | Плоские (импорт) |
| Composition API | Ограниченная | Полная |
| Размер | ~12 KB | ~1 KB |
| Devtools | Поддержка | Поддержка + Time Travel |

 **Для собеседования:** Pinia — современный преемник Vuex. Отличия: нет мутаций, лучшая TypeScript поддержка, Composition API, меньший размер. С 2022 года — официально рекомендуемый стейт-менеджер для Vue 3.`,
"shortAnswer": `Pinia — современный преемник Vuex. Отличия: нет мутаций, лучшая TypeScript поддержка, Composition API, меньший размер. С 2022 года — официально рекомендуемый стейт-менеджер для Vue 3.`,
},
{
"id": `4-junior-общее-3`,
"title": `Как создать store в Pinia? Что такое state, getters, actions?`,
"fullAnswer": `**Создание стора в Pinia:**

**1. Установка и подключение:**
\`\`\`bash
npm install pinia
\`\`\`

\`\`\`javascript
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
\`\`\`

**2. Создание стора:**
\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // state — данные стора
  state: () => ({
    count: 0,
    name: 'My Counter'
  }),
  
  // getters — вычисляемые свойства (как computed)
  getters: {
    doubleCount: (state) => state.count * 2,
    greeting: (state) => \`Hello from \${state.name}!\`
  },
  
  // actions — методы для изменения state
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    async fetchCount() {
      const response = await fetch('/api/count')
      this.count = await response.json()
    }
  }
})
\`\`\`

**Три основные концепции:**

**1. State (состояние):**
- Данные, которые хранит стор
- Должен быть функцией, возвращающей объект (как \`data\` в Vue компонентах)
- Реактивный — изменения автоматически обновляют компоненты

\`\`\`javascript
state: () => ({
  users: [],
  isLoading: false,
  error: null
})
\`\`\`

**2. Getters (геттеры):**
- Вычисляемые свойства на основе state
- Кэшируются (пересчитываются только при изменении зависимостей)
- Доступны как свойства стора

\`\`\`javascript
getters: {
  // Простой getter
  activeUsers: (state) => state.users.filter(u => u.active),
  
  // Getter с доступом к другим getters
  activeUsersCount: (state) => this.activeUsers.length
}
\`\`\`

**3. Actions (действия):**
- Методы для изменения state
- Могут быть синхронными и асинхронными
- Могут вызывать другие actions

\`\`\`javascript
actions: {
  // Синхронное действие
  addUser(user) {
    this.users.push(user)
  },
  
  // Асинхронное действие
  async loadUsers() {
    this.isLoading = true
    try {
      const response = await fetch('/api/users')
      this.users = await response.json()
    } catch (error) {
      this.error = error.message
    } finally {
      this.isLoading = false
    }
  }
}
\`\`\`

💡 **Для собеседования:** Store в Pinia создаётся через \`defineStore('id', { state, getters, actions })\`. State — реактивные данные (функция возвращает объект). Getters — вычисляемые свойства (как computed). Actions — методы для изменения state (синхронные и асинхронные).`,
"shortAnswer": `Store в Pinia создаётся через defineStore('id', { state, getters, actions }). State — реактивные данные (функция возвращает объект). Getters — вычисляемые свойства (как computed). Actions — методы для изменения state (синхронные и асинхронные).`,
},
{
"id": `4-junior-общее-4`,
"title": `Как получить доступ к store в компоненте? Как изменить state?`,
"fullAnswer": `**Доступ к store в компоненте:**

**1. Импорт и использование:**
\`\`\`vue
<template>
  <div>
    <h1>{{ counterStore.name }}</h1>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    
    <button @click="counterStore.increment()">+</button>
    <button @click="counterStore.decrement()">-</button>
    <button @click="counterStore.reset()">Reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

// Вызываем функцию стора
const counterStore = useCounterStore()
</script>
\`\`\`

**2. Изменение state:**

**Способ А: Через actions (рекомендуется):**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

// Вызываем action
store.increment()
store.decrement()
store.reset()
</script>
\`\`\`

**Способ Б: Прямое изменение (допустимо в Pinia):**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

// Прямое изменение state
store.count = 10
store.name = 'New Name'
</script>
\`\`\`

**Способ В: Метод \`$patch\` (для нескольких изменений):**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

// Изменение нескольких полей сразу
store.$patch({
  count: 10,
  name: 'Updated'
})

// Или через функцию
store.$patch((state) => {
  state.count++
  state.name = 'Updated'
})
</script>
\`\`\`

**3. Деструктуризация с сохранением реактивности:**

⚠️ **Важно:** При обычной деструктуризации теряется реактивность!

\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// ❌ Плохо: теряется реактивность
const { count, name } = store

// ✅ Хорошо: используем storeToRefs
const { count, name } = storeToRefs(store)

// Actions можно деструктурировать напрямую (они не теряют реактивность)
const { increment, decrement } = store
</script>
\`\`\`

**4. Использование в Options API:**
\`\`\`vue
<script>
import { useCounterStore } from '@/stores/counter'

export default {
  computed: {
    counterStore() {
      return useCounterStore()
    }
  },
  methods: {
    increment() {
      this.counterStore.increment()
    }
  }
}
</script>
\`\`\`

 **Для собеседования:** Доступ к стору через \`useStore()\` в \`<script setup>\`. Изменять state можно через actions (рекомендуется), напрямую (\`store.count = 5\`) или через \`$patch\`. Для деструктуризации без потери реактивности использовать \`storeToRefs\`.`,
"shortAnswer": `Доступ к стору через useStore() в <script setup>. Изменять state можно через actions (рекомендуется), напрямую (store.count = 5) или через $patch. Для деструктуризации без потери реактивности использовать storeToRefs.`,
},
{
"id": `4-junior-общее-5`,
"title": `Что такое $patch, $reset, $subscribe, $onAction?`,
"fullAnswer": `Это специальные методы и свойства Pinia для работы со стором.

**1. \`$patch\` — изменение нескольких полей state:**

Позволяет обновить несколько свойств state за один раз.

\`\`\`javascript
const store = useCounterStore()

// Объектный синтаксис
store.$patch({
  count: 10,
  name: 'Updated'
})

// Функциональный синтаксис (для сложных изменений)
store.$patch((state) => {
  state.items.push(newItem)
  state.total += newItem.price
})
\`\`\`

**Когда использовать:**
- Нужно изменить несколько полей одновременно
- Компонент должен обновиться один раз, а не несколько

**2. \`$reset\` — сброс state к начальным значениям:**

Возвращает state к тому, что было определено в \`state: () => ({...})\`.

\`\`\`javascript
const store = useCounterStore()

store.count = 100
store.name = 'Changed'

store.$reset() // count = 0, name = 'My Counter'
\`\`\`

**3. \`$subscribe\` — подписка на изменения state:**

Вызывается каждый раз, когда меняется state. Полезно для логирования, сохранения в localStorage, аналитики.

\`\`\`javascript
const store = useCounterStore()

store.$subscribe((mutation, state) => {
  console.log('State changed:', mutation)
  console.log('New state:', state)
  
  // mutation содержит:
  // - type: 'direct' | 'patch object' | 'patch function'
  // - storeId: 'counter'
  // - events: массив изменений
})

// Отписка (например, при unmount компонента)
const unsubscribe = store.$subscribe((mutation, state) => {
  // ...
})

// Позже
unsubscribe()
\`\`\`

**Пример: автосохранение в localStorage:**
\`\`\`javascript
store.$subscribe((mutation, state) => {
  localStorage.setItem('counter', JSON.stringify(state))
}, { detached: true }) // detached — подписка живёт после unmount
\`\`\`

**4. \`$onAction\` — подписка на вызовы actions:**

Вызывается каждый раз, когда вызывается action. Позволяет логировать, обрабатывать ошибки, показывать загрузку.

\`\`\`javascript
const store = useCounterStore()

store.$onAction(({ name, store, args, after, onError }) => {
  console.log(\`Action \${name} called with\`, args)
  
  // После успешного выполнения action
  after((result) => {
    console.log(\`Action \${name} succeeded\`, result)
  })
  
  // При ошибке в action
  onError((error) => {
    console.error(\`Action \${name} failed\`, error)
  })
})
\`\`\`

**Пример: глобальный обработчик ошибок:**
\`\`\`javascript
store.$onAction(({ name, onError }) => {
  onError((error) => {
    showErrorNotification(\`Error in \${name}: \${error.message}\`)
  })
})
\`\`\`

**Сводная таблица:**

| Метод | Назначение |
|---|---|
| \`$patch\` | Изменить несколько полей state |
| \`$reset\` | Сбросить state к начальным значениям |
| \`$subscribe\` | Подписка на изменения state |
| \`$onAction\` | Подписка на вызовы actions |

💡 **Для собеседования:** \`$patch\` — пакетное изменение state. \`$reset\` — сброс к начальным значениям. \`$subscribe\` — подписка на изменения state (для логирования, сохранения). \`$onAction\` — подписка на actions (для обработки ошибок, логирования).`,
"shortAnswer": `$patch — пакетное изменение state. $reset — сброс к начальным значениям. $subscribe — подписка на изменения state (для логирования, сохранения). $onAction — подписка на actions (для обработки ошибок, логирования).`,
},
{
"id": `4-junior-общее-6`,
"title": `Что такое modules и namespacing в Vuex?`,
"fullAnswer": `**Modules (модули)** в Vuex — способ разбить большой стор на несколько независимых частей. Каждый модуль имеет свой state, getters, mutations и actions.

**Зачем нужны модули:**
Когда приложение растёт, один большой стор становится难以管理 (трудно управляемым). Модули позволяют:
- Разделить код по функциональности (auth, cart, products)
- Избежать конфликтов имён
- Упростить поддержку

**Пример структуры:**
\`\`\`javascript
// store/index.js
import { createStore } from 'vuex'
import auth from './modules/auth'
import cart from './modules/cart'
import products from './modules/products'

export default createStore({
  modules: {
    auth,
    cart,
    products
  }
})
\`\`\`

**Структура модуля:**
\`\`\`javascript
// store/modules/cart.js
export default {
  namespaced: true, // важно!
  
  state: () => ({
    items: [],
    total: 0
  }),
  
  getters: {
    itemCount: state => state.items.length
  },
  
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
    }
  },
  
  actions: {
    async fetchCart({ commit }) {
      const response = await fetch('/api/cart')
      const items = await response.json()
      commit('ADD_ITEM', items)
    }
  }
}
\`\`\`

**Namespacing (пространства имён):**

По умолчанию модули Vuex регистрируют свои getters, mutations и actions в **глобальном namespace**. Это может привести к конфликтам имён.

**Без namespacing:**
\`\`\`javascript
// Модуль auth
mutations: {
  SET_USER(state, user) { ... }
}

// Модуль products
mutations: {
  SET_USER(state, user) { ... } // конфликт!
}
\`\`\`

**С namespacing (\`namespaced: true\`):**
\`\`\`javascript
// Модуль auth
export default {
  namespaced: true,
  mutations: {
    SET_USER(state, user) { ... }
  }
}

// Модуль products
export default {
  namespaced: true,
  mutations: {
    SET_USER(state, user) { ... } // теперь нет конфликта
  }
}
\`\`\`

**Доступ к модулям:**

**В компонентах:**
\`\`\`javascript
// Доступ к state модуля
this.$store.state.auth.user
this.$store.state.cart.items

// Доступ к getters
this.$store.getters['auth/isLoggedIn']
this.$store.getters['cart/itemCount']

// Вызов mutations
this.$store.commit('auth/SET_USER', user)
this.$store.commit('cart/ADD_ITEM', item)

// Вызов actions
this.$store.dispatch('auth/login', credentials)
this.$store.dispatch('cart/fetchCart')
\`\`\`

**С map-хелперами:**
\`\`\`javascript
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user', 'isLoggedIn']),
    ...mapGetters('cart', ['itemCount', 'total'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    ...mapActions('cart', ['addItem', 'removeItem'])
  }
}
\`\`\`

**Вложенные модули:**
\`\`\`javascript
const store = createStore({
  modules: {
    shop: {
      modules: {
        cart: cartModule,
        checkout: checkoutModule
      }
    }
  }
})

// Доступ
store.state.shop.cart.items
store.commit('shop/cart/ADD_ITEM', item)
\`\`\`

 **Для собеседования:** Модули в Vuex — способ разбить стор на части. \`namespaced: true\` создаёт пространство имён, предотвращая конфликты. Доступ через \`store.state.moduleName.property\`, \`store.commit('module/action')\`, \`store.dispatch('module/action')\`. В Pinia модули не нужны — каждый стор независим.`,
"shortAnswer": `Модули в Vuex — способ разбить стор на части. namespaced: true создаёт пространство имён, предотвращая конфликты. Доступ через store.state.moduleName.property, store.commit('module/action'), store.dispatch('module/action'). В Pinia модули не нужны — каждый стор независим.`,
},
{
"id": `4-junior-общее-7`,
"title": `Чем mutation отличается от action? Что такое mapState, mapGetters, mapActions?`,
"fullAnswer": `**Mutation vs Action в Vuex:**

**Mutation (мутация):**
- **Синхронное** изменение state
- Единственный способ изменить state в Vuex
- Вызывается через \`commit\`
- Не может содержать асинхронный код

\`\`\`javascript
mutations: {
  SET_USER(state, user) {
    state.user = user // синхронное изменение
  },
  INCREMENT(state) {
    state.count++
  }
}

// Вызов
store.commit('SET_USER', user)
store.commit('INCREMENT')
\`\`\`

**Action (действие):**
- Может быть **асинхронным**
- Не изменяет state напрямую
- Вызывает мутации через \`commit\`
- Может содержать API-запросы, таймеры и т.д.

\`\`\`javascript
actions: {
  async fetchUser({ commit }) {
    const response = await fetch('/api/user') // асинхронность
    const user = await response.json()
    commit('SET_USER', user) // вызов мутации
  },
  
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// Вызов
store.dispatch('fetchUser')
store.dispatch('incrementAsync')
\`\`\`

**Ключевые различия:**

| Характеристика | Mutation | Action |
|---|---|---|
| Синхронность | Только синхронные | Синхронные и асинхронные |
| Изменение state | Да (напрямую) | Нет (через мутации) |
| Вызов | \`commit('MUTATION')\` | \`dispatch('ACTION')\` |
| Асинхронность | ❌ | ✅ |
| Devtools | Отслеживаются | Отслеживаются |

**Почему такое разделение:**
- Мутации синхронны → Devtools может отслеживать каждое изменение state
- Actions асинхронны → можно делать API-запросы, но финальное изменение всё равно через мутацию

---

**Map-хелперы в Vuex:**

Удобные функции для маппинга state, getters, mutations и actions в компоненты.

**1. \`mapState\` — маппинг state в computed:**
\`\`\`javascript
import { mapState } from 'vuex'

export default {
  computed: {
    // Массив строк
    ...mapState(['user', 'isLoggedIn']),
    
    // Объект с алиасами
    ...mapState({
      userName: state => state.user.name,
      userAge: 'user.age'
    }),
    
    // С модулем (namespaced)
    ...mapState('auth', ['user', 'token'])
  }
}
\`\`\`

**2. \`mapGetters\` — маппинг getters в computed:**
\`\`\`javascript
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedIn', 'userRole']),
    
    // С алиасами
    ...mapGetters({
      isAdmin: 'user/isAdmin'
    }),
    
    // С модулем
    ...mapGetters('cart', ['itemCount', 'total'])
  }
}
\`\`\`

**3. \`mapActions\` — маппинг actions в methods:**
\`\`\`javascript
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login', 'logout', 'fetchUser']),
    
    // С алиасами
    ...mapActions({
      loginUser: 'auth/login'
    }),
    
    // С модулем
    ...mapActions('cart', ['addItem', 'removeItem'])
  }
}
\`\`\`

**4. \`mapMutations\` — маппинг mutations в methods:**
\`\`\`javascript
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['SET_USER', 'INCREMENT']),
    
    // С модулем
    ...mapMutations('cart', ['ADD_ITEM', 'CLEAR_CART'])
  }
}
\`\`\`

**Полный пример:**
\`\`\`vue
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user', 'token']),
    ...mapGetters('cart', ['itemCount'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    ...mapActions('cart', ['addItem'])
  }
}
</script>
\`\`\`

💡 **Для собеседования:** Mutation — синхронное изменение state (вызов через \`commit\`). Action — может быть асинхронным, вызывает мутации (вызов через \`dispatch\`). Map-хелперы (\`mapState\`, \`mapGetters\`, \`mapActions\`, \`mapMutations\`) упрощают подключение стора к компонентам. В Pinia мутаций нет, actions меняют state напрямую.`,
"shortAnswer": `Mutation — синхронное изменение state (вызов через commit). Action — может быть асинхронным, вызывает мутации (вызов через dispatch). Map-хелперы (mapState, mapGetters, mapActions, mapMutations) упрощают подключение стора к компонентам. В Pinia мутаций нет, actions меняют state напрямую.`,
},
{
"id": `4-junior-общее-8`,
"title": `Два синтаксиса Pinia: Options vs Setup style.`,
"fullAnswer": `Pinia поддерживает два стиля написания сторов: **Options API style** (похож на Vuex) и **Setup style** (похож на Composition API).

---

**1. Options API Style:**

Похож на структуру Vuex: \`state\`, \`getters\`, \`actions\` как свойства объекта.

\`\`\`javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Counter'
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
    greeting: (state) => \`Hello from \${state.name}!\`
  },
  
  actions: {
    increment() {
      this.count++
    },
    async fetchCount() {
      const response = await fetch('/api/count')
      this.count = await response.json()
    }
  }
})
\`\`\`

**Особенности:**
- \`this\` ссылается на экземпляр стора
- \`state\` — функция, возвращающая объект
- \`getters\` — функции, получающие \`state\` как первый аргумент
- \`actions\` — методы, могут обращаться к \`this\`

**Когда использовать:**
- Простые сторы с линейной логикой
- Миграция с Vuex (похожий синтаксис)
- Команда привыкла к Options API

---

**2. Setup Style (Composition API):**

Похож на \`<script setup>\` в Vue 3. Использует \`ref\`, \`computed\`, функции.

\`\`\`javascript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // State через ref/reactive
  const count = ref(0)
  const name = ref('Counter')
  
  // Getters через computed
  const doubleCount = computed(() => count.value * 2)
  const greeting = computed(() => \`Hello from \${name.value}!\`)
  
  // Actions — обычные функции
  function increment() {
    count.value++
  }
  
  async function fetchCount() {
    const response = await fetch('/api/count')
    count.value = await response.json()
  }
  
  // Возвращаем всё, что нужно в компоненте
  return {
    count,
    name,
    doubleCount,
    greeting,
    increment,
    fetchCount
  }
})
\`\`\`

**Особенности:**
- \`ref\` для примитивов, \`reactive\` для объектов
- \`computed\` для getters
- Обычные функции для actions
- Нужно явно \`return\` всё, что должно быть доступно
- Доступ к значениям через \`.value\` внутри стора

**Когда использовать:**
- Сложная логика с зависимостями
- Переиспользование через композаблы
- Команда использует Composition API
- Нужен доступ к другим композаблам внутри стора

---

**Сравнение:**

| Характеристика | Options Style | Setup Style |
|---|---|---|
| Синтаксис | Как Vuex | Как \`<script setup>\` |
| State | \`state: () => ({...})\` | \`ref()\`, \`reactive()\` |
| Getters | \`getters: { ... }\` | \`computed()\` |
| Actions | Методы объекта | Обычные функции |
| \`this\` | Ссылка на стор | Не используется |
| \`.value\` | Не нужен | Нужен внутри стора |
| Переиспользование | Ограниченное | Через композаблы |

**Пример с композаблами в Setup Style:**
\`\`\`javascript
import { useLocalStorage } from '@/composables/useLocalStorage'

export const useSettingsStore = defineStore('settings', () => {
  const theme = useLocalStorage('theme', 'light')
  const language = useLocalStorage('language', 'ru')
  
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  
  return { theme, language, toggleTheme }
})
\`\`\`

**Важно:** Оба стиля можно использовать в одном проекте. Более того, можно мигрировать постепенно — старые сторы в Options style, новые в Setup style.

 **Для собеседования:** Pinia поддерживает два стиля: Options API (как Vuex, через \`this\`) и Setup Style (как Composition API, через \`ref\`/\`computed\`). Setup style позволяет использовать композаблы внутри стора. Оба стиля можно смешивать в одном проекте.`,
"shortAnswer": `Pinia поддерживает два стиля: Options API (как Vuex, через this) и Setup Style (как Composition API, через ref/computed). Setup style позволяет использовать композаблы внутри стора. Оба стиля можно смешивать в одном проекте.`,
},
{
"id": `4-junior-общее-9`,
"title": `Как типизировать Pinia store? Что такое storeToRefs?`,
"fullAnswer": `**Типизация Pinia store:**

Pinia имеет отличную поддержку TypeScript из коробки.

**1. Типизация Options Store:**

\`\`\`typescript
import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
}

interface State {
  users: User[]
  isLoading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    users: [],
    isLoading: false,
    error: null
  }),
  
  getters: {
    activeUsers: (state): User[] => {
      return state.users.filter(u => u.isActive)
    },
    
    userCount: (state): number => {
      return state.users.length
    }
  },
  
  actions: {
    async fetchUsers(): Promise<void> {
      this.isLoading = true
      try {
        const response = await fetch('/api/users')
        this.users = await response.json()
      } catch (error) {
        this.error = (error as Error).message
      } finally {
        this.isLoading = false
      }
    }
  }
})
\`\`\`

**2. Типизация Setup Store:**

\`\`\`typescript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  id: number
  name: string
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const activeUsers = computed<User[]>(() => {
    return users.value.filter(u => u.isActive)
  })
  
  const userCount = computed<number>(() => {
    return users.value.length
  })
  
  async function fetchUsers(): Promise<void> {
    isLoading.value = true
    try {
      const response = await fetch('/api/users')
      users.value = await response.json()
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    users,
    isLoading,
    error,
    activeUsers,
    userCount,
    fetchUsers
  }
})
\`\`\`

**3. Типизация в компоненте:**

\`\`\`vue
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

// TypeScript автоматически выводит типы
const { users, isLoading } = storeToRefs(userStore)
const { fetchUsers } = userStore

// Автодополнение работает
users.value.forEach(user => {
  console.log(user.name) // ✅ TypeScript знает тип User
})
</script>
\`\`\`

---

**\`storeToRefs\` — что это и зачем нужно:**

**Проблема:** При деструктуризации стора реактивность теряется.

\`\`\`typescript
const store = useCounterStore()

// ❌ Плохо: теряется реактивность
const { count, name } = store

// count и name — обычные переменные, не реактивные
// Изменения в store не отобразятся в компоненте
\`\`\`

**Решение:** \`storeToRefs\` оборачивает свойства в \`ref\`, сохраняя реактивность.

\`\`\`typescript
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// ✅ Хорошо: сохраняем реактивность
const { count, name } = storeToRefs(store)

// count и name — это ref
// Изменения в store автоматически обновляют компонент
\`\`\`

**Как работает:**
- \`storeToRefs\` проходит по всем свойствам стора
- Оборачивает их в \`ref\`
- Сохраняет связь с оригинальным стором
- Actions не оборачивает (они и так не теряют реактивность)

**Полный пример:**
\`\`\`typescript
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// State и getters — через storeToRefs
const { count, doubleCount, name } = storeToRefs(store)

// Actions — напрямую
const { increment, decrement, reset } = store

// В template можно использовать без .value
// <p>{{ count }}</p>
// <p>{{ doubleCount }}</p>
// <button @click="increment">+</button>
\`\`\`

**Когда НЕ нужен \`storeToRefs\`:**
- Если обращаетесь к стору через \`store.property\` (не деструктурируете)
- Для actions (они не теряют реактивность)

\`\`\`typescript
const store = useCounterStore()

// ✅ Можно без storeToRefs
store.count // реактивно
store.increment() // работает
\`\`\`

💡 **Для собеседования:** Pinia имеет нативную TypeScript поддержку. State типизируется через интерфейс, getters и actions имеют автоматический вывод типов. \`storeToRefs\` оборачивает свойства стора в \`ref\` при деструктуризации, сохраняя реактивность. Actions можно деструктурировать напрямую.`,
"shortAnswer": `Pinia имеет нативную TypeScript поддержку. State типизируется через интерфейс, getters и actions имеют автоматический вывод типов. storeToRefs оборачивает свойства стора в ref при деструктуризации, сохраняя реактивность. Actions можно деструктурировать напрямую.`,
},
{
"id": `4-junior-общее-10`,
"title": `Как работать с асинхронностью в actions и персистить state (localStorage)?`,
"fullAnswer": `**Асинхронность в actions:**

Actions в Pinia могут быть асинхронными. Это основной способ работы с API.

**1. Базовый async action:**
\`\`\`javascript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    isLoading: false,
    error: null
  }),
  
  actions: {
    async fetchUsers() {
      this.isLoading = true
      this.error = null
      
      try {
        const response = await fetch('/api/users')
        
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        
        this.users = await response.json()
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    }
  }
})
\`\`\`

**2. Использование в компоненте:**
\`\`\`vue
<template>
  <div>
    <div v-if="store.isLoading">Загрузка...</div>
    <div v-else-if="store.error">Ошибка: {{ store.error }}</div>
    <ul v-else>
      <li v-for="user in store.users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    
    <button @click="store.fetchUsers()">Загрузить</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const store = useUserStore()

// Загрузка при монтировании
import { onMounted } from 'vue'
onMounted(() => {
  store.fetchUsers()
})
</script>
\`\`\`

**3. Actions с параметрами:**
\`\`\`javascript
actions: {
  async fetchUserById(id) {
    const response = await fetch(\`/api/users/\${id}\`)
    return await response.json()
  },
  
  async createUser(userData) {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    
    const newUser = await response.json()
    this.users.push(newUser)
    return newUser
  }
}
\`\`\`

**4. Вызов одного action из другого:**
\`\`\`javascript
actions: {
  async login(credentials) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    
    const user = await response.json()
    this.user = user
    this.token = user.token
  },
  
  async loginAndFetchProfile(credentials) {
    await this.login(credentials)
    await this.fetchProfile()
  }
}
\`\`\`

---

**Персистентность state (localStorage):**

**Способ 1: Ручное сохранение через \`$subscribe\`:**

\`\`\`javascript
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'light',
    language: 'ru',
    fontSize: 14
  }),
  
  actions: {
    // Загрузка из localStorage при инициализации
    loadFromStorage() {
      const saved = localStorage.getItem('settings')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.$patch(parsed)
      }
    },
    
    // Сохранение при изменениях
    setupPersistence() {
      this.$subscribe((mutation, state) => {
        localStorage.setItem('settings', JSON.stringify(state))
      }, { detached: true })
    }
  }
})
\`\`\`

**Использование:**
\`\`\`javascript
// main.js
const settingsStore = useSettingsStore()
settingsStore.loadFromStorage()
settingsStore.setupPersistence()
\`\`\`

**Способ 2: Плагин \`pinia-plugin-persistedstate\` (рекомендуется):**

\`\`\`bash
npm install pinia-plugin-persistedstate
\`\`\`

\`\`\`javascript
// main.js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
\`\`\`

\`\`\`javascript
// stores/settings.js
export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'light',
    language: 'ru',
    fontSize: 14
  }),
  
  persist: true // автоматически сохраняет в localStorage
})
\`\`\`

**Продвинутая настройка:**
\`\`\`javascript
export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'light',
    language: 'ru',
    tempData: '...' // не нужно сохранять
  }),
  
  persist: {
    storage: localStorage, // или sessionStorage
    paths: ['theme', 'language'], // сохранять только эти поля
    
    // Кастомная сериализация
    serializer: {
      serialize: (state) => JSON.stringify(state),
      deserialize: (value) => JSON.parse(value)
    }
  }
})
\`\`\`

**Способ 3: Сохранение в cookies (для SSR):**
\`\`\`javascript
import Cookies from 'js-cookie'

persist: {
  storage: {
    getItem: (key) => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 7 })
  }
}
\`\`\`

**Когда использовать персистентность:**
- Настройки пользователя (тема, язык)
- Данные формы (черновики)
- Авторизация (токены)
- Корзина товаров

**Когда НЕ использовать:**
- Временные данные (загрузка, ошибки)
- sensitive данные (пароли)
- Большие объёмы данных (лимит localStorage ~5MB)

 **Для собеседования:** Actions в Pinia могут быть async (используют \`async/await\`). Для персистентности state используют \`$subscribe\` + \`localStorage\` вручную или плагин \`pinia-plugin-persistedstate\`. Плагин позволяет выбирать хранилище, конкретные поля и кастомную сериализацию.`,
"shortAnswer": `Actions в Pinia могут быть async (используют async/await). Для персистентности state используют $subscribe + localStorage вручную или плагин pinia-plugin-persistedstate. Плагин позволяет выбирать хранилище, конкретные поля и кастомную сериализацию.`,
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
"id": `4-middle-общее-1`,
"title": `Как работает реактивность внутри Pinia?`,
"fullAnswer": `## Реактивность в Pinia

Pinia построена поверх реактивности Vue. State в store становится реактивным, getters работают как вычисляемые значения, а actions изменяют состояние обычными присваиваниями. Компоненты, которые читают state/getters, автоматически обновляются при изменениях.

**Ключевые моменты:**
- В Setup Store обычно используются \`ref\`, \`reactive\` и \`computed\`.
- При деструктуризации state/getters используют \`storeToRefs()\`, иначе можно потерять реактивную связь.
- Actions можно вызывать напрямую; отдельного слоя mutations, как во Vuex, нет.
- Подписки \`$subscribe()\` позволяют наблюдать изменения state.

**Пример:**

\`\`\`ts
const useCounter = defineStore("counter", () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const increment = () => count.value++
  return { count, double, increment }
})
\`\`\``,
"shortAnswer": `Реактивность в Pinia Pinia построена поверх реактивности Vue.  State в store становится реактивным, getters работают как вычисляемые значения, а actions изменяют состояние обычными присваиваниями.`,
},
{
"id": `4-middle-общее-2`,
"title": `Как реализовать персистентность state (pinia-plugin-persistedstate)?`,
"fullAnswer": `## Персистентность Pinia state

Pinia сама по себе не сохраняет state после перезагрузки страницы. Для этого состояние сериализуют в localStorage/sessionStorage либо используют плагин наподобие \`pinia-plugin-persistedstate\`.

**Ключевые моменты:**
- Сохраняйте только действительно нужные поля: токены и чувствительные данные требуют отдельной оценки безопасности.
- При SSR доступ к \`window/localStorage\` возможен только на клиенте.
- Нужно продумать версионирование persisted state и миграции при изменении структуры.

**Пример:**

\`\`\`ts
export const useSettings = defineStore("settings", {
  state: () => ({ theme: "light" }),
  persist: true,
})
\`\`\``,
"shortAnswer": `Персистентность Pinia state Pinia сама по себе не сохраняет state после перезагрузки страницы.  Для этого состояние сериализуют в localStorage/sessionStorage либо используют плагин наподобие pinia-plugin-persistedstate.`,
},
{
"id": `4-middle-общее-3`,
"title": `Как написать собственный Pinia plugin?`,
"fullAnswer": `## Собственный Pinia plugin

Pinia-плагин — функция, подключаемая через \`pinia.use()\`. Она вызывается для каждого создаваемого store и получает контекст с \`store\`, \`pinia\`, \`app\` и options. Плагин может добавлять свойства, подписки, persistence, логирование или общую инфраструктуру.

**Ключевые моменты:**
- Возвращённые из plugin свойства добавляются в каждый store.
- Подписки, созданные плагином, стоит корректно очищать.
- Для TypeScript дополнительные свойства расширяют через module augmentation.

**Пример:**

\`\`\`ts
const pinia = createPinia()
pinia.use(({ store }) => {
  store.$subscribe((_mutation, state) => {
    console.log(store.$id, state)
  })
})
\`\`\``,
"shortAnswer": `Собственный Pinia plugin Pinia-плагин — функция, подключаемая через pinia. use().`,
},
{
"id": `4-middle-общее-4`,
"title": `Как использовать Pinia вне компонента и работать с SSR?`,
"fullAnswer": `## Pinia вне компонентов и SSR

Внутри \`setup()\` активный экземпляр Pinia определяется автоматически. Вне component setup, особенно при SSR, лучше явно передавать экземпляр Pinia в \`useStore(pinia)\`, чтобы запросы разных пользователей не разделяли состояние.

**Ключевые моменты:**
- На сервере создавайте новый Pinia для каждого запроса.
- Не храните server-side store в глобальном singleton.
- В router guards после установки Pinia можно получать store с явным \`pinia\`.

**Пример:**

\`\`\`ts
const pinia = createPinia()
app.use(pinia)
const user = useUserStore(pinia)
\`\`\``,
"shortAnswer": `Pinia вне компонентов и SSR Внутри setup() активный экземпляр Pinia определяется автоматически.  Вне component setup, особенно при SSR, лучше явно передавать экземпляр Pinia в useStore(pinia), чтобы запросы разных пользователей не разделяли состояние.`,
},
{
"id": `4-middle-общее-5`,
"title": `Что такое acceptHMRUpdate?`,
"fullAnswer": `## acceptHMRUpdate

\`acceptHMRUpdate()\` помогает store поддерживать Hot Module Replacement: при изменении кода store во время разработки Pinia обновляет его определение без полной перезагрузки страницы и, насколько возможно, сохраняет текущее состояние.

**Ключевые моменты:**
- Используется только в dev/HMR-коде.
- Типичный вызов помещают рядом с \`defineStore\`.
- Это улучшает DX, но не влияет на production runtime.

**Пример:**

\`\`\`ts
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
\`\`\``,
"shortAnswer": `acceptHMRUpdate acceptHMRUpdate() помогает store поддерживать Hot Module Replacement: при изменении кода store во время разработки Pinia обновляет его определение без полной перезагрузки страницы и, насколько возможно, сохраняет текущее состояние.  Ключевые моменты: Используется только в dev/HMR-коде.`,
},
{
"id": `4-middle-общее-6`,
"title": `Как организовать структуру сторов в большом проекте (feature-based)?`,
"fullAnswer": `## Структура Pinia stores в большом проекте

В крупном приложении store удобнее группировать по бизнес-фичам, а не складывать все store в одну общую папку без контекста. Store должен владеть состоянием конкретной области и предоставлять понятный публичный API.

**Ключевые моменты:**
- Не делайте один «god store».
- Разделяйте server state и чисто UI state.
- Переиспользуемую логику выносите в composables/services.
- Избегайте циклических зависимостей между stores.`,
"shortAnswer": `Структура Pinia stores в большом проекте В крупном приложении store удобнее группировать по бизнес-фичам, а не складывать все store в одну общую папку без контекста.  Store должен владеть состоянием конкретной области и предоставлять понятный публичный API.`,
},
{
"id": `4-middle-общее-7`,
"title": `Как реализовать «глобальные» getters и обрабатывать ошибки в actions?`,
"fullAnswer": `## Общие getters и обработка ошибок

В Pinia нет специального понятия root getters как во Vuex. Общую вычисляемую логику обычно оформляют отдельным store или composable, а один store может использовать другой внутри getter/action.

**Ключевые моменты:**
- Ошибки в actions можно пробрасывать вызывающему коду либо нормализовать в одном месте.
- Для глобального логирования действий используют \`$onAction()\` или plugin.
- Не скрывайте ошибку без изменения состояния loading/error.

**Пример:**

\`\`\`ts
async function load() {
  this.loading = true
  try { this.data = await api.get() }
  catch (e) { this.error = normalizeError(e); throw e }
  finally { this.loading = false }
}
\`\`\``,
"shortAnswer": `Общие getters и обработка ошибок В Pinia нет специального понятия root getters как во Vuex.  Общую вычисляемую логику обычно оформляют отдельным store или composable, а один store может использовать другой внутри getter/action.`,
},
{
"id": `4-middle-общее-8`,
"title": `Что такое $dispose() и как тестировать Pinia stores (createTestingPinia)?`,
"fullAnswer": `## $dispose и тестирование stores

\`store.$dispose()\` останавливает effect scope store и удаляет его из реестра Pinia; это полезно для динамически живущих stores и тестов. Для component tests часто применяют \`createTestingPinia\`, который позволяет контролировать actions и начальный state.

**Ключевые моменты:**
- Для unit-теста самого store можно создать обычный \`createPinia()\` и \`setActivePinia()\`.
- \`createTestingPinia\` удобен для тестов компонентов, где actions часто стабят.
- После тестов важно изолировать Pinia между test cases.`,
"shortAnswer": `$dispose и тестирование stores store. $dispose() останавливает effect scope store и удаляет его из реестра Pinia; это полезно для динамически живущих stores и тестов.`,
},
{
"id": `4-middle-общее-9`,
"title": `Как интегрировать Pinia с Vue Devtools и реализовать shared state между micro-frontends?`,
"fullAnswer": `## Devtools и shared state между micro-frontends

Pinia интегрируется с Vue Devtools и показывает stores, state и изменения. Для micro-frontends общий Pinia singleton возможен только если части приложения действительно разделяют один Vue runtime и lifecycle; иначе надёжнее синхронизировать состояние через явный контракт.

**Ключевые моменты:**
- Варианты контракта: события, shared package, URL, browser storage, BroadcastChannel или backend.
- Не связывайте независимые micro-frontends внутренней структурой чужого store.
- Версионируйте общий контракт.`,
"shortAnswer": `Devtools и shared state между micro-frontends Pinia интегрируется с Vue Devtools и показывает stores, state и изменения.  Для micro-frontends общий Pinia singleton возможен только если части приложения действительно разделяют один Vue runtime и lifecycle; иначе надёжнее синхронизировать состояние через явный контракт.`,
},
{
"id": `4-middle-общее-10`,
"title": `Как мигрировать с Vuex на Pinia? Сравнение производительности.`,
"fullAnswer": `## Миграция Vuex → Pinia

Обычно мигрируют по одному Vuex module: state переносится в state/ref, getters — в getters/computed, actions — в actions/functions, а mutations исчезают, потому что Pinia разрешает изменять state непосредственно или через actions.

**Ключевые моменты:**
- Сначала перенесите leaf modules с минимумом зависимостей.
- Замените map helpers на прямой store и \`storeToRefs\`.
- Pinia обычно даёт меньше boilerplate; реальная производительность чаще зависит от архитектуры и объёма реактивного state, а не от названия библиотеки.`,
"shortAnswer": `Миграция Vuex → Pinia Обычно мигрируют по одному Vuex module: state переносится в state/ref, getters — в getters/computed, actions — в actions/functions, а mutations исчезают, потому что Pinia разрешает изменять state непосредственно или через actions.  Ключевые моменты: Сначала перенесите leaf modules с минимумом зависимостей.`,
},
{
"id": `4-middle-общее-11`,
"title": `Как работать с rootState, rootGetters и динамической регистрацией модулей в Vuex?`,
"fullAnswer": `## rootState, rootGetters и динамические модули Vuex

В namespaced-модуле Vuex локальный getter/action по умолчанию работает со своим state/getters, а доступ к корневому дереву выполняется через \`rootState\` и \`rootGetters\`. Динамические модули подключаются во время работы приложения через \`store.registerModule()\` и удаляются через \`store.unregisterModule()\`.

**Ключевые моменты:**
- Action получает \`rootState\` и \`rootGetters\` в context.
- Для dispatch/commit в корневое пространство из namespaced-модуля передают \`{ root: true }\`.
- Динамические модули полезны для lazy-loaded функциональности.
- При удалении модуля учитывайте его subscriptions и жизненный цикл.

**Пример:**

\`\`\`js
const module = {
  namespaced: true,
  actions: {
    save({ rootState, rootGetters, dispatch }) {
      console.log(rootState.user)
      console.log(rootGetters["auth/isAdmin"])
      return dispatch("notifications/push", "saved", { root: true })
    },
  },
}

store.registerModule("feature", module)
store.unregisterModule("feature")
\`\`\``,
"shortAnswer": `rootState, rootGetters и динамические модули Vuex В namespaced-модуле Vuex локальный getter/action по умолчанию работает со своим state/getters, а доступ к корневому дереву выполняется через rootState и rootGetters.  Динамические модули подключаются во время работы приложения через store.`,
},
],
},
],
},
}
