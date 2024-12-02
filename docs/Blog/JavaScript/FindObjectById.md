---
title: 从数组对象嵌套数据中快速查找数据[FindObjectById.js]
author: YEVIN
createTime: 2024/06/11 20:41:49
permalink: /article/k8bmwioi/
tags:
  - JavaScript
---
# FindObjectById.js

## 简介

> ​	从数组和对象嵌套数据中，快速简洁的取出自己想要的值

例如：
```js
const data = {
  id: 1,
  name: 'xiaoming',
  arr: [
    { id: 2, name: 'xiaohua', arr: [] },
    { id: 3, name: 'xiaohu', arr: [{ id: 4, name: 'xiaolan', arr: [] }] },
    { id: 6, name: 'xiaohua', arr: [] }
  ]
}
```
需求：从上面数据中找出 id 为 4 的所在对象的数据

## 使用递归

```js
function findValueById(obj, key, value) {
    // 检查 obj 是否为 null 或 undefined
    if (obj == null && obj == undefined) {
      return null;
    }
    if (Array.isArray(obj)) {
        return obj.reduce((acc, val) => acc || findValueById(val, key, value), null);
    }
    // 如果 obj 是对象，检查指定的 key
    if (typeof obj === 'object') {
        // 检查当前对象的 key 是否存在且值是否匹配
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return obj;
        }
        // 递归查找对象的值
        return Object.values(obj).reduce((acc, val) => acc || findValueById(val, key, value), null);
    }
    return null;
}
```
测试
```js
let value = findValueById(data, 'id', 4)
console.log(value)
```
输出
```bash
{
    "id": 4,
    "name": "xiaolan",
    "arr": []
}
```
