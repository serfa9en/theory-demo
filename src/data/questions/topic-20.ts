import type { TopicQuestions } from '../../types/question'

export const topic20Questions: TopicQuestions = {
"id": 20,
"slug": `topic-20`,
"title": `Git`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `20-junior-общее-1`,
"title": `Git vs GitHub. Репозиторий.`,
"fullAnswer": `## Git, GitHub и repository

Git — распределённая система контроля версий. Repository содержит историю commits, branches, tags и рабочие файлы. GitHub — сервис хостинга Git-репозиториев с Pull Requests, Issues, Actions и управлением доступом.

**Ключевые моменты:**
- Git работает локально без GitHub.
- Remote связывает локальный repository с сервером.
- Commit — снимок изменений с метаданными.`,
"shortAnswer": `Git, GitHub и repository Git — распределённая система контроля версий.  Repository содержит историю commits, branches, tags и рабочие файлы.`,
},
{
"id": `20-junior-общее-2`,
"title": `Команды: init, clone, add, commit, status, log.`,
"fullAnswer": `## init, clone, add, commit, status, log

\`git init\` создаёт репозиторий, \`clone\` копирует существующий, \`add\` помещает изменения в staging area, \`commit\` фиксирует staged snapshot, \`status\` показывает состояние, \`log\` — историю.

**Пример:**

\`\`\`bash
git init
git add .
git commit -m "feat: add search"
git status
git log --oneline
\`\`\``,
"shortAnswer": `init, clone, add, commit, status, log git init создаёт репозиторий, clone копирует существующий, add помещает изменения в staging area, commit фиксирует staged snapshot, status показывает состояние, log — историю.`,
},
{
"id": `20-junior-общее-3`,
"title": `Ветки: создание, переключение, push, pull, fetch.`,
"fullAnswer": `## Ветки, push, pull и fetch

Branch — подвижный указатель на commit. \`push\` отправляет commits на remote. \`fetch\` скачивает новые refs без изменения текущей ветки. \`pull\` обычно делает fetch и затем merge/rebase в текущую ветку.

**Ключевые моменты:**
- Ветку создают через \`git switch -c feature\`.
- Перед push полезно синхронизировать удалённую историю.
- Поведение pull стоит настроить явно: merge или rebase.`,
"shortAnswer": `Ветки, push, pull и fetch Branch — подвижный указатель на commit.  push отправляет commits на remote.`,
},
{
"id": `20-junior-общее-4`,
"title": `.gitignore, stash, merge-конфликт.`,
"fullAnswer": `## .gitignore, stash и merge conflict

\`.gitignore\` исключает неотслеживаемые файлы по шаблонам. \`git stash\` временно сохраняет незакоммиченные изменения. Merge conflict возникает, когда Git не может автоматически объединить конкурирующие изменения.

**Ключевые моменты:**
- После ручного разрешения конфликтов файл нужно добавить и продолжить merge/rebase.
- Секрет, уже попавший в Git history, .gitignore не удалит.
- \`stash pop\` применяет stash и при успехе удаляет его.`,
"shortAnswer": `gitignore, stash и merge conflict . gitignore исключает неотслеживаемые файлы по шаблонам.`,
},
{
"id": `20-junior-общее-5`,
"title": `Pull Request / Merge Request.`,
"fullAnswer": `## Pull Request / Merge Request

PR/MR — запрос на объединение изменений одной ветки в другую с review, обсуждением и автоматическими проверками.

**Ключевые моменты:**
- Обычно содержит описание, связанные задачи и способ тестирования.
- CI должен проверять код до merge.
- Небольшие сфокусированные PR проще ревьюить.`,
"shortAnswer": `Pull Request / Merge Request PR/MR — запрос на объединение изменений одной ветки в другую с review, обсуждением и автоматическими проверками.  Ключевые моменты: Обычно содержит описание, связанные задачи и способ тестирования.`,
},
{
"id": `20-junior-общее-6`,
"title": `checkout, switch, restore, reset, revert.`,
"fullAnswer": `## checkout, switch, restore, reset и revert

\`switch\` предназначен для переключения веток, \`restore\` — для восстановления файлов. Старый \`checkout\` умеет оба действия. \`reset\` перемещает HEAD/индекс и может переписывать локальную историю, \`revert\` создаёт новый commit, отменяющий выбранный commit.

**Ключевые моменты:**
- Для общей опубликованной истории безопаснее revert.
- \`reset --hard\` удаляет незакоммиченные изменения.
- Перед потенциально разрушительной командой проверьте status/reflog.`,
"shortAnswer": `checkout, switch, restore, reset и revert switch предназначен для переключения веток, restore — для восстановления файлов.  Старый checkout умеет оба действия.`,
},
{
"id": `20-junior-общее-7`,
"title": `tag, branch, remote, origin.`,
"fullAnswer": `## Git: tag, branch, remote, origin

Branch — подвижный указатель на commit; tag обычно фиксирует конкретный commit (например release). Remote — сохранённое имя удалённого repository URL, а \`origin\` — стандартное имя remote, которое \`git clone\` создаёт по умолчанию.

**Ключевые моменты:**
- \`git branch\` управляет ветками.
- \`git tag\` создаёт/просматривает теги.
- \`git remote -v\` показывает remotes.
- \`origin\` — соглашение, его можно переименовать или иметь несколько remotes.`,
"shortAnswer": `Git: tag, branch, remote, origin Branch — подвижный указатель на commit; tag обычно фиксирует конкретный commit (например release).  Remote — сохранённое имя удалённого repository URL, а origin — стандартное имя remote, которое git clone создаёт по умолчанию.`,
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
"id": `20-middle-общее-1`,
"title": `merge vs rebase: разница и когда использовать.`,
"fullAnswer": `## Merge vs Rebase

Merge создаёт объединение histories (часто merge commit) и сохраняет исходное ветвление. Rebase переносит commits на новую базу, переписывая их hashes и создавая линейную историю.

**Ключевые моменты:**
- Не rebase-те опубликованную shared history без договорённости.
- Merge безопаснее сохраняет реальную topology.
- Rebase удобен для очистки локальной feature branch перед merge.
- После rebase push обычно требует \`--force-with-lease\`, а не грубый \`--force\`.`,
"shortAnswer": `Merge vs Rebase Merge создаёт объединение histories (часто merge commit) и сохраняет исходное ветвление.  Rebase переносит commits на новую базу, переписывая их hashes и создавая линейную историю.`,
},
{
"id": `20-middle-общее-2`,
"title": `cherry-pick, разрешение сложных конфликтов.`,
"fullAnswer": `## Cherry-pick и конфликты

\`git cherry-pick <commit>\` применяет изменения выбранного commit поверх текущей ветки как новый commit. При конфликте Git останавливается: исправляют файлы, \`git add\`, затем \`git cherry-pick --continue\` или \`--abort\`.

**Ключевые моменты:**
- Cherry-pick удобен для backport/hotfix, но массовое использование может дублировать history.
- При сложных конфликтах сначала поймите намерение обеих сторон, а не только добейтесь отсутствия conflict markers.`,
"shortAnswer": `Cherry-pick и конфликты git cherry-pick <commit> применяет изменения выбранного commit поверх текущей ветки как новый commit.  При конфликте Git останавливается: исправляют файлы, git add, затем git cherry-pick --continue или --abort.`,
},
{
"id": `20-middle-общее-3`,
"title": `Git Flow vs Trunk-Based Development.`,
"fullAnswer": `## Git Flow vs Trunk-Based Development

Git Flow использует долгоживущие ветки develop/release/hotfix и подходит процессам с формальными release cycles. Trunk-Based Development держит основную ветку всегда интегрируемой и использует короткоживущие branches, частые merges и feature flags.

**Ключевые моменты:**
- Trunk-based хорошо сочетается с CI/CD.
- Долгоживущие branches увеличивают integration risk.
- Выбор зависит от release/process constraints, а не моды.`,
"shortAnswer": `Git Flow vs Trunk-Based Development Git Flow использует долгоживущие ветки develop/release/hotfix и подходит процессам с формальными release cycles.  Trunk-Based Development держит основную ветку всегда интегрируемой и использует короткоживущие branches, частые merges и feature flags.`,
},
{
"id": `20-middle-общее-4`,
"title": `Git hooks, pre-commit hooks, conventional commits, semantic versioning.`,
"fullAnswer": `## Git hooks, Conventional Commits, SemVer

Git hooks запускают локальные скрипты на события вроде pre-commit/pre-push. Conventional Commits задаёт формат сообщения (\`feat:\`, \`fix:\` и т.п.), который можно использовать для changelog/release automation. SemVer использует MAJOR.MINOR.PATCH.

**Ключевые моменты:**
- Локальные hooks не являются security boundary — проверки дублируйте в CI.
- Breaking change повышает MAJOR, новая backward-compatible feature — MINOR, fix — PATCH.
- Инструменты типа lint-staged ускоряют pre-commit проверки.`,
"shortAnswer": `Git hooks, Conventional Commits, SemVer Git hooks запускают локальные скрипты на события вроде pre-commit/pre-push.  Conventional Commits задаёт формат сообщения (feat:, fix: и т.`,
},
{
"id": `20-middle-общее-5`,
"title": `git bisect, reflog, stash pop, worktree.`,
"fullAnswer": `## bisect, reflog, stash, worktree

\`git bisect\` бинарным поиском находит commit, внёсший регрессию. \`reflog\` хранит локальную историю перемещения refs и помогает восстановить «потерянный» commit. \`stash\` временно откладывает изменения. \`worktree\` позволяет checkout нескольких веток в разных директориях одного repo.

**Ключевые моменты:**
- \`stash pop\` применяет и удаляет stash при успехе; \`apply\` не удаляет.
- Reflog локален и имеет срок хранения.
- Bisect можно автоматизировать тестовой командой.`,
"shortAnswer": `bisect, reflog, stash, worktree git bisect бинарным поиском находит commit, внёсший регрессию.  reflog хранит локальную историю перемещения refs и помогает восстановить «потерянный» commit.`,
},
{
"id": `20-middle-общее-6`,
"title": `submodule, subtree, lfs, sparse checkout, shallow clone.`,
"fullAnswer": `## Submodule, subtree, LFS, sparse/shallow

Submodule хранит ссылку на commit другого repository. Subtree встраивает чужую history/содержимое в основной repo. Git LFS заменяет большие binary files pointer-ами. Sparse checkout получает рабочее дерево частично, shallow clone ограничивает depth истории.

**Ключевые моменты:**
- Submodule требует явного управления версиями вложенного repo.
- LFS требует server support/storage quota.
- Shallow clone полезен CI, но часть history-based операций ограничена.`,
"shortAnswer": `Submodule, subtree, LFS, sparse/shallow Submodule хранит ссылку на commit другого repository.  Subtree встраивает чужую history/содержимое в основной repo.`,
},
{
"id": `20-middle-общее-7`,
"title": `blame, log --graph, diff, show, clean, gc, fsck.`,
"fullAnswer": `## Git diagnostics и maintenance

\`git blame\` показывает commit/автора строк, \`log --graph\` визуализирует history, \`diff\` сравнивает изменения, \`show\` показывает объект/commit. \`clean\` удаляет untracked files, \`gc\` оптимизирует repository, \`fsck\` проверяет целостность объектов.

**Ключевые моменты:**
- \`git clean -n\` сначала показывает, что будет удалено.
- \`blame\` — инструмент исследования истории, не поиска виноватых.
- \`reflog\` часто полезнее \`fsck\` для восстановления после ошибочного reset/rebase.`,
"shortAnswer": `Git diagnostics и maintenance git blame показывает commit/автора строк, log --graph визуализирует history, diff сравнивает изменения, show показывает объект/commit.  clean удаляет untracked files, gc оптимизирует repository, fsck проверяет целостность объектов.`,
},
],
},
],
},
}
