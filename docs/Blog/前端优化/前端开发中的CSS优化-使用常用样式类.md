---
title: 前端开发中的CSS优化 - 使用常用样式类
createTime: 2024/11/15 20:20:29
permalink: /article/qychf8ov/
tags:
    - 前端优化
---
# 前端开发中的CSS优化-使用常用样式类

## 前言📖

前端开发我们经常使用单行内容超出打点省略号显示的样式。

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
如上，这三行代码，在CSS文件中到处都是。狠狠的增加了我们的CSS文件大小。

因此呢，我们可以通过创建一个常用的样式类，把这些类似于超出打点的样式，全部封装在一起，来减少我们的CSS文件大小，提高开发效率。

::: tip
注意：绩效考核有代码行数指标的慎用。😂😂😂😂
:::

## 具体实现⚙️

灰常简单，只需要我们创建一个 CSS 文件，把常用的样式封装起来，全局引入即可。

需要注意的两点：

1. 命名简单，方便记忆和使用。
2. 要尽量通用，减少重复代码。

如下：我们用 `_1` 和 `_2` 来表示单行和两行超出打点显示。并且我们可以规定所有的样式类，都以 `_` 开头，方便我们区分。

```css
/* 单行超出隐藏省略号显示 */
._1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* 两行超出隐藏省略号显示  */
._2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
```
::: normal-demo 常用样式类 代码演示 💻
```html
<div class="demo">
    <div class="text _1">先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。
    </div>
</div>
```
```css
.text{
  width: 200px;
  height: 50px;
  margin: 20px auto;
}

/* 单行超出隐藏省略号显示 */
._1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* 两行超出隐藏省略号显示  */
._2{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
```
:::
可以打开开发者工具，直接修改 `_1` 和 `_2` 的样式，查看效果。



## 常用样式类📋

以下是一些常用的样式类，可以根据自己的需求，进行修改和添加。

```css
/* 单行超出隐藏省略号显示 */
._1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* 两行超出隐藏省略号显示  */
._2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 左右浮动 */
._fl {
    float: left;
}
._fr {
    float: right;
}

/* x y 轴滚动 */
._x-s {
    overflow-x: auto;
}
._y-s {
    overflow-y: auto;
}

/* 对其方式 */
._t-c {
    text-align: center;
}
._t-l {
    text-align: left;
}
._t-r {
    text-align: right;
}

/* 绝对居中定位 */
._a-c {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* flex 居中定位 */
._f-c {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

我们还可以根据我们项目的主题，添加一些主题样式类，例如字体颜色 、背景颜色、主题色等。

```css
/* 主题色 */
/* _t 为 theme */
._t {
    color: #409eff;
}
/* 主题背景色 */
._t-bg {
    background-color: #409eff;
}
```

还有一点需要注意，尽量不要添加过多的样式类，也不要添加过于复杂的样式类。这样会增加我们学习和记忆的难度，可能会起到反效果。

## Normalize.css🗂️

> [Normalize.css](https://necolas.github.io/normalize.css/) 

Normalize.css 它修复了不同浏览器之间默认样式的差异性。可以让我们在不同的浏览器中保持样式的一致性，不需要再额外因为浏览器之间的差异性添加样式代码。

配合上我们的常用样式类，不仅能减少我们开发时间，提高开发效率。还可以减少我们的 CSS 文件大小。
