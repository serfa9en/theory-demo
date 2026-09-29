import type { TopicQuestions } from '../../types/question'

export const topic14Questions: TopicQuestions = {
"id": 14,
"slug": `topic-14`,
"title": `Redis`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `14-junior-общее-1`,
"title": `Что такое Redis? Отличия от PostgreSQL. «In-memory».`,
"fullAnswer": `## Что такое Redis

Redis — высокопроизводительное key-value хранилище, которое держит рабочие данные преимущественно в памяти. В отличие от PostgreSQL, это не классическая реляционная БД с таблицами и JOIN.

**Ключевые моменты:**
- Redis используют для кэша, сессий, rate limiting, очередей и быстрых счётчиков.
- Он поддерживает persistence, но модель и гарантии отличаются от PostgreSQL.
- Доступ к данным идёт по ключам и структурам Redis.`,
"shortAnswer": `Что такое Redis Redis — высокопроизводительное key-value хранилище, которое держит рабочие данные преимущественно в памяти.  В отличие от PostgreSQL, это не классическая реляционная БД с таблицами и JOIN.`,
},
{
"id": `14-junior-общее-2`,
"title": `Команды: SET, GET, DEL, EXPIRE, TTL.`,
"fullAnswer": `## SET, GET, DEL, EXPIRE, TTL

\`SET\` записывает значение, \`GET\` читает строковое значение, \`DEL\` удаляет ключ, \`EXPIRE\` устанавливает время жизни, \`TTL\` показывает оставшееся время.

**Пример:**

\`\`\`text
SET session:42 abc EX 3600
GET session:42
TTL session:42
DEL session:42
\`\`\``,
"shortAnswer": `SET, GET, DEL, EXPIRE, TTL SET записывает значение, GET читает строковое значение, DEL удаляет ключ, EXPIRE устанавливает время жизни, TTL показывает оставшееся время.`,
},
{
"id": `14-junior-общее-3`,
"title": `Применение: кэш, сессии, очереди.`,
"fullAnswer": `## Redis: кэш, сессии и очереди

Для кэша Redis хранит часто читаемые данные с TTL, чтобы разгрузить основную БД. Для сессий — быстрое server-side состояние пользователя. Для очередей применяют Lists, Streams или специализированные библиотеки поверх Redis.

**Ключевые моменты:**
- Кэш должен иметь стратегию invalidation.
- Сессии требуют продуманной TTL и безопасности.
- Для надёжных очередей нужно учитывать retries, acknowledgements и повторную доставку.`,
"shortAnswer": `Redis: кэш, сессии и очереди Для кэша Redis хранит часто читаемые данные с TTL, чтобы разгрузить основную БД.  Для сессий — быстрое server-side состояние пользователя.`,
},
{
"id": `14-junior-общее-4`,
"title": `Типы данных: строки, хеши, списки, множества, sorted sets.`,
"fullAnswer": `## Типы данных Redis

Redis поддерживает Strings, Hashes, Lists, Sets и Sorted Sets. Они отличаются моделью данных и доступными атомарными операциями.

**Ключевые моменты:**
- String — строка/число/байты.
- Hash — набор полей объекта.
- List — упорядоченная последовательность.
- Set — уникальные элементы.
- Sorted Set — уникальные элементы с числовым score и сортировкой.`,
"shortAnswer": `Типы данных Redis Redis поддерживает Strings, Hashes, Lists, Sets и Sorted Sets.  Они отличаются моделью данных и доступными атомарными операциями.`,
},
{
"id": `14-junior-общее-5`,
"title": `Операции: INCR/DECR, HSET/HGET, LPUSH/RPUSH, SADD/SMEMBERS, ZADD/ZRANGE.`,
"fullAnswer": `## Базовые операции Redis

\`INCR/DECR\` атомарно меняют счётчик, \`HSET/HGET\` работают с Hash, \`LPUSH/RPUSH\` — со списками, \`SADD/SMEMBERS\` — с Set, \`ZADD/ZRANGE\` — с Sorted Set.

**Ключевые моменты:**
- Операции Redis над одним ключом атомарны.
- Выбирайте структуру по паттерну доступа.
- Не создавайте без необходимости огромные коллекции в одном ключе.`,
"shortAnswer": `Базовые операции Redis INCR/DECR атомарно меняют счётчик, HSET/HGET работают с Hash, LPUSH/RPUSH — со списками, SADD/SMEMBERS — с Set, ZADD/ZRANGE — с Sorted Set.  Ключевые моменты: Операции Redis над одним ключом атомарны.`,
},
{
"id": `14-junior-общее-6`,
"title": `PUBLISH/SUBSCRIBE, Redis CLI, KEYS vs SCAN, FLUSHDB/FLUSHALL, INFO.`,
"fullAnswer": `## Pub/Sub, CLI, KEYS, SCAN и INFO

Redis Pub/Sub рассылает сообщения активным подписчикам, но сам по себе не хранит историю доставки. \`redis-cli\` — консольный клиент. \`KEYS\` перебирает весь keyspace и может блокировать сервер; для production-перебора используют \`SCAN\`.

**Ключевые моменты:**
- \`INFO\` показывает состояние сервера.
- \`FLUSHDB\` очищает текущую БД, \`FLUSHALL\` — все БД: команды опасны.
- Для надёжной очереди вместо Pub/Sub часто используют Streams.`,
"shortAnswer": `Pub/Sub, CLI, KEYS, SCAN и INFO Redis Pub/Sub рассылает сообщения активным подписчикам, но сам по себе не хранит историю доставки.  redis-cli — консольный клиент.`,
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
"id": `14-middle-общее-1`,
"title": `Политики вытеснения памяти (eviction policies): LRU, LFU, random, ttl.`,
"fullAnswer": `## Redis eviction policies

При достижении \`maxmemory\` Redis действует согласно eviction policy. \`noeviction\` отказывает новым write-командам, а политики LRU/LFU/random/TTL удаляют ключи по выбранной стратегии.

**Ключевые моменты:**
- \`allkeys-lru\` — кандидаты из всех ключей по принципу least recently used.
- \`allkeys-lfu\` — least frequently used.
- \`volatile-*\` рассматривает ключи с TTL.
- Политику выбирают исходя из того, является Redis кэшем или источником критичных данных.`,
"shortAnswer": `Redis eviction policies При достижении maxmemory Redis действует согласно eviction policy.  noeviction отказывает новым write-командам, а политики LRU/LFU/random/TTL удаляют ключи по выбранной стратегии.`,
},
{
"id": `14-middle-общее-2`,
"title": `Персистентность: RDB vs AOF (плюсы и минусы).`,
"fullAnswer": `## RDB vs AOF

RDB периодически создаёт компактный snapshot набора данных. AOF журналирует операции записи и при старте воспроизводит их. Можно использовать один режим, оба или отключить persistence.

**Ключевые моменты:**
- RDB компактнее и удобен для backup, но между snapshots возможна большая потеря последних изменений.
- AOF обычно даёт меньший RPO при подходящей fsync-политике, но файл/запись дороже.
- Выбор зависит от допустимой потери данных и latency.`,
"shortAnswer": `RDB vs AOF RDB периодически создаёт компактный snapshot набора данных.  AOF журналирует операции записи и при старте воспроизводит их.`,
},
{
"id": `14-middle-общее-3`,
"title": `Redis Sentinel и Redis Cluster.`,
"fullAnswer": `## Redis Sentinel и Cluster

Sentinel обеспечивает мониторинг и автоматический failover primary/replica для не-шардированного Redis. Redis Cluster одновременно распределяет ключи между узлами и обеспечивает репликацию/failover.

**Ключевые моменты:**
- Sentinel сам данные не хранит.
- Cluster разбивает keyspace на 16384 hash slots.
- Multi-key операции в Cluster проще, если ключи находятся в одном slot (hash tags).`,
"shortAnswer": `Redis Sentinel и Cluster Sentinel обеспечивает мониторинг и автоматический failover primary/replica для не-шардированного Redis.  Redis Cluster одновременно распределяет ключи между узлами и обеспечивает репликацию/failover.`,
},
{
"id": `14-middle-общее-4`,
"title": `Шардирование в Redis: hash slots.`,
"fullAnswer": `## Hash slots в Redis Cluster

Redis Cluster делит keyspace на 16384 slots. Slot выбирается по CRC16 ключа modulo 16384 и назначается одному primary-узлу; при масштабировании slots переносятся между nodes.

**Ключевые моменты:**
- Hash tags \`{...}\` позволяют поместить связанные ключи в один slot.
- Клиент должен уметь обрабатывать MOVED/ASK redirects.
- Шардирование повышает ёмкость, но усложняет операции по нескольким ключам.`,
"shortAnswer": `Hash slots в Redis Cluster Redis Cluster делит keyspace на 16384 slots.  Slot выбирается по CRC16 ключа modulo 16384 и назначается одному primary-узлу; при масштабировании slots переносятся между nodes.`,
},
{
"id": `14-middle-общее-5`,
"title": `Distributed lock и Redlock.`,
"fullAnswer": `## Distributed lock и Redlock

Простейший корректный lock на одном Redis обычно берут командой \`SET key token NX PX ttl\`, а освобождают только если token всё ещё принадлежит клиенту. Redlock пытается получить lock на большинстве независимых Redis masters в ограниченное время.

**Ключевые моменты:**
- TTL защищает от вечной блокировки.
- Удалять lock простым \`DEL\` небезопасно: можно удалить чужой новый lock.
- Для задач с жёсткими consistency guarantees дополнительно рассматривают fencing tokens и свойства конкретной инфраструктуры.`,
"shortAnswer": `Distributed lock и Redlock Простейший корректный lock на одном Redis обычно берут командой SET key token NX PX ttl, а освобождают только если token всё ещё принадлежит клиенту.  Redlock пытается получить lock на большинстве независимых Redis masters в ограниченное время.`,
},
{
"id": `14-middle-общее-6`,
"title": `Redis Streams и consumer groups.`,
"fullAnswer": `## Redis Streams и consumer groups

Redis Stream — append-only структура сообщений с ID. Consumer group позволяет нескольким consumer распределять обработку сообщений, сохраняя информацию о доставленных, но ещё не подтверждённых записях.

**Ключевые моменты:**
- \`XADD\` добавляет сообщение, \`XREADGROUP\` читает в группе, \`XACK\` подтверждает обработку.
- Pending Entries List помогает находить зависшие сообщения.
- Streams подходят для очередей/event processing, но не полностью заменяют специализированный Kafka-подобный брокер во всех сценариях.`,
"shortAnswer": `Redis Streams и consumer groups Redis Stream — append-only структура сообщений с ID.  Consumer group позволяет нескольким consumer распределять обработку сообщений, сохраняя информацию о доставленных, но ещё не подтверждённых записях.`,
},
{
"id": `14-middle-общее-7`,
"title": `Транзакции (MULTI/EXEC) и Lua scripts.`,
"fullAnswer": `## MULTI/EXEC и Lua

\`MULTI\` начинает очередь команд транзакции Redis, \`EXEC\` выполняет её последовательно без interleaving других клиентов. Это не классическая SQL-транзакция с автоматическим rollback. Lua script выполняется атомарно относительно других команд.

**Ключевые моменты:**
- \`WATCH\` реализует optimistic locking.
- Ошибка отдельной команды не означает rollback уже выполненных команд EXEC.
- Lua полезен для атомарной read-modify-write логики, но долгий script блокирует event loop.`,
"shortAnswer": `MULTI/EXEC и Lua MULTI начинает очередь команд транзакции Redis, EXEC выполняет её последовательно без interleaving других клиентов.  Это не классическая SQL-транзакция с автоматическим rollback.`,
},
{
"id": `14-middle-общее-8`,
"title": `Оптимизация: pipeline, memory optimization, maxmemory.`,
"fullAnswer": `## Redis performance и memory

Pipelining отправляет несколько команд без ожидания ответа на каждую и сокращает network round trips. \`maxmemory\` ограничивает используемую память, а eviction policy определяет поведение при достижении лимита.

**Ключевые моменты:**
- Избегайте огромных ключей и коллекций (big keys).
- Выбирайте компактные структуры и TTL.
- Используйте \`SCAN\` вместо блокирующего \`KEYS\` в production.
- Измеряйте hit rate, latency, evictions и memory fragmentation.`,
"shortAnswer": `Redis performance и memory Pipelining отправляет несколько команд без ожидания ответа на каждую и сокращает network round trips.  maxmemory ограничивает используемую память, а eviction policy определяет поведение при достижении лимита.`,
},
{
"id": `14-middle-общее-9`,
"title": `Мониторинг: RedisInsight, Redis Modules (RedisJSON, RediSearch, RedisTimeSeries, RedisGraph).`,
"fullAnswer": `## Redis monitoring и modules

RedisInsight помогает исследовать данные, производительность и конфигурацию. Команды \`INFO\`, \`SLOWLOG\`, latency tools и системные метрики используются для мониторинга. Модули расширяют Redis специализированными структурами и поиском.

**Ключевые моменты:**
- Следите за memory, evictions, hit rate, connected clients, replication lag, command latency.
- Названия/доступность модулей зависят от используемой Redis distribution.`,
"shortAnswer": `Redis monitoring и modules RedisInsight помогает исследовать данные, производительность и конфигурацию.  Команды INFO, SLOWLOG, latency tools и системные метрики используются для мониторинга.`,
},
],
},
],
},
}
