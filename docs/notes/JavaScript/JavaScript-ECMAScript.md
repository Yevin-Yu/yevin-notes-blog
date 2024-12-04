---
title: JavaScript-ECMAScript
author: 耶温
createTime: 2024/08/12 21:44:52
permalink: /JavaScript/wgrjgzkq/
---

## ECMAScript1-4历程

> ECMAScript（简称 ES）是一种由 ECMA 国际组织制定的脚本语言标准。它是 JavaScript 的基础，定义了语言的语法、类型、语句、关键字、保留字、操作符、内置对象等。ECMAScript 的目标是提供一种通用的脚本语言，使得不同的实现（如浏览器、服务器等）能够遵循相同的标准，从而实现跨平台的兼容性。

1. ECMAScript 1 (ES1) - 1997
   - 首个正式的 JavaScript 标准。
2. ECMAScript 2 (ES2) - 1998
   - 主要是对 ES1 的一些小修正和编辑改进，没有引入新的特性。
3. ECMAScript 3 (ES3) - 1999
   - 引入了正则表达式。
   - 增加了 `try/catch` 语句。
   - 新增了 `Array`、`String` 和 `Number` 对象的一些方法。
   - 支持更好的字符串处理和错误处理。
4. ECMAScript 4 (ES4) - 2008 被提议
   - 由于复杂性和争议，ES4 最终未发布。它的许多特性在后来的版本中以不同形式出现。

## ECMAScript 3

### 正则表达式

ES3引入了对正则表达式的支持，使得字符串处理变得更加灵活和强大。开发者可以使用正则表达式进行模式匹配、搜索和替换操作。

:::tip
关于 正则表达式 的详细内容可以查看：[JavaScript-正则表达式](/JavaScript/yclbjiod/)
:::

### 异常处理

ES3增加了 `try、catch` 语句，提供了更好的错误处理机制。和它们一起使用的还有 ES8 新增的 `finally` 语句。

```js
try {
  // 可能抛出异常的代码
} catch (e) {
  // 处理异常的代码
} finally {
  // 无论是否发生异常，都会执行的代码
}
```

- `try` 语句用于定义一个代码块，该代码块可能会抛出异常。
- `catch` 用于处理 try 块中抛出的异常。catch 块可以接收一个参数（通常命名为 e 或 error），该参数包含异常对象
- `finally`（在 ES3 中不支持，但在后续ES8版本中引入）：可以用于执行清理代码，无论是否发生异常，finally 块中的代码都会执行。

在 ES3 中，异常处理的能力相对简单，主要依赖于 `try...catch` 结构。

### 数组方法

ECMAScript 3（ES3）引入了一些新的数组和字符串方法，增强了 JavaScript 的功能。以下是 ES3 中增加的一些重要数组和字符串方法：

1. **`Array.prototype.push()`**：将一个或多个元素添加到数组的末尾，并返回新数组的长度。

```javascript
let arr = [1, 2, 3];
arr.push(4); // arr 变为 [1, 2, 3, 4]
```

2. **`Array.prototype.pop()`**：删除数组的最后一个元素，并返回该元素。

```javascript
let arr = [1, 2, 3];
let last = arr.pop(); // last 为 3，arr 变为 [1, 2]
```

3. **`Array.prototype.shift()`**：删除数组的第一个元素，并返回该元素。

```javascript
let arr = [1, 2, 3];
let first = arr.shift(); // first 为 1，arr 变为 [2, 3]
```

4. **`Array.prototype.unshift()`**：将一个或多个元素添加到数组的开头，并返回新数组的长度。

```javascript
let arr = [1, 2, 3];
arr.unshift(0); // arr 变为 [0, 1, 2, 3]
```

5. **`Array.prototype.slice()`**：返回数组的一个片段，包含从开始索引到结束索引（不包括结束索引）的元素。

```javascript
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // newArr 为 [2, 3]
```

6. **`Array.prototype.splice()`**：改变数组的内容，通过添加、删除或替换现有元素。

```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 5); // arr 变为 [1, 5, 4]
```

### 字符串方法

1. **`String.prototype.charAt()`**：返回指定位置的字符。

```javascript
let str = "hello";
let char = str.charAt(1); // char 为 "e"
```

2. **`String.prototype.indexOf()`**：返回指定子字符串在字符串中首次出现的位置，如果未找到则返回 -1。

```javascript
let str = "hello";
let index = str.indexOf("e"); // index 为 1
```

3. **`String.prototype.lastIndexOf()`**：返回指定子字符串在字符串中最后一次出现的位置，如果未找到则返回 -1。

```javascript
let str = "hello";
let lastIndex = str.lastIndexOf("l"); // lastIndex 为 3
```

4. **`String.prototype.split()`**：将字符串分割成数组。

```javascript
let str = "a,b,c";
let arr = str.split(","); // arr 为 ["a", "b", "c"]
```

### 对象操作

在 ECMAScript 3（ES3）中，对象支持得到了显著的改进，使得 JavaScript 的对象处理更加灵活和强大。以下是一些关键的改进和特性：

1. **对象字面量**：ES3 允许使用对象字面量语法来创建对象，这种方式简洁明了，易于使用。

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
```

2. **原型链**：ES3 明确了原型链的概念，允许对象通过其原型继承属性和方法。这使得对象的创建和继承变得更加灵活。

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

let dog = new Animal("Dog");
dog.speak(); // "Dog makes a noise."
```

3. **`Object` 构造函数**：ES3 引入了 `Object` 构造函数，允许开发者创建对象并动态添加属性。

```javascript
let obj = new Object();
obj.property1 = "value1";
```

4. **`Object.prototype` 扩展**：ES3 允许开发者扩展 `Object.prototype`，从而为所有对象添加通用的方法和属性。

```javascript
Object.prototype.describe = function () {
  return JSON.stringify(this);
};
let obj = { name: "Alice" };
console.log(obj.describe()); // '{"name":"Alice"}'
```

5. **`hasOwnProperty` 方法**：ES3 引入了 `hasOwnProperty` 方法，用于检查对象是否具有特定的属性，而不是从原型链中继承的属性。这有助于避免属性冲突。

```javascript
let obj = { a: 1 };
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("toString")); // false
```

### 改进类型系统

在 ECMAScript 3（ES3）中，虽然没有引入全新的类型系统，但对 JavaScript 的类型处理进行了改进和增强。以下是一些与类型系统相关的关键点：

