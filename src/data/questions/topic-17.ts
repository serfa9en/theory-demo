import type { TopicQuestions } from '../../types/question'

export const topic17Questions: TopicQuestions = {
"id": 17,
"slug": `topic-17`,
"title": `Docker`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `17-junior-общее-1`,
"title": `Что такое Docker, Image, Container, Dockerfile?`,
"fullAnswer": `## Docker, Image, Container и Dockerfile

Docker упаковывает приложение и его зависимости в image и запускает его как изолированный container. Image — неизменяемый шаблон файловой системы и metadata. Container — запущенный экземпляр image. Dockerfile — текстовый рецепт сборки image.

**Ключевые моменты:**
- Image состоит из слоёв.
- Container использует namespaces/cgroups и разделяет kernel host.
- Dockerfile должен быть воспроизводимым и минимальным.

**Пример:**

\`\`\`dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "server.js"]
\`\`\``,
"shortAnswer": `Docker, Image, Container и Dockerfile Docker упаковывает приложение и его зависимости в image и запускает его как изолированный container.  Image — неизменяемый шаблон файловой системы и metadata.`,
},
{
"id": `17-junior-общее-2`,
"title": `Команды: build, run, ps, stop, rm.`,
"fullAnswer": `## Основные команды Docker

\`docker build\` собирает image, \`docker run\` создаёт и запускает container, \`docker ps\` показывает контейнеры, \`docker stop\` корректно останавливает, \`docker rm\` удаляет контейнер.

**Пример:**

\`\`\`bash
docker build -t my-app .
docker run -d --name my-app -p 8080:3000 my-app
docker ps
docker stop my-app
docker rm my-app
\`\`\``,
"shortAnswer": `Основные команды Docker docker build собирает image, docker run создаёт и запускает container, docker ps показывает контейнеры, docker stop корректно останавливает, docker rm удаляет контейнер.`,
},
{
"id": `17-junior-общее-3`,
"title": `docker-compose и docker-compose.yml.`,
"fullAnswer": `## Docker Compose

Docker Compose описывает многоконтейнерное приложение декларативно в compose-файле: сервисы, images/build, ports, volumes, networks, environment и зависимости.

**Ключевые моменты:**
- Современная команда — \`docker compose\`.
- Compose удобен для локальной разработки и простых окружений.
- Сервисы внутри сети Compose доступны по имени service.`,
"shortAnswer": `Docker Compose Docker Compose описывает многоконтейнерное приложение декларативно в compose-файле: сервисы, images/build, ports, volumes, networks, environment и зависимости.  Ключевые моменты: Современная команда — docker compose.`,
},
{
"id": `17-junior-общее-4`,
"title": `Проброс портов, volume, network.`,
"fullAnswer": `## Ports, volumes и networks

Публикация порта связывает порт host с портом container, например \`-p 8080:80\`. Volume хранит данные вне writable layer контейнера. Docker network соединяет контейнеры и даёт DNS по именам.

**Ключевые моменты:**
- Volume нужен для persistent data.
- Порт не нужно публиковать для общения контейнеров внутри одной user-defined network.
- Bind mount связывает контейнер с конкретным путём host.`,
"shortAnswer": `Ports, volumes и networks Публикация порта связывает порт host с портом container, например -p 8080:80.  Volume хранит данные вне writable layer контейнера.`,
},
{
"id": `17-junior-общее-5`,
"title": `Инструкции Dockerfile: FROM, RUN, COPY, CMD, ENTRYPOINT, WORKDIR, EXPOSE, ENV, ARG, LABEL, USER, VOLUME.`,
"fullAnswer": `## Основные инструкции Dockerfile

\`FROM\` выбирает base image, \`RUN\` выполняет команду при сборке, \`COPY\` копирует файлы, \`WORKDIR\` задаёт каталог, \`ENV\` — runtime env, \`ARG\` — build arg, \`CMD\`/\`ENTRYPOINT\` задают команду запуска, \`EXPOSE\` документирует порт.

**Ключевые моменты:**
- \`USER\` переключает пользователя.
- \`LABEL\` добавляет metadata.
- \`VOLUME\` объявляет mount point.
- Количество слоёв и порядок COPY влияют на build cache.`,
"shortAnswer": `Основные инструкции Dockerfile FROM выбирает base image, RUN выполняет команду при сборке, COPY копирует файлы, WORKDIR задаёт каталог, ENV — runtime env, ARG — build arg, CMD/ENTRYPOINT задают команду запуска, EXPOSE документирует порт.  Ключевые моменты: USER переключает пользователя.`,
},
{
"id": `17-junior-общее-6`,
"title": `ADD vs COPY, CMD vs ENTRYPOINT.`,
"fullAnswer": `## ADD vs COPY, CMD vs ENTRYPOINT

\`COPY\` просто копирует файлы и обычно предпочтительнее. \`ADD\` имеет дополнительные возможности вроде распаковки локальных tar-архивов. \`ENTRYPOINT\` задаёт основную исполняемую команду, а \`CMD\` — команду/аргументы по умолчанию, которые проще переопределить.

**Ключевые моменты:**
- Используйте COPY, если специальные возможности ADD не нужны.
- Exec form (\`["cmd","arg"]\`) обычно лучше shell form.
- CMD может задавать default arguments для ENTRYPOINT.`,
"shortAnswer": `ADD vs COPY, CMD vs ENTRYPOINT COPY просто копирует файлы и обычно предпочтительнее.  ADD имеет дополнительные возможности вроде распаковки локальных tar-архивов.`,
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
"id": `17-middle-общее-1`,
"title": `Multi-stage build и уменьшение размера образа.`,
"fullAnswer": `## Multi-stage build

Multi-stage Dockerfile использует несколько \`FROM\`: в build stage устанавливаются компиляторы и зависимости, а в финальный runtime image копируется только готовый artifact. Это уменьшает размер образа и attack surface.

**Ключевые моменты:**
- Используйте небольшой подходящий runtime base image.
- Копируйте только необходимые artifacts.
- Закрепляйте версии и используйте BuildKit cache mounts там, где это уместно.

**Пример:**

\`\`\`dockerfile
FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
\`\`\``,
"shortAnswer": `Multi-stage build Multi-stage Dockerfile использует несколько FROM: в build stage устанавливаются компиляторы и зависимости, а в финальный runtime image копируется только готовый artifact.  Это уменьшает размер образа и attack surface.`,
},
{
"id": `17-middle-общее-2`,
"title": `Docker networks: Bridge, Host, Overlay. Общение контейнеров.`,
"fullAnswer": `## Docker networks

Bridge — стандартная сеть одного Docker host с изоляцией и DNS по именам контейнеров в user-defined network. Host отключает отдельный network namespace контейнера и использует сеть host. Overlay соединяет контейнеры/сервисы на нескольких Docker hosts (например, Swarm).

**Ключевые моменты:**
- Для Compose сервисы в одной сети обращаются друг к другу по service name.
- Публикация порта (\`-p\`) нужна для доступа извне Docker network, а не для общения контейнеров внутри неё.`,
"shortAnswer": `Docker networks Bridge — стандартная сеть одного Docker host с изоляцией и DNS по именам контейнеров в user-defined network.  Host отключает отдельный network namespace контейнера и использует сеть host.`,
},
{
"id": `17-middle-общее-3`,
"title": `Volumes vs Bind mounts.`,
"fullAnswer": `## Volumes vs Bind mounts

Volume управляется Docker и хранится в Docker storage; bind mount монтирует конкретный путь host в контейнер.

**Ключевые моменты:**
- Volumes удобнее и переносимее для persistent application data.
- Bind mount полезен в development для исходников/configs.
- Bind mount сильнее связывает контейнер с файловой системой host.
- Не храните важные данные только в writable container layer.`,
"shortAnswer": `Volumes vs Bind mounts Volume управляется Docker и хранится в Docker storage; bind mount монтирует конкретный путь host в контейнер.  Ключевые моменты: Volumes удобнее и переносимее для persistent application data.`,
},
{
"id": `17-middle-общее-4`,
"title": `Docker secrets, Docker Swarm, Kubernetes (container orchestration).`,
"fullAnswer": `## Secrets и orchestration

Docker secrets предназначены для передачи секретов сервисам Swarm без упаковки секрета в image. Docker Swarm и Kubernetes оркестрируют контейнерные workloads: scheduling, service discovery, rollout, health и масштабирование.

**Ключевые моменты:**
- Не кладите секреты в Dockerfile/ENV при build, если они попадут в layers/history.
- В Kubernetes secrets требуют корректной RBAC/encryption strategy.
- Kubernetes богаче экосистемой и функциональностью, но сложнее в эксплуатации.`,
"shortAnswer": `Secrets и orchestration Docker secrets предназначены для передачи секретов сервисам Swarm без упаковки секрета в image.  Docker Swarm и Kubernetes оркестрируют контейнерные workloads: scheduling, service discovery, rollout, health и масштабирование.`,
},
{
"id": `17-middle-общее-5`,
"title": `Docker Hub, private registry, Docker Compose profiles.`,
"fullAnswer": `## Registry и Compose profiles

Registry хранит и раздаёт container images. Docker Hub — публичный/managed registry, private registry ограничивает доступ внутри организации. Compose profiles позволяют включать опциональные сервисы для конкретных режимов запуска.

**Ключевые моменты:**
- Тег \`latest\` не является гарантией неизменности — в production лучше immutable tags/digests.
- Настройте scanning, auth и retention.
- Profiles удобны для debug/admin tooling, которое не нужно всегда.`,
"shortAnswer": `Registry и Compose profiles Registry хранит и раздаёт container images.  Docker Hub — публичный/managed registry, private registry ограничивает доступ внутри организации.`,
},
{
"id": `17-middle-общее-6`,
"title": `Healthcheck, restart policies, resource limits.`,
"fullAnswer": `## Healthcheck, restart policy и resource limits

HEALTHCHECK проверяет не просто наличие процесса, а способность контейнера обслуживать работу. Restart policy определяет перезапуск после завершения. CPU/memory limits защищают host и соседние workloads от одного контейнера.

**Ключевые моменты:**
- Healthcheck должен быть дешёвым и отражать реальную готовность.
- OOM из-за memory limit нужно наблюдать.
- Не используйте бесконечный restart как замену устранению root cause.`,
"shortAnswer": `Healthcheck, restart policy и resource limits HEALTHCHECK проверяет не просто наличие процесса, а способность контейнера обслуживать работу.  Restart policy определяет перезапуск после завершения.`,
},
{
"id": `17-middle-общее-7`,
"title": `Security: non-root user, image scanning, Docker BuildKit, cache, .dockerignore.`,
"fullAnswer": `## Docker security и build optimization

Запускайте процесс от non-root user, минимизируйте base image и установленные пакеты, сканируйте image и зависимости, не храните secrets в layers. BuildKit улучшает build cache и поддерживает безопасные secret/cache mounts.

**Ключевые моменты:**
- \`.dockerignore\` уменьшает build context и риск случайно скопировать секреты.
- Используйте multi-stage build.
- Закрепляйте base image version/digest по требованиям supply-chain.
- Rootless Docker снижает часть рисков daemon/container privileges.`,
"shortAnswer": `Docker security и build optimization Запускайте процесс от non-root user, минимизируйте base image и установленные пакеты, сканируйте image и зависимости, не храните secrets в layers.  BuildKit улучшает build cache и поддерживает безопасные secret/cache mounts.`,
},
{
"id": `17-middle-общее-8`,
"title": `Docker contexts, Desktop, rootless Docker, Docker in Docker (DinD).`,
"fullAnswer": `## Docker contexts, Desktop, rootless и DinD

Docker context хранит параметры подключения к конкретному daemon/endpoint. Docker Desktop предоставляет локальную VM/интеграцию для macOS/Windows и dev tools. Rootless mode запускает daemon/containers без root privileges host. DinD запускает Docker daemon внутри контейнера.

**Ключевые моменты:**
- DinD нужен не всегда: в CI часто безопаснее dedicated builders/BuildKit.
- Mount docker.sock фактически даёт очень широкие права на host Docker daemon.
- Выбирайте подход, учитывая isolation и security model.`,
"shortAnswer": `Docker contexts, Desktop, rootless и DinD Docker context хранит параметры подключения к конкретному daemon/endpoint.  Docker Desktop предоставляет локальную VM/интеграцию для macOS/Windows и dev tools.`,
},
],
},
],
},
}
