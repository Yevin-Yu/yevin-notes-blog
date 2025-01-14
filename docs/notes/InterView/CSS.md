---
title: 面试记录 - CSS部分
createTime: 2025/01/13 09:36:52
permalink: /InterView/fe7wg1qp/
---

## Flex布局

```css
flex:1
```
`flex:1`，其实是`flex: 1 1 0%`的简写，其中`flex-grow`、`flex-shrink`、`flex-basis`分别表示放大比例、缩小比例、占据主轴空间。

[Flex - 弹性布局](/CSS/e0ccmgow/)



## 页面加载样式闪烁

浏览器加载页面时出现样式闪烁的现象，可能是由于以下原因：

- CSS 文件加载延迟：如果 CSS 文件的加载速度较慢，浏览器在加载完 HTML 内容后会先显示默认样式，等 CSS 加载完成后再应用样式，导致闪烁。
- JavaScript 操作样式：如果使用 JavaScript 动态修改样式，可能会在页面加载时造成样式的瞬时变化。
- 重绘和重排：在页面加载时，浏览器可能会进行大量的重绘和重排操作，导致页面闪烁。
- 使用外部字体：如果页面使用了外部字体，浏览器在加载字体时会先显示默认字体，等字体加载完成后才会应用新字体，导致闪烁。

解决方法：

- 合并和压缩 CSS 文件，减少请求次数和文件大小。
- 将 CSS 文件放在 `<head>` 中，确保在页面渲染前加载。
- 字体预加载：使用 `<link rel="preload" href="font-url" as="font" type="font/woff2" crossorigin="anonymous">` 来预加载字体，减少字体加载时间
- 尽量减少在页面加载时使用 JavaScript 修改样式，或者在 DOMContentLoaded 事件后再进行样式修改。
- 使用加载动画：在页面加载时使用加载动画，可以避免页面闪烁。