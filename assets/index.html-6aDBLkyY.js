import{_ as d,c as e,f as o,o as r}from"./app-SttqiV5p.js";const c={};function l(a,t){return r(),e("div",null,t[0]||(t[0]=[o('<h2 id="basic-html-基础" tabindex="-1"><a class="header-anchor" href="#basic-html-基础"><span>Basic HTML 基础</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE&gt;</code></td><td>声明文档类型，告诉浏览器使用的 HTML 版本。</td><td>确保浏览器以正确的模式解析文档。</td></tr><tr><td><code>&lt;html&gt;</code></td><td>文档的根元素，包含整个 HTML 文档。</td><td>包含文档的所有内容。</td></tr><tr><td><code>&lt;head&gt;</code></td><td>包含文档的元数据，如标题、样式表链接等。</td><td>定义文档的头部信息。</td></tr><tr><td><code>&lt;title&gt;</code></td><td>定义文档的标题，显示在浏览器的标题栏或标签页上。</td><td>设置文档的标题。</td></tr><tr><td><code>&lt;body&gt;</code></td><td>包含文档的实际内容，如文本、图片、链接等。</td><td>定义文档的主体内容。</td></tr><tr><td><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></td><td>定义标题，从最重要到最不重要。</td><td>组织文档内容，创建标题层次结构。</td></tr><tr><td><code>&lt;p&gt;</code></td><td>定义段落。</td><td>创建文本段落。</td></tr><tr><td><code>&lt;br&gt;</code></td><td>插入换行符，强制换行而不形成一个新的段落。</td><td>强制换行。</td></tr><tr><td><code>&lt;hr&gt;</code></td><td>插入水平线，用于分隔文档内容。</td><td>分隔文档的不同部分。</td></tr><tr><td><code>&lt;!--...--&gt;</code></td><td>注释，用于添加不会显示给用户的注释信息。</td><td>添加注释以帮助理解代码。</td></tr></tbody></table><h2 id="formatting-html-格式化" tabindex="-1"><a class="header-anchor" href="#formatting-html-格式化"><span>Formatting HTML 格式化</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;acronym&gt;</code></td><td>已废弃的元素，用于定义缩写词。</td><td>不再推荐使用，应使用 <code>&lt;abbr&gt;</code> 替代。</td></tr><tr><td><code>&lt;abbr&gt;</code></td><td>定义缩写词或首字母缩略词。</td><td>显示缩写词，并提供完整的解释。</td></tr><tr><td><code>&lt;address&gt;</code></td><td>定义联系信息，如作者或文章的联系信息。</td><td>显示作者或文档的联系信息。</td></tr><tr><td><code>&lt;b&gt;</code></td><td>定义粗体文本，通常没有语义含义。</td><td>显示加粗文本。</td></tr><tr><td><code>&lt;bdi&gt;</code></td><td>用于隔离文本的方向性，以确保文本方向的正确显示。</td><td>处理文本方向不确定的内容，如用户输入。</td></tr><tr><td><code>&lt;bdo&gt;</code></td><td>用于覆盖文本的默认方向，强制文本从右向左或从左向右显示。</td><td>显示具有特定方向性的文本。</td></tr><tr><td><code>&lt;big&gt;</code></td><td>已废弃的元素，用于定义大号文本。</td><td>不再推荐使用，应使用 CSS 来改变文本大小。</td></tr><tr><td><code>&lt;br&gt;</code></td><td>插入换行符，强制换行而不形成一个新的段落。</td><td>强制换行。</td></tr><tr><td><code>&lt;blockquote&gt;</code></td><td>定义长的引用文本，通常会缩进显示。</td><td>显示长引用或摘录。</td></tr><tr><td><code>&lt;center&gt;</code></td><td>已废弃的元素，用于居中文本或元素。</td><td>不再推荐使用，应使用 CSS 来居中内容。</td></tr><tr><td><code>&lt;cite&gt;</code></td><td>定义作品的标题，如书籍或电影的标题。</td><td>显示作品的标题。</td></tr><tr><td><code>&lt;code&gt;</code></td><td>定义计算机代码片段。</td><td>显示编程代码或命令。</td></tr><tr><td><code>&lt;del&gt;</code></td><td>定义已被删除的文本。</td><td>显示已删除的文本。</td></tr><tr><td><code>&lt;dfn&gt;</code></td><td>定义术语的定义，通常用于定义文档中的术语。</td><td>定义术语或词汇。</td></tr><tr><td><code>&lt;em&gt;</code></td><td>定义强调文本，通常以斜体显示。</td><td>强调文本的重要性。</td></tr><tr><td><code>&lt;font&gt;</code></td><td>已废弃的元素，用于定义字体、颜色和大小。</td><td>不再推荐使用，应使用 CSS 来定义字体样式。</td></tr><tr><td><code>&lt;i&gt;</code></td><td>定义斜体文本，通常没有语义含义。</td><td>显示斜体文本。</td></tr><tr><td><code>&lt;ins&gt;</code></td><td>定义已被插入或添加的文本。</td><td>显示已插入的文本。</td></tr><tr><td><code>&lt;kbd&gt;</code></td><td>定义键盘输入。</td><td>显示键盘输入的文本。</td></tr><tr><td><code>&lt;mark&gt;</code></td><td>定义标记或高亮的文本。</td><td>高亮显示文本。</td></tr><tr><td><code>&lt;meter&gt;</code></td><td>定义度量范围内的数值。</td><td>显示度量值，如进度条。</td></tr><tr><td><code>&lt;pre&gt;</code></td><td>定义预格式化的文本。</td><td>显示保留空格和换行的文本。</td></tr><tr><td><code>&lt;progress&gt;</code></td><td>定义进度条。</td><td>显示任务完成的进度。</td></tr><tr><td><code>&lt;q&gt;</code></td><td>定义短引用。</td><td>显示短引用。</td></tr><tr><td><code>&lt;rp&gt;</code></td><td>定义Ruby注释的可选父标签。</td><td>显示Ruby注释的可选部分。</td></tr><tr><td><code>&lt;rt&gt;</code></td><td>定义Ruby文本。</td><td>显示Ruby文本。</td></tr><tr><td><code>&lt;ruby&gt;</code></td><td>定义Ruby注释，用于显示亚洲文字的发音指南。</td><td>显示亚洲文字的发音指南。</td></tr><tr><td><code>&lt;s&gt;</code></td><td>定义不再准确或相关的文本。</td><td>显示过时的文本。</td></tr><tr><td><code>&lt;samp&gt;</code></td><td>定义样本输出。</td><td>显示程序或命令的样本输出。</td></tr><tr><td><code>&lt;small&gt;</code></td><td>定义较小的文本。</td><td>显示较小的文本，如版权声明。</td></tr><tr><td><code>&lt;strike&gt;</code></td><td>定义被划掉的文本。</td><td>显示被划掉的文本。</td></tr><tr><td><code>&lt;strong&gt;</code></td><td>定义重要的文本。</td><td>强调文本的重要性。</td></tr><tr><td><code>&lt;sub&gt;</code></td><td>定义下标文本。</td><td>显示化学公式中的下标。</td></tr><tr><td><code>&lt;sup&gt;</code></td><td>定义上标文本。</td><td>显示数学公式中的上标。</td></tr><tr><td><code>&lt;template&gt;</code></td><td>定义文档或应用程序的模板。</td><td>存储可重复使用的 HTML 片段。</td></tr><tr><td><code>&lt;time&gt;</code></td><td>定义日期或时间。</td><td>显示日期或时间。</td></tr><tr><td><code>&lt;tt&gt;</code></td><td>已废弃的元素，用于定义等宽字体。</td><td>不再推荐使用，应使用 CSS 来定义等宽字体。</td></tr><tr><td><code>&lt;u&gt;</code></td><td>定义带有下划线的文本。</td><td>显示带有下划线的文本。</td></tr><tr><td><code>&lt;var&gt;</code></td><td>定义变量。</td><td>显示变量的名称。</td></tr><tr><td><code>&lt;wbr&gt;</code></td><td>定义可选的换行机会。</td><td>指定文本中的可选换行点。</td></tr></tbody></table><h2 id="forms-and-input-html-表单输入" tabindex="-1"><a class="header-anchor" href="#forms-and-input-html-表单输入"><span>Forms and Input HTML 表单输入</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;form&gt;</code></td><td>定义表单，用于收集用户输入的数据。</td><td>创建表单以收集用户数据。</td></tr><tr><td><code>&lt;input&gt;</code></td><td>定义表单控件，如文本框、按钮、复选框等。</td><td>创建各种类型的输入控件。</td></tr><tr><td><code>&lt;textarea&gt;</code></td><td>定义多行文本输入控件。</td><td>创建多行文本输入区域。</td></tr><tr><td><code>&lt;button&gt;</code></td><td>定义按钮。</td><td>创建按钮以提交表单或执行其他操作。</td></tr><tr><td><code>&lt;select&gt;</code></td><td>定义下拉列表。</td><td>创建下拉列表供用户选择选项。</td></tr><tr><td><code>&lt;optgroup&gt;</code></td><td>定义 <code>&lt;select&gt;</code> 元素内的选项组。</td><td>将 <code>&lt;select&gt;</code> 内的选项分组。</td></tr><tr><td><code>&lt;option&gt;</code></td><td>定义 <code>&lt;select&gt;</code> 元素中的一个选项。</td><td>创建下拉列表中的选项。</td></tr><tr><td><code>&lt;label&gt;</code></td><td>定义标签，与表单控件关联。</td><td>创建与表单控件关联的标签。</td></tr><tr><td><code>&lt;fieldset&gt;</code></td><td>定义表单内的一个区域，通常与 <code>&lt;legend&gt;</code> 元素一起使用。</td><td>分组表单控件并添加标题。</td></tr><tr><td><code>&lt;legend&gt;</code></td><td>定义 <code>&lt;fieldset&gt;</code> 元素的标题。</td><td>为 <code>&lt;fieldset&gt;</code> 提供标题。</td></tr><tr><td><code>&lt;datalist&gt;</code></td><td>定义输入控件的选项列表。</td><td>为 <code>&lt;input&gt;</code> 提供一个选项列表。</td></tr><tr><td><code>&lt;output&gt;</code></td><td>定义计算结果或脚本输出。</td><td>显示计算结果或脚本输出。</td></tr></tbody></table><h2 id="frames-html-框架" tabindex="-1"><a class="header-anchor" href="#frames-html-框架"><span>Frames HTML 框架</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;frame&gt;</code></td><td>已废弃的元素，定义框架内的文档窗口。</td><td>创建多文档布局的一部分。</td></tr><tr><td><code>&lt;frameset&gt;</code></td><td>已废弃的元素，定义一组框架的布局。</td><td>创建包含多个文档的多文档布局。</td></tr><tr><td><code>&lt;noframes&gt;</code></td><td>已废弃的元素，定义当浏览器不支持框架时显示的内容。</td><td>显示替代内容以支持不支持框架的浏览器。</td></tr><tr><td><code>&lt;iframe&gt;</code></td><td>定义内联框架，可以在页面内嵌入另一个文档。</td><td>嵌入外部文档或广告等内容。</td></tr></tbody></table><h2 id="images-html-图片" tabindex="-1"><a class="header-anchor" href="#images-html-图片"><span>Images HTML 图片</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;img&gt;</code></td><td>定义图像。</td><td>显示图像。</td></tr><tr><td><code>&lt;map&gt;</code></td><td>定义图像映射，与 <code>&lt;img&gt;</code> 元素结合使用。</td><td>创建图像热点。</td></tr><tr><td><code>&lt;area&gt;</code></td><td>定义 <code>&lt;map&gt;</code> 元素内的图像热点。</td><td>创建可点击的图像热点。</td></tr><tr><td><code>&lt;canvas&gt;</code></td><td>定义绘图区域，用于绘制图形和图像。</td><td>动态生成图像和动画。</td></tr><tr><td><code>&lt;figcaption&gt;</code></td><td>定义 <code>&lt;figure&gt;</code> 元素的标题。</td><td>显示图像或图表的标题。</td></tr><tr><td><code>&lt;figure&gt;</code></td><td>定义独立的内容，如图像、图表或脚注。</td><td>包含图像或图表及其标题。</td></tr><tr><td><code>&lt;picture&gt;</code></td><td>定义图像源，用于根据不同的条件或设备显示不同的图像。</td><td>为不同设备提供合适的图像。</td></tr><tr><td><code>&lt;svg&gt;</code></td><td>定义矢量图形。</td><td>创建可缩放的矢量图形。</td></tr></tbody></table><h2 id="audio-video-html-音频视频" tabindex="-1"><a class="header-anchor" href="#audio-video-html-音频视频"><span>Audio / Video HTML 音频视频</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;audio&gt;</code></td><td>定义音频内容。</td><td>在网站中插入音频文件，播放音频文件。</td></tr><tr><td><code>&lt;source&gt;</code></td><td>为 <code>&lt;audio&gt;</code> <code>&lt;video&gt;</code> 提供多个媒体资源。</td><td>支持多种格式的媒体文件，以适应不同的浏览器。</td></tr><tr><td><code>&lt;track&gt;</code></td><td>为 <code>&lt;audio&gt;</code> <code>&lt;video&gt;</code> 提供字幕或注释轨道。</td><td>添加字幕、章节标题或其他元数据。</td></tr><tr><td><code>&lt;video&gt;</code></td><td>定义视频内容。</td><td>在网站中插入视频文件，播放视频文件。</td></tr></tbody></table><h2 id="links-html-链接" tabindex="-1"><a class="header-anchor" href="#links-html-链接"><span>Links HTML 链接</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;a&gt;</code></td><td>定义超链接，用于从一个页面链接到另一个页面或同一页面内的不同部分。</td><td>创建链接到其他页面或锚点。</td></tr><tr><td><code>&lt;link&gt;</code></td><td>定义文档与外部资源之间的关系，如样式表或 favicon。</td><td>链接到外部样式表或图标文件。</td></tr><tr><td><code>&lt;nav&gt;</code></td><td>定义导航链接的容器。</td><td>创建导航菜单或链接列表。</td></tr></tbody></table><h2 id="lists-html-列表" tabindex="-1"><a class="header-anchor" href="#lists-html-列表"><span>Lists HTML 列表</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;menu&gt;</code></td><td>定义一个菜单列表。</td><td>创建一个菜单，通常用于导航或显示选项列表。</td></tr><tr><td><code>&lt;ul&gt;</code></td><td>定义无序列表。</td><td>创建项目不需要特定顺序的列表。</td></tr><tr><td><code>&lt;ol&gt;</code></td><td>定义有序列表。</td><td>创建项目需要按特定顺序排列的列表。</td></tr><tr><td><code>&lt;li&gt;</code></td><td>定义列表项，用于 <code>&lt;ul&gt;</code>、<code>&lt;ol&gt;</code> 或 <code>&lt;menu&gt;</code> 中的项目。</td><td>创建列表中的每一项。</td></tr><tr><td><code>&lt;dir&gt;</code></td><td>已废弃的元素，用于定义目录列表。</td><td>不再推荐使用，应使用 <code>&lt;ul&gt;</code> 或 <code>&lt;ol&gt;</code> 替代。</td></tr><tr><td><code>&lt;dl&gt;</code></td><td>定义定义列表。</td><td>创建一个定义列表，其中包含术语和对应的定义。</td></tr><tr><td><code>&lt;dt&gt;</code></td><td>定义定义列表中的术语。</td><td>创建定义列表中的术语项。</td></tr><tr><td><code>&lt;dd&gt;</code></td><td>定义定义列表中的定义。</td><td>创建定义列表中的定义项。</td></tr></tbody></table><h2 id="tables-html-表格" tabindex="-1"><a class="header-anchor" href="#tables-html-表格"><span>Tables HTML 表格</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;table&gt;</code></td><td>定义表格。</td><td>创建表格以组织数据。</td></tr><tr><td><code>&lt;caption&gt;</code></td><td>定义表格的标题。</td><td>为表格提供标题。</td></tr><tr><td><code>&lt;th&gt;</code></td><td>定义表格中的表头单元格。</td><td>创建表格中的表头单元格。</td></tr><tr><td><code>&lt;tr&gt;</code></td><td>定义表格中的一行。</td><td>创建表格中的一行。</td></tr><tr><td><code>&lt;td&gt;</code></td><td>定义表格中的标准单元格。</td><td>创建表格中的标准单元格。</td></tr><tr><td><code>&lt;thead&gt;</code></td><td>定义表格的表头部分。</td><td>创建表格的表头部分。</td></tr><tr><td><code>&lt;tbody&gt;</code></td><td>定义表格的主体部分。</td><td>创建表格的主体部分。</td></tr><tr><td><code>&lt;tfoot&gt;</code></td><td>定义表格的底部部分。</td><td>创建表格的底部部分。</td></tr><tr><td><code>&lt;col&gt;</code></td><td>定义表格中的一列。</td><td>设置表格中一列的样式。</td></tr><tr><td><code>&lt;colgroup&gt;</code></td><td>定义表格中的列组。</td><td>将表格中的列分组并设置样式。</td></tr></tbody></table><h2 id="styles-semantics-html-样式和语义" tabindex="-1"><a class="header-anchor" href="#styles-semantics-html-样式和语义"><span>Styles / Semantics HTMl 样式和语义</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;style&gt;</code></td><td>定义文档的内联样式。</td><td>在文档内部定义样式规则。</td></tr><tr><td><code>&lt;div&gt;</code></td><td>定义一个分区或节。</td><td>作为容器来分组内容或布局。</td></tr><tr><td><code>&lt;span&gt;</code></td><td>定义文档中的行内元素。</td><td>用于为小块内容添加样式或语义。</td></tr><tr><td><code>&lt;header&gt;</code></td><td>定义文档或节的头部。</td><td>显示文档或节的头部信息。</td></tr><tr><td><code>&lt;hgroup&gt;</code></td><td>已废弃的元素，用于组合标题元素。</td><td>不再推荐使用，应使用多个 <code>&lt;h1&gt;</code> 至 <code>&lt;h6&gt;</code> 元素替代。</td></tr><tr><td><code>&lt;footer&gt;</code></td><td>定义文档或节的底部。</td><td>显示文档或节的底部信息。</td></tr><tr><td><code>&lt;main&gt;</code></td><td>定义文档的主要内容。</td><td>包含文档的主要内容。</td></tr><tr><td><code>&lt;section&gt;</code></td><td>定义文档中的节。</td><td>用于分组文档中的内容。</td></tr><tr><td><code>&lt;search&gt;</code></td><td>已废弃的元素，用于定义搜索框。</td><td>不再推荐使用，应使用 <code>&lt;input type=&quot;search&quot;&gt;</code> 替代。</td></tr><tr><td><code>&lt;article&gt;</code></td><td>定义文档中的独立内容。</td><td>包含独立的文章或博客帖子。</td></tr><tr><td><code>&lt;aside&gt;</code></td><td>定义与周围内容相关但可以独立的边栏内容。</td><td>包含侧边栏或相关链接。</td></tr><tr><td><code>&lt;details&gt;</code></td><td>定义可以显示或隐藏的详细信息。</td><td>创建可展开的详细信息。</td></tr><tr><td><code>&lt;dialog&gt;</code></td><td>定义对话框或子窗口。</td><td>显示模态对话框或提示。</td></tr><tr><td><code>&lt;summary&gt;</code></td><td>定义 <code>&lt;details&gt;</code> 元素的摘要或标题。</td><td>创建可展开内容的标题。</td></tr><tr><td><code>&lt;data&gt;</code></td><td>定义与文本相关联的数据值。</td><td>显示与文本相关联的数据值。</td></tr></tbody></table><h2 id="meta-info-html-元信息" tabindex="-1"><a class="header-anchor" href="#meta-info-html-元信息"><span>Meta Info HTML 元信息</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;head&gt;</code></td><td>定义文档的头部信息。</td><td>包含文档的元数据，如标题、样式表链接等。</td></tr><tr><td><code>&lt;meta&gt;</code></td><td>定义文档的元信息。</td><td>设置文档的字符集、视口、关键词等元数据。</td></tr><tr><td><code>&lt;base&gt;</code></td><td>定义文档的基础 URL，用于相对 URL 的解析。</td><td>设置文档中所有相对 URL 的基础 URL。</td></tr><tr><td><code>&lt;basefont&gt;</code></td><td>已废弃的元素，用于设置文档的默认字体、大小和颜色。</td><td>不再推荐使用，应使用 CSS 来设置字体样式。</td></tr></tbody></table><h2 id="programming-html-脚本" tabindex="-1"><a class="header-anchor" href="#programming-html-脚本"><span>Programming HTML 脚本</span></a></h2><table><thead><tr><th>元素名称</th><th>元素介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>&lt;script&gt;</code></td><td>定义客户端脚本，如 JavaScript。</td><td>添加交互性或动态内容到网页。</td></tr><tr><td><code>&lt;noscript&gt;</code></td><td>定义在浏览器禁用脚本时显示的内容。</td><td>显示替代内容给禁用脚本的用户。</td></tr><tr><td><code>&lt;applet&gt;</code></td><td>已废弃的元素，用于定义 Java applet。</td><td>不再推荐使用，应使用 <code>&lt;embed&gt;</code> 或 <code>&lt;object&gt;</code> 替代。</td></tr><tr><td><code>&lt;embed&gt;</code></td><td>定义嵌入的内容，如插件。</td><td>嵌入非 HTML 内容，如 Flash 或 PDF 文件。</td></tr><tr><td><code>&lt;object&gt;</code></td><td>定义嵌入的内容，如插件或图像。</td><td>嵌入非 HTML 内容，并提供备用内容。</td></tr><tr><td><code>&lt;param&gt;</code></td><td>定义 <code>&lt;object&gt;</code> 或 <code>&lt;applet&gt;</code> 的参数。</td><td>为 <code>&lt;object&gt;</code> 或 <code>&lt;applet&gt;</code> 提供配置参数。</td></tr></tbody></table>',24)]))}const g=d(c,[["render",l],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/HTML/k1drz01w/","title":"HTML - Elements 元素","lang":"zh-CN","frontmatter":{"title":"HTML - Elements 元素","author":"耶温","createTime":"2024/07/25 19:16:52","permalink":"/HTML/k1drz01w/"},"headers":[],"readingTime":{"minutes":10.59,"words":3176},"git":{"updatedTime":1733297947000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/HTML/HTML-Elements.md","bulletin":false}');export{g as comp,s as data};