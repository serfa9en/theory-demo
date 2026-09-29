import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = process.cwd()
const QUESTIONS_DIR = path.join(ROOT, 'src', 'data', 'questions')
const GENERATOR = path.join(ROOT, 'fill-all-answers.mjs')

const FULL_PLACEHOLDER = 'Подробный ответ пока не добавлен.'
const SHORT_PLACEHOLDER = 'Краткий ответ пока не добавлен.'

const QUESTION_RE =
  /(\{\s*"id":\s*`((?:\\`|[^`])*)`,\s*"title":\s*`((?:\\`|[^`])*)`,\s*"fullAnswer":\s*`)((?:\\`|[^`])*)(`,\s*"shortAnswer":\s*`)((?:\\`|[^`])*)(`,\s*\})/gs

const decode = (s) =>
  s.replace(/\\`/g, '`').replace(/\\\$\{/g, '${').replace(/\\\\/g, '\\')

const esc = (s) =>
  String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

const stripMd = (s) =>
  String(s)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim()

function shortFrom(full, title) {
  const text = stripMd(full)
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
  const answer = sentences.slice(0, 2).join(' ').trim()
  return (answer || title).slice(0, 650)
}

function md(title, summary, bullets = [], code = '') {
  const parts = [`## ${title}`, '', summary]
  if (bullets.length) {
    parts.push('', '**Ключевые моменты:**')
    for (const b of bullets) parts.push(`- ${b}`)
  }
  if (code) parts.push('', '**Пример:**', '', code)
  return parts.join('\n')
}

const A = {}

// topic-1: два fullAnswer были переставлены местами
A['1-middle-javascript-11'] = md(
  'Генераторы и итераторы',
  'Итератор — объект с методом `next()`, который возвращает `{ value, done }`. Итерируемый объект предоставляет `Symbol.iterator`. Генератор (`function*`) — удобный способ создать итератор: он приостанавливает выполнение на `yield` и продолжает с того же места при следующем `next()`.',
  [
    '`for...of` работает с итерируемыми объектами.',
    'Генератор одновременно является итератором и итерируемым объектом.',
    '`yield` возвращает очередное значение, а `return` завершает генератор.',
  ],
  '```js\nfunction* ids() {\n  yield 1\n  yield 2\n}\n\nconst it = ids()\nconsole.log(it.next()) // { value: 1, done: false }\nconsole.log(it.next()) // { value: 2, done: false }\nconsole.log(it.next()) // { value: undefined, done: true }\n```',
)

A['1-middle-javascript-12'] = md(
  'Map и Set',
  '`Map` хранит пары ключ-значение и допускает ключи любого типа. `Set` хранит только уникальные значения. В отличие от обычного объекта, Map не приводит ключи к строкам и имеет предсказуемый API для размера и перебора.',
  [
    '`Map`: `set`, `get`, `has`, `delete`, `size`.',
    '`Set`: `add`, `has`, `delete`, `size`.',
    'Обе коллекции сохраняют порядок вставки при итерации.',
    'Для сериализации в JSON их обычно преобразуют в массив/объект вручную.',
  ],
  '```js\nconst map = new Map([[1, "one"]])\nmap.set({ id: 1 }, "object key")\n\nconst set = new Set([1, 1, 2, 3])\nconsole.log([...set]) // [1, 2, 3]\n```',
)

// topic-4
A['4-middle-общее-11'] = md(
  'rootState, rootGetters и динамические модули Vuex',
  'В namespaced-модуле Vuex локальный getter/action по умолчанию работает со своим state/getters, а доступ к корневому дереву выполняется через `rootState` и `rootGetters`. Динамические модули подключаются во время работы приложения через `store.registerModule()` и удаляются через `store.unregisterModule()`.',
  [
    'Action получает `rootState` и `rootGetters` в context.',
    'Для dispatch/commit в корневое пространство из namespaced-модуля передают `{ root: true }`.',
    'Динамические модули полезны для lazy-loaded функциональности.',
    'При удалении модуля учитывайте его subscriptions и жизненный цикл.',
  ],
  '```js\nconst module = {\n  namespaced: true,\n  actions: {\n    save({ rootState, rootGetters, dispatch }) {\n      console.log(rootState.user)\n      console.log(rootGetters["auth/isAdmin"])\n      return dispatch("notifications/push", "saved", { root: true })\n    },\n  },\n}\n\nstore.registerModule("feature", module)\nstore.unregisterModule("feature")\n```',
)

// topic-12 SQL
A['12-junior-общее-1'] = md(
  'Реляционная БД: таблица, строка, столбец, PK и FK',
  'Реляционная БД хранит данные в таблицах. Строка — одна запись, столбец — одно свойство записи. Primary Key однозначно идентифицирует строку, Foreign Key связывает строку с записью другой таблицы.',
  ['PK должен быть уникальным и обычно не NULL.', 'FK поддерживает ссылочную целостность.', 'Связи между таблицами позволяют не дублировать данные.'],
)
A['12-junior-общее-2'] = md(
  'SELECT, INSERT, UPDATE, DELETE',
  '`SELECT` читает данные, `INSERT` добавляет строки, `UPDATE` изменяет существующие, `DELETE` удаляет.',
  ['Для `UPDATE` и `DELETE` особенно важно корректное `WHERE`.', 'INSERT может добавлять одну или несколько строк.', 'SELECT обычно комбинируется с фильтрацией, сортировкой и JOIN.'],
  '```sql\nSELECT id, name FROM users WHERE active = true;\nINSERT INTO users(name) VALUES (\'Ann\');\nUPDATE users SET active = false WHERE id = 10;\nDELETE FROM users WHERE id = 10;\n```',
)
A['12-junior-общее-3'] = md(
  'WHERE, ORDER BY, LIMIT, GROUP BY, HAVING',
  '`WHERE` фильтрует строки до группировки, `ORDER BY` сортирует, `LIMIT` ограничивает число строк, `GROUP BY` объединяет строки в группы, а `HAVING` фильтрует уже агрегированные группы.',
  ['WHERE применяется до GROUP BY.', 'HAVING обычно используют вместе с агрегатами.', 'Для стабильной пагинации сортировка должна быть детерминированной.'],
)
A['12-junior-общее-4'] = md(
  'JOIN и подзапросы',
  'JOIN объединяет строки таблиц по условию. INNER JOIN оставляет только совпадения, LEFT JOIN — все строки слева плюс совпадения справа, RIGHT JOIN — наоборот, FULL JOIN — строки обеих сторон.',
  ['JOIN обычно связывает PK и FK.', 'Подзапрос — SELECT внутри другого SQL-выражения.', 'Коррелированный подзапрос зависит от строки внешнего запроса и может быть дороже.'],
)
A['12-junior-общее-5'] = md(
  'Агрегатные функции',
  '`COUNT`, `SUM`, `AVG`, `MIN`, `MAX` вычисляют одно значение по набору строк. С `GROUP BY` они считают агрегаты отдельно для каждой группы.',
  ['`COUNT(*)` считает строки.', '`COUNT(column)` не считает NULL.', 'SUM/AVG применяются к числовым значениям.'],
)
A['12-junior-общее-6'] = md(
  'DISTINCT, UNION и NULL',
  '`DISTINCT` удаляет дубли строк из результата. `UNION` объединяет результаты совместимых SELECT и тоже удаляет дубли; `UNION ALL` сохраняет их. `NULL` означает отсутствие/неизвестность значения.',
  ['NULL проверяют через `IS NULL` / `IS NOT NULL`, а не `= NULL`.', 'Сравнения с NULL обычно дают UNKNOWN.', '`UNION ALL` обычно дешевле UNION, потому что не делает дедупликацию.'],
)

// topic-13 PostgreSQL/MySQL
A['13-junior-общее-1'] = md(
  'PostgreSQL и MySQL',
  'PostgreSQL и MySQL — популярные реляционные СУБД. PostgreSQL традиционно силён расширяемостью, сложными SQL-возможностями, типами и аналитическими запросами; MySQL широко используется в веб-приложениях и имеет развитую экосистему.',
  ['Обе поддерживают транзакции, индексы, репликацию и JSON.', 'Синтаксис и отдельные возможности отличаются.', 'Выбор зависит от нагрузки, команды, инфраструктуры и требуемых функций.'],
)
A['13-junior-общее-2'] = md(
  'SERIAL и AUTO_INCREMENT',
  '`SERIAL` в PostgreSQL — исторический псевдотип, создающий integer-столбец и sequence. В современном PostgreSQL предпочтительны identity columns. В MySQL `AUTO_INCREMENT` автоматически генерирует новое числовое значение.',
  ['Генерируемый ID всё равно должен иметь PK/UNIQUE constraint.', 'В PostgreSQL sequence — отдельный объект.', 'Для распределённых систем иногда выбирают UUID вместо автоинкремента.'],
)
A['13-junior-общее-3'] = md(
  'Основные типы данных',
  '`VARCHAR` хранит строку с ограничением длины, `TEXT` — текст без практического ограничения длины, `INTEGER` — целое число, `BOOLEAN` — true/false, `TIMESTAMP` — дату и время. PostgreSQL `JSONB` хранит JSON в разобранном бинарном формате.',
  ['Тип выбирают по смыслу данных, а не только по размеру.', 'Для денежных значений часто используют NUMERIC/DECIMAL.', 'JSONB удобен для полуструктурированных полей, но не заменяет нормальную схему во всех случаях.'],
)
A['13-junior-общее-4'] = md(
  'Backup и CLI',
  '`pg_dump` делает логический backup PostgreSQL, `mysqldump` — MySQL. `psql` и `mysql` — консольные клиенты для подключения и выполнения SQL.',
  ['Backup нужно регулярно проверять восстановлением.', 'Для больших систем могут применяться физические backup и PITR.', 'Не храните пароли в shell history.'],
)
A['13-junior-общее-5'] = md(
  'Индексы и constraints',
  'Индекс ускоряет чтение по определённым условиям, но требует места и замедляет запись. `UNIQUE` запрещает дубли, `CHECK` проверяет условие, `DEFAULT` задаёт значение по умолчанию.',
  ['Constraint защищает целостность данных на уровне БД.', 'Индекс стоит добавлять под реальные запросы.', 'UNIQUE обычно поддерживается уникальным индексом.'],
)
A['13-junior-общее-6'] = md(
  'ON DELETE CASCADE и ON UPDATE CASCADE',
  'Эти действия задаются для Foreign Key. `ON DELETE CASCADE` автоматически удаляет дочерние строки при удалении родителя, `ON UPDATE CASCADE` обновляет внешний ключ при изменении связанного ключа.',
  ['CASCADE удобен, но может удалить/изменить много данных.', 'Альтернативы: RESTRICT/NO ACTION, SET NULL, SET DEFAULT.', 'Поведение нужно выбирать по бизнес-инвариантам.'],
)

// topic-14 Redis
A['14-junior-общее-1'] = md(
  'Что такое Redis',
  'Redis — высокопроизводительное key-value хранилище, которое держит рабочие данные преимущественно в памяти. В отличие от PostgreSQL, это не классическая реляционная БД с таблицами и JOIN.',
  ['Redis используют для кэша, сессий, rate limiting, очередей и быстрых счётчиков.', 'Он поддерживает persistence, но модель и гарантии отличаются от PostgreSQL.', 'Доступ к данным идёт по ключам и структурам Redis.'],
)
A['14-junior-общее-2'] = md(
  'SET, GET, DEL, EXPIRE, TTL',
  '`SET` записывает значение, `GET` читает строковое значение, `DEL` удаляет ключ, `EXPIRE` устанавливает время жизни, `TTL` показывает оставшееся время.',
  [],
  '```text\nSET session:42 abc EX 3600\nGET session:42\nTTL session:42\nDEL session:42\n```',
)
A['14-junior-общее-3'] = md(
  'Redis: кэш, сессии и очереди',
  'Для кэша Redis хранит часто читаемые данные с TTL, чтобы разгрузить основную БД. Для сессий — быстрое server-side состояние пользователя. Для очередей применяют Lists, Streams или специализированные библиотеки поверх Redis.',
  ['Кэш должен иметь стратегию invalidation.', 'Сессии требуют продуманной TTL и безопасности.', 'Для надёжных очередей нужно учитывать retries, acknowledgements и повторную доставку.'],
)
A['14-junior-общее-4'] = md(
  'Типы данных Redis',
  'Redis поддерживает Strings, Hashes, Lists, Sets и Sorted Sets. Они отличаются моделью данных и доступными атомарными операциями.',
  ['String — строка/число/байты.', 'Hash — набор полей объекта.', 'List — упорядоченная последовательность.', 'Set — уникальные элементы.', 'Sorted Set — уникальные элементы с числовым score и сортировкой.'],
)
A['14-junior-общее-5'] = md(
  'Базовые операции Redis',
  '`INCR/DECR` атомарно меняют счётчик, `HSET/HGET` работают с Hash, `LPUSH/RPUSH` — со списками, `SADD/SMEMBERS` — с Set, `ZADD/ZRANGE` — с Sorted Set.',
  ['Операции Redis над одним ключом атомарны.', 'Выбирайте структуру по паттерну доступа.', 'Не создавайте без необходимости огромные коллекции в одном ключе.'],
)
A['14-junior-общее-6'] = md(
  'Pub/Sub, CLI, KEYS, SCAN и INFO',
  'Redis Pub/Sub рассылает сообщения активным подписчикам, но сам по себе не хранит историю доставки. `redis-cli` — консольный клиент. `KEYS` перебирает весь keyspace и может блокировать сервер; для production-перебора используют `SCAN`.',
  ['`INFO` показывает состояние сервера.', '`FLUSHDB` очищает текущую БД, `FLUSHALL` — все БД: команды опасны.', 'Для надёжной очереди вместо Pub/Sub часто используют Streams.'],
)

// topic-15 ClickHouse / Elasticsearch
A['15-junior-общее-1'] = md(
  'ClickHouse и колоночное хранение',
  'ClickHouse — аналитическая колоночная СУБД, оптимизированная для быстрых агрегирующих запросов по большим объёмам данных. Колоночное хранение читает только нужные столбцы и хорошо сжимается, а строковое удобнее для частых точечных CRUD-операций.',
  ['Типичные задачи: аналитика, логи, события, метрики.', 'ClickHouse не является прямой заменой OLTP-БД.', 'Производительность сильно зависит от ORDER BY и схемы данных.'],
)
A['15-junior-общее-2'] = md(
  'Elasticsearch и inverted index',
  'Elasticsearch — распределённый поисковый движок поверх Lucene. Для полнотекстового поиска он использует inverted index: для каждого терма хранится список документов, где этот терм встречается.',
  ['Текст обычно проходит анализатор и токенизацию.', 'Полнотекстовый поиск отличается от точного поиска по keyword.', 'Elasticsearch также поддерживает агрегации и фильтрацию.'],
)
A['15-junior-общее-3'] = md(
  'Document, index, mapping и Query DSL',
  'Document — JSON-документ. Index — логическая коллекция документов. Mapping описывает типы и правила индексирования полей. Query DSL — JSON-язык запросов Elasticsearch.',
  ['Неправильный mapping сложно исправлять без reindex.', 'text обычно используют для full-text, keyword — для точного совпадения/сортировки/агрегаций.', 'Query DSL разделяет query и filter-контексты.'],
)
A['15-junior-общее-4'] = md(
  'match, term, range и aggregations',
  '`match` выполняет полнотекстовый поиск с анализатором, `term` ищет точное индексированное значение, `range` задаёт диапазон. Aggregations строят статистику и группировки по найденным документам.',
  ['Не применяйте term к analyzed text, если ожидаете обычный поиск по словам.', 'Filter-контекст не считает score и хорошо кэшируется.', 'Агрегации могут быть ресурсоёмкими на высококардинальных полях.'],
)
A['15-junior-общее-5'] = md(
  'ELK: Elasticsearch, Logstash, Kibana, Beats',
  'Elasticsearch хранит и ищет данные, Logstash принимает/преобразует/маршрутизирует события, Kibana визуализирует данные и поиск, Beats — лёгкие агенты для доставки логов/метрик.',
  ['Современные пайплайны могут использовать ingest pipelines вместо части Logstash.', 'Нужно контролировать mappings, retention и объём индексов.', 'Не отправляйте secrets в логи.'],
)
A['15-junior-общее-6'] = md(
  'MergeTree, ReplicatedMergeTree, Distributed и Materialized View',
  'MergeTree — основное семейство таблиц ClickHouse. ReplicatedMergeTree добавляет репликацию. Distributed — логическая таблица для маршрутизации запросов по shards. Materialized View автоматически преобразует входящие данные в целевую таблицу; Dictionary даёт быстрый lookup справочников.',
  ['ORDER BY критичен для MergeTree.', 'Distributed сам по себе не хранит данные как обычная локальная таблица.', 'Materialized View полезен для предварительных агрегаций.'],
)

// topic-16 Architecture
A['16-junior-общее-1'] = md(
  'Клиент-сервер, API, REST API, JSON и endpoint',
  'Клиент отправляет запрос серверу, сервер обрабатывает его и возвращает ответ. API — контракт взаимодействия программ. REST API обычно моделирует ресурсы через HTTP. JSON — распространённый формат обмена данными. Endpoint — конкретная комбинация URL и операции API.',
  ['Например: `GET /users/42`.', 'Контракт включает методы, поля, status codes и ошибки.', 'REST обычно стремится к stateless-взаимодействию.'],
)
A['16-junior-общее-2'] = md(
  'Монолит и микросервисы',
  'Монолит разворачивается как одно приложение и проще в разработке, тестировании и транзакциях. Микросервисы делят систему на независимо разворачиваемые сервисы, но добавляют сетевое взаимодействие, распределённые данные и эксплуатационную сложность.',
  ['Монолит проще для небольшой команды и ранней стадии продукта.', 'Микросервисы дают независимое масштабирование и ownership.', 'Цена микросервисов — observability, CI/CD, contracts, retries и consistency.'],
)
A['16-junior-общее-3'] = md(
  'Синхронное и асинхронное взаимодействие',
  'При синхронном взаимодействии вызывающий ждёт ответ прямо сейчас, например HTTP request/response. При асинхронном отправитель публикует сообщение/задачу и не обязан ждать завершения обработки.',
  ['Синхронный вызов проще понимать, но связывает доступность сервисов.', 'Асинхронность повышает decoupling и устойчивость к пикам.', 'Асинхронные системы требуют обработки повторов, порядка и eventual consistency.'],
)
A['16-junior-общее-4'] = md(
  'Очереди, кэш и load balancer',
  'Очередь сообщений буферизует работу между producer и consumer. Кэш хранит часто используемые данные ближе к потребителю. Load balancer распределяет запросы между несколькими экземплярами сервиса.',
  ['Очередь сглаживает пики нагрузки.', 'Кэш снижает latency и нагрузку на источник данных.', 'Балансировщик поддерживает horizontal scaling и health checks.'],
)
A['16-junior-общее-5'] = md(
  'Вертикальное и горизонтальное масштабирование',
  'Вертикальное масштабирование увеличивает ресурсы одного узла: CPU, RAM, диск. Горизонтальное добавляет новые экземпляры/узлы и распределяет нагрузку между ними.',
  ['Vertical scaling проще, но ограничен размером машины.', 'Horizontal scaling повышает отказоустойчивость, но требует распределения состояния.', 'Stateless-сервисы обычно проще масштабировать горизонтально.'],
)
A['16-junior-общее-6'] = md(
  'API Gateway, Service Discovery и Load Balancing',
  'API Gateway — единая точка входа для клиентов, где можно делать routing, auth, rate limiting и агрегацию. Service Discovery помогает находить живые экземпляры сервисов. Load Balancer распределяет трафик между ними.',
  ['Gateway не должен превращаться в монолит бизнес-логики.', 'Discovery бывает client-side и server-side.', 'Health checks помогают исключать нездоровые instances.'],
)

// topic-17 Docker
A['17-junior-общее-1'] = md(
  'Docker, Image, Container и Dockerfile',
  'Docker упаковывает приложение и его зависимости в image и запускает его как изолированный container. Image — неизменяемый шаблон файловой системы и metadata. Container — запущенный экземпляр image. Dockerfile — текстовый рецепт сборки image.',
  ['Image состоит из слоёв.', 'Container использует namespaces/cgroups и разделяет kernel host.', 'Dockerfile должен быть воспроизводимым и минимальным.'],
  '```dockerfile\nFROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nCMD ["node", "server.js"]\n```',
)
A['17-junior-общее-2'] = md(
  'Основные команды Docker',
  '`docker build` собирает image, `docker run` создаёт и запускает container, `docker ps` показывает контейнеры, `docker stop` корректно останавливает, `docker rm` удаляет контейнер.',
  [],
  '```bash\ndocker build -t my-app .\ndocker run -d --name my-app -p 8080:3000 my-app\ndocker ps\ndocker stop my-app\ndocker rm my-app\n```',
)
A['17-junior-общее-3'] = md(
  'Docker Compose',
  'Docker Compose описывает многоконтейнерное приложение декларативно в compose-файле: сервисы, images/build, ports, volumes, networks, environment и зависимости.',
  ['Современная команда — `docker compose`.', 'Compose удобен для локальной разработки и простых окружений.', 'Сервисы внутри сети Compose доступны по имени service.'],
)
A['17-junior-общее-4'] = md(
  'Ports, volumes и networks',
  'Публикация порта связывает порт host с портом container, например `-p 8080:80`. Volume хранит данные вне writable layer контейнера. Docker network соединяет контейнеры и даёт DNS по именам.',
  ['Volume нужен для persistent data.', 'Порт не нужно публиковать для общения контейнеров внутри одной user-defined network.', 'Bind mount связывает контейнер с конкретным путём host.'],
)
A['17-junior-общее-5'] = md(
  'Основные инструкции Dockerfile',
  '`FROM` выбирает base image, `RUN` выполняет команду при сборке, `COPY` копирует файлы, `WORKDIR` задаёт каталог, `ENV` — runtime env, `ARG` — build arg, `CMD`/`ENTRYPOINT` задают команду запуска, `EXPOSE` документирует порт.',
  ['`USER` переключает пользователя.', '`LABEL` добавляет metadata.', '`VOLUME` объявляет mount point.', 'Количество слоёв и порядок COPY влияют на build cache.'],
)
A['17-junior-общее-6'] = md(
  'ADD vs COPY, CMD vs ENTRYPOINT',
  '`COPY` просто копирует файлы и обычно предпочтительнее. `ADD` имеет дополнительные возможности вроде распаковки локальных tar-архивов. `ENTRYPOINT` задаёт основную исполняемую команду, а `CMD` — команду/аргументы по умолчанию, которые проще переопределить.',
  ['Используйте COPY, если специальные возможности ADD не нужны.', 'Exec form (`["cmd","arg"]`) обычно лучше shell form.', 'CMD может задавать default arguments для ENTRYPOINT.'],
)

// topic-18 CI/CD
A['18-junior-общее-1'] = md(
  'CI и CD',
  'Continuous Integration — частое объединение изменений с автоматической сборкой и тестами. Continuous Delivery означает, что приложение всегда готово к выпуску, но production deploy может требовать ручного решения. Continuous Deployment автоматически доставляет прошедшие проверки изменения в production.',
  ['CI даёт быстрый feedback.', 'CD требует воспроизводимых builds и окружений.', 'Deployment и release можно разделять feature flags.'],
)
A['18-junior-общее-2'] = md(
  'Что такое pipeline',
  'Pipeline — автоматизированная последовательность стадий от изменения кода до проверенного артефакта и, при необходимости, деплоя.',
  ['Типичные шаги: checkout → install → lint → test → build → security checks → publish artifact → deploy.', 'Независимые jobs можно выполнять параллельно.', 'Каждый шаг должен завершаться понятным статусом и логами.'],
)
A['18-junior-общее-3'] = md(
  'Jenkins и GitHub Actions',
  'Jenkins — расширяемый CI/CD-сервер, который обычно разворачивает команда. GitHub Actions — CI/CD-платформа, встроенная в GitHub и описываемая workflow YAML-файлами.',
  ['Оба умеют jobs, agents/runners, secrets и artifacts.', 'Jenkins даёт больше самостоятельного контроля инфраструктуры.', 'GitHub Actions тесно интегрирован с GitHub events и permissions.'],
)
A['18-junior-общее-4'] = md(
  'Artifact, runner, workflow, job и step',
  'Artifact — результат сборки, который можно хранить и передавать между этапами. Runner/agent — машина, выполняющая job. Workflow/pipeline состоит из jobs, а job — из steps.',
  ['Artifact должен быть неизменяемым и версионированным.', 'Jobs могут выполняться на разных runners.', 'Steps одного job обычно разделяют workspace.'],
)
A['18-junior-общее-5'] = md(
  'Trigger, matrix, environment, secrets, cache и workspace',
  'Trigger запускает pipeline по событию или расписанию. Matrix создаёт несколько вариантов job, например разные версии Node. Environment описывает целевое окружение и его правила. Secrets хранят чувствительные значения, cache ускоряет повторные сборки, workspace содержит рабочие файлы job.',
  ['Secrets не должны попадать в логи.', 'Cache можно безопасно потерять — это только оптимизация.', 'Matrix полезна для проверки совместимости.'],
)
A['18-junior-общее-6'] = md(
  'Pipeline as Code',
  'Pipeline as Code означает, что CI/CD-конфигурация хранится рядом с кодом и проходит review/version control. Jenkins использует Jenkinsfile, GitHub Actions — YAML в `.github/workflows`.',
  ['Изменения pipeline видны в истории Git.', 'Конфигурацию можно переиспользовать через templates/shared libraries.', 'Привилегированные deploy jobs нужно защищать permissions и approvals.'],
)

// topic-19 Monitoring
A['19-junior-общее-1'] = md(
  'Зачем нужен мониторинг',
  'Мониторинг позволяет понимать состояние системы, замечать деградацию до массовых жалоб и проверять эффект изменений.',
  ['Мониторят availability, latency, error rate, throughput, CPU/RAM/disk, БД, очереди и бизнес-метрики.', 'Важно не только собирать данные, но и иметь actionable alerts.', 'Dashboard помогает видеть тренды и корреляции.'],
)
A['19-junior-общее-2'] = md(
  'Логирование и уровни',
  'DEBUG — подробная диагностика, INFO — нормальные значимые события, WARN — потенциальная проблема, ERROR — ошибка операции/компонента.',
  ['Production logs лучше делать структурированными.', 'Не логируйте secrets и лишние персональные данные.', 'Уровень должен отражать действие, которое требуется оператору.'],
)
A['19-junior-общее-3'] = md(
  'Grafana, Zabbix, metrics, alerts и dashboards',
  'Grafana визуализирует данные из источников вроде Prometheus, Loki и БД. Zabbix — система инфраструктурного мониторинга. Metric — числовой показатель во времени, alert — условие уведомления, dashboard — визуальное представление показателей.',
  ['Dashboard не заменяет alerts.', 'Alert должен иметь owner/runbook.', 'Метрики выбирают исходя из пользовательского и технического риска.'],
)
A['19-junior-общее-4'] = md(
  'Prometheus: time series, metric name и labels',
  'Prometheus хранит time series: значения метрики с timestamp. Серия определяется именем метрики и набором labels.',
  ['Например `http_requests_total{method="GET",status="200"}`.', 'Labels позволяют фильтровать и группировать.', 'Высокая cardinality labels может сильно увеличить стоимость хранения.'],
)
A['19-junior-общее-5'] = md(
  'Counter, Gauge, Histogram и Summary',
  'Counter только растёт и подходит для количества событий. Gauge может расти и уменьшаться. Histogram распределяет наблюдения по buckets и позволяет агрегировать percentiles на сервере. Summary считает quantiles на стороне клиента.',
  ['Для latency в распределённой системе часто предпочитают Histogram.', 'Counter анализируют через rate/increase.', 'Тип метрики выбирают по смыслу значения.'],
)
A['19-junior-общее-6'] = md(
  'PromQL, Alertmanager и exporters',
  'PromQL — язык запросов Prometheus. Exporter предоставляет метрики системы, которая сама не умеет отдавать Prometheus-format. Alertmanager принимает alerts и занимается группировкой, маршрутизацией и silencing.',
  ['Prometheus сам вычисляет alert rules.', 'Alertmanager не хранит временные ряды.', 'Экспортеры существуют для Node, БД и множества внешних систем.'],
)

// topic-20 Git
A['20-junior-общее-1'] = md(
  'Git, GitHub и repository',
  'Git — распределённая система контроля версий. Repository содержит историю commits, branches, tags и рабочие файлы. GitHub — сервис хостинга Git-репозиториев с Pull Requests, Issues, Actions и управлением доступом.',
  ['Git работает локально без GitHub.', 'Remote связывает локальный repository с сервером.', 'Commit — снимок изменений с метаданными.'],
)
A['20-junior-общее-2'] = md(
  'init, clone, add, commit, status, log',
  '`git init` создаёт репозиторий, `clone` копирует существующий, `add` помещает изменения в staging area, `commit` фиксирует staged snapshot, `status` показывает состояние, `log` — историю.',
  [],
  '```bash\ngit init\ngit add .\ngit commit -m "feat: add search"\ngit status\ngit log --oneline\n```',
)
A['20-junior-общее-3'] = md(
  'Ветки, push, pull и fetch',
  'Branch — подвижный указатель на commit. `push` отправляет commits на remote. `fetch` скачивает новые refs без изменения текущей ветки. `pull` обычно делает fetch и затем merge/rebase в текущую ветку.',
  ['Ветку создают через `git switch -c feature`.', 'Перед push полезно синхронизировать удалённую историю.', 'Поведение pull стоит настроить явно: merge или rebase.'],
)
A['20-junior-общее-4'] = md(
  '.gitignore, stash и merge conflict',
  '`.gitignore` исключает неотслеживаемые файлы по шаблонам. `git stash` временно сохраняет незакоммиченные изменения. Merge conflict возникает, когда Git не может автоматически объединить конкурирующие изменения.',
  ['После ручного разрешения конфликтов файл нужно добавить и продолжить merge/rebase.', 'Секрет, уже попавший в Git history, .gitignore не удалит.', '`stash pop` применяет stash и при успехе удаляет его.'],
)
A['20-junior-общее-5'] = md(
  'Pull Request / Merge Request',
  'PR/MR — запрос на объединение изменений одной ветки в другую с review, обсуждением и автоматическими проверками.',
  ['Обычно содержит описание, связанные задачи и способ тестирования.', 'CI должен проверять код до merge.', 'Небольшие сфокусированные PR проще ревьюить.'],
)
A['20-junior-общее-6'] = md(
  'checkout, switch, restore, reset и revert',
  '`switch` предназначен для переключения веток, `restore` — для восстановления файлов. Старый `checkout` умеет оба действия. `reset` перемещает HEAD/индекс и может переписывать локальную историю, `revert` создаёт новый commit, отменяющий выбранный commit.',
  ['Для общей опубликованной истории безопаснее revert.', '`reset --hard` удаляет незакоммиченные изменения.', 'Перед потенциально разрушительной командой проверьте status/reflog.'],
)

// topic-21 Code review
A['21-junior-общее-1'] = md(
  'Что такое code review',
  'Code review — проверка изменений другим разработчиком до merge. Цель — найти дефекты, проверить требования и архитектуру, распространить знания и поддерживать единые практики команды.',
  ['Review не заменяет тесты и автоматические анализаторы.', 'Комментарий должен объяснять риск или причину.', 'Проверяется не только style, но и correctness, security и maintainability.'],
)
A['21-junior-общее-2'] = md(
  'Commit messages, readability, naming и comments',
  'Хороший код читается через структуру и имена. Commit message должен кратко описывать намерение изменения. Имена должны отражать смысл, а комментарии — объяснять причины и нетривиальные ограничения, а не повторять код.',
  ['Избегайте слишком общих имён вроде data/tmp без контекста.', 'Небольшие commits упрощают review и rollback.', 'Устаревший комментарий хуже отсутствующего.'],
)
A['21-junior-общее-3'] = md(
  'DRY, KISS и SOLID',
  'DRY уменьшает дублирование знания, KISS предпочитает простое достаточное решение, SOLID — набор принципов проектирования OO-кода для управляемых зависимостей и изменений.',
  ['Не абстрагируйте код только ради формального DRY.', 'Простота важнее количества паттернов.', 'SOLID — эвристики, а не обязательные законы для каждой функции.'],
)
A['21-junior-общее-4'] = md(
  'Code style, linting, formatting и code smells',
  'Code style — договорённости о структуре кода. Linter ищет потенциальные ошибки и нарушения правил, formatter автоматически приводит оформление к единому виду. Code smell — признак возможной проблемы дизайна, который требует контекста.',
  ['Механические правила лучше автоматизировать.', 'Formatter снижает споры о пробелах и переносах.', 'Code smell не всегда означает bug.'],
)
A['21-junior-общее-5'] = md(
  'Technical debt и refactoring',
  'Technical debt — накопленная стоимость упрощённых/устаревших решений, которая замедляет будущие изменения. Refactoring улучшает внутреннюю структуру кода без изменения наблюдаемого поведения.',
  ['Долг полезно фиксировать и приоритизировать по риску.', 'Refactoring должен поддерживаться тестами.', 'Не смешивайте огромный refactor с несвязанной feature без необходимости.'],
)
A['21-junior-общее-6'] = md(
  'Pair/Mob programming, ownership, CODEOWNERS и approvals',
  'Pair programming — два разработчика работают вместе, mob programming — группа над одной задачей. Code ownership определяет ответственность за области системы. CODEOWNERS автоматически назначает reviewers для путей, approval rules требуют нужного числа/типа согласований.',
  ['Ownership не должен превращаться в запрет другим улучшать код.', 'Pair/mob полезны для сложных задач и обмена знаниями.', 'Critical areas могут требовать обязательного review владельца.'],
)

// topic-22 Networks
A['22-junior-общее-1'] = md(
  'IP-адрес, порт, DNS и localhost',
  'IP-адрес идентифицирует сетевой интерфейс/узел в IP-сети. Порт идентифицирует конкретный сетевой сервис на хосте. DNS преобразует доменные имена в IP и другие записи. `localhost` обычно указывает на loopback самого компьютера.',
  ['IPv4 loopback обычно 127.0.0.1, IPv6 — ::1.', 'Порт — число 0–65535.', 'DNS может возвращать несколько адресов и кэшируется.'],
)
A['22-junior-общее-2'] = md(
  'Клиент, сервер, протокол, TCP/IP и OSI',
  'Клиент инициирует взаимодействие, сервер принимает запросы и предоставляет сервис. Протокол задаёт правила обмена. TCP/IP — практический стек Интернета; OSI — концептуальная семиуровневая модель.',
  ['Application: HTTP/DNS и др.', 'Transport: TCP/UDP.', 'Internet/Network: IP.', 'Link: Ethernet/Wi‑Fi.'],
)
A['22-junior-общее-3'] = md(
  'TCP, UDP, IPv4 и IPv6',
  'TCP — соединительный надёжный поток с порядком и retransmission. UDP — дейтаграммы без гарантии доставки/порядка, но с меньшим overhead. IPv4 использует 32-битные адреса, IPv6 — 128-битные.',
  ['UDP применяют там, где приложение само управляет потерями/задержкой.', 'IPv6 имеет намного больше адресное пространство.', 'HTTP/3 использует QUIC поверх UDP.'],
)
A['22-junior-общее-4'] = md(
  'Subnet mask, gateway, router, switch и firewall',
  'Subnet mask/prefix определяет локальную сеть. Default gateway — маршрутизатор для адресов вне локальной подсети. Router пересылает IP-пакеты между сетями, switch соединяет устройства внутри L2-сети, firewall фильтрует трафик по правилам.',
  ['CIDR `/24` соответствует 24 битам сетевой части.', 'Switch обычно принимает решения по MAC, router — по IP routes.', 'Firewall может быть host-based или сетевым.'],
)
A['22-junior-общее-5'] = md(
  'NAT, VPN, proxy, CDN и HTTP',
  'NAT преобразует сетевые адреса/порты между сетями. VPN создаёт защищённый туннель. Proxy принимает трафик от имени клиента или сервера. CDN размещает кэш/edge-сервисы ближе к пользователям. HTTP — прикладной протокол request/response.',
  ['Reverse proxy стоит перед серверами.', 'CDN уменьшает latency и нагрузку на origin.', 'VPN не делает приложение автоматически безопасным на прикладном уровне.'],
)

// topic-23 HTTP
A['23-junior-общее-1'] = md(
  'HTTP request и response',
  'HTTP-запрос содержит method, target URL/path, headers и иногда body. Ответ содержит status code, headers и иногда body.',
  ['HTTP/1.1 передаёт start-line + headers + body.', 'Headers описывают metadata и поведение.', 'Body может содержать JSON, HTML, файл и другие форматы.'],
)
A['23-junior-общее-2'] = md(
  'HTTP methods',
  '`GET` читает ресурс, `POST` обычно создаёт/запускает операцию, `PUT` заменяет ресурс, `PATCH` частично изменяет, `DELETE` удаляет, `HEAD` похож на GET без body, `OPTIONS` сообщает доступные возможности/используется CORS preflight.',
  ['GET, HEAD, OPTIONS считаются safe.', 'PUT и DELETE по смыслу идемпотентны.', 'Реальный API должен документировать семантику каждого endpoint.'],
)
A['23-junior-общее-3'] = md(
  'Группы HTTP status codes',
  '1xx — информационные, 2xx — успешные, 3xx — перенаправления/кэш, 4xx — проблема в запросе/доступе со стороны клиента, 5xx — ошибка сервера при обработке.',
  ['Код должен отражать фактический результат.', 'Не возвращайте 200 для любой ошибки только ради удобства клиента.', 'Некоторые 3xx требуют Location header.'],
)
A['23-junior-общее-4'] = md(
  'Частые HTTP status codes',
  '`200 OK` — успешный ответ, `201 Created` — создан ресурс, `204 No Content` — успех без body, `400 Bad Request` — некорректный запрос, `401 Unauthorized` — требуется/не прошла аутентификация, `403 Forbidden` — доступ запрещён, `404 Not Found` — ресурс не найден, `500 Internal Server Error` — внутренняя ошибка.',
  ['При 201 полезно вернуть Location созданного ресурса.', '401 и 403 имеют разный смысл.', '500 не должен раскрывать stack trace клиенту.'],
)
A['23-junior-общее-5'] = md(
  'URL и HTTP headers',
  'URL описывает адрес ресурса: scheme, host, port, path, query и fragment. `Content-Type` описывает формат отправляемого body, `Accept` — предпочитаемый формат ответа, `Authorization` передаёт учётные данные/токен по выбранной схеме.',
  ['Fragment не отправляется HTTP-серверу.', 'Query используется для параметров ресурса/поиска.', 'Authorization нужно передавать только по HTTPS.'],
)
A['23-junior-общее-6'] = md(
  'Cookie, LocalStorage, SessionStorage и session',
  'Cookie хранится в браузере и автоматически может отправляться серверу для подходящего domain/path. LocalStorage хранит строки без автоматической отправки и переживает закрытие вкладки. SessionStorage привязан к вкладке/сессии страницы. Серверная session — состояние на сервере, обычно связанное с клиентом через session id cookie.',
  ['HttpOnly cookie недоступна JavaScript.', 'LocalStorage удобен, но доступен JS и уязвим при XSS.', 'Чувствительные auth-сценарии требуют продуманной модели CSRF/XSS.'],
)

function regenerateBrokenBase() {
  // Если пользователь ещё не запускал предыдущий repair-скрипт,
  // сначала очищаем массово записанные Django-ответы в topic-11..23
  // и даём штатному генератору восстановить специализированные middle-ответы.
  let reset = 0

  for (let topicId = 11; topicId <= 23; topicId++) {
    const file = path.join(QUESTIONS_DIR, `topic-${topicId}.ts`)
    const original = fs.readFileSync(file, 'utf8')
    const updated = original.replace(
      QUESTION_RE,
      (_m, prefix, id, rawTitle, rawFull, mid, rawShort, suffix) => {
        const full = decode(rawFull)
        const short = decode(rawShort)
        const isDjango = /^\s*(?:\*\*)?Django\b/i.test(full)

        if (!isDjango) return _m

        reset++
        return `${prefix}${esc(FULL_PLACEHOLDER)}${mid}${esc(SHORT_PLACEHOLDER)}${suffix}`
      },
    )
    fs.writeFileSync(file, updated, 'utf8')
  }

  if (reset && fs.existsSync(GENERATOR)) {
    const r = spawnSync(process.execPath, [GENERATOR], { cwd: ROOT, stdio: 'inherit' })
    if (r.status !== 0) throw new Error(`fill-all-answers.mjs failed: ${r.status}`)
  }

  console.log(`Base repair: reset ${reset} Django answers`)
}

function patchExplicitAnswers() {
  let patched = 0
  const missingIds = new Set(Object.keys(A))

  for (let topicId = 1; topicId <= 23; topicId++) {
    const file = path.join(QUESTIONS_DIR, `topic-${topicId}.ts`)
    const original = fs.readFileSync(file, 'utf8')
    const backup = `${file}.before-semantic-fix.bak`
    if (!fs.existsSync(backup)) fs.writeFileSync(backup, original, 'utf8')

    const updated = original.replace(
      QUESTION_RE,
      (_m, prefix, rawId, rawTitle, rawFull, mid, rawShort, suffix) => {
        const id = decode(rawId)
        const title = decode(rawTitle)

        if (!A[id]) return _m

        const full = A[id]
        const short = shortFrom(full, title)
        missingIds.delete(id)
        patched++

        return `${prefix}${esc(full)}${mid}${esc(short)}${suffix}`
      },
    )

    fs.writeFileSync(file, updated, 'utf8')
  }

  if (missingIds.size) {
    throw new Error(`Не найдены question ids: ${[...missingIds].join(', ')}`)
  }

  console.log(`Semantic fixes applied: ${patched}`)
}

function validate() {
  const problems = []
  let checked = 0

  for (let topicId = 1; topicId <= 23; topicId++) {
    const file = path.join(QUESTIONS_DIR, `topic-${topicId}.ts`)
    const content = fs.readFileSync(file, 'utf8')

    for (const m of content.matchAll(QUESTION_RE)) {
      const id = decode(m[2])
      const title = decode(m[3])
      const full = decode(m[4]).trim()
      const short = decode(m[6]).trim()
      checked++

      if (!full || full === FULL_PLACEHOLDER) problems.push(`${id}: empty fullAnswer`)
      if (!short || short === SHORT_PLACEHOLDER) problems.push(`${id}: empty shortAnswer`)
      if (topicId >= 11 && /^\s*(?:\*\*)?Django\b/i.test(full)) {
        problems.push(`${id}: Django answer remains`)
      }

      if (A[id]) {
        const expected = A[id]
        if (full !== expected) problems.push(`${id}: explicit semantic fix was not applied`)
      }
    }
  }

  if (problems.length) {
    console.error('\nValidation errors:')
    for (const p of problems) console.error(`- ${p}`)
    process.exitCode = 1
    return
  }

  console.log(`✅ Validation passed: ${checked} questions checked, ${Object.keys(A).length} semantic mismatches fixed.`)
}

regenerateBrokenBase()
patchExplicitAnswers()
validate()
