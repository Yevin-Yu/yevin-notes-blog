import{_ as i,c as a,a as n,o as l}from"./app-BdHnRT_g.js";const e="/yevin-notes-blog/assets/image-9-CbE8ZdL5.png",t="/yevin-notes-blog/assets/image-10-CA-nP1Md.png",h="/yevin-notes-blog/assets/image-11-BbRw6DJ_.png",p={};function k(d,s){return l(),a("div",null,s[0]||(s[0]=[n('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Vite+Vue3项目创建 两种方式：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vite@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   //vite工具</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vue@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  //vue本身</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="vite简介" tabindex="-1"><a class="header-anchor" href="#vite简介"><span>Vite简介</span></a></h2><p>vite是新一代前端开发与构建工具，能够显著提升前端开发体验。</p><ul><li><p>Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。</p><ul><li><p>依赖： 大多为在开发时不会变动的纯 JavaScript。一些较大的依赖（例如有上百个模块的组件库）处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。 Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。</p></li><li><p>源码： 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）</p></li></ul></li><li><p>Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。</p></li></ul><p><img src="'+e+'" alt="alt text"></p><p><img src="'+t+`" alt="alt text"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>vite创建Vue3项目需要Node.js版本10以上</p></div><h2 id="vite创建vue3" tabindex="-1"><a class="header-anchor" href="#vite创建vue3"><span>Vite创建Vue3</span></a></h2><p>创建命令</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vite@latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>后续步骤</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vite@latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Need</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> following</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> packages:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  create-vite@5.2.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Ok</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> proceed?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (y) y</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vite-project</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Select</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> framework:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ›</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Vue</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Select</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> variant:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ›</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> JavaScript</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Scaffolding</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /Applications/前端学习/vite-project...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Done.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Now</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vite-project</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目</p><p>进入项目文件，打开终端，</p><ul><li><code>npm install</code>：下载依赖包</li><li><code>npm run dev</code>：启动项目</li></ul><p><img src="`+h+`" alt="alt text"></p><h2 id="vue创建vue3" tabindex="-1"><a class="header-anchor" href="#vue创建vue3"><span>Vue创建Vue3</span></a></h2><p>根据提示步骤进行创建</p><p>创建命令</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vue@latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>后续步骤</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Need</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> following</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> packages:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  create-vue@3.10.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Ok</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> proceed?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (y) y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Vue.js</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> The</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Progressive</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> JavaScript</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Framework</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 请输入项目名称：</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vue3_hello</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否使用</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TypeScript</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 语法？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否启用</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> JSX</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 支持？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否引入</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Vue</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Router</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 进行单页面应用开发？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否引入</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pinia</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 用于状态管理？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否引入</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Vitest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 用于单元测试？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否要引入一款端到端（End</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> End）测试工具？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ›</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 不需要</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否引入</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ESLint</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 用于代码质量检测？</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 否</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 是否引入</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Vue</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> DevTools</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 7</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 扩展用于调试?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (试验阶段) … 否 / 是</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">正在初始化项目</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /Applications/前端开发/前端学习/vue3_hello...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">项目初始化完成，可执行以下命令：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vue3_hello</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上图所示，根据需求选择对应的选项创建项目。</p>`,26)]))}const c=i(p,[["render",k],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/Vue3/gsq2pijn/","title":"Vite&Vue3项目创建","lang":"zh-CN","frontmatter":{"title":"Vite&Vue3项目创建","author":"耶温","createTime":"2024/06/07 21:35:05","permalink":"/Vue3/gsq2pijn/"},"headers":[],"readingTime":{"minutes":2.4,"words":721},"git":{"updatedTime":1733297947000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/Vue3/Vite&Vue3项目创建.md","bulletin":false}');export{c as comp,g as data};
