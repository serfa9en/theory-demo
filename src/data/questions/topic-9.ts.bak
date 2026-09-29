import type { TopicQuestions } from '../../types/question'

export const topic9Questions: TopicQuestions = {
"id": 9,
"slug": `topic-9`,
"title": `Python FastAPI`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `9-junior-общее-1`,
"title": `Что такое FastAPI? Отличия от Flask/Django.`,
"fullAnswer": `**FastAPI** — это современный веб-фреймворк для Python, созданный Себастьяном Рамиресом в 2018 году. Он предназначен для создания API на основе стандартных аннотаций типов Python.

**Ключевые особенности FastAPI:**

**1. Высокая производительность:**
FastAPI один из самых быстрых Python-фреймворков. Он построен на Starlette (для веб-части) и Pydantic (для валидации данных). По скорости сопоставим с Node.js и Go.

**2. Быстрая разработка:**
Уменьшает количество кода на 40% благодаря аннотациям типов и автоматической валидации.

**3. Автоматическая документация:**
Swagger UI и ReDoc генерируются автоматически из кода.

**4. Валидация данных:**
На основе Pydantic — данные проверяются на этапе запроса, а не в рантайме.

**5. Поддержка async/await:**
Нативная асинхронность через asyncio.

---

**Сравнение FastAPI, Flask и Django:**

**Flask** — это микрофреймворк. Он минималистичный, даёт только базовые возможности (роутинг, шаблоны). Всё остальное (ORM, валидация, аутентификация) нужно подключать отдельно через расширения. Flask синхронный, хотя с версии 2.0 поддерживает async. Идеален для маленьких проектов и микросервисов.

**Django** — это «батарейки включены» фреймворк. Включает ORM, админку, систему аутентификации, шаблонизатор из коробки. Подходит для больших монолитных приложений (интернет-магазины, CMS). Django тяжеловесный, имеет крутую кривую обучения. Синхронный по своей природе (async добавлен недавно и ограничен).

**FastAPI** — это современный фреймворк для API. Не включает ORM или шаблонизатор — это осознанный выбор, так как FastAPI специализируется на API. Имеет встроенную валидацию через Pydantic, автоматическую документацию, нативную async поддержку. Идеален для микросервисов, API, высоконагруженных сервисов.

**Когда что выбирать:**
- Flask — простые проекты, микросервисы, когда нужен полный контроль
- Django — большие монолитные приложения с админкой и ORM из коробки
- FastAPI — современные API, микросервисы, когда важна производительность и автоматическая документация

**Пример минимального приложения FastAPI:**
\`\`\`python
from fastapi import FastAPI

app = FastAPI()

&#64;app.get(&quot;/&quot;)
async def root():
    return &#123;&quot;message&quot;: &quot;Hello World&quot;&#125;
\`\`\`

Запуск:
\`\`\`bash
uvicorn main:app --reload
\`\`\`

**Для собеседования:** FastAPI — современный async-фреймворк для API на Python. Быстрее Flask и Django, имеет встроенную валидацию через Pydantic, автоматическую документацию (Swagger/ReDoc). Flask — микрофреймворк для простых проектов. Django — монолитный фреймворк «всё включено» для больших приложений.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-2`,
"title": `Создание эндпоинтов, автоматическая документация (Swagger).`,
"fullAnswer": `**Создание эндпоинтов:**

Эндпоинт в FastAPI — это функция, декорированная методом HTTP (get, post, put, delete).

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

# GET запрос — получение данных
&#64;app.get(&quot;/users&quot;)
async def get_users():
    return &#91;&#123;&quot;id&quot;: 1, &quot;name&quot;: &quot;John&quot;&#125;, &#123;&quot;id&quot;: 2, &quot;name&quot;: &quot;Jane&quot;&#125;&#93;

# POST запрос — создание ресурса
&#64;app.post(&quot;/users&quot;)
async def create_user(user: dict):
    return &#123;&quot;message&quot;: &quot;User created&quot;, &quot;user&quot;: user&#125;

# PUT запрос — полное обновление
&#64;app.put(&quot;/users/&#123;user_id&#125;&quot;)
async def update_user(user_id: int, user: dict):
    return &#123;&quot;id&quot;: user_id, &#42;&#42;user&#125;

# DELETE запрос — удаление
&#64;app.delete(&quot;/users/&#123;user_id&#125;&quot;)
async def delete_user(user_id: int):
    return &#123;&quot;message&quot;: f&quot;User &#123;user_id&#125; deleted&quot;&#125;
\`\`\`

**Асинхронные и синхронные эндпоинты:**
FastAPI поддерживает оба варианта. Async эндпоинты не блокируют event loop при I/O операциях.

\`\`\`python
# Синхронный эндпоинт (FastAPI запустит в thread pool)
&#64;app.get(&quot;/sync&quot;)
def sync_endpoint():
    return &#123;&quot;message&quot;: &quot;sync&quot;&#125;

# Асинхронный эндпоинт
&#64;app.get(&quot;/async&quot;)
async def async_endpoint():
    return &#123;&quot;message&quot;: &quot;async&quot;&#125;
\`\`\`

**Параметры пути и запроса:**
\`\`\`python
&#64;app.get(&quot;/items/&#123;item_id&#125;&quot;)
async def get_item(item_id: int, q: str = None):
    return &#123;&quot;item_id&quot;: item_id, &quot;q&quot;: q&#125;
\`\`\`

---

**Автоматическая документация:**

FastAPI генерирует интерактивную документацию автоматически на основе аннотаций типов и Pydantic-моделей.

**Swagger UI:**
Доступен по адресу \`/docs\`. Позволяет тестировать эндпоинты прямо из браузера.

\`\`\`bash
# После запуска приложения
# Откройте http://localhost:8000/docs
\`\`\`

**ReDoc:**
Альтернативный интерфейс документации по адресу \`/redoc\`. Более читаемый формат.

\`\`\`bash
# http://localhost:8000/redoc
\`\`\`

**OpenAPI схема:**
JSON-описание API по адресу \`/openapi.json\`. Используется для генерации клиентов.

**Как FastAPI генерирует документацию:**
1. Анализирует аннотации типов параметров функции
2. Читает Pydantic-модели для request/response
3. Использует docstring функции как описание эндпоинта
4. Генерирует OpenAPI 3.1 схему

**Пример с документацией:**
\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title=&quot;My API&quot;,
    description=&quot;API для управления пользователями&quot;,
    version=&quot;1.0.0&quot;
)

class UserCreate(BaseModel):
    name: str
    email: str
    age: int = None

&#64;app.post(&quot;/users&quot;, 
          response_model=UserCreate,
          summary=&quot;Создать пользователя&quot;,
          description=&quot;Создаёт нового пользователя в системе&quot;,
          tags=&#91;&quot;users&quot;&#93;)
async def create_user(user: UserCreate):
    &quot;&quot;&quot;
    Создаёт нового пользователя.
    
    - **name**: имя пользователя (обязательно)
    - **email**: email (обязательно)
    - **age**: возраст (опционально)
    &quot;&quot;&quot;
    return user
\`\`\`

**Настройка документации:**
\`\`\`python
app = FastAPI(
    docs_url=&quot;/swagger&quot;,      # изменить путь Swagger
    redoc_url=&quot;/documentation&quot;, # изменить путь ReDoc
    openapi_url=&quot;/api/v1/openapi.json&quot; # изменить путь схемы
)

# Отключить документацию (для production)
app = FastAPI(docs_url=None, redoc_url=None)
\`\`\`

**Для собеседования:** Эндпоинты создаются через декораторы \`&#64;app.get\`, \`&#64;app.post\` и т.д. FastAPI автоматически генерирует Swagger UI (\`/docs\`), ReDoc (\`/redoc\`) и OpenAPI схему (\`/openapi.json\`) на основе аннотаций типов и Pydantic-моделей. Docstring функции используется как описание эндпоинта.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-3`,
"title": `Pydantic-модели и валидация данных.`,
"fullAnswer": `**Pydantic** — библиотека для валидации данных на основе аннотаций типов Python. Является основой FastAPI.

**Базовая модель:**
\`\`\`python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str
    age: int = None
    is_active: bool = True
\`\`\`

Pydantic автоматически проверяет типы данных при создании объекта:
\`\`\`python
user = User(name=&quot;John&quot;, email=&quot;john&#64;example.com&quot;, age=30)
# ✅ Всё корректно

user = User(name=&quot;John&quot;, email=&quot;invalid&quot;, age=&quot;not a number&quot;)
# ❌ ValidationError: значение age должно быть int
\`\`\`

**Валидация в эндпоинте:**
\`\`\`python
&#64;app.post(&quot;/users&quot;)
async def create_user(user: User):
    # Если данные невалидны, FastAPI автоматически вернёт 422 ошибку
    return &#123;&quot;message&quot;: &quot;User created&quot;, &quot;user&quot;: user&#125;
\`\`\`

**Встроенные валидаторы:**
\`\`\`python
from pydantic import BaseModel, Field, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr  # требует pip install pydantic&#91;email&#93;
    age: Optional&#91;int&#93; = Field(None, ge=0, le=120)
    password: str = Field(..., min_length=8)
\`\`\`

**Field параметры:**
- \`default\` — значение по умолчанию
- \`alias\` — альтернативное имя поля (для JSON)
- \`title\`, \`description\` — для документации
- \`gt\`, \`ge\`, \`lt\`, \`le\` — ограничения для чисел
- \`min_length\`, \`max_length\` — ограничения для строк
- \`pattern\` — регулярное выражение
- \`examples\` — примеры для документации

**Кастомные валидаторы:**
\`\`\`python
from pydantic import BaseModel, field_validator

class User(BaseModel):
    name: str
    email: str
    
    &#64;field_validator(&quot;name&quot;)
    &#64;classmethod
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError(&quot;Name cannot be empty&quot;)
        return v.title()  # преобразуем в Title Case
    
    &#64;field_validator(&quot;email&quot;)
    &#64;classmethod
    def email_must_have_at(cls, v):
        if &quot;&#64;&quot; not in v:
            raise ValueError(&quot;Invalid email&quot;)
        return v.lower()
\`\`\`

**Валидация на уровне модели:**
\`\`\`python
from pydantic import BaseModel, model_validator

class User(BaseModel):
    password: str
    password_confirm: str
    
    &#64;model_validator(mode=&quot;after&quot;)
    def check_passwords_match(self):
        if self.password != self.password_confirm:
            raise ValueError(&quot;Passwords do not match&quot;)
        return self
\`\`\`

**Вложенные модели:**
\`\`\`python
class Address(BaseModel):
    city: str
    street: str
    zip_code: str

class User(BaseModel):
    name: str
    address: Address

# JSON:
# &#123;
#   &quot;name&quot;: &quot;John&quot;,
#   &quot;address&quot;: &#123;
#     &quot;city&quot;: &quot;Moscow&quot;,
#     &quot;street&quot;: &quot;Tverskaya&quot;,
#     &quot;zip_code&quot;: &quot;125009&quot;
#   &#125;
# &#125;
\`\`\`

**Модели для разных операций:**
\`\`\`python
# Для создания (требует пароль)
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

# Для ответа (без пароля)
class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    
    class Config:
        from_attributes = True  # для конвертации из ORM

# Для обновления (все поля опциональны)
class UserUpdate(BaseModel):
    name: Optional&#91;str&#93; = None
    email: Optional&#91;str&#93; = None
\`\`\`

**Сериализация:**
\`\`\`python
user = User(name=&quot;John&quot;, email=&quot;john&#64;example.com&quot;)

# В dict
user_dict = user.model_dump()

# В JSON
user_json = user.model_dump_json()

# С исключением полей
user_dict = user.model_dump(exclude=&#123;&quot;password&quot;&#125;)

# Только изменённые поля
user_dict = user.model_dump(exclude_unset=True)
\`\`\`

**Для собеседования:** Pydantic — библиотека валидации данных на основе типов. Модели наследуются от BaseModel. Валидация через Field (встроенные ограничения) и валидаторы (&#64;field_validator, &#64;model_validator). FastAPI автоматически возвращает 422 ошибку при невалидных данных. Вложенные модели поддерживаются. Для ORM используется \`from_attributes = True\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-4`,
"title": `Dependency Injection, async/await.`,
"fullAnswer": `**Dependency Injection (DI) в FastAPI:**

DI — паттерн, при котором зависимости (сервисы, подключения к БД) предоставляются функциям, а не создаются внутри них. В FastAPI DI реализован через \`Depends\`.

**Базовое использование:**
\`\`\`python
from fastapi import Depends, FastAPI

app = FastAPI()

# Функция-зависимость
def get_db():
    db = &quot;database_connection&quot;
    try:
        yield db  # передаём в endpoint
    finally:
        db = None  # очистка после запроса

&#64;app.get(&quot;/users&quot;)
async def get_users(db = Depends(get_db)):
    return &#123;&quot;db&quot;: db, &quot;users&quot;: &#91;&#93;&#125;
\`\`\`

**Зачем нужен DI:**
- Переиспользование кода (одна зависимость для многих endpoint'ов)
- Тестируемость (можно подменить зависимость в тестах)
- Разделение ответственности
- Управление ресурсами (открытие/закрытие соединений)

**Вложенные зависимости:**
\`\`\`python
def get_db():
    yield &quot;db_connection&quot;

def get_current_user(db = Depends(get_db)):
    return &#123;&quot;user&quot;: &quot;John&quot;, &quot;db&quot;: db&#125;

&#64;app.get(&quot;/profile&quot;)
async def get_profile(current_user = Depends(get_current_user)):
    return current_user
\`\`\`

FastAPI автоматически разрешает граф зависимостей: сначала \`get_db\`, потом \`get_current_user\`, потом endpoint.

**Зависимости с параметрами:**
\`\`\`python
def pagination(page: int = 1, size: int = 10):
    return &#123;&quot;page&quot;: page, &quot;size&quot;: size, &quot;skip&quot;: (page - 1) &#42; size&#125;

&#64;app.get(&quot;/items&quot;)
async def get_items(pagination: dict = Depends(pagination)):
    return pagination
\`\`\`

**Глобальные зависимости:**
\`\`\`python
app = FastAPI(dependencies=&#91;Depends(verify_token)&#93;)

# verify_token будет вызываться для ВСЕХ endpoint'ов
\`\`\`

**Override зависимостей для тестирования:**
\`\`\`python
def override_get_db():
    yield &quot;test_db&quot;

app.dependency_overrides&#91;get_db&#93; = override_get_db
\`\`\`

---

**async/await в FastAPI:**

FastAPI построен на asyncio. Endpoint может быть объявлен как \`async def\` или \`def\`.

**Async endpoint:**
\`\`\`python
&#64;app.get(&quot;/users&quot;)
async def get_users():
    users = await database.fetch_all(&quot;SELECT &#42; FROM users&quot;)
    return users
\`\`\`

**Sync endpoint:**
\`\`\`python
&#64;app.get(&quot;/users&quot;)
def get_users():
    users = database.fetch_all(&quot;SELECT &#42; FROM users&quot;)
    return users
\`\`\`

FastAPI автоматически запускает sync endpoint'ы в thread pool, чтобы не блокировать event loop.

**Когда использовать async:**
- I/O операции (запросы к БД, внешним API, файлам)
- WebSocket
- Долгие операции, где нужно параллельное выполнение

**Когда использовать sync:**
- CPU-bound операции (вычисления)
- Работа с библиотеками, не поддерживающими async
- Простые endpoint'ы без I/O

**Параллельное выполнение:**
\`\`\`python
import asyncio

&#64;app.get(&quot;/data&quot;)
async def get_data():
    # Параллельное выполнение
    users, posts = await asyncio.gather(
        fetch_users(),
        fetch_posts()
    )
    return &#123;&quot;users&quot;: users, &quot;posts&quot;: posts&#125;
\`\`\`

**Асинхронные зависимости:**
\`\`\`python
async def get_async_db():
    db = await async_engine.connect()
    try:
        yield db
    finally:
        await db.close()

&#64;app.get(&quot;/users&quot;)
async def get_users(db = Depends(get_async_db)):
    return await db.fetch_all(&quot;SELECT &#42; FROM users&quot;)
\`\`\`

**Для собеседования:** DI в FastAPI реализован через \`Depends\`. Зависимости могут быть вложенными, с параметрами, глобальными. \`yield\` позволяет выполнять cleanup код. Async endpoint'ы не блокируют event loop при I/O операциях. Sync endpoint'ы запускаются в thread pool автоматически.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-5`,
"title": `@app.get, @app.post, query/path-параметры, тело запроса.`,
"fullAnswer": `**HTTP-методы в FastAPI:**

FastAPI предоставляет декораторы для всех основных HTTP-методов: \`&#64;app.get\`, \`&#64;app.post\`, \`&#64;app.put\`, \`&#64;app.patch\`, \`&#64;app.delete\`, \`&#64;app.options\`, \`&#64;app.head\`.

\`\`\`python
&#64;app.get(&quot;/items&quot;)      # Получить список
&#64;app.post(&quot;/items&quot;)     # Создать новый
&#64;app.put(&quot;/items/&#123;id&#125;&quot;) # Полностью обновить
&#64;app.patch(&quot;/items/&#123;id&#125;&quot;) # Частично обновить
&#64;app.delete(&quot;/items/&#123;id&#125;&quot;) # Удалить
\`\`\`

---

**Path-параметры (параметры пути):**

Передаются в URL как часть пути. Объявляются в декораторе через \`&#123;parameter_name&#125;\`.

\`\`\`python
&#64;app.get(&quot;/items/&#123;item_id&#125;&quot;)
async def get_item(item_id: int):
    return &#123;&quot;item_id&quot;: item_id&#125;
\`\`\`

**Валидация path-параметров:**
\`\`\`python
&#64;app.get(&quot;/items/&#123;item_id&#125;&quot;)
async def get_item(item_id: int):
    # Если передать строку вместо числа, FastAPI вернёт 422 ошибку
    return &#123;&quot;item_id&quot;: item_id&#125;

&#64;app.get(&quot;/users/&#123;user_id&#125;&quot;)
async def get_user(user_id: int = Path(..., gt=0, lt=1000)):
    # gt=0 — больше нуля, lt=1000 — меньше тысячи
    return &#123;&quot;user_id&quot;: user_id&#125;
\`\`\`

**Несколько path-параметров:**
\`\`\`python
&#64;app.get(&quot;/users/&#123;user_id&#125;/items/&#123;item_id&#125;&quot;)
async def get_user_item(user_id: int, item_id: int):
    return &#123;&quot;user_id&quot;: user_id, &quot;item_id&quot;: item_id&#125;
\`\`\`

**Enum для path-параметров:**
\`\`\`python
from enum import Enum

class ModelName(str, Enum):
    alexnet = &quot;alexnet&quot;
    resnet = &quot;resnet&quot;
    lenet = &quot;lenet&quot;

&#64;app.get(&quot;/models/&#123;model_name&#125;&quot;)
async def get_model(model_name: ModelName):
    return &#123;&quot;model_name&quot;: model_name&#125;
\`\`\`

---

**Query-параметры:**

Передаются в URL после \`?\`. Объявляются как обычные параметры функции.

\`\`\`python
&#64;app.get(&quot;/items&quot;)
async def get_items(skip: int = 0, limit: int = 10):
    return &#123;&quot;skip&quot;: skip, &quot;limit&quot;: limit&#125;

# GET /items?skip=20&amp;limit=5
\`\`\`

**Опциональные query-параметры:**
\`\`\`python
from typing import Optional

&#64;app.get(&quot;/items&quot;)
async def get_items(q: Optional&#91;str&#93; = None):
    if q:
        return &#123;&quot;q&quot;: q&#125;
    return &#123;&quot;message&quot;: &quot;No query&quot;&#125;
\`\`\`

**Валидация query-параметров:**
\`\`\`python
&#64;app.get(&quot;/items&quot;)
async def get_items(
    q: str = Query(None, min_length=3, max_length=50),
    skip: int = Query(0, ge=0),
    limit: int = Query(10, gt=0, le=100)
):
    return &#123;&quot;q&quot;: q, &quot;skip&quot;: skip, &quot;limit&quot;: limit&#125;
\`\`\`

**Несколько значений одного параметра:**
\`\`\`python
&#64;app.get(&quot;/items&quot;)
async def get_items(q: list&#91;str&#93; = Query(&#91;&#93;)):
    return &#123;&quot;q&quot;: q&#125;

# GET /items?q=apple&amp;q=banana
\`\`\`

---

**Тело запроса (Request Body):**

Передаётся через Pydantic-модель. Используется в POST, PUT, PATCH запросах.

\`\`\`python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: Optional&#91;str&#93; = None
    price: float
    tax: Optional&#91;float&#93; = None

&#64;app.post(&quot;/items&quot;)
async def create_item(item: Item):
    return &#123;&quot;item&quot;: item&#125;
\`\`\`

**Несколько тел запроса:**
\`\`\`python
class User(BaseModel):
    name: str

class Item(BaseModel):
    name: str

&#64;app.post(&quot;/users/&#123;user_id&#125;/items&quot;)
async def create_user_item(user_id: int, user: User, item: Item):
    return &#123;&quot;user_id&quot;: user_id, &quot;user&quot;: user, &quot;item&quot;: item&#125;
\`\`\`

**Вложенные модели:**
\`\`\`python
class Address(BaseModel):
    city: str
    street: str

class User(BaseModel):
    name: str
    address: Address

&#64;app.post(&quot;/users&quot;)
async def create_user(user: User):
    return user
\`\`\`

**Смешивание параметров:**
\`\`\`python
&#64;app.put(&quot;/items/&#123;item_id&#125;&quot;)
async def update_item(
    item_id: int,                          # path
    q: Optional&#91;str&#93; = None,               # query
    item: Item = None                      # body
):
    return &#123;&quot;item_id&quot;: item_id, &quot;q&quot;: q, &quot;item&quot;: item&#125;
\`\`\`

**Порядок параметров:**
1. Path-параметры (обязательные, объявлены в URL)
2. Query-параметры (опциональные, простые типы)
3. Body-параметры (Pydantic-модели)

**Для собеседования:** Path-параметры — часть URL (\`/items/&#123;id&#125;\`), валидируются автоматически. Query-параметры — после \`?\` в URL, объявляются как обычные параметры функции. Тело запроса — Pydantic-модель, валидируется автоматически. Можно смешивать все три типа параметров.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-6`,
"title": `ResponseModel, кастомные статус-коды, middleware, HTTPException.`,
"fullAnswer": `**Response Model:**

Определяет структуру ответа endpoint'а. FastAPI использует это для валидации выходных данных и документации.

\`\`\`python
from pydantic import BaseModel

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

&#64;app.get(&quot;/users/&#123;user_id&#125;&quot;, response_model=UserResponse)
async def get_user(user_id: int):
    # Даже если вернёте больше полей, в ответе будут только id, name, email
    return &#123;&quot;id&quot;: 1, &quot;name&quot;: &quot;John&quot;, &quot;email&quot;: &quot;john&#64;example.com&quot;, &quot;password&quot;: &quot;secret&quot;&#125;
\`\`\`

**Исключение полей из ответа:**
\`\`\`python
&#64;app.get(&quot;/users&quot;, response_model=UserResponse, response_model_exclude=&#123;&quot;password&quot;&#125;)
async def get_users():
    ...

# Или только определённые поля
&#64;app.get(&quot;/users&quot;, response_model=UserResponse, response_model_include=&#123;&quot;id&quot;, &quot;name&quot;&#125;)
async def get_users():
    ...
\`\`\`

**Список в ответе:**
\`\`\`python
&#64;app.get(&quot;/users&quot;, response_model=list&#91;UserResponse&#93;)
async def get_users():
    return &#91;&#123;&quot;id&quot;: 1, &quot;name&quot;: &quot;John&quot;, &quot;email&quot;: &quot;john&#64;example.com&quot;&#125;&#93;
\`\`\`

---

**Кастомные статус-коды:**

По умолчанию GET возвращает 200, POST — 200. Можно изменить через \`status_code\`.

\`\`\`python
from fastapi import status

&#64;app.post(&quot;/users&quot;, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    return user

&#64;app.delete(&quot;/users/&#123;user_id&#125;&quot;, status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int):
    return None
\`\`\`

**Частые статус-коды:**
- 200 OK — успешный GET/PUT/PATCH
- 201 Created — успешный POST
- 204 No Content — успешный DELETE без тела ответа
- 400 Bad Request — невалидный запрос
- 401 Unauthorized — не аутентифицирован
- 403 Forbidden — нет прав доступа
- 404 Not Found — ресурс не найден
- 422 Unprocessable Entity — невалидные данные (автоматически от Pydantic)
- 500 Internal Server Error — ошибка сервера

---

**HTTPException:**

Исключение для возврата HTTP-ошибок с кастомным сообщением.

\`\`\`python
from fastapi import HTTPException

&#64;app.get(&quot;/users/&#123;user_id&#125;&quot;)
async def get_user(user_id: int):
    user = db.get(user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail=f&quot;User &#123;user_id&#125; not found&quot;,
            headers=&#123;&quot;X-Error&quot;: &quot;User not found&quot;&#125;
        )
    return user
\`\`\`

**Кастомное исключение:**
\`\`\`python
from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

&#64;app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content=&#123;&quot;error&quot;: &quot;Validation failed&quot;, &quot;details&quot;: exc.errors()&#125;
    )
\`\`\`

---

**Middleware:**

Middleware — функция, которая выполняется до и после каждого запроса. Используется для логирования, CORS, аутентификации.

**HTTP Middleware:**
\`\`\`python
from fastapi import Request, Response
import time

&#64;app.middleware(&quot;http&quot;)
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers&#91;&quot;X-Process-Time&quot;&#93; = str(process_time)
    return response

&#64;app.middleware(&quot;http&quot;)
async def logging_middleware(request: Request, call_next):
    print(f&quot;&#123;request.method&#125; &#123;request.url&#125;&quot;)
    response = await call_next(request)
    print(f&quot;Response: &#123;response.status_code&#125;&quot;)
    return response
\`\`\`

**Порядок выполнения middleware:**
Middleware выполняются в порядке добавления. Первый добавленный — первый выполняется до запроса, последний — первый после ответа.

**CORS Middleware:**
\`\`\`python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=&#91;&quot;http://localhost:3000&quot;, &quot;https://example.com&quot;&#93;,
    allow_credentials=True,
    allow_methods=&#91;&quot;GET&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;DELETE&quot;&#93;,
    allow_headers=&#91;&quot;&#42;&quot;&#93;,
)
\`\`\`

**Для собеседования:** Response model определяет структуру ответа и фильтрует поля. Статус-коды задаются через \`status_code\` параметр декоратора. HTTPException — для возврата ошибок с кастомным сообщением. Middleware выполняется до/после каждого запроса через \`&#64;app.middleware(&quot;http&quot;)\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-junior-общее-7`,
"title": `CORS, background tasks, тестирование.`,
"fullAnswer": `**CORS (Cross-Origin Resource Sharing):**

CORS — механизм безопасности браузера, который ограничивает запросы с одного домена к другому. FastAPI предоставляет встроенный CORS middleware.

\`\`\`python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=&#91;
        &quot;http://localhost:3000&quot;,  # фронтенд на React/Vue
        &quot;https://example.com&quot;
    &#93;,
    allow_credentials=True,  # разрешить cookies
    allow_methods=&#91;&quot;&#42;&quot;&#93;,     # все HTTP методы
    allow_headers=&#91;&quot;&#42;&quot;&#93;,     # все заголовки
)
\`\`\`

**Параметры CORS:**
- \`allow_origins\` — список разрешённых доменов. \`&#91;&quot;&#42;&quot;&#93;\` — все домены (небезопасно для production)
- \`allow_origin_regex\` — регулярное выражение для доменов
- \`allow_methods\` — разрешённые HTTP методы
- \`allow_headers\` — разрешённые заголовки
- \`allow_credentials\` — разрешить передачу cookies и authentication headers
- \`expose_headers\` — заголовки, доступные браузеру
- \`max_age\` — время кэширования preflight запроса в секундах

**Preflight запросы:**
Браузер автоматически отправляет OPTIONS запрос перед основным запросом, если запрос cross-origin. FastAPI обрабатывает их автоматически через CORS middleware.

---

**Background Tasks:**

Фоновые задачи выполняются после отправки ответа клиенту. Используются для долгих операций, которые не нужно ждать.

\`\`\`python
from fastapi import BackgroundTasks

def send_email(email: str, message: str):
    # Долгая операция отправки email
    import time
    time.sleep(5)
    print(f&quot;Email sent to &#123;email&#125;: &#123;message&#125;&quot;)

&#64;app.post(&quot;/send-email&quot;)
async def send_email_endpoint(
    email: str,
    message: str,
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_email, email, message)
    return &#123;&quot;message&quot;: &quot;Email will be sent in background&quot;&#125;
\`\`\`

**Использование с зависимостями:**
\`\`\`python
def write_log(message: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(log_to_file, message)

&#64;app.post(&quot;/items&quot;)
async def create_item(
    item: Item,
    background_tasks: BackgroundTasks = Depends(write_log)
):
    return item
\`\`\`

**Ограничения background tasks:**
- Задачи выполняются в том же процессе, что и приложение
- Если задача падает, клиент не узнает об этом
- Не подходят для критичных операций
- Для надёжных задач используйте Celery, RQ или Redis Queue

**Когда использовать:**
- Отправка email
- Логирование
- Обработка изображений
- Генерация отчётов
- Очистка кэша

---

**Тестирование FastAPI:**

FastAPI предоставляет \`TestClient\` на основе HTTPX для тестирования.

**Установка:**
\`\`\`bash
pip install httpx pytest
\`\`\`

**Базовый тест:**
\`\`\`python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get(&quot;/&quot;)
    assert response.status_code == 200
    assert response.json() == &#123;&quot;message&quot;: &quot;Hello World&quot;&#125;

def test_create_user():
    response = client.post(
        &quot;/users&quot;,
        json=&#123;&quot;name&quot;: &quot;John&quot;, &quot;email&quot;: &quot;john&#64;example.com&quot;&#125;
    )
    assert response.status_code == 201
    data = response.json()
    assert data&#91;&quot;name&quot;&#93; == &quot;John&quot;
\`\`\`

**Тестирование с зависимостями:**
\`\`\`python
def override_get_db():
    yield &quot;test_db&quot;

app.dependency_overrides&#91;get_db&#93; = override_get_db

def test_get_users():
    response = client.get(&quot;/users&quot;)
    assert response.status_code == 200

# Очистка после тестов
app.dependency_overrides.clear()
\`\`\`

**Тестирование ошибок:**
\`\`\`python
def test_user_not_found():
    response = client.get(&quot;/users/999&quot;)
    assert response.status_code == 404
    assert response.json()&#91;&quot;detail&quot;&#93; == &quot;User not found&quot;

def test_validation_error():
    response = client.post(&quot;/users&quot;, json=&#123;&quot;name&quot;: &quot;&quot;&#125;)
    assert response.status_code == 422
\`\`\`

**Тестирование async endpoint'ов:**
\`\`\`python
import pytest
from httpx import AsyncClient, ASGITransport

&#64;pytest.mark.asyncio
async def test_async_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url=&quot;http://test&quot;) as client:
        response = await client.get(&quot;/async-endpoint&quot;)
        assert response.status_code == 200
\`\`\`

**Тестирование с авторизацией:**
\`\`\`python
def test_protected_endpoint():
    # Без токена
    response = client.get(&quot;/profile&quot;)
    assert response.status_code == 401
    
    # С токеном
    response = client.get(
        &quot;/profile&quot;,
        headers=&#123;&quot;Authorization&quot;: &quot;Bearer test_token&quot;&#125;
    )
    assert response.status_code == 200
\`\`\`

**Pytest fixtures:**
\`\`\`python
import pytest

&#64;pytest.fixture
def client():
    with TestClient(app) as c:
        yield c

def test_endpoint(client):
    response = client.get(&quot;/&quot;)
    assert response.status_code == 200
\`\`\`

**Для собеседования:** CORS настраивается через \`CORSMiddleware\` с параметрами \`allow_origins\`, \`allow_methods\`, \`allow_headers\`. Background tasks выполняются после ответа через \`BackgroundTasks.add_task()\`. Тестирование через \`TestClient\` из \`fastapi.testclient\`. Зависимости переопределяются через \`app.dependency_overrides\`.`,
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
"id": `9-middle-общее-1`,
"title": `GIL и его влияние на многопоточность.`,
"fullAnswer": `**GIL (Global Interpreter Lock)** — это мьютекс в CPython, который позволяет только одному потоку выполнять байткод Python одновременно, даже на многоядерных процессорах.

**Зачем нужен GIL:**
CPython использует подсчёт ссылок для управления памятью. Без GIL два потока могли бы одновременно изменить счётчик ссылок, что привело бы к утечкам памяти или преждевременному освобождению объектов. GIL защищает эти операции.

**Влияние на многопоточность:**

**CPU-bound задачи (вычисления):**
Многопоточность в Python НЕ ускоряет CPU-bound задачи. Из-за GIL потоки выполняются по очереди, а не параллельно.

\`\`\`python
import threading
import time

def cpu_intensive_task&#40;&#41;&#58;
    result &#61; 0
    for i in range&#40;10&#42;&#42;7&#41;&#58;
        result &#43;&#61; i

&#35; Многопоточность НЕ быстрее однопоточности
threads &#61; &#91;threading&#46;Thread&#40;target&#61;cpu_intensive_task&#41; for _ in range&#40;4&#41;&#93;
start &#61; time&#46;time&#40;&#41;
for t in threads&#58;
    t&#46;start&#40;&#41;
for t in threads&#58;
    t&#46;join&#40;&#41;
print&#40;f&quot;Многопоточность&#58; &#123;time&#46;time&#40;&#41; &#45; start&#58;&#46;2f&#125;с&quot;&#41;
\`\`\`

**I/O-bound задачи (сеть, файлы, БД):**
Многопоточность ЭФФЕКТИВНА для I/O-bound задач. Пока один поток ждёт I/O, GIL освобождается и другой поток может работать.

**Альтернативы для CPU-bound задач:**

**1. Multiprocessing:**
Каждый процесс имеет свой интерпретатор Python и свой GIL. Настоящий параллелизм.

\`\`\`python
from multiprocessing import Pool

def cpu_intensive_task&#40;n&#41;&#58;
    result &#61; 0
    for i in range&#40;n&#41;&#58;
        result &#43;&#61; i
    return result

with Pool&#40;4&#41; as pool&#58;
    results &#61; pool&#46;map&#40;cpu_intensive_task&#44; &#91;10&#42;&#42;7&#93; &#42; 4&#41;
\`\`\`

**2. Asyncio:**
Для I/O-bound задач. Один поток, но кооперативная многозадачность.

**3. C-расширения:**
Библиотеки типа NumPy, Pandas освобождают GIL во время выполнения C-кода.

**GIL в Python 3.13+:**
Начиная с Python 3.13, GIL можно отключить через &#96;&#45;&#45;disable-gil&#96; при компиляции. Это экспериментальная функция.

**Для FastAPI:**
FastAPI использует asyncio, поэтому GIL не проблема для I/O-bound операций. Но если в endpoint есть CPU-bound код, он заблокирует event loop. Решение — выносить в отдельный поток или процесс через &#96;run_in_executor&#96;.

\`\`\`python
from concurrent&#46;futures import ProcessPoolExecutor

app &#61; FastAPI&#40;&#41;
executor &#61; ProcessPoolExecutor&#40;&#41;

&#64;app&#46;get&#40;&quot;&#47;heavy&quot;&#41;
async def heavy_computation&#40;&#41;&#58;
    loop &#61; asyncio&#46;get_event_loop&#40;&#41;
    result &#61; await loop&#46;run_in_executor&#40;executor&#44; cpu_intensive_task&#41;
    return &#123;&quot;result&quot;&#58; result&#125;
\`\`\`

**Для собеседования:** GIL — мьютекс в CPython. Не влияет на I/O-bound задачи, но блокирует CPU-bound многопоточность. Решения: multiprocessing для CPU-bound, asyncio для I/O-bound, C-расширения освобождают GIL.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-2`,
"title": `asyncio, корутины и event loop.`,
"fullAnswer": `**asyncio** — библиотека для асинхронного программирования в Python, основанная на корутинах и event loop.

**Корутины:**
Корутины — это функции, которые могут приостанавливать своё выполнение и возвращать управление, не теряя состояние.

\`\`\`python
import asyncio

async def fetch_data&#40;url&#41;&#58;
    print&#40;f&quot;Начинаем загрузку &#123;url&#125;&quot;&#41;
    await asyncio&#46;sleep&#40;2&#41;  &#35; Приостанавливаем корутину
    print&#40;f&quot;Загрузка &#123;url&#125; завершена&quot;&#41;
    return &#123;&quot;url&quot;&#58; url&#125;

async def main&#40;&#41;&#58;
    task1 &#61; asyncio&#46;create_task&#40;fetch_data&#40;&quot;https&#58;&#47;&#47;api1&#46;com&quot;&#41;&#41;
    task2 &#61; asyncio&#46;create_task&#40;fetch_data&#40;&quot;https&#58;&#47;&#47;api2&#46;com&quot;&#41;&#41;
    
    results &#61; await asyncio&#46;gather&#40;task1&#44; task2&#41;
    print&#40;results&#41;

asyncio&#46;run&#40;main&#40;&#41;&#41;
&#35; Общее время ~2 секунды&#44; а не 4
\`\`\`

**Event Loop:**
Event loop — это цикл событий, который управляет выполнением корутин. Он отслеживает готовые к выполнению задачи и переключается между ними.

\`\`\`python
&#35; Упрощённая логика event loop&#58;
while True&#58;
    &#35; 1&#46; Проверяем готовые задачи
    ready_tasks &#61; get_ready_tasks&#40;&#41;
    
    &#35; 2&#46; Выполняем их до первого await
    for task in ready_tasks&#58;
        task&#46;run_until_await&#40;&#41;
    
    &#35; 3&#46; Ждём I&#47;O событий &#40;сеть&#44; файлы&#41;
    wait_for_io_events&#40;&#41;
\`\`\`

**Ключевые концепции:**

**async/await:**
&#96;async def&#96; объявляет корутину. &#96;await&#96; приостанавливает корутину и ждёт результат другой корутины.

**asyncio.gather:**
Запускает несколько корутин параллельно и ждёт все результаты.

**asyncio.create_task:**
Создаёт задачу из корутины для фонового выполнения.

**asyncio.sleep vs time.sleep:**
&#96;asyncio.sleep()&#96; — не блокирует event loop, другие корутины могут работать. &#96;time.sleep()&#96; — блокирует весь поток.

**Асинхронные контекстные менеджеры:**
\`\`\`python
class AsyncDatabase&#58;
    async def __aenter__&#40;self&#41;&#58;
        self&#46;connection &#61; await connect&#40;&#41;
        return self
    
    async def __aexit__&#40;self&#44; exc_type&#44; exc_val&#44; exc_tb&#41;&#58;
        await self&#46;connection&#46;close&#40;&#41;

async def main&#40;&#41;&#58;
    async with AsyncDatabase&#40;&#41; as db&#58;
        await db&#46;query&#40;&quot;SELECT &#42; FROM users&quot;&#41;
\`\`\`

**Для FastAPI:**
FastAPI автоматически создаёт event loop и запускает корутины. Endpoint может быть async или sync. Async endpoint не блокирует event loop при await.

\`\`\`python
&#64;app&#46;get&#40;&quot;&#47;users&quot;&#41;
async def get_users&#40;&#41;&#58;
    &#35; Не блокирует event loop
    users &#61; await db&#46;fetch_all&#40;&quot;SELECT &#42; FROM users&quot;&#41;
    return users

&#64;app&#46;get&#40;&quot;&#47;sync-users&quot;&#41;
def get_sync_users&#40;&#41;&#58;
    &#35; FastAPI запустит в thread pool&#44; чтобы не блокировать event loop
    users &#61; db&#46;fetch_all&#40;&quot;SELECT &#42; FROM users&quot;&#41;
    return users
\`\`\`

**Для собеседования:** asyncio — библиотека для асинхронного программирования на корутинах. Event loop управляет выполнением корутин, переключаясь при await. asyncio.gather запускает корутины параллельно. asyncio.sleep не блокирует event loop, в отличие от time.sleep.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-3`,
"title": `Dependency Injection под капотом: Depends, yield, кастомные зависимости.`,
"fullAnswer": `**Dependency Injection (DI)** в FastAPI — механизм для предоставления зависимостей (сервисов, подключений к БД, аутентификации) в endpoint'ы.

**Базовое использование Depends:**
\`\`\`python
from fastapi import Depends&#44; FastAPI

app &#61; FastAPI&#40;&#41;

def get_db&#40;&#41;&#58;
    db &#61; SessionLocal&#40;&#41;
    try&#58;
        yield db
    finally&#58;
        db&#46;close&#40;&#41;

&#64;app&#46;get&#40;&quot;&#47;users&quot;&#41;
async def get_users&#40;db&#58; Session &#61; Depends&#40;get_db&#41;&#41;&#58;
    return db&#46;query&#40;User&#41;&#46;all&#40;&#41;
\`\`\`

**Как работает Depends под капотом:**

**1. Анализ сигнатуры функции:**
FastAPI использует библиотеку &#96;inspect&#96; для анализа параметров функции. Если параметр имеет тип &#96;Depends&#96;, FastAPI знает, что нужно вызвать зависимость.

**2. Рекурсивное разрешение зависимостей:**
Зависимости могут зависеть от других зависимостей. FastAPI строит граф зависимостей и разрешает их в правильном порядке.

\`\`\`python
def get_db&#40;&#41;&#58;
    db &#61; SessionLocal&#40;&#41;
    try&#58;
        yield db
    finally&#58;
        db&#46;close&#40;&#41;

def get_user_repo&#40;db&#58; Session &#61; Depends&#40;get_db&#41;&#41;&#58;
    return UserRepository&#40;db&#41;

&#64;app&#46;get&#40;&quot;&#47;users&#47;&#123;user_id&#125;&quot;&#41;
async def get_user&#40;user_id&#58; int&#44; repo&#58; UserRepository &#61; Depends&#40;get_user_repo&#41;&#41;&#58;
    &#35; FastAPI сначала вызовет get_db&#44; потом get_user_repo&#44; потом endpoint
    return repo&#46;get_by_id&#40;user_id&#41;
\`\`\`

**3. Кэширование зависимостей:**
По умолчанию зависимость вызывается один раз на запрос, даже если используется несколько раз.

**yield для управления ресурсами:**
&#96;yield&#96; позволяет выполнять код до и после запроса (setup/teardown).

\`\`\`python
async def get_redis&#40;&#41;&#58;
    redis &#61; Redis&#40;&#41;
    try&#58;
        yield redis
    finally&#58;
        await redis&#46;close&#40;&#41;
\`\`\`

**Кастомные зависимости:**

**1. Классы как зависимости:**
\`\`\`python
class Pagination&#58;
    def __init__&#40;self&#44; page&#58; int &#61; 1&#44; size&#58; int &#61; 10&#41;&#58;
        self&#46;page &#61; page
        self&#46;size &#61; size

&#64;app&#46;get&#40;&quot;&#47;items&quot;&#41;
async def get_items&#40;pagination&#58; Pagination &#61; Depends&#40;&#41;&#41;&#58;
    skip &#61; &#40;pagination&#46;page &#45; 1&#41; &#42; pagination&#46;size
    return db&#46;query&#40;Item&#41;&#46;offset&#40;skip&#41;&#46;limit&#40;pagination&#46;size&#41;&#46;all&#40;&#41;
\`\`\`

**2. Зависимости с параметрами:**
\`\`\`python
def require_role&#40;role&#58; str&#41;&#58;
    def role_checker&#40;user&#58; User &#61; Depends&#40;get_current_user&#41;&#41;&#58;
        if user&#46;role &#33;&#61; role&#58;
            raise HTTPException&#40;status_code&#61;403&#44; detail&#61;&quot;Forbidden&quot;&#41;
        return user
    return role_checker

&#64;app&#46;get&#40;&quot;&#47;admin&quot;&#41;
async def admin_panel&#40;user&#58; User &#61; Depends&#40;require_role&#40;&quot;admin&quot;&#41;&#41;&#41;&#58;
    return &#123;&quot;message&quot;&#58; &quot;Admin panel&quot;&#125;
\`\`\`

**Override зависимостей для тестирования:**
\`\`\`python
def override_get_db&#40;&#41;&#58;
    db &#61; TestingSessionLocal&#40;&#41;
    try&#58;
        yield db
    finally&#58;
        db&#46;close&#40;&#41;

app&#46;dependency_overrides&#91;get_db&#93; &#61; override_get_db
\`\`\`

**Для собеседования:** Depends анализирует сигнатуру функции через inspect, строит граф зависимостей и рекурсивно их разрешает. yield позволяет выполнять setup/teardown код. Зависимости кэшируются по умолчанию.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-4`,
"title": `SQLAlchemy в FastAPI (включая async).`,
"fullAnswer": `**SQLAlchemy** — ORM для Python, поддерживает синхронный и асинхронный режимы.

**Асинхронная SQLAlchemy (asyncpg):**

**Установка:**
&#96;pip install asyncpg sqlalchemy&#91;asyncio&#93;&#96;

**Настройка:**
\`\`\`python
from sqlalchemy&#46;ext&#46;asyncio import create_async_engine&#44; AsyncSession
from sqlalchemy&#46;orm import sessionmaker&#44; declarative_base

DATABASE_URL &#61; &quot;postgresql&#43;asyncpg&#58;&#47;&#47;user&#58;password&#64;localhost&#47;dbname&quot;

engine &#61; create_async_engine&#40;DATABASE_URL&#44; echo&#61;True&#41;
AsyncSessionLocal &#61; sessionmaker&#40;
    bind&#61;engine&#44;
    class_&#61;AsyncSession&#44;
    autocommit&#61;False&#44;
    autoflush&#61;False
&#41;
Base &#61; declarative_base&#40;&#41;
\`\`\`

**Async dependency:**
\`\`\`python
async def get_async_db&#40;&#41;&#58;
    async with AsyncSessionLocal&#40;&#41; as session&#58;
        try&#58;
            yield session
        finally&#58;
            await session&#46;close&#40;&#41;
\`\`\`

**Async endpoint:**
\`\`\`python
&#64;app&#46;get&#40;&quot;&#47;users&#47;&#123;user_id&#125;&quot;&#41;
async def get_user&#40;user_id&#58; int&#44; db&#58; AsyncSession &#61; Depends&#40;get_async_db&#41;&#41;&#58;
    result &#61; await db&#46;execute&#40;
        select&#40;User&#41;&#46;where&#40;User&#46;id &#61;&#61; user_id&#41;
    &#41;
    user &#61; result&#46;scalar_one_or_none&#40;&#41;
    
    if not user&#58;
        raise HTTPException&#40;status_code&#61;404&#44; detail&#61;&quot;User not found&quot;&#41;
    
    return user
\`\`\`

**Async операции:**
\`\`\`python
from sqlalchemy import select&#44; insert&#44; update&#44; delete

&#35; SELECT
result &#61; await db&#46;execute&#40;select&#40;User&#41;&#46;where&#40;User&#46;name &#61;&#61; &quot;John&quot;&#41;&#41;
users &#61; result&#46;scalars&#40;&#41;&#46;all&#40;&#41;

&#35; INSERT
new_user &#61; User&#40;name&#61;&quot;Jane&quot;&#44; email&#61;&quot;jane&#64;example&#46;com&quot;&#41;
db&#46;add&#40;new_user&#41;
await db&#46;commit&#40;&#41;
await db&#46;refresh&#40;new_user&#41;
\`\`\`

**Отношения и Eager loading (избегаем N+1):**
\`\`\`python
from sqlalchemy&#46;orm import selectinload&#44; joinedload

&#35; selectinload — отдельный запрос для связей
result &#61; await db&#46;execute&#40;
    select&#40;User&#41;&#46;options&#40;selectinload&#40;User&#46;posts&#41;&#41;
&#41;
&#35; joinedload — JOIN в одном запросе
result &#61; await db&#46;execute&#40;
    select&#40;User&#41;&#46;options&#40;joinedload&#40;User&#46;posts&#41;&#41;
&#41;
users &#61; result&#46;scalars&#40;&#41;&#46;unique&#40;&#41;&#46;all&#40;&#41;
\`\`\`

**Pydantic схемы для SQLAlchemy:**
\`\`\`python
from pydantic import BaseModel

class UserResponse&#40;BaseModel&#41;&#58;
    id&#58; int
    name&#58; str
    
    class Config&#58;
        from_attributes &#61; True  &#35; SQLAlchemy 2&#46;0&#43;
\`\`\`

**Для собеседования:** SQLAlchemy поддерживает sync и async режимы. Async использует asyncpg и AsyncSession. Зависимости через yield для управления сессией. Отношения через relationship, eager loading через selectinload/joinedload. Pydantic схемы с from_attributes=True для сериализации.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-5`,
"title": `Аутентификация (JWT, OAuth2 with Password Flow).`,
"fullAnswer": `**JWT (JSON Web Token)** — стандарт для создания токенов доступа. Состоит из header, payload и signature.

**Установка:**
&#96;pip install python-jose&#91;cryptography&#93; passlib&#91;bcrypt&#93;&#96;

**Хэширование паролей:**
\`\`\`python
from passlib&#46;context import CryptContext

pwd_context &#61; CryptContext&#40;schemes&#61;&#91;&quot;bcrypt&quot;&#93;&#44; deprecated&#61;&quot;auto&quot;&#41;

def hash_password&#40;password&#58; str&#41; &#45;&#62; str&#58;
    return pwd_context&#46;hash&#40;password&#41;

def verify_password&#40;plain_password&#58; str&#44; hashed_password&#58; str&#41; &#45;&#62; bool&#58;
    return pwd_context&#46;verify&#40;plain_password&#44; hashed_password&#41;
\`\`\`

**Генерация JWT:**
\`\`\`python
from jose import JWTError&#44; jwt
from datetime import datetime&#44; timedelta

SECRET_KEY &#61; &quot;your-secret-key&quot;
ALGORITHM &#61; &quot;HS256&quot;
ACCESS_TOKEN_EXPIRE_MINUTES &#61; 30

def create_access_token&#40;data&#58; dict&#44; expires_delta&#58; timedelta &#61; None&#41;&#58;
    to_encode &#61; data&#46;copy&#40;&#41;
    expire &#61; datetime&#46;utcnow&#40;&#41; &#43; &#40;expires_delta or timedelta&#40;minutes&#61;15&#41;&#41;
    to_encode&#46;update&#40;&#123;&quot;exp&quot;&#58; expire&#125;&#41;
    return jwt&#46;encode&#40;to_encode&#44; SECRET_KEY&#44; algorithm&#61;ALGORITHM&#41;
\`\`\`

**OAuth2 Password Flow:**

**Схема:**
1. Клиент отправляет username/password на /token
2. Сервер проверяет credentials
3. Сервер возвращает access_token
4. Клиент использует token в заголовке Authorization: Bearer &lt;token&gt;

**Реализация:**
\`\`\`python
from fastapi&#46;security import OAuth2PasswordBearer&#44; OAuth2PasswordRequestForm

oauth2_scheme &#61; OAuth2PasswordBearer&#40;tokenUrl&#61;&quot;token&quot;&#41;

&#64;app&#46;post&#40;&quot;&#47;token&quot;&#41;
async def login&#40;form_data&#58; OAuth2PasswordRequestForm &#61; Depends&#40;&#41;&#44; db&#58; Session &#61; Depends&#40;get_db&#41;&#41;&#58;
    user &#61; db&#46;query&#40;User&#41;&#46;filter&#40;User&#46;username &#61;&#61; form_data&#46;username&#41;&#46;first&#40;&#41;
    
    if not user or not verify_password&#40;form_data&#46;password&#44; user&#46;hashed_password&#41;&#58;
        raise HTTPException&#40;status_code&#61;401&#44; detail&#61;&quot;Incorrect credentials&quot;&#41;
    
    access_token &#61; create_access_token&#40;data&#61;&#123;&quot;sub&quot;&#58; user&#46;username&#125;&#41;
    return &#123;&quot;access_token&quot;&#58; access_token&#44; &quot;token_type&quot;&#58; &quot;bearer&quot;&#125;
\`\`\`

**Получение текущего пользователя:**
\`\`\`python
async def get_current_user&#40;token&#58; str &#61; Depends&#40;oauth2_scheme&#41;&#41;&#58;
    try&#58;
        payload &#61; jwt&#46;decode&#40;token&#44; SECRET_KEY&#44; algorithms&#61;&#91;ALGORITHM&#93;&#41;
        username&#58; str &#61; payload&#46;get&#40;&quot;sub&quot;&#41;
        if username is None&#58;
            raise HTTPException&#40;status_code&#61;401&#41;
    except JWTError&#58;
        raise HTTPException&#40;status_code&#61;401&#41;
    return user

&#64;app&#46;get&#40;&quot;&#47;users&#47;me&quot;&#41;
async def read_users_me&#40;current_user&#58; User &#61; Depends&#40;get_current_user&#41;&#41;&#58;
    return current_user
\`\`\`

**Для собеседования:** JWT состоит из header, payload, signature. OAuth2 Password Flow: клиент отправляет credentials, получает access_token, использует в заголовке Bearer. Passlib для хэширования паролей, python-jose для JWT.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-6`,
"title": `WebSocket, BackgroundTasks, uvicorn/gunicorn.`,
"fullAnswer": `**WebSocket:**
Протокол для двусторонней связи между клиентом и сервером в реальном времени.

**Реализация в FastAPI:**
\`\`\`python
from fastapi import WebSocket&#44; WebSocketDisconnect

&#64;app&#46;websocket&#40;&quot;&#47;ws&#47;&#123;client_id&#125;&quot;&#41;
async def websocket_endpoint&#40;websocket&#58; WebSocket&#44; client_id&#58; int&#41;&#58;
    await websocket&#46;accept&#40;&#41;
    try&#58;
        while True&#58;
            data &#61; await websocket&#46;receive_text&#40;&#41;
            await websocket&#46;send_text&#40;f&quot;Message received&#58; &#123;data&#125;&quot;&#41;
    except WebSocketDisconnect&#58;
        print&#40;f&quot;Client &#123;client_id&#125; disconnected&quot;&#41;
\`\`\`

**Менеджер подключений:**
\`\`\`python
class ConnectionManager&#58;
    def __init__&#40;self&#41;&#58;
        self&#46;active_connections&#58; list&#91;WebSocket&#93; &#61; &#91;&#93;
    
    async def connect&#40;self&#44; websocket&#58; WebSocket&#41;&#58;
        await websocket&#46;accept&#40;&#41;
        self&#46;active_connections&#46;append&#40;websocket&#41;
    
    def disconnect&#40;self&#44; websocket&#58; WebSocket&#41;&#58;
        self&#46;active_connections&#46;remove&#40;websocket&#41;
    
    async def broadcast&#40;self&#44; message&#58; str&#41;&#58;
        for connection in self&#46;active_connections&#58;
            await connection&#46;send_text&#40;message&#41;
\`\`\`

**BackgroundTasks:**
Выполнение задач в фоне без блокировки ответа клиенту.

\`\`\`python
from fastapi import BackgroundTasks

def send_email&#40;email&#58; str&#44; message&#58; str&#41;&#58;
    import time
    time&#46;sleep&#40;5&#41;
    print&#40;f&quot;Email sent to &#123;email&#125;&#58; &#123;message&#125;&quot;&#41;

&#64;app&#46;post&#40;&quot;&#47;send-email&quot;&#41;
async def send_email_endpoint&#40;
    email&#58; str&#44;
    background_tasks&#58; BackgroundTasks
&#41;&#58;
    background_tasks&#46;add_task&#40;send_email&#44; email&#44; &quot;Hello&quot;&#41;
    return &#123;&quot;message&quot;&#58; &quot;Email will be sent in background&quot;&#125;
\`\`\`

**Ограничения BackgroundTasks:**
- Задачи выполняются после отправки ответа
- Если задача падает, клиент не узнает
- Для надёжных задач используйте Celery/RQ

**Uvicorn и Gunicorn:**
Uvicorn — ASGI-сервер для запуска FastAPI приложений. Gunicorn — production-ready WSGI/ASGI сервер с управлением worker'ами.

\`\`\`bash
&#35; Только uvicorn &#40;для разработки&#41;
uvicorn main&#58;app &#45;&#45;host 0&#46;0&#46;0&#46;0 &#45;&#45;port 8000 &#45;&#45;workers 4

&#35; Gunicorn &#43; Uvicorn workers &#40;для production&#41;
gunicorn main&#58;app &#45;w 4 &#45;k uvicorn&#46;workers&#46;UvicornWorker &#45;&#45;bind 0&#46;0&#46;0&#46;0&#58;8000
\`\`\`

**Для собеседования:** WebSocket для real-time связи через websocket.accept() и receive/send. BackgroundTasks для фоновых задач после ответа. Uvicorn — ASGI сервер для разработки, Gunicorn + Uvicorn worker'ы для production.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-7`,
"title": `pydantic-settings, APIRouter, структура проекта.`,
"fullAnswer": `**pydantic-settings:**
Управление настройками через переменные окружения с валидацией типов.

\`\`\`python
from pydantic_settings import BaseSettings
from typing import Optional

class Settings&#40;BaseSettings&#41;&#58;
    APP_NAME&#58; str &#61; &quot;My FastAPI App&quot;
    DEBUG&#58; bool &#61; False
    DATABASE_URL&#58; str
    SECRET_KEY&#58; str
    REDIS_URL&#58; Optional&#91;str&#93; &#61; None
    
    class Config&#58;
        env_file &#61; &quot;&#46;env&quot;
        env_file_encoding &#61; &quot;utf-8&quot;

settings &#61; Settings&#40;&#41;
\`\`\`

**APIRouter:**
Модульная структура для разделения endpoint'ов.

\`\`\`python
&#35; routers&#47;users&#46;py
from fastapi import APIRouter&#44; Depends&#44; HTTPException
from sqlalchemy&#46;orm import Session

router &#61; APIRouter&#40;
    prefix&#61;&quot;&#47;users&quot;&#44;
    tags&#61;&#91;&quot;users&quot;&#93;&#44;
    responses&#61;&#123;404&#58; &#123;&quot;description&quot;&#58; &quot;Not found&quot;&#125;&#125;&#44;
&#41;

&#64;router&#46;get&#40;&quot;&#47;&quot;&#44; response_model&#61;list&#91;UserResponse&#93;&#41;
async def get_users&#40;skip&#58; int &#61; 0&#44; limit&#58; int &#61; 100&#44; db&#58; Session &#61; Depends&#40;get_db&#41;&#41;&#58;
    users &#61; db&#46;query&#40;User&#41;&#46;offset&#40;skip&#41;&#46;limit&#40;limit&#41;&#46;all&#40;&#41;
    return users
\`\`\`

**Подключение роутеров:**
\`\`\`python
&#35; main&#46;py
from fastapi import FastAPI
from routers import users&#44; items

app &#61; FastAPI&#40;&#41;

app&#46;include_router&#40;users&#46;router&#41;
app&#46;include_router&#40;items&#46;router&#44; prefix&#61;&quot;&#47;api&#47;v1&quot;&#41;
\`\`\`

**Структура проекта (Middle level):**
\`\`\`
project&#47;
&#9251;&#9251;&#9251; app&#47;
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; __init__&#46;py
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; main&#46;py              &#35; Точка входа
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; config&#46;py            &#35; Settings
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; models&#47;              &#35; SQLAlchemy модели
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; schemas&#47;             &#35; Pydantic схемы
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; routers&#47;             &#35; API роутеры
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; services&#47;            &#35; Бизнес-логика
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; repositories&#47;        &#35; Доступ к данным
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; dependencies&#47;        &#35; FastAPI зависимости
&#9251;&#9251;&#9251; &#9251;&#9251;&#9251; utils&#47;               &#35; Утилиты
&#9251;&#9251;&#9251; tests&#47;                   &#35; Тесты
&#9251;&#9251;&#9251; alembic&#47;                 &#35; Миграции БД
&#9251;&#9251;&#9251; &#46;env                     &#35; Переменные окружения
&#9251;&#9251;&#9251; requirements&#46;txt         &#35; Зависимости
\`\`\`

**Lifespan events:**
\`\`\`python
from contextlib import asynccontextmanager

&#64;asynccontextmanager
async def lifespan&#40;app&#58; FastAPI&#41;&#58;
    &#35; Startup
    async with engine&#46;begin&#40;&#41; as conn&#58;
        await conn&#46;run_sync&#40;Base&#46;metadata&#46;create_all&#41;
    yield
    &#35; Shutdown
    async with engine&#46;begin&#40;&#41; as conn&#58;
        await conn&#46;run_sync&#40;Base&#46;metadata&#46;drop_all&#41;

app &#61; FastAPI&#40;lifespan&#61;lifespan&#41;
\`\`\`

**Для собеседования:** pydantic-settings валидирует переменные окружения через BaseSettings. APIRouter модулизирует endpoint'ы с префиксами и тегами. Структура проекта: models, schemas, routers, services, repositories, dependencies. Lifespan для startup/shutdown событий.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `9-middle-общее-8`,
"title": `Request объект, заголовки, cookies, StreamingResponse, rate limiting, lifespan events.`,
"fullAnswer": `**Request объект:**
Доступ к сырым данным HTTP-запроса.

\`\`\`python
from fastapi import FastAPI&#44; Request

app &#61; FastAPI&#40;&#41;

&#64;app&#46;get&#40;&quot;&#47;request-info&quot;&#41;
async def request_info&#40;request&#58; Request&#41;&#58;
    return &#123;
        &quot;method&quot;&#58; request&#46;method&#44;
        &quot;url&quot;&#58; str&#40;request&#46;url&#41;&#44;
        &quot;headers&quot;&#58; dict&#40;request&#46;headers&#41;&#44;
        &quot;query_params&quot;&#58; dict&#40;request&#46;query_params&#41;&#44;
        &quot;client&quot;&#58; request&#46;client&#46;host if request&#46;client else None&#44;
        &quot;cookies&quot;&#58; dict&#40;request&#46;cookies&#41;&#44;
    &#125;
\`\`\`

**Заголовки и Cookies:**
\`\`\`python
from fastapi import Header&#44; Cookie&#44; Response

&#64;app&#46;get&#40;&quot;&#47;items&quot;&#41;
async def get_items&#40;
    user_agent&#58; str &#61; Header&#40;&#46;&#46;&#46;&#41;&#44;
    session_id&#58; str &#61; Cookie&#40;None&#41;
&#41;&#58;
    return &#123;&quot;ua&quot;&#58; user_agent&#44; &quot;session&quot;&#58; session_id&#125;

&#64;app&#46;post&#40;&quot;&#47;set-cookie&quot;&#41;
async def set_cookie&#40;response&#58; Response&#41;&#58;
    response&#46;set_cookie&#40;
        key&#61;&quot;session_id&quot;&#44;
        value&#61;&quot;abc123&quot;&#44;
        httponly&#61;True&#44;
        secure&#61;True&#44;
        samesite&#61;&quot;lax&quot;
    &#41;
    return &#123;&quot;message&quot;&#58; &quot;Cookie set&quot;&#125;
\`\`\`

**StreamingResponse:**
Потоковая передача данных клиенту.

\`\`\`python
from fastapi&#46;responses import StreamingResponse
import asyncio

async def generate_data&#40;&#41;&#58;
    for i in range&#40;10&#41;&#58;
        yield f&quot;data&#58; &#123;i&#125;

&quot;
        await asyncio&#46;sleep&#40;1&#41;

&#64;app&#46;get&#40;&quot;&#47;stream&quot;&#41;
async def stream_data&#40;&#41;&#58;
    return StreamingResponse&#40;
        generate_data&#40;&#41;&#44;
        media_type&#61;&quot;text&#47;event-stream&quot;&#44;
        headers&#61;&#123;&quot;Cache-Control&quot;&#58; &quot;no-cache&quot;&#125;
    &#41;
\`\`\`

**Rate Limiting:**
Используется библиотека &#96;slowapi&#96;.

\`\`\`python
from slowapi import Limiter
from slowapi&#46;util import get_remote_address

limiter &#61; Limiter&#40;key_func&#61;get_remote_address&#41;
app&#46;state&#46;limiter &#61; limiter

&#64;app&#46;get&#40;&quot;&#47;api&#47;data&quot;&#41;
&#64;limiter&#46;limit&#40;&quot;10&#47;minute&quot;&#41;
async def get_data&#40;request&#58; Request&#41;&#58;
    return &#123;&quot;data&quot;&#58; &quot;&#46;&#46;&#46;&quot;&#125;
\`\`\`

**Lifespan Events:**
Управление startup и shutdown событиями через asynccontextmanager (заменяет устаревшие &#96;&#64;app.on_event&#40;&quot;startup&quot;&#41;&#96;).

\`\`\`python
from contextlib import asynccontextmanager

&#64;asynccontextmanager
async def lifespan&#40;app&#58; FastAPI&#41;&#58;
    &#35; Startup
    print&#40;&quot;Starting up&#46;&#46;&#46;&quot;&#41;
    await connect_to_database&#40;&#41;
    yield
    &#35; Shutdown
    print&#40;&quot;Shutting down&#46;&#46;&#46;&quot;&#41;
    await database&#46;disconnect&#40;&#41;

app &#61; FastAPI&#40;lifespan&#61;lifespan&#41;
\`\`\`

**Middleware:**
\`\`\`python
&#64;app&#46;middleware&#40;&quot;http&quot;&#41;
async def add_process_time_header&#40;request&#58; Request&#44; call_next&#41;&#58;
    start_time &#61; time&#46;time&#40;&#41;
    response &#61; await call_next&#40;request&#41;
    process_time &#61; time&#46;time&#40;&#41; &#45; start_time
    response&#46;headers&#91;&quot;X-Process-Time&quot;&#93; &#61; str&#40;process_time&#41;
    return response
\`\`\`

**Для собеседования:** Request объект даёт доступ к method, url, headers, query_params, cookies. Заголовки через Header(), cookies через Cookie() и Response.set_cookie(). StreamingResponse для потоковой передачи. Rate limiting через slowapi. Lifespan events через asynccontextmanager для startup/shutdown.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
