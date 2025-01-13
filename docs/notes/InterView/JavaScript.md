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