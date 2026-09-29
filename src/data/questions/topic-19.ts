import type { TopicQuestions } from '../../types/question'

export const topic19Questions: TopicQuestions = {
"id": 19,
"slug": `topic-19`,
"title": `Мониторинг`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `19-junior-общее-1`,
"title": `Зачем нужен мониторинг? Что можно мониторить?`,
"fullAnswer": `## Зачем нужен мониторинг

Мониторинг позволяет понимать состояние системы, замечать деградацию до массовых жалоб и проверять эффект изменений.

**Ключевые моменты:**
- Мониторят availability, latency, error rate, throughput, CPU/RAM/disk, БД, очереди и бизнес-метрики.
- Важно не только собирать данные, но и иметь actionable alerts.
- Dashboard помогает видеть тренды и корреляции.`,
"shortAnswer": `Зачем нужен мониторинг Мониторинг позволяет понимать состояние системы, замечать деградацию до массовых жалоб и проверять эффект изменений.  Ключевые моменты: Мониторят availability, latency, error rate, throughput, CPU/RAM/disk, БД, очереди и бизнес-метрики.`,
},
{
"id": `19-junior-общее-2`,
"title": `Логирование и уровни: DEBUG, INFO, WARN, ERROR.`,
"fullAnswer": `## Логирование и уровни

DEBUG — подробная диагностика, INFO — нормальные значимые события, WARN — потенциальная проблема, ERROR — ошибка операции/компонента.

**Ключевые моменты:**
- Production logs лучше делать структурированными.
- Не логируйте secrets и лишние персональные данные.
- Уровень должен отражать действие, которое требуется оператору.`,
"shortAnswer": `Логирование и уровни DEBUG — подробная диагностика, INFO — нормальные значимые события, WARN — потенциальная проблема, ERROR — ошибка операции/компонента.  Ключевые моменты: Production logs лучше делать структурированными.`,
},
{
"id": `19-junior-общее-3`,
"title": `Grafana, Zabbix, метрики, алерты, дашборд.`,
"fullAnswer": `## Grafana, Zabbix, metrics, alerts и dashboards

Grafana визуализирует данные из источников вроде Prometheus, Loki и БД. Zabbix — система инфраструктурного мониторинга. Metric — числовой показатель во времени, alert — условие уведомления, dashboard — визуальное представление показателей.

**Ключевые моменты:**
- Dashboard не заменяет alerts.
- Alert должен иметь owner/runbook.
- Метрики выбирают исходя из пользовательского и технического риска.`,
"shortAnswer": `Grafana, Zabbix, metrics, alerts и dashboards Grafana визуализирует данные из источников вроде Prometheus, Loki и БД.  Zabbix — система инфраструктурного мониторинга.`,
},
{
"id": `19-junior-общее-4`,
"title": `Prometheus: time series, label, metric name.`,
"fullAnswer": `## Prometheus: time series, metric name и labels

Prometheus хранит time series: значения метрики с timestamp. Серия определяется именем метрики и набором labels.

**Ключевые моменты:**
- Например \`http_requests_total{method="GET",status="200"}\`.
- Labels позволяют фильтровать и группировать.
- Высокая cardinality labels может сильно увеличить стоимость хранения.`,
"shortAnswer": `Prometheus: time series, metric name и labels Prometheus хранит time series: значения метрики с timestamp.  Серия определяется именем метрики и набором labels.`,
},
{
"id": `19-junior-общее-5`,
"title": `Типы метрик: counter, gauge, histogram, summary.`,
"fullAnswer": `## Counter, Gauge, Histogram и Summary

Counter только растёт и подходит для количества событий. Gauge может расти и уменьшаться. Histogram распределяет наблюдения по buckets и позволяет агрегировать percentiles на сервере. Summary считает quantiles на стороне клиента.

**Ключевые моменты:**
- Для latency в распределённой системе часто предпочитают Histogram.
- Counter анализируют через rate/increase.
- Тип метрики выбирают по смыслу значения.`,
"shortAnswer": `Counter, Gauge, Histogram и Summary Counter только растёт и подходит для количества событий.  Gauge может расти и уменьшаться.`,
},
{
"id": `19-junior-общее-6`,
"title": `PromQL, alertmanager, exporter.`,
"fullAnswer": `## PromQL, Alertmanager и exporters

PromQL — язык запросов Prometheus. Exporter предоставляет метрики системы, которая сама не умеет отдавать Prometheus-format. Alertmanager принимает alerts и занимается группировкой, маршрутизацией и silencing.

**Ключевые моменты:**
- Prometheus сам вычисляет alert rules.
- Alertmanager не хранит временные ряды.
- Экспортеры существуют для Node, БД и множества внешних систем.`,
"shortAnswer": `PromQL, Alertmanager и exporters PromQL — язык запросов Prometheus.  Exporter предоставляет метрики системы, которая сама не умеет отдавать Prometheus-format.`,
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
"id": `19-middle-общее-1`,
"title": `Metrics vs Logs vs Traces.`,
"fullAnswer": `## Metrics, Logs, Traces

Metrics — агрегированные числовые временные ряды; logs — дискретные записи событий; traces — путь одного запроса через компоненты/сервисы.

**Ключевые моменты:**
- Metrics хорошо отвечают «есть ли проблема и насколько она массовая».
- Logs дают подробный контекст событий.
- Traces показывают где конкретный запрос потратил время/сломался.
- Общие correlation/trace IDs связывают сигналы.`,
"shortAnswer": `Metrics, Logs, Traces Metrics — агрегированные числовые временные ряды; logs — дискретные записи событий; traces — путь одного запроса через компоненты/сервисы.  Ключевые моменты: Metrics хорошо отвечают «есть ли проблема и насколько она массовая».`,
},
{
"id": `19-middle-общее-2`,
"title": `Архитектура Prometheus + Grafana, Pull-модель.`,
"fullAnswer": `## Prometheus + Grafana

Prometheus регулярно scrapes HTTP endpoints с метриками по pull-модели и сохраняет time series. Grafana запрашивает Prometheus и строит dashboards. Alert rules обычно оцениваются Prometheus, а Alertmanager маршрутизирует alerts.

**Ключевые моменты:**
- Pull упрощает discovery/health наблюдение target-ов.
- Для short-lived jobs используют специальные паттерны вроде Pushgateway только когда это действительно оправдано.
- Контролируйте cardinality labels.`,
"shortAnswer": `Prometheus + Grafana Prometheus регулярно scrapes HTTP endpoints с метриками по pull-модели и сохраняет time series.  Grafana запрашивает Prometheus и строит dashboards.`,
},
{
"id": `19-middle-общее-3`,
"title": `Какие метрики мониторить для Java?`,
"fullAnswer": `## Java/JVM metrics

Для Java-приложения важны системные, JVM и бизнес-метрики одновременно.

**Ключевые моменты:**
- Heap/non-heap usage и allocation rate.
- GC pause time/frequency.
- Thread count, blocked/deadlocked threads.
- CPU, process memory, file descriptors.
- HTTP RPS/error rate/latency, connection pools, queue depth.
- Бизнес-SLI: успешные операции, latency критичных flows.`,
"shortAnswer": `Java/JVM metrics Для Java-приложения важны системные, JVM и бизнес-метрики одновременно.  Ключевые моменты: Heap/non-heap usage и allocation rate.`,
},
{
"id": `19-middle-общее-4`,
"title": `SLI, SLO, SLA, observability.`,
"fullAnswer": `## SLI, SLO, SLA и observability

SLI — измеряемый показатель качества (например доля успешных requests). SLO — целевое значение SLI за окно времени. SLA — внешнее соглашение, часто с последствиями при нарушении. Observability — способность понимать внутреннее состояние системы по её сигналам.

**Ключевые моменты:**
- SLO должен отражать пользовательский опыт.
- 100% SLO обычно слишком дорого и мешает изменениям.
- Error budget = допустимая доля неуспеха относительно SLO.`,
"shortAnswer": `SLI, SLO, SLA и observability SLI — измеряемый показатель качества (например доля успешных requests).  SLO — целевое значение SLI за окно времени.`,
},
{
"id": `19-middle-общее-5`,
"title": `Distributed tracing: Jaeger, Zipkin, OpenTelemetry.`,
"fullAnswer": `## Distributed tracing

Trace состоит из spans, представляющих операции одного distributed request. Trace context передаётся через сетевые границы. Jaeger/Zipkin — trace backends, OpenTelemetry стандартизирует instrumentation и сбор telemetry.

**Ключевые моменты:**
- Не забывайте context propagation в async/message flows.
- Sampling контролирует объём данных.
- Span attributes/events должны помогать диагностике, но не утекать PII/secrets.`,
"shortAnswer": `Distributed tracing Trace состоит из spans, представляющих операции одного distributed request.  Trace context передаётся через сетевые границы.`,
},
{
"id": `19-middle-общее-6`,
"title": `Structured logging, ELK stack, Loki, log aggregation, log rotation.`,
"fullAnswer": `## Structured logging и aggregation

Structured logs записывают поля в машиночитаемом формате (часто JSON), а не только текст. ELK/OpenSearch-подобный стек или Loki централизуют поиск и корреляцию logs.

**Ключевые моменты:**
- Поля: timestamp, level, service, environment, request/trace ID.
- Не логируйте пароли/tokens/персональные данные без необходимости.
- Log rotation/retention защищают диск и бюджет.
- Cardinality и объём logs также требуют контроля.`,
"shortAnswer": `Structured logging и aggregation Structured logs записывают поля в машиночитаемом формате (часто JSON), а не только текст.  ELK/OpenSearch-подобный стек или Loki централизуют поиск и корреляцию logs.`,
},
{
"id": `19-middle-общее-7`,
"title": `Alert routing, grouping, silencing, on-call rotation.`,
"fullAnswer": `## Alert routing и on-call

Alertmanager-подобная система группирует похожие alerts, маршрутизирует их нужной команде, поддерживает inhibit/silence и интеграции с on-call каналами.

**Ключевые моменты:**
- Alert должен быть actionable.
- Группировка снижает alert storm.
- Silence применяют осознанно и ограниченно по времени.
- У alert должны быть severity, owner и runbook.`,
"shortAnswer": `Alert routing и on-call Alertmanager-подобная система группирует похожие alerts, маршрутизирует их нужной команде, поддерживает inhibit/silence и интеграции с on-call каналами.  Ключевые моменты: Alert должен быть actionable.`,
},
{
"id": `19-middle-общее-8`,
"title": `Incident management, post-mortem, error budget.`,
"fullAnswer": `## Incident management и error budget

Incident management включает обнаружение, triage, mitigation, communication и восстановление. После серьёзного инцидента проводят blameless post-mortem: timeline, impact, contributing factors и конкретные action items.

**Ключевые моменты:**
- Error budget связывает reliability и скорость изменений.
- Во время incident сначала стабилизируют сервис, затем ищут глубокую причину.
- Action items должны иметь owner и срок.`,
"shortAnswer": `Incident management и error budget Incident management включает обнаружение, triage, mitigation, communication и восстановление.  После серьёзного инцидента проводят blameless post-mortem: timeline, impact, contributing factors и конкретные action items.`,
},
{
"id": `19-middle-общее-9`,
"title": `Availability monitoring, synthetic monitoring.`,
"fullAnswer": `## Availability и synthetic monitoring

Availability monitoring проверяет доступность реальных компонентов/endpoint-ов. Synthetic monitoring регулярно выполняет искусственные проверки или пользовательские сценарии из контролируемых locations.

**Ключевые моменты:**
- Synthetic checks находят проблему даже при отсутствии реального traffic.
- Проверяйте не только HTTP 200, но и критический бизнес-результат.
- Сочетайте с real-user monitoring для реального client experience.`,
"shortAnswer": `Availability и synthetic monitoring Availability monitoring проверяет доступность реальных компонентов/endpoint-ов.  Synthetic monitoring регулярно выполняет искусственные проверки или пользовательские сценарии из контролируемых locations.`,
},
],
},
],
},
}
