import type { TopicQuestions } from '../../types/question'

export const topic16Questions: TopicQuestions = {
"id": 16,
"slug": `topic-16`,
"title": `Микросервисы, REST, Kafka, Отказоустойчивость`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `16-junior-общее-1`,
"title": `Клиент-серверная архитектура, API, REST API, JSON, эндпоинт.`,
"fullAnswer": `## Клиент-сервер, API, REST API, JSON и endpoint

Клиент отправляет запрос серверу, сервер обрабатывает его и возвращает ответ. API — контракт взаимодействия программ. REST API обычно моделирует ресурсы через HTTP. JSON — распространённый формат обмена данными. Endpoint — конкретная комбинация URL и операции API.

**Ключевые моменты:**
- Например: \`GET /users/42\`.
- Контракт включает методы, поля, status codes и ошибки.
- REST обычно стремится к stateless-взаимодействию.`,
"shortAnswer": `Клиент-сервер, API, REST API, JSON и endpoint Клиент отправляет запрос серверу, сервер обрабатывает его и возвращает ответ.  API — контракт взаимодействия программ.`,
},
{
"id": `16-junior-общее-2`,
"title": `Монолит vs микросервисы: плюсы и минусы.`,
"fullAnswer": `## Монолит и микросервисы

Монолит разворачивается как одно приложение и проще в разработке, тестировании и транзакциях. Микросервисы делят систему на независимо разворачиваемые сервисы, но добавляют сетевое взаимодействие, распределённые данные и эксплуатационную сложность.

**Ключевые моменты:**
- Монолит проще для небольшой команды и ранней стадии продукта.
- Микросервисы дают независимое масштабирование и ownership.
- Цена микросервисов — observability, CI/CD, contracts, retries и consistency.`,
"shortAnswer": `Монолит и микросервисы Монолит разворачивается как одно приложение и проще в разработке, тестировании и транзакциях.  Микросервисы делят систему на независимо разворачиваемые сервисы, но добавляют сетевое взаимодействие, распределённые данные и эксплуатационную сложность.`,
},
{
"id": `16-junior-общее-3`,
"title": `Синхронное vs асинхронное взаимодействие.`,
"fullAnswer": `## Синхронное и асинхронное взаимодействие

При синхронном взаимодействии вызывающий ждёт ответ прямо сейчас, например HTTP request/response. При асинхронном отправитель публикует сообщение/задачу и не обязан ждать завершения обработки.

**Ключевые моменты:**
- Синхронный вызов проще понимать, но связывает доступность сервисов.
- Асинхронность повышает decoupling и устойчивость к пикам.
- Асинхронные системы требуют обработки повторов, порядка и eventual consistency.`,
"shortAnswer": `Синхронное и асинхронное взаимодействие При синхронном взаимодействии вызывающий ждёт ответ прямо сейчас, например HTTP request/response.  При асинхронном отправитель публикует сообщение/задачу и не обязан ждать завершения обработки.`,
},
{
"id": `16-junior-общее-4`,
"title": `Очереди сообщений, кэширование, балансировщик нагрузки.`,
"fullAnswer": `## Очереди, кэш и load balancer

Очередь сообщений буферизует работу между producer и consumer. Кэш хранит часто используемые данные ближе к потребителю. Load balancer распределяет запросы между несколькими экземплярами сервиса.

**Ключевые моменты:**
- Очередь сглаживает пики нагрузки.
- Кэш снижает latency и нагрузку на источник данных.
- Балансировщик поддерживает horizontal scaling и health checks.`,
"shortAnswer": `Очереди, кэш и load balancer Очередь сообщений буферизует работу между producer и consumer.  Кэш хранит часто используемые данные ближе к потребителю.`,
},
{
"id": `16-junior-общее-5`,
"title": `Горизонтальное и вертикальное масштабирование.`,
"fullAnswer": `## Вертикальное и горизонтальное масштабирование

Вертикальное масштабирование увеличивает ресурсы одного узла: CPU, RAM, диск. Горизонтальное добавляет новые экземпляры/узлы и распределяет нагрузку между ними.

**Ключевые моменты:**
- Vertical scaling проще, но ограничен размером машины.
- Horizontal scaling повышает отказоустойчивость, но требует распределения состояния.
- Stateless-сервисы обычно проще масштабировать горизонтально.`,
"shortAnswer": `Вертикальное и горизонтальное масштабирование Вертикальное масштабирование увеличивает ресурсы одного узла: CPU, RAM, диск.  Горизонтальное добавляет новые экземпляры/узлы и распределяет нагрузку между ними.`,
},
{
"id": `16-junior-общее-6`,
"title": `API Gateway, service discovery, load balancing.`,
"fullAnswer": `## API Gateway, Service Discovery и Load Balancing

API Gateway — единая точка входа для клиентов, где можно делать routing, auth, rate limiting и агрегацию. Service Discovery помогает находить живые экземпляры сервисов. Load Balancer распределяет трафик между ними.

**Ключевые моменты:**
- Gateway не должен превращаться в монолит бизнес-логики.
- Discovery бывает client-side и server-side.
- Health checks помогают исключать нездоровые instances.`,
"shortAnswer": `API Gateway, Service Discovery и Load Balancing API Gateway — единая точка входа для клиентов, где можно делать routing, auth, rate limiting и агрегацию.  Service Discovery помогает находить живые экземпляры сервисов.`,
},
{
"id": `16-junior-общее-7`,
"title": `Circuit breaker, retry.`,
"fullAnswer": `## Circuit Breaker и Retry

Retry повторяет временно неудачную операцию, а Circuit Breaker прекращает обращения к явно проблемной зависимости, чтобы не усиливать каскадный сбой.

**Ключевые моменты:**
- Retry используйте только для ошибок, которые действительно могут исчезнуть.
- Добавляйте exponential backoff + jitter и лимит попыток.
- Circuit Breaker обычно имеет Closed/Open/Half-Open состояния.
- Для неидемпотентных операций повтор требует idempotency strategy.`,
"shortAnswer": `Circuit Breaker и Retry Retry повторяет временно неудачную операцию, а Circuit Breaker прекращает обращения к явно проблемной зависимости, чтобы не усиливать каскадный сбой.  Ключевые моменты: Retry используйте только для ошибок, которые действительно могут исчезнуть.`,
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
"id": `16-middle-общее-1`,
"title": `Когда переходить на микросервисы?`,
"fullAnswer": `## Когда переходить к микросервисам

Микросервисы оправданы, когда организационные и технические границы домена уже понятны, разные части системы требуют независимого масштабирования/релизов, а команда готова оплачивать сложность distributed systems.

**Ключевые моменты:**
- Не начинайте с микросервисов только «ради масштабирования».
- Нужны зрелые CI/CD, observability, ownership, API contracts и эксплуатация.
- Часто хороший модульный монолит — лучший старт.
- Граница сервиса должна отражать business capability/bounded context.`,
"shortAnswer": `Когда переходить к микросервисам Микросервисы оправданы, когда организационные и технические границы домена уже понятны, разные части системы требуют независимого масштабирования/релизов, а команда готова оплачивать сложность distributed systems.  Ключевые моменты: Не начинайте с микросервисов только «ради масштабирования».`,
},
{
"id": `16-middle-общее-2`,
"title": `Saga pattern: Choreography vs Orchestration.`,
"fullAnswer": `## Saga: Choreography vs Orchestration

Saga разбивает распределённую бизнес-транзакцию на локальные транзакции и компенсирующие действия. Choreography связывает шаги событиями без центрального координатора; Orchestration использует отдельный orchestrator, явно управляющий flow.

**Ключевые моменты:**
- Choreography проще для коротких flows, но может стать трудно отслеживаемой сетью событий.
- Orchestration делает процесс явным, но создаёт центральный компонент workflow.
- Compensation — бизнес-действие, а не технический rollback общей БД.`,
"shortAnswer": `Saga: Choreography vs Orchestration Saga разбивает распределённую бизнес-транзакцию на локальные транзакции и компенсирующие действия.  Choreography связывает шаги событиями без центрального координатора; Orchestration использует отдельный orchestrator, явно управляющий flow.`,
},
{
"id": `16-middle-общее-3`,
"title": `Eventual Consistency.`,
"fullAnswer": `## Eventual Consistency

При eventual consistency разные копии/сервисы могут временно видеть разные состояния, но при отсутствии новых изменений система стремится к согласованному результату.

**Ключевые моменты:**
- Это компромисс ради availability/latency/decoupling.
- UX должен учитывать временную несогласованность.
- Нужны idempotency, повторная доставка, reconciliation и наблюдаемость.
- Для критичных инвариантов иногда требуется сильная согласованность.`,
"shortAnswer": `Eventual Consistency При eventual consistency разные копии/сервисы могут временно видеть разные состояния, но при отсутствии новых изменений система стремится к согласованному результату.  Ключевые моменты: Это компромисс ради availability/latency/decoupling.`,
},
{
"id": `16-middle-общее-4`,
"title": `Уровни зрелости REST (Richardson Maturity Model), HATEOAS, версионирование API.`,
"fullAnswer": `## REST maturity, HATEOAS и versioning

Richardson Maturity Model описывает эволюцию HTTP API: единый endpoint → ресурсы → корректное использование HTTP verbs/status → hypermedia controls (HATEOAS). Это модель зрелости, а не обязательный чек-лист.

**Ключевые моменты:**
- HATEOAS передаёт клиенту доступные действия ссылками/отношениями.
- Версионирование бывает в URL, headers/media types; важнее стабильный contract.
- Старайтесь делать backward-compatible изменения и иметь deprecation policy.`,
"shortAnswer": `REST maturity, HATEOAS и versioning Richardson Maturity Model описывает эволюцию HTTP API: единый endpoint → ресурсы → корректное использование HTTP verbs/status → hypermedia controls (HATEOAS).  Это модель зрелости, а не обязательный чек-лист.`,
},
{
"id": `16-middle-общее-5`,
"title": `Kafka: Topic, Partition, Consumer Group, порядок сообщений, Offset, Exactly-once semantics.`,
"fullAnswer": `## Kafka: topic, partition, consumer group, offset, EOS

Topic разбит на partitions. Порядок гарантируется внутри конкретной partition. Consumer group распределяет partitions между consumer так, чтобы одну partition в группе обычно обрабатывал один consumer. Offset — позиция consumer в partition.

**Ключевые моменты:**
- Ключ сообщения часто выбирает partition и помогает сохранить порядок по сущности.
- At-least-once требует idempotent processing.
- Kafka поддерживает idempotent producer и transactions для exactly-once processing в определённых Kafka-to-Kafka сценариях, но «exactly once end-to-end» зависит от всех внешних систем.`,
"shortAnswer": `Kafka: topic, partition, consumer group, offset, EOS Topic разбит на partitions.  Порядок гарантируется внутри конкретной partition.`,
},
{
"id": `16-middle-общее-6`,
"title": `Паттерны отказоустойчивости: Retry, Bulkhead, Fallback.`,
"fullAnswer": `## Retry, Bulkhead, Fallback

Retry повторяет временные ошибки; Bulkhead изолирует ресурсы, чтобы проблема одной зависимости не исчерпала всё; Fallback предоставляет деградированный результат при недоступности основного пути.

**Ключевые моменты:**
- Комбинируйте с timeouts и circuit breaker.
- Не retry-те validation/permission ошибки.
- Bulkhead реализуют отдельными pools/queues/limits.
- Fallback должен быть безопасным и явно наблюдаемым.`,
"shortAnswer": `Retry, Bulkhead, Fallback Retry повторяет временные ошибки; Bulkhead изолирует ресурсы, чтобы проблема одной зависимости не исчерпала всё; Fallback предоставляет деградированный результат при недоступности основного пути.  Ключевые моменты: Комбинируйте с timeouts и circuit breaker.`,
},
{
"id": `16-middle-общее-7`,
"title": `Идемпотентность, idempotency keys, outbox pattern, transactional outbox.`,
"fullAnswer": `## Idempotency и Transactional Outbox

Идемпотентная операция даёт тот же бизнес-результат при повторном выполнении. Для HTTP-команд используют idempotency key. Transactional outbox сохраняет бизнес-изменение и событие outbox в одной локальной транзакции, после чего отдельный publisher доставляет событие.

**Ключевые моменты:**
- Consumer всё равно стоит делать идемпотентным.
- Outbox решает dual-write проблему между БД и broker.
- Нужны уникальные ключи/deduplication и стратегия cleanup outbox.`,
"shortAnswer": `Idempotency и Transactional Outbox Идемпотентная операция даёт тот же бизнес-результат при повторном выполнении.  Для HTTP-команд используют idempotency key.`,
},
{
"id": `16-middle-общее-8`,
"title": `Distributed tracing, OpenTelemetry, service mesh, Istio.`,
"fullAnswer": `## Distributed tracing, OpenTelemetry и service mesh

Distributed tracing связывает работу одного запроса через несколько сервисов в trace из spans. OpenTelemetry — vendor-neutral набор API/SDK/Collector и соглашений для traces, metrics и logs. Service mesh переносит часть сетевых функций между сервисами в инфраструктурный слой; Istio — один из вариантов.

**Ключевые моменты:**
- Context propagation переносит trace/span context между процессами.
- Sampling контролирует стоимость telemetry.
- Mesh может дать mTLS, traffic policies и telemetry, но добавляет эксплуатационную сложность.`,
"shortAnswer": `Distributed tracing, OpenTelemetry и service mesh Distributed tracing связывает работу одного запроса через несколько сервисов в trace из spans.  OpenTelemetry — vendor-neutral набор API/SDK/Collector и соглашений для traces, metrics и logs.`,
},
{
"id": `16-middle-общее-9`,
"title": `Backward compatibility, CQRS.`,
"fullAnswer": `## Backward compatibility и CQRS

Backward compatibility означает, что существующие клиенты продолжают работать после обновления API/событий. CQRS разделяет модели/пути команд (изменений) и запросов (чтения), когда их требования существенно различаются.

**Ключевые моменты:**
- Добавляйте поля вместо удаления/переименования без миграции.
- Для событий используйте schema evolution/versioning.
- CQRS не требует обязательного event sourcing.
- Не применяйте CQRS там, где обычная CRUD-модель проще и достаточна.`,
"shortAnswer": `Backward compatibility и CQRS Backward compatibility означает, что существующие клиенты продолжают работать после обновления API/событий.  CQRS разделяет модели/пути команд (изменений) и запросов (чтения), когда их требования существенно различаются.`,
},
],
},
],
},
}
