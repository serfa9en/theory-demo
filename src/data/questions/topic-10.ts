import type { TopicQuestions } from '../../types/question'

export const topic10Questions: TopicQuestions = {
"id": 10,
"slug": `topic-10`,
"title": `Python Django`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `10-junior-общее-1`,
"title": `Django и паттерн MTV.`,
"fullAnswer": `**Django** — это высокоуровневый Python-фреймворк для быстрой разработки веб-приложений. Следует принципу «батарейки включены» — из коробки предоставляет ORM, админку, систему аутентификации, шаблонизатор, работу с формами и многое другое.

**Паттерн MTV (Model-Template-View):**
Django использует вариацию классического паттерна MVC, называемую MTV.

**Model (Модель):**
Отвечает за работу с данными. Определяет структуру базы данных через Python-классы. Django ORM автоматически создаёт SQL-таблицы на основе моделей.

**Template (Шаблон):**
Отвечает за отображение данных (представление). Это HTML-файлы с встроенным языком шаблонов Django (Django Template Language, DTL). Шаблон получает данные из View и рендерит их в HTML.

**View (Представление):**
Отвечает за бизнес-логику. Получает запрос от пользователя, взаимодействует с Model для получения данных, передаёт данные в Template и возвращает HTTP-ответ.

**Сравнение с MVC:**
В классическом MVC: Model — данные, View — отображение, Controller — логика. В Django MTV: Model соответствует Model, Template соответствует View (отображение), View соответствует Controller (логика). То есть Django View — это аналог MVC Controller, а Django Template — это аналог MVC View.

**Пример взаимодействия:**
Пользователь запрашивает страницу списка пользователей. URL routing направляет запрос во View. View обращается к Model User, получает список пользователей из БД. View передаёт список в Template user_list.html. Template рендерит HTML и возвращает его пользователю.

**Пример кода:**

\`\`\`python
&#35; models&#46;py &#40;Model&#41;
from django&#46;db import models

class User&#40;models&#46;Model&#41;&#58;
    name &#61; models&#46;CharField&#40;max_length&#61;100&#41;
    email &#61; models&#46;EmailField&#40;unique&#61;True&#41;

    def __str__&#40;self&#41;&#58;
        return self&#46;name
\`\`\`

\`\`\`python
&#35; views&#46;py &#40;View&#41;
from django&#46;shortcuts import render
from &#46;models import User

def user_list&#40;request&#41;&#58;
    users &#61; User&#46;objects&#46;all&#40;&#41;
    return render&#40;request&#44; &#39;user_list&#46;html&#39;&#44; &#123;&#39;users&#39;&#58; users&#125;&#41;
\`\`\`

\`\`\`html
&#60;&#33;&#45;&#45; templates&#47;user_list&#46;html &#40;Template&#41; &#45;&#45;&#62;
&#60;ul&#62;
&#123;% for user in users %&#125;
    &#60;li&#62;&#123;&#123; user&#46;name &#125;&#125; &#40;&#123;&#123; user&#46;email &#125;&#125;&#41;&#60;&#47;li&#62;
&#123;% endfor %&#125;
&#60;&#47;ul&#62;
\`\`\`

**Преимущества Django:**
- Быстрая разработка благодаря встроенным компонентам
- Мощная ORM, не требующая написания SQL
- Админка генерируется автоматически по моделям
- Встроенная система безопасности (защита от CSRF, XSS, SQL-инъекций)
- Отличная документация и большое сообщество

**Недостатки Django:**
- Тяжеловесный для простых API (лучше подходит FastAPI или Flask)
- Монолитная архитектура по умолчанию
- Сложнее масштабировать по сравнению с микросервисами
- ORM иногда генерирует неоптимальные SQL-запросы

**Для собеседования:** Django — Python-фреймворк «всё включено». Паттерн MTV: Model — данные и БД, Template — HTML-отображение, View — бизнес-логика. Django View аналогичен MVC Controller, Django Template аналогичен MVC View.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-junior-общее-2`,
"title": `Модели, миграции, Django Admin.`,
"fullAnswer": `**Модели в Django:**
Модель — это Python-класс, наследующий от \`models.Model\`. Каждая модель соответствует таблице в базе данных, каждый атрибут — полю таблицы.

\`\`\`python
from django&#46;db import models

class Article&#40;models&#46;Model&#41;&#58;
    title &#61; models&#46;CharField&#40;max_length&#61;200&#41;
    content &#61; models&#46;TextField&#40;&#41;
    created_at &#61; models&#46;DateTimeField&#40;auto_now_add&#61;True&#41;
    is_published &#61; models&#46;BooleanField&#40;default&#61;False&#41;
    author &#61; models&#46;ForeignKey&#40;&#39;User&#39;&#44; on_delete&#61;models&#46;CASCADE&#41;

    class Meta&#58;
        ordering &#61; &#91;&#39;-created_at&#39;&#93;
        verbose_name &#61; &#39;Статья&#39;
        verbose_name_plural &#61; &#39;Статьи&#39;

    def __str__&#40;self&#41;&#58;
        return self&#46;title
\`\`\`

**Основные типы полей:**
- \`CharField\` — строка ограниченной длины (требует max_length)
- \`TextField\` — длинный текст
- \`IntegerField\`, \`FloatField\`, \`DecimalField\` — числа
- \`BooleanField\` — true/false
- \`DateField\`, \`DateTimeField\` — дата и время
- \`EmailField\`, \`URLField\`, \`SlugField\` — специализированные строки
- \`ForeignKey\` — связь «один ко многим»
- \`ManyToManyField\` — связь «многие ко многим»
- \`OneToOneField\` — связь «один к одному»
- \`FileField\`, \`ImageField\` — файлы и изображения

**Параметры полей:**
- \`null\` — разрешить NULL в БД
- \`blank\` — разрешить пустое значение в формах
- \`default\` — значение по умолчанию
- \`unique\` — уникальность
- \`choices\` — список допустимых значений
- \`help_text\` — подсказка для форм и админки

**Миграции:**
Миграции — это способ Django отслеживать изменения моделей и применять их к базе данных.

**Команды миграций:**
\`\`\`bash
&#35; Создать файлы миграций на основе изменений в models&#46;py
python manage&#46;py makemigrations

&#35; Применить миграции к базе данных
python manage&#46;py migrate

&#35; Показать статус миграций
python manage&#46;py showmigrations

&#35; Откатить последнюю миграцию
python manage&#46;py migrate app_name 0001

&#35; Создать суперпользователя для админки
python manage&#46;py createsuperuser
\`\`\`

**Как работают миграции:**
Когда вы меняете модель и запускаете \`makemigrations\`, Django создаёт файл в папке \`migrations/\` с описанием изменений. Файл имеет номер (0001, 0002 и т.д.). При запуске \`migrate\` Django применяет эти изменения к реальной базе данных и запоминает применённые миграции в таблице \`django_migrations\`.

**Django Admin:**
Встроенная админ-панель для управления данными. Генерируется автоматически на основе моделей.

**Регистрация модели в админке:**
\`\`\`python
&#35; admin&#46;py
from django&#46;contrib import admin
from &#46;models import Article

&#64;admin&#46;register&#40;Article&#41;
class ArticleAdmin&#40;admin&#46;ModelAdmin&#41;&#58;
    list_display &#61; &#91;&#39;title&#39;&#44; &#39;author&#39;&#44; &#39;created_at&#39;&#44; &#39;is_published&#39;&#93;
    list_filter &#61; &#91;&#39;is_published&#39;&#44; &#39;created_at&#39;&#93;
    search_fields &#61; &#91;&#39;title&#39;&#44; &#39;content&#39;&#93;
    ordering &#61; &#91;&#39;-created_at&#39;&#93;
    list_editable &#61; &#91;&#39;is_published&#39;&#93;
\`\`\`

**Параметры ModelAdmin:**
- \`list_display\` — поля, отображаемые в списке
- \`list_filter\` — фильтры в правой панели
- \`search_fields\` — поля для поиска
- \`ordering\` — сортировка по умолчанию
- \`list_editable\` — поля, редактируемые прямо в списке
- \`readonly_fields\` — поля только для чтения
- \`prepopulated_fields\` — автозаполнение (например, slug из title)

**Доступ к админке:**
После запуска сервера админка доступна по адресу \`/admin/\`. Для входа нужен суперпользователь, созданный через \`createsuperuser\`.

**Для собеседования:** Модель — Python-класс, описывающий таблицу БД. Миграции создаются через \`makemigrations\` и применяются через \`migrate\`. Django Admin — встроенная админка, регистрируется через \`@admin.register\` с настройками отображения, фильтрации и поиска.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-junior-общее-3`,
"title": `Django ORM: .all(), .filter(), .get().`,
"fullAnswer": `**Django ORM (Object-Relational Mapping)** — позволяет работать с базой данных через Python-объекты, без написания SQL.

**Менеджер объектов:**
У каждой модели есть атрибут \`objects\` — это менеджер, через который выполняются запросы к БД.

**\`.all()\` — получить все записи:**
Возвращает QuerySet со всеми объектами модели. QuerySet ленивый — запрос к БД выполняется только при реальном использовании данных.

\`\`\`python
&#35; Получить все статьи
articles &#61; Article&#46;objects&#46;all&#40;&#41;

&#35; QuerySet ленивый &#45; запрос выполнится здесь&#58;
for article in articles&#58;
    print&#40;article&#46;title&#41;

&#35; Или здесь&#58;
article_list &#61; list&#40;articles&#41;
\`\`\`

**\`.filter()\` — фильтрация:**
Возвращает QuerySet с объектами, удовлетворяющими условию. Можно комбинировать несколько условий.

\`\`\`python
&#35; Простая фильтрация
published &#61; Article&#46;objects&#46;filter&#40;is_published&#61;True&#41;

&#35; Несколько условий &#40;логическое И&#41;
recent_published &#61; Article&#46;objects&#46;filter&#40;
    is_published&#61;True&#44;
    created_at__year&#61;2024
&#41;

&#35; Поиск по подстроке
search &#61; Article&#46;objects&#46;filter&#40;title__contains&#61;&#39;Django&#39;&#41;

&#35; Точное совпадение
exact &#61; Article&#46;objects&#46;filter&#40;title__exact&#61;&#39;Hello&#39;&#41;

&#35; Больше&#47;меньше
expensive &#61; Product&#46;objects&#46;filter&#40;price__gt&#61;1000&#41;
cheap &#61; Product&#46;objects&#46;filter&#40;price__lte&#61;500&#41;

&#35; В списке
ids &#61; &#91;1&#44; 2&#44; 3&#93;
articles &#61; Article&#46;objects&#46;filter&#40;id__in&#61;ids&#41;

&#35; Исключение
not_published &#61; Article&#46;objects&#46;exclude&#40;is_published&#61;True&#41;
\`\`\`

**Двойное подчёркивание (\`__\`) — lookup expressions:**
- \`__exact\` — точное совпадение
- \`__contains\` — содержит подстроку (регистрозависимо)
- \`__icontains\` — содержит (регистронезависимо)
- \`__startswith\`, \`__endswith\` — начинается/заканчивается
- \`__gt\`, \`__gte\`, \`__lt\`, \`__lte\` — больше, больше или равно, меньше, меньше или равно
- \`__in\` — значение в списке
- \`__range\` — диапазон
- \`__year\`, \`__month\`, \`__day\` — части даты
- \`__isnull\` — проверка на NULL

**\`.get()\` — получить один объект:**
Возвращает один объект. Если не найдено — raises \`DoesNotExist\`. Если найдено несколько — raises \`MultipleObjectsReturned\`.

\`\`\`python
&#35; Получить одну статью по ID
article &#61; Article&#46;objects&#46;get&#40;id&#61;1&#41;

&#35; Получить по уникальному полю
user &#61; User&#46;objects&#46;get&#40;email&#61;&#39;test&#64;example&#46;com&#39;&#41;

&#35; Обработка ошибок
try&#58;
    article &#61; Article&#46;objects&#46;get&#40;id&#61;999&#41;
except Article&#46;DoesNotExist&#58;
    article &#61; None
except Article&#46;MultipleObjectsReturned&#58;
    article &#61; None
\`\`\`

**\`.first()\` и \`.last()\`:**
Возвращают первый или последний объект из QuerySet, или None если пусто. Не вызывают исключений.

\`\`\`python
first_article &#61; Article&#46;objects&#46;all&#40;&#41;&#46;first&#40;&#41;
last_article &#61; Article&#46;objects&#46;all&#40;&#41;&#46;last&#40;&#41;
\`\`\`

**\`.count()\` — количество:**
\`\`\`python
count &#61; Article&#46;objects&#46;filter&#40;is_published&#61;True&#41;&#46;count&#40;&#41;
\`\`\`

**\`.exists()\` — проверка наличия:**
\`\`\`python
if Article&#46;objects&#46;filter&#40;title&#61;&#39;Hello&#39;&#41;&#46;exists&#40;&#41;&#58;
    print&#40;&#39;Статья существует&#39;&#41;
\`\`\`

**Цепочки методов (chaining):**
QuerySet методы можно вызывать цепочкой — каждый метод возвращает новый QuerySet.

\`\`\`python
articles &#61; &#40;
    Article&#46;objects
    &#46;filter&#40;is_published&#61;True&#41;
    &#46;exclude&#40;title__icontains&#61;&#39;draft&#39;&#41;
    &#46;order_by&#40;&#39;-created_at&#39;&#41;
    &#91;&#58;10&#93;  &#35; Первые 10
&#41;
\`\`\`

**Создание и обновление объектов:**
\`\`\`python
&#35; Создание
article &#61; Article&#46;objects&#46;create&#40;
    title&#61;&#39;Новая статья&#39;&#44;
    content&#61;&#39;Текст&#39;
&#41;

&#35; Или через save&#40;&#41;
article &#61; Article&#40;title&#61;&#39;Новая&#39;&#41;
article&#46;save&#40;&#41;

&#35; Обновление
article&#46;title &#61; &#39;Обновлённый заголовок&#39;
article&#46;save&#40;&#41;

&#35; Массовое обновление
Article&#46;objects&#46;filter&#40;is_published&#61;False&#41;&#46;update&#40;is_published&#61;True&#41;

&#35; Удаление
article&#46;delete&#40;&#41;
Article&#46;objects&#46;filter&#40;is_published&#61;False&#41;&#46;delete&#40;&#41;
\`\`\`

**Для собеседования:** \`.all()\` возвращает все объекты (ленивый QuerySet). \`.filter()\` фильтрует по условиям с lookup expressions через \`__\`. \`.get()\` возвращает один объект, вызывает исключения если не найдено или найдено несколько. Методы можно комбинировать в цепочки.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-junior-общее-4`,
"title": `Views, Templates, URL routing (urls.py).`,
"fullAnswer": `**URL routing (urls.py):**
Маршрутизация в Django связывает URL с view-функциями. Главный файл — \`urls.py\` в проекте.

\`\`\`python
&#35; project&#47;urls&#46;py
from django&#46;contrib import admin
from django&#46;urls import path&#44; include

urlpatterns &#61; &#91;
    path&#40;&#39;admin&#47;&#39;&#44; admin&#46;site&#46;urls&#41;&#44;
    path&#40;&#39;articles&#47;&#39;&#44; include&#40;&#39;articles&#46;urls&#39;&#41;&#41;&#44;
    path&#40;&#39;&#39;&#44; include&#40;&#39;main&#46;urls&#39;&#41;&#41;&#44;
&#93;
\`\`\`

**Функция \`path()\`:**
Принимает маршрут, view и имя.
\`\`\`python
from django&#46;urls import path
from &#46; import views

urlpatterns &#61; &#91;
    path&#40;&#39;&#39;&#44; views&#46;home&#44; name&#61;&#39;home&#39;&#41;&#44;
    path&#40;&#39;about&#47;&#39;&#44; views&#46;about&#44; name&#61;&#39;about&#39;&#41;&#44;
    path&#40;&#39;articles&#47;&#60;int&#58;article_id&#62;&#47;&#39;&#44; views&#46;article_detail&#44; name&#61;&#39;article_detail&#39;&#41;&#44;
    path&#40;&#39;articles&#47;&#60;slug&#58;slug&#62;&#47;&#39;&#44; views&#46;article_by_slug&#44; name&#61;&#39;article_by_slug&#39;&#41;&#44;
&#93;
\`\`\`

**Конвертеры путей:**
- \`str\` — любая строка без \`/\` (по умолчанию)
- \`int\` — целое число
- \`slug\` — строка из букв, цифр, дефисов и подчёркиваний
- \`uuid\` — UUID
- \`path\` — любая строка, включая \`/\`

**Функция \`re_path()\`** для регулярных выражений:
\`\`\`python
from django&#46;urls import re_path

urlpatterns &#61; &#91;
    re_path&#40;r&#39;&#94;articles&#47;&#40;&#63;P&#60;year&#62;&#91;0-9&#93;&#123;4&#125;&#41;&#47;$&#39;&#44; views&#46;articles_by_year&#41;&#44;
&#93;
\`\`\`

**Views (Представления):**
View — функция или класс, обрабатывающий HTTP-запрос и возвращающий HTTP-ответ.

**Function-Based Views (FBV):**
\`\`\`python
from django&#46;http import HttpResponse&#44; JsonResponse
from django&#46;shortcuts import render&#44; get_object_or_404
from &#46;models import Article

def home&#40;request&#41;&#58;
    return HttpResponse&#40;&#39;Главная страница&#39;&#41;

def article_list&#40;request&#41;&#58;
    articles &#61; Article&#46;objects&#46;filter&#40;is_published&#61;True&#41;
    context &#61; &#123;&#39;articles&#39;&#58; articles&#125;
    return render&#40;request&#44; &#39;articles&#47;list&#46;html&#39;&#44; context&#41;

def article_detail&#40;request&#44; article_id&#41;&#58;
    article &#61; get_object_or_404&#40;Article&#44; id&#61;article_id&#41;
    return render&#40;request&#44; &#39;articles&#47;detail&#46;html&#39;&#44; &#123;&#39;article&#39;&#58; article&#125;&#41;
\`\`\`

**Class-Based Views (CBV):**
\`\`\`python
from django&#46;views&#46;generic import ListView&#44; DetailView&#44; CreateView
from &#46;models import Article

class ArticleListView&#40;ListView&#41;&#58;
    model &#61; Article
    template_name &#61; &#39;articles&#47;list&#46;html&#39;
    context_object_name &#61; &#39;articles&#39;
    paginate_by &#61; 10

class ArticleDetailView&#40;DetailView&#41;&#58;
    model &#61; Article
    template_name &#61; &#39;articles&#47;detail&#46;html&#39;
\`\`\`

**Templates (Шаблоны):**
HTML-файлы с языком шаблонов Django (DTL).

**Переменные:**
\`\`\`html
&#60;h1&#62;&#123;&#123; title &#125;&#125;&#60;&#47;h1&#62;
&#60;p&#62;&#123;&#123; user&#46;name | upper &#125;&#125;&#60;&#47;p&#62;  &#35; Фильтр upper
&#60;p&#62;&#123;&#123; price | floatformat&#58;2 &#125;&#125;&#60;&#47;p&#62;  &#35; 2 знака после запятой
\`\`\`

**Теги:**
\`\`\`html
&#123;% if user&#46;is_authenticated %&#125;
    &#60;p&#62;Привет&#44; &#123;&#123; user&#46;username &#125;&#125;&#33;&#60;&#47;p&#62;
&#123;% else %&#125;
    &#60;p&#62;Гость&#60;&#47;p&#62;
&#123;% endif %&#125;

&#123;% for article in articles %&#125;
    &#60;div&#62;
        &#60;h2&#62;&#123;&#123; article&#46;title &#125;&#125;&#60;&#47;h2&#62;
        &#60;p&#62;&#123;&#123; article&#46;content | truncatewords&#58;30 &#125;&#125;&#60;&#47;p&#62;
    &#60;&#47;div&#62;
&#123;% empty %&#125;
    &#60;p&#62;Нет статей&#60;&#47;p&#62;
&#123;% endfor %&#125;

&#123;% url &#39;article_detail&#39; article&#46;id %&#125;  &#35; Генерация URL
&#123;% include &#39;header&#46;html&#39; %&#125;  &#35; Включение другого шаблона
&#123;% extends &#39;base&#46;html&#39; %&#125;  &#35; Наследование шаблона
\`\`\`

**Наследование шаблонов:**
\`\`\`html
&#60;&#33;&#45;&#45; base&#46;html &#45;&#45;&#62;
&#60;html&#62;
&#60;body&#62;
    &#123;% block content %&#125;&#123;% endblock %&#125;
&#60;&#47;body&#62;
&#60;&#47;html&#62;

&#60;&#33;&#45;&#45; article&#46;html &#45;&#45;&#62;
&#123;% extends &#39;base&#46;html&#39; %&#125;
&#123;% block content %&#125;
    &#60;h1&#62;&#123;&#123; article&#46;title &#125;&#125;&#60;&#47;h1&#62;
&#123;% endblock %&#125;
\`\`\`

**Расположение шаблонов:**
Django ищет шаблоны в папке \`templates/\` внутри каждого приложения и в папке \`templates/\` проекта (настраивается в \`TEMPLATES\` в \`settings.py\`).

**Для собеседования:** URL routing через \`path()\` в \`urls.py\` с конвертерами (\`int\`, \`str\`, \`slug\`). Views бывают function-based и class-based. Templates используют DTL с переменными \`&#123;&#123; &#125;&#125;\` и тегами \`&#123;% %&#125;\`. Поддерживается наследование шаблонов через \`extends\` и \`block\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-junior-общее-5`,
"title": `Context processor, middleware, формы, ModelForm.`,
"fullAnswer": `**Context Processors:**
Функции, которые добавляют переменные в контекст каждого шаблона. Полезно для данных, используемых на всех страницах (например, информация о пользователе, настройки сайта).

\`\`\`python
&#35; context_processors&#46;py
def site_settings&#40;request&#41;&#58;
    return &#123;
        &#39;site_name&#39;&#58; &#39;Мой сайт&#39;&#44;
        &#39;current_year&#39;&#58; 2024&#44;
    &#125;
\`\`\`

**Подключение в settings.py:**
\`\`\`python
TEMPLATES &#61; &#91;
    &#123;
        &#39;OPTIONS&#39;&#58; &#123;
            &#39;context_processors&#39;&#58; &#91;
                &#39;django&#46;template&#46;context_processors&#46;request&#39;&#44;
                &#39;django&#46;contrib&#46;auth&#46;context_processors&#46;auth&#39;&#44;
                &#39;myapp&#46;context_processors&#46;site_settings&#39;&#44;
            &#93;&#44;
        &#125;&#44;
    &#125;&#44;
&#93;
\`\`\`

Теперь \`&#123;&#123; site_name &#125;&#125;\` доступен во всех шаблонах.

**Middleware:**
Middleware — функции, обрабатывающие запрос до view и ответ после view. Работают как цепочка.

**Встроенные middleware Django:**
- \`SecurityMiddleware\` — HTTPS, HSTS
- \`SessionMiddleware\` — работа с сессиями
- \`CommonMiddleware\` — APPEND_SLASH, ETag
- \`CsrfViewMiddleware\` — защита от CSRF
- \`AuthenticationMiddleware\` — привязка пользователя к запросу
- \`MessageMiddleware\` — flash-сообщения

**Собственный middleware:**
\`\`\`python
&#35; middleware&#46;py
class RequestLoggingMiddleware&#58;
    def __init__&#40;self&#44; get_response&#41;&#58;
        self&#46;get_response &#61; get_response

    def __call__&#40;self&#44; request&#41;&#58;
        &#35; До view
        print&#40;f&quot;Запрос&#58; &#123;request&#46;method&#125; &#123;request&#46;path&#125;&quot;&#41;
        
        response &#61; self&#46;get_response&#40;request&#41;
        
        &#35; После view
        print&#40;f&quot;Ответ&#58; &#123;response&#46;status_code&#125;&quot;&#41;
        return response
\`\`\`

**Регистрация в settings.py:**
\`\`\`python
MIDDLEWARE &#61; &#91;
    &#39;django&#46;middleware&#46;security&#46;SecurityMiddleware&#39;&#44;
    &#39;myapp&#46;middleware&#46;RequestLoggingMiddleware&#39;&#44;
&#93;
\`\`\`

**Формы (Forms):**
Django предоставляет мощную систему форм для валидации и обработки пользовательского ввода.

**Обычная форма:**
\`\`\`python
&#35; forms&#46;py
from django import forms

class ContactForm&#40;forms&#46;Form&#41;&#58;
    name &#61; forms&#46;CharField&#40;max_length&#61;100&#44; label&#61;&#39;Имя&#39;&#41;
    email &#61; forms&#46;EmailField&#40;label&#61;&#39;Email&#39;&#41;
    message &#61; forms&#46;CharField&#40;widget&#61;forms&#46;Textarea&#44; label&#61;&#39;Сообщение&#39;&#41;
    
    def clean_email&#40;self&#41;&#58;
        email &#61; self&#46;cleaned_data&#46;get&#40;&#39;email&#39;&#41;
        if &#39;spam&#39; in email&#58;
            raise forms&#46;ValidationError&#40;&#39;Email содержит запрещённое слово&#39;&#41;
        return email
\`\`\`

**Использование во view:**
\`\`\`python
def contact_view&#40;request&#41;&#58;
    if request&#46;method &#61;&#61; &#39;POST&#39;&#58;
        form &#61; ContactForm&#40;request&#46;POST&#41;
        if form&#46;is_valid&#40;&#41;&#58;
            &#35; Обработать данные
            name &#61; form&#46;cleaned_data&#91;&#39;name&#39;&#93;
            &#35; &#46;&#46;&#46;
            return redirect&#40;&#39;success&#39;&#41;
    else&#58;
        form &#61; ContactForm&#40;&#41;
    
    return render&#40;request&#44; &#39;contact&#46;html&#39;&#44; &#123;&#39;form&#39;&#58; form&#125;&#41;
\`\`\`

**ModelForm — форма на основе модели:**
Автоматически создаёт форму из модели, включая валидацию.

\`\`\`python
&#35; forms&#46;py
from django&#46;forms import ModelForm
from &#46;models import Article

class ArticleForm&#40;ModelForm&#41;&#58;
    class Meta&#58;
        model &#61; Article
        fields &#61; &#91;&#39;title&#39;&#44; &#39;content&#39;&#44; &#39;is_published&#39;&#93;
        widgets &#61; &#123;
            &#39;title&#39;&#58; forms&#46;TextInput&#40;attrs&#61;&#123;&#39;class&#39;&#58; &#39;form-control&#39;&#125;&#41;&#44;
            &#39;content&#39;&#58; forms&#46;Textarea&#40;attrs&#61;&#123;&#39;rows&#39;&#58; 5&#125;&#41;&#44;
        &#125;
        labels &#61; &#123;
            &#39;title&#39;&#58; &#39;Заголовок&#39;&#44;
            &#39;content&#39;&#58; &#39;Содержание&#39;&#44;
        &#125;
        help_texts &#61; &#123;
            &#39;title&#39;&#58; &#39;Максимум 200 символов&#39;&#44;
        &#125;
\`\`\`

**Использование ModelForm:**
\`\`\`python
def create_article&#40;request&#41;&#58;
    if request&#46;method &#61;&#61; &#39;POST&#39;&#58;
        form &#61; ArticleForm&#40;request&#46;POST&#41;
        if form&#46;is_valid&#40;&#41;&#58;
            article &#61; form&#46;save&#40;&#41;  &#35; Сохраняет в БД
            return redirect&#40;&#39;article_detail&#39;&#44; article&#46;id&#41;
    else&#58;
        form &#61; ArticleForm&#40;&#41;
    
    return render&#40;request&#44; &#39;article_form&#46;html&#39;&#44; &#123;&#39;form&#39;&#58; form&#125;&#41;
\`\`\`

**Рендеринг формы в шаблоне:**
\`\`\`html
&#60;form method&#61;&quot;post&quot;&#62;
    &#123;% csrf_token %&#125;
    &#123;&#123; form&#46;as_p &#125;&#125;  &#35; Автоматический рендер
    &#60;button type&#61;&quot;submit&quot;&#62;Отправить&#60;&#47;button&#62;
&#60;&#47;form&#62;

&#35; Или вручную&#58;
&#60;form method&#61;&quot;post&quot;&#62;
    &#123;% csrf_token %&#125;
    &#60;div&#62;
        &#60;label&#62;&#123;&#123; form&#46;title&#46;label &#125;&#125;&#60;&#47;label&#62;
        &#123;&#123; form&#46;title &#125;&#125;
        &#123;&#123; form&#46;title&#46;errors &#125;&#125;
    &#60;&#47;div&#62;
    &#60;button type&#61;&quot;submit&quot;&#62;Отправить&#60;&#47;button&#62;
&#60;&#47;form&#62;
\`\`\`

**Для собеседования:** Context processors добавляют переменные во все шаблоны. Middleware — цепочка обработчиков запроса/ответа. Forms — валидация пользовательского ввода. ModelForm автоматически создаёт форму из модели с валидацией и сохранением в БД через \`form.save()\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-junior-общее-6`,
"title": `Django REST Framework (DRF): Serializer, ViewSet, Router, аутентификация.`,
"fullAnswer": `**Django REST Framework (DRF)** — мощный toolkit для создания REST API на основе Django.

**Serializer (Сериализатор):**
Преобразует сложные объекты Django (модели, QuerySet) в JSON и обратно. Аналог Django Form, но для API.

\`\`\`python
&#35; serializers&#46;py
from rest_framework import serializers
from &#46;models import Article

class ArticleSerializer&#40;serializers&#46;ModelSerializer&#41;&#58;
    class Meta&#58;
        model &#61; Article
        fields &#61; &#91;&#39;id&#39;&#44; &#39;title&#39;&#44; &#39;content&#39;&#44; &#39;created_at&#39;&#44; &#39;author&#39;&#93;
        read_only_fields &#61; &#91;&#39;id&#39;&#44; &#39;created_at&#39;&#93;

&#35; Обычный Serializer &#40;не привязан к модели&#41;
class ContactSerializer&#40;serializers&#46;Serializer&#41;&#58;
    name &#61; serializers&#46;CharField&#40;max_length&#61;100&#41;
    email &#61; serializers&#46;EmailField&#40;&#41;
    message &#61; serializers&#46;CharField&#40;&#41;
    
    def validate_email&#40;self&#44; value&#41;&#58;
        if &#39;spam&#39; in value&#58;
            raise serializers&#46;ValidationError&#40;&#39;Недопустимый email&#39;&#41;
        return value
\`\`\`

**Использование сериализатора:**
\`\`\`python
&#35; Сериализация &#40;объект &#45;&#62; JSON&#41;
article &#61; Article&#46;objects&#46;get&#40;id&#61;1&#41;
serializer &#61; ArticleSerializer&#40;article&#41;
print&#40;serializer&#46;data&#41;  &#35; &#123;&#39;id&#39;&#58; 1&#44; &#39;title&#39;&#58; &#39;&#46;&#46;&#46;&#39;&#44; &#46;&#46;&#46;&#125;

&#35; Десериализация &#40;JSON &#45;&#62; объект&#41;
data &#61; &#123;&#39;title&#39;&#58; &#39;Новая&#39;&#44; &#39;content&#39;&#58; &#39;Текст&#39;&#125;
serializer &#61; ArticleSerializer&#40;data&#61;data&#41;
if serializer&#46;is_valid&#40;&#41;&#58;
    serializer&#46;save&#40;&#41;  &#35; Создаёт объект в БД
\`\`\`

**ViewSet:**
ViewSet объединяет логику нескольких view (list, create, retrieve, update, destroy) в один класс.

\`\`\`python
&#35; views&#46;py
from rest_framework import viewsets
from &#46;models import Article
from &#46;serializers import ArticleSerializer

class ArticleViewSet&#40;viewsets&#46;ModelViewSet&#41;&#58;
    queryset &#61; Article&#46;objects&#46;all&#40;&#41;
    serializer_class &#61; ArticleSerializer
    
    &#35; Переопределение методов
    def get_queryset&#40;self&#41;&#58;
        &#35; Фильтрация
        return Article&#46;objects&#46;filter&#40;is_published&#61;True&#41;
    
    def perform_create&#40;self&#44; serializer&#41;&#58;
        &#35; Дополнительная логика при создании
        serializer&#46;save&#40;author&#61;self&#46;request&#46;user&#41;
\`\`\`

**ModelViewSet предоставляет методы:**
- \`list\` — GET /articles/ (список)
- \`create\` — POST /articles/ (создание)
- \`retrieve\` — GET /articles/&#123;id&#125;/ (один объект)
- \`update\` — PUT /articles/&#123;id&#125;/ (полное обновление)
- \`partial_update\` — PATCH /articles/&#123;id&#125;/ (частичное обновление)
- \`destroy\` — DELETE /articles/&#123;id&#125;/ (удаление)

**Router:**
Автоматически генерирует URL-маршруты для ViewSet.

\`\`\`python
&#35; urls&#46;py
from django&#46;urls import path&#44; include
from rest_framework&#46;routers import DefaultRouter
from &#46;views import ArticleViewSet

router &#61; DefaultRouter&#40;&#41;
router&#46;register&#40;r&#39;articles&#39;&#44; ArticleViewSet&#41;

urlpatterns &#61; &#91;
    path&#40;&#39;&#39;&#44; include&#40;router&#46;urls&#41;&#41;&#44;
&#93;
\`\`\`

**Сгенерированные URL:**
- GET \`/articles/\` — список
- POST \`/articles/\` — создание
- GET \`/articles/&#123;pk&#125;/\` — один объект
- PUT \`/articles/&#123;pk&#125;/\` — обновление
- PATCH \`/articles/&#123;pk&#125;/\` — частичное обновление
- DELETE \`/articles/&#123;pk&#125;/\` — удаление

**Аутентификация в DRF:**

**1. Session Authentication (по умолчанию):**
Использует сессии Django. Подходит для web-приложений.

**2. Token Authentication:**
\`\`\`python
&#35; settings&#46;py
INSTALLED_APPS &#61; &#91;
    &#39;rest_framework&#46;authtoken&#39;&#44;
&#93;

REST_FRAMEWORK &#61; &#123;
    &#39;DEFAULT_AUTHENTICATION_CLASSES&#39;&#58; &#91;
        &#39;rest_framework&#46;authentication&#46;TokenAuthentication&#39;&#44;
    &#93;&#44;
&#125;
\`\`\`

\`\`\`python
&#35; Получение токена
from rest_framework&#46;authtoken&#46;models import Token

token&#44; created &#61; Token&#46;objects&#46;get_or_create&#40;user&#61;user&#41;
&#35; Токен передаётся в заголовке&#58; Authorization&#58; Token &#60;token&#62;
\`\`\`

**3. JWT Authentication (через djangorestframework-simplejwt):**
\`\`\`python
&#35; settings&#46;py
REST_FRAMEWORK &#61; &#123;
    &#39;DEFAULT_AUTHENTICATION_CLASSES&#39;&#58; &#91;
        &#39;rest_framework_simplejwt&#46;authentication&#46;JWTAuthentication&#39;&#44;
    &#93;&#44;
&#125;

&#35; urls&#46;py
from rest_framework_simplejwt&#46;views import TokenObtainPairView&#44; TokenRefreshView

urlpatterns &#61; &#91;
    path&#40;&#39;api&#47;token&#47;&#39;&#44; TokenObtainPairView&#46;as_view&#40;&#41;&#41;&#44;
    path&#40;&#39;api&#47;token&#47;refresh&#47;&#39;&#44; TokenRefreshView&#46;as_view&#40;&#41;&#41;&#44;
&#93;
\`\`\`

**Разрешения (Permissions):**
\`\`\`python
from rest_framework&#46;permissions import IsAuthenticated&#44; IsAdminUser

class ArticleViewSet&#40;viewsets&#46;ModelViewSet&#41;&#58;
    permission_classes &#61; &#91;IsAuthenticated&#93;  &#35; Только авторизованные
    
    &#35; Или для отдельных методов
    def get_permissions&#40;self&#41;&#58;
        if self&#46;action &#61;&#61; &#39;list&#39;&#58;
            return &#91;AllowAny&#40;&#41;&#93;
        return &#91;IsAuthenticated&#40;&#41;&#93;
\`\`\`

**Для собеседования:** DRF — toolkit для REST API. Serializer преобразует модели в JSON и обратно. ViewSet объединяет CRUD-операции в один класс. Router автоматически генерирует URL. Аутентификация: Session, Token, JWT (через simplejwt). Permissions контролируют доступ.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
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
"id": `10-middle-общее-1`,
"title": `select_related vs prefetch_related.`,
"fullAnswer": `Оба метода решают проблему N&#43;1 запроса&#44; но делают это по-разному и для разных типов связей.

**select_related:**
Создаёт SQL JOIN и извлекает связанные объекты в одном запросе к базе данных. Работает только для связей &#171;один к одному&#187; и &#171;многие к одному&#187; &#40;ForeignKey&#44; OneToOneField&#41;. Возвращает один большой QuerySet.

\`\`\`python
&#35; Один SQL запрос с JOIN
articles &#61; Article&#46;objects&#46;select_related&#40;&#39;author&#39;&#41;&#46;all&#40;&#41;
for article in articles&#58;
    print&#40;article&#46;author&#46;name&#41; &#35; Не вызывает дополнительный запрос
\`\`\`

**prefetch_related:**
Выполняет отдельный запрос для каждой связи&#44; а затем &#171;соединяет&#187; результаты на уровне Python. Используется для связей &#171;многие ко многим&#187; &#40;ManyToManyField&#41; и обратных ForeignKey &#40;reverse relations&#41;.

\`\`\`python
&#35; Два SQL запроса&#58; один для авторов&#44; один для их статей
authors &#61; Author&#46;objects&#46;prefetch_related&#40;&#39;articles&#39;&#41;&#46;all&#40;&#41;
for author in authors&#58;
    for article in author&#46;articles&#46;all&#40;&#41;&#58; &#35; Не вызывает запрос в цикле
        print&#40;article&#46;title&#41;
\`\`\`

**Ключевое различие:**
select_related делает JOIN на уровне SQL &#40;быстро для небольших связанных таблиц&#41;. prefetch_related делает отдельные запросы и джойнит в памяти &#40;необходимо для ManyToMany&#44; чтобы избежать декартова произведения строк&#41;.

**Для собеседования:** select_related использует SQL JOIN для ForeignKey и OneToOne. prefetch_related делает отдельные запросы и соединяет данные в Python для ManyToMany и reverse ForeignKey.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-2`,
"title": `Django Signals и их минусы.`,
"fullAnswer": `**Django Signals** &#8212; это реализация паттерна Наблюдатель &#40;Observer&#41;. Они позволяют слабым связанным приложениям получать уведомления о действиях&#44; происходящих в других частях фреймворка &#40;например&#44; post_save&#44; pre_delete&#41;.

**Пример использования:**
\`\`\`python
from django&#46;db&#46;models&#46;signals import post_save
from django&#46;dispatch import receiver

&#64;receiver&#40;post_save&#44; sender&#61;User&#41;
def create_user_profile&#40;sender&#44; instance&#44; created&#44; &#42;&#42;kwargs&#41;&#58;
    if created&#58;
        Profile&#46;objects&#46;create&#40;user&#61;instance&#41;
\`\`\`

**Минусы и проблемы сигналов:**

**1. Неявный поток управления:**
Логика размазана по коду. При сохранении модели сложно понять&#44; какие ещё функции выполнятся&#44; не изучая все подключенные сигналы. Это приводит к &#171;спагетти-коду&#187;.

**2. Сложность отладки:**
Трейсбеки в сигналах часто обрываются или выглядят запутанно&#44; так как сигнал вызывается асинхронно относительно основного кода сохранения.

**3. Проблемы с производительностью:**
Сигналы выполняются синхронно в том же потоке. Если в post_save запущена тяжёлая логика или отправка email&#44; это заблокирует ответ пользователю.

**4. Сложность тестирования:**
Сигналы нужно явно подключать и отключать в тестах&#44; иначе они будут срабатывать неожиданно и замедлять тестовый набор.

**5. Circular Imports:**
Часто приводят к циклическим импортам&#44; если сигнал и модель находятся в разных приложениях.

**Альтернатива:**
Переопределение метода save&#40;&#41; в модели или использование сервисного слоя &#40;Service Layer pattern&#41; для явного вызова логики.

**Для собеседования:** Signals &#8212; паттерн Observer. Минусы: неявная логика&#44; сложность отладки и тестирования&#44; риск circular imports&#44; блокировка потока. Рекомендуется переопределять save&#40;&#41; или использовать сервисный слой.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-3`,
"title": `Оптимизация запросов: annotate, aggregate, F() выражения, Q() объекты.`,
"fullAnswer": `**aggregate vs annotate:**

**aggregate** вычисляет сводные значения по всему QuerySet и возвращает словарь. Используется для получения общей статистики.

\`\`\`python
from django&#46;db&#46;models import Sum&#44; Avg

&#35; Вернёт &#123;&#39;total_revenue&#39;&#58; 50000&#125;
total &#61; Order&#46;objects&#46;aggregate&#40;total_revenue&#61;Sum&#40;&#39;amount&#39;&#41;&#41;
\`\`\`

**annotate** добавляет вычисляемое поле к каждому объекту в QuerySet. Используется для обогащения данных.

\`\`\`python
from django&#46;db&#46;models import Count

&#35; Добавит поле article_count к каждому автору
authors &#61; Author&#46;objects&#46;annotate&#40;article_count&#61;Count&#40;&#39;articles&#39;&#41;&#41;
\`\`\`

**F() выражения:**
Позволяют ссылаться на значения полей модели напрямую в запросе к базе данных&#44; не загружая их в память Python. Это предотвращает race conditions и ускоряет обновления.

\`\`\`python
from django&#46;db&#46;models import F

&#35; Увеличить цену на 10&#37; напрямую в БД
Product&#46;objects&#46;update&#40;price&#61;F&#40;&#39;price&#39;&#41; &#42; 1&#46;1&#41;

&#35; Фильтрация по сравнению двух полей
users &#61; User&#46;objects&#46;filter&#40;last_login__gt&#61;F&#40;&#39;date_joined&#39;&#41;&#41;
\`\`\`

**Q() объекты:**
Используются для построения сложных SQL-условий с операторами OR &#40;&#124;&#41;&#44; AND &#40;&#38;&#41; и NOT &#40;&#126;&#41;. Стандартный filter&#40;&#41; по умолчанию объединяет условия через AND.

\`\`\`python
from django&#46;db&#46;models import Q

&#35; Активные ИЛИ администраторы
users &#61; User&#46;objects&#46;filter&#40;Q&#40;is_active&#61;True&#41; &#124; Q&#40;is_staff&#61;True&#41;&#41;

&#35; НЕ администраторы
users &#61; User&#46;objects&#46;filter&#40;&#126;Q&#40;is_staff&#61;True&#41;&#41;
\`\`\`

**Для собеседования:** aggregate &#8212; сводка по всему набору&#44; annotate &#8212; поле для каждого объекта. F&#40;&#41; ссылается на поля БД для атомарных операций. Q&#40;&#41; позволяет делать сложные OR/NOT условия в filter.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-4`,
"title": `Транзакции: transaction.atomic, database routers.`,
"fullAnswer": `**transaction.atomic:**
Контекстный менеджер или декоратор&#44; гарантирующий&#44; что блок кода выполнится как единая транзакция базы данных. Если внутри блока возникает исключение&#44; все изменения откатываются.

\`\`\`python
from django&#46;db import transaction

&#64;transaction&#46;atomic
def transfer_money&#40;sender_id&#44; receiver_id&#44; amount&#41;&#58;
    sender &#61; Account&#46;objects&#46;get&#40;id&#61;sender_id&#41;
    receiver &#61; Account&#46;objects&#46;get&#40;id&#61;receiver_id&#41;
    
    sender&#46;balance &#45;&#61; amount
    sender&#46;save&#40;&#41;
    
    receiver&#46;balance &#43;&#61; amount
    receiver&#46;save&#40;&#41;
    &#35; Если здесь ошибка&#44; оба save откатятся
\`\`\`

**Вложенные атомарные блоки:**
Внутренний atomic создаёт savepoint. Если внутренний блок падает&#44; откатывается только он&#44; внешний блок может обработать ошибку и продолжить работу.

**Database Routers:**
Механизм для маршрутизации запросов к разным базам данных. Позволяет реализовать архитектуру Master-Slave &#40;чтение с реплик&#44; запись в мастер&#41; или шардинг.

\`\`\`python
&#35; routers&#46;py
class PrimaryReplicaRouter&#58;
    def db_for_read&#40;self&#44; model&#44; &#42;&#42;hints&#41;&#58;
        return &#39;replica&#39;

    def db_for_write&#40;self&#44; model&#44; &#42;&#42;hints&#41;&#58;
        return &#39;primary&#39;

    def allow_relation&#40;self&#44; obj1&#44; obj2&#44; &#42;&#42;hints&#41;&#58;
        return True
\`\`\`

**Настройка в settings:**
\`\`\`python
DATABASE_ROUTERS &#61; &#91;&#39;myapp&#46;routers&#46;PrimaryReplicaRouter&#39;&#93;
\`\`\`

**Для собеседования:** transaction.atomic обеспечивает ACID-свойства и откат при ошибках. Database routers позволяют разделять чтение и запись между разными БД через методы db_for_read и db_for_write.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-5`,
"title": `Custom model fields, managers, middleware, class-based views, mixins.`,
"fullAnswer": `**Custom Model Fields:**
Создаются наследованием от models&#46;Field. Требуют реализации методов from_db_value &#40;из БД в Python&#41;&#44; to_python &#40;парсинг&#41; и get_prep_value &#40;из Python в БД&#41;.

**Managers:**
Контролируют операции с таблицей. Кастомные менеджеры используются для добавления методов к QuerySet или фильтрации по умолчанию.

\`\`\`python
from django&#46;db import models

class PublishedManager&#40;models&#46;Manager&#41;&#58;
    def get_queryset&#40;self&#41;&#58;
        return super&#40;&#41;&#46;get_queryset&#40;&#41;&#46;filter&#40;is_published&#61;True&#41;

class Article&#40;models&#46;Model&#41;&#58;
    objects &#61; models&#46;Manager&#40;&#41; &#35; стандартный
    published &#61; PublishedManager&#40;&#41; &#35; кастомный
\`\`\`

**Middleware:**
Хуки глобальной обработки запроса и ответа. Выполняются в порядке&#44; указанном в MIDDLEWARE.

\`\`\`python
class SimpleMiddleware&#58;
    def __init__&#40;self&#44; get_response&#41;&#58;
        self&#46;get_response &#61; get_response

    def __call__&#40;self&#44; request&#41;&#58;
        &#35; Код до view
        response &#61; self&#46;get_response&#40;request&#41;
        &#35; Код после view
        return response
\`\`\`

**Class-Based Views &#40;CBV&#41; и Mixins:**
CBV организуют логику в классы&#44; разделяя методы для GET&#44; POST и т&#46;д&#46; Mixins &#8212; классы с множественным наследованием для переиспользования поведения.

\`\`\`python
from django&#46;contrib&#46;auth&#46;mixins import LoginRequiredMixin
from django&#46;views&#46;generic import ListView

class ArticleListView&#40;LoginRequiredMixin&#44; ListView&#41;&#58;
    model &#61; Article
    login_url &#61; &#39;&#47;login&#47;&#39;
    &#35; Mixin проверит авторизацию до выполнения get&#40;&#41;
\`\`\`

**Для собеседования:** Кастомные поля требуют from_db_value и get_prep_value. Менеджеры меняют базовый QuerySet. Middleware перехватывает request/response. Mixins &#40;напр&#46;&#44; LoginRequiredMixin&#41; добавляют поведение в CBV через множественное наследование.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-6`,
"title": `Кэширование (cache_page), Celery, task routing, Redis.`,
"fullAnswer": `**cache_page:**
Декоратор для кэширования всего ответа view на определённое время.

\`\`\`python
from django&#46;views&#46;decorators&#46;cache import cache_page

&#64;cache_page&#40;60 &#42; 15&#41; &#35; 15 минут
def my_view&#40;request&#41;&#58;
    &#46;&#46;&#46;
\`\`\`

**Celery:**
Распределённая очередь задач для выполнения кода асинхронно&#44; вне цикла запрос-ответ. Используется для долгих операций &#40;отправка email&#44; генерация отчётов&#41;.

\`\`\`python
from celery import shared_task

&#64;shared_task
def send_email&#40;user_id&#41;&#58;
    &#46;&#46;&#46;

&#35; Вызов
send_email&#46;delay&#40;user&#46;id&#41;
\`\`\`

**Task Routing:**
Направление задач в разные очереди &#40;queues&#41; в зависимости от их типа. Позволяет запускать разных воркеров для разных задач &#40;например&#44; отдельные воркеры для email и для тяжёлых вычислений&#41;.

\`\`\`python
&#35; celery&#46;py
app&#46;conf&#46;update&#40;&#123;
    &#39;task_routes&#39;&#58; &#123;
        &#39;myapp&#46;tasks&#46;send_email&#39;&#58; &#123;&#39;queue&#39;&#58; &#39;email_queue&#39;&#125;&#44;
        &#39;myapp&#46;tasks&#46;heavy_calc&#39;&#58; &#123;&#39;queue&#39;&#58; &#39;cpu_queue&#39;&#125;&#44;
    &#125;&#44;
&#125;&#41;
\`\`\`

**Redis:**
In-memory хранилище. В Django-стеке используется в двух ролях:
1. **Message Broker для Celery:** хранит очередь задач.
2. **Cache Backend для Django:** хранит закэшированные страницы и данные благодаря высокой скорости чтения/записи.

**Для собеседования:** cache_page кэширует ответ view. Celery выполняет задачи асинхронно. Task routing распределяет задачи по очередям для разных воркеров. Redis используется как быстрый бэкенд для кэша и брокер для Celery.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `10-middle-общее-7`,
"title": `Django Channels, WebSocket, Django Ninja, TestCase vs TransactionTestCase.`,
"fullAnswer": `**Django Channels и WebSocket:**
Channels расширяет Django для работы с ASGI&#44; поддерживая WebSocket&#44; чаты и длинные соединения. Вводит концепцию Consumers &#40;аналог Views&#41; и Routing.

\`\`\`python
&#35; consumers&#46;py
from channels&#46;generic&#46;websocket import AsyncWebsocketConsumer

class ChatConsumer&#40;AsyncWebsocketConsumer&#41;&#58;
    async def connect&#40;self&#41;&#58;
        await self&#46;accept&#40;&#41;
        await self&#46;send&#40;text_data&#61;&#39;Connected!&#39;&#41;

    async def receive&#40;self&#44; text_data&#41;&#58;
        await self&#46;send&#40;text_data&#61;text_data&#41;
\`\`\`

**Django Ninja:**
Современная альтернатива Django REST Framework&#44; вдохновлённая FastAPI. Использует Pydantic для валидации&#44; автоматически генерирует OpenAPI схему&#44; работает быстрее DRF и имеет более простой синтаксис.

\`\`\`python
from ninja import NinjaAPI&#44; Schema

api &#61; NinjaAPI&#40;&#41;

class ItemSchema&#40;Schema&#41;&#58;
    id&#58; int
    name&#58; str

&#64;api&#46;get&#40;&#39;&#47;items&#39;&#41;
def list_items&#40;request&#41;&#58;
    return ItemSchema&#46;from_orm&#40;&#46;&#46;&#46;&#41;
\`\`\`

**TestCase vs TransactionTestCase:**

**TestCase** оборачивает каждый тест в транзакцию и делает откат &#40;rollback&#41; в конце. Это очень быстро&#44; но не позволяет тестировать поведение реальных транзакций &#40;например&#44; on_commit хуки или блокировки строк&#41;.

**TransactionTestCase** реально очищает таблицы &#40;TRUNCATE&#41; между тестами и позволяет коммитить данные. Работает медленнее&#44; но необходима для тестирования сигналов&#44; миграций и атомарных транзакций.

**Для собеседования:** Channels добавляет WebSocket через ASGI и Consumers. Django Ninja &#8212; быстрая альтернатива DRF на Pydantic. TestCase делает rollback &#40;быстро&#41;&#44; TransactionTestCase делает truncate &#40;медленно&#44; но тестирует реальные транзакции&#41;.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
