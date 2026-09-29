import type { TopicQuestions } from '../../types/question'

export const topic15Questions: TopicQuestions = {
"id": 15,
"slug": `topic-15`,
"title": `ClickHouse / Elasticsearch`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `15-junior-общее-1`,
"title": `ClickHouse: что это и для каких задач? Колоночная vs строковая СУБД.`,
"fullAnswer": `## ClickHouse и колоночное хранение

ClickHouse — аналитическая колоночная СУБД, оптимизированная для быстрых агрегирующих запросов по большим объёмам данных. Колоночное хранение читает только нужные столбцы и хорошо сжимается, а строковое удобнее для частых точечных CRUD-операций.

**Ключевые моменты:**
- Типичные задачи: аналитика, логи, события, метрики.
- ClickHouse не является прямой заменой OLTP-БД.
- Производительность сильно зависит от ORDER BY и схемы данных.`,
"shortAnswer": `ClickHouse и колоночное хранение ClickHouse — аналитическая колоночная СУБД, оптимизированная для быстрых агрегирующих запросов по большим объёмам данных.  Колоночное хранение читает только нужные столбцы и хорошо сжимается, а строковое удобнее для частых точечных CRUD-операций.`,
},
{
"id": `15-junior-общее-2`,
"title": `Elasticsearch: полнотекстовый поиск, inverted index.`,
"fullAnswer": `## Elasticsearch и inverted index

Elasticsearch — распределённый поисковый движок поверх Lucene. Для полнотекстового поиска он использует inverted index: для каждого терма хранится список документов, где этот терм встречается.

**Ключевые моменты:**
- Текст обычно проходит анализатор и токенизацию.
- Полнотекстовый поиск отличается от точного поиска по keyword.
- Elasticsearch также поддерживает агрегации и фильтрацию.`,
"shortAnswer": `Elasticsearch и inverted index Elasticsearch — распределённый поисковый движок поверх Lucene.  Для полнотекстового поиска он использует inverted index: для каждого терма хранится список документов, где этот терм встречается.`,
},
{
"id": `15-junior-общее-3`,
"title": `Document, index, mapping, query DSL.`,
"fullAnswer": `## Document, index, mapping и Query DSL

Document — JSON-документ. Index — логическая коллекция документов. Mapping описывает типы и правила индексирования полей. Query DSL — JSON-язык запросов Elasticsearch.

**Ключевые моменты:**
- Неправильный mapping сложно исправлять без reindex.
- text обычно используют для full-text, keyword — для точного совпадения/сортировки/агрегаций.
- Query DSL разделяет query и filter-контексты.`,
"shortAnswer": `Document, index, mapping и Query DSL Document — JSON-документ.  Index — логическая коллекция документов.`,
},
{
"id": `15-junior-общее-4`,
"title": `Queries: match, term, range. Aggregation.`,
"fullAnswer": `## match, term, range и aggregations

\`match\` выполняет полнотекстовый поиск с анализатором, \`term\` ищет точное индексированное значение, \`range\` задаёт диапазон. Aggregations строят статистику и группировки по найденным документам.

**Ключевые моменты:**
- Не применяйте term к analyzed text, если ожидаете обычный поиск по словам.
- Filter-контекст не считает score и хорошо кэшируется.
- Агрегации могут быть ресурсоёмкими на высококардинальных полях.`,
"shortAnswer": `match, term, range и aggregations match выполняет полнотекстовый поиск с анализатором, term ищет точное индексированное значение, range задаёт диапазон.  Aggregations строят статистику и группировки по найденным документам.`,
},
{
"id": `15-junior-общее-5`,
"title": `Экосистема ELK: Kibana, Logstash, Beats.`,
"fullAnswer": `## ELK: Elasticsearch, Logstash, Kibana, Beats

Elasticsearch хранит и ищет данные, Logstash принимает/преобразует/маршрутизирует события, Kibana визуализирует данные и поиск, Beats — лёгкие агенты для доставки логов/метрик.

**Ключевые моменты:**
- Современные пайплайны могут использовать ingest pipelines вместо части Logstash.
- Нужно контролировать mappings, retention и объём индексов.
- Не отправляйте secrets в логи.`,
"shortAnswer": `ELK: Elasticsearch, Logstash, Kibana, Beats Elasticsearch хранит и ищет данные, Logstash принимает/преобразует/маршрутизирует события, Kibana визуализирует данные и поиск, Beats — лёгкие агенты для доставки логов/метрик.  Ключевые моменты: Современные пайплайны могут использовать ingest pipelines вместо части Logstash.`,
},
{
"id": `15-junior-общее-6`,
"title": `ClickHouse: MergeTree, ReplicatedMergeTree, Distributed engine, Materialized View, dictionary.`,
"fullAnswer": `## MergeTree, ReplicatedMergeTree, Distributed и Materialized View

MergeTree — основное семейство таблиц ClickHouse. ReplicatedMergeTree добавляет репликацию. Distributed — логическая таблица для маршрутизации запросов по shards. Materialized View автоматически преобразует входящие данные в целевую таблицу; Dictionary даёт быстрый lookup справочников.

**Ключевые моменты:**
- ORDER BY критичен для MergeTree.
- Distributed сам по себе не хранит данные как обычная локальная таблица.
- Materialized View полезен для предварительных агрегаций.`,
"shortAnswer": `MergeTree, ReplicatedMergeTree, Distributed и Materialized View MergeTree — основное семейство таблиц ClickHouse.  ReplicatedMergeTree добавляет репликацию.`,
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
"id": `15-middle-общее-1`,
"title": `ClickHouse: партиционирование, сортировка (ORDER BY), primary key, sampling, TTL.`,
"fullAnswer": `## ClickHouse: partitioning, ORDER BY, primary key, sampling, TTL

В MergeTree-семействе \`ORDER BY\` задаёт физический порядок данных и является главным фактором эффективности data skipping. Primary key задаёт sparse primary index и обычно является префиксом sorting key. \`PARTITION BY\` используют прежде всего для lifecycle/partition pruning, а TTL — для автоматического удаления/перемещения старых данных.

**Ключевые моменты:**
- Не делайте слишком много мелких partitions.
- Ставьте в начало ORDER BY поля, по которым часто фильтруют и которые хорошо соответствуют workload.
- Sampling требует подходящего ключа/схемы и применим для приближённых аналитических запросов.`,
"shortAnswer": `ClickHouse: partitioning, ORDER BY, primary key, sampling, TTL В MergeTree-семействе ORDER BY задаёт физический порядок данных и является главным фактором эффективности data skipping.  Primary key задаёт sparse primary index и обычно является префиксом sorting key.`,
},
{
"id": `15-middle-общее-2`,
"title": `Dictionary joins, distributed queries, оптимизация запросов.`,
"fullAnswer": `## ClickHouse dictionaries и distributed queries

Dictionary хранит внешние справочные данные в оптимизированной форме и может заменить часть JOIN-операций быстрым lookup. Distributed engine маршрутизирует запросы к shards, а затем объединяет частичные результаты.

**Ключевые моменты:**
- Фильтруйте как можно раньше и читайте только нужные столбцы.
- Выбирайте JOIN algorithm под размеры таблиц и память.
- Materialized views могут переносить дорогую работу на ingest time.
- Следите за количеством прочитанных rows/bytes, а не только за временем.`,
"shortAnswer": `ClickHouse dictionaries и distributed queries Dictionary хранит внешние справочные данные в оптимизированной форме и может заменить часть JOIN-операций быстрым lookup.  Distributed engine маршрутизирует запросы к shards, а затем объединяет частичные результаты.`,
},
{
"id": `15-middle-общее-3`,
"title": `Elasticsearch: шарды и реплики, распределение данных.`,
"fullAnswer": `## Elasticsearch shards и replicas

Elasticsearch делит index на primary shards; каждый shard является отдельным Lucene index. Replica — копия primary shard на другом узле, повышающая отказоустойчивость и capacity чтения.

**Ключевые моменты:**
- Документ принадлежит одному primary shard.
- Запись сначала обрабатывается primary и реплицируется.
- Число primary shards задаётся при создании index и требует планирования; replicas можно менять.
- Слишком много маленьких shards создают overhead.`,
"shortAnswer": `Elasticsearch shards и replicas Elasticsearch делит index на primary shards; каждый shard является отдельным Lucene index.  Replica — копия primary shard на другом узле, повышающая отказоустойчивость и capacity чтения.`,
},
{
"id": `15-middle-общее-4`,
"title": `Refresh interval, translog, segment merging, fielddata, doc values.`,
"fullAnswer": `## Refresh, translog, segments, fielddata и doc values

Elasticsearch/Lucene пишет данные в segments. Refresh делает новые изменения доступными поиску; translog помогает durability/recovery; background merges объединяют segments.

**Ключевые моменты:**
- Увеличение refresh interval может ускорить массовую индексацию ценой свежести поиска.
- Doc values — column-oriented representation на диске для sorting/aggregations большинства полей.
- Fielddata для analyzed text может потреблять много heap и обычно избегается в пользу keyword/doc_values.`,
"shortAnswer": `Refresh, translog, segments, fielddata и doc values Elasticsearch/Lucene пишет данные в segments.  Refresh делает новые изменения доступными поиску; translog помогает durability/recovery; background merges объединяют segments.`,
},
{
"id": `15-middle-общее-5`,
"title": `Оптимизация индексации: bulk API, reindex API.`,
"fullAnswer": `## Bulk и Reindex

Bulk API объединяет множество index/update/delete операций в один HTTP request и уменьшает сетевой overhead. Reindex копирует документы из source index в destination и применяется для изменения mappings/settings или миграции данных.

**Ключевые моменты:**
- Подбирайте размер batch экспериментально: слишком большой bulk перегружает heap/queue.
- Перед reindex заранее создайте destination с нужными mappings/settings.
- Мониторьте rejected requests, indexing latency и merge pressure.`,
"shortAnswer": `Bulk и Reindex Bulk API объединяет множество index/update/delete операций в один HTTP request и уменьшает сетевой overhead.  Reindex копирует документы из source index в destination и применяется для изменения mappings/settings или миграции данных.`,
},
{
"id": `15-middle-общее-6`,
"title": `Index lifecycle management (ILM), index templates, ingest pipelines.`,
"fullAnswer": `## ILM, index templates и ingest pipelines

Index templates автоматически применяют settings/mappings к новым indices/data streams. Ingest pipeline преобразует документы до индексации. ILM автоматизирует lifecycle индекса: rollover и действия в hot/warm/cold/delete фазах в зависимости от политики.

**Ключевые моменты:**
- Используйте data streams для типичных time-series/log workloads.
- Тестируйте mappings до массовой загрузки.
- Lifecycle должен соответствовать retention и стоимости хранения.`,
"shortAnswer": `ILM, index templates и ingest pipelines Index templates автоматически применяют settings/mappings к новым indices/data streams.  Ingest pipeline преобразует документы до индексации.`,
},
],
},
],
},
}
