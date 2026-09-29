import type { TopicQuestions } from '../../types/question'

export const topic13Questions: TopicQuestions = {
"id": 13,
"slug": `topic-13`,
"title": `PostgreSQL / MySQL`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `13-junior-общее-1`,
"title": `Отличия PostgreSQL от MySQL.`,
"fullAnswer": `## PostgreSQL и MySQL

PostgreSQL и MySQL — популярные реляционные СУБД. PostgreSQL традиционно силён расширяемостью, сложными SQL-возможностями, типами и аналитическими запросами; MySQL широко используется в веб-приложениях и имеет развитую экосистему.

**Ключевые моменты:**
- Обе поддерживают транзакции, индексы, репликацию и JSON.
- Синтаксис и отдельные возможности отличаются.
- Выбор зависит от нагрузки, команды, инфраструктуры и требуемых функций.`,
"shortAnswer": `PostgreSQL и MySQL PostgreSQL и MySQL — популярные реляционные СУБД.  PostgreSQL традиционно силён расширяемостью, сложными SQL-возможностями, типами и аналитическими запросами; MySQL широко используется в веб-приложениях и имеет развитую экосистему.`,
},
{
"id": `13-junior-общее-2`,
"title": `SERIAL / AUTO_INCREMENT.`,
"fullAnswer": `## SERIAL и AUTO_INCREMENT

\`SERIAL\` в PostgreSQL — исторический псевдотип, создающий integer-столбец и sequence. В современном PostgreSQL предпочтительны identity columns. В MySQL \`AUTO_INCREMENT\` автоматически генерирует новое числовое значение.

**Ключевые моменты:**
- Генерируемый ID всё равно должен иметь PK/UNIQUE constraint.
- В PostgreSQL sequence — отдельный объект.
- Для распределённых систем иногда выбирают UUID вместо автоинкремента.`,
"shortAnswer": `SERIAL и AUTO_INCREMENT SERIAL в PostgreSQL — исторический псевдотип, создающий integer-столбец и sequence.  В современном PostgreSQL предпочтительны identity columns.`,
},
{
"id": `13-junior-общее-3`,
"title": `Типы данных: VARCHAR, TEXT, INTEGER, BOOLEAN, TIMESTAMP, JSONB.`,
"fullAnswer": `## Основные типы данных

\`VARCHAR\` хранит строку с ограничением длины, \`TEXT\` — текст без практического ограничения длины, \`INTEGER\` — целое число, \`BOOLEAN\` — true/false, \`TIMESTAMP\` — дату и время. PostgreSQL \`JSONB\` хранит JSON в разобранном бинарном формате.

**Ключевые моменты:**
- Тип выбирают по смыслу данных, а не только по размеру.
- Для денежных значений часто используют NUMERIC/DECIMAL.
- JSONB удобен для полуструктурированных полей, но не заменяет нормальную схему во всех случаях.`,
"shortAnswer": `Основные типы данных VARCHAR хранит строку с ограничением длины, TEXT — текст без практического ограничения длины, INTEGER — целое число, BOOLEAN — true/false, TIMESTAMP — дату и время.  PostgreSQL JSONB хранит JSON в разобранном бинарном формате.`,
},
{
"id": `13-junior-общее-4`,
"title": `Бэкапы: pg_dump, mysqldump. CLI: psql / mysql.`,
"fullAnswer": `## Backup и CLI

\`pg_dump\` делает логический backup PostgreSQL, \`mysqldump\` — MySQL. \`psql\` и \`mysql\` — консольные клиенты для подключения и выполнения SQL.

**Ключевые моменты:**
- Backup нужно регулярно проверять восстановлением.
- Для больших систем могут применяться физические backup и PITR.
- Не храните пароли в shell history.`,
"shortAnswer": `Backup и CLI pg_dump делает логический backup PostgreSQL, mysqldump — MySQL.  psql и mysql — консольные клиенты для подключения и выполнения SQL.`,
},
{
"id": `13-junior-общее-5`,
"title": `Создание индексов, UNIQUE, CHECK, DEFAULT.`,
"fullAnswer": `## Индексы и constraints

Индекс ускоряет чтение по определённым условиям, но требует места и замедляет запись. \`UNIQUE\` запрещает дубли, \`CHECK\` проверяет условие, \`DEFAULT\` задаёт значение по умолчанию.

**Ключевые моменты:**
- Constraint защищает целостность данных на уровне БД.
- Индекс стоит добавлять под реальные запросы.
- UNIQUE обычно поддерживается уникальным индексом.`,
"shortAnswer": `Индексы и constraints Индекс ускоряет чтение по определённым условиям, но требует места и замедляет запись.  UNIQUE запрещает дубли, CHECK проверяет условие, DEFAULT задаёт значение по умолчанию.`,
},
{
"id": `13-junior-общее-6`,
"title": `ON DELETE CASCADE, ON UPDATE CASCADE.`,
"fullAnswer": `## ON DELETE CASCADE и ON UPDATE CASCADE

Эти действия задаются для Foreign Key. \`ON DELETE CASCADE\` автоматически удаляет дочерние строки при удалении родителя, \`ON UPDATE CASCADE\` обновляет внешний ключ при изменении связанного ключа.

**Ключевые моменты:**
- CASCADE удобен, но может удалить/изменить много данных.
- Альтернативы: RESTRICT/NO ACTION, SET NULL, SET DEFAULT.
- Поведение нужно выбирать по бизнес-инвариантам.`,
"shortAnswer": `ON DELETE CASCADE и ON UPDATE CASCADE Эти действия задаются для Foreign Key.  ON DELETE CASCADE автоматически удаляет дочерние строки при удалении родителя, ON UPDATE CASCADE обновляет внешний ключ при изменении связанного ключа.`,
},
{
"id": `13-junior-общее-7`,
"title": `Пользователи, права: GRANT, REVOKE.`,
"fullAnswer": `## Пользователи и права

\`GRANT\` выдаёт привилегии, а \`REVOKE\` отзывает их. В PostgreSQL пользователи и группы представлены ролями; права можно выдавать на database, schema, table, sequence и другие объекты.

**Ключевые моменты:**
- Следуйте least privilege.
- Удобно выдавать права групповой роли, а пользователям — membership.
- Не используйте superuser для приложения.

**Пример:**

\`\`\`sql
GRANT SELECT, INSERT ON TABLE orders TO app_role;
REVOKE DELETE ON TABLE orders FROM app_role;
\`\`\``,
"shortAnswer": `Пользователи и права GRANT выдаёт привилегии, а REVOKE отзывает их.  В PostgreSQL пользователи и группы представлены ролями; права можно выдавать на database, schema, table, sequence и другие объекты.`,
},
{
"id": `13-junior-общее-8`,
"title": `Schema, tablespace, sequence, materialized view, enum.`,
"fullAnswer": `## Schema, tablespace, sequence, materialized view, enum

Schema — namespace объектов внутри БД; tablespace определяет физическое размещение объектов; sequence генерирует числовую последовательность; materialized view хранит результат запроса; enum задаёт ограниченный набор значений.

**Ключевые моменты:**
- Schema помогает разделять объекты и права.
- Sequence часто используется для идентификаторов.
- Materialized view нужно refresh-ить.
- Enum удобен для стабильных наборов, но изменение модели требует миграций.`,
"shortAnswer": `Schema, tablespace, sequence, materialized view, enum Schema — namespace объектов внутри БД; tablespace определяет физическое размещение объектов; sequence генерирует числовую последовательность; materialized view хранит результат запроса; enum задаёт ограниченный набор значений.  Ключевые моменты: Schema помогает разделять объекты и права.`,
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
"id": `13-middle-общее-1`,
"title": `Индексы в PostgreSQL: B-Tree, Hash, GiN, GiST. Когда какой применять?`,
"fullAnswer": `## Типы индексов PostgreSQL

B-tree — универсальный индекс для равенства, диапазонов и сортировки. Hash ориентирован на равенство. GIN хорошо подходит для многозначных данных (arrays, JSONB, full-text). GiST — обобщённая структура для геоданных, ranges и других операторных классов.

**Ключевые моменты:**
- Выбирайте тип по операциям, а не только по типу столбца.
- GIN обычно дороже при записи, но силён при contains/search.
- Проверяйте конкретный operator class.`,
"shortAnswer": `Типы индексов PostgreSQL B-tree — универсальный индекс для равенства, диапазонов и сортировки.  Hash ориентирован на равенство.`,
},
{
"id": `13-middle-общее-2`,
"title": `Partial index, composite index, covering index, index-only scan.`,
"fullAnswer": `## Partial, composite и covering indexes

Partial index индексирует только строки, удовлетворяющие условию. Composite index содержит несколько столбцов. Covering index включает все данные, необходимые типичному запросу, и может позволить index-only scan.

**Ключевые моменты:**
- Порядок столбцов composite index критичен.
- Partial index полезен для небольшой «активной» части таблицы.
- \`INCLUDE\` позволяет добавить столбцы в PostgreSQL без включения их в search key.`,
"shortAnswer": `Partial, composite и covering indexes Partial index индексирует только строки, удовлетворяющие условию.  Composite index содержит несколько столбцов.`,
},
{
"id": `13-middle-общее-3`,
"title": `CONCURRENTLY при создании индекса.`,
"fullAnswer": `## CREATE INDEX CONCURRENTLY

\`CREATE INDEX CONCURRENTLY\` создаёт индекс в PostgreSQL с существенно меньшей блокировкой обычных операций записи, поэтому подходит для production-таблиц.

**Ключевые моменты:**
- Операция обычно дольше и выполняет несколько проходов.
- Нельзя запускать внутри обычного transaction block.
- При ошибке может остаться INVALID index, который нужно удалить/пересоздать.`,
"shortAnswer": `CREATE INDEX CONCURRENTLY CREATE INDEX CONCURRENTLY создаёт индекс в PostgreSQL с существенно меньшей блокировкой обычных операций записи, поэтому подходит для production-таблиц.  Ключевые моменты: Операция обычно дольше и выполняет несколько проходов.`,
},
{
"id": `13-middle-общее-4`,
"title": `VACUUM, AUTOVACUUM, dead tuples, table bloat.`,
"fullAnswer": `## VACUUM и autovacuum

Из-за MVCC UPDATE/DELETE оставляют старые версии строк (dead tuples). VACUUM делает это место повторно используемым и обслуживает visibility/freeze metadata; autovacuum выполняет обслуживание автоматически.

**Ключевые моменты:**
- Обычный VACUUM не «сжимает» файл таблицы до минимального размера.
- \`VACUUM FULL\` переписывает таблицу и требует более сильной блокировки.
- Плохие настройки autovacuum и длинные транзакции могут приводить к bloat.`,
"shortAnswer": `VACUUM и autovacuum Из-за MVCC UPDATE/DELETE оставляют старые версии строк (dead tuples).  VACUUM делает это место повторно используемым и обслуживает visibility/freeze metadata; autovacuum выполняет обслуживание автоматически.`,
},
{
"id": `13-middle-общее-5`,
"title": `Connection pooling (PgBouncer).`,
"fullAnswer": `## PgBouncer

PgBouncer — лёгкий connection pooler перед PostgreSQL. Он уменьшает число реальных server connections и стоимость их создания.

**Ключевые моменты:**
- Session pooling закрепляет соединение за клиентом на сессию.
- Transaction pooling возвращает соединение в pool после каждой транзакции и масштабируется лучше, но несовместим с частью session-level state.
- Размер pool должен учитывать лимиты PostgreSQL и workload.`,
"shortAnswer": `PgBouncer PgBouncer — лёгкий connection pooler перед PostgreSQL.  Он уменьшает число реальных server connections и стоимость их создания.`,
},
{
"id": `13-middle-общее-6`,
"title": `Репликация: logical, physical, streaming, failover, Patroni.`,
"fullAnswer": `## Репликация PostgreSQL

Physical/streaming replication передаёт изменения на уровне WAL и обычно используется для standby. Logical replication передаёт логические изменения выбранных таблиц и удобна для интеграций и некоторых миграций.

**Ключевые моменты:**
- Failover переключает трафик на реплику при проблеме primary.
- Patroni автоматизирует HA-оркестрацию PostgreSQL с распределённым consensus store.
- Репликация не заменяет backup: ошибки пользователя могут реплицироваться.`,
"shortAnswer": `Репликация PostgreSQL Physical/streaming replication передаёт изменения на уровне WAL и обычно используется для standby.  Logical replication передаёт логические изменения выбранных таблиц и удобна для интеграций и некоторых миграций.`,
},
{
"id": `13-middle-общее-7`,
"title": `Мониторинг: pg_stat_statements, pgBadger.`,
"fullAnswer": `## Мониторинг PostgreSQL

\`pg_stat_statements\` агрегирует статистику выполнения нормализованных SQL-запросов: calls, total/mean time, rows и др. pgBadger анализирует PostgreSQL logs и строит отчёты.

**Ключевые моменты:**
- Ищите запросы с большим total time и высокой latency.
- Сопоставляйте SQL-статистику с CPU, I/O, locks и connection metrics.
- Для проблемного запроса изучайте \`EXPLAIN (ANALYZE, BUFFERS)\`.`,
"shortAnswer": `Мониторинг PostgreSQL pg_stat_statements агрегирует статистику выполнения нормализованных SQL-запросов: calls, total/mean time, rows и др.  pgBadger анализирует PostgreSQL logs и строит отчёты.`,
},
{
"id": `13-middle-общее-8`,
"title": `Partitioning strategies: range, list, hash.`,
"fullAnswer": `## Partitioning: range, list, hash

Declarative partitioning делит таблицу на дочерние partitions по ключу. Range — по диапазонам, List — по перечисленным значениям, Hash — по хэшу ключа.

**Ключевые моменты:**
- Partition pruning позволяет не читать нерелевантные partitions.
- Partitioning не является автоматическим ускорителем всех запросов.
- Продумайте число partitions и операции lifecycle/retention.`,
"shortAnswer": `Partitioning: range, list, hash Declarative partitioning делит таблицу на дочерние partitions по ключу.  Range — по диапазонам, List — по перечисленным значениям, Hash — по хэшу ключа.`,
},
],
},
],
},
}
