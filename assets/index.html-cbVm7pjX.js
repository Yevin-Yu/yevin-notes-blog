import{_ as i,c as a,f as e,o as t}from"./app-SttqiV5p.js";const l={};function n(p,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><blockquote><p>TypeScript 是一种由微软开发的开源静态类型检查的编程语言，它构建在 JavaScript 之上，并且完全符合 ECMAScript 6 标准。TypeScript 添加了可选的类型注解和接口定义，使得开发者可以在编写代码时就发现类型错误，从而提高代码质量和可维护性。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>所有的 TypeScript 的代码，最终都会转成 JavaScript 运行。</p></li><li><p>TypeScript 最大的功能就给是 JavaScript 添加了一些强制类型，可以让我们在编写代码时更加安全。</p></li><li><p>TypeScript 转成 JavaScript 的过程，会将类型去掉。</p></li><li><p>实际上所有的功能都是 JavaScript 引擎实现的。</p></li></ol></div><p>也就是说，TypeScript 没有单独的运行环境，只是提供编译器把 TypeScript 编译为 JavaScript 。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>什么是类型？类型是人为添加的一种编程约束和用法提示。</p></div><p><em><strong>动态类型和静态类型</strong></em></p><ul><li><p>JavaScript 的类型系统非常弱，而且没有使用限制，运算符可以接受各种类型的值。在语法上，JavaScript 属于动态类型语言。</p></li><li><p>TypeScript 引入了一个更强大、更严格的类型系统，属于静态类型语言。</p></li></ul><hr><p><em><strong>TypeScript 优缺点</strong></em></p><p><em><strong>优点</strong></em></p><ol><li>类型安全： <ul><li>TypeScript 提供了静态类型检查功能，这有助于在编码阶段捕获错误，而不是在运行时才发现问题。</li><li>支持多种数据类型，如字符串、数字、布尔值、数组、元组等，并支持类、接口、枚举等高级类型。</li></ul></li><li>面向对象： <ul><li>TypeScript 支持面向对象编程（OOP）特性，包括类、接口、继承、泛型等。</li></ul></li><li>工具支持： <ul><li>与 Visual Studio Code 和其他现代 IDE 集成良好，提供了强大的代码提示、重构、跳转到定义等功能。</li><li>有丰富的第三方类型定义库，如 DefinitelyTyped，可以为流行的库和框架提供类型定义。</li></ul></li><li>兼容性： <ul><li>TypeScript 编译后的代码是纯 JavaScript，可以在任何支持 JavaScript 的环境中运行。</li><li>向后兼容 JavaScript，可以逐步迁移到 TypeScript 而不必重写现有代码。</li></ul></li><li>模块化： <ul><li>支持 ES6 模块语法，使得代码组织更加模块化，易于管理大型项目。</li></ul></li><li>社区和生态系统： <ul><li>拥有一个活跃的社区，不断更新和完善。</li><li>与 Angular 等主流前端框架紧密集成。</li></ul></li></ol><p><em><strong>缺点</strong></em></p><p>学习成本；额外编译步骤；类型声明文件；增加编程工作量；灵活性受限；兼容性问题。</p><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><h3 id="编译运行" tabindex="-1"><a class="header-anchor" href="#编译运行"><span>编译运行</span></a></h3><ol><li><p>安装Node.js</p><blockquote><p><a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">Node.js官网</a></p></blockquote></li><li><p>安装<code>typeScript</code></p></li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> typescript</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>编写<code>ts</code>代码，新建一个<code>demo.ts</code>文件</li></ol><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">iyuwb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>编译<code>ts</code>文件</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tsc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> demo.ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>运行<code>js</code>文件。上一步编译完成之后，会在当前文件夹下生成一个<code>demo.js</code>文件，运行即可。</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">node</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> demo.js</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">输出：iyuwb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接运行" tabindex="-1"><a class="header-anchor" href="#直接运行"><span>直接运行</span></a></h3><p>还有另一种方法，不用安装<code>typeScript</code> ，直接运行<code>ts</code>文件。</p><ol><li>全局安装<code>ts-node</code></li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ts-node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>运行<code>ts</code>文件</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ts-node</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> demo.ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="进阶配置" tabindex="-1"><a class="header-anchor" href="#进阶配置"><span>进阶配置</span></a></h2><p>使用上面基础配置方法，我们每次改变 ts 文件，都需要重新运行命令，很不友好，下面介绍一个 ts 文件改变之后实时更新的方式。需要先装好 Node.js 和 Typescript 。</p><ol><li>创建项目</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TypeScriptCode</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TypeScriptCode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>初始化项目，自动生成<code>tsconfig.json</code>配置文件</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tsc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>配置<code>tsconfig.json</code></li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">compilerOptions</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">target</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">es6</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 设置目标 JavaScript 版本为 ES6。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">commonjs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 设置模块系统为 CommonJS。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">outDir</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./dist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     // 指定编译后的 JavaScript 文件存放位置。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">strict</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         // 开启严格的类型检查。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">esModuleInterop</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //  使导入其他模块更加方便。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">include</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./src/**/*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 定义要包含的文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行项目</li></ol><p>使用<code>tsc --watch</code> 持续监听，监听文件改变，实时更新，会在dist文件夹生成相关js文件，实时更新。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tsc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --watch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> //</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 持续监听，监听文件改变，实时更新</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>下载nodemon 安装<code>nodemon</code> ，用于监听文件改变，实时更新。</li></ol><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nodemon</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li>运行生成的 js 文件</li></ol><p>使用<code>nodemon</code> 运行生成的 js 文件，当文件改变，会自动重新运行生成的 js 文件。不再需要我们手动运行生成的js文件。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nodemon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  dist/index.js</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --watch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式"><span>其他方式</span></a></h2><p>也可以通过命令持续监听ts输出到固定的文件。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tsc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --watch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> //</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 持续监听，监听文件改变，实时更新</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在开发的项目中引入生成的 js。开启所需服务即可。 比如 VS code中的 <code>Live Server</code> 插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们在日常工作开发中，一般都会使用框架来搭建项目。很多框架使用TypeScript，一般都会需要专门配置。我们按照要求配置即可。</p><p>比如：Vue3 + TypeScript + Vite 或者 React + TypeScript + Vite</p></div>`,50)]))}const d=i(l,[["render",n],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/TypeScript/xgndo7cj/","title":"TypeScript-简介安装","lang":"zh-CN","frontmatter":{"title":"TypeScript-简介安装","author":"耶温","createTime":"2024/05/11 16:03:17","permalink":"/TypeScript/xgndo7cj/"},"headers":[],"readingTime":{"minutes":4.29,"words":1288},"git":{"updatedTime":1733297947000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/TypeScript/TypeScript-简介安装.md","bulletin":false}');export{d as comp,r as data};