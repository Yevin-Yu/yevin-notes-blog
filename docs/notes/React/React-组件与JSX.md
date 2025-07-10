---
title: React-组件与JSX
createTime: 2025/07/04 10:18:34
permalink: /React/03xp2ynk/
---

## React 组件

组件是 React 应用程序的基本构建块，用于封装 UI 逻辑和呈现 UI。

1. 函数组件

```js
// 函数组件
function MyComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}
```

2. Class 组件

```js
// Class 组件
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
      </div>
    );
  }
}
```

## JSX 基本语法

JSX（JavaScript 和 XML） 是一种 JavaScript 的语法扩展，它允许开发者使用类似 HTML 的语法来描述 UI。React 使用 JSX 来描述 UI，并将其编译为 JavaScript 代码。

需要注意的是 JSX 不是浏览器原生支持的语法，因此需要使用工具（如 Babel）将其转换为标准的 JavaScript 代码。

1. 基本示例

```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
```

2. 嵌套元素：可以在 JSX 中嵌套其他元素，但是需要注意 JSX 返回的内容必须只有一个根元素。

```js
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}
```

3. 使用表达式：使用大括号 `{}` 来嵌入 JavaScript 表达式。

```js
function App() {
  const name = "React";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>currentTime：{new Date().toLocaleString()}</p>
    </div>
  );
}
```

4. 添加属性：JSX 可以为元素添加属性，属性使用驼峰命名法。

```js
function App() {
  return (
    <div>
      <img
        className="logo"
        src="https://reactjs.org/logo.svg"
        alt="React logo"
      />
    </div>
  );
}
```

5. 条件渲染：可以使用条件运算符 `?` 和 `&&` 来根据条件渲染不同的内容。

```js
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <p>Welcome, user!</p>}
    </div>
    // 或者
    <div>
      {isLoggedIn ? (<p>Welcome, user!</p>) : (<p>Please log in.</p>)}
    </div>
  );
}
```

6. 列表渲染：可以使用 `map` 方法来渲染数组中的元素。

```js
function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}
```