1. **基本数据类型**：JavaScript 中的基本数据类型包括 `Undefined`、`Null`、`Boolean`、`Number`、`String` 和 `Object`。ES3 确保了这些基本类型的行为一致性，并提供了更好的类型检查机制。

2. **类型转换**：ES3 对隐式和显式类型转换进行了更清晰的定义。例如，字符串和数字之间的转换在 ES3 中得到了更好的处理，开发者可以使用 `Number()`、`String()` 和 `Boolean()` 函数进行显式转换。

3. **`typeof` 操作符**：ES3 引入了 `typeof` 操作符，用于检测变量的类型。它返回一个表示变量类型的字符串，例如：

```javascript
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof {}; // "object"
typeof null; // "object" (这是一个历史遗留问题)
```

4. **对象和数组的类型**：ES3 明确了对象和数组的类型，允许开发者更好地理解和使用这些数据结构。数组在 ES3 中被视为对象的一种特殊形式，具有特定的属性和方法。

## ECMAScript5

- ECMAScript 5 (ES5) - 2016
  - 引入了严格模式（"use strict"）
  - 新增了 JSON 支持
  - 增加了数组方法（如 forEach、map、filter、reduce 等）
  - 引入了 `Object.create`、`Object.defineProperty` 等方法

### 严格模式

严格模式（Strict Mode）是 ECMAScript 5（ES5）引入的一种在 JavaScript 中运行的更严格的解析和执行模式。通过启用严格模式，开发者可以编写更安全、更高效的代码。严格模式的主要目的是消除 JavaScript 中一些不良的语言特性，避免潜在的错误，并提高代码的可维护性。

1. 启用严格模式。严格模式可以通过在 JavaScript 文件的开头或函数的开头添加 "use strict"; 来启用。

```js
"use strict";
function myFunction() {
  // 在这个函数中启用严格模式
}
```

2. 严格模式特性

- 禁止使用未声明的变量

```js
"use strict";
x = 10; // ReferenceError: x is not defined
```

- 禁止删除变量、函数和参数

```js
"use strict";
var x = 10;
delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
```

3. 禁止使用 this 指向全局对象

```js
"use strict";
this.x = 10; // TypeError: Cannot set property 'x' of #<Object>
```

4. 禁止重复声明变量

```js
"use strict";
var x = 10;
var x = 20; // SyntaxError: Identifier 'x' has already been declared
```

5. 禁止使用 `with` 语句

```js
"use strict";
with (obj) {
  x = 10;
} // SyntaxError: Strict mode code may not include a with statement
```

6. 禁止使用 `eval()` 函数

```js
"use strict";
eval("var x = 10"); // SyntaxError: Strict mode code may not include eval()
```

7. 禁止使用 `arguments.callee` 和 `arguments.caller`

```js
"use strict";
function myFunction() {
  arguments.callee(); // SyntaxError: Strict mode code may not include arguments.callee
  arguments.caller; // SyntaxError: Strict mode code may not include arguments.caller
}
```

### 数组方法

- **`Array.prototype.forEach(callback)`**：对数组的每个元素执行一次提供的函数。

  ```javascript
  const arr = [1, 2, 3];
  arr.forEach((element) => {
    console.log(element); // 输出 1, 2, 3
  });
  ```

- **`Array.prototype.map(callback)`**：创建一个新数组，包含调用提供的函数处理每个元素后的结果。

  ```javascript
  const arr = [1, 2, 3];
  const doubled = arr.map((element) => element * 2); // [2, 4, 6]
  ```

- **`Array.prototype.filter(callback)`**：创建一个新数组，包含所有通过测试的元素。

  ```javascript
  const arr = [1, 2, 3, 4];
  const evens = arr.filter((element) => element % 2 === 0); // [2, 4]
  ```

- **`Array.prototype.reduce(callback, initialValue)`**：对数组中的每个元素执行一个 reducer 函数，最终计算出一个单一的值。

  ```javascript
  const arr = [1, 2, 3];
  const sum = arr.reduce((accumulator, current) => accumulator + current, 0); // 6
  ```

- **`Array.prototype.every(callback)`**：测试数组中的所有元素是否都满足提供的测试函数。

  ```javascript
  const arr = [2, 4, 6];
  const allEven = arr.every((element) => element % 2 === 0); // true
  ```

- **`Array.prototype.some(callback)`**：测试数组中是否至少有一个元素满足提供的测试函数。

  ```javascript
  const arr = [1, 2, 3];
  const hasEven = arr.some((element) => element % 2 === 0); // true
  ```

- **`Array.prototype.indexOf(searchElement, fromIndex)`**：返回数组中首次出现的指定元素的索引，如果未找到则返回 -1。

  ```javascript
  const arr = [1, 2, 3];
  const index = arr.indexOf(2); // 1
  ```

- **`Array.prototype.lastIndexOf(searchElement, fromIndex)`**：返回数组中最后一次出现的指定元素的索引，如果未找到则返回 -1。
  ```javascript
  const arr = [1, 2, 3, 2];
  const lastIndex = arr.lastIndexOf(2); // 3
  ```

### 对象方法

- **`Object.create(proto, propertiesObject)`**：创建一个新对象，使用指定的原型对象和可选的属性。

  ```javascript
  const proto = {
    greet: function () {
      console.log("Hello!");
    },
  };
  const obj = Object.create(proto);
  obj.greet(); // "Hello!"
  ```

- **`Object.defineProperty(obj, prop, descriptor)`**：在对象上定义新属性或修改现有属性的特性。

  ```javascript
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "Alice",
    writable: false,
  });
  obj.name = "Bob"; // 不会改变，因为 writable 为 false
  ```

- **`Object.defineProperties(obj, props)`**：在对象上定义多个新属性或修改现有属性的特性。

  ```javascript
  const obj = {};
  Object.defineProperties(obj, {
    name: { value: "Alice", writable: false },
    age: { value: 30, writable: true },
  });
  ```

- **`Object.keys(obj)`**：返回一个数组，包含对象自身的所有可枚举属性的名称。
  ```javascript
  const obj = { a: 1, b: 2 };
  const keys = Object.keys(obj); // ['a', 'b']
  ```

### 字符串方法

- **`String.prototype.trim()`**：去除字符串两端的空白字符。
  ```javascript
  const str = "   Hello, World!   ";
  const trimmed = str.trim(); // "Hello, World!"
  ```

