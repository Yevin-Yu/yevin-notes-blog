---
title: React-简介安装
createTime: 2025/01/07 13:51:15
permalink: /React/jpzwki32/
---

# React-简介安装

## React 简介

> [React- 中文网](https://zh-hans.react.dev/learn)

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发和维护。它主要用于构建单页应用程序（SPA）和移动应用程序。React 的核心思想是组件化，通过将 UI 分解为可重用的组件，可以更方便地管理和维护代码。

React 的主要特点包括：声明式编程、虚拟 DOM、组件化、单向数据流等。它使用 JSX 语法来描述 UI，并通过虚拟 DOM 来提高性能。

**优点**

- 组件化开发，代码可复用，同时拥有不错的性能
- 虚拟 DOM，提高性能

- 跨平台，支持 Web、移动端（开发真正的移动端原生应用）、桌面端。丰富的生态系统，有大量的第三方库和工具可以使用

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

## 项目目录

React 项目目录

```txt
|--react_hello                        // React 项目总文件夹
    | --node_modules                  // 依赖包文件夹
    | --public                        // 静态资源文件夹，可以放 logo、图片等资源
    | --src                           // 主体文件夹，源代码文件
        | --App.css                   // 项目样式文件
        | --App.js                    // 项目主 JS 文件，类似于 Vue 中的 App.vue
        | --App.test.js               // 项目测试文件
        | --index.css                 // 项目样式文件
        | --index.js                  // 项目主 JS 文件，类似于 Vue 中的 main.js
        | --logo.svg                  // 项目 logo 图标
        | --reportWebVitals.js        // 性能分析文件
        | --setupTests.js             // 项目测试文件
    | --.gitignore                    // Git 忽略文件配置
    | --package-lock.json             // 依赖包锁定文件
    | --package.json                  // 依赖包声明文件
    | --README.md                     // README 项目说明和工程介绍
```

显示隐藏文件

```base
npm run eject
```

当前项目目录


```txt
|--react_hello                        // React 项目总文件夹
    | --config                        // 项目配置文件夹
        | --jest                      // jest 配置文件
            | --babelTransform.js     // babel 转换配置文件
            | --cssTransform.js       // css 转换配置文件
            | --fileTransform.js      // 文件转换配置文件
        | --webpack                   // webpack 配置文件
            | --persistentCache       // 缓存文件夹
                | --createCacheDirectory.js  // 创建缓存文件夹
        | --env.js                    // 环境变量配置文件
        | --getHttpsConfig.js         // 获取 HTTPS 配置文件
        | --module.js                 // 模块配置文件
        | --paths.js                  // 路径配置文件
        | --webpack.config.js         // webpack 配置文件
        | --webpackDevServer.config.js// webpack 开发服务器配置文件
    | --node_modules                  // 依赖包文件夹
    | --public                        // 静态资源文件夹，可以放 logo、图片等资源
    | --scripts                      // 脚本文件夹
        | --build.js                 // 构建脚本文件
        | --start.js                 // 启动脚本文件
        | --test.js                  // 测试脚本文件
    | --src                           // 主体文件夹，源代码文件
        | --App.css                   // 项目样式文件
        | --App.js                    // 项目主 JS 文件，类似于 Vue 中的 App.vue
        | --App.test.js               // 项目测试文件
        | --index.css                 // 项目样式文件
        | --index.js                  // 项目主 JS 文件，类似于 Vue 中的 main.js
        | --logo.svg                  // 项目 logo 图标
        | --reportWebVitals.js        // 性能分析文件
        | --setupTests.js             // 项目测试文件
    | --.gitignore                    // Git 忽略文件配置
    | --package-lock.json             // 依赖包锁定文件
    | --package.json                  // 依赖包声明文件
    | --README.md                     // README 项目说明和工程介绍
```



1. config/ 目录：

    包含 Webpack、Babel 和 ESLint 的配置文件。
    这些文件允许你自定义构建过程和开发环境。

2. scripts/ 目录：

    包含用于启动、构建和测试的脚本。
    你可以根据需要修改这些脚本。

