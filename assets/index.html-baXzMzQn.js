import{_ as i,c as a,f as n,o as l}from"./app-SttqiV5p.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<p>JavaScript 的事件循环机制（Event Loop）是其异步编程模型的核心部分。它允许 JavaScript 在单线程环境中处理异步操作，确保代码的执行顺序和响应性。</p><h2 id="单线程模型" tabindex="-1"><a class="header-anchor" href="#单线程模型"><span>单线程模型</span></a></h2><blockquote><p>JavaScript 是单线程的，这意味着它一次只能执行一个任务。虽然这使得代码执行顺序简单，但也限制了并发处理的能力。</p></blockquote><p>优点：</p><ul><li>简单性：单线程模型使得代码更易于理解和调试。</li><li>避免竞争条件：由于只有一个执行线程，避免了多线程编程中的许多常见问题。</li></ul><p>缺点：</p><ul><li>阻塞：长时间运行的操作会阻塞主线程，导致用户界面冻结。</li><li>性能限制：在 CPU 密集型任务中，单线程模型可能导致性能瓶颈。</li><li>以上问题：可以借助 Web Worker 来解决。</li></ul><h2 id="执行栈-call-stack" tabindex="-1"><a class="header-anchor" href="#执行栈-call-stack"><span>执行栈（Call Stack）</span></a></h2><blockquote><p>执行栈是一个后进先出（LIFO）的数据结构，用于管理函数调用。当一个函数被调用时，它会被推入栈中；当函数执行完毕时，它会从栈中弹出。</p></blockquote><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> firstFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">First function is called.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    secondFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 调用第二个函数</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">First function is finished.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> secondFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Second function is called.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    thirdFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 调用第三个函数</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Second function is finished.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> thirdFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Third function is called.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Start</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 1. 开始执行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">firstFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2. 调用第一个函数</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">End</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 3. 结束执行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出顺序：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Start</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">First</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> called.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Second</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> called.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Third</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> called.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Second</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> finished.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">First</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> function</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> finished.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">End</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><ul><li><code>console.log(&quot;Start&quot;)</code> 被推入执行栈并执行，输出 &quot;Start&quot; 。</li><li><code>firstFunction()</code> 被调用，推入执行栈。</li><li>在 <code>firstFunction</code> 中，输出 &quot;First function is called.&quot; 。</li><li><code>secondFunction()</code> 被调用，推入执行栈。</li><li>在 <code>secondFunction</code> 中，输出 &quot;Second function is called.&quot; 。</li><li><code>thirdFunction()</code> 被调用，推入执行栈。</li><li>在 <code>thirdFunction</code> 中，输出 &quot;Third function is called.&quot; ，然后 <code>thirdFunction</code> 执行完毕并从栈中弹出。</li><li>控制权返回到 <code>secondFunction</code> ，输出 &quot;Second function is finished.&quot; ，然后 <code>secondFunction</code> 执行完毕并从栈中弹出。</li><li>控制权返回到 <code>firstFunction，输出</code> &quot;First function is finished.&quot; ，然后 <code>firstFunction</code> 执行完毕并从栈中弹出。</li><li>最后，<code>console.log(&quot;End&quot;)</code> 被执行，输出 &quot;End&quot; 。</li></ul><h2 id="web-apis" tabindex="-1"><a class="header-anchor" href="#web-apis"><span>Web APIs</span></a></h2><blockquote><p>当 JavaScript 执行异步操作（如 setTimeout、fetch、事件监听等）时，这些操作会被交给浏览器的 Web APIs 处理。处理完成后，相关的回调函数会被放入任务队列中。</p></blockquote><p>Web APIs 可以分为多个类别:</p><ul><li>DOM API：用于操作文档对象模型（DOM），允许开发者动态修改网页内容和结构。</li><li>Fetch API：用于进行网络请求，替代传统的 XMLHttpRequest。</li><li>Web Storage API：提供本地存储和会话存储的功能。</li><li>Canvas API：用于绘制图形和动画。</li><li>Geolocation API：用于获取用户的地理位置信息。</li><li>WebSockets API：用于实现实时双向通信。</li></ul><p>Web APIs 的工作原理:</p><ul><li>Web APIs 通常在浏览器的主线程中运行。当 JavaScript 代码调用异步 Web API 时，相关的操作会被异步处理。处理完成后，回调函数会被放入宏任务队列或者微任务队列中，等待执行栈为空时执行。</li></ul><p>宏任务队列（Macrotask Queue）：</p><ul><li><code>setTimeout</code> ：用于设置定时器，回调函数在指定时间后执行。</li><li><code>setInterval</code> ：用于设置定时器，回调函数在指定时间间隔内重复执行。</li><li>事件处理：例如，用户点击按钮、键盘输入等事件的回调函数。</li><li><code>requestAnimationFrame</code> ：用于在下一个重绘之前执行的回调。</li><li><code>WebSocket</code> ：用于处理 <code>WebSocket</code> 连接的事件（如 <code>onopen</code> 、 <code>onmessage</code> 、 <code>onclose</code> 、 <code>onerror</code> ）。</li></ul><p>微任务队列（Microtask Queue）:</p><ul><li><code>Promise</code> ： <code>Promise</code> 的 <code>.then()</code> 、 <code>.catch()</code> 和 <code>.finally()</code> 方法的回调会被放入微任务队列。</li><li><code>MutationObserver</code> ：用于观察 DOM 变动的回调。</li><li><code>queueMicrotask</code> ：用于将一个微任务添加到微任务队列。</li></ul><h2 id="任务队列-task-queue" tabindex="-1"><a class="header-anchor" href="#任务队列-task-queue"><span>任务队列（Task Queue）</span></a></h2><blockquote><p>任务队列是一个先进先出（FIFO）的数据结构，用于存储待执行的回调函数。当执行栈为空时，事件循环会从任务队列中取出一个回调函数并执行。</p></blockquote><p>任务队列分为两类：</p><ul><li>宏任务队列（Macrotask Queue）：存储需要延迟执行的回调函数，如 <code>setTimeout</code> 、 <code>setInterval</code> 、 <code>I/O</code> 操作等。</li><li>微任务队列（Microtask Queue）：存储需要尽快执行的回调函数，如 <code>Promise</code> 的回调、 <code>MutationObserver</code> 的回调等。</li></ul><h2 id="宏任务队列-macrotask-queue" tabindex="-1"><a class="header-anchor" href="#宏任务队列-macrotask-queue"><span>宏任务队列（Macrotask Queue）</span></a></h2><blockquote><p>宏任务队列是一个先进先出（FIFO）的数据结构，用于存储需要延迟执行的回调函数。当执行栈为空时，并且微任务队列为空时，事件循环会从宏任务队列中取出一个回调函数并执行。</p></blockquote><h2 id="微任务队列-microtask-queue" tabindex="-1"><a class="header-anchor" href="#微任务队列-microtask-queue"><span>微任务队列（Microtask Queue）</span></a></h2><blockquote><p>除了宏任务队列，JavaScript 还有一个微任务队列（如 Promise 的回调）。微任务的优先级高于普通任务，事件循环会在每次执行栈清空后，优先执行微任务队列中的所有任务，然后再执行宏任务队列中的任务。</p></blockquote><h2 id="事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#事件循环-event-loop"><span>事件循环（Event Loop）</span></a></h2><blockquote><p>事件循环是一个循环机制，它不断检查执行栈和任务队列，以确定是否有任务需要执行。如果有任务需要执行，事件循环会将其从任务队列中取出并放入执行栈中执行。</p></blockquote><ol><li>执行同步代码： <ul><li>JavaScript 从上到下执行所有的同步代码，直到执行栈为空。</li><li>例如，执行 <code>console.log</code> 、变量赋值、函数调用等。</li></ul></li><li>检查微任务队列： <ul><li>如当执行栈为空时，事件循环会检查微任务队列（Microtask Queue）。</li><li>微任务通常包括 <code>Promise</code> 的 <code>.then()</code> 、<code>.catch()</code> 和 <code>.finally()</code> 回调，以及 <code>MutationObserver</code> 的回调。</li><li>执行所有微任务，直到微任务队列为空。</li></ul></li><li>检查宏任务队列： <ul><li>微任务队列清空后，事件循环会检查任务队列（Task Queue）。</li><li>任务队列中的任务通常包括 <code>setTimeout</code> 、<code>setInterval</code> 、I/O 操作的回调等。</li><li>从任务队列中取出一个任务并将其推入执行栈中执行。</li></ul></li><li>重复： <ul><li>重复步骤 2 和 3，直到没有更多的任务和微任务需要执行。</li></ul></li></ol><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Start</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setTimeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Timeout 1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">resolve</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Promise 1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setTimeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Timeout 2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">resolve</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Promise 2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">End</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Start</span></span>
<span class="line"><span>End</span></span>
<span class="line"><span>Promise 1</span></span>
<span class="line"><span>Promise 2</span></span>
<span class="line"><span>Timeout 1</span></span>
<span class="line"><span>Timeout 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><ol><li>执行同步代码，输出 &#39;Start&#39; 和 &#39;End&#39;。</li><li>检查微任务队列，执行 <code>Promise</code> 的回调，输出 &#39;Promise 1&#39; 和 &#39;Promise 2&#39;。</li><li>检查任务队列，执行 <code>setTimeout</code> 的回调，输出 &#39;Timeout 1&#39; 和 &#39;Timeout 2&#39;。</li></ol>`,42)]))}const p=i(e,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/JavaScript/3n85m43u/","title":"Event Loop - 事件循环机制","lang":"zh-CN","frontmatter":{"title":"Event Loop - 事件循环机制","author":"耶温","createTime":"2024/08/30 15:53:33","permalink":"/JavaScript/3n85m43u/"},"headers":[],"readingTime":{"minutes":5.48,"words":1644},"git":{"updatedTime":1732025503000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/JavaScript/Event Loop.md","bulletin":false}');export{p as comp,d as data};