### JSON 方法

- **`JSON.stringify(value, replacer, space)`**：将 JavaScript 值转换为 JSON 字符串。

  ```javascript
  const obj = { name: "Alice", age: 30 };
  const jsonString = JSON.stringify(obj); // '{"name":"Alice","age":30}'
  ```

- **`JSON.parse(text, reviver)`**：将 JSON 字符串解析为 JavaScript 值。
  ```javascript
  const jsonString = '{"name":"Alice","age":30}';
  const obj = JSON.parse(jsonString); // { name: "Alice", age: 30 }
  ```

## ECMAScript6

- ECMAScript 6 (ES6 ，ES2015) - 2015
  - 引入了 let 和 const 关键字 以及 块级作用域。
  - 新增了箭头函数（arrow functions）。
  - 增加了模板字符串（template literals）。
  - 引入了默认参数、解构赋值和扩展运算符。
  - 引入了类（class）和模块（module）。
  - 新增了 Promise 对象。
  - 引入了生成器和迭代器。
  - 引入了 Map、Set、WeakMap 和 WeakSet 数据结构。
  - 引入了新的原始数据类型 Symbol。
  - 新增了一些方法。

### let 与 const

**_let_**：用于声明块级作用域的变量，避免了使用 var 声明变量时可能出现的作用域问题。

1. 块级作用域。`let` 声明的变量具有块级作用域，即它只在其所在的代码块内有效。

```js
{
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```

2. 不允许重复声明。在同一作用域内，不能使用 `let` 重复声明同一个变量。

```js
let y = 20;
let y = 30; // SyntaxError: Identifier 'y' has already been declared
```

3. 提升（Hoisting）。`let` 声明的变量会被提升，但在声明之前访问会导致 `ReferenceError`，这被称为“暂时性死区”（Temporal Dead Zone）。

```js
console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 30;
```

**_const_**：用于声明常量，常量的值不能被重新赋值，且同样具有块级作用域。

1. 块级作用域。与 let 一样，const 也具有块级作用域。

```js
{
  const a = 5;
  console.log(a); // 5
}
console.log(a); // ReferenceError: a is not defined
```

2. 常量声明。const 用于声明常量，声明后不能重新赋值。

```js
const b = 10;
// b = 20; // TypeError: Assignment to constant variable.
```

3. 对象和数组的可变性。使用 const 声明的对象或数组的引用不能改变，但其内容是可变的。

```js
const obj = { name: "Alice" };
obj.name = "Bob"; // 允许，内容可变
console.log(obj.name); // Bob

// obj = {}; // TypeError: Assignment to constant variable.
```

4. 不允许重复声明。在同一作用域内，不能使用 const 重复声明同一个变量。

```js
const c = 15;
const c = 25; // SyntaxError: Identifier 'c' has already been declared
```

需要注意的是，虽然 const 定义的变量，不允许重新进行复制。但是对于复杂类型的数据来说，const 只能保证变量指向的内存地址不会改变，不会影响指向的数据是不是可变的。可以通过`Object.freeze()`方法冻结对象。

> `Object.freeze()` 可以冻结一个对象，对象不能再被修改，添加和删除

### 箭头函数

箭头函数（Arrow Functions）是 ECMAScript 6（ES6）引入的一种新的函数表达式语法。它提供了一种更简洁的方式来定义函数，并且在处理 this 关键字时具有不同的行为。

**_基本语法_**

```js
const functionName = (parameters) => {
  // function body
};
```

- 如果只有一个参数，可以省略圆括号。
- 如果函数体只有一条语句，可以省略大括号和 return 关键字。

1. 基本用法

```js
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
```

2. 无参数

```js
const greet = () => "Hello, World!";
console.log(greet()); // Hello, World!
```

3. 单个参数

```js
const square = (x) => x * x;
console.log(square(4)); // 16
```

4. 多行函数体

```js
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(2, 5)); // 10
```

5. 数组方法中

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

**_应用场景_**

1. 数组处理。箭头函数常用于数组的高阶函数，如 map、filter 和 reduce，使代码更加简洁。

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

2. 事件处理。在处理 DOM 事件时，箭头函数可以避免 this 的绑定问题。

```js
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

3. 简化回调函数。箭头函数可以简化回调函数的定义，使代码更加简洁。

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
```

**_注意事项_**

1. 箭头函数不绑定 this。箭头函数中的 this 指向箭头函数定义时的上下文，而不是执行时的上下文。

```js
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

const greet = () => {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

person.greet(); // Hello, my name is John and I am 30 years old.
greet(); // Hello, my name is undefined and I am undefined years old.
```

2. 箭头函数不支持 new 操作符。箭头函数不能作为构造函数使用，也不能使用 new.target 属性。

```js
const Person = (name, age) => {
  this.name = name;
  this.age = age;
};

const john = new Person("John", 30); // TypeError: Person is not a constructor
```

3. 箭头函数不支持 arguments 对象。箭头函数没有自己的 arguments 对象，而是使用函数定义时的上下文中的 arguments 对象。

```js
const sum = (a, b) => {
  console.log(arguments); // ReferenceError: arguments is not defined
  return a + b;
};
```

4. 箭头函数不支持 yield 关键字。箭头函数不能包含 yield 关键字，也不能作为生成器函数使用。

```js
const generator = () => {
    yield 1;
    yield 2;
};

const gen = generator();
gen.next(); // TypeError: generator is not a generator function
```

### 模板字符串

模板字符串（Template Literals）是 ECMAScript 6（ES6）引入的一种新的字符串表示法，它使用反引号（`）来定义字符串，提供了更强大的功能。

1. 多行字符串。传统的字符串在 JavaScript 中只能使用单引号（'）或双引号（"），而模板字符串可以轻松地创建多行字符串。

```js
const multiLineString = `这是一个
多行字符串`;
console.log(multiLineString);
```

2. 字符串插值。模板字符串支持字符串插值，通过 `${}` 语法将变量或表达式的值插入到字符串中。

```js
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

3. 嵌套表达式。模板字符串支持嵌套表达式，通过 `${}` 语法将表达式的值插入到字符串中。

```js
const a = 5;
const b = 10;
const result = `5 + 10 = ${a + b}`;
console.log(result); // 输出: 5 + 10 = 15
```

