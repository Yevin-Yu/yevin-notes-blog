---
title: 面试记录 - JavaScript部分
createTime: 2025/01/13 09:37:14
permalink: /InterView/di6j03xm/
---

# 面试记录 - JavaScript部分

## 运算符优先级

```js
let a = 1
let b = 2
console.log(-a+++b++) // 1
```
解释：-(a++) + (b++), a 和 b 都是后置递增，所以先计算 -a 再计算 +b，所以结果为 1。

[由 [-a+++b++] 引发的思考 - JavaScript运算符优先级](/article/10yof5in/)

## 原型链

```js
const obj = {}
console.log(obj.prototype )  
// undefined
console.log(obj.__proto__ )  
// Object.prototype  { __proto__: null constructor: function Object()}
​
function test() {}
console.log(test.prototype ) 
// test.prototype {constructor: function test(),<prototype>: Object { … }}
console.log(test.__proto__) 
// Function.prototype  {constructor: function Function(), <prototype>: Object { … }}
```
[JavaScript-原型链解析](/JavaScript/cia8xnma/)

## 事件循环

JavaScript是单线程的，为了防止阻塞，JavaScript 引入了事件循环机制


**执行栈（Call Stack）**：JavaScript是单线程的，所有的代码执行都在一个执行栈中进行。当一个函数被调用时，它会被推入栈中，执行完成后会从栈中弹出。

**任务队列（Task Queue）**：当异步操作（如setTimeout、Promise等）完成时，它们的回调函数会被放入任务队列中，等待执行。

**事件循环（Event Loop）**：事件循环的主要任务是监视执行栈和任务队列。当执行栈为空时，事件循环会从任务队列中取出第一个任务并将其推入执行栈中执行。这一过程会不断循环，直到所有任务都被处理完。

  
**微任务和宏任务**：任务队列可以分为微任务（如Promise的.then()回调）和宏任务（如setTimeout、setInterval等）。微任务的优先级高于宏任务，事件循环会在每次从宏任务队列中取出任务之前，先执行所有的微任务。



[Event Loop - 事件循环机制 ](/JavaScript/3n85m43u/)

## 内存泄漏

内存泄漏是指程序中已分配的内存未被正确释放，导致内存占用不断增加，最终导致程序崩溃或性能下降。

内存泄漏通常发生在以下几种情况：

1. **全局变量**：不小心创建了全局变量，导致它们无法被垃圾回收机制回收。
2. **闭包**：闭包持有对外部变量的引用，如果不小心保留了不再需要的引用，可能导致内存泄漏。
3. **事件监听器**：未能移除不再需要的事件监听器，导致相关对象无法被垃圾回收。
4. **DOM引用**：在不再需要的情况下，仍然保留对 DOM 元素的引用。
5. **定时器**：未能清除不再需要的定时器，导致相关对象无法被垃圾回收。

如何避免内存泄漏：

1. **使用局部变量**：尽量使用局部变量而不是全局变量，避免不必要的全局作用域污染。

2. **及时清理闭包**：在使用闭包时，确保不再需要的引用被清除。例如，在不再需要某个函数时，可以将其引用设为 `null`。

3. **移除事件监听器**：在不再需要的情况下，及时移除事件监听器。可以使用 `removeEventListener` 方法来移除。

4. **清理 DOM 引用**：在不再需要某个 DOM 元素时，确保将其引用设为 `null`，以便垃圾回收机制能够回收。

5. **使用 WeakMap 和 WeakSet**：这些数据结构允许你存储对象的弱引用，当没有其他引用指向这些对象时，它们可以被垃圾回收。

6. **工具检测**：使用浏览器的开发者工具（如 Chrome 的内存快照）来检测内存使用情况，查找潜在的内存泄漏。


## 闭包和应用场景

闭包是指在一个函数内部定义的函数，它可以访问外部函数的变量，即使外部函数已经执行完毕。

```js
function outer() {
  let outerVar = 'I am outer';
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
const myClosure = outer();
myClosure(); // 输出：I am outer
```

闭包的常见用途包括：

1. **封装私有变量**：闭包可以用来封装私有变量，使其只能在闭包内部访问，从而保护变量不被外部修改。


2. **创建函数工厂**：闭包可以用来创建函数工厂，生成具有相同行为的函数，但具有不同的初始状态。


3. 模块模式：闭包可以用来实现模块模式，将代码封装在一个函数中，并返回一个对象，该对象包含私有变量和公共方法。


4. 回调函数：闭包可以用来实现回调函数，在异步操作完成后执行回调函数。


::: details  示例代码


```js
// 封装私有变量
function Counter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}
const counter = Counter();
counter.increment(); // 输出：1
counter.decrement(); // 输出：0


// 函数创建工厂
function makeAdder(x) {
    return function(y) { return x + y;};
}
const add5 = makeAdder(5);
console.log(add5(3)); // 8


// 模块模式
const myModule = (function() {
  let privateVar = 'I am private';
  function privateFunc() {
    console.log('I am private');
  }
  return {
    publicMethod: function() {
      console.log('I am public');
    }
  };
})();
myModule.publicMethod(); // 输出：I am public


// 回调函数
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Fetched data';
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // 输出：Fetched data
});
```

:::



