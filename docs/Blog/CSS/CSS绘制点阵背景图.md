---
title: CSS绘制点阵背景图 - 利用圆形渐变实现
author: 耶温
createTime: 2024/11/11 20:39:51
permalink: /article/bflodw50/
tags:
  - CSS
---

## 前言

最近在做一个项目，需要用到打点背景图，发现原本项目中使用的是点阵图片，这样会导致图片大小固定，无法根据页面大小自适应。

于是使用 ChatGPT 查询了一下，发现其实用 CSS 实现打点背景图更加简单方便，只需要几行代码就可以实现，并且还能自适应的元素大小。


## 示例代码

```html
<div class="dot-demo">
    <div class="dot-background"></div>
</div>
```
```css
.dot-demo{
    width: 100%;
}
.dot-background {
    margin: 0 auto;
    width: 300px;
    height: 200px;
    background: radial-gradient(circle, #ccc 10%, transparent 10%) 0 0,radial-gradient(circle, #ccc 10%, transparent 10%) 10px 10px; 
    background-size: 10px 10px; 
    background-repeat: repeat;
}
```

## 效果展示 

::: normal-demo 代码演示
```html
<div class="dot-demo">
    <div class="dot-background"></div>
</div>
```
```css
.dot-demo{
    width: 100%;
}
.dot-background {
    margin: 0 auto;
    width: 300px;
    height: 200px;
    background: radial-gradient(circle, pink 10%, transparent 10%) 0 0,radial-gradient(circle, pink 10%, transparent 10%) 10px 10px; /*  */
    background-size: 10px 10px; 控制点的大小和间距
    background-repeat: repeat;
}
```
:::

## 实现原理

点阵的实现主要是通过 `radial-gradient`实现。

### 1. **`radial-gradient`**

  - **`radial-gradient(circle, #ccc 10%, transparent 10%)`**:
  - `radial-gradient` 是 CSS3 中新增的渐变方式，用于创建圆形或椭圆形的渐变效果。
  - `circle` 表示渐变形状为圆形。
  - `#ccc 10%` 渐变的起始颜色，这个值表示在渐变的 10% 处，这种颜色将完全填充。
  - `transparent 10%` 渐变的结束颜色，表示在渐变的 10% 处，透明色开始出现。由于这个位置与第一个颜色的停止位置相同，意味着在这个点上，颜色会从 #ccc 直接变为透明。
::: tip 注意
由于两个颜色的停止位置相同，所以这个渐变实际上是为里面一个圆形，圆形外面是透明。如下示例中，可以明显看出。
:::
::: normal-demo 颜色位置相同 代码演示
```html
<div class="dot-demo">
    <div class="dot-background"></div>
</div>
```
```css
.dot-demo{
    width: 100%;
}
.dot-background {
    margin: 0 auto;
    width: 300px;
    height: 200px;
    background: radial-gradient(circle, pink 20%, #333 20%);
}
```
:::



### 2. **背景的叠加**

  - **`0 0` 和 `10px 10px`**
  - 这两个参数是背景图案的定位。第一个点 `radial-gradient` 在 `(0, 0)` 位置绘制，第二个在点 `(10px, 10px)` 位置绘制。
  - 第二个点会在第一个点的右下方 10 像素的位置。配合上重复背景，就可以形成点阵效果。

  
### 3. **`background-size`**

  - 该属性控制背景图案的大小和间距。
  - 设置为 `10px 10px` 可以让背景图案的大小为 10 像素。让设置好的渐变按照 `10 * 10` 的大小重复。正好和设置渐变第二个点的 `10px 10px` 对应。形成一个上下左右都有 10 像素间距的点阵。

### 4. **`background-repeat`**
  - 该属性控制背景图案的重复方式。
  - 设置为 `repeat` 可以让背景图案会在水平和垂直方向上重复，形成一个规则的点阵图案。