4. 标签模板。标签模板（Tagged Templates）允许你定义一个函数来处理模板字符串。这个函数可以接收模板字符串的内容和插值部分，从而实现更复杂的字符串处理。

```js
function tag(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

const result = tag`Hello, ${name}!`;
console.log(result); // Hello, Alice!
```

5. 反斜杠转义。在模板字符串中，反斜杠（\）的使用更为简单，通常不需要像传统字符串那样频繁地进行转义。例如，使用反引号时，可以直接包含单引号和双引号。

```js
const quote = `他说: "你好，世界！"`;
console.log(quote); // 输出: 他说: "你好，世界！"
```

6. 模板字符串中使用单引号。在模板字符串中使用单引号，可以避免在字符串中使用反斜杠进行转义。

```js
const name = "Alice";
const greeting = `Hello, \'${name}\'!`;
console.log(greeting); // Hello, 'Alice'!
```

### 解构赋值

解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。

1. 数组解构赋值。数组解构赋值可以将数组中的元素赋值给变量。

```js
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5]
```

解构时忽略某些数组元素。

```js
const array = [1, 2, 3];
const [a, , c] = array;

console.log(a); // 输出: 1
console.log(c); // 输出: 3
```

解构时给变量设置默认值。

```js
const array = [1];
const [a, b = 2] = array;

console.log(a); // 输出: 1
console.log(b); // 输出: 2
```

2. 对象解构赋值。对象解构赋值可以将对象中的属性赋值给变量。

```js
const person = {
  name: "Alice",
  age: 25,
};
const { name, age } = person;
console.log(name, age); // Alice 25
```

解构时重命名变量。

```js
const person = {
  name: "Alice",
  age: 25,
};
const { name: myName, age: myAge } = person;
console.log(myName, myAge); // Alice 25
```

3. 嵌套解构赋值。嵌套解构赋值可以将嵌套结构中的元素赋值给变量。

```js
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};
const {
  address: { city },
} = person;
console.log(city); // New York
```

4. 函数参数解构。在函数参数中使用解构赋值，可以将数组或对象中的元素赋值给函数的参数。

```js
function greet({ name = "Guest", age = 0 }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet({ name: "Bob", age: 30 }); // Hello, Bob! You are 30 years old.
greet({ name: "Charlie" }); // Hello, Charlie! You are 0 years old.
```

总的来说，解构赋值提供了一种简洁的方式来提取数组和对象中的值，减少了代码的冗余，提高了可读性。它在现代 JavaScript 开发中得到了广泛的应用，尤其是在处理复杂数据结构时。

### 扩展运算符

扩展运算符（Spread Operator）是 ECMAScript 6（ES6）引入的一种语法，使用三个点（...）表示。它可以将可迭代对象（如数组、字符串、对象等）展开为个别元素或属性。

1. 数组的扩展

- 合并数组。使用扩展运算符可以将多个数组合并为一个数组。
- 复制数组。使用扩展运算符可以复制一个数组。
- 添加元素。使用扩展运算符可以向数组中添加元素。

```js
// 合并数组
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// 复制数组
const array3 = [...array1];
console.log(array3); // [1, 2, 3]

// 添加元素
const array4 = [...array1, 4];
console.log(array4); // [1, 2, 3, 4]
```

2. 对象的扩展

- 复制对象。使用扩展运算符可以复制一个对象。
- 添加或覆盖属性。使用扩展运算符可以向对象中添加或覆盖属性。

```js
// 复制对象
const object1 = { name: "Alice", age: 25 };
const object2 = { ...object1 };
console.log(object2); // { name: 'Alice', age: 25 }

// 添加或覆盖属性
const object3 = { ...object1, address: "New York" };
console.log(object3); // { name: 'Alice', age: 25, address: 'New York' }
```

3. 字符串的扩展

扩展运算符可以将字符串转换为数组。

```js
// 分割字符串
const str = "Hello, World!";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o', ',','', 'W', 'o', 'r', 'l', 'd', '!']
```

4. 函数参数的扩展
   扩展运算符可以用于函数调用，将数组元素作为单独的参数传递。

```js
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // 输出: 6
```

5. 结合剩余参数

扩展运算符与剩余参数（Rest Parameters）相对，后者用于将函数的多个参数收集到一个数组中。

```js
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(1, 2, 3, 4)); // 输出: 10
```

总体来说，扩展运算符是一种非常有用的语法，可以简化代码，提高可读性和可维护性。它在现代 JavaScript 开发中广泛应用，特别是在处理数组、对象、字符串和函数参数时。

### 类（Class）

ECMAScript 6（ES6）引入了类（Class）的概念，使得 JavaScript 的面向对象编程更加清晰和易于使用。类是构造函数的语法糖，提供了一种更直观的方式来创建对象和处理继承。

**_基本语法_**

```js
class ClassName {
  constructor(parameters) {
    // 构造函数
  }

  methodName() {
    // 方法
  }
}
```

1. 类的定义

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}
```

2. 类的实例化

```js
const person = new Person("Alice", 25);
person.sayHello(); // Hello, my name is Alice and I am 25 years old.
```

3. 继承。ES6 类支持继承，可以通过 extends 关键字来实现：

```js
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  sayGrade() {
    console.log(`I am in grade ${this.grade}.`);
  }
}

const student = new Student("Bob", 20, "A");
student.sayHello(); // Hello, my name is Bob and I am 20 years old.
student.sayGrade(); // I am in grade A.
```

4. 静态属性和方法。这些方法是属于类本身而不是类的实例。

```js
class MathUtils {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.PI); // 输出: 3.14159
console.log(MathUtils.square(5)); // 输出: 25
```

5. 私有属性和方法。ES6 类本身并不支持访问修饰符（如 private 和 protected），但可以通过一些约定（如前缀 \_）来表示私有属性。ES2022 引入了私有字段的概念，可以使用 # 前缀来定义私有属性和方法。

```js
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  #sayHello() {
    console.log(
      `Hello, my name is ${this.#name} and I am ${this.#age} years old.`,
    );
  }

  sayHello() {
    this.#sayHello();
  }
}

