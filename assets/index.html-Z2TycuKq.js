import{_ as i}from"./image-05-O-sMm7Qo.js";import{_ as a,c as n,f as e,o as l}from"./app-SttqiV5p.js";const t={};function h(k,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h2 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型"><span>any类型</span></a></h2><p><code>any</code> 类型是一种特殊的类型，表示任何类型的值。它允许你在编写代码时忽略类型检查，从而提高代码的灵活性和可维护性。</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">anyVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以赋值为任意类型的值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">anyVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello, TypeScript!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以重新赋值为不同类型的值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">anyVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以重新赋值为布尔值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，不再迫不得已的时候，尽可能不使用 <code>any</code> 类型。使用过多的 <code>any</code> 类型，会使 TypeScript 变得更加难以理解和维护。我们使用 TypeScript ，主要就是使用类型系统来帮助我们避免类型错误，从而提高代码的可靠性和可维护性。如果使用很多 <code>any</code> 去掉了类型检查，还不如直接不用 TypeScript 。</p><p>一些使用 <code>any</code> 的场景：</p><ul><li>迫不得己，需要关闭变量类型检查。</li><li>适配老 Javascript 项目代码，或者老的 Javascript 插件。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 TypeScript 中，如果推断不出来具体的类型，也会默认该变量的类型为 <code>any</code>。</p></div><h3 id="类型污染" tabindex="-1"><a class="header-anchor" href="#类型污染"><span>类型污染</span></a></h3><p>在使用 <code>any</code> 类型的变量时，有一点特别需要注意的是，它会污染其他特定类型的变量，使其失去特定的类型。并且还不会提醒报错。如下图： <img src="`+i+`" style="width:80%;margin:0 10%;"></p><p>我们把 <code>any</code> 类型的 <code>str</code> 赋值给 <code>num</code>，并没有报错。此时我们打印 <code>num</code> 。输出为 字符串<code>Hello，World！</code> 。可见此时的 <code>num</code> 变量已经变成了字符串类型。但是在下面接着调用数字的 <code>toFixed</code> 方法时。也没有相关错误提示。</p><p>但是如果我们运行这段代码，就会报错。如下：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Hello,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> World!</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">num.toFixed(2</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    ^</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">TypeError:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> num.toFixed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> not</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unknown类型" tabindex="-1"><a class="header-anchor" href="#unknown类型"><span>unknown类型</span></a></h2><p>为了 解决类型污染的问题，TypeScript 引入了 <code>unknown</code> 类型。它和 <code>any</code> 一样表示任何类型的值，但是在使用前需要进行显式断言。直接将 <code>unknown</code> 类型赋值给其他类型变量时，会报错。</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以赋值为任意类型的值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello, TypeScript!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以重新赋值为不同类型的值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 可以重新赋值为布尔值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 报错</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 不能将类型“unknown”分配给类型“number”。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 正确 显式断言</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> unknownVar</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> as</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// or</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// let str: string = &lt;string&gt;unknownVar;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次， <code>unknown</code> 类型的变量， 不能直接调用其方法和属性。</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toFixed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 报错   “unknownVar”的类型为“未知”。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yuwb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 报错   “obj”的类型为“未知”</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一点需要注意，<code>unknown</code> 类型的变量只能够进行运算符 <code>==</code>、<code>===</code>、<code>!=</code>、<code>!==</code>、<code>||</code>、<code>&amp;&amp;</code>、<code>?</code>、取反运算（运算符 <code>!</code> ）、<code>typeof</code> 运算符和 <code>instanceof</code> 等运算，其他运算都会报错。</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 报错   “unknownVar”的类型为“未知”。</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ++</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 报错   “unknownVar”的类型为“未知”。</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unknownVar</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 正确</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型缩小" tabindex="-1"><a class="header-anchor" href="#类型缩小"><span>类型缩小</span></a></h3><p>在使用 <code>unknown</code> 类型的变量时，我们可以使用类型缩小来限制其类型。让其可以进行方法属性获取和各种运算符等。</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">number</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> + </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 正确</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">string</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 正确</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)]))}const r=a(t,[["render",h],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/TypeScript/h08p33yc/","title":"TypeScript-any与unknown","lang":"zh-CN","frontmatter":{"title":"TypeScript-any与unknown","author":"耶温","createTime":"2024/08/07 09:29:15","permalink":"/TypeScript/h08p33yc/"},"headers":[],"readingTime":{"minutes":2.76,"words":827},"git":{"updatedTime":1733297947000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/TypeScript/TypeScript-any与unknown.md","bulletin":false}');export{r as comp,c as data};