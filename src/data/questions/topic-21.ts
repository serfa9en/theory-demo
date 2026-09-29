import type { TopicQuestions } from '../../types/question'

export const topic21Questions: TopicQuestions = {
"id": 21,
"slug": `topic-21`,
"title": `Код-ревью`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `21-junior-общее-1`,
"title": `Что такое код-ревью и зачем нужно?`,
"fullAnswer": `## Что такое code review

Code review — проверка изменений другим разработчиком до merge. Цель — найти дефекты, проверить требования и архитектуру, распространить знания и поддерживать единые практики команды.

**Ключевые моменты:**
- Review не заменяет тесты и автоматические анализаторы.
- Комментарий должен объяснять риск или причину.
- Проверяется не только style, но и correctness, security и maintainability.`,
"shortAnswer": `Что такое code review Code review — проверка изменений другим разработчиком до merge.  Цель — найти дефекты, проверить требования и архитектуру, распространить знания и поддерживать единые практики команды.`,
},
{
"id": `21-junior-общее-2`,
"title": `Commit-сообщения, читаемость кода, именование переменных, комментарии.`,
"fullAnswer": `## Commit messages, readability, naming и comments

Хороший код читается через структуру и имена. Commit message должен кратко описывать намерение изменения. Имена должны отражать смысл, а комментарии — объяснять причины и нетривиальные ограничения, а не повторять код.

**Ключевые моменты:**
- Избегайте слишком общих имён вроде data/tmp без контекста.
- Небольшие commits упрощают review и rollback.
- Устаревший комментарий хуже отсутствующего.`,
"shortAnswer": `Commit messages, readability, naming и comments Хороший код читается через структуру и имена.  Commit message должен кратко описывать намерение изменения.`,
},
{
"id": `21-junior-общее-3`,
"title": `Принципы: DRY, KISS, SOLID.`,
"fullAnswer": `## DRY, KISS и SOLID

DRY уменьшает дублирование знания, KISS предпочитает простое достаточное решение, SOLID — набор принципов проектирования OO-кода для управляемых зависимостей и изменений.

**Ключевые моменты:**
- Не абстрагируйте код только ради формального DRY.
- Простота важнее количества паттернов.
- SOLID — эвристики, а не обязательные законы для каждой функции.`,
"shortAnswer": `DRY, KISS и SOLID DRY уменьшает дублирование знания, KISS предпочитает простое достаточное решение, SOLID — набор принципов проектирования OO-кода для управляемых зависимостей и изменений.  Ключевые моменты: Не абстрагируйте код только ради формального DRY.`,
},
{
"id": `21-junior-общее-4`,
"title": `Code style, linting, formatting, code smells.`,
"fullAnswer": `## Code style, linting, formatting и code smells

Code style — договорённости о структуре кода. Linter ищет потенциальные ошибки и нарушения правил, formatter автоматически приводит оформление к единому виду. Code smell — признак возможной проблемы дизайна, который требует контекста.

**Ключевые моменты:**
- Механические правила лучше автоматизировать.
- Formatter снижает споры о пробелах и переносах.
- Code smell не всегда означает bug.`,
"shortAnswer": `Code style, linting, formatting и code smells Code style — договорённости о структуре кода.  Linter ищет потенциальные ошибки и нарушения правил, formatter автоматически приводит оформление к единому виду.`,
},
{
"id": `21-junior-общее-5`,
"title": `Technical debt, refactoring.`,
"fullAnswer": `## Technical debt и refactoring

Technical debt — накопленная стоимость упрощённых/устаревших решений, которая замедляет будущие изменения. Refactoring улучшает внутреннюю структуру кода без изменения наблюдаемого поведения.

**Ключевые моменты:**
- Долг полезно фиксировать и приоритизировать по риску.
- Refactoring должен поддерживаться тестами.
- Не смешивайте огромный refactor с несвязанной feature без необходимости.`,
"shortAnswer": `Technical debt и refactoring Technical debt — накопленная стоимость упрощённых/устаревших решений, которая замедляет будущие изменения.  Refactoring улучшает внутреннюю структуру кода без изменения наблюдаемого поведения.`,
},
{
"id": `21-junior-общее-6`,
"title": `Pair programming, mob programming, code ownership, CODEOWNERS, approval rules.`,
"fullAnswer": `## Pair/Mob programming, ownership, CODEOWNERS и approvals

Pair programming — два разработчика работают вместе, mob programming — группа над одной задачей. Code ownership определяет ответственность за области системы. CODEOWNERS автоматически назначает reviewers для путей, approval rules требуют нужного числа/типа согласований.

**Ключевые моменты:**
- Ownership не должен превращаться в запрет другим улучшать код.
- Pair/mob полезны для сложных задач и обмена знаниями.
- Critical areas могут требовать обязательного review владельца.`,
"shortAnswer": `Pair/Mob programming, ownership, CODEOWNERS и approvals Pair programming — два разработчика работают вместе, mob programming — группа над одной задачей.  Code ownership определяет ответственность за области системы.`,
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
"id": `21-middle-общее-1`,
"title": `Как поступить при несогласии с замечаниями? Constructive feedback.`,
"fullAnswer": `## Несогласие на code review

Обсуждайте не человека, а риск/требование/код. Сначала уточните, какую проблему пытается решить комментарий, затем приведите факты: требования, benchmark, style guide, тест или минимальный пример.

**Ключевые моменты:**
- Не превращайте review в соревнование за правоту.
- Если есть несколько нормальных решений — договоритесь о командном convention.
- Для затяжного спора быстрее перейти в короткий call и зафиксировать решение.
- Эскалируйте только когда затронуты существенные risk/security/architecture вопросы.`,
"shortAnswer": `Несогласие на code review Обсуждайте не человека, а риск/требование/код.  Сначала уточните, какую проблему пытается решить комментарий, затем приведите факты: требования, benchmark, style guide, тест или минимальный пример.`,
},
{
"id": `21-middle-общее-2`,
"title": `Автоматизация рутины: SonarQube, Checkstyle, ESLint, Prettier.`,
"fullAnswer": `## Автоматизация review

Статические анализаторы и formatter-ы должны автоматически проверять то, что машина проверяет лучше человека: style, часть bugs/security smells, форматирование и базовые quality gates.

**Ключевые моменты:**
- ESLint/Checkstyle — статические правила языка/стиля.
- Prettier — детерминированное форматирование.
- SonarQube агрегирует quality/security findings и метрики.
- Автоматизация не заменяет review бизнес-логики и архитектуры.`,
"shortAnswer": `Автоматизация review Статические анализаторы и formatter-ы должны автоматически проверять то, что машина проверяет лучше человека: style, часть bugs/security smells, форматирование и базовые quality gates.  Ключевые моменты: ESLint/Checkstyle — статические правила языка/стиля.`,
},
{
"id": `21-middle-общее-3`,
"title": `Метрики: code complexity, cyclomatic complexity, code coverage.`,
"fullAnswer": `## Complexity и coverage

Cyclomatic complexity приблизительно отражает число независимых путей выполнения и растёт с ветвлениями. Code coverage показывает, какая часть кода была выполнена тестами, но не доказывает качество assertions.

**Ключевые моменты:**
- Высокая сложность — сигнал рассмотреть декомпозицию, а не абсолютный запрет.
- 100% coverage может сосуществовать с плохими тестами.
- Смотрите branch coverage и risk-critical paths, а не только line percentage.`,
"shortAnswer": `Complexity и coverage Cyclomatic complexity приблизительно отражает число независимых путей выполнения и растёт с ветвлениями.  Code coverage показывает, какая часть кода была выполнена тестами, но не доказывает качество assertions.`,
},
{
"id": `21-middle-общее-4`,
"title": `Виды ревью: security, performance, accessibility, test coverage, documentation, API design, database schema, infrastructure.`,
"fullAnswer": `## Complexity и coverage

Cyclomatic complexity приблизительно отражает число независимых путей выполнения и растёт с ветвлениями. Code coverage показывает, какая часть кода была выполнена тестами, но не доказывает качество assertions.

**Ключевые моменты:**
- Высокая сложность — сигнал рассмотреть декомпозицию, а не абсолютный запрет.
- 100% coverage может сосуществовать с плохими тестами.
- Смотрите branch coverage и risk-critical paths, а не только line percentage.`,
"shortAnswer": `Complexity и coverage Cyclomatic complexity приблизительно отражает число независимых путей выполнения и растёт с ветвлениями.  Code coverage показывает, какая часть кода была выполнена тестами, но не доказывает качество assertions.`,
},
{
"id": `21-middle-общее-5`,
"title": `Security best practices, OWASP Top 10.`,
"fullAnswer": `## Security review и OWASP Top 10

Security review ищет классы рисков вроде broken access control, injection, cryptographic failures, insecure design/misconfiguration и vulnerable dependencies. OWASP Top 10 — ориентир по распространённым рискам, а не полный чек-лист безопасности.

**Ключевые моменты:**
- Проверяйте authorization на server side.
- Валидируйте input и используйте parameterized queries.
- Не храните secrets в source/logs.
- Обновляйте dependencies и включайте SAST/DAST/dependency scanning по риску.`,
"shortAnswer": `Security review и OWASP Top 10 Security review ищет классы рисков вроде broken access control, injection, cryptographic failures, insecure design/misconfiguration и vulnerable dependencies.  OWASP Top 10 — ориентир по распространённым рискам, а не полный чек-лист безопасности.`,
},
{
"id": `21-middle-общее-6`,
"title": `Code review anti-patterns, review fatigue, turnaround time.`,
"fullAnswer": `## Code review anti-patterns

Плохие паттерны: огромные PR, вкусовщина без правила, nitpicking вручную вместо lint, задержка review на дни, «LGTM» без чтения, агрессивная коммуникация и попытка перепроектировать весь проект в одном PR.

**Ключевые моменты:**
- Делайте PR небольшими и сфокусированными.
- Автоматизируйте mechanical checks.
- Определите ожидаемый turnaround time.
- Для сложного изменения приложите context/ADR/скриншоты/план тестирования.`,
"shortAnswer": `Code review anti-patterns Плохие паттерны: огромные PR, вкусовщина без правила, nitpicking вручную вместо lint, задержка review на дни, «LGTM» без чтения, агрессивная коммуникация и попытка перепроектировать весь проект в одном PR.  Ключевые моменты: Делайте PR небольшими и сфокусированными.`,
},
{
"id": `21-middle-общее-7`,
"title": `Egoless programming, growth mindset.`,
"fullAnswer": `## Egoless programming и growth mindset

Egoless programming отделяет самооценку разработчика от конкретного решения в коде: любой код можно улучшить, а review — совместная работа над качеством. Growth mindset воспринимает feedback как источник обучения.

**Ключевые моменты:**
- Критикуйте код/риск, а не автора.
- Объясняйте «почему», особенно менее опытным коллегам.
- Умейте менять мнение при появлении данных.
- Хвалите хорошие решения так же конкретно, как указываете проблемы.`,
"shortAnswer": `Egoless programming и growth mindset Egoless programming отделяет самооценку разработчика от конкретного решения в коде: любой код можно улучшить, а review — совместная работа над качеством.  Growth mindset воспринимает feedback как источник обучения.`,
},
],
},
],
},
}