const person = new Person("Alice", 25);
person.sayHello(); // Hello, my name is Alice and I am 25 years old.
// console.log(person.#name); // 报错: #name 是私有的属性
```

### 模块（import/export）

ECMAScript 模块（ES Modules）是 ECMAScript 6（ES6）引入的一种模块化机制，旨在使 JavaScript 代码的组织和管理更加清晰和高效。ES 模块允许开发者将代码分割成多个文件，并在这些文件之间进行导入和导出，从而实现代码的重用和维护。

**基本概念**

- 模块：每个模块都是一个独立的文件，默认情况下，模块中的变量和函数是私有的，外部无法直接访问。
- 导出: 使用 `export` 关键字将模块中的变量、函数或类导出，使其可以在其他模块中使用。
- 导入: 使用 `import` 关键字从其他模块中导入导出的内容。

**导出模块**

1. 默认导出。每个模块可以有一个默认导出，使用 export default 关键字。

```js
// 默认导出
export default function greet(name) {
  console.log(`Hello, ${name}`);
}
```

2. 命名导出。可以导出多个变量、函数或类，使用 `export` 关键字。

```js
// 命名导出
// myModule.js
export const name = "Alice";
export const age = 25;

export function greet() {
  console.log(`Hello, ${name}`);
}
```

**导入模块**

1. 默认导入。使用 `import` 关键字导入默认导出的内容。

```js
// 默认导入
import greet from "./myModule.js";

greet("Alice"); // Hello, Alice
```

2. 命名导入。使用 `import` 关键字导入命名导出的内容。

```js
// 命名导入
import { name, age, greet } from "./myModule.js";

console.log(name); // Alice
console.log(age); // 25
greet(); // Hello, Alice
```

3. 重命名导入。使用 `as` 关键字重命名导入的变量、函数或类。

```js
// 重命名导入
import { name as myName, age as myAge } from "./myModule.js";

console.log(myName); // Alice
console.log(myAge); // 25
```

4. 导入全部。使用 `*` 导入模块中的所有内容。

```js
// 导入全部
import * as myModule from "./myModule.js";

console.log(myModule.name); // Alice
console.log(myModule.age); // 25
myModule.greet(); // Hello, Alice
```

**注意事项**

- 模块是惰性加载的: 模块在第一次被导入时执行，后续的导入不会再次执行模块代码。
- 模块的作用域: 每个模块都有自己的作用域，模块内的变量和函数不会污染全局作用域。
- 使用模块：在浏览器中使用 ES 模块时，需要在 `<script>` 标签中添加 `type="module"` 属性。

**动态导入**
可以使用 `import()` 函数动态导入模块，返回一个 Promise。

```js
async function loadModule() {
  const module = await import("./myModule.js");
  console.log(module.name); // Alice
}

loadModule();
```

### Promise

Promise 是 ECMAScript 6（ES6）引入的一种用于处理异步操作的对象。它代表一个可能在未来某个时间点完成或失败的操作，并允许你以更清晰的方式处理异步代码，避免了回调地狱（callback hell）的问题。

:::tip
关于 Promise 的详细内容可以查看：[JavaScript-Promise](/JavaScript/e6uvtokj/)
:::

### 生成器（generator）和迭代器（iterator）

在 ECMAScript 6（ES6）中，生成器（Generators）和迭代器（Iterators）是用于处理可迭代对象的重要概念。它们使得在 JavaScript 中处理序列数据变得更加灵活和强大。

**迭代器（Iterator）**
迭代器是一种对象，它定义了访问集合中元素的方式。迭代器必须实现一个 next() 方法，该方法返回一个对象，该对象包含两个属性：

- `done`：一个布尔值，表示迭代是否完成。
- `value`：迭代返回的值。

```js
function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}
const iterator = createIterator([1, 2, 3]);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { done: true }
```

**生成器（Generator）**

生成器是一种特殊类型的函数，可以暂停和恢复执行。生成器函数使用 function\* 语法定义，并且可以使用 `yield` 关键字来返回值。每次调用生成器的 `next()` 方法时，生成器会执行到下一个 `yield` 表达式，并返回一个对象，包含 `value` 和 `done` 属性。

```js
function* createGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = createGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { done: true }
```

### Map 和 Set

ECMAScript 6（ES6）引入了 Set、Map、WeakSet 和 WeakMap 数据结构，它们提供了更灵活和高效的方式来存储和管理数据。

- `Set` 是一种集合类型，允许存储唯一的值。它的主要特性是每个值只能出现一次。
- `Map` 是一种键值对集合，允许使用任何类型的值作为键。它的主要特性是键的顺序是有序的。
- `WeakSet` 是一种类似于 `Set` 的集合，但它只允许对象作为成员，并且对其成员的引用是弱引用。这意味着如果没有其他引用指向 `WeakSet` 中的对象，它们可以被垃圾回收。
- `WeakMap` 是一种类似于 `Map` 的集合，但它的键是弱引用。这意味着如果没有其他引用指向 `WeakMap` 中的键，它们可以被垃圾回收。

:::tip
关于 JavaScript-Set、Map、WeakSet和WeakMap 的详细内容可以查看：[JavaScript-Set、Map、WeakSet和WeakMap](/JavaScript/aesr75yu/)
:::

### Symbol

在 ECMAScript 6（ES6）中，引入了 Symbol 数据类型，它是一种新的原始数据类型，用于创建唯一的标识符。Symbol 的主要用途是为对象的属性提供唯一性，避免属性名的冲突。

- 唯一性: Symbol 的主要用途是为对象的属性提供唯一性，避免属性名冲突。
- 隐私属性: 使用 Symbol 作为对象的属性名，可以创建隐私属性，因为 Symbol 不会被常规的属性枚举方法（如 `for...in `或 `Object.keys()`）列出。

**创建使用**

1. 创建 Symbol。可以使用 Symbol() 函数创建一个新的 Symbol。每个 Symbol 都是唯一的，即使它们的描述相同。

```js
const symbol1 = Symbol();
const symbol2 = Symbol("description");
const symbol3 = Symbol("description");

console.log(symbol1 === symbol2); // false
console.log(symbol2 === symbol3); // false
```

2. 使用 Symbol 作为属性名。可以使用 Symbol 作为对象的属性名，从而避免属性名的冲突。

```js
const symbol = Symbol("description");

const obj = {};
obj[symbol] = "value";
console.log(obj[symbol]); // 'value'
```

**内置Symbol**

- `Symbol.iterator`: 用于定义对象的默认迭代器，使对象可以使用 for...of 循环。

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of myIterable) {
  console.log(value); // 1, 2, 3
}
```

- `Symbol.asyncIterator`: 用于创建一个异步迭代器对象，用于遍历异步可迭代对象。

