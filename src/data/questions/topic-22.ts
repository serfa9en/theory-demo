import type { TopicQuestions } from '../../types/question'

export const topic22Questions: TopicQuestions = {
"id": 22,
"slug": `topic-22`,
"title": `Сети`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `22-junior-общее-1`,
"title": `IP-адрес, порт, DNS, localhost.`,
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
"id": `22-junior-общее-2`,
"title": `Клиент и сервер, протокол, стек TCP/IP, OSI модель.`,
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
"id": `22-junior-общее-3`,
"title": `TCP и UDP, IPv4 vs IPv6.`,
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
"id": `22-junior-общее-4`,
"title": `Subnet mask, gateway, router, switch, firewall.`,
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
"id": `22-junior-общее-5`,
"title": `NAT, VPN, proxy, CDN, HTTP.`,
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
"id": `22-middle-общее-1`,
"title": `3-way handshake, алгоритм Нейгла, TCP_NODELAY.`,
"fullAnswer": `Подробный ответ пока не добавлен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `22-middle-общее-2`,
"title": `Управление перегрузками: window size, slow start, congestion avoidance, fast retransmit, fast recovery.`,
"fullAnswer": `Подробный ответ пока не добавлен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `22-middle-общее-3`,
"title": `MTU, fragmentation, TTL, ARP, ICMP, DHCP, BOOTP.`,
"fullAnswer": `Подробный ответ пока не добавлен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `22-middle-общее-4`,
"title": `TCP keep-alive, half-open, reset, FIN, state machine.`,
"fullAnswer": `Подробный ответ пока не добавлен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `22-middle-общее-5`,
"title": `TIME_WAIT, CLOSE_WAIT, SYN flood, DDoS.`,
"fullAnswer": `Подробный ответ пока не добавлен.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
