---
title: DOM事件流与事件委托
createTime: 2025/01/14 16:21:02
permalink: /article/hi817y1c/
tags:
  - HTML 
  - JavaScript
---

# DOM事件流与事件委托

## 事件流

事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点与根节点之间按照特定的顺序传播，这个传播过程即DOM事件流。


```txt
Document
    |
Body
    |
Div (parent)
    |
Button (target)
```

-   捕获阶段（Capturing Phase）：事件从根节点开始向下传播，直到到达目标节点。
    -   Document -> Body -> Div -> Button
-   目标阶段（Target Phase）：事件到达目标节点，此时可以在目标节点上处理事件。
    -   Button
-   冒泡阶段（Bubbling Phase）：事件从目标节点向上返回，直到根节点。
    -   Button -> Div -> Body -> Document
  
**事件捕获与冒泡**

- 捕获和冒泡：事件流允许开发者在事件传播的不同阶段（捕获阶段和冒泡阶段）添加事件处理程序。这种灵活性使得开发者可以根据需要选择在事件传播的哪个阶段处理事件。
- 选择性处理：开发者可以选择在捕获阶段处理某些事件，而在冒泡阶段处理其他事件，从而实现更复杂的交互逻辑。

1. 捕获阶段处理

要在捕获阶段处理事件，可以在 addEventListener 方法中将第三个参数设置为 true。这表示事件处理程序将在事件从根节点向目标节点传播时被调用。

2. 冒泡阶段处理

要在冒泡阶段处理事件，可以在 addEventListener 方法中将第三个参数设置为 false（或者不传递该参数，因为默认值就是 false）。这表示事件处理程序将在事件从目标节点向根节点传播时被调用。

:::details 示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件捕获与冒泡示例</title>
    <style>
        #outer {
            padding: 20px;
            background-color: lightblue;
        }
        #inner {
            padding: 20px;
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <div id="outer">外层元素
        <div id="inner">内层元素</div>
    </div>

    <script>
        const outer = document.getElementById('outer');
        const inner = document.getElementById('inner');

        // 捕获阶段处理
        outer.addEventListener('click', function(event) {
            console.log('捕获阶段：外层元素被点击');
        }, true); // 第三个参数为 true，表示捕获阶段

        // 冒泡阶段处理
        inner.addEventListener('click', function(event) {
            console.log('冒泡阶段：内层元素被点击');
        }); // 默认是冒泡阶段，第三个参数为 false 或不传

        // 冒泡阶段处理
        outer.addEventListener('click', function(event) {
            console.log('冒泡阶段：外层元素被点击');
        }); // 默认是冒泡阶段
    </script>
</body>
</html>
```
:::

**事件传播控制**
```js
event.stopPropagation(); // 阻止事件冒泡
```
**阻止默认行为**
```js
event.preventDefault(); // 例如阻止链接的默认跳转行为
```


## 事件委托

事件委托是一种将事件处理程序添加到父元素而不是每个子元素的技术。通过事件委托，可以利用事件的冒泡特性，在父元素上处理子元素的事件。这种方法可以减少内存使用，提高性能，尤其是在有大量子元素的情况下。

**优点：**

-    减少内存使用：不需要为每个子元素添加事件处理程序，只需要在父元素上添加一个事件处理程序。
-    动态添加元素：当动态添加子元素时，不需要重新绑定事件处理程序。
-    简化代码：不需要为每个子元素编写重复的事件处理代码。


**示例：**
```html
<div id="parent">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```
```js
const parentElement = document.getElementById('parent');
parentElement.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    console.log('Button clicked:', target.textContent);
  }
});
```