```js
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

(async () => {
  for await (const value of asyncIterable) {
    console.log(value); // 1, 2, 3
  }
})();
```

- `Symbol.toStringTag`: 用于定义一个对象的字符串描述。

```js
const myObject = {
  [Symbol.toStringTag]: "MyCustomObject",
};

console.log(Object.prototype.toString.call(myObject)); // '[object MyCustomObject]'
```

- `Symbol.hasInstance`: 用于自定义 instanceof 操作符的行为。

```js
class MyClass {
  static [Symbol.hasInstance](instance) {
    return instance.customProperty === true;
  }
}

const obj = { customProperty: true };
console.log(obj instanceof MyClass); // true
```

- `Symbol.isConcatSpreadable`: 用于指示一个对象是否可以被 `concat()` 方法展开。

```js
const myArray = [1, 2];
const myObject = {
  [Symbol.isConcatSpreadable]: true,
  0: 3,
  1: 4,
  length: 2,
};

const newArray = myArray.concat(myObject); // [1, 2, 3, 4]
```

- `Symbol.unscopables`:用于定义哪些属性不应被 with 语句访问。

```js
const myObject = {
  a: 1,
  b: 2,
  [Symbol.unscopables]: { b: true },
};

with (myObject) {
  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}
```

### 新增方法

ECMAScript 2015，引入了许多新的方法和功能，极大地增强了 JavaScript 的能力。

1. 数组方法

- **`Array.from()`**: 将类数组对象或可迭代对象转换为数组。

```js
const arrayLike = { 0: "a", 1: "b", length: 2 };
const arr = Array.from(arrayLike); // ['a', 'b']
```

- **`Array.of()`**: 创建一个新的数组实例，使用一组指定的元素。

```js
const arr = Array.of(1, 2, 3); // [1, 2, 3]
```

- **`Array.prototype.fill()`**: 用静态值填充数组的所有元素。

```js
const arr = new Array(3).fill(0); // [0, 0, 0]
```

- **`Array.prototype.find()`**: 返回数组中满足提供的测试函数的第一个元素的值。

```js
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find((num) => num > 3); // 4
```

- **`Array.prototype.findIndex()`**: 返回数组中满足提供的测试函数的第一个元素的索引。

```js
const index = numbers.findIndex((num) => num > 3); // 3
```

- **`Array.prototype.copyWithin()`**: 在数组内部复制指定位置的元素到另一个位置。

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // 输出: [4, 5, 3, 4, 5]
```

2. 字符串方法

- **`String.prototype.includes()`**: 判断一个字符串是否包含另一个字符串。

```js
const includes = str.includes("world"); // true
```

- **`String.prototype.startsWith()`**: 判断一个字符串是否以另一个字符串开头。

```js
const str = "Hello, world!";
const starts = str.startsWith("Hello"); // true
```

- **`String.prototype.endsWith()`**: 判断一个字符串是否以另一个字符串结尾。

```js
const ends = str.endsWith("world!"); // true
```

- **`String.prototype.repeat()`**: 返回一个新字符串，表示将原字符串重复指定次数。

```js
const repeated = "abc".repeat(3); // 'abcabcabc'
```

3. 对象方法

- **`Object.assign()`**: 将所有可枚举的属性从一个或多个源对象复制到目标对象。

```js
const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source); // { a: 1, b: 2 }
```

- **`Object.is()`**: 判断两个值是否严格相等，类似于 ===，但处理 NaN 和 -0 的方式不同。

```js
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
```

- **`Object.keys()`**: 返回一个数组，包含对象自身可枚举属性的名称。

```js
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // 输出: ['a', 'b']
```

- **`Object.values()`**: 返回一个由对象的自身可枚举属性值组成的数组。

```js
const values = Object.values(obj); // [1, 2]
```

- **`Object.freeze()`**: 冻结一个对象，使其不能被修改。

```js
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // 无效，obj.a 仍然是 1
```

- **`Object.seal()`**: 密封一个对象，防止添加新属性，但可以修改现有属性。

```js
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // 有效
obj.b = 3; // 无效
```

- **`Object.getOwnPropertyNames()`**: 返回一个数组，包含对象自身的所有属性（包括非枚举属性）。

```js
const obj = Object.create({ b: 2 }, { a: { value: 1 } });
const propertyNames = Object.getOwnPropertyNames(obj); // ['a']
```

4. Number 方法

- **`Number.isFinite()`**: 判断一个值是否是有限的数字。

```js
Number.isFinite(2); // true
Number.isFinite(Infinity); // false
```

- **`Number.isNaN()`**: 判断一个值是否是 NaN。

```js
Number.isNaN(NaN); // true
Number.isNaN("NaN"); // false
```

- **`Number.isInteger()`**: 判断一个值是否是整数。

```js
Number.isInteger(4); // true
Number.isInteger(4.5); // false
```

- **`Number.isSafeInteger()`**: 判断一个值是否是安全整数。

```js
Number.isSafeInteger(10); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
```

## ECMAScript 7

- ECMAScript 7 (ES2016) - 2016
  - 新增了 `Array.prototype.includes` 方法。
  - 新增了指数运算符（`**`）。

### 数组方法

- `Array.prototype.includes()`：用于判断一个数组是否包含某个特定的值，返回布尔值。

```js
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false
```

### 指数运算符

新引入的一个运算符 `**`，用于进行指数运算。这个运算符可以用来替代 `Math.pow()` 方法，使得代码更加简洁。

```js
console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8
```

## ECMAScript 8

- ECMAScript 8 (ES2017) - 2017
  - 引入了 `async` 和 `await`。
  - 新增了 `Object.values()` 和 `Object.entries()`。
  - 增加了字符串填充方法（`padStart` 和 `padEnd`）。
  - 引入了 `Object.getOwnPropertyDescriptors()`。
  - 允许函数参数列表和调用中的尾随逗号。
  - 引入了共享数组缓冲区（SharedArrayBuffer）和 Atomics 对象用于多线程编程

### `async` 和 `await`

`async` 和 `await` 是 ECMAScript 2017（ES8）引入的两个关键字，用于处理异步操作。它们使得异步代码的编写更加简洁和易于理解。

- `async`：用于声明一个异步函数。
- `await`：用于等待一个异步操作的结果。只能在异步函数中使用。

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("数据加载完成");
    }, 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData(); // 输出: 数据加载完成
```

### 对象方法

