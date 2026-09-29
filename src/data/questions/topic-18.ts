import type { TopicQuestions } from '../../types/question'

export const topic18Questions: TopicQuestions = {
"id": 18,
"slug": `topic-18`,
"title": `CI/CD`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `18-junior-общее-1`,
"title": `CI (Continuous Integration) и CD (Continuous Delivery/Deployment).`,
"fullAnswer": `## CI и CD

Continuous Integration — частое объединение изменений с автоматической сборкой и тестами. Continuous Delivery означает, что приложение всегда готово к выпуску, но production deploy может требовать ручного решения. Continuous Deployment автоматически доставляет прошедшие проверки изменения в production.

**Ключевые моменты:**
- CI даёт быстрый feedback.
- CD требует воспроизводимых builds и окружений.
- Deployment и release можно разделять feature flags.`,
"shortAnswer": `CI и CD Continuous Integration — частое объединение изменений с автоматической сборкой и тестами.  Continuous Delivery означает, что приложение всегда готово к выпуску, но production deploy может требовать ручного решения.`,
},
{
"id": `18-junior-общее-2`,
"title": `Что такое пайплайн и из каких шагов он состоит?`,
"fullAnswer": `## Что такое pipeline

Pipeline — автоматизированная последовательность стадий от изменения кода до проверенного артефакта и, при необходимости, деплоя.

**Ключевые моменты:**
- Типичные шаги: checkout → install → lint → test → build → security checks → publish artifact → deploy.
- Независимые jobs можно выполнять параллельно.
- Каждый шаг должен завершаться понятным статусом и логами.`,
"shortAnswer": `Что такое pipeline Pipeline — автоматизированная последовательность стадий от изменения кода до проверенного артефакта и, при необходимости, деплоя.  Ключевые моменты: Типичные шаги: checkout → install → lint → test → build → security checks → publish artifact → deploy.`,
},
{
"id": `18-junior-общее-3`,
"title": `Jenkins, GitHub Actions.`,
"fullAnswer": `## Jenkins и GitHub Actions

Jenkins — расширяемый CI/CD-сервер, который обычно разворачивает команда. GitHub Actions — CI/CD-платформа, встроенная в GitHub и описываемая workflow YAML-файлами.

**Ключевые моменты:**
- Оба умеют jobs, agents/runners, secrets и artifacts.
- Jenkins даёт больше самостоятельного контроля инфраструктуры.
- GitHub Actions тесно интегрирован с GitHub events и permissions.`,
"shortAnswer": `Jenkins и GitHub Actions Jenkins — расширяемый CI/CD-сервер, который обычно разворачивает команда.  GitHub Actions — CI/CD-платформа, встроенная в GitHub и описываемая workflow YAML-файлами.`,
},
{
"id": `18-junior-общее-4`,
"title": `Артефакт сборки, runner/agent, workflow/job/step.`,
"fullAnswer": `## Artifact, runner, workflow, job и step

Artifact — результат сборки, который можно хранить и передавать между этапами. Runner/agent — машина, выполняющая job. Workflow/pipeline состоит из jobs, а job — из steps.

**Ключевые моменты:**
- Artifact должен быть неизменяемым и версионированным.
- Jobs могут выполняться на разных runners.
- Steps одного job обычно разделяют workspace.`,
"shortAnswer": `Artifact, runner, workflow, job и step Artifact — результат сборки, который можно хранить и передавать между этапами.  Runner/agent — машина, выполняющая job.`,
},
{
"id": `18-junior-общее-5`,
"title": `Trigger, matrix build, environment, secrets, artifact, cache, workspace.`,
"fullAnswer": `## Trigger, matrix, environment, secrets, cache и workspace

Trigger запускает pipeline по событию или расписанию. Matrix создаёт несколько вариантов job, например разные версии Node. Environment описывает целевое окружение и его правила. Secrets хранят чувствительные значения, cache ускоряет повторные сборки, workspace содержит рабочие файлы job.

**Ключевые моменты:**
- Secrets не должны попадать в логи.
- Cache можно безопасно потерять — это только оптимизация.
- Matrix полезна для проверки совместимости.`,
"shortAnswer": `Trigger, matrix, environment, secrets, cache и workspace Trigger запускает pipeline по событию или расписанию.  Matrix создаёт несколько вариантов job, например разные версии Node.`,
},
{
"id": `18-junior-общее-6`,
"title": `Pipeline as code, Jenkinsfile, GitHub Actions YAML.`,
"fullAnswer": `## Pipeline as Code

Pipeline as Code означает, что CI/CD-конфигурация хранится рядом с кодом и проходит review/version control. Jenkins использует Jenkinsfile, GitHub Actions — YAML в \`.github/workflows\`.

**Ключевые моменты:**
- Изменения pipeline видны в истории Git.
- Конфигурацию можно переиспользовать через templates/shared libraries.
- Привилегированные deploy jobs нужно защищать permissions и approvals.`,
"shortAnswer": `Pipeline as Code Pipeline as Code означает, что CI/CD-конфигурация хранится рядом с кодом и проходит review/version control.  Jenkins использует Jenkinsfile, GitHub Actions — YAML в .`,
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
"id": `18-middle-общее-1`,
"title": `Кэширование зависимостей.`,
"fullAnswer": `## Кэширование dependencies в CI

Dependency cache сохраняет скачанные пакеты/артефакты между запусками pipeline и уменьшает время установки. Cache key должен зависеть от lock-file, OS/runtime и других факторов совместимости.

**Ключевые моменты:**
- Cache — оптимизация, а не источник истины; pipeline должен уметь восстановиться при cache miss.
- Не кэшируйте секреты.
- Различайте dependency cache и build artifacts.`,
"shortAnswer": `Кэширование dependencies в CI Dependency cache сохраняет скачанные пакеты/артефакты между запусками pipeline и уменьшает время установки.  Cache key должен зависеть от lock-file, OS/runtime и других факторов совместимости.`,
},
{
"id": `18-middle-общее-2`,
"title": `Стратегии деплоя: Rolling, Blue-Green, Canary.`,
"fullAnswer": `## Rolling, Blue-Green и Canary

Rolling постепенно заменяет экземпляры старой версии. Blue-Green держит две полноценные среды и переключает traffic. Canary сначала отправляет небольшой процент traffic на новую версию и расширяет rollout после проверки.

**Ключевые моменты:**
- Rolling экономичен, но некоторое время версии сосуществуют.
- Blue-Green даёт быстрый rollback ценой ресурсов.
- Canary снижает blast radius, но требует метрик и traffic control.`,
"shortAnswer": `Rolling, Blue-Green и Canary Rolling постепенно заменяет экземпляры старой версии.  Blue-Green держит две полноценные среды и переключает traffic.`,
},
{
"id": `18-middle-общее-3`,
"title": `Хранение секретов, GitOps, ArgoCD, Flux.`,
"fullAnswer": `## Secrets и GitOps

GitOps хранит желаемое состояние инфраструктуры/приложений в Git, а agent/controller (например Argo CD или Flux) синхронизирует runtime с репозиторием.

**Ключевые моменты:**
- Секреты нельзя хранить в Git открытым текстом; используют secret managers или encrypted/sealed secrets.
- Git history даёт audit trail и rollback желаемого состояния.
- Разделяйте app config и secret material.`,
"shortAnswer": `Secrets и GitOps GitOps хранит желаемое состояние инфраструктуры/приложений в Git, а agent/controller (например Argo CD или Flux) синхронизирует runtime с репозиторием.  Ключевые моменты: Секреты нельзя хранить в Git открытым текстом; используют secret managers или encrypted/sealed secrets.`,
},
{
"id": `18-middle-общее-4`,
"title": `Infrastructure as Code (IaC): Terraform, Ansible, Helm, Kubernetes manifests.`,
"fullAnswer": `## Infrastructure as Code

IaC описывает инфраструктуру декларативным или автоматизированным кодом, чтобы окружения были воспроизводимыми и ревьюились как обычные изменения.

**Ключевые моменты:**
- Terraform управляет ресурсами providers через state.
- Ansible чаще применяют для configuration management/procedural automation.
- Helm шаблонизирует Kubernetes resources.
- Kubernetes manifests описывают desired state объектов cluster.`,
"shortAnswer": `Infrastructure as Code IaC описывает инфраструктуру декларативным или автоматизированным кодом, чтобы окружения были воспроизводимыми и ревьюились как обычные изменения.  Ключевые моменты: Terraform управляет ресурсами providers через state.`,
},
{
"id": `18-middle-общее-5`,
"title": `Deployment strategies, feature flags (LaunchDarkly), progressive delivery, automated rollback.`,
"fullAnswer": `## Feature flags и progressive delivery

Feature flag отделяет deploy кода от release функциональности. Progressive delivery постепенно расширяет аудиторию новой версии/фичи на основе метрик и правил; automated rollback возвращает безопасную версию при деградации.

**Ключевые моменты:**
- У флагов должен быть owner и срок удаления.
- Не делайте security boundary только через client-side flag.
- Rollback должен учитывать миграции данных и backward compatibility.`,
"shortAnswer": `Feature flags и progressive delivery Feature flag отделяет deploy кода от release функциональности.  Progressive delivery постепенно расширяет аудиторию новой версии/фичи на основе метрик и правил; automated rollback возвращает безопасную версию при деградации.`,
},
{
"id": `18-middle-общее-6`,
"title": `Pipeline optimization: parallel execution, conditional execution, approval gates, manual/scheduled triggers.`,
"fullAnswer": `## Оптимизация pipeline

Pipeline ускоряют параллельным выполнением независимых jobs, кэшированием, запуском только затронутых проверок и правильным разделением быстрых feedback stages и дорогих stages.

**Ключевые моменты:**
- Approval gates нужны там, где требуется контроль риска/compliance.
- Manual/scheduled triggers не должны обходить обязательные security checks.
- Собирайте метрики duration, queue time, failure rate и flaky jobs.`,
"shortAnswer": `Оптимизация pipeline Pipeline ускоряют параллельным выполнением независимых jobs, кэшированием, запуском только затронутых проверок и правильным разделением быстрых feedback stages и дорогих stages.  Ключевые моменты: Approval gates нужны там, где требуется контроль риска/compliance.`,
},
{
"id": `18-middle-общее-7`,
"title": `Pipeline templates, shared libraries, pipeline security.`,
"fullAnswer": `## Pipeline templates и security

Templates/shared libraries уменьшают копирование CI-конфигурации и централизуют стандартные build/test/deploy практики. Их нужно версионировать, потому что изменение общей библиотеки способно затронуть много проектов.

**Ключевые моменты:**
- Минимизируйте permissions CI token.
- Pin сторонние actions/images по доверенным версиям/digest.
- Не выводите secrets в logs.
- Разделяйте untrusted PR code и privileged deployment jobs.`,
"shortAnswer": `Pipeline templates и security Templates/shared libraries уменьшают копирование CI-конфигурации и централизуют стандартные build/test/deploy практики.  Их нужно версионировать, потому что изменение общей библиотеки способно затронуть много проектов.`,
},
],
},
],
},
}
