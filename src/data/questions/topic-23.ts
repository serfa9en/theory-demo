import type { TopicQuestions } from '../../types/question'

export const topic23Questions: TopicQuestions = {
"id": 23,
"slug": `topic-23`,
"title": `HTTP`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `23-junior-общее-1`,
"title": `HTTP-запрос и ответ: из чего состоят.`,
"fullAnswer": `## HTTP request и response

HTTP-запрос содержит method, target URL/path, headers и иногда body. Ответ содержит status code, headers и иногда body.

**Ключевые моменты:**
- HTTP/1.1 передаёт start-line + headers + body.
- Headers описывают metadata и поведение.
- Body может содержать JSON, HTML, файл и другие форматы.`,
"shortAnswer": `HTTP request и response HTTP-запрос содержит method, target URL/path, headers и иногда body.  Ответ содержит status code, headers и иногда body.`,
},
{
"id": `23-junior-общее-2`,
"title": `HTTP-методы.`,
"fullAnswer": `## HTTP methods

\`GET\` читает ресурс, \`POST\` обычно создаёт/запускает операцию, \`PUT\` заменяет ресурс, \`PATCH\` частично изменяет, \`DELETE\` удаляет, \`HEAD\` похож на GET без body, \`OPTIONS\` сообщает доступные возможности/используется CORS preflight.

**Ключевые моменты:**
- GET, HEAD, OPTIONS считаются safe.
- PUT и DELETE по смыслу идемпотентны.
- Реальный API должен документировать семантику каждого endpoint.`,
"shortAnswer": `HTTP methods GET читает ресурс, POST обычно создаёт/запускает операцию, PUT заменяет ресурс, PATCH частично изменяет, DELETE удаляет, HEAD похож на GET без body, OPTIONS сообщает доступные возможности/используется CORS preflight.  Ключевые моменты: GET, HEAD, OPTIONS считаются safe.`,
},
{
"id": `23-junior-общее-3`,
"title": `Группы кодов ответа: 2xx, 3xx, 4xx, 5xx.`,
"fullAnswer": `## Группы HTTP status codes

1xx — информационные, 2xx — успешные, 3xx — перенаправления/кэш, 4xx — проблема в запросе/доступе со стороны клиента, 5xx — ошибка сервера при обработке.

**Ключевые моменты:**
- Код должен отражать фактический результат.
- Не возвращайте 200 для любой ошибки только ради удобства клиента.
- Некоторые 3xx требуют Location header.`,
"shortAnswer": `Группы HTTP status codes 1xx — информационные, 2xx — успешные, 3xx — перенаправления/кэш, 4xx — проблема в запросе/доступе со стороны клиента, 5xx — ошибка сервера при обработке.  Ключевые моменты: Код должен отражать фактический результат.`,
},
{
"id": `23-junior-общее-4`,
"title": `200 OK, 201 Created, 204 No Content, 400, 401, 403, 404, 500.`,
"fullAnswer": `## Частые HTTP status codes

\`200 OK\` — успешный ответ, \`201 Created\` — создан ресурс, \`204 No Content\` — успех без body, \`400 Bad Request\` — некорректный запрос, \`401 Unauthorized\` — требуется/не прошла аутентификация, \`403 Forbidden\` — доступ запрещён, \`404 Not Found\` — ресурс не найден, \`500 Internal Server Error\` — внутренняя ошибка.

**Ключевые моменты:**
- При 201 полезно вернуть Location созданного ресурса.
- 401 и 403 имеют разный смысл.
- 500 не должен раскрывать stack trace клиенту.`,
"shortAnswer": `Частые HTTP status codes 200 OK — успешный ответ, 201 Created — создан ресурс, 204 No Content — успех без body, 400 Bad Request — некорректный запрос, 401 Unauthorized — требуется/не прошла аутентификация, 403 Forbidden — доступ запрещён, 404 Not Found — ресурс не найден, 500 Internal Server Error — внутренняя ошибка.  Ключевые моменты: При 201 полезно вернуть Location созданного ресурса.`,
},
{
"id": `23-junior-общее-5`,
"title": `URL, заголовки HTTP, Content-Type, Accept, Authorization.`,
"fullAnswer": `## URL и HTTP headers

URL описывает адрес ресурса: scheme, host, port, path, query и fragment. \`Content-Type\` описывает формат отправляемого body, \`Accept\` — предпочитаемый формат ответа, \`Authorization\` передаёт учётные данные/токен по выбранной схеме.

**Ключевые моменты:**
- Fragment не отправляется HTTP-серверу.
- Query используется для параметров ресурса/поиска.
- Authorization нужно передавать только по HTTPS.`,
"shortAnswer": `URL и HTTP headers URL описывает адрес ресурса: scheme, host, port, path, query и fragment.  Content-Type описывает формат отправляемого body, Accept — предпочитаемый формат ответа, Authorization передаёт учётные данные/токен по выбранной схеме.`,
},
{
"id": `23-junior-общее-6`,
"title": `Cookie, LocalStorage, SessionStorage, сессия.`,
"fullAnswer": `## Cookie, LocalStorage, SessionStorage и session

Cookie хранится в браузере и автоматически может отправляться серверу для подходящего domain/path. LocalStorage хранит строки без автоматической отправки и переживает закрытие вкладки. SessionStorage привязан к вкладке/сессии страницы. Серверная session — состояние на сервере, обычно связанное с клиентом через session id cookie.

**Ключевые моменты:**
- HttpOnly cookie недоступна JavaScript.
- LocalStorage удобен, но доступен JS и уязвим при XSS.
- Чувствительные auth-сценарии требуют продуманной модели CSRF/XSS.`,
"shortAnswer": `Cookie, LocalStorage, SessionStorage и session Cookie хранится в браузере и автоматически может отправляться серверу для подходящего domain/path.  LocalStorage хранит строки без автоматической отправки и переживает закрытие вкладки.`,
},
{
"id": `23-junior-общее-7`,
"title": `HTTPS, CORS, REST.`,
"fullAnswer": `## HTTPS, CORS и REST

HTTPS — HTTP поверх TLS, обеспечивающий шифрование канала и проверку подлинности сервера сертификатом. CORS — браузерный механизм, который регулирует чтение cross-origin ответов frontend-кодом. REST — архитектурный стиль ресурсного HTTP API.

**Ключевые моменты:**
- CORS не является механизмом серверной авторизации.
- TLS защищает транспорт, но не исправляет XSS/SQL injection.
- REST обычно использует ресурсы, HTTP methods/status codes и stateless requests.`,
"shortAnswer": `HTTPS, CORS и REST HTTPS — HTTP поверх TLS, обеспечивающий шифрование канала и проверку подлинности сервера сертификатом.  CORS — браузерный механизм, который регулирует чтение cross-origin ответов frontend-кодом.`,
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
"id": `23-middle-общее-1`,
"title": `CORS Preflight (OPTIONS).`,
"fullAnswer": `## CORS Preflight

Для некоторых cross-origin запросов браузер сначала отправляет \`OPTIONS\` preflight, чтобы спросить сервер, разрешены ли origin, method и headers. Если ответ содержит подходящие \`Access-Control-Allow-*\`, браузер отправляет основной запрос.

**Ключевые моменты:**
- Simple requests могут обходиться без preflight.
- \`Access-Control-Allow-Origin\` должен соответствовать политике сервера.
- Credentials требуют явного origin и \`Access-Control-Allow-Credentials: true\`.`,
"shortAnswer": `CORS Preflight Для некоторых cross-origin запросов браузер сначала отправляет OPTIONS preflight, чтобы спросить сервер, разрешены ли origin, method и headers.  Если ответ содержит подходящие Access-Control-Allow-*, браузер отправляет основной запрос.`,
},
{
"id": `23-middle-общее-2`,
"title": `Кэширование: Cache-Control, ETag, Last-Modified.`,
"fullAnswer": `## HTTP caching

\`Cache-Control\` задаёт правила freshness/storage (\`max-age\`, \`no-store\`, \`private\`, \`public\` и др.). ETag — validator версии представления; клиент может отправить \`If-None-Match\`. Last-Modified работает с \`If-Modified-Since\` как более простой validator.

**Ключевые моменты:**
- При валидном кэше сервер может ответить \`304 Not Modified\` без body.
- Для versioned static assets часто используют долгий \`max-age\` + \`immutable\`.
- \`no-cache\` означает «проверять перед использованием», а не «никогда не хранить»; для запрета хранения есть \`no-store\`.`,
"shortAnswer": `HTTP caching Cache-Control задаёт правила freshness/storage (max-age, no-store, private, public и др. ).`,
},
{
"id": `23-middle-общее-3`,
"title": `Атрибуты Cookie: HttpOnly, Secure, SameSite.`,
"fullAnswer": `## Cookie security attributes

\`HttpOnly\` запрещает JavaScript доступ к cookie, снижая риск кражи через XSS. \`Secure\` отправляет cookie только по HTTPS. \`SameSite\` ограничивает отправку cookie в cross-site контексте и помогает снижать CSRF.

**Ключевые моменты:**
- \`SameSite=Strict\` наиболее жёсткий, \`Lax\` часто разумный default, \`None\` требует \`Secure\`.
- Cookie всё равно должен иметь минимальные Domain/Path/Max-Age и server-side validation.`,
"shortAnswer": `Cookie security attributes HttpOnly запрещает JavaScript доступ к cookie, снижая риск кражи через XSS.  Secure отправляет cookie только по HTTPS.`,
},
{
"id": `23-middle-общее-4`,
"title": `Защита от XSS и CSRF.`,
"fullAnswer": `## XSS и CSRF

XSS заставляет страницу выполнить атакующий script/markup в контексте сайта; основная защита — контекстное escaping/encoding, безопасный DOM API, sanitization для разрешённого HTML и CSP как дополнительный слой. CSRF заставляет browser жертвы отправить авторизованный request на другой сайт.

**Ключевые моменты:**
- Для CSRF используют SameSite cookies, anti-CSRF tokens и проверку Origin/Referer по модели приложения.
- HttpOnly защищает cookie от чтения JS, но сам не предотвращает XSS.
- Никогда не вставляйте непроверенный input через \`innerHTML\`/\`v-html\`.`,
"shortAnswer": `XSS и CSRF XSS заставляет страницу выполнить атакующий script/markup в контексте сайта; основная защита — контекстное escaping/encoding, безопасный DOM API, sanitization для разрешённого HTML и CSP как дополнительный слой.  CSRF заставляет browser жертвы отправить авторизованный request на другой сайт.`,
},
{
"id": `23-middle-общее-5`,
"title": `HTTPS: TLS handshake, симметричное и асимметричное шифрование, сертификаты, Let's Encrypt, HSTS.`,
"fullAnswer": `## HTTPS и TLS

TLS handshake согласует версию/шифросuites, проверяет сертификат сервера и создаёт общие session keys. Асимметричная криптография нужна для аутентификации/обмена ключевым материалом, а bulk traffic шифруется быстрыми симметричными алгоритмами.

**Ключевые моменты:**
- Сертификат связывает public key с доменом через доверенную CA; Let’s Encrypt автоматизирует выдачу сертификатов.
- HSTS сообщает браузеру использовать HTTPS для домена в течение заданного времени.
- Современный TLS 1.3 сокращает handshake и убирает устаревшие алгоритмы.`,
"shortAnswer": `HTTPS и TLS TLS handshake согласует версию/шифросuites, проверяет сертификат сервера и создаёт общие session keys.  Асимметричная криптография нужна для аутентификации/обмена ключевым материалом, а bulk traffic шифруется быстрыми симметричными алгоритмами.`,
},
{
"id": `23-middle-общее-6`,
"title": `HTTP/2 и HTTP/3 (QUIC): server push, multiplexing, header compression.`,
"fullAnswer": `## HTTP/2 и HTTP/3

HTTP/2 мультиплексирует несколько streams поверх одного TCP connection и использует HPACK header compression. HTTP/3 переносит HTTP semantics на QUIC поверх UDP; QUIC включает TLS 1.3 и устраняет TCP head-of-line blocking между независимыми streams.

**Ключевые моменты:**
- HTTP/2 server push существовал как функция протокола, но браузерная поддержка практически ушла; не следует строить современную оптимизацию вокруг него.
- HTTP/3 использует QPACK для header compression.
- Оба протокола сохраняют привычные HTTP methods/status/headers на уровне semantics.`,
"shortAnswer": `HTTP/2 и HTTP/3 HTTP/2 мультиплексирует несколько streams поверх одного TCP connection и использует HPACK header compression.  HTTP/3 переносит HTTP semantics на QUIC поверх UDP; QUIC включает TLS 1.`,
},
{
"id": `23-middle-общее-7`,
"title": `WebSocket, Server-Sent Events (SSE), long polling.`,
"fullAnswer": `## WebSocket, SSE и long polling

WebSocket создаёт постоянный двунаправленный канал. SSE держит HTTP response открытым и передаёт события server→client. Long polling держит request до появления события, затем клиент создаёт новый request.

**Ключевые моменты:**
- WebSocket удобен для частого bidirectional realtime traffic.
- SSE проще для однонаправленных notifications и автоматически переподключается в EventSource.
- Long polling работает почти везде, но создаёт больше HTTP overhead.`,
"shortAnswer": `WebSocket, SSE и long polling WebSocket создаёт постоянный двунаправленный канал.  SSE держит HTTP response открытым и передаёт события server→client.`,
},
{
"id": `23-middle-общее-8`,
"title": `GraphQL, gRPC, сравнение REST vs GraphQL vs gRPC.`,
"fullAnswer": `## REST vs GraphQL vs gRPC

REST моделирует ресурсы через HTTP endpoints. GraphQL даёт типизированную query language, где клиент выбирает поля. gRPC использует RPC-контракты (обычно Protocol Buffers) и эффективный бинарный HTTP/2 transport.

**Ключевые моменты:**
- REST прост и хорошо дружит с HTTP caching/tools.
- GraphQL снижает over/under-fetching, но требует контроля complexity/caching/auth.
- gRPC силён во внутренних service-to-service API и streaming, но browser integration отличается от обычного REST.
- Выбор зависит от клиентов, latency, schema evolution и operational tooling.`,
"shortAnswer": `REST vs GraphQL vs gRPC REST моделирует ресурсы через HTTP endpoints.  GraphQL даёт типизированную query language, где клиент выбирает поля.`,
},
],
},
],
},
}
