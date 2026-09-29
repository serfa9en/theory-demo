import type { TopicQuestions } from '../../types/question'

export const topic8Questions: TopicQuestions = {
"id": 8,
"slug": `topic-8`,
"title": `Java & Spring`,
"junior": {
"sections": [
{
"id": `java-core`,
"title": `Java Core`,
"questions": [
{
"id": `8-junior-java-core-1`,
"title": `Что такое JVM, JRE, JDK?`,
"fullAnswer": `**JVM (Java Virtual Machine)** — виртуальная машина Java. Это программа, которая выполняет скомпилированный Java-код (байткод). JVM переводит байткод в машинный код конкретной операционной системы. Благодаря JVM работает принцип «Write once, run anywhere» — один раз написанный код работает на любой платформе, где есть JVM.

**JRE (Java Runtime Environment)** — среда выполнения Java. Включает в себя JVM и стандартные библиотеки (например, java.lang, java.util). JRE нужна, чтобы **запускать** Java-приложения, но не для их разработки.

**JDK (Java Development Kit)** — набор для разработки на Java. Включает в себя JRE, а также компилятор \`javac\`, отладчик, утилиты для документирования и другие инструменты разработчика. JDK нужен, чтобы **писать и компилировать** Java-код.

**Соотношение:**
JDK содержит JRE, а JRE содержит JVM. То есть JDK — это самый полный набор.

**Практический пример:**
Если вы пользователь, которому нужно запустить Minecraft (написан на Java) — вам достаточно JRE. Если вы разработчик, который пишет приложение — нужен JDK.

**Ключевые моменты:**
- JVM — выполняет байткод
- JRE = JVM + библиотеки (для запуска)
- JDK = JRE + компилятор + инструменты (для разработки)

💡 **Для собеседования:** JDK — полный набор для разработки, включает JRE и компилятор. JRE — среда для запуска приложений, включает JVM. JVM — виртуальная машина, которая выполняет байткод и обеспечивает кроссплатформенность Java.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-2`,
"title": `Примитивные типы данных и объекты-обёртки.`,
"fullAnswer": `В Java есть два вида типов данных: примитивные и ссылочные (объекты). Примитивы хранят значение напрямую, объекты — ссылку на данные в памяти.

**8 примитивных типов:**
- \`byte\` — 1 байт, целое от -128 до 127
- \`short\` — 2 байта, целое от -32768 до 32767
- \`int\` — 4 байта, целое (самый используемый)
- \`long\` — 8 байт, большое целое (суффикс L: \`100L\`)
- \`float\` — 4 байта, дробное (суффикс F: \`3.14F\`)
- \`double\` — 8 байт, дробное с двойной точностью
- \`boolean\` — 1 байт, true или false
- \`char\` — 2 байта, один символ Unicode

**Объекты-обёртки (Wrapper classes):**
Для каждого примитива есть соответствующий класс-обёртка:
- \`byte\` → \`Byte\`
- \`short\` → \`Short\`
- \`int\` → \`Integer\`
- \`long\` → \`Long\`
- \`float\` → \`Float\`
- \`double\` → \`Double\`
- \`boolean\` → \`Boolean\`
- \`char\` → \`Character\`

**Зачем нужны обёртки:**
Примитивы не являются объектами, поэтому у них нет методов. Обёртки нужны, когда требуется объект — например, в коллекциях (\`List<Integer>\`, а не \`List<int>\`), для работы с null (примитив не может быть null), для использования в дженериках.

**Autoboxing и Unboxing:**
Java автоматически преобразует примитивы в обёртки и обратно:
\`\`\`java
Integer a = 10;      // autoboxing: int → Integer
int b = a;           // unboxing: Integer → int
\`\`\`

**Различия:**
Примитивы хранятся в стеке (быстрый доступ), обёртки — в куче (медленнее, больше памяти). Примитивы не могут быть null, обёртки — могут. Сравнение примитивов через \`==\`, обёрток — через \`.equals()\`.

**Ключевые моменты:**
- 8 примитивных типов: byte, short, int, long, float, double, boolean, char
- У каждого примитива есть класс-обёртка
- Обёртки нужны для коллекций, null, дженериков
- Autoboxing/unboxing — автоматическое преобразование

💡 **Для собеседования:** Примитивы хранят значение в стеке, обёртки — ссылку в куче. Обёртки нужны для коллекций и работы с null. Autoboxing/unboxing — автопреобразование между ними. Примитивы сравниваются через \`==\`, обёртки — через \`.equals()\`.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-3`,
"title": `Что такое String? Почему неизменяемый? String Pool.`,
"fullAnswer": `**String** — класс для работы со строками в Java. Строки в Java неизменяемы (immutable): после создания объекта String его содержимое нельзя изменить.

**Почему String неизменяемый:**

**1. Безопасность:**
Строки используются как параметры для подключения к БД, открытия файлов, сетевых соединений. Если бы строки были изменяемыми, злоумышленник мог бы изменить их после проверки.

**2. Потокобезопасность:**
Неизменяемые объекты автоматически потокобезопасны — их можно безопасно использовать в многопоточной среде без синхронизации.

**3. Хэширование:**
String используется как ключ в HashMap. Неизменяемость гарантирует, что хэш-код не изменится после помещения в коллекцию.

**4. String Pool:**
 JVM оптимизирует память, храня строковые литералы в специальном пуле.

**String Pool (пул строк):**
Когда вы создаёте строку через литерал, JVM проверяет, есть ли такая строка уже в пуле. Если есть — возвращает ссылку на существующую, если нет — создаёт новую.

\`\`\`java
String s1 = "Hello";  // создаётся в пуле
String s2 = "Hello";  // берётся из пула, та же ссылка
System.out.println(s1 == s2);  // true (одна ссылка)

String s3 = new String("Hello");  // новый объект в куче, вне пула
System.out.println(s1 == s3);     // false (разные ссылки)
System.out.println(s1.equals(s3)); // true (одинаковое содержимое)
\`\`\`

**Метод intern():**
Добавляет строку в пул, если её там нет, и возвращает ссылку на строку из пула:
\`\`\`java
String s3 = new String("Hello").intern();
System.out.println(s1 == s3);  // true
\`\`\`

**StringBuilder и StringBuffer:**
Когда нужно часто изменять строку (конкатенация в цикле), используют \`StringBuilder\` (быстрый, не потокобезопасный) или \`StringBuffer\` (потокобезопасный, медленнее).

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append("World");
String result = sb.toString();  // "Hello World"
\`\`\`

**Ключевые моменты:**
- String неизменяем (immutable)
- Строковые литералы хранятся в String Pool
- \`==\` сравнивает ссылки, \`.equals()\` — содержимое
- Для частых изменений используйте StringBuilder

💡 **Для собеседования:** String неизменяем из соображений безопасности, потокобезопасности и хэширования. String Pool экономит память, переиспользуя литералы. \`==\` сравнивает ссылки, \`.equals()\` — содержимое. Для конкатенации в цикле используйте StringBuilder.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-4`,
"title": `Что такое ООП? 4 принципа.`,
"fullAnswer": `**ООП (Объектно-Ориентированное Программирование)** — парадигма программирования, в которой программа строится из объектов, взаимодействующих друг с другом. Объект — это экземпляр класса, который содержит данные (поля) и поведение (методы).

**4 принципа ООП:**

**1. Инкапсуляция:**
Сокрытие внутренней реализации объекта и предоставление публичного интерфейса для работы с ним. Данные класса защищаются модификаторами доступа (private, protected), а доступ к ним осуществляется через публичные методы (геттеры и сеттеры).

\`\`\`java
public class BankAccount {
    private double balance;  // скрыто
    
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}
\`\`\`

**2. Наследование:**
Механизм, позволяющий одному классу (наследнику) наследовать поля и методы другого класса (родителя). Позволяет создавать иерархию классов и переиспользовать код.

\`\`\`java
public class Animal {
    public void speak() { System.out.println("..."); }
}

public class Dog extends Animal {
    @Override
    public void speak() { System.out.println("Woof!"); }
}
\`\`\`

**3. Полиморфизм:**
Способность объектов с одинаковой спецификацией иметь различную реализацию. Один и тот же метод может работать по-разному для разных типов объектов.

\`\`\`java
Animal animal = new Dog();
animal.speak();  // выведет "Woof!" — вызывается метод Dog
\`\`\`

**4. Абстракция:**
Выделение существенных характеристик объекта и игнорирование несущественных. В Java реализуется через абстрактные классы и интерфейсы.

\`\`\`java
public abstract class Shape {
    public abstract double area();  // нет реализации
}

public class Circle extends Shape {
    private double radius;
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}
\`\`\`

**Ключевые моменты:**
- Инкапсуляция — скрытие данных, публичный интерфейс
- Наследование — расширение функциональности родителя
- Полиморфизм — один интерфейс, разные реализации
- Абстракция — выделение главного, игнорирование деталей

 **Для собеседования:** ООП — парадигма, основанная на объектах. 4 принципа: инкапсуляция (скрытие данных), наследование (расширение классов), полиморфизм (разное поведение одного интерфейса), абстракция (выделение существенного).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-5`,
"title": `Класс, объект, конструктор. abstract class vs interface.`,
"fullAnswer": `**Класс** — это шаблон (чертёж) для создания объектов. Описывает поля (данные) и методы (поведение).

**Объект** — это экземпляр класса, созданный в памяти. Конкретная реализация класса со своими значениями полей.

\`\`\`java
// Класс — шаблон
public class Car {
    private String brand;
    private int year;
    
    public Car(String brand, int year) {  // конструктор
        this.brand = brand;
        this.year = year;
    }
    
    public void drive() {
        System.out.println(brand + " едет");
    }
}

// Объекты — экземпляры
Car car1 = new Car("Toyota", 2020);  // первый объект
Car car2 = new Car("BMW", 2022);     // второй объект
\`\`\`

**Конструктор** — специальный метод, который вызывается при создании объекта. Имя совпадает с именем класса, не имеет возвращаемого типа. Используется для инициализации полей.

Если конструктор не написан явно, Java создаёт конструктор по умолчанию (без параметров).

**Abstract class (абстрактный класс):**
Класс, который нельзя инстанциировать (создать объект). Может содержать как абстрактные методы (без реализации), так и обычные методы с реализацией.

\`\`\`java
public abstract class Animal {
    private String name;
    
    // Обычный метод с реализацией
    public void sleep() {
        System.out.println(name + " спит");
    }
    
    // Абстрактный метод — без реализации
    public abstract void speak();
}

public class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
}
\`\`\`

**Interface (интерфейс):**
Контракт, который описывает, что класс должен делать, но не как. До Java 8 мог содержать только абстрактные методы. С Java 8 появились default-методы с реализацией.

\`\`\`java
public interface Flyable {
    void fly();  // абстрактный метод
    
    default void land() {  // метод с реализацией (Java 8+)
        System.out.println("Приземление");
    }
}

public class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Птица летит");
    }
}
\`\`\`

**Различия abstract class и interface:**

Абстрактный класс может иметь конструктор, поля состояния, обычные методы. Класс может наследовать только один абстрактный класс (single inheritance).

Интерфейс не может иметь конструктор и полей состояния (только константы). Класс может реализовывать несколько интерфейсов (multiple inheritance типов).

Абстрактный класс описывает «что это такое» (is-a relationship). Интерфейс описывает «что может делать» (can-do relationship).

**Когда что использовать:**
Используйте абстрактный класс, когда у классов есть общее состояние и поведение. Используйте интерфейс, когда нужно описать контракт для разных по иерархии классов.

**Ключевые моменты:**
- Класс — шаблон, объект — экземпляр
- Конструктор инициализирует объект при создании
- Abstract class — частичная реализация, одно наследование
- Interface — контракт, множественная реализация

💡 **Для собеседования:** Класс — шаблон, объект — экземпляр, конструктор инициализирует объект. Abstract class может иметь реализацию и поля, но только одно наследование. Interface — контракт без состояния, поддерживает множественную реализацию.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-6`,
"title": `static, final, модификаторы доступа.`,
"fullAnswer": `**static (статический):**
Ключевое слово, которое означает принадлежность классу, а не конкретному объекту. Статические поля и методы общие для всех экземпляров класса.

\`\`\`java
public class Counter {
    private static int totalCount = 0;  // общее для всех
    private int id;                      // уникальное для каждого
    
    public Counter() {
        totalCount++;  // увеличиваем общий счётчик
        id = totalCount;
    }
    
    public static int getTotalCount() {  // статический метод
        return totalCount;
    }
}

Counter c1 = new Counter();  // totalCount = 1
Counter c2 = new Counter();  // totalCount = 2
System.out.println(Counter.getTotalCount());  // 2
\`\`\`

Статические методы нельзя переопределять (override), только скрывать (hide). Они не имеют доступа к нестатическим полям и методам (нет \`this\`).

**final:**
Ключевое слово, которое запрещает изменение.

Применительно к переменной — делает её константой (нельзя переприсвоить):
\`\`\`java
final int MAX_SIZE = 100;
// MAX_SIZE = 200;  // ошибка компиляции
\`\`\`

Применительно к методу — запрещает переопределение в наследниках:
\`\`\`java
public class Parent {
    public final void doSomething() { ... }
}
// class Child extends Parent {
//     public void doSomething() { ... }  // ошибка
// }
\`\`\`

Применительно к классу — запрещает наследование:
\`\`\`java
public final class String { ... }  // от String нельзя наследоваться
\`\`\`

**Модификаторы доступа:**
Определяют видимость полей, методов и классов.

**public** — доступен отовсюду. Нет ограничений по пакетам и классам.

**protected** — доступен в том же пакете и в наследниках (даже из других пакетов). Используется для членов, которые должны быть доступны подклассам.

**default (без модификатора)** — доступен только в том же пакете. Часто называют package-private.

**private** — доступен только внутри того же класса. Максимальный уровень инкапсуляции.

**Порядок ограничения (от самого широкого к узкому):**
public → protected → default → private

**Пример:**
\`\`\`java
public class User {
    public String name;          // доступен отовсюду
    protected int age;           // пакет + наследники
    String email;                // только пакет (default)
    private String password;     // только внутри класса
    
    public String getPassword() { return password; }  // геттер
    public void setPassword(String p) { this.password = p; }  // сеттер
}
\`\`\`

**Ключевые моменты:**
- static — принадлежит классу, общее для всех объектов
- final — константа для переменных, запрет переопределения для методов/классов
- public — везде, protected — пакет + наследники, default — пакет, private — класс

 **Для собеседования:** static делает поле/метод общим для всех экземпляров. final запрещает изменение (переменные), переопределение (методы) или наследование (классы). Модификаторы доступа: public, protected, default (package), private — от самого широкого к узкому.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-7`,
"title": `Исключения: Checked vs Unchecked, try-catch-finally.`,
"fullAnswer": `**Исключение (Exception)** — событие, которое нарушает нормальный поток выполнения программы. Например, деление на ноль, обращение к null, файл не найден.

**Иерархия исключений:**
Все исключения наследуются от класса \`Throwable\`. Он делится на две ветки: \`Error\` (критические ошибки JVM, например OutOfMemoryError — их обычно не ловят) и \`Exception\` (ошибки приложения).

**Checked exceptions (проверяемые):**
Исключения, которые компилятор **обязывает** обработать. Наследуются от \`Exception\`, но не от \`RuntimeException\`. Примеры: \`IOException\`, \`SQLException\`, \`ClassNotFoundException\`.

\`\`\`java
public void readFile() throws IOException {
    FileReader reader = new FileReader("file.txt");  // компилятор требует обработки
    reader.read();
}
\`\`\`

Можно обработать через try-catch или пробросить дальше через throws.

**Unchecked exceptions (непроверяемые):**
Исключения, которые компилятор **не обязывает** обрабатывать. Наследуются от \`RuntimeException\`. Примеры: \`NullPointerException\`, \`ArrayIndexOutOfBoundsException\`, \`IllegalArgumentException\`, \`ArithmeticException\`.

\`\`\`java
public void divide(int a, int b) {
    int result = a / b;  // может быть ArithmeticException, но компилятор не требует обработки
}
\`\`\`

**try-catch-finally:**
Конструкция для обработки исключений.

\`\`\`java
try {
    // Код, который может вызвать исключение
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Обработка конкретного исключения
    System.out.println("Деление на ноль: " + e.getMessage());
} catch (Exception e) {
    // Обработка других исключений (должен идти после конкретных)
    System.out.println("Ошибка: " + e.getMessage());
} finally {
    // Выполняется ВСЕГДА, независимо от исключения
    // Используется для освобождения ресурсов
    System.out.println("Завершение");
}
\`\`\`

**Правила:**
- Может быть несколько catch-блоков для разных типов исключений
- finally выполняется всегда, даже если было return в try или catch
- С Java 7 есть multi-catch: \`catch (IOException | SQLException e)\`
- С Java 7 есть try-with-resources для автоматического закрытия ресурсов:

\`\`\`java
try (FileReader reader = new FileReader("file.txt")) {
    reader.read();
} catch (IOException e) {
    e.printStackTrace();
}
// reader закроется автоматически
\`\`\`

**throw и throws:**
- \`throw\` — выбросить исключение: \`throw new IllegalArgumentException("Неверный аргумент")\`
- \`throws\` — объявить, что метод может выбросить исключение: \`public void read() throws IOException\`

**Ключевые моменты:**
- Checked — компилятор требует обработки (IOException)
- Unchecked — RuntimeException, компилятор не требует (NullPointerException)
- try-catch-finally — обработка исключений
- finally выполняется всегда
- try-with-resources — автозакрытие ресурсов

💡 **Для собеседования:** Checked exceptions (IOException) компилятор обязывает обработать, unchecked (RuntimeException) — нет. try-catch-finally обрабатывает исключения, finally выполняется всегда. С Java 7 есть try-with-resources для автозакрытия.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-8`,
"title": `equals() и hashCode(). == vs .equals().`,
"fullAnswer": `**== (оператор сравнения):**
Сравнивает ссылки на объекты (адреса в памяти), а не их содержимое. Для примитивов сравнивает значения.

\`\`\`java
int a = 5, b = 5;
System.out.println(a == b);  // true (сравнение значений)

String s1 = new String("Hello");
String s2 = new String("Hello");
System.out.println(s1 == s2);  // false (разные объекты в памяти)
\`\`\`

**.equals() (метод):**
Сравнивает содержимое объектов. По умолчанию в классе Object работает как \`==\`, но переопределяется в классах вроде String, Integer и других.

\`\`\`java
String s1 = new String("Hello");
String s2 = new String("Hello");
System.out.println(s1.equals(s2));  // true (одинаковое содержимое)
\`\`\`

**hashCode():**
Метод, который возвращает целочисленный хэш объекта. Используется в хэш-коллекциях (HashMap, HashSet) для быстрого поиска.

**Контракт equals() и hashCode():**

Правило 1: Если два объекта равны по \`equals()\`, они должны иметь одинаковый \`hashCode()\`.

Правило 2: Если два объекта имеют одинаковый \`hashCode()\`, они НЕ обязательно равны по \`equals()\` (это называется коллизия).

**Пример переопределения:**
\`\`\`java
public class User {
    private String name;
    private int age;
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;  // одна ссылка
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return age == user.age && Objects.equals(name, user.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
\`\`\`

**Почему важно переопределять оба метода:**
Если переопределить только \`equals()\`, но не \`hashCode()\`, объект будет неправильно работать в HashMap и HashSet. Два «равных» объекта могут попасть в разные корзины хэш-таблицы.

**Правила хорошего equals():**
- Рефлексивность: \`x.equals(x)\` всегда true
- Симметричность: если \`x.equals(y)\`, то \`y.equals(x)\`
- Транзитивность: если \`x.equals(y)\` и \`y.equals(z)\`, то \`x.equals(z)\`
- Согласованность: повторные вызовы возвращают тот же результат
- \`x.equals(null)\` всегда false

**Ключевые моменты:**
- \`==\` сравнивает ссылки, \`.equals()\` — содержимое
- \`hashCode()\` нужен для хэш-коллекций
- Если переопределяете \`equals()\`, переопределяйте и \`hashCode()\`
- Два равных объекта должны иметь одинаковый хэш

 **Для собеседования:** \`==\` сравнивает ссылки, \`.equals()\` — содержимое. \`hashCode()\` возвращает хэш для хэш-коллекций. Контракт: равные объекты должны иметь равные хэши. Всегда переопределяйте оба метода вместе.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-9`,
"title": `Коллекции: List vs Set, ArrayList vs LinkedList.`,
"fullAnswer": `**Коллекции в Java** — это структуры данных для хранения групп объектов. Основной интерфейс — \`Collection\`, от него наследуются \`List\`, \`Set\`, \`Queue\`.

**List (список):**
Упорядоченная коллекция, допускает дубликаты. Элементы имеют индекс (позицию).

Реализации: \`ArrayList\`, \`LinkedList\`, \`Vector\`.

**Set (множество):**
Коллекция без дубликатов. Порядок элементов не гарантирован (кроме \`LinkedHashSet\` и \`TreeSet\`).

Реализации: \`HashSet\`, \`LinkedHashSet\`, \`TreeSet\`.

**Различия List и Set:**
List допускает дубликаты и сохраняет порядок вставки. Set не допускает дубликаты, порядок зависит от реализации.

**ArrayList:**
Основан на динамическом массиве. Быстрый доступ по индексу (O(1)), медленная вставка/удаление в середине (O(n)), так как нужно сдвигать элементы.

\`\`\`java
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
String first = list.get(0);  // быстро, O(1)
\`\`\`

**LinkedList:**
Основан на двусвязном списке. Быстрая вставка/удаление (O(1)), медленный доступ по индексу (O(n)), так как нужно пройти по списку.

\`\`\`java
List<String> list = new LinkedList<>();
list.add("Apple");
list.addFirst("Banana");  // быстро, O(1)
String first = list.get(0);  // медленно, O(n)
\`\`\`

**Когда что использовать:**
ArrayList — когда чаще чтение по индексу и добавление в конец. LinkedList — когда частые вставки/удаления в начале или середине списка.

На практике ArrayList используется гораздо чаще, так как он лучше работает с кэшем процессора (элементы расположены в памяти подряд).

**Основные методы коллекций:**
- \`add(element)\` — добавить элемент
- \`get(index)\` — получить по индексу (только List)
- \`remove(element)\` — удалить
- \`size()\` — размер
- \`contains(element)\` — проверка наличия
- \`isEmpty()\` — проверка на пустоту
- \`clear()\` — очистить

**Ключевые моменты:**
- List — упорядоченный, с дубликатами, по индексу
- Set — без дубликатов, порядок зависит от реализации
- ArrayList — быстрый доступ, медленная вставка в середину
- LinkedList — быстрая вставка, медленный доступ

💡 **Для собеседования:** List допускает дубликаты и хранит порядок, Set — без дубликатов. ArrayList основан на массиве (быстрый доступ), LinkedList — на связном списке (быстрая вставка). На практике ArrayList используется чаще.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-java-core-10`,
"title": `Как работает HashMap? Что такое Generics и Optional?`,
"fullAnswer": `**HashMap:**
Коллекция, хранящая данные в формате «ключ-значение». Ключи уникальны, значения могут повторяться. Основана на хэш-таблице.

**Как работает:**
При добавлении пары ключ-значение вычисляется хэш-код ключа (через \`hashCode()\`). На основе хэша определяется индекс корзины (bucket) в массиве. Если в корзине уже есть элемент (коллизия), элементы связываются в список (или дерево, если элементов больше 8 — с Java 8).

При получении значения по ключу снова вычисляется хэш, находится корзина, и внутри неё ищется элемент через \`equals()\`.

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("apple", 1);    // добавление
map.put("banana", 2);
Integer value = map.get("apple");  // получение: 1
\`\`\`

**Основные методы:**
- \`put(key, value)\` — добавить
- \`get(key)\` — получить
- \`remove(key)\` — удалить
- \`containsKey(key)\` — проверка ключа
- \`keySet()\` — множество ключей
- \`values()\` — коллекция значений
- \`entrySet()\` — множество пар ключ-значение

**Generics (дженерики):**
Механизм параметризации типов. Позволяет создавать классы, интерфейсы и методы, которые работают с разными типами, сохраняя типобезопасность.

\`\`\`java
// Без дженериков (плохо)
List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0);  // нужно приведение типа

// С дженериками (хорошо)
List<String> list = new ArrayList<>();
list.add("Hello");
String s = list.get(0);  // без приведения, типобезопасно
\`\`\`

Дженерики проверяются на этапе компиляции и стираются в рантайме (type erasure).

**Optional:**
Класс-обёртка, который представляет возможное отсутствие значения. Альтернатива null, помогает избежать NullPointerException.

\`\`\`java
// Возвращаем Optional вместо null
public Optional<User> findById(int id) {
    User user = database.find(id);
    return Optional.ofNullable(user);
}

// Использование
Optional<User> user = findById(1);

// С проверкой
if (user.isPresent()) {
    System.out.println(user.get().getName());
}

// С значением по умолчанию
String name = user.map(User::getName).orElse("Unknown");

// С исключением
User u = user.orElseThrow(() -> new RuntimeException("Не найден"));
\`\`\`

**Методы Optional:**
- \`of(value)\` — создать с непустым значением
- \`ofNullable(value)\` — создать, возможно, с null
- \`isPresent()\` — есть ли значение
- \`get()\` — получить значение (может бросить NoSuchElementException)
- \`orElse(default)\` — значение или default
- \`orElseThrow()\` — значение или исключение
- \`map()\` — трансформация значения
- \`filter()\` — фильтрация

**Ключевые моменты:**
- HashMap хранит пары ключ-значение, основана на хэш-таблице
- Generics обеспечивают типобезопасность на этапе компиляции
- Optional — обёртка над возможным null, помогает избежать NPE

💡 **Для собеседования:** HashMap использует хэш-код ключа для определения корзины, при коллизиях — список или дерево. Generics параметризуют типы для типобезопасности. Optional — обёртка над nullable значением, предоставляет методы orElse, map, filter.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-core`,
"title": `Spring Core`,
"questions": [
{
"id": `8-junior-spring-core-1`,
"title": `Что такое Spring Framework и Spring Boot?`,
"fullAnswer": `**Spring Framework** — мощный фреймворк для разработки Java-приложений. Предоставляет инфраструктуру для создания enterprise-приложений: управление зависимостями (IoC), работа с базами данных, веб-приложения, безопасность, транзакции и многое другое.

**Основные модули Spring:**
- Spring Core — IoC-контейнер, управление бинами
- Spring MVC — веб-приложения
- Spring Data JPA — работа с базами данных
- Spring Security — аутентификация и авторизация
- Spring Boot — упрощение настройки Spring

**Spring Boot:**
Надстройка над Spring Framework, которая упрощает создание приложений. Убирает необходимость ручной конфигурации через принцип «convention over configuration» (соглашения важнее конфигурации).

**Что даёт Spring Boot:**

**1. Автоконфигурация:**
Spring Boot автоматически настраивает компоненты на основе добавленных зависимостей. Если в classpath есть H2 — автоматически создаётся БД в памяти. Если есть Spring Web — настраивается встроенный Tomcat.

**2. Встроенный сервер:**
Не нужно устанавливать и настраивать внешний сервер приложений (Tomcat, Jetty). Spring Boot включает встроенный сервер, приложение запускается как обычный Java-программа.

\`\`\`java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
// Запуск: java -jar app.jar
\`\`\`

**3. Starter-зависимости:**
Вместо множества отдельных зависимостей подключаются готовые наборы:
- \`spring-boot-starter-web\` — для веб-приложений
- \`spring-boot-starter-data-jpa\` — для работы с БД
- \`spring-boot-starter-security\` — для безопасности

**4. Actuator:**
Встроенные эндпоинты для мониторинга приложения (health, metrics, info).

**5. Внешняя конфигурация:**
Удобная работа с \`application.properties\` и \`application.yml\`.

**Различия Spring и Spring Boot:**
Spring Framework требует ручной XML или Java-конфигурации, настройки сервера, управления зависимостями. Spring Boot автоматизирует всё это, позволяя создать рабочее приложение за несколько минут.

Spring — это фундамент, Spring Boot — удобный инструмент для быстрой разработки на этом фундаменте.

**Ключевые моменты:**
- Spring Framework — мощный фреймворк с множеством модулей
- Spring Boot — надстройка для упрощения разработки
- Автоконфигурация, встроенный сервер, starter-зависимости
- Convention over configuration

 **Для собеседования:** Spring Framework — фреймворк для enterprise-разработки с IoC-контейнером. Spring Boot — надстройка, упрощающая разработку через автоконфигурацию, встроенный сервер и starter-зависимости. Spring Boot следует принципу convention over configuration.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-core-2`,
"title": `Что такое IoC и DI? Способы внедрения зависимостей.`,
"fullAnswer": `**IoC (Inversion of Control — Инверсия управления):**
Принцип, при котором управление созданием и связыванием объектов передаётся от программы к фреймворку (IoC-контейнеру). Вместо того чтобы объект сам создавал свои зависимости, контейнер Spring предоставляет их.

**Без IoC:**
\`\`\`java
public class UserService {
    private UserRepository repository = new UserRepository();  // сам создаёт
}
\`\`\`

**С IoC:**
\`\`\`java
public class UserService {
    private UserRepository repository;  // получит от контейнера
    
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`

**DI (Dependency Injection — Внедрение зависимостей):**
Конкретная реализация принципа IoC. Контейнер Spring «внедряет» зависимости в объект одним из способов.

**Способы внедрения зависимостей:**

**1. Constructor Injection (через конструктор) — РЕКОМЕНДУЕТСЯ:**
\`\`\`java
@Service
public class UserService {
    private final UserRepository repository;
    
    @Autowired  // с Spring 4.3 можно не указывать, если конструктор один
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`
Преимущества: зависимости финальны (final), объект полностью инициализирован после создания, легко тестировать.

**2. Setter Injection (через сеттер):**
\`\`\`java
@Service
public class UserService {
    private UserRepository repository;
    
    @Autowired
    public void setRepository(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`
Используется, когда зависимость опциональна или может меняться.

**3. Field Injection (через поле) — НЕ РЕКОМЕНДУЕТСЯ:**
\`\`\`java
@Service
public class UserService {
    @Autowired
    private UserRepository repository;
}
\`\`\`
Простой синтаксис, но есть недостатки: нельзя сделать поле final, сложно тестировать, скрытые зависимости.

**Почему Constructor Injection лучше:**
- Зависимости неизменяемы (final)
- Объект не может быть создан без необходимых зависимостей
- Легко писать unit-тесты (передаём моки через конструктор)
- Явно видны все зависимости класса

**IoC-контейнер Spring:**
Управляет жизненным циклом бинов (объектов). Создаёт бины, внедряет зависимости, управляет их жизненным циклом.

**Ключевые моменты:**
- IoC — передача управления контейнеру
- DI — конкретная реализация IoC
- 3 способа: конструктор (рекомендуется), сеттер, поле
- Constructor Injection даёт неизменяемость и тестируемость

💡 **Для собеседования:** IoC — принцип передачи управления контейнеру, DI — его реализация. Три способа внедрения: через конструктор (рекомендуется), сеттер и поле. Constructor Injection предпочтительнее, так как делает зависимости final и упрощает тестирование.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-core-3`,
"title": `Аннотации: @Component, @Service, @Repository, @Controller, @Bean, @Configuration.`,
"fullAnswer": `Эти аннотации используются для регистрации бинов (объектов) в IoC-контейнере Spring.

**@Component:**
Базовая аннотация для любого Spring-компонента. Говорит Spring: «Создай бин из этого класса».

\`\`\`java
@Component
public class MyComponent {
    // ...
}
\`\`\`

**@Service:**
Специализация @Component для сервисного слоя (бизнес-логика). Семантически указывает, что класс содержит бизнес-логику. Технически работает как @Component.

\`\`\`java
@Service
public class UserService {
    public User findById(int id) { ... }
}
\`\`\`

**@Repository:**
Специализация @Component для слоя доступа к данным (DAO). Дополнительно автоматически переводит исключения БД в Spring DataAccessException.

\`\`\`java
@Repository
public class UserRepository {
    public User findById(int id) { ... }
}
\`\`\`

**@Controller:**
Специализация @Component для веб-контроллеров Spring MVC. Обрабатывает HTTP-запросы.

\`\`\`java
@Controller
public class HomeController {
    @GetMapping("/")
    public String home() { return "home"; }
}
\`\`\`

**@RestController:**
Комбинация @Controller и @ResponseBody. Методы возвращают данные (JSON/XML), а не имя представления.

\`\`\`java
@RestController
public class ApiController {
    @GetMapping("/api/users")
    public List<User> getUsers() { ... }
}
\`\`\`

**@Configuration:**
Указывает, что класс содержит конфигурацию Spring. Обычно используется вместе с @Bean.

\`\`\`java
@Configuration
public class AppConfig {
    // ...
}
\`\`\`

**@Bean:**
Используется внутри @Configuration-классов для явного создания бина. Применяется, когда нужно создать объект стороннего класса (не вашего), который Spring не может создать автоматически.

\`\`\`java
@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() {
        return new HikariDataSource();  // сторонний класс
    }
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
\`\`\`

**Различия @Component и @Bean:**
@Component используется на классе, который вы контролируете. Spring сам создаёт экземпляр. @Bean используется в конфигурации для создания объектов, которые вы не можете аннотировать напрямую (сторонние библиотеки).

**Иерархия стереотипов:**
@Component — базовая аннотация. @Service, @Repository, @Controller — специализации, которые несут семантический смысл и помогают в организации кода.

**Ключевые моменты:**
- @Component — базовая аннотация для бина
- @Service — для бизнес-логики
- @Repository — для DAO, конвертирует исключения БД
- @Controller / @RestController — для веб-контроллеров
- @Configuration + @Bean — для явной конфигурации

💡 **Для собеседования:** @Component — базовая аннотация. @Service, @Repository, @Controller — специализации с семантическим смыслом. @Configuration + @Bean используются для явной регистрации бинов, особенно сторонних классов.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-core-4`,
"title": `Что такое Spring Bean и application.properties/yml?`,
"fullAnswer": `**Spring Bean:**
Bean — это объект, который управляется IoC-контейнером Spring. Контейнер создаёт бин, внедряет зависимости, управляет его жизненным циклом (инициализация и уничтожение).

**Жизненный цикл бина:**
1. Создание экземпляра (через конструктор)
2. Внедрение зависимостей (DI)
3. Вызов методов инициализации (@PostConstruct)
4. Бин готов к использованию
5. При закрытии контейнера — вызов методов уничтожения (@PreDestroy)

\`\`\`java
@Component
public class MyBean {
    @PostConstruct
    public void init() {
        System.out.println("Бин создан");
    }
    
    @PreDestroy
    public void destroy() {
        System.out.println("Бин уничтожается");
    }
}
\`\`\`

**Scope (область видимости) бинов:**
- **singleton** (по умолчанию) — один экземпляр на весь контейнер
- **prototype** — новый экземпляр при каждом запросе
- **request** — один экземпляр на HTTP-запрос (web)
- **session** — один экземпляр на HTTP-сессию (web)

\`\`\`java
@Component
@Scope("prototype")
public class PrototypeBean { ... }
\`\`\`

**application.properties / application.yml:**
Файлы конфигурации Spring Boot. Хранят настройки приложения: параметры БД, порты сервера, внешние URL и т.д.

**application.properties:**
\`\`\`properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
app.name=My Application
\`\`\`

**application.yml (YAML):**
Более читаемый формат с иерархической структурой:
\`\`\`yaml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret
app:
  name: My Application
\`\`\`

**Использование в коде:**

Через @Value:
\`\`\`java
@Value("\${app.name}")
private String appName;
\`\`\`

Через @ConfigurationProperties (для группы свойств):
\`\`\`java
@ConfigurationProperties(prefix = "app")
@Component
public class AppProperties {
    private String name;
    // геттеры и сеттеры
}
\`\`\`

**Профили:**
Можно создавать разные файлы для разных окружений:
- \`application.properties\` — общие настройки
- \`application-dev.properties\` — для разработки
- \`application-prod.properties\` — для продакшена

Активация профиля: \`spring.profiles.active=dev\`

**Ключевые моменты:**
- Bean — объект, управляемый Spring-контейнером
- Жизненный цикл: создание → DI → инициализация → использование → уничтожение
- Scope: singleton (по умолчанию), prototype, request, session
- application.properties/yml — внешняя конфигурация
- @Value и @ConfigurationProperties для чтения настроек

 **Для собеседования:** Bean — объект под управлением Spring-контейнера. Singleton — один экземпляр, prototype — новый при каждом запросе. application.properties/yml — внешняя конфигурация. Значения читаются через @Value или @ConfigurationProperties.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-mvc`,
"title": `Spring MVC`,
"questions": [
{
"id": `8-junior-spring-mvc-1`,
"title": `Что такое @RestController?`,
"fullAnswer": `**@RestController** — аннотация Spring MVC для создания RESTful веб-сервисов. Это комбинация двух аннотаций: @Controller и @ResponseBody.

**@Controller** — помечает класс как веб-контроллер, который обрабатывает HTTP-запросы.

**@ResponseBody** — говорит Spring, что возвращаемое значение метода нужно сериализовать в тело HTTP-ответа (обычно в JSON или XML), а не интерпретировать как имя view (шаблона).

\`\`\`java
@RestController  // = @Controller + @ResponseBody
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();  // автоматически конвертируется в JSON
    }
}
\`\`\`

**Без @ResponseBody (обычный @Controller):**
\`\`\`java
@Controller
public class ViewController {
    @GetMapping("/home")
    public String home() {
        return "home";  // имя шаблона home.html, НЕ JSON
    }
}
\`\`\`

**С @ResponseBody:**
\`\`\`java
@Controller
public class ApiController {
    @GetMapping("/api/data")
    @ResponseBody
    public Map<String, String> getData() {
        return Map.of("key", "value");  // вернётся как JSON
    }
}
\`\`\`

**RESTful принципы:**
REST (Representational State Transfer) — архитектурный стиль для веб-сервисов. Основные принципы:
- Использование HTTP-методов (GET, POST, PUT, DELETE)
- Stateless — сервер не хранит состояние между запросами
- Ресурсы идентифицируются через URL
- Данные передаются в формате JSON или XML

**Типичная структура REST-контроллера:**
\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping           // GET /api/users — получить всех
    public List<User> getAll() { ... }
    
    @GetMapping("/{id}")  // GET /api/users/1 — получить по ID
    public User getById(@PathVariable int id) { ... }
    
    @PostMapping          // POST /api/users — создать
    public User create(@RequestBody User user) { ... }
    
    @PutMapping("/{id}")  // PUT /api/users/1 — обновить
    public User update(@PathVariable int id, @RequestBody User user) { ... }
    
    @DeleteMapping("/{id}") // DELETE /api/users/1 — удалить
    public void delete(@PathVariable int id) { ... }
}
\`\`\`

**Ключевые моменты:**
- @RestController = @Controller + @ResponseBody
- Возвращает данные (JSON), а не имя view
- Используется для REST API
- HTTP-методы: GET (чтение), POST (создание), PUT (обновление), DELETE (удаление)

💡 **Для собеседования:** @RestController — комбинация @Controller и @ResponseBody. Используется для REST API, возвращает данные в формате JSON. REST следует принципам: HTTP-методы, stateless, ресурсы через URL.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-mvc-2`,
"title": `Аннотации маппинга: @GetMapping, @PostMapping и др.`,
"fullAnswer": `Аннотации маппинга связывают HTTP-запросы с методами контроллера. Все они являются специализациями общей аннотации @RequestMapping.

**@RequestMapping:**
Базовая аннотация. Может применяться к классу и методу. Указывает URL, HTTP-метод и другие параметры.

\`\`\`java
@RequestMapping(value = "/users", method = RequestMethod.GET)
public List<User> getUsers() { ... }
\`\`\`

**Специализированные аннотации (рекомендуются):**

**@GetMapping** — для HTTP GET запросов (получение данных):
\`\`\`java
@GetMapping("/users")
public List<User> getUsers() { ... }

@GetMapping("/users/{id}")
public User getUserById(@PathVariable int id) { ... }
\`\`\`

**@PostMapping** — для HTTP POST запросов (создание ресурса):
\`\`\`java
@PostMapping("/users")
public User createUser(@RequestBody User user) { ... }
\`\`\`

**@PutMapping** — для HTTP PUT запросов (полное обновление):
\`\`\`java
@PutMapping("/users/{id}")
public User updateUser(@PathVariable int id, @RequestBody User user) { ... }
\`\`\`

**@PatchMapping** — для HTTP PATCH запросов (частичное обновление):
\`\`\`java
@PatchMapping("/users/{id}")
public User patchUser(@PathVariable int id, @RequestBody Map<String, Object> updates) { ... }
\`\`\`

**@DeleteMapping** — для HTTP DELETE запросов (удаление):
\`\`\`java
@DeleteMapping("/users/{id}")
public void deleteUser(@PathVariable int id) { ... }
\`\`\`

**Параметры аннотаций:**
- \`value\` или \`path\` — URL-путь
- \`produces\` — тип ответа (например, "application/json")
- \`consumes\` — тип запроса

\`\`\`java
@GetMapping(value = "/users", produces = "application/json")
\`\`\`

**HTTP-методы и их семантика:**
GET — получение данных, идемпотентный (повторный вызов даёт тот же результат), безопасный (не изменяет состояние).

POST — создание ресурса, не идемпотентный (каждый вызов создаёт новый ресурс).

PUT — полное обновление ресурса, идемпотентный.

PATCH — частичное обновление, не обязательно идемпотентный.

DELETE — удаление ресурса, идемпотентный.

**Идемпотентность** означает, что повторный вызов с теми же параметрами даёт тот же результат, что и первый.

**Ключевые моменты:**
- @RequestMapping — базовая аннотация
- @GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping — специализации
- GET — чтение, POST — создание, PUT — обновление, DELETE — удаление
- Идемпотентные методы: GET, PUT, DELETE

 **Для собеседования:** Аннотации маппинга связывают HTTP-запросы с методами. @GetMapping для чтения, @PostMapping для создания, @PutMapping для обновления, @DeleteMapping для удаления. GET, PUT, DELETE — идемпотентные методы.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-mvc-3`,
"title": `Как получить данные из запроса (@PathVariable, @RequestParam, @RequestBody)?`,
"fullAnswer": `Spring MVC предоставляет несколько аннотаций для извлечения данных из HTTP-запроса.

**@PathVariable:**
Извлекает значение из URL-пути. Используется для RESTful URL с параметрами.

\`\`\`java
@GetMapping("/users/{id}")
public User getUser(@PathVariable int id) {
    // GET /users/42 → id = 42
    return userService.findById(id);
}

@GetMapping("/users/{userId}/posts/{postId}")
public Post getPost(@PathVariable int userId, @PathVariable int postId) {
    // GET /users/42/posts/100 → userId = 42, postId = 100
}
\`\`\`

**@RequestParam:**
Извлекает значение из query-параметров (после ? в URL).

\`\`\`java
@GetMapping("/users")
public List<User> getUsers(
    @RequestParam String name,
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size
) {
    // GET /users?name=John&page=1&size=20
    // name = "John", page = 1, size = 20
    return userService.findByName(name, page, size);
}
\`\`\`

Параметры @RequestParam:
- \`value\` или \`name\` — имя параметра
- \`required\` — обязателен ли (по умолчанию true)
- \`defaultValue\` — значение по умолчанию

**@RequestBody:**
Извлекает тело HTTP-запроса и десериализует его в объект (обычно из JSON).

\`\`\`java
@PostMapping("/users")
public User createUser(@RequestBody User user) {
    // POST /users с телом {"name":"John","age":30}
    // user = User(name="John", age=30)
    return userService.save(user);
}
\`\`\`

**@RequestHeader:**
Извлекает значение из HTTP-заголовков.

\`\`\`java
@GetMapping("/data")
public String getData(@RequestHeader("Authorization") String token) {
    // Получает заголовок Authorization
}
\`\`\`

**@CookieValue:**
Извлекает значение из cookie.

\`\`\`java
@GetMapping("/profile")
public String getProfile(@CookieValue("sessionId") String sessionId) {
    // Получает cookie sessionId
}
\`\`\`

**@ModelAttribute:**
Связывает параметры запроса с полями объекта.

\`\`\`java
@GetMapping("/search")
public List<User> search(@ModelAttribute UserFilter filter) {
    // ?name=John&age=30 → filter.name = "John", filter.age = 30
}
\`\`\`

**Различия:**
@PathVariable — для параметров в пути URL (/users/42). @RequestParam — для query-параметров (?name=John). @RequestBody — для тела запроса (JSON при POST/PUT).

**Ключевые моменты:**
- @PathVariable — параметры из URL-пути
- @RequestParam — query-параметры после ?
- @RequestBody — тело запроса (JSON)
- @RequestHeader — HTTP-заголовки
- @CookieValue — cookie

 **Для собеседования:** @PathVariable извлекает параметры из URL (/users/{id}), @RequestParam — из query-строки (?name=John), @RequestBody — тело запроса (JSON). Для заголовков — @RequestHeader, для cookie — @CookieValue.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-mvc-4`,
"title": `Что такое ResponseEntity?`,
"fullAnswer": `**ResponseEntity** — класс Spring MVC, который представляет весь HTTP-ответ: статус, заголовки и тело. Позволяет полностью контролировать ответ, который отправляется клиенту.

**Базовое использование:**
\`\`\`java
@GetMapping("/users/{id}")
public ResponseEntity<User> getUser(@PathVariable int id) {
    User user = userService.findById(id);
    
    if (user != null) {
        return ResponseEntity.ok(user);  // статус 200 + тело
    } else {
        return ResponseEntity.notFound().build();  // статус 404 без тела
    }
}
\`\`\`

**Статусы ответа:**
ResponseEntity позволяет задать любой HTTP-статус:

\`\`\`java
// 200 OK
ResponseEntity.ok(user)

// 201 Created
ResponseEntity.status(HttpStatus.CREATED).body(newUser)

// 204 No Content
ResponseEntity.noContent().build()

// 400 Bad Request
ResponseEntity.badRequest().body("Неверные данные")

// 401 Unauthorized
ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()

// 403 Forbidden
ResponseEntity.status(HttpStatus.FORBIDDEN).build()

// 404 Not Found
ResponseEntity.notFound().build()

// 500 Internal Server Error
ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
\`\`\`

**Заголовки:**
\`\`\`java
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile() {
    byte[] fileContent = getFileContent();
    
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
    headers.setContentDispositionFormData("attachment", "file.pdf");
    
    return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
}
\`\`\`

**Builder-паттерн:**
ResponseEntity использует builder для удобного создания ответов:

\`\`\`java
ResponseEntity<User> response = ResponseEntity
    .status(HttpStatus.CREATED)
    .header("Custom-Header", "value")
    .contentType(MediaType.APPLICATION_JSON)
    .body(user);
\`\`\`

**Когда использовать ResponseEntity:**
Используйте, когда нужно контролировать статус ответа или заголовки. Если достаточно вернуть просто данные со статусом 200, можно обойтись без ResponseEntity:

\`\`\`java
// Проще, но без контроля статуса
@GetMapping("/users")
public List<User> getUsers() {
    return userService.findAll();  // всегда 200 OK
}

// С контролем
@PostMapping("/users")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User created = userService.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(created);
}
\`\`\`

**Ключевые моменты:**
- ResponseEntity представляет весь HTTP-ответ: статус, заголовки, тело
- Позволяет задать любой HTTP-статус (200, 201, 404, 500 и т.д.)
- Использует builder-паттерн для удобного создания
- Необходим, когда нужно контролировать статус или заголовки

💡 **Для собеседования:** ResponseEntity — обёртка над HTTP-ответом, позволяет контролировать статус, заголовки и тело. Используется, когда нужно вернуть не-200 статус или кастомные заголовки. Строится через builder-паттерн.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `jpa-hibernate`,
"title": `JPA / Hibernate`,
"questions": [
{
"id": `8-junior-jpa-hibernate-1`,
"title": `Что такое ORM и JPA? Чем JPA отличается от Hibernate?`,
"fullAnswer": `**ORM (Object-Relational Mapping):**
Технология, которая позволяет работать с реляционной базой данных через объекты Java. Вместо написания SQL-запросов вручную, вы работаете с объектами, а ORM сам генерирует SQL.

\`\`\`java
// Без ORM (JDBC)
String sql = "SELECT * FROM users WHERE id = ?";
PreparedStatement stmt = connection.prepareStatement(sql);
stmt.setInt(1, userId);
ResultSet rs = stmt.executeQuery();
User user = new User();
user.setId(rs.getInt("id"));
user.setName(rs.getString("name"));

// С ORM (JPA)
User user = entityManager.find(User.class, userId);
\`\`\`

**JPA (Java Persistence API):**
Это **спецификация** (стандарт, интерфейс), которая описывает, как должно работать ORM в Java. JPA сама по себе не реализует ничего — это только набор интерфейсов и аннотаций.

**Hibernate:**
Это **реализация** JPA. Самая популярная ORM-библиотека для Java. Hibernate реализует все интерфейсы JPA и добавляет свои расширения.

**Аналогия:**
JPA — это как интерфейс в Java (например, List). Hibernate — это как конкретная реализация (например, ArrayList). Можно использовать Hibernate напрямую (без JPA), но чаще используют через JPA-интерфейс для независимости от конкретной реализации.

**Другие реализации JPA:**
- EclipseLink
- OpenJPA
- Hibernate (самая популярная)

**Преимущества ORM:**
- Не нужно писать SQL вручную
- Объектно-ориентированный подход к БД
- Автоматическое управление связями между таблицами
- Переносимость между разными СУБД
- Кэширование запросов

**Недостатки ORM:**
- Сложные запросы менее эффективны, чем ручной SQL
- Нужно понимать, какой SQL генерируется
-可能出现 N+1 проблема при неправильном использовании связей

**Ключевые моменты:**
- ORM — маппинг объектов на таблицы БД
- JPA — спецификация (стандарт), набор интерфейсов
- Hibernate — реализация JPA
- JPA как интерфейс, Hibernate как реализация

💡 **Для собеседования:** ORM позволяет работать с БД через объекты. JPA — это спецификация (интерфейс), Hibernate — её реализация. Аналогия: JPA как List, Hibernate как ArrayList. JPA даёт независимость от конкретной реализации.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-jpa-hibernate-2`,
"title": `Как создать сущность (@Entity, @Id, @GeneratedValue)?`,
"fullAnswer": `**Сущность (Entity)** — это Java-класс, который отображается на таблицу в базе данных. Каждый объект сущности — это строка в таблице.

**Базовая структура сущности:**
\`\`\`java
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_name", nullable = false, length = 50)
    private String name;
    
    @Column(unique = true)
    private String email;
    
    private Integer age;
    
    // Конструктор по умолчанию обязателен!
    public User() {}
    
    // Геттеры и сеттеры
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    // ...
}
\`\`\`

**Основные аннотации:**

**@Entity:**
Помечает класс как JPA-сущность. По умолчанию имя таблицы совпадает с именем класса. Можно изменить через @Table.

**@Table:**
Задаёт имя таблицы и другие параметры:
\`\`\`java
@Table(name = "users", schema = "public")
\`\`\`

**@Id:**
Помечает поле как первичный ключ (primary key). Обязательно для каждой сущности.

**@GeneratedValue:**
Определяет стратегию генерации первичного ключа:
- \`GenerationType.IDENTITY\` — автоинкремент (MySQL, PostgreSQL)
- \`GenerationType.SEQUENCE\` — через последовательность (Oracle, PostgreSQL)
- \`GenerationType.TABLE\` — через отдельную таблицу (редко используется)
- \`GenerationType.AUTO\` — провайдер выбирает стратегию (по умолчанию)

**@Column:**
Настраивает маппинг поля на колонку:
\`\`\`java
@Column(
    name = "user_name",      // имя колонки
    nullable = false,         // NOT NULL
    unique = true,            // UNIQUE
    length = 50,              // VARCHAR(50)
    precision = 10,           // для чисел
    scale = 2                 // для чисел
)
private String name;
\`\`\`

**Правила создания сущности:**
- Класс должен быть public
- Должен быть конструктор без параметров (может быть protected)
- Класс не должен быть final
- Поля не должны быть final (для ленивой загрузки)
- Должен иметь поле с @Id

**Жизненный цикл сущности:**
- **New (Transient)** — объект создан, но не сохранён в БД
- **Managed** — объект связан с persistence context, изменения автоматически сохраняются
- **Detached** — объект был сохранён, но контекст закрыт
- **Removed** — объект помечен на удаление

**Ключевые моменты:**
- @Entity помечает класс как сущность
- @Id — первичный ключ
- @GeneratedValue — стратегия генерации ID
- @Column — настройки колонки
- Обязателен конструктор без параметров

💡 **Для собеседования:** Сущность — класс, отображаемый на таблицу БД. @Entity помечает класс, @Id — первичный ключ, @GeneratedValue — стратегия автогенерации ID (IDENTITY, SEQUENCE, AUTO). @Column настраивает параметры колонки. Обязателен конструктор без параметров.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-jpa-hibernate-3`,
"title": `Что такое JpaRepository и его методы?`,
"fullAnswer": `**JpaRepository** — это интерфейс Spring Data JPA, который предоставляет готовые методы для работы с сущностями в базе данных. Вам не нужно писать реализацию — Spring создаёт её автоматически.

**Создание репозитория:**
\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {
    // Long — тип первичного ключа сущности User
    
    // Можно добавлять свои методы
    List<User> findByName(String name);
}
\`\`\`

**Встроенные методы JpaRepository:**

**Сохранение:**
- \`save(entity)\` — сохранить или обновить сущность. Если ID есть — обновляет, если нет — создаёт.
- \`saveAll(entities)\` — сохранить коллекцию сущностей.
- \`saveAndFlush(entity)\` — сохранить и сразу отправить в БД (без ожидания транзакции).

**Поиск:**
- \`findById(id)\` — найти по ID, возвращает Optional
- \`findAll()\` — найти все сущности
- \`findAllById(ids)\` — найти по списку ID
- \`getOne(id)\` / \`getReferenceById(id)\` — получить ссылку (ленивая загрузка)

**Подсчёт:**
- \`count()\` — количество всех сущностей
- \`existsById(id)\` — существует ли сущность с таким ID

**Удаление:**
- \`delete(entity)\` — удалить сущность
- \`deleteById(id)\` — удалить по ID
- \`deleteAll()\` — удалить все
- \`deleteAllInBatch()\` — удалить все одним SQL-запросом (быстрее)

**Пагинация и сортировка:**
- \`findAll(Pageable pageable)\` — найти с пагинацией
- \`findAll(Sort sort)\` — найти с сортировкой

**Пример использования:**
\`\`\`java
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    public List<User> getUsersPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable).getContent();
    }
}
\`\`\`

**Собственные методы (Query Methods):**
Spring Data автоматически генерирует запросы по имени метода:

\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {
    // SELECT * FROM users WHERE name = ?
    List<User> findByName(String name);
    
    // SELECT * FROM users WHERE name = ? AND age > ?
    List<User> findByNameAndAgeGreaterThan(String name, int age);
    
    // SELECT * FROM users WHERE email LIKE %?%
    List<User> findByEmailContaining(String email);
    
    // SELECT * FROM users ORDER BY name ASC
    List<User> findAllByOrderByNameAsc();
    
    // SELECT COUNT(*) FROM users WHERE age > ?
    long countByAgeGreaterThan(int age);
}
\`\`\`

**Ключевые моменты:**
- JpaRepository предоставляет CRUD-методы из коробки
- Не нужно писать реализацию — Spring создаёт её автоматически
- Можно добавлять свои методы, Spring сгенерирует SQL по имени
- Поддерживает пагинацию и сортировку

 **Для собеседования:** JpaRepository — интерфейс Spring Data JPA с готовыми CRUD-методами (save, findById, findAll, delete). Spring автоматически создаёт реализацию. Можно добавлять свои методы — Spring генерирует SQL по имени метода (findByName, findByAgeGreaterThan и т.д.).`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-jpa-hibernate-4`,
"title": `Типы связей: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany.`,
"fullAnswer": `В реляционных базах данных таблицы связаны между собой. JPA позволяет описывать эти связи через аннотации.

**@OneToOne (один к одному):**
Каждый объект одной сущности связан с одним объектом другой.

Пример: User и Passport — у одного пользователя один паспорт.

\`\`\`java
@Entity
public class User {
    @Id
    private Long id;
    private String name;
    
    @OneToOne
    @JoinColumn(name = "passport_id")  // внешний ключ в таблице users
    private Passport passport;
}

@Entity
public class Passport {
    @Id
    private Long id;
    private String number;
    
    @OneToOne(mappedBy = "passport")  // обратная связь
    private User user;
}
\`\`\`

**@OneToMany (один ко многим):**
Один объект связан с несколькими объектами другой сущности.

Пример: Department и Employee — в одном отделе много сотрудников.

\`\`\`java
@Entity
public class Department {
    @Id
    private Long id;
    private String name;
    
    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    private Long id;
    private String name;
    
    @ManyToOne
    @JoinColumn(name = "department_id")  // внешний ключ в таблице employees
    private Department department;
}
\`\`\`

**@ManyToOne (многие к одному):**
Обратная связь для @OneToMany. Всегда используется вместе.

**@ManyToMany (многие ко многим):**
Объекты одной сущности связаны с несколькими объектами другой, и наоборот.

Пример: Student и Course — студент посещает много курсов, курс имеет много студентов.

\`\`\`java
@Entity
public class Student {
    @Id
    private Long id;
    private String name;
    
    @ManyToMany
    @JoinTable(
        name = "student_course",  // промежуточная таблица
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}

@Entity
public class Course {
    @Id
    private Long id;
    private String title;
    
    @ManyToMany(mappedBy = "courses")
    private List<Student> students;
}
\`\`\`

**Важные параметры:**

**fetch — стратегия загрузки:**
- \`FetchType.LAZY\` (по умолчанию для коллекций) — загружается при обращении
- \`FetchType.EAGER\` (по умолчанию для @OneToOne и @ManyToOne) — загружается сразу

\`\`\`java
@OneToMany(fetch = FetchType.LAZY)
private List<Employee> employees;
\`\`\`

**cascade — каскадные операции:**
Определяет, какие операции с родителем применяются к дочерним объектам.
- \`CascadeType.PERSIST\` — сохранение
- \`CascadeType.MERGE\` — обновление
- \`CascadeType.REMOVE\` — удаление
- \`CascadeType.ALL\` — все операции

\`\`\`java
@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
private List<Employee> employees;
\`\`\`

**orphanRemoval:**
Если true, дочерние объекты, удалённые из коллекции, автоматически удаляются из БД.

**Проблема N+1:**
При FetchType.LAZY для каждого дочернего объекта выполняется отдельный запрос. Решается через JOIN FETCH или EntityGraph.

**Ключевые моменты:**
- @OneToOne — связь один к одному
- @OneToMany / @ManyToOne — один ко многим (всегда вместе)
- @ManyToMany — многие ко многим, требует промежуточную таблицу
- fetch: LAZY (ленивая) или EAGER (жадная)
- cascade — каскадные операции

💡 **Для собеседования:** @OneToOne — один к одному, @OneToMany/@ManyToOne — один ко многим, @ManyToMany — многие ко многим (с промежуточной таблицей). Fetch: LAZY (по умолчанию для коллекций) или EAGER. Cascade определяет каскадные операции.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-security`,
"title": `Spring Security`,
"questions": [
{
"id": `8-junior-spring-security-1`,
"title": `Что такое аутентификация и авторизация?`,
"fullAnswer": `**Аутентификация (Authentication)** — процесс проверки личности пользователя. Отвечает на вопрос «Кто ты?».

Примеры: ввод логина и пароля, отпечаток пальца, SMS-код, OAuth через Google.

**Авторизация (Authorization)** — процесс проверки прав пользователя. Отвечает на вопрос «Что тебе разрешено делать?».

Примеры: обычный пользователь может читать статьи, администратор — редактировать.

**Различия:**
Аутентификация происходит первой — система должна узнать, кто пользователь. Авторизация происходит после — система проверяет, что этому пользователю разрешено.

Можно быть аутентифицированным (вошёл в систему), но не авторизованным (нет доступа к определённому ресурсу).

**Пример из жизни:**
Аутентификация — показать паспорт на входе в здание. Авторизация — пропуск в определённые комнаты (офис, серверная).

**В Spring Security:**

**Аутентификация:**
\`\`\`java
@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()  // доступно всем
                .requestMatchers("/admin/**").hasRole("ADMIN")  // только админам
                .anyRequest().authenticated()  // остальные — только аутентифицированным
            )
            .formLogin(form -> form
                .loginPage("/login")  // страница входа
                .permitAll()
            );
        return http.build();
    }
}
\`\`\`

**Аннотации для авторизации:**
\`\`\`java
@Service
public class UserService {
    
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(int id) { ... }  // только админ
    
    @PreAuthorize("hasAuthority('READ_PRIVILEGE')")
    public User getUser(int id) { ... }  // с определённым правом
    
    @PreAuthorize("#id == authentication.principal.id")
    public User getUserProfile(int id) { ... }  // только свой профиль
}
\`\`\`

**Роли и привилегии:**
- **Role (роль)** — крупная категория пользователя (USER, ADMIN, MODERATOR). В Spring автоматически добавляется префикс ROLE_.
- **Authority (привилегия)** — конкретное право (READ_USERS, DELETE_POSTS).

**Токены и сессии:**
После успешной аутентификации сервер создаёт сессию или выдаёт токен (например, JWT). Клиент отправляет его с каждым запросом для подтверждения личности.

**Ключевые моменты:**
- Аутентификация — проверка личности (кто ты)
- Авторизация — проверка прав (что разрешено)
- Сначала аутентификация, потом авторизация
- В Spring Security настраивается через SecurityFilterChain

💡 **Для собеседования:** Аутентификация — проверка личности (логин/пароль), авторизация — проверка прав доступа. В Spring Security настраивается через SecurityFilterChain. Роли (ADMIN, USER) и привилегии (READ, WRITE) определяют доступ к ресурсам.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-junior-spring-security-2`,
"title": `Как подключить Spring Security? Базовая аутентификация.`,
"fullAnswer": `**Подключение Spring Security:**

**1. Добавить зависимость:**
В Maven (pom.xml):
\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
\`\`\`

В Gradle (build.gradle):
\`\`\`gradle
implementation 'org.springframework.boot:spring-boot-starter-security'
\`\`\`

**2. Базовая конфигурация:**
После добавления зависимости все эндпоинты автоматически защищаются. При попытке доступа появится форма входа.

Spring Boot создаёт пользователя по умолчанию:
- Имя: \`user\`
- Пароль: выводится в консоли при запуске

**3. Кастомная конфигурация:**
Создайте класс конфигурации:

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**", "/login").permitAll()  // публичные
                .requestMatchers("/admin/**").hasRole("ADMIN")  // только админ
                .anyRequest().authenticated()  // остальные требуют аутентификации
            )
            .formLogin(form -> form
                .loginPage("/login")
                .defaultSuccessUrl("/home", true)
                .permitAll()
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/login?logout")
                .permitAll()
            );
        
        return http.build();
    }
    
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER")
            .build();
        
        UserDetails admin = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("admin"))
            .roles("ADMIN", "USER")
            .build();
        
        return new InMemoryUserDetailsManager(user, admin);
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
\`\`\`

**UserDetailsService:**
Интерфейс для загрузки данных пользователя. В примере используется InMemoryUserDetailsManager (пользователи в памяти). В реальном приложении используется JpaUserDetailsService для загрузки из БД.

**PasswordEncoder:**
Пароли нельзя хранить в открытом виде. BCryptPasswordEncoder хэширует пароли с солью.

**JWT-аутентификация:**
Для REST API чаще используется JWT (JSON Web Token) вместо сессий:

\`\`\`java
// При логине
@PostMapping("/login")
public String login(@RequestBody LoginRequest request) {
    // Проверка логина/пароля
    return jwtTokenProvider.generateToken(username);  // возвращаем токен
}

// При запросе
@GetMapping("/api/data")
public String getData(@RequestHeader("Authorization") String token) {
    String username = jwtTokenProvider.getUsernameFromToken(token);
    // ...
}
\`\`\`

**Основные концепции Spring Security:**
- SecurityFilterChain — цепочка фильтров безопасности
- Authentication — информация о пользователе
- Authorization — права доступа
- UserDetailsService — загрузка пользователей
- PasswordEncoder — хэширование паролей

**Ключевые моменты:**
- Зависимость spring-boot-starter-security
- SecurityFilterChain настраивает правила доступа
- UserDetailsService загружает пользователей
- PasswordEncoder хэширует пароли
- JWT для REST API, сессии для web-приложений

💡 **Для собеседования:** Spring Security подключается через starter-зависимость. Настраивается через SecurityFilterChain. UserDetailsService загружает пользователей, PasswordEncoder хэширует пароли. Для REST API используется JWT, для web — сессии.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `java-core`,
"title": `Java Core`,
"questions": [
{
"id": `8-middle-java-core-1`,
"title": `Новые фичи Java 9-17 (Records, Sealed classes, Pattern matching).`,
"fullAnswer": `За период с Java 9 по Java 17 язык получил множество важных улучшений. Разберём ключевые фичи.

**Records (Java 14, стабильно с 16):**
Records — это компактный способ объявления классов, предназначенных только для хранения данных. Они автоматически генерируют конструктор, геттеры, \`equals()\`, \`hashCode()\` и \`toString()\`.

\`\`\`java
// До Records
public class User {
    private final String name;
    private final int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    // плюс equals, hashCode, toString...
}

// С Records
public record User(String name, int age) {}
\`\`\`

Records неизменяемы (immutable) — все поля final. Они идеально подходят для DTO, результатов запросов, кортежей.

**Sealed Classes (Java 15, стабильно с 17):**
Sealed (запечатанные) классы и интерфейсы ограничивают, какие классы могут их наследовать или реализовывать. Это даёт контроль над иерархией типов.

\`\`\`java
public sealed interface Shape permits Circle, Square, Triangle {
    double area();
}

public final class Circle implements Shape {
    private final double radius;
    // ...
}

public final class Square implements Shape {
    private final double side;
    // ...
}

// Triangle нельзя добавить без изменения permits
\`\`\`

Sealed classes отлично работают с pattern matching — компилятор может проверить exhaustiveness (полноту обработки всех вариантов).

**Pattern Matching (Java 14-17, поэтапно):**

**instanceof с pattern matching (Java 16):**
\`\`\`java
// До
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// После
if (obj instanceof String s) {
    System.out.println(s.length());
}
\`\`\`

**Switch с pattern matching (Java 17, preview):**
\`\`\`java
String formatted = switch (obj) {
    case Integer i -> String.format("int %d", i);
    case Long l -> String.format("long %d", l);
    case Double d -> String.format("double %f", d);
    case String s -> String.format("String %s", s);
    default -> obj.toString();
};
\`\`\`

**Другие важные фичи:**

**Text Blocks (Java 13-15):**
\`\`\`java
String json = """
    {
        "name": "John",
        "age": 30
    }
    """;
\`\`\`

**Var для локальных переменных (Java 10):**
\`\`\`java
var list = new ArrayList<String>();  // тип выводится автоматически
\`\`\`

**Modules (Java 9):**
Система модулей (Project Jigsaw) для лучшей инкапсуляции и управления зависимостями через \`module-info.java\`.

**HTTP Client API (Java 11):**
\`\`\`java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com"))
    .build();
HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
\`\`\`

**Для собеседования:** Records — неизменяемые классы для данных с автогенерацией методов. Sealed classes ограничивают наследование. Pattern matching упрощает instanceof и switch. Text Blocks удобны для многострочных строк. Modules дают контроль над зависимостями.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-java-core-2`,
"title": `Память в Java (Heap, Stack, Metaspace) и Garbage Collection (G1, ZGC).`,
"fullAnswer": `Java использует автоматическое управление памятью через JVM. Разберём структуру памяти и сборщики мусора.

**Структура памяти JVM:**

**Stack (стек):**
Хранит локальные переменные, ссылки на объекты, информацию о вызовах методов. Каждый поток имеет свой стек. Быстрый доступ, небольшой размер. При выходе из метода фрейм стека удаляется.

\`\`\`java
public void method() {
    int x = 10;           // примитив на стеке
    String s = "hello";   // ссылка на стеке, объект в куче
}
\`\`\`

**Heap (куча):**
Основная область для хранения объектов. Делится на поколения:
- **Young Generation** — новые объекты (Eden + 2 Survivor пространства)
- **Old Generation (Tenured)** — долгоживущие объекты
- **Permanent/Metaspace** — метаданные классов

Объекты создаются в Eden. При заполнении Young GC перемещает выжившие в Survivor. После нескольких циклов объекты попадают в Old Generation.

**Metaspace (с Java 8):**
Заменил PermGen. Хранит метаданные классов, методы, константы. Расположен в нативной памяти (не в JVM heap). Растёт динамически, ограничен только размером доступной памяти.

**Garbage Collection:**

**G1 (Garbage First, по умолчанию с Java 9):**
Разбивает heap на регионы (regions) фиксированного размера. Собирает сначала регионы с наибольшим объёмом мусора (отсюда название). Предсказуемое время пауз.

\`\`\`bash
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200  # целевое время паузы
\`\`\`

Особенности G1:
- Параллельная и конкурентная фаза
- Избегает full GC через эвакуацию
- Хорошо работает с большими heap (>4GB)
- Паузы обычно 10-50ms

**ZGC (Z Garbage Collector, production-ready с Java 15):**
Low-latency сборщик для очень больших heap (до 16TB). Паузы не превышают 1ms независимо от размера heap.

\`\`\`bash
-XX:+UseZGC
\`\`\`

Особенности ZGC:
- Конкурентная разметка и перемещение
- Цветные указатели (colored pointers) для метаданных
- Load barriers для чтения ссылок
- Идеален для приложений с жёсткими требованиями к latency

**Shenandoah (альтернатива ZGC):**
Похож на ZGC, разработан Red Hat. Тоже обеспечивает паузы <1ms.

**Выбор GC:**
Для большинства приложений G1 — оптимальный выбор. Для low-latency систем (биржи, игры) — ZGC или Shenandoah. Для маленьких heap (<4GB) можно рассмотреть Parallel GC.

**Мониторинг:**
\`\`\`bash
-verbose:gc
-XX:+PrintGCDetails
-XX:+UseGCLogFileRotation
\`\`\`

Или через JMX, JConsole, VisualVM, Java Flight Recorder.

**Для собеседования:** Stack хранит локальные переменные, Heap — объекты (Young/Old поколения), Metaspace — метаданные классов. G1 — сборщик по умолчанию с предсказуемыми паузами. ZGC — low-latency для больших heap с паузами <1ms. Выбор зависит от размера heap и требований к latency.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-java-core-3`,
"title": `HashMap под капотом: коллизии, ConcurrentHashMap.`,
"fullAnswer": `HashMap — одна из самых используемых коллекций в Java. Разберём её внутреннее устройство.

**Структура HashMap:**
Внутри HashMap использует массив узлов (Node[]), где каждый узел содержит ключ, значение, хэш и ссылку на следующий узел. При коллизии узлы связываются в список или дерево.

**Как работает put():**
1. Вычисляется хэш ключа: \`hash = key.hashCode() ^ (key.hashCode() >>> 16)\`
2. Определяется индекс в массиве: \`index = hash & (capacity - 1)\`
3. Если ячейка пуста — создаётся новый узел
4. Если ячейка занята (коллизия) — добавляется в список/дерево

**Коллизии:**
Коллизия возникает, когда два разных ключа дают одинаковый хэш или одинаковый индекс. До Java 8 коллизии разрешались через связный список. С Java 8 при достижении 8 элементов в списке он превращается в сбалансированное дерево (Red-Black Tree), что улучшает производительность с O(n) до O(log n).

**Параметры HashMap:**
- **Initial capacity** — начальный размер массива (по умолчанию 16)
- **Load factor** — коэффициент загрузки (по умолчанию 0.75). При достижении \`capacity * loadFactor\` происходит resize (удвоение)
- **Threshold** — порог для resize

**ConcurrentHashMap:**
Потокобезопасная версия HashMap. В отличие от Hashtable (который блокирует всю таблицу), ConcurrentHashMap использует более гранулярную блокировку.

**До Java 8:**
Использовал сегменты (segments) — каждый сегмент блокировался отдельно. По умолчанию 16 сегментов.

**С Java 8:**
Отказался от сегментов. Использует CAS (Compare-And-Swap) операции и синхронизацию только по первому узлу бакета (bin). Это даёт лучшую производительность при высокой конкуренции.

\`\`\`java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);                    // потокобезопасно
map.computeIfAbsent("key", k -> 0);   // атомарная операция
map.merge("key", 1, Integer::sum);    // атомарное обновление
\`\`\`

**Методы ConcurrentHashMap:**
- \`putIfAbsent()\` — добавить, если ключа нет
- \`compute()\` — вычислить новое значение
- \`computeIfAbsent()\` — вычислить, если отсутствует
- \`merge()\` — объединить значения
- \`forEach()\` — параллельная итерация

**Различия HashMap и ConcurrentHashMap:**
HashMap не потокобезопасна, может использоваться в одном потоке. ConcurrentHashMap потокобезопасна, позволяет параллельное чтение и ограниченную параллельную запись. HashMap допускает null ключи и значения, ConcurrentHashMap — нет.

**Для собеседования:** HashMap использует массив + списки/деревья для разрешения коллизий. С Java 8 при 8+ элементах список превращается в дерево. ConcurrentHashMap потокобезопасна через CAS и блокировку по бакету, не допускает null ключи.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-java-core-4`,
"title": `Java Memory Model: happens-before, volatile.`,
"fullAnswer": `Java Memory Model (JMM) — спецификация, определяющая, как потоки взаимодействуют через память. Критична для многопоточного программирования.

**Проблема видимости:**
Без правильной синхронизации изменения, сделанные одним потоком, могут быть не видны другим потокам. Это происходит из-за кэширования в регистрах процессора, оптимизаций компилятора и reorderings.

**Happens-Before:**
Отношение happens-before гарантирует, что действия в одном потоке видны в другом. Если действие A happens-before действия B, то результаты A видны для B.

**Правила happens-before:**

**1. Program order rule:**
Каждое действие в потоке happens-before каждое следующее действие в том же потоке.

**2. Monitor lock rule:**
Освобождение монитора (unlock) happens-before захват того же монитора (lock).

\`\`\`java
synchronized (lock) {
    x = 1;  // happens-before
}
synchronized (lock) {
    System.out.println(x);  // увидит 1
}
\`\`\`

**3. Volatile variable rule:**
Запись в volatile переменную happens-before последующее чтение той же переменной.

**4. Thread start rule:**
Вызов \`thread.start()\` happens-before любое действие в запущенном потоке.

**5. Thread termination rule:**
Любое действие в потоке happens-before завершение этого потока (join).

**6. Transitivity:**
Если A happens-before B, и B happens-before C, то A happens-before C.

**volatile:**
Ключевое слово, которое гарантирует:
- **Видимость:** изменения видны всем потокам сразу
- **Упорядоченность:** запрещает reorderings вокруг volatile операций
- **Атомарность чтения/записи:** только для 64-битных типов (long, double)

\`\`\`java
private volatile boolean running = true;

public void stop() {
    running = false;  // видно всем потокам сразу
}

public void run() {
    while (running) {  // всегда читает актуальное значение
        // работа
    }
}
\`\`\`

**Когда использовать volatile:**
- Флаги состояния (running, stopped)
- Ссылки на неизменяемые объекты
- Double-checked locking для singleton

**Когда НЕ использовать volatile:**
- Счётчики (нужен AtomicInteger)
- Составные операции (нужна синхронизация)
- Когда нужна атомарность нескольких операций

**Double-Checked Locking:**
\`\`\`java
public class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {  // первая проверка (быстрая)
            synchronized (Singleton.class) {
                if (instance == null) {  // вторая проверка (безопасная)
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

Без volatile возможна ситуация, когда поток видит частично инициализированный объект из-за reorderings.

**Для собеседования:** JMM определяет видимость изменений между потоками. Happens-before — отношение, гарантирующее видимость. Volatile обеспечивает видимость и упорядоченность, но не атомарность составных операций. Используется для флагов и double-checked locking.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-java-core-5`,
"title": `CompletableFuture: компоновка асинхронных задач.`,
"fullAnswer": `CompletableFuture (Java 8+) — мощная абстракция для асинхронного программирования. Позволяет компоновать асинхронные задачи, обрабатывать результаты и ошибки.

**Создание CompletableFuture:**

\`\`\`java
// Асинхронное выполнение
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    // длительная операция
    return "Result";
});

// С кастомным executor
ExecutorService executor = Executors.newFixedThreadPool(10);
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return "Result";
}, executor);
\`\`\`

**Получение результата:**

\`\`\`java
// Блокирующее ожидание
String result = future.get();  // ждёт бесконечно
String result = future.get(5, TimeUnit.SECONDS);  // с таймаутом

// Неблокирующее
future.thenAccept(result -> System.out.println(result));
\`\`\`

**Компоновка (Chaining):**

**thenApply — трансформация результата:**
\`\`\`java
CompletableFuture<Integer> future = CompletableFuture
    .supplyAsync(() -> "Hello")
    .thenApply(s -> s.length());  // String -> Integer
\`\`\`

**thenCompose — плоская компоновка (flatMap):**
\`\`\`java
CompletableFuture<User> future = CompletableFuture
    .supplyAsync(() -> userId)
    .thenCompose(id -> getUserAsync(id));  // возвращает CompletableFuture
\`\`\`

**thenCombine — объединение двух futures:**
\`\`\`java
CompletableFuture<String> future1 = getUserAsync(1);
CompletableFuture<String> future2 = getOrderAsync(1);

CompletableFuture<String> combined = future1.thenCombine(future2, 
    (user, order) -> user + " ordered " + order);
\`\`\`

**allOf — ожидание всех futures:**
\`\`\`java
List<CompletableFuture<User>> futures = userIds.stream()
    .map(id -> getUserAsync(id))
    .collect(Collectors.toList());

CompletableFuture<Void> allFutures = CompletableFuture.allOf(
    futures.toArray(new CompletableFuture[0])
);

allFutures.thenRun(() -> {
    List<User> users = futures.stream()
        .map(CompletableFuture::join)
        .collect(Collectors.toList());
});
\`\`\`

**anyOf — первый завершившийся:**
\`\`\`java
CompletableFuture<Object> any = CompletableFuture.anyOf(future1, future2, future3);
any.thenAccept(result -> System.out.println("First: " + result));
\`\`\`

**Обработка ошибок:**

**exceptionally — значение по умолчанию при ошибке:**
\`\`\`java
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> {
        if (true) throw new RuntimeException("Error");
        return "OK";
    })
    .exceptionally(ex -> "Fallback: " + ex.getMessage());
\`\`\`

**handle — обработка и успеха, и ошибки:**
\`\`\`java
future.handle((result, ex) -> {
    if (ex != null) {
        return "Error: " + ex.getMessage();
    }
    return "Success: " + result;
});
\`\`\`

**thenApplyAsync vs thenApply:**
\`thenApply\` выполняется в том же потоке, что и предыдущая задача. \`thenApplyAsync\` — в другом потоке (из ForkJoinPool или кастомного executor).

**Практический пример — параллельная загрузка данных:**
\`\`\`java
public CompletableFuture<Dashboard> loadDashboard(Long userId) {
    CompletableFuture<User> userFuture = userService.getUserAsync(userId);
    CompletableFuture<List<Order>> ordersFuture = orderService.getOrdersAsync(userId);
    CompletableFuture<List<Notification>> notificationsFuture = 
        notificationService.getNotificationsAsync(userId);
    
    return CompletableFuture.allOf(userFuture, ordersFuture, notificationsFuture)
        .thenApply(v -> {
            User user = userFuture.join();
            List<Order> orders = ordersFuture.join();
            List<Notification> notifications = notificationsFuture.join();
            return new Dashboard(user, orders, notifications);
        });
}
\`\`\`

**Для собеседования:** CompletableFuture позволяет асинхронно выполнять задачи и компоновать их через thenApply, thenCompose, thenCombine. allOf ждёт все futures, anyOf — первый. Обработка ошибок через exceptionally и handle. Важно выбирать между синхронным и асинхронным выполнением цепочек.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-core`,
"title": `Spring Core`,
"questions": [
{
"id": `8-middle-spring-core-1`,
"title": `Жизненный цикл бина, BeanPostProcessor, BeanFactoryPostProcessor.`,
"fullAnswer": `Spring IoC-контейнер управляет полным жизненным циклом бинов — от создания до уничтожения.

**Жизненный цикл бина:**

**1. Instantiation (создание экземпляра):**
Контейнер создаёт объект через конструктор (по умолчанию или явно указанный).

**2. Populate properties (внедрение зависимостей):**
Устанавливаются значения полей через setter'ы или конструктор (DI).

**3. BeanNameAware, BeanFactoryAware, ApplicationContextAware:**
Если бин реализует эти интерфейсы, вызываются соответствующие методы для передачи имени бина, ссылки на фабрику или контекст.

**4. BeanPostProcessor.postProcessBeforeInitialization():**
Вызывается перед инициализацией. Можно модифицировать бин.

**5. @PostConstruct / InitializingBean / init-method:**
Методы инициализации. @PostConstruct вызывается первым, затем afterPropertiesSet() (если реализует InitializingBean), затем кастомный init-method.

**6. BeanPostProcessor.postProcessAfterInitialization():**
Вызывается после инициализации. Здесь создаются прокси для @Transactional, @Async и т.д.

**7. Бин готов к использованию.**

**8. @PreDestroy / DisposableBean / destroy-method:**
При закрытии контейнера вызываются методы уничтожения в обратном порядке.

**BeanPostProcessor:**
Интерфейс для кастомизации бинов после создания, но до их использования.

\`\`\`java
@Component
public class CustomBeanPostProcessor implements BeanPostProcessor {
    
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) {
        // Модификация до инициализации
        if (bean instanceof UserService) {
            System.out.println("Before init: " + beanName);
        }
        return bean;
    }
    
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        // Модификация после инициализации (например, создание прокси)
        return bean;
    }
}
\`\`\`

**Применение BeanPostProcessor:**
- Создание прокси (AOP, @Transactional)
- Валидация бинов
- Инъекция дополнительных зависимостей
- Логирование создания бинов

**BeanFactoryPostProcessor:**
Интерфейс для модификации конфигурации бинов (метаданных) до их создания.

\`\`\`java
@Component
public class CustomBeanFactoryPostProcessor implements BeanFactoryPostProcessor {
    
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {
        // Модификация bean definitions
        BeanDefinition bd = beanFactory.getBeanDefinition("userService");
        bd.getPropertyValues().addPropertyValue("maxRetries", 3);
    }
}
\`\`\`

**Применение BeanFactoryPostProcessor:**
- PropertyPlaceholderConfigurer (замена \${...} значений)
- Модификация scope бинов
- Регистрация дополнительных бинов
- Изменение значений свойств

**Различия:**
BeanFactoryPostProcessor работает с метаданными (BeanDefinition) до создания бинов. BeanPostProcessor работает с экземплярами бинов после создания.

**Порядок вызова:**
BeanFactoryPostProcessor → Instantiation → DI → BeanPostProcessor.before → @PostConstruct → BeanPostProcessor.after → использование → @PreDestroy

**Для собеседования:** Жизненный цикл бина: создание → DI → Aware-интерфейсы → BPP.before → @PostConstruct → BPP.after → использование → @PreDestroy. BeanPostProcessor модифицирует экземпляры бинов, BeanFactoryPostProcessor — метаданные до создания.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-core-2`,
"title": `Scope'ы бинов (request, session).`,
"fullAnswer": `Spring поддерживает несколько scope'ов (областей видимости) для бинов, определяющих время жизни и видимость экземпляра.

**Singleton (по умолчанию):**
Один экземпляр бина на весь IoC-контейнер. Создаётся при запуске приложения (или лениво при первом запросе).

\`\`\`java
@Component  // или @Service, @Repository
public class UserService {  // singleton по умолчанию
    // один экземпляр для всего приложения
}
\`\`\`

**Prototype:**
Новый экземпляр создаётся при каждом запросе к контейнеру.

\`\`\`java
@Component
@Scope("prototype")
public class UserSession {
    // новый объект при каждом注入
}
\`\`\`

**Web scopes (требуют web-приложение):**

**Request:**
Один экземпляр бина на HTTP-запрос.

\`\`\`java
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, 
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestData {
    private String requestId;
    // ...
}
\`\`\`

**Session:**
Один экземпляр бина на HTTP-сессию.

\`\`\`java
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserPreferences {
    private String theme;
    private String language;
    // ...
}
\`\`\`

**Application:**
Один экземпляр на ServletContext (между всеми сессиями).

**WebSocket:**
Один экземпляр на WebSocket-сессию.

**Proxy Mode:**
Для request/session scope необходим \`proxyMode\`, потому что singleton-бин (например, контроллер) инъектируется один раз, но должен работать с разными экземплярами request/session бинов.

\`\`\`java
@RestController
public class MyController {
    @Autowired
    private RequestData requestData;  // прокси
    
    @GetMapping("/test")
    public String test() {
        // requestData — прокси, делегирует вызовы реальному объекту
        return requestData.getRequestId();
    }
}
\`\`\`

**ScopedProxyMode:**
- \`NO\` — без прокси (для прямой инъекции)
- \`INTERFACES\` — JDK dynamic proxy (требуется интерфейс)
- \`TARGET_CLASS\` — CGLIB proxy (для классов без интерфейса)

**Проблемы с scope:**
Инъекция prototype в singleton создаёт проблему — prototype создаётся только один раз при создании singleton. Решение — использовать \`ObjectProvider\` или \`@Lookup\`.

\`\`\`java
@Component
public class SingletonService {
    @Autowired
    private ObjectProvider<PrototypeBean> prototypeProvider;
    
    public void doSomething() {
        PrototypeBean bean = prototypeProvider.getObject();  // новый экземпляр
    }
}
\`\`\`

**Для собеседования:** Singleton — один на контейнер, Prototype — новый при каждом запросе. Request — один на HTTP-запрос, Session — на сессию. Для web-scope нужен proxyMode. Инъекция prototype в singleton требует ObjectProvider или @Lookup.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-core-3`,
"title": `Как Spring Boot понимает автоконфигурации (@EnableAutoConfiguration)?`,
"fullAnswer": `Автоконфигурация — ключевая фича Spring Boot, которая автоматически настраивает бины на основе зависимостей в classpath.

**@EnableAutoConfiguration:**
Аннотация, которая активирует механизм автоконфигурации. Обычно используется через \`@SpringBootApplication\` (который включает @EnableAutoConfiguration).

**Как работает:**

**1. Поиск конфигураций:**
Spring Boot сканирует файл \`META-INF/spring.factories\` (до Spring Boot 2.7) или \`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\` (с 2.7+) во всех jar-файлах classpath.

\`\`\`properties
# spring.factories (старый формат)
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
  org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\\
  org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration
\`\`\`

\`\`\`imports
# AutoConfiguration.imports (новый формат)
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration
\`\`\`

**2. Условная загрузка:**
Каждая автоконфигурация аннотирована условиями (@ConditionalOnClass, @ConditionalOnMissingBean и т.д.). Бин создаётся только если условия выполнены.

\`\`\`java
@Configuration
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource(DataSourceProperties properties) {
        return properties.initializeDataSourceBuilder().build();
    }
}
\`\`\`

**Основные @Conditional аннотации:**
- \`@ConditionalOnClass\` — если класс есть в classpath
- \`@ConditionalOnMissingClass\` — если класса нет
- \`@ConditionalOnBean\` — если бин существует
- \`@ConditionalOnMissingBean\` — если бина нет (для переопределения)
- \`@ConditionalOnProperty\` — если свойство установлено
- \`@ConditionalOnWebApplication\` — если это web-приложение
- \`@ConditionalOnResource\` — если ресурс существует

**3. Порядок загрузки:**
Автоконфигурации упорядочены через \`@AutoConfigureBefore\`, \`@AutoConfigureAfter\`, \`@AutoConfigureOrder\`.

**4. Отключение автоконфигурации:**
\`\`\`java
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })

// или в application.properties
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
\`\`\`

**5. Debug mode:**
Запуск с \`--debug\` или \`spring.debug=true\` показывает отчёт о применённых и неприменённых автоконфигурациях.

**Пример создания своей автоконфигурации:**
\`\`\`java
@Configuration
@ConditionalOnClass(MyService.class)
public class MyAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public MyService myService() {
        return new MyService();
    }
}
\`\`\`

**Для собеседования:** @EnableAutoConfiguration сканирует spring.factories или AutoConfiguration.imports. Каждая конфигурация имеет @Conditional аннотации. Бин создаётся только при выполнении условий. Можно отключать через exclude. Порядок контролируется через @AutoConfigureBefore/After.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-core-4`,
"title": `Как решить циклические зависимости?`,
"fullAnswer": `Циклическая зависимость возникает, когда бин A зависит от бина B, а бин B зависит от бина A.

**Пример:**
\`\`\`java
@Service
public class ServiceA {
    @Autowired
    private ServiceB serviceB;  // зависит от B
}

@Service
public class ServiceB {
    @Autowired
    private ServiceA serviceA;  // зависит от A
}
\`\`\`

**Spring решает это через three-level cache:**
Spring использует три кэша для раннего exposure бинов:
- singletonObjects — полностью инициализированные бины
- earlySingletonObjects — ранние ссылки (без DI)
- singletonFactories — фабрики для создания ранних ссылок

Это работает только для setter injection и field injection. Constructor injection вызывает \`BeanCurrentlyInCreationException\`.

**Способы решения:**

**1. @Lazy:**
Откладывает инъекцию до первого использования.

\`\`\`java
@Service
public class ServiceA {
    @Autowired
    @Lazy
    private ServiceB serviceB;
}
\`\`\`

**2. Setter injection вместо constructor:**
\`\`\`java
@Service
public class ServiceA {
    private ServiceB serviceB;
    
    @Autowired
    public void setServiceB(ServiceB serviceB) {
        this.serviceB = serviceB;
    }
}
\`\`\`

**3. @PostConstruct:**
\`\`\`java
@Service
public class ServiceA {
    @Autowired
    private ApplicationContext context;
    
    private ServiceB serviceB;
    
    @PostConstruct
    public void init() {
        this.serviceB = context.getBean(ServiceB.class);
    }
}
\`\`\`

**4. Рефакторинг (рекомендуется):**
Циклические зависимости часто указывают на плохой дизайн. Решение — выделить общую логику в третий сервис.

\`\`\`java
@Service
public class ServiceC {
    // общая логика из A и B
}

@Service
public class ServiceA {
    @Autowired
    private ServiceC serviceC;
}

@Service
public class ServiceB {
    @Autowired
    private ServiceC serviceC;
}
\`\`\`

**5. Event-driven архитектура:**
Использовать Spring Events для развязки зависимостей.

\`\`\`java
@Service
public class ServiceA {
    @Autowired
    private ApplicationEventPublisher publisher;
    
    public void doSomething() {
        publisher.publishEvent(new MyEvent(this));
    }
}

@Service
public class ServiceB {
    @EventListener
    public void handleEvent(MyEvent event) {
        // обработка
    }
}
\`\`\`

**6. Interface-based injection:**
\`\`\`java
public interface ServiceAInterface {
    void methodA();
}

@Service
public class ServiceA implements ServiceAInterface {
    @Autowired
    private ServiceB serviceB;
}

@Service
public class ServiceB {
    @Autowired
    private ServiceAInterface serviceA;  // через интерфейс
}
\`\`\`

**Spring Boot 2.6+:**
По умолчанию циклические зависимости запрещены. Нужно явно разрешить:
\`\`\`properties
spring.main.allow-circular-references=true
\`\`\`

**Для собеседования:** Циклические зависимости решаются через @Lazy, setter injection, @PostConstruct, рефакторинг (выделение общего сервиса), events. Spring использует three-level cache для field/setter injection. Constructor injection вызывает исключение. Лучшее решение — рефакторинг.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-mvc`,
"title": `Spring MVC`,
"questions": [
{
"id": `8-middle-spring-mvc-1`,
"title": `Filter vs HandlerInterceptor.`,
"fullAnswer": `И Filter, и HandlerInterceptor используются для перехвата HTTP-запросов, но работают на разных уровнях и имеют разные возможности.

**Filter (javax.servlet.Filter / jakarta.servlet.Filter):**
Работает на уровне Servlet Container (Tomcat, Jetty). Часть Servlet API, не специфична для Spring.

\`\`\`java
@Component
public class LoggingFilter implements Filter {
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, 
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        System.out.println("Request: " + httpRequest.getRequestURI());
        
        chain.doFilter(request, response);  // передача дальше
        
        System.out.println("Response completed");
    }
}
\`\`\`

**Особенности Filter:**
- Работает до DispatcherServlet
- Имеет доступ только к ServletRequest/ServletResponse
- Может модифицировать запрос/ответ через обёртки
- Порядок определяется @Order или web.xml
- Применяется ко всем запросам (включая статические ресурсы)

**HandlerInterceptor (Spring MVC):**
Работает на уровне Spring MVC, после DispatcherServlet. Имеет доступ к Handler (контроллеру).

\`\`\`java
@Component
public class AuthInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
                             Object handler) throws Exception {
        // До выполнения контроллера
        String token = request.getHeader("Authorization");
        if (token == null) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
            return false;  // прервать цепочку
        }
        return true;  // продолжить
    }
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, 
                           Object handler, ModelAndView modelAndView) throws Exception {
        // После контроллера, до рендеринга view
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, 
                                Object handler, Exception ex) throws Exception {
        // После рендеринга view (всегда)
    }
}

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Autowired
    private AuthInterceptor authInterceptor;
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/public/**");
    }
}
\`\`\`

**Особенности HandlerInterceptor:**
- Работает после DispatcherServlet
- Имеет доступ к Handler (контроллеру) и ModelAndView
- Может прервать выполнение через return false
- Настраивается через паттерны URL
- Не применяется к статическим ресурсам (по умолчанию)

**Различия:**
Filter — часть Servlet API, работает на уровне контейнера, до Spring MVC. HandlerInterceptor — часть Spring MVC, работает после DispatcherServlet, имеет доступ к контроллеру и модели.

Filter может перехватывать все запросы (включая статические), Interceptor — только запросы к контроллерам.

Filter использует цепочку (chain.doFilter), Interceptor имеет три метода (preHandle, postHandle, afterCompletion).

**Когда что использовать:**
Filter — для логирования, CORS, сжатия, аутентификации на уровне контейнера. Interceptor — для авторизации, валидации, модификации модели, аудита.

**Для собеседования:** Filter — Servlet API, работает до DispatcherServlet, для всех запросов. HandlerInterceptor — Spring MVC, после DispatcherServlet, имеет доступ к контроллеру. Filter для CORS/логирования, Interceptor для авторизации/валидации.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-mvc-2`,
"title": `@ExceptionHandler и @ControllerAdvice.`,
"fullAnswer": `Spring MVC предоставляет механизмы для централизованной обработки исключений.

**@ExceptionHandler:**
Аннотация для обработки исключений в конкретном контроллере.

\`\`\`java
@RestController
public class UserController {
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + id));
    }
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
\`\`\`

**Ограничения @ExceptionHandler:**
Работает только в пределах одного контроллера. Если нужно обрабатывать исключения глобально — используется @ControllerAdvice.

**@ControllerAdvice:**
Глобальный обработчик исключений для всех контроллеров.

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult().getFieldErrors().stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.toList());
        
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Validation failed",
            errors,
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        log.error("Unexpected error", ex);
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
\`\`\`

**@RestControllerAdvice vs @ControllerAdvice:**
@RestControllerAdvice = @ControllerAdvice + @ResponseBody. Возвращает JSON вместо view.

**Порядок обработки:**
1. @ExceptionHandler в текущем контроллере
2. @ExceptionHandler в @ControllerAdvice
3. DefaultHandlerExceptionResolver (стандартные исключения Spring)
4. Контейнер (500 error page)

**ErrorResponse DTO:**
\`\`\`java
public class ErrorResponse {
    private int status;
    private String message;
    private List<String> errors;
    private LocalDateTime timestamp;
    
    // конструкторы, геттеры
}
\`\`\`

**Обработка конкретных типов исключений:**
- \`MethodArgumentNotValidException\` — ошибки валидации @Valid
- \`HttpMessageNotReadableException\` — невалидный JSON
- \`HttpRequestMethodNotSupportedException\` — неподдерживаемый HTTP метод
- \`NoHandlerFoundException\` — 404
- \`ConstraintViolationException\` — ошибки валидации на уровне метода

**Для собеседования:** @ExceptionHandler обрабатывает исключения в одном контроллере. @ControllerAdvice — глобально для всех. @RestControllerAdvice возвращает JSON. Порядок: локальный handler → global advice → default resolver. Обрабатываются валидация, невалидный JSON, 404 и т.д.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-mvc-3`,
"title": `Кастомная сериализация/десериализация JSON (Jackson).`,
"fullAnswer": `Jackson — библиотека для работы с JSON в Spring Boot. Позволяет кастомизировать сериализацию и десериализацию.

**Базовая сериализация:**
\`\`\`java
public class User {
    private Long id;
    private String name;
    private LocalDate birthDate;
    
    // геттеры, сеттеры
}
\`\`\`

**@JsonFormat — форматирование:**
\`\`\`java
public class User {
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy HH:mm")
    private LocalDateTime createdAt;
}
\`\`\`

**@JsonProperty — переименование:**
\`\`\`java
public class User {
    @JsonProperty("user_name")
    private String userName;
    
    @JsonProperty("is_active")
    private boolean active;
}
\`\`\`

**@JsonIgnore — игнорирование поля:**
\`\`\`java
public class User {
    private String name;
    
    @JsonIgnore
    private String password;  // не сериализуется
}
\`\`\`

**Кастомный сериализатор:**
\`\`\`java
public class MoneySerializer extends JsonSerializer<BigDecimal> {
    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, 
                          SerializerProvider serializers) throws IOException {
        gen.writeString(value.setScale(2, RoundingMode.HALF_UP).toPlainString() + " ₽");
    }
}

public class Product {
    private String name;
    
    @JsonSerialize(using = MoneySerializer.class)
    private BigDecimal price;
}
\`\`\`

**Кастомный десериализатор:**
\`\`\`java
public class MoneyDeserializer extends JsonDeserializer<BigDecimal> {
    @Override
    public BigDecimal deserialize(JsonParser p, DeserializationContext ctxt) 
            throws IOException {
        String value = p.getText().replace(" ₽", "").trim();
        return new BigDecimal(value);
    }
}

public class Product {
    @JsonDeserialize(using = MoneyDeserializer.class)
    private BigDecimal price;
}
\`\`\`

**@JsonComponent — глобальная регистрация:**
\`\`\`java
@JsonComponent
public class JacksonCustomizations {
    
    public static class MoneySerializer extends JsonSerializer<BigDecimal> {
        @Override
        public void serialize(BigDecimal value, JsonGenerator gen, 
                              SerializerProvider serializers) throws IOException {
            gen.writeString(value.setScale(2).toPlainString());
        }
    }
    
    public static class MoneyDeserializer extends JsonDeserializer<BigDecimal> {
        @Override
        public BigDecimal deserialize(JsonParser p, DeserializationContext ctxt) 
                throws IOException {
            return new BigDecimal(p.getText());
        }
    }
}
\`\`\`

**@JsonView — разные представления:**
\`\`\`java
public class Views {
    public static class Public {}
    public static class Internal extends Public {}
}

public class User {
    @JsonView(Views.Public.class)
    private Long id;
    
    @JsonView(Views.Public.class)
    private String name;
    
    @JsonView(Views.Internal.class)
    private String email;
    
    @JsonIgnore
    private String password;
}

@GetMapping("/users/{id}")
@JsonView(Views.Public.class)
public User getUser(@PathVariable Long id) {
    return userService.findById(id);
}
\`\`\`

**@JsonCreator и @JsonProperty для конструктора:**
\`\`\`java
public class User {
    private final String name;
    private final int age;
    
    @JsonCreator
    public User(@JsonProperty("name") String name, 
                @JsonProperty("age") int age) {
        this.name = name;
        this.age = age;
    }
}
\`\`\`

**Глобальная настройка Jackson:**
\`\`\`yaml
# application.yml
spring:
  jackson:
    date-format: yyyy-MM-dd
    time-zone: UTC
    default-property-inclusion: non_null
    serialization:
      write-dates-as-timestamps: false
    deserialization:
      fail-on-unknown-properties: false
\`\`\`

**Для собеседования:** Jackson кастомизируется через аннотации (@JsonFormat, @JsonProperty, @JsonIgnore) и кастомные сериализаторы/десериализаторы. @JsonComponent регистрирует глобально. @JsonView для разных представлений. Глобальная настройка через application.yml.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `jpa-hibernate`,
"title": `JPA / Hibernate`,
"questions": [
{
"id": `8-middle-jpa-hibernate-1`,
"title": `Проблема N+1: диагностика и решение (@EntityGraph, JOIN FETCH, @BatchSize).`,
"fullAnswer": `Проблема N+1 — одна из самых частых проблем производительности в JPA/Hibernate.

**Суть проблемы:**
При загрузке списка сущностей с lazy-связями, Hibernate выполняет 1 запрос для получения списка + N запросов для загрузки связанных сущностей (по одному на каждую).

\`\`\`java
@Entity
public class Department {
    @Id
    private Long id;
    private String name;
    
    @OneToMany(mappedBy = "department")
    private List<Employee> employees;  // LAZY по умолчанию
}

// Код
List<Department> departments = departmentRepository.findAll();  // 1 запрос
for (Department dept : departments) {
    dept.getEmployees().size();  // N запросов (по одному на department)
}
\`\`\`

**Диагностика:**

**1. Логирование SQL:**
\`\`\`yaml
spring:
  jpa:
    properties:
      hibernate:
        format_sql: true
logging:
  level:
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE
\`\`\`

**2. P6Spy или datasource-proxy:**
Библиотеки для логирования всех SQL-запросов с параметрами.

**3. Hibernate Statistics:**
\`\`\`yaml
spring:
  jpa:
    properties:
      hibernate:
        generate_statistics: true
\`\`\`

**Решения:**

**1. JOIN FETCH в JPQL:**
\`\`\`java
@Query("SELECT DISTINCT d FROM Department d JOIN FETCH d.employees")
List<Department> findAllWithEmployees();
\`\`\`

Один запрос с JOIN. DISTINCT нужен для удаления дубликатов.

**2. @EntityGraph:**
\`\`\`java
@EntityGraph(attributePaths = {"employees"})
@Query("SELECT d FROM Department d")
List<Department> findAllWithEmployees();
\`\`\`

Или через интерфейс:
\`\`\`java
@EntityGraph(attributePaths = {"employees"})
List<Department> findAll();
\`\`\`

**3. @BatchSize:**
\`\`\`java
@Entity
public class Department {
    @OneToMany(mappedBy = "department")
    @BatchSize(size = 10)  // загружать по 10 за раз
    private List<Employee> employees;
}
\`\`\`

Вместо N запросов будет N/10 запросов.

**4. Subselect:**
\`\`\`java
@OneToMany(mappedBy = "department")
@Fetch(FetchMode.SUBSELECT)
private List<Employee> employees;
\`\`\`

Один дополнительный запрос с подзапросом.

**5. DTO Projection:**
\`\`\`java
@Query("SELECT new com.example.dto.DepartmentDTO(d.id, d.name, COUNT(e)) " +
       "FROM Department d LEFT JOIN d.employees e GROUP BY d.id")
List<DepartmentDTO> findAllWithEmployeeCount();
\`\`\`

**Сравнение решений:**
JOIN FETCH — один запрос, но может быть медленным для больших данных. @BatchSize — несколько запросов, но эффективнее при большом N. @EntityGraph — декларативный подход, удобен для Spring Data.

**Для собеседования:** N+1 — 1 запрос для списка + N для связей. Диагностика через логирование SQL и Hibernate Statistics. Решения: JOIN FETCH (один запрос), @EntityGraph (декларативно), @BatchSize (батчинг), Subselect, DTO projection.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-jpa-hibernate-2`,
"title": `Lazy vs Eager загрузка, FetchType.`,
"fullAnswer": `FetchType определяет стратегию загрузки связанных сущностей.

**EAGER (жадная загрузка):**
Связанная сущность загружается сразу вместе с основной. Всегда в памяти.

**LAZY (ленивая загрузка):**
Связанная сущность загружается только при обращении к ней. Создаётся прокси-объект.

**Значения по умолчанию:**
- \`@OneToOne\` и \`@ManyToOne\` — EAGER
- \`@OneToMany\` и \`@ManyToMany\` — LAZY

**Проблемы EAGER:**
- Загружает все связи, даже если не нужны
- Может привести к загрузке всего графа объектов
- Проблемы с производительностью
- LazyInitializationException вне транзакции

**Проблемы LAZY:**
- LazyInitializationException при обращении вне транзакции
- N+1 проблема при итерации

**LazyInitializationException:**
\`\`\`java
@Transactional
public User getUser(Long id) {
    return userRepository.findById(id).orElse(null);
    // транзакция закрывается здесь
}

// Вне транзакции
User user = userService.getUser(1L);
user.getOrders().size();  // LazyInitializationException!
\`\`\`

**Решения:**

**1. @Transactional на уровне сервиса:**
\`\`\`java
@Transactional(readOnly = true)
public User getUserWithOrders(Long id) {
    User user = userRepository.findById(id).orElse(null);
    user.getOrders().size();  // внутри транзакции — OK
    return user;
}
\`\`\`

**2. JOIN FETCH:**
\`\`\`java
@Query("SELECT u FROM User u LEFT JOIN FETCH u.orders WHERE u.id = :id")
Optional<User> findByIdWithOrders(@Param("id") Long id);
\`\`\`

**3. Open Session in View (OSIV):**
\`\`\`yaml
spring:
  jpa:
    open-in-view: true  # по умолчанию true в Spring Boot
\`\`\`

Опасно — держит сессию открытой до рендеринга view. Может привести к утечкам соединений.

**4. EntityGraph:**
\`\`\`java
@EntityGraph(attributePaths = {"orders"})
Optional<User> findById(Long id);
\`\`\`

**Best Practices:**
- Использовать LAZY по умолчанию
- Явно загружать нужные связи через JOIN FETCH или EntityGraph
- Избегать OSIV в production
- Использовать DTO projection для сложных запросов

**Для собеседования:** EAGER загружает сразу, LAZY — при обращении. По умолчанию OneToOne/ManyToOne — EAGER, OneToMany/ManyToMany — LAZY. Проблемы: LazyInitializationException, N+1. Решения: @Transactional, JOIN FETCH, EntityGraph, DTO projection.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-jpa-hibernate-3`,
"title": `Уровни кэширования (L1, L2) и инвалидация.`,
"fullAnswer": `Hibernate предоставляет два уровня кэширования для улучшения производительности.

**L1 Cache (First-Level Cache):**
Кэш на уровне сессии (EntityManager). Включён по умолчанию, нельзя отключить.

\`\`\`java
@Transactional
public void testL1Cache() {
    User user1 = entityManager.find(User.class, 1L);  // SQL запрос
    User user2 = entityManager.find(User.class, 1L);  // из кэша, без SQL
    
    System.out.println(user1 == user2);  // true (тот же объект)
}
\`\`\`

**Особенности L1:**
-Scope — одна сессия (транзакция)
- Автоматическая инвалидация при update/delete
- Нельзя разделить между сессиями
- Очищается при \`entityManager.clear()\`

**L2 Cache (Second-Level Cache):**
Глобальный кэш на уровне SessionFactory. Разделяется между сессиями.

**Настройка:**
\`\`\`yaml
spring:
  jpa:
    properties:
      hibernate:
        cache:
          use_second_level_cache: true
          use_query_cache: true
          region.factory_class: org.hibernate.cache.jcache.JCacheRegionFactory
\`\`\`

**Зависимости:**
\`\`\`xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-jcache</artifactId>
</dependency>
<dependency>
    <groupId>javax.cache</groupId>
    <artifactId>cache-api</artifactId>
</dependency>
<dependency>
    <groupId>org.ehcache</groupId>
    <artifactId>ehcache</artifactId>
</dependency>
\`\`\`

**Включение для сущности:**
\`\`\`java
@Entity
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User {
    // ...
}
\`\`\`

**Стратегии кэширования:**
- \`READ_ONLY\` — только чтение, никогда не меняется
- \`READ_WRITE\` — чтение и запись, мягкая блокировка
- \`NONSTRICT_READ_WRITE\` — без гарантии консистентности
- \`TRANSACTIONAL\` — полная транзакционная поддержка (требует JTA)

**Query Cache:**
Кэширует результаты запросов (ID сущностей, не сами сущности).

\`\`\`java
@QueryHint(name = "org.hibernate.cacheable", value = "true")
@Query("SELECT u FROM User u WHERE u.status = :status")
List<User> findByStatus(@Param("status") String status);
\`\`\`

**Инвалидация кэша:**

**Автоматическая:**
При update/delete сущности Hibernate автоматически инвалидирует кэш.

**Ручная:**
\`\`\`java
// Очистить кэш конкретной сущности
entityManager.getEntityManagerFactory().getCache().evict(User.class);

// Очистить кэш конкретной сущности по ID
entityManager.getEntityManagerFactory().getCache().evict(User.class, userId);

// Очистить весь кэш
entityManager.getEntityManagerFactory().getCache().evictAll();

// Очистить query cache
entityManager.getEntityManagerFactory().getCache().evictDefaultQueryRegion();
\`\`\`

**Когда использовать L2:**
- Данные редко меняются (справочники, настройки)
- Частое чтение одних и тех же данных
- Несколько экземпляров приложения (распределённый кэш)

**Когда НЕ использовать:**
- Часто меняющиеся данные
- Данные с высокой консистентностью
- Маленькие таблицы (оверхед не оправдан)

**Для собеседования:** L1 — кэш сессии, включён по умолчанию. L2 — глобальный кэш, требует настройки. Стратегии: READ_ONLY, READ_WRITE, NONSTRICT_READ_WRITE, TRANSACTIONAL. Query cache кэширует ID. Инвалидация автоматическая при изменениях или ручная через evict().`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-jpa-hibernate-4`,
"title": `Жизненный цикл сущности.`,
"fullAnswer": `Сущность в JPA проходит через несколько состояний в течение жизненного цикла.

**Состояния сущности:**

**1. New (Transient):**
Объект создан, но не связан с persistence context. Не имеет представления в БД.

\`\`\`java
User user = new User();  // New
user.setName("John");
\`\`\`

**2. Managed (Persistent):**
Объект связан с persistence context. Изменения автоматически отслеживаются и сохраняются при flush/commit.

\`\`\`java
entityManager.persist(user);  // New -> Managed
user.setName("Jane");  // автоматически обновится при commit
\`\`\`

**3. Detached:**
Объект был managed, но persistence context закрыт. Изменения не отслеживаются.

\`\`\`java
entityManager.detach(user);  // Managed -> Detached
// или
entityManager.clear();  // все managed -> detached
user.setName("Bob");  // не сохранится автоматически
\`\`\`

**4. Removed:**
Объект помечен на удаление. Будет удалён из БД при flush/commit.

\`\`\`java
entityManager.remove(user);  // Managed -> Removed
\`\`\`

**Переходы между состояниями:**

**New -> Managed:**
- \`entityManager.persist(entity)\`
- \`entityManager.merge(entity)\` (если New)

**Managed -> Detached:**
- \`entityManager.detach(entity)\`
- \`entityManager.clear()\`
- Закрытие EntityManager/транзакции

**Detached -> Managed:**
- \`entityManager.merge(entity)\`

**Managed -> Removed:**
- \`entityManager.remove(entity)\`

**Removed -> удалён из БД:**
- При flush/commit транзакции

**Методы EntityManager:**

**persist():**
Делает transient сущность managed. INSERT выполнится при flush.

\`\`\`java
User user = new User();  // New
entityManager.persist(user);  // Managed
// INSERT выполнится при flush/commit
\`\`\`

**merge():**
Возвращает managed копию detached сущности. Если сущность new — создаёт новую managed.

\`\`\`java
User detached = ...;  // Detached
User managed = entityManager.merge(detached);  // Managed копия
// detached остаётся detached!
\`\`\`

**find():**
Загружает сущность по ID. Возвращает managed сущность или null.

\`\`\`java
User user = entityManager.find(User.class, 1L);  // Managed
\`\`\`

**getReference():**
Возвращает прокси без загрузки из БД. Lazy loading.

\`\`\`java
User user = entityManager.getReference(User.class, 1L);  // прокси
// загрузится при обращении к полям
\`\`\`

**remove():**
Помечает managed сущность на удаление.

\`\`\`java
entityManager.remove(user);  // Removed
// DELETE при flush/commit
\`\`\`

**flush():**
Синхронизирует persistence context с БД.

\`\`\`java
entityManager.flush();  // все изменения в БД
\`\`\`

**clear():**
Очищает persistence context. Все managed -> detached.

**Для собеседования:** 4 состояния: New (transient), Managed (persistent), Detached, Removed. persist() делает New -> Managed. merge() возвращает managed копию detached. remove() помечает на удаление. flush() синхронизирует с БД.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-jpa-hibernate-5`,
"title": `Транзакции (@Transactional): propagation, isolation levels, проблема проксирования.`,
"fullAnswer": `@Transactional — ключевая аннотация Spring для управления транзакциями.

**Propagation (распространение):**
Определяет, как метод участвует в существующей транзакции.

**REQUIRED (по умолчанию):**
Использует существующую транзакцию или создаёт новую.

\`\`\`java
@Transactional(propagation = Propagation.REQUIRED)
public void methodA() {
    methodB();  // использует ту же транзакцию
}

@Transactional(propagation = Propagation.REQUIRED)
public void methodB() {
    // ...
}
\`\`\`

**REQUIRES_NEW:**
Всегда создаёт новую транзакцию. Существующая приостанавливается.

\`\`\`java
@Transactional(propagation = Propagation.REQUIRED)
public void methodA() {
    methodB();  // приостанавливает транзакцию A
}

@Transactional(propagation = Propagation.REQUIRES_NEW)
public void methodB() {
    // новая независимая транзакция
}
\`\`\`

**SUPPORTS:**
Использует существующую транзакцию, если есть. Иначе выполняется без транзакции.

**MANDATORY:**
Требует существующую транзакцию. Иначе исключение.

**NOT_SUPPORTED:**
Выполняется без транзакции. Существующая приостанавливается.

**NEVER:**
Требует отсутствие транзакции. Иначе исключение.

**NESTED:**
Создаёт вложенную транзакцию (savepoint). Может откатиться независимо от внешней.

**Isolation Levels (уровни изоляции):**

**READ_UNCOMMITTED:**
Самый низкий. Видит незакоммиченные изменения других транзакций (dirty reads).

**READ_COMMITTED (по умолчанию в большинстве БД):**
Видит только закоммиченные изменения. Предотвращает dirty reads, но возможны non-repeatable reads.

**REPEATABLE_READ:**
Гарантирует, что повторное чтение вернёт те же данные. Предотвращает dirty и non-repeatable reads, но возможны phantom reads.

**SERIALIZABLE:**
Самый высокий. Полная изоляция. Предотвращает все аномалии, но низкая производительность.

**Аномалии:**
- **Dirty read:** чтение незакоммиченных данных
- **Non-repeatable read:** повторное чтение даёт разные данные
- **Phantom read:** появление новых строк при повторном запросе

**Проблема проксирования (self-invocation):**
@Transactional не работает при вызове метода внутри того же класса.

\`\`\`java
@Service
public class UserService {
    
    public void createUser() {
        saveUser();  // @Transactional НЕ сработает!
    }
    
    @Transactional
    public void saveUser() {
        // ...
    }
}
\`\`\`

**Причина:** Spring создаёт прокси вокруг бина. При вызове извне — идёт через прокси (транзакция работает). При внутреннем вызове — напрямую, мимо прокси.

**Решения:**

**1. Инъекция самого себя:**
\`\`\`java
@Service
public class UserService {
    @Autowired
    @Lazy
    private UserService self;
    
    public void createUser() {
        self.saveUser();  // через прокси
    }
    
    @Transactional
    public void saveUser() {
        // ...
    }
}
\`\`\`

**2. ApplicationContext:**
\`\`\`java
@Autowired
private ApplicationContext context;

public void createUser() {
    context.getBean(UserService.class).saveUser();
}
\`\`\`

**3. Выделение в отдельный сервис:**
\`\`\`java
@Service
public class UserWriter {
    @Transactional
    public void saveUser(User user) {
        // ...
    }
}

@Service
public class UserService {
    @Autowired
    private UserWriter userWriter;
    
    public void createUser() {
        userWriter.saveUser(user);  // работает
    }
}
\`\`\`

**Для собеседования:** Propagation: REQUIRED (по умолчанию), REQUIRES_NEW (новая транзакция), SUPPORTS, MANDATORY, NOT_SUPPORTED, NEVER, NESTED. Isolation: READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE. Проблема self-invocation решается через инъекцию себя, ApplicationContext или выделение в отдельный сервис.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-security`,
"title": `Spring Security`,
"questions": [
{
"id": `8-middle-spring-security-1`,
"title": `Как работает SecurityFilterChain?`,
"fullAnswer": `SecurityFilterChain — цепочка фильтров безопасности в Spring Security. Каждый запрос проходит через эту цепочку перед достижением контроллера.

**Архитектура:**
Spring Security построен на Servlet Filters. Каждый фильтр отвечает за определённую задачу безопасности.

**Стандартная цепочка фильтров:**

**1. SecurityContextPersistenceFilter:**
Загружает SecurityContext из сессии в начале запроса и сохраняет в конце.

**2. LogoutFilter:**
Обрабатывает запросы на выход (/logout).

**3. UsernamePasswordAuthenticationFilter:**
Обрабатывает форму логина (/login POST).

**4. DefaultLoginPageGeneratingFilter:**
Генерирует страницу логина по умолчанию.

**5. BasicAuthenticationFilter:**
Обрабатывает HTTP Basic аутентификацию.

**6. RequestCacheAwareFilter:**
Восстанавливает запрос после аутентификации.

**7. SecurityContextHolderAwareRequestFilter:**
Оборачивает request для безопасности.

**8. RememberMeAuthenticationFilter:**
Обрабатывает remember-me токены.

**9. AnonymousAuthenticationFilter:**
Создаёт anonymous authentication для неаутентифицированных запросов.

**10. SessionManagementFilter:**
Управляет сессиями (фиксация, параллельные сессии).

**11. ExceptionTranslationFilter:**
Обрабатывает исключения безопасности (AccessDeniedException, AuthenticationException).

**12. FilterSecurityInterceptor:**
Финальный фильтр. Проверяет авторизацию через AccessDecisionManager.

**Настройка SecurityFilterChain:**

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // отключить CSRF (для API)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/&#42;&#42;").permitAll()
                .requestMatchers("/admin/&#42;&#42;").hasRole("ADMIN")
                .requestMatchers("/api/&#42;&#42;").authenticated()
                .anyRequest().permitAll()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // для JWT
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
\`\`\`

**Кастомный фильтр:**
\`\`\`java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        String token = extractToken(request);
        
        if (token != null && jwtUtil.validateToken(token)) {
            String username = jwtUtil.getUsername(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            UsernamePasswordAuthenticationToken auth = 
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );
            
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        
        filterChain.doFilter(request, response);
    }
}
\`\`\`

**Order фильтров:**
Порядок важен. Кастомные фильтры добавляются через \`addFilterBefore()\` или \`addFilterAfter()\`.

**Для собеседования:** SecurityFilterChain — цепочка Servlet фильтров. Основные: SecurityContextPersistenceFilter, UsernamePasswordAuthenticationFilter, ExceptionTranslationFilter, FilterSecurityInterceptor. Кастомные фильтры добавляются через addFilterBefore. Порядок определяется через @Order или явно.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-security-2`,
"title": `JWT vs Сессионная аутентификация.`,
"fullAnswer": `Два основных подхода к управлению аутентификацией в веб-приложениях.

**Сессионная аутентификация:**

**Как работает:**
1. Пользователь логинится (логин/пароль)
2. Сервер создаёт сессию, хранит данные на сервере
3. Сервер отправляет клиенту session ID (обычно в cookie)
4. Клиент отправляет session ID с каждым запросом
5. Сервер проверяет сессию по ID

**Преимущества:**
- Простота реализации
- Серверный контроль (можно инвалидировать сессию)
- Не передаёт данные пользователя по сети
- Поддержка logout из коробки

**Недостатки:**
- Stateful — требует хранения сессий на сервере
- Проблемы с масштабированием (sticky sessions или shared session store)
- CSRF-атаки (нужна защита)
- Не подходит для мобильных приложений и микросервисов
- Cookie-based (проблемы с cross-domain)

**JWT (JSON Web Token):**

**Как работает:**
1. Пользователь логинится
2. Сервер создаёт JWT с payload (user data) и подписывает секретным ключом
3. JWT отправляется клиенту
4. Клиент хранит JWT (localStorage, cookie) и отправляет с каждым запросом (обычно в Authorization header)
5. Сервер проверяет подпись JWT без обращения к БД

**Структура JWT:**
- **Header:** алгоритм подписи (HS256, RS256)
- **Payload:** данные (user_id, roles, exp, iat)
- **Signature:** подпись для проверки целостности

**Преимущества:**
- Stateless — сервер не хранит состояние
- Масштабируемость (любой сервер может валидировать токен)
- Cross-domain (не зависит от cookie)
- Подходит для мобильных приложений и микросервисов
- Self-contained — содержит всю информацию

**Недостатки:**
- Нельзя инвалидировать до истечения срока (без blacklist)
- Больший размер (передаётся с каждым запросом)
- XSS-атаки (если хранится в localStorage)
- Сложность refresh token flow
- Нет встроенного logout

**Сравнение:**

Сессионная аутентификация stateful, хранит данные на сервере, использует cookie, проще в реализации, лучше для монолитов. JWT stateless, self-contained, передаётся в header, масштабируемее, лучше для микросервисов и SPA.

**Refresh Token Flow (JWT):**
\`\`\`java
// Login
@PostMapping("/login")
public AuthResponse login(@RequestBody LoginRequest request) {
    // проверка credentials
    String accessToken = jwtUtil.generateAccessToken(user);
    String refreshToken = jwtUtil.generateRefreshToken(user);
    
    // сохранить refreshToken в БД/Redis
    refreshTokenRepository.save(refreshToken);
    
    return new AuthResponse(accessToken, refreshToken);
}

// Refresh
@PostMapping("/refresh")
public AuthResponse refresh(@RequestBody RefreshRequest request) {
    // проверить refreshToken
    // создать новую пару токенов
}
\`\`\`

**Best Practices:**
- Access token — короткий срок жизни (15-30 минут)
- Refresh token — длинный срок жизни (7-30 дней)
- Хранить refresh token на сервере (БД/Redis)
- Использовать HTTPS
- Валидировать issuer, audience, expiration

**Для собеседования:** Сессионная аутентификация stateful, хранит сессии на сервере, использует cookie. JWT stateless, self-contained, передаётся в header. JWT лучше для микросервисов и мобильных приложений. Refresh token flow: короткий access token + длинный refresh token.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-security-3`,
"title": `Гранты OAuth2 (Authorization Code, PKCE).`,
"fullAnswer": `OAuth2 — стандарт авторизации, позволяющий приложениям получать ограниченный доступ к ресурсам пользователя без передачи credentials.

**Роли в OAuth2:**
- **Resource Owner** — пользователь
- **Client** — приложение (web, mobile, SPA)
- **Authorization Server** — сервер авторизации (выдаёт токены)
- **Resource Server** — сервер ресурсов (API)

**Authorization Code Grant:**
Самый распространённый грант для web-приложений с серверной частью.

**Flow:**
1. Клиент перенаправляет пользователя на Authorization Server
2. Пользователь логинится и авторизует приложение
3. Authorization Server возвращает authorization code (через redirect)
4. Клиент обменивает code на access token (server-to-server)
5. Клиент использует access token для доступа к ресурсам

\`\`\`java
// 1. Redirect на авторизацию
@GetMapping("/login/oauth2")
public RedirectView login() {
    String url = "https://auth.example.com/authorize?" +
        "response_type=code&" +
        "client_id=my-client&" +
        "redirect_uri=http://localhost:8080/callback&" +
        "scope=read write";
    return new RedirectView(url);
}

// 2. Callback с code
@GetMapping("/callback")
public String callback(@RequestParam String code) {
    // 3. Обмен code на token (server-to-server)
    String token = oauthClient.exchangeCodeForToken(code);
    
    // 4. Использование token
    UserInfo user = apiClient.getUser(token);
    return "redirect:/dashboard";
}
\`\`\`

**PKCE (Proof Key for Code Exchange):**
Расширение Authorization Code для публичных клиентов (SPA, mobile). Защищает от interception attacks.

**Flow:**
1. Клиент генерирует code_verifier (случайная строка)
2. Клиент вычисляет code_challenge = BASE64URL(SHA256(code_verifier))
3. Клиент отправляет code_challenge при запросе authorization code
4. Authorization Server возвращает code
5. Клиент отправляет code + code_verifier при обмене на token
6. Authorization Server проверяет: SHA256(code_verifier) == code_challenge

\`\`\`java
// Генерация PKCE
String codeVerifier = generateRandomString(64);
String codeChallenge = base64UrlEncode(sha256(codeVerifier));

// 1. Запрос authorization code
String authUrl = "https://auth.example.com/authorize?" +
    "response_type=code&" +
    "client_id=my-client&" +
    "redirect_uri=http://localhost:3000/callback&" +
    "code_challenge=" + codeChallenge + "&" +
    "code_challenge_method=S256";

// 2. Обмен code на token
String tokenResponse = post("https://auth.example.com/token", Map.of(
    "grant_type", "authorization_code",
    "code", authorizationCode,
    "redirect_uri", "http://localhost:3000/callback",
    "client_id", "my-client",
    "code_verifier", codeVerifier  // оригинальный verifier
));
\`\`\`

**Другие гранты:**

**Client Credentials:**
Для machine-to-machine коммуникации. Без участия пользователя.

\`\`\`java
Map<String, String> params = Map.of(
    "grant_type", "client_credentials",
    "client_id", "my-client",
    "client_secret", "secret"
);
\`\`\`

**Resource Owner Password Credentials:**
Пользователь передаёт credentials напрямую клиенту. Не рекомендуется (только для доверенных клиентов).

**Implicit:**
Для SPA. Token возвращается напрямую в URL. Устарел, заменён на Authorization Code + PKCE.

**Spring Security OAuth2 Client:**
\`\`\`yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: \${GOOGLE_CLIENT_ID}
            client-secret: \${GOOGLE_CLIENT_SECRET}
            scope: profile, email
        provider:
          google:
            authorization-uri: https://accounts.google.com/o/oauth2/auth
            token-uri: https://oauth2.googleapis.com/token
            user-info-uri: https://www.googleapis.com/oauth2/v3/userinfo
\`\`\`

**Для собеседования:** Authorization Code — для web-приложений с сервером. PKCE — расширение для публичных клиентов (SPA, mobile), защищает от interception. Client Credentials — для machine-to-machine. Implicit устарел. Spring Security OAuth2 Client упрощает интеграцию.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-security-4`,
"title": `Resource Server и OAuth2 Client.`,
"fullAnswer": `Spring Security предоставляет две основные роли для OAuth2: Resource Server (защищает API) и OAuth2 Client (клиент, который получает токены).

**Resource Server:**
Защищает API, валидирует JWT токены.

**Настройка:**
\`\`\`java
@Configuration
@EnableWebSecurity
public class ResourceServerConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .decoder(jwtDecoder())
                )
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/&#42;&#42;").permitAll()
                .requestMatchers("/api/&#42;&#42;").authenticated()
                .anyRequest().permitAll()
            );
        
        return http.build();
    }
    
    @Bean
    public JwtDecoder jwtDecoder() {
        // Валидация через JWKS URI
        return NimbusJwtDecoder.withJwkSetUri("https://auth.example.com/.well-known/jwks.json")
            .build();
    }
}
\`\`\`

**Конфигурация:**
\`\`\`yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://auth.example.com
          jwk-set-uri: https://auth.example.com/.well-known/jwks.json
\`\`\`

**Получение информации о пользователе:**
\`\`\`java
@RestController
public class ApiController {
    
    @GetMapping("/api/profile")
    public Map<String, Object> profile(@AuthenticationPrincipal Jwt jwt) {
        return Map.of(
            "sub", jwt.getSubject(),
            "email", jwt.getClaim("email"),
            "roles", jwt.getClaimAsStringList("roles")
        );
    }
    
    @GetMapping("/api/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String admin() {
        return "Admin only";
    }
}
\`\`\`

**OAuth2 Client:**
Приложение, которое получает токены от Authorization Server для доступа к ресурсам от имени пользователя.

**Настройка:**
\`\`\`java
@Configuration
@EnableWebSecurity
public class OAuth2ClientConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard", true)
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/login", "/public/&#42;&#42;").permitAll()
                .anyRequest().authenticated()
            );
        
        return http.build();
    }
}
\`\`\`

**Конфигурация:**
\`\`\`yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: \${GOOGLE_CLIENT_ID}
            client-secret: \${GOOGLE_CLIENT_SECRET}
            scope: profile, email
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
\`\`\`

**Использование токена:**
\`\`\`java
@Service
public class GoogleApiService {
    
    @Autowired
    private OAuth2AuthorizedClientService clientService;
    
    public String getUserInfo(String clientRegistrationId, String principalName) {
        OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
            clientRegistrationId, principalName
        );
        
        String accessToken = client.getAccessToken().getTokenValue();
        
        // Использовать токен для запроса к Google API
        return restTemplate.getForObject(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            String.class,
            Map.of("Authorization", "Bearer " + accessToken)
        );
    }
}
\`\`\`

**Различия:**
Resource Server валидирует токены и защищает API. OAuth2 Client получает токены от Authorization Server для доступа к внешним ресурсам.

Приложение может быть одновременно и Resource Server, и OAuth2 Client (например, API, которое также вызывает внешние сервисы).

**Для собеседования:** Resource Server валидирует JWT через jwk-set-uri или issuer-uri. OAuth2 Client получает токены через oauth2Login. Приложение может быть обоими одновременно. @AuthenticationPrincipal Jwt даёт доступ к токену в контроллере.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
{
"id": `spring-cloud`,
"title": `Spring Cloud`,
"questions": [
{
"id": `8-middle-spring-cloud-1`,
"title": `Компоненты Spring Cloud (Gateway, Config, Discovery).`,
"fullAnswer": `Spring Cloud — набор инструментов для построения распределённых систем и микросервисов.

**Spring Cloud Gateway:**
API Gateway для маршрутизации запросов к микросервисам.

**Особенности:**
- Построен на Spring WebFlux (reactive)
- Динамическая маршрутизация
- Фильтры (pre и post)
- Rate limiting
- Circuit breaker интеграция
- Service discovery интеграция

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service  # load balancing через discovery
          predicates:
            - Path=/api/users/&#42;&#42;
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: userService
                fallbackUri: forward:/fallback/users
        
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/&#42;&#42;
\`\`\`

**Spring Cloud Config:**
Централизованное управление конфигурацией для микросервисов.

**Архитектура:**
- **Config Server** — хранит конфигурации (Git, SVN, filesystem, database)
- **Config Client** — микросервисы, которые получают конфигурацию

**Config Server:**
\`\`\`java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
# application.yml Config Server
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/example/config-repo
          search-paths: '{application}'
\`\`\`

**Config Client:**
\`\`\`yaml
# bootstrap.yml
spring:
  application:
    name: user-service
  cloud:
    config:
      uri: http://config-server:8888
      profile: dev
\`\`\`

**Refresh конфигурации:**
\`\`\`java
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.message}")
    private String message;
    
    @GetMapping("/message")
    public String getMessage() {
        return message;
    }
}

// POST /actuator/refresh — обновить конфигурацию
\`\`\`

**Spring Cloud Discovery (Eureka):**
Service discovery для регистрации и обнаружения микросервисов.

**Eureka Server:**
\`\`\`java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    // ...
}
\`\`\`

\`\`\`yaml
# application.yml Eureka Server
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
\`\`\`

**Eureka Client:**
\`\`\`java
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {
    // ...
}
\`\`\`

\`\`\`yaml
spring:
  application:
    name: user-service

eureka:
  client:
    service-url:
      defaultZone: http://eureka-server:8761/eureka/
\`\`\`

**Использование discovery:**
\`\`\`java
@Service
public class OrderService {
    
    @Autowired
    private RestTemplate restTemplate;
    
    @LoadBalanced  // интеграция с Ribbon/LoadBalancer
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    public User getUser(Long userId) {
        // lb:// — load balancing через discovery
        return restTemplate.getForObject("lb://user-service/api/users/" + userId, User.class);
    }
}
\`\`\`

**Альтернативы Eureka:**
Consul, Zookeeper, Nacos, Kubernetes Service Discovery.

**Для собеседования:** Spring Cloud Gateway — API Gateway на WebFlux с маршрутизацией и фильтрами. Config Server — централизованная конфигурация (Git). Eureka — service discovery для регистрации микросервисов. RestTemplate с @LoadBalanced использует discovery для резолвинга сервисов.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-cloud-2`,
"title": `API Gateway: маршрутизация, фильтры, rate limiting.`,
"fullAnswer": `API Gateway — единая точка входа для всех клиентских запросов в микросервисную архитектуру.

**Маршрутизация:**

**Predicates (предикаты):**
Определяют, какие запросы направляются на какой сервис.

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/&#42;&#42;
            - Method=GET,POST
            - Header=X-Request-Id, \\d+
            - Query=version, v1|v2
            - After=2024-01-01T00:00:00+03:00[Europe/Moscow]
            - Before=2024-12-31T23:59:59+03:00[Europe/Moscow]
            - Between=2024-01-01T00:00:00+03:00[Europe/Moscow], 2024-12-31T23:59:59+03:00[Europe/Moscow]
            - RemoteAddr=192.168.1.0/24
\`\`\`

**Фильтры:**

**Built-in фильтры:**

**StripPrefix:**
\`\`\`yaml
filters:
  - StripPrefix=1  # убирает первый сегмент пути
# /api/users/1 -> /users/1
\`\`\`

**AddRequestHeader:**
\`\`\`yaml
filters:
  - AddRequestHeader=X-Request-Source, gateway
\`\`\`

**AddResponseHeader:**
\`\`\`yaml
filters:
  - AddResponseHeader=X-Response-Time, 100ms
\`\`\`

**RewritePath:**
\`\`\`yaml
filters:
  - RewritePath=/api/(?<segment>.&#42;), /$\\{segment}
# /api/users/1 -> /users/1
\`\`\`

**Кастомные фильтры:**

**Global filter (для всех запросов):**
\`\`\`java
@Component
public class LoggingFilter implements GlobalFilter, Ordered {
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("Request: {} {}", exchange.getRequest().getMethod(), 
                 exchange.getRequest().getURI());
        
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            log.info("Response status: {}", exchange.getResponse().getStatusCode());
        }));
    }
    
    @Override
    public int getOrder() {
        return -1;  // порядок выполнения
    }
}
\`\`\`

**Route filter (для конкретного маршрута):**
\`\`\`java
@Component
public class AuthFilter implements GlobalFilter {
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        
        if (token == null || !token.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
        
        return chain.filter(exchange);
    }
}
\`\`\`

**Rate Limiting:**

**RequestRateLimiter фильтр:**
\`\`\`yaml
routes:
  - id: user-service
    uri: lb://user-service
    predicates:
      - Path=/api/users/&#42;&#42;
    filters:
      - name: RequestRateLimiter
        args:
          redis-rate-limiter.replenishRate: 10  # токенов в секунду
          redis-rate-limiter.burstCapacity: 20  # максимальный burst
          redis-rate-limiter.requestedTokens: 1
          key-resolver: "#{@ipKeyResolver}"
\`\`\`

**Key Resolver:**
\`\`\`java
@Bean
public KeyResolver ipKeyResolver() {
    return exchange -> Mono.just(
        exchange.getRequest().getRemoteAddress().getAddress().getHostAddress()
    );
}

@Bean
public KeyResolver userKeyResolver() {
    return exchange -> Mono.just(
        exchange.getRequest().getHeaders().getFirst("X-User-Id")
    );
}
\`\`\`

**Redis требуется для rate limiting:**
\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis-reactive</artifactId>
</dependency>
\`\`\`

**Circuit Breaker в Gateway:**
\`\`\`yaml
filters:
  - name: CircuitBreaker
    args:
      name: userService
      fallbackUri: forward:/fallback/users
\`\`\`

**Для собеседования:** API Gateway маршрутизирует запросы через predicates (Path, Method, Header). Фильтры: built-in (StripPrefix, AddHeader) и кастомные (GlobalFilter). Rate limiting через RequestRateLimiter с Redis. Circuit breaker через Resilience4j.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
{
"id": `8-middle-spring-cloud-3`,
"title": `Circuit Breaker (Resilience4j): Closed, Open, Half-Open.`,
"fullAnswer": `Circuit Breaker — паттерн для повышения отказоустойчивости распределённых систем. Предотвращает каскадные сбои при недоступности зависимостей.

**Состояния Circuit Breaker:**

**Closed (Закрыт):**
Нормальное состояние. Запросы проходят свободно. Circuit breaker мониторит failures.

\`\`\`java
CircuitBreaker circuitBreaker = CircuitBreaker.ofDefaults("userService");

// Запросы выполняются нормально
String result = circuitBreaker.executeSupplier(() -> userService.getUser(id));
\`\`\`

**Open (Открыт):**
При достижении порога ошибок circuit breaker открывается. Все запросы сразу fail fast без вызова сервиса.

\`\`\`java
// Через windowDuration (по умолчанию 60s) анализируется failureRate
// Если failureRate > 50% (по умолчанию) -> OPEN
\`\`\`

**Half-Open (Полуоткрыт):**
После waitDurationInOpenState circuit breaker переходит в half-open. Разрешает ограниченное количество запросов (permittedNumberOfCallsInHalfOpenState) для проверки восстановления сервиса.

Если запросы успешны -> CLOSED. Если нет -> OPEN.

**Настройка Resilience4j:**

\`\`\`yaml
resilience4j:
  circuitbreaker:
    instances:
      userService:
        registerHealthIndicator: true
        slidingWindowSize: 10  # размер окна
        minimumNumberOfCalls: 5  # минимальное количество вызовов
        permittedNumberOfCallsInHalfOpenState: 3
        automaticTransitionFromOpenToHalfOpenEnabled: true
        waitDurationInOpenState: 5s  # время в OPEN состоянии
        failureRateThreshold: 50  # порог ошибок (%)
        eventConsumerBufferSize: 10
        recordExceptions:
          - java.io.IOException
          - java.util.concurrent.TimeoutException
\`\`\`

**Интеграция с Spring Boot:**

\`\`\`java
@Service
public class UserServiceClient {
    
    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    @Retry(name = "userService")
    @TimeLimiter(name = "userService")
    public CompletableFuture<User> getUserAsync(Long userId) {
        return CompletableFuture.supplyAsync(() -> {
            return restTemplate.getForObject("http://user-service/users/" + userId, User.class);
        });
    }
    
    // Fallback метод
    public CompletableFuture<User> getUserFallback(Long userId, Exception ex) {
        log.warn("Fallback for user {}", userId, ex);
        return CompletableFuture.completedFuture(User.defaultUser());
    }
}
\`\`\`

**Другие паттерны Resilience4j:**

**Retry:**
\`\`\`java
@Retry(name = "userService", fallbackMethod = "getUserFallback")
public User getUser(Long userId) {
    return restTemplate.getForObject("...", User.class);
}
\`\`\`

\`\`\`yaml
resilience4j:
  retry:
    instances:
      userService:
        maxAttempts: 3
        waitDuration: 500ms
        retryExceptions:
          - java.io.IOException
\`\`\`

**Rate Limiter:**
\`\`\`java
@RateLimiter(name = "userService")
public User getUser(Long userId) {
    // ...
}
\`\`\`

**Time Limiter:**
\`\`\`java
@TimeLimiter(name = "userService")
public CompletableFuture<User> getUserAsync(Long userId) {
    // timeout для async операций
}
\`\`\`

**Bulkhead:**
Ограничивает количество параллельных вызовов.

\`\`\`java
@Bulkhead(name = "userService", type = Bulkhead.Type.THREADPOOL)
public User getUser(Long userId) {
    // ...
}
\`\`\`

**Мониторинг:**
Resilience4j интегрируется с Micrometer для метрик (Prometheus, Grafana).

\`\`\`xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-micrometer</artifactId>
</dependency>
\`\`\`

**Для собеседования:** Circuit Breaker имеет 3 состояния: Closed (нормальная работа), Open (fail fast), Half-Open (проверка восстановления). Resilience4j настраивается через slidingWindowSize, failureRateThreshold, waitDurationInOpenState. Дополнительно: Retry, RateLimiter, TimeLimiter, Bulkhead.`,
"shortAnswer": `Краткий ответ пока не добавлен.`,
},
],
},
],
},
}