- `Object.values()`：返回一个包含对象所有值的数组。

```js
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj)); // 输出: [1, 2, 3]
```

- `Object.entries()`：返回一个包含对象所有值的数组。

```js
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.entries(obj)); // 输出: [['a', 1], ['b', 2], ['c', 3]]
```

- `Object.getOwnPropertyDescriptors()`：返回一个对象的所有自有属性描述符。

```js
const obj = {
  a: 1,
  b: 2,
};
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// 输出: { a: { value: 1, writable: true, enumerable: true, configurable: true }, b: { value: 2, writable: true, enumerable: true, configurable: true } }
```

### 字符串方法

- `String.prototype.padStart()`：在字符串的开头填充指定的字符串，直到达到指定的长度。

```js
const str = "hello";

console.log(str.padStart(10, "*")); // 输出: "****hello"
```

- `String.prototype.padEnd()`：在字符串的末尾填充指定的字符串，直到达到指定的长度。

```js
const str = "hello";

console.log(str.padEnd(10, "*")); // 输出: "hello****"
```

### 函数参数

在 ECMAScript 2017（ES8）中，允许在函数参数列表和函数调用中使用尾随逗号（trailing commas）。这意味着在定义函数参数或调用函数时，可以在最后一个参数后面添加一个逗号，而不影响代码的执行。这一特性使得在添加新参数时，减少了对现有行的修改，从而提高了代码的可维护性。

1. 在定义函数参数时使用尾随逗号：

```js
function sum(a, b, c) {
  return a + b + c;
}
```

2. 在调用函数时使用尾随逗号：

```js
console.log(sum(1, 2, 3)); // 输出: 6
```

## ECMAScript 9

- ECMAScript 9 (ES2018) - 2018
  - 增加了异步迭代（async iteration）。
  - 新增了 `Promise.prototype.finally `。
  - 增强了扩展运算符（spread operator）和剩余参数（rest parameters）的功能。
  - 正则表达式改进

### 异步迭代

异步迭代器使得在处理异步数据（如从网络获取数据、读取文件等）时，可以使用 for await...of 循环来逐个获取数据项。

异步迭代器是一个对象，它实现了 `Symbol.asyncIterator `方法，并返回一个异步迭代器对象。这个对象必须具有 `next()` 方法，该方法返回一个 Promise，解析为一个对象，该对象具有 `value` 和 `done` 属性。

- `value` 属性表示当前迭代的值。
- `done` 属性是一个布尔值，表示是否已经迭代完毕。

**简单示例**
`for await...of` 循环可以用于异步迭代器，允许你在异步操作完成时逐个处理结果。

```js
async function* asyncGenerator() {
  yield "Hello";
  yield "World";
}

async function processAsyncIterable() {
  for await (const value of asyncGenerator()) {
    console.log(value);
  }
}

processAsyncIterable();
// 输出:
// Hello
// World
```

### Promise.prototype.finally()

`Promise.prototype.finally()` 方法用于在 Promise 对象的状态改变时执行一个回调函数。无论 Promise 对象是成功、失败还是被取消，都会执行该回调函数。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise settled");
  });
```

### 扩展运算符和剩余参数

- 对象的扩展运算符：允许使用 `...` 语法在对象字面量中进行属性的复制和合并。

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

## ECMAScript 10

- ECMAScript 10 (ES2019) - 2019

  - 引入了 `Array.prototype.flat()` 和 `Array.prototype.flatMap()`
  - 新增了 `Object.fromEntries()`
  - 增加了 `String.prototype.trimStart()` 和 `String.prototype.trimEnd()`
  - 支持可选的 `catch` 绑定

### 数组方法

- `Array.prototype.flat()`：用于将多维数组转换为一维数组。

```js
const nestedArray = [1, 2, [3, 4], [5, 6]];

const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
```

- `Array.prototype.flatMap()`：用于将数组的每个元素映射为一个新数组，然后将新数组扁平化为一维数组。

```js
const nestedArray = [1, 2, [3, 4], [5, 6]];

const flattenedArray = nestedArray.flatMap((num) => [num * 2]);

console.log(flattenedArray); // [2, 4, 6, 8, 10, 12]
```

### 对象方法

- `Object.fromEntries()`：用于将一个键值对数组转换为一个对象。

```js
const entries = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];

const obj = Object.fromEntries(entries);

console.log(obj); // { name: 'John', age: 30, city: 'New York' }
```

### 字符串方法

- `String.prototype.trimStart()`：用于删除字符串开头的空白字符。

```js
const str = "   Hello, World   ";

const trimmedStr = str.trimStart();

console.log(trimmedStr); // 'Hello, World   '
```

- `String.prototype.trimEnd()`：用于删除字符串末尾的空白字符。

```js
const str = "   Hello, World   ";

const trimmedStr = str.trimEnd();

console.log(trimmedStr); // '   Hello, World'
```

### 可选的 `catch` 绑定

在 `try...catch` 语句中，catch 语句的参数变为可选的，可以省略。

```js
try {
  // 执行可能抛出异常的代码
} catch {
  // 处理异常
}
```

### Symbol.prototype.description

`Symbol.prototype.description` 属性是一个只读属性，返回一个字符串，表示 Symbol 对象的描述。

```js
const mySymbol = Symbol("My Symbol");

console.log(mySymbol.description); // 'My Symbol'
```

## ECMAScript 11

- ECMAScript 11 (ES2020) - 2020

  - 引入了 `BigInt` 类型
  - 新增了 `Promise.allSettled()` 方法
  - 支持动态导入（`import()`）
  - 引入了` Nullish Coalescing Operator (??)` 和 `Optional Chaining (?.)`
  - `String.prototype.matchAll()`

### BigInt

`BigInt` 是一种新的原始数据类型，用于表示任意精度的整数。它可以表示的整数范围比 `Number` 类型大得多。

```js
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
const maxSafeIntegerPlusOne = maxSafeInteger + 1;

console.log(maxSafeInteger); // 9007199254740991
console.log(maxSafeIntegerPlusOne); // 9007199254740992

const bigIntMaxSafeInteger = BigInt(maxSafeInteger);
const bigIntMaxSafeIntegerPlusOne = bigIntMaxSafeInteger + 1n;

