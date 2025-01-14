---
title: Vue2与Vue3数据绑定原理解析
createTime: 2025/01/12 19:52:10
permalink: /Vue3/opgzetgn/
---

# Vue2与Vue3数据绑定原理解析


## 总体流程

1. **数据劫持**：
   - **Vue 2**：使用 `Object.defineProperty()` 对数据对象的属性进行劫持，定义 `getter` 和 `setter` 方法，以便在数据访问和修改时进行拦截。
   - **Vue 3**：使用 `Proxy` API 代理整个数据对象，能够直接监听对象的所有操作（如读取、写入、删除等），提供更高效的响应式处理。

2. **依赖收集**：
   - 在 `getter` 方法中，当前的 `watcher` 被添加到该属性的依赖列表中。包括在模板渲染时，`render` 函数会访问数据属性，触发 `getter`，从而将当前的 `watcher` 添加到依赖列表中。还包括在用户手动调用 `watch` 方法、计算属性依赖等。
   - **Dep**：依赖管理器，负责管理和存储所有依赖于某个数据属性的 `watcher`。
   - **Watcher**：观察者，负责观察数据变化并更新视图。
   - **Dep.target**：全局变量，用于存储当前活跃的 `watcher`，确保在依赖收集时能够正确添加。

3. **通知更新**：
   - 在 `setter` 方法中，当数据发生变化时，调用 `dep.notify()`，通知所有依赖于该数据的 `watcher` 进行更新。

4. **视图更新**：
   - 在 `watcher` 中，调用 `watcher.update()` 方法，触发视图的重新渲染，以反映最新的数据状态。



最后，当视图中通过 `v-model` 绑定的数据发生变化时，会触发 `input` 事件，从而触发 `setter` 方法，更新数据。同时，由于数据发生了变化，会触发 `dep.notify()`，通知所有依赖于该数据的 `watcher` 进行更新。最终，`watcher` 会调用 `watcher.update()` 方法，触发视图的重新渲染，以反映最新的数据状态。


## 发布/订阅模式

在 Vue 中，发布/订阅模式用于实现数据绑定和视图更新。具体来说，当数据发生变化时，会触发 `setter` 方法，从而通知所有订阅了该数据的 `watcher` 进行更新。同时，当视图中的数据发生变化时，会触发 `input` 事件更改绑定数据，从而触发 `setter` 方法，更新数据。


## 数据劫持


Vue2 通过 `Object.defineProperty()` 对数据进行劫持，通过 `getter/setter` 方法对数据进行读写。当数据发生变化时，会触发 `setter` 方法，从而通知订阅者进行更新。

```js
function defineReactive(obj, key, val) {
  // 递归遍历，对每个属性进行劫持
  observe(val) // 如果 val 是对象，则递归遍历
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      // 通知订阅者更新
      dep.notify()
    }
  })
}

function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}
```


Vue3 通过 `Proxy` 对数据进行劫持，通过 `get/set` 方法对数据进行读写。当数据发生变化时，会触发 `set` 方法，从而通知订阅者进行更新。

```js
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      // 通知订阅者更新
      dep.notify()
      return true
    }
  })
}
```

## 依赖收集



在 `getter` 方法中，将当前 `watcher` 添加到依赖列表中。当数据发生变化时，会触发 `setter` 方法，从而通知所有依赖进行更新。

```js
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

class Watcher {
  constructor() {
    // 在 getter 中添加依赖 
    Dep.target = this
  }
  update() {
    // 触发视图更新
  }
}

function defineReactive(obj, key, val) {
  observe(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 添加依赖
      Dep.target && dep.addSub(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}

function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

Dep.target = null

class Vue {
  constructor(options) {
    this.data = options.data
    observe(this.data)
    new Watcher()
    // 触发 getter，添加依赖
    this.data.message
  }
}
```
