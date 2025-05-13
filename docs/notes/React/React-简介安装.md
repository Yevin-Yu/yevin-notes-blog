---
title: React-简介安装
createTime: 2025/01/07 13:51:15
permalink: /React/jpzwki32/
---

# React-简介安装

## React简介

> [React- 中文网](https://zh-hans.react.dev/learn)

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发和维护。它主要用于构建单页应用程序（SPA）和移动应用程序。React 的核心思想是组件化，通过将 UI 分解为可重用的组件，可以更方便地管理和维护代码。


React 的主要特点包括：声明式编程、虚拟 DOM、组件化、单向数据流等。它使用 JSX 语法来描述 UI，并通过虚拟 DOM 来提高性能。


**优点**

-  组件化开发，代码可复用，同时拥有不错的性能
-  虚拟 DOM，提高性能

-  跨平台，支持 Web、移动端（开发真正的移动端原生应用）、桌面端。丰富的生态系统，有大量的第三方库和工具可以使用


## 环境搭建


### Node.js
> [Node.js 官网](https://nodejs.org/zh-cn/)

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它允许开发者使用 JavaScript 编写服务器端代码。React 开发需要 Node.js 环境，因此需要先安装 Node.js。


### create-react-app

> [create-react-app 官网](https://create-react-app.dev/)

create-react-app 是一个官方提供的 React 项目脚手架工具，它可以帮助开发者快速搭建 React 项目，并提供了一系列的配置和优化，使得开发者可以专注于业务逻辑的开发。

```bash
npx create-react-app my-app
cd my-app
npm start
```

`npx`：一个 npm 包运行器，可以用来运行本地安装的 npm 包，也可以用来运行远程的 npm 包。


::: tip 安装报错问题修复

在 `package.json` 中 `dependencies` 中添加 `"web-vitals": "^2.1.4"` 然后重新安装依赖。
:::


### 其他创建方式

> https://zh-hans.react.dev/learn/start-a-new-react-project

以下为一些生产及的 React 框架：

- Next.js：一个用于构建 React 应用的框架，它提供了许多高级功能，如服务器端渲染、静态站点生成等。
- Remix：一个用于构建 React 应用的框架，它提供了许多高级功能，如数据获取、路由等。
- Gatsby：一个用于构建 React 应用的静态站点生成器，它提供了许多高级功能，如内容管理、SEO 等。
- Expo：一个用于构建 React 应用的框架，它提供了许多高级功能，如路由、状态管理等。



## JSX

JSX（JavaScript 和 XML） 是一种 JavaScript 的语法扩展，它允许开发者使用类似 HTML 的语法来描述 UI。React 使用 JSX 来描述 UI，并将其编译为 JavaScript 代码。

需要注意的是 JSX 不是浏览器原生支持的语法，因此需要使用工具（如 Babel）将其转换为标准的 JavaScript 代码。

以下是一个简单的 JSX 示例：
```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
```