console.log(bigIntMaxSafeInteger); // 9007199254740991n
console.log(bigIntMaxSafeIntegerPlusOne); // 9007199254740992n
```

### Promise.allSettled()

`Promise.allSettled()` 方法用于等待一组 Promise 对象全部完成（不管成功或失败），并返回一个包含所有 Promise 结果的数组。

```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error("Error"));
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results); // [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: Error: Error}, {status: 'fulfilled', value: 3}]
});
```

### 动态导入

动态导入（`import()`）允许你在运行时动态加载模块。它返回一个 Promise，解析为导入的模块。

```js
import("./myModule.js")
  .then((module) => {
    console.log(module); // 导入的模块对象
    module.default(); // 使用导入的模块
  })
  .catch((error) => {
    console.error(error); // 导入模块失败时的错误对象
  });
```

### 操作符`??`

`??` 操作符用于在左侧操作数为 `null` 或 `undefined` 时返回右侧操作数。

```js
const myVar = null;
const myVar2 = myVar ?? "default value";

console.log(myVar2); // 'default value'
```

### 操作符`?.`

`?.` 操作符用于访问对象的属性或方法，但当左侧操作数为 `null` 或 `undefined` 时，不会抛出错误。

```js
const obj = { a: { b: { c: 42 } } };
const value = obj.a?.b?.c; // 42
const missingValue = obj.a?.b?.d; // undefined
```

### 字符串方法

- `String.prototype.matchAll()`：用于在字符串中匹配所有正则表达式。

```js
const regex = /[a-z]+/g;
const str = "abc xyz abc";
const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(match);
  // ['abc'], ['xyz'], ['abc']
}
```

### globalThis

`globalThis` 是一个全局对象，它可以被用作 `this` 的引用。在浏览器中，它指向 `window` 对象，而在 Node.js 中，它指向 `global` 对象。

```js
console.log(this === globalThis); // true
```

## ECMAScript 12

- ECMAScript 12 (ES2021) - 2021

  - 引入了 `String.prototype.replaceAll()` 方法
  - 新增了 `Promise.any()` 方法
  - 支持逻辑赋值运算符（&&=、||=、??=）

### 字符串方法

- `String.prototype.replaceAll()` 方法用于在字符串中替换所有匹配的子字符串。

```js
const str = "Hello, world! Hello, everyone!";
const newStr = str.replaceAll("Hello", "Hi");
console.log(newStr); // 'Hi, world! Hi, everyone!'
```

### 数组方法

- `Array.prototype.at()` 方法允许你通过负索引访问数组的元素，提供了一种更直观的方式来获取数组的最后一个元素。

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1)); // 5
console.log(arr.at(-2)); // 4
```

### Promise方法

- `Promise.any()` 方法用于将多个 Promise 实例中第一个成功的结果返回。如果所有的 Promise 都失败，则返回一个失败的 Promise。

```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error("Failed"));
const promise3 = Promise.resolve(3);

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result)) // 输出 1
  .catch((error) => console.error(error));
```

### 逻辑运算符

`&&=`、`||=`、`??=` 是 ECMAScript 12 中引入的逻辑赋值运算符，用于在布尔表达式中进行赋值操作。

- `&&=`：如果左侧为 false，则不改变左侧的值；否则，将左侧与右侧的逻辑与结果赋值给左侧。
- `||=`：如果左侧为 true，则不改变左侧的值；否则，将左侧与右侧的逻辑或结果赋值给左侧。
- `??=`：如果左侧为 null 或 undefined，则将右侧的值赋给左侧；否则，左侧的值保持不变。

```js
let a = true;
let b = false;

// 使用 &&= 运算符
a &&= b; // 等同于 a = a && b;
console.log(a); // 输出: false

let x = true;
let y = true;

// 使用 &&= 运算符
x &&= y; // 等同于 x = x && y;
console.log(x); // 输出: true
```

```js
let a = false;
let b = true;

// 使用 ||= 运算符
a ||= b; // 等同于 a = a || b;
console.log(a); // 输出: true

let x = "Hello";
let y = "World";

// 使用 ||= 运算符
x ||= y; // 等同于 x = x || y;
console.log(x); // 输出: 'Hello' (x 保持不变，因为它是一个真值)
```

```js
let a = null;
let b = "default";

// 使用 ??= 运算符
a ??= b; // 等同于 a = a ?? b;
console.log(a); // 输出: 'default'

let x = 0;
let y = 42;

// 使用 ??= 运算符
x ??= y; // 等同于 x = x ?? y;
console.log(x); // 输出: 0 (x 保持不变，因为它不是 null 或 undefined)
```

## ECMAScript 13

- ECMAScript 13 (ES2021) - 2022

  - 引入了类字段（Class Fields）和私有字段（Private Fields）。
  - 新增了 Object.hasOwn 方法。
  - 增加了 Array.prototype.group 和 Array.prototype.groupToMap 方法。
  - 对 Error 类进行了增强。

### 类字段和私有字段

ECMAScript 12 引入了类字段（Class Fields）和私有字段（Private Fields）。

私有字段（以 # 开头）可以在类中定义，只有该类的实例可以访问。

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }
}

const person = new Person("John");
console.log(person.name); // 输出 'John'
person.name = "Jane";
console.log(person.name); // 输出 'Jane'
```

### 顶级await

允许在模块的顶层使用 await，使得异步代码的书写更加简洁。

```js
const result = await fetch("URL_ADDRESS");
console.log(await result.json());
```

### 对象方法

- `Object.hasOwn()` 方法用于检查对象是否具有指定的属性。

```js
const obj = { foo: 1, bar: 2 };
console.log(Object.hasOwn(obj, "foo")); // 输出 true
console.log(Object.hasOwn(obj, "baz")); // 输出 false
```

### 数据方法

- `Array.prototype.group()` 方法用于将数组中的元素按照指定的键分组。

```js
const arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 },
];

const grouped = arr.group((item) => item.age);
console.log(grouped); // 输出 { '25': [{ name: 'John', age: 25 }, { name: 'Bob', age: 25 }], '30': [{ name: 'Jane', age: 30 }] }
```

- `Array.prototype.groupToMap()` 方法用于将数组中的元素按照指定的键分组，并将结果转换为 Map 对象。

```js
const arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 },
];

const groupedMap = arr.groupToMap((item) => item.age);
console.log(groupedMap); // 输出 Map { 25 => [{ name: 'John', age: 25 }, { name: 'Bob', age: 25 }], 30 => [{ name: 'Jane', age: 30 }] }
```
