import{_ as d,c as e,a as o,o as r}from"./app-BdHnRT_g.js";const c={};function a(n,t){return r(),e("div",null,t[0]||(t[0]=[o('<h2 id="window-窗口事件" tabindex="-1"><a class="header-anchor" href="#window-窗口事件"><span>Window 窗口事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>onafterprint</code></td><td>在文档被打印后触发的事件。</td><td>清除打印前设置的一些样式或布局更改；执行清理操作，如重置页面状态。</td></tr><tr><td><code>onbeforeprint</code></td><td>在文档准备打印前触发的事件。</td><td>应用专门用于打印的样式，比如隐藏某些元素或改变布局；调整页面内容以便更好地适应打印输出。</td></tr><tr><td><code>onbeforeunload</code></td><td>在窗口、文档和资源即将卸载时触发的事件。</td><td>在用户离开页面前提示用户是否保存未提交的数据；清理资源或执行必要的清理工作，比如关闭WebSocket连接等。</td></tr><tr><td><code>onerror</code></td><td>在文档或脚本发生错误时触发的事件。</td><td>捕获错误并记录错误信息，帮助调试；阻止默认行为，比如阻止页面显示错误信息。</td></tr><tr><td><code>onhashchange</code></td><td>在URL中的哈希部分（即 # 后面的部分）发生改变时触发的事件。</td><td>监听哈希变化并相应地更新页面内容，适用于单页应用中的路由管理；实现不需要完整页面刷新的导航功能。</td></tr><tr><td><code>onload</code></td><td>在文档完全加载完毕后触发的事件。</td><td>初始化页面元素和脚本；执行页面加载后的必要操作。</td></tr><tr><td><code>onmessage</code></td><td>在接收到来自另一个源的消息时触发的事件。</td><td>实现跨窗口或跨文档的消息传递；处理来自Worker线程的消息。</td></tr><tr><td><code>onoffline</code></td><td>当浏览器检测到网络断开时触发的事件。</td><td>显示离线提示信息；处理网络断开的情况。</td></tr><tr><td><code>ononline</code></td><td>当浏览器检测到网络连接恢复时触发的事件。</td><td>更新页面内容以反映在线状态；重新尝试之前失败的网络请求。</td></tr><tr><td><code>onpagehide</code></td><td>当页面从视图中隐藏时触发的事件。</td><td>清理资源或执行必要的清理工作；保存页面状态。</td></tr><tr><td><code>onpageshow</code></td><td>当页面变为可见时触发的事件。</td><td>加载页面状态；恢复用户界面。</td></tr><tr><td><code>onpopstate</code></td><td>当浏览器的历史记录发生变化时触发的事件。</td><td>处理浏览器前进或后退的操作；更新页面状态。</td></tr><tr><td><code>onresize</code></td><td>当浏览器窗口大小发生变化时触发的事件。</td><td>重新计算布局和样式；更新响应式设计。</td></tr><tr><td><code>onstorage</code></td><td>当本地存储（如localStorage）发生变化时触发的事件。</td><td>更新页面显示与存储相关的信息；同步其他窗口或标签页的状态。</td></tr><tr><td><code>onunload</code></td><td>在文档即将卸载时触发的事件。</td><td>执行必要的清理工作；记录用户活动。</td></tr></tbody></table><h2 id="form-表单事件" tabindex="-1"><a class="header-anchor" href="#form-表单事件"><span>Form 表单事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>onblur</code></td><td>当元素失去焦点时触发的事件。</td><td>验证表单输入；清除定时器或取消持续的操作。</td></tr><tr><td><code>onchange</code></td><td>当元素的内容或选中状态发生变化时触发的事件。</td><td>提交表单数据；更新UI显示。</td></tr><tr><td><code>oncontextmenu</code></td><td>当用户试图显示上下文菜单时触发的事件。</td><td>自定义上下文菜单；阻止默认上下文菜单的显示。</td></tr><tr><td><code>onfocus</code></td><td>当元素获得焦点时触发的事件。</td><td>显示提示信息；初始化输入字段。</td></tr><tr><td><code>oninput</code></td><td>当输入元素的内容发生变化时触发的事件。</td><td>实时验证输入；更新UI显示。</td></tr><tr><td><code>oninvalid</code></td><td>当表单元素不符合其约束验证规则时触发的事件。</td><td>显示验证错误信息；阻止无效数据的提交。</td></tr><tr><td><code>onreset</code></td><td>当表单被重置时触发的事件。</td><td>保存表单原始数据；执行重置前的清理工作。</td></tr><tr><td><code>onsearch</code></td><td>当 <code>&lt;input type=&quot;search&quot;&gt;</code> 元素的值发生变化时触发的事件。</td><td>更新搜索结果；实时过滤数据。</td></tr><tr><td><code>onselect</code></td><td>当用户选择文本时触发的事件。</td><td>复制或操作选定的文本；显示选定文本的统计信息。</td></tr><tr><td><code>onsubmit</code></td><td>当表单提交时触发的事件。</td><td>验证表单数据；处理表单提交前的操作。</td></tr></tbody></table><h2 id="keyboard-键盘事件" tabindex="-1"><a class="header-anchor" href="#keyboard-键盘事件"><span>Keyboard 键盘事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>onkeydown</code></td><td>当按键被按下时触发的事件。</td><td>捕获键盘输入；实现键盘导航功能。</td></tr><tr><td><code>onkeypress</code></td><td>当字符键被按下时触发的事件。</td><td>处理字符输入；限制特定字符的输入。</td></tr><tr><td><code>onkeyup</code></td><td>当按键被释放时触发的事件。</td><td>处理按键释放后的操作；实现键盘命令。</td></tr></tbody></table><h2 id="mouse-鼠标事件" tabindex="-1"><a class="header-anchor" href="#mouse-鼠标事件"><span>Mouse 鼠标事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>onclick</code></td><td>当鼠标按钮被点击时触发的事件。</td><td>触发交互行为；提交表单或链接跳转。</td></tr><tr><td><code>ondblclick</code></td><td>当鼠标按钮被双击时触发的事件。</td><td>执行双击操作；放大或缩小元素。</td></tr><tr><td><code>onmousedown</code></td><td>当鼠标按钮被按下时触发的事件。</td><td>开始拖拽操作；触发持续的动作。</td></tr><tr><td><code>onmousemove</code></td><td>当鼠标在页面上移动时触发的事件。</td><td>显示工具提示；实现鼠标跟随效果。</td></tr><tr><td><code>onmouseout</code></td><td>当鼠标离开元素时触发的事件。</td><td>隐藏工具提示；取消悬停效果。</td></tr><tr><td><code>onmouseover</code></td><td>当鼠标进入元素时触发的事件。</td><td>显示工具提示；应用悬停效果。</td></tr><tr><td><code>onmouseup</code></td><td>当鼠标按钮被释放时触发的事件。</td><td>结束拖拽操作；完成持续的动作。</td></tr><tr><td><code>onmousewheel</code></td><td>当鼠标滚轮滚动时触发的事件。</td><td>放大或缩小视图；滚动列表或滑块。</td></tr><tr><td><code>onwheel</code></td><td>当鼠标滚轮滚动时触发的事件（更现代的替代 <code>onmousewheel</code>）。</td><td>放大或缩小视图；滚动列表或滑块。</td></tr></tbody></table><h2 id="drag-拖拽事件" tabindex="-1"><a class="header-anchor" href="#drag-拖拽事件"><span>Drag 拖拽事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>ondrag</code></td><td>当元素被拖动时触发的事件。</td><td>更新拖动状态；显示拖动进度。</td></tr><tr><td><code>ondragend</code></td><td>当拖动结束时触发的事件。</td><td>清理拖动状态；执行拖动完成后的操作。</td></tr><tr><td><code>ondragenter</code></td><td>当元素进入拖动目标时触发的事件。</td><td>显示接收区的视觉提示；准备接收拖动数据。</td></tr><tr><td><code>ondragleave</code></td><td>当元素离开拖动目标时触发的事件。</td><td>清除接收区的视觉提示；取消接收拖动数据的准备。</td></tr><tr><td><code>ondragover</code></td><td>当元素在拖动目标上时持续触发的事件。</td><td>更新接收区的视觉提示；阻止默认行为以允许放置。</td></tr><tr><td><code>ondragstart</code></td><td>当拖动开始时触发的事件。</td><td>初始化拖动数据；设置拖动图标。</td></tr><tr><td><code>ondrop</code></td><td>当元素被放置到目标上时触发的事件。</td><td>接收拖动数据；执行放置后的操作。</td></tr><tr><td><code>onscroll</code></td><td>当滚动条滚动时触发的事件。</td><td>动态加载内容；更新滚动条位置指示器。</td></tr></tbody></table><h2 id="clipboard-复制粘贴事件" tabindex="-1"><a class="header-anchor" href="#clipboard-复制粘贴事件"><span>Clipboard 复制粘贴事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>oncopy</code></td><td>当用户复制内容时触发的事件。</td><td>验证复制的内容；提供额外的复制选项。</td></tr><tr><td><code>oncut</code></td><td>当用户剪切内容时触发的事件。</td><td>验证剪切的内容；提供额外的剪切选项。</td></tr><tr><td><code>onpaste</code></td><td>当用户粘贴内容时触发的事件。</td><td>验证粘贴的内容；格式化粘贴的数据。</td></tr></tbody></table><h2 id="media-媒体事件" tabindex="-1"><a class="header-anchor" href="#media-媒体事件"><span>Media 媒体事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>onabort</code></td><td>当媒体下载被中断时触发的事件。</td><td>处理下载中断的情况；显示错误信息。</td></tr><tr><td><code>oncanplay</code></td><td>当媒体可以开始播放但可能需要缓冲更多数据时触发的事件。</td><td>准备播放；更新UI显示播放状态。</td></tr><tr><td><code>oncanplaythrough</code></td><td>当媒体可以流畅播放而无需进一步缓冲时触发的事件。</td><td>开始播放；更新UI显示播放状态。</td></tr><tr><td><code>oncuechange</code></td><td>当时间轴上的字幕或标记发生变化时触发的事件。</td><td>更新字幕或标记显示；处理时间轴的变化。</td></tr><tr><td><code>ondurationchange</code></td><td>当媒体的持续时间发生变化时触发的事件。</td><td>更新播放进度条；显示新的持续时间。</td></tr><tr><td><code>onemptied</code></td><td>当媒体资源已变得空或不再可用时触发的事件。</td><td>处理资源丢失的情况；显示错误信息。</td></tr><tr><td><code>onended</code></td><td>当媒体播放结束时触发的事件。</td><td>重置播放状态；循环播放或跳转到下一个媒体。</td></tr><tr><td><code>onerror</code></td><td>当媒体播放遇到错误时触发的事件。</td><td>处理播放错误；显示错误信息。</td></tr><tr><td><code>onloadeddata</code></td><td>当媒体数据已被加载时触发的事件。</td><td>更新播放进度条；显示播放时间。</td></tr><tr><td><code>onloadedmetadata</code></td><td>当媒体的元数据已加载时触发的事件。</td><td>更新播放进度条；显示媒体元数据。</td></tr><tr><td><code>onloadstart</code></td><td>当媒体开始加载时触发的事件。</td><td>准备播放；显示加载状态。</td></tr><tr><td><code>onpause</code></td><td>当媒体暂停时触发的事件。</td><td>更新UI显示暂停状态；保存播放位置。</td></tr><tr><td><code>onplay</code></td><td>当媒体开始播放时触发的事件。</td><td>更新UI显示播放状态；开始计时。</td></tr><tr><td><code>onplaying</code></td><td>当媒体从暂停状态恢复播放时触发的事件。</td><td>更新UI显示播放状态；继续计时。</td></tr><tr><td><code>onprogress</code></td><td>当媒体数据正在加载时触发的事件。</td><td>更新加载进度；显示加载状态。</td></tr><tr><td><code>onratechange</code></td><td>当播放速率发生变化时触发的事件。</td><td>更新UI显示播放速率；处理速率变化。</td></tr><tr><td><code>onseeked</code></td><td>当媒体播放位置已改变时触发的事件。</td><td>更新播放位置；更新UI显示。</td></tr><tr><td><code>onseeking</code></td><td>当媒体正在寻找新的播放位置时触发的事件。</td><td>更新UI显示寻找状态；处理位置变化。</td></tr><tr><td><code>onstalled</code></td><td>当媒体加载停止但有足够的数据继续播放时触发的事件。</td><td>更新UI显示停滞状态；处理停滞情况。</td></tr><tr><td><code>onsuspend</code></td><td>当媒体加载被暂停时触发的事件。</td><td>更新UI显示暂停状态；处理加载暂停。</td></tr><tr><td><code>ontimeupdate</code></td><td>当播放时间更新时触发的事件。</td><td>更新播放进度条；显示当前时间。</td></tr><tr><td><code>onvolumechange</code></td><td>当音量发生变化时触发的事件。</td><td>更新UI显示音量变化；处理音量变化。</td></tr><tr><td><code>onwaiting</code></td><td>当媒体播放暂停以等待更多数据时触发的事件。</td><td>更新UI显示等待状态；处理等待情况。</td></tr></tbody></table><h2 id="misc-其他事件" tabindex="-1"><a class="header-anchor" href="#misc-其他事件"><span>Misc 其他事件</span></a></h2><table><thead><tr><th>事件名称</th><th>事件介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>ontoggle</code></td><td>当元素<code>&lt;details&gt;</code>的可见状态改变时触发的事件。</td><td>更新元素的可见状态；处理显示/隐藏的行为。</td></tr></tbody></table>',16)]))}const s=d(c,[["render",a],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/HTML/xr76hovi/","title":"HTML - Events 事件","lang":"zh-CN","frontmatter":{"title":"HTML - Events 事件","author":"耶温","createTime":"2024/07/25 15:53:26","permalink":"/HTML/xr76hovi/"},"headers":[],"readingTime":{"minutes":8.61,"words":2582},"git":{"updatedTime":1733297947000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/HTML/HTML-Events.md","bulletin":false}');export{s as comp,l as data};
