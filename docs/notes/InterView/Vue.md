---
title: 面试记录 - Vue部分
createTime: 2025/01/13 09:37:32
permalink: /InterView/856379u8/
---

# 面试记录 - Vue部分
## 单页面应用（SPA）

单页面应用（Single Page Application，SPA）是一种 web 应用程序或网站的设计方式，它通过动态加载内容而不是重新加载整个页面来提供更流畅的用户体验。在 SPA 中，用户与应用程序的交互通常不会导致页面的完全刷新，而是通过 JavaScript 动态更新页面的内容。


**主要特点：**


- 动态内容加载：SPA 通过 AJAX 或 Fetch API 从服务器获取数据，并在客户端动态更新页面内容。
- 路由管理：使用 JavaScript 路由库（如 React Router、Vue Router 等）来管理不同的视图和 URL。
- 客户端渲染：大部分的渲染工作在客户端完成，服务器通常只提供 API 接口。

**优点：**


- 用户体验：由于页面不需要完全刷新，用户体验更加流畅，交互更快。
- 性能：减少了服务器的负担，因为只需加载必要的数据，而不是整个页面。
- 前后端分离：前端和后端可以独立开发，前端可以专注于用户界面和交互，后端可以专注于数据处理和业务逻辑。
- 状态管理：SPA 通常使用状态管理库（如 Redux、Vuex 等）来管理应用状态，使得状态管理更加集中和可维护。
- 缓存：SPA 可以利用浏览器的缓存机制，提高应用的加载速度。

**缺点：**

- SEO问题：由于 SPA 主要依赖于 JavaScript 来渲染页面内容，搜索引擎爬虫可能无法正确抓取和索引页面内容，导致搜索引擎优化（SEO）问题。
- 初始加载时间：SPA 的初始加载时间可能较长，因为需要加载 JavaScript 文件和初始数据。
- 浏览器历史记录：SPA 的浏览器历史记录管理可能比较复杂，需要使用路由库来处理浏览器的前进、后退等操作。
- 兼容性问题：虽然现代浏览器对 SPA 的支持越来越好，但在一些老旧的浏览器中可能存在兼容性问题。
- JavaScript依赖：SPA 依赖于 JavaScript，如果用户禁用了 JavaScript，那么 SPA 将无法正常工作。

**解决方案：**

- SEO优化：可以使用服务端渲染（SSR）或预渲染（Prerendering）等技术来提高 SEO。比如，使用 Nuxt.js 或 Next.js 等框架来实现服务端渲染。
- 优化初始加载时间：可以通过代码分割、懒加载等技术来减少初始加载时间。
- 使用路由库：使用 Vue Router 或 React Router 等路由库来管理 SPA 的路由和浏览器历史记录。
- 兼容性处理：可以通过 polyfill 或降级方案来处理老旧浏览器的兼容性问题。
- 提供静态版本：为不支持 JavaScript 的用户提供静态版本的应用，或者提供一种切换到静态版本的方式。

## Vue 双向绑定原理

Vue2： 数据劫持 + 发布订阅模式

Vue3： Proxy + 发布订阅模式


- 定义: 数据变化视图会自动更新，视图变化数据也会更新
- 原理: 数据劫持 + 发布订阅者模式
- 实现：采用 `Object.defineProperty()` 对数据进行劫持来监听数据变化，并通过 `getter/setter` 方法对数据进行读写。其次 vu e通过发布订阅者模式，维护了一个订阅者数组，当数据发生改变时，vue 会通知所有订阅者进行更新，因此当用户在页面上进行修改时。Vue会更新对应的数据，并通知所有订阅者更新视图，同时当数据发生变化时，Vue 也会更新对应视图，通过这样的机制，Vue实现了双向绑定。
  
- 订阅者是一个概念，它是用于管理更新视图的对象，当数据发生变化时，Vue 会通知所有的订阅者进行更新。每一个挂载到视图上的组件或者每一个 watcher 都可以被看作是一个订阅者，他们订阅了某一个数据的变化，并等待数据发生变化时进行更新，订阅者是 Vue 实现双向数据绑定的关键组成部分。
  
[Vue2与Vue3数据绑定原理解析](/Vue3/opgzetgn/)

## Vue 生命周期函数

Vue2 
- `beforeCreate`： 实例初始化之后，数据观测和事件配置之前被调用。不怎么使用，拿不到 data 中数据。
- `created`：  实例创建完成后被调用，此时数据观测已完成，属性和方法可以访问，但 DOM 还未生成。可以拿到 data 中数据。一般用来获取数据、发送请求、初始化数据。
- `beforeMounte：` 在挂载开始之前被调用，相关的 render 函数首次被调用。
- `mounted`：  实例被挂载后调用，此时可以访问到 DOM。可以用来初始化加载地图、图表等插件。     
- `beforeUpdate`：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- `updated`： 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。
- `beforeDestory`： 实例销毁之前调用，此时实例仍然完全可用。可以用来清楚定时器或者监听事件等。
- `destoryed`： 实例销毁后调用，所有的事件监听器和子实例都被移除。

Vue3 

- `setup` 相当于 `beforeCreate` 和 `created` 可以用来定义数据方法 和 获取数据。
- `onMounted` 和 `onBeforeMount` 与Vue2一致。
- `onBeforeUpdate` 和 `onUpdated` 和 Vue2 一致。
- `onBeforeUnmount` 和 `onUnmounted` 相当于 Vue2 的 `beforeDestory` 和 `destoryed` 。


## Vue 组件通信

- 父子组件通信
  - 父传子： props 
  - 子传父： $emit      
- 兄弟组件通信
  - eventBus
  - Vuex
  - Pinia
- 跨级组件通信
  - provide / inject
  - $attrs 和 $listeners
  - eventBus
  - Vuex
  - Pinia
- 非父子组件通信
  - eventBus
  - Vuex
  - Pinia

```js
// eventBus
export const EventBus = new Vue()
 
import { EventBus } from './event-bus'; // 引入 eventBus
EventBus.$emit('eventName', 'data') //  触发事件
EventBus.$on('eventName', this.handleEvent) // 监听事件
```
>  Vue3 可以使用 mitt 库，代替 eventBus

## Vue2 和 Vue3 的区别

**性能提升**：
  - Vue 3 在虚拟 DOM 的实现上进行了优化，提升了渲染性能，尤其是在大型应用中表现更为明显。
  - 更小的包体积，Vue 3 的核心库体积比 Vue 2 更小。
  
**Composition API**：
  - 引入了 Composition API，使得逻辑复用更加灵活，能够更好地组织和复用代码。
  - 通过 setup 函数，可以更清晰地管理组件的状态和生命周期。

**更好的 TypeScript 支持**：
  - Vue 3 从设计上就考虑了 TypeScript 的支持，提供了更好的类型推导和类型检查，提升了开发体验。

**Fragment、Teleport 和 Suspense**：
  - Vue 3 引入了 Fragment、Teleport 和 Suspense 等新特性，提供了更多的灵活性，使得组件的渲染更加灵活和高效。
  - Fragment 允许组件返回多个根节点
  - Teleport 允许组件将内容渲染到 DOM 的其他位置
  - Suspense 允许组件在异步数据加载时显示加载状态。

**更好的响应式**：
  - Vue 3 的响应式系统进行了重写，使用 Proxy 代替了 Vue 2 中的 Object.defineProperty，提供了更好的性能和更灵活的 API。

## Vue 中 组件再封装

注意点：
- 创建一个新的 Vue 组件，并在其中引入需要封装的 Element UI 组件
- 兼容原有组件的属性和方法。使用 `$attr` 和 `$listeners` 来获取和传递属性和方法。
- 兼容原有组件的插槽。有具名插槽时需要单独处理。
- 添加新的属性和方法，以满足项目的需求。

[以 Element 与 Vue 为例-基于原有组件的再封装 ](/article/zp2a6dtv/)


