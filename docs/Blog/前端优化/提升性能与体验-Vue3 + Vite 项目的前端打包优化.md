---
title: 提升性能与体验 - Vue3 + Vite 项目的前端打包优化
createTime: 2024/11/17 21:45:25
permalink: /article/x1694x0p/
tags:
  - 前端优化
---

# 提升性能与体验 - Vue3 + Vite 项目的前端打包优化

## 前言

最近在使用 Vue3 + Vite 开发一个 JSON相关工具（[https://yuwb.cn/format](https://yuwb.cn/format)）。打包时，发现出现了如下的警告：

```shell
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks     
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
```

出于对错误和警告的敏感性（😂自己的工具项目很小，基本没有影响，主要是看着不舒服），决定重新对项目做一个较完整的打包优化。并且记为笔记，方便以后查阅。

## 优化方案

由上面的报错，可以看出警告的原因是：有部分文件打包后超过了500KB。

查看自己打包后的文件：

```bash
vite v5.4.10 building for production...
✓ 240 modules transformed.
dist/index.html                     0.44 kB │ gzip:   0.29 kB
dist/assets/logo-D_JWlVLN.png     917.80 kB
dist/assets/index-CdFT480_.css      6.97 kB │ gzip:   2.21 kB
dist/assets/index-CbQNVBDg.js   1,022.78 kB │ gzip: 345.26 kB
```

一共四个文件，其中 `index-CbQNVBDg.js` 文件打包后达到了1.02MB，超过了500KB。这个文件是我们项目的入口文件，里面包含了我们项目所有的代码。我们要做的就是将这个文件拆分成多个文件，从而减小单个文件的大小。

### 动态导入

首先想到的是路由懒加载，将路由组件改为动态导入，这样在访问到对应的路由时，才会加载对应的组件。

```js
//import JsonPage from '../views/json.vue';

const JsonPage = () => import('../views/json.vue');
```
如上我们将`JsonPage`组件改为动态导入，再进行打包测试，此时打包文件如下：
```bash
vite v5.4.10 building for production...
✓ 241 modules transformed.
dist/index.html                   0.44 kB │ gzip:   0.29 kB
dist/assets/logo-D_JWlVLN.png   917.80 kB
dist/assets/json-BnSNZf39.css     2.71 kB │ gzip:   0.91 kB
dist/assets/index-yQ4U43xU.css    4.27 kB │ gzip:   1.54 kB
dist/assets/index-CUIELcaR.js    93.36 kB │ gzip:  37.41 kB
dist/assets/json-Dgw29lkB.js    930.57 kB │ gzip: 309.07 kB
```
可以看到新增了`json-Dgw29lkB.js` 和 `json-BnSNZf39.css` 两个文件。即为我们的 `JsonPage` 组件对应的 js 和 css 文件。

此时，入口文件 `index-CUIELcaR.js` 的大小已经减小到了93.36KB，但是`json-Dgw29lkB.js` 文件的大小依然很大，达到了930.57KB。



### 打包配置
按理说，普通的 `json` 组件页面应该不至于这么大。可能是引入了什么比较大的插件。 我们可以通过 `vite.config.js` 文件中的 `build.rollupOptions` 配置项，手动分包。把 `node_modules` 中每个使用的插件单独打一个包。

```js
// vite.config.js
export default {
  build: {
    // chunkSizeWarningLimit: 1000, // 打包文件大小限制
    rollupOptions: { // 打包配置
      output: { // 
        manualChunks(id) { // 手动分包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // 根据node_modules中的包名进行分包
          }
        }
      }
    }
  },
};
```
如上，我们通过 `manualChunks` 配置项，将 `node_modules` 中的每个插件单独打一个包。并且还可以通过 `chunkSizeWarningLimit` 配置项，设置打包文件大小限制。

再次进行打包测试，此时打包文件如下：

```bash
vite v5.4.10 building for production...
✓ 241 modules transformed.
Generated an empty chunk: "vue".
dist/index.html                         0.68 kB │ gzip:   0.35 kB
dist/assets/logo-D_JWlVLN.png         917.80 kB
dist/assets/highlight-ZgkIHsf0.css      0.86 kB │ gzip:   0.40 kB
dist/assets/json-D8-RqcUX.css           1.85 kB │ gzip:   0.58 kB
dist/assets/index-yQ4U43xU.css          4.27 kB │ gzip:   1.54 kB
dist/assets/vue-l0sNRNKZ.js             0.00 kB │ gzip:   0.02 kB
dist/assets/json-BE2dcUX6.js            2.87 kB │ gzip:   1.33 kB
dist/assets/pinia-CztZ4e3u.js           3.83 kB │ gzip:   1.98 kB
dist/assets/index-BoH48CMH.js           4.53 kB │ gzip:   2.45 kB
dist/assets/vue-router-B3f2eECl.js     23.27 kB │ gzip:   9.55 kB
dist/assets/@vue-K0HuSkQ-.js           62.19 kB │ gzip:  24.78 kB
dist/assets/highlight.js-DldXfhuE.js  927.77 kB │ gzip: 307.91 kB
```
如上，我们可以看到，`node_modules` 中的每个插件都单独打了一个包。其中 `highlight.js-DldXfhuE.js` 文件的大小达到了 927.77KB，这个文件是我们项目中使用的 `highlight.js` 插件对应的文件。这个文件的大小已经超过了 500KB。


### 按需引入

由于 `highlight.js` 插件比较大，我们只用到 JSON 功能，可以通过按需引入的方式，减小打包文件的大小。

```js
// import hljs from 'highlight.js'; // 引入整个插件

import hljs from 'highlight.js/lib/core'; // 引入核心模块
import json from 'highlight.js/lib/languages/json'; // 引入json模块
hljs.registerLanguage('json', json); // 注册json模块
import 'highlight.js/styles/atom-one-dark.css'; // 可以选择其他样式
```

修改代码按照需要只引入了 json 相关内容。再次进行打包测试，此时打包文件如下：


```bash
vite v5.4.10 building for production...
✓ 48 modules transformed.
Generated an empty chunk: "vue".
dist/index.html                         0.68 kB │ gzip:  0.35 kB
dist/assets/logo-D_JWlVLN.png         917.80 kB
dist/assets/highlight-ZgkIHsf0.css      0.86 kB │ gzip:  0.40 kB
dist/assets/json-D3ERnQu7.css           1.85 kB │ gzip:  0.58 kB
dist/assets/index-yQ4U43xU.css          4.27 kB │ gzip:  1.54 kB
dist/assets/vue-l0sNRNKZ.js             0.00 kB │ gzip:  0.02 kB
dist/assets/json-CK9LtWJc.js            2.90 kB │ gzip:  1.35 kB
dist/assets/pinia-CztZ4e3u.js           3.83 kB │ gzip:  1.98 kB
dist/assets/index-D2kqANu_.js           4.53 kB │ gzip:  2.45 kB
dist/assets/highlight.js-fZTj5k6M.js   21.28 kB │ gzip:  8.57 kB
dist/assets/vue-router-B3f2eECl.js     23.27 kB │ gzip:  9.55 kB
dist/assets/@vue-K0HuSkQ-.js           62.19 kB │ gzip: 24.78 kB
```
如上，我们可以看到，`highlight.js-DldXfhuE.js` 文件的大小已经减小到了 21.28KB。并且其他文件也不会很大。并且无警告无报错，问题搞定。


## 总结

以上优化，主要是通过 动态导入组件，手动分割node_modules中的插件，按需引入插件等方式，减小打包文件的大小。

如果您有其他更好的优化方式，欢迎联系讨论。