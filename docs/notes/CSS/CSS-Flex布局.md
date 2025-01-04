---
title: Flex - 弹性布局
createTime: 2025/01/03 11:11:51
permalink: /CSS/e0ccmgow/
---
# Flex 布局

## 介绍

Flex 布局（Flexible Box Layout，简称 Flexbox），意为"弹性布局"，用来为盒状模型提供最大的灵活性。

请注意，任何一个容器都可以指定为 Flex 布局。

一句话概括：Flex 可以更加方便高效的来排列、对齐和分配容器，尤其是在较为复杂的布局中。


## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

我们可以通过 `display: flex` 或 `display: inline-flex` 来定义一个 Flex 容器。

-  区别：`display: flex` 元素为块级元素，`display: inline-flex` 元素为行内元素。


由于 Flex 的默认主轴方向是 `row` ，因此所有 Flex 项目默认会水平排列在一行。除非我们单独设置 Flex 容器的 `flex-direction` 属性。


::: normal-demo  开启 flex 布局
```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

从上面的例子中，我们可以看到，通过 `display: flex` 开启 flex 布局。容器默认会沿着主轴（水平）排列，设置 `justify-content: space-around` 使项目在主轴之间的间隔相等，设置 `align-items: center` 使项目在容器中交叉轴上居中显示。

- 主轴：Flex 容器的主轴，默认是水平方向。
- 交叉轴：与主轴垂直的轴称为交叉轴。


## Flex 容器属性

### 1. flex-direction

`flex-direction` 属性决定主轴的方向（即项目的排列方向）。


```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

-   `row`（默认值）：主轴为水平方向，起点在左端。
-   `row-reverse`：主轴为水平方向，起点在右端。
-   `column`：主轴为垂直方向，起点在上沿。
-   `column-reverse`：主轴为垂直方向，起点在下沿。

--- 


具体示例如下,分别设置主轴方向为 `row`、`row-reverse`、`column`、`column-reverse`。

::: normal-demo  1. flex-direction:row
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo  2. flex-direction:row-reverse
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo  3. flex-direction:column 
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo  4. flex-direction:column-reverse 
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::


### 2. flex-wrap

默认情况下，所有项目都排在一条线（又称"轴线"）上。`flex-wrap` 属性定义，如果一条轴线排不下，如何换行。

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

-   `nowrap`（默认）：不换行。
-   `wrap`：换行，第一行在上方。
-   `wrap-reverse`：换行，第一行在下方。
  
---

具体示例如下,分别设置 `flex-wrap` 为 `nowrap`、`wrap`、`wrap-reverse`。

::: normal-demo  1. flex-wrap:nowrap
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 200px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
可以看到,上面项目被压缩挤在一起,没有换行。

::: normal-demo  2. flex-wrap:wrap
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
如上，设置 `flex-wrap: wrap;` 后,项目换行显示。由于我们设置了 `justify-content: space-around;`，所以项目在主轴上均匀分布。并且设置了 `align-items: center;`，所以项目在交叉轴上居中对齐。

::: normal-demo  3. flex-wrap:wrap-reverse
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::
如上，设置 `flex-wrap: wrap-reverse;` 后,项目换行显示,并且第一行在下方。


### 3. flex-flow

`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

```css
.container {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
--- 

示例：

::: normal-demo  flex-flow: column wrap-reverse
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

### 4. justify-content

`justify-content` 属性定义了项目在主轴上的对齐方式。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

-   `flex-start`（默认值）：左对齐
-   `flex-end`：右对齐
-   `center`： 居中
-   `space-between`：两端对齐，项目之间的间隔都相等。
-   `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
-   `space-evenly`：每个项目之间的间隔相等，项目与容器边框之间也是等距的。

--- 
在下面示例中，我们分别设置了不同的对其方式，观察项目在主轴上的对齐方式。

::: normal-demo 1. justify-content:flex-start
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 2. justify-content:flex-end
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 3. justify-content:center
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 3. justify-content:space-between
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 3. justify-content:space-around
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

### 5. align-items

`align-items` 属性定义项目在交叉轴上如何对齐。


```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

-   `flex-start`：交叉轴的起点对齐。
-   `flex-end`：交叉轴的终点对齐。
-   `center`：交叉轴的中点对齐。
-   `baseline`: 项目的第一行文字的基线对齐。
-   `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

--- 
::: normal-demo 1. align-items:stretch
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items:stretch;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 2. align-items:flex-start
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items:flex-start;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo 3. align-items:flex-end
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items:flex-end;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo 4. align-items:center
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items:center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 5. align-items:baseline
```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2 with more text</div>
    <div class="item" style="font-size: 24px;">Item 3</div>
    <div class="item" style="font-size: 32px;">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6 with more text</div>
    <div class="item" style="font-size: 32px;">Item 7</div>
    <div class="item">Item 8</div>
</div>
```
```css
.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items:baseline;
    width: 550px;
    height: 220px;
    background: #f0f0f0;
    margin: 0 auto;
}

.item {
    background-color: #4CAF50;; 
    color: white; 
    padding: 10px;
    margin: 5px;
}

```
:::

### 6. align-content

`align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

-   `flex-start`：与交叉轴的起点对齐。
-   `flex-end`：与交叉轴的终点对齐。
-   `center`：与交叉轴的中点对齐。
-   `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
-   `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
-   `stretch`（默认值）：轴线占满整个交叉轴。
  
--- 
::: normal-demo 1. align-content:stretch
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 2. align-content:flex-start
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::
::: normal-demo 3. align-content:flex-end
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-end;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 4. align-content:center
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 5. align-content:space-between
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-between;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::

::: normal-demo 6. align-content:space-around
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  width: 100px;
  background-color: #4CAF50;
}
```
:::
## Flex 项目属性


### 1. flex-grow

`flex-grow` 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目的 `flex-grow` 属性都为1，则它们将等分剩余空间。如果一个项目的 `flex-grow` 属性为2，则它将占据两倍于其他项目的剩余空间。


::: normal-demo flex-grow
```html
<div class="container">
  <div class="item" >1</div>
  <div class="item" style="flex-grow: 2">2</div>
  <div class="item" >3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  flex-grow:1;
  margin: 10px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

### 2. flex-shrink

`flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

::: normal-demo flex-shrink
```html
<div class="container">
  <div class="item" style="flex-shrink: 2">1</div>
  <div class="item" style="flex-shrink: 0">2</div>
  <div class="item" style="flex-shrink: 1">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  flex-basis: 150px; 
  margin: 10px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

如上示例，我们通过 `flex-basis` 属性设置每个项目的宽度为150px，然后通过 `flex-shrink` 属性设置每个项目的缩小比例，当容器宽度小于450px时，项目2不会缩小，项目1和项目3会等比例缩小。同时，项目1的缩小比例是项目3的两倍。

### 3. flex-basis

`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
具体示例，可以参上面的 `flex-shrink` 示例。

### 4. flex

`flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto`。后两个属性可选。

一般设置 `flex: 1`，表示等分剩余空间。是 `flex-grow: 1` 和 `flex-shrink: 1` 和 `flex-basis: 0%` 的简写。
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

::: normal-demo flex
```html
<div class="container">
  <div class="item" style="flex-shrink: 2">1</div>
  <div class="item" >2</div>
  <div class="item" style="flex-shrink: 1">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  flex: 1 0 150px;
  margin: 10px;
  height: 100px;
  background-color: #4CAF50;
}
```
:::

如上，`flex-shrink` 中的示例，我们可以直接通过 `flex` 属性来设置。

### 5. align-self

`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

::: normal-demo align-self:auto
```html
<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  margin: 10px;
  flex: 1;
  height: 100px;
  background-color: #4CAF50;
}
.item2 {
  align-self: auto;
}
```
:::

::: normal-demo align-self:flex-start
```html
<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  margin: 10px;
  flex: 1;
  height: 100px;
  background-color: #4CAF50;
}
.item2 {
  align-self: flex-start;
}
```
:::

::: normal-demo align-self:flex-end
```html
<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  margin: 10px;
  flex: 1;
  height: 100px;
  background-color: #4CAF50;
}
.item2 {
  align-self: flex-end;
}
```
:::

::: normal-demo align-self:center
```html
<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 220px;
  background: #f0f0f0;
  margin: 0 auto;
}

.item {
  margin: 10px;
  flex: 1;
  height: 100px;
  background-color: #4CAF50;
}
.item2 {
  align-self: center ;
}
```
:::
::: normal-demo 5. align-items:baseline
```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2 with more text</div>
    <div class="item" style="font-size: 24px;">Item 3</div>
    <div class="item" style="font-size: 32px;">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6 with more text</div>
    <div class="item" style="font-size: 32px;">Item 7</div>
    <div class="item">Item 8</div>
</div>
```
```css
.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items:flex-start;
    width: 550px;
    height: 220px;
    background: #f0f0f0;
    margin: 0 auto;
}

.item {
    background-color: #4CAF50;; 
    color: white; 
    padding: 10px;
    margin: 5px;
   align-self: baseline;
}
```
:::
