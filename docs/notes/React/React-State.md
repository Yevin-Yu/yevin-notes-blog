---
title: React-State
createTime: 2025/07/04 14:24:40
permalink: /React/un0oimhz/
---

在 React 中，组件的状态（state）是指组件内部的数据，它可以随着用户交互、网络请求等事件而发生变化。组件的状态可以通过 `useState` 钩子函数来定义和管理。

React 中的 state 类似于 Vue 中的 data，但是 React 中的 state 是不可变的，每次修改 state 都需要调用 `setState` 方法来触发组件的重新渲染。

## 函数组件

```js
import { useState } from "react";
function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加计数</button>
    </div>
  );
}
export default Test;
```

## Class 组件

```js
import React from "react";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>当前计数：{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          增加计数
        </button>
      </div>
    );
  }
}
export default Test;
```

数据修改

1. State 直接修改数据是无效的：必须通过对应的方法来修改 State 才能触发视图更新。
2. State 的修改是一个浅合并的过程。类似于 Object.assign() 方法。

## 数组对象

```js
// 函数组件
function App() {
  const [arr, setArr] = useState([
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
  ]);
  // 增加
  const add = () => {
    setArr([...arr, { id: 3, name: "王五" }]);
  };
  // 删除
  const del = (id) => {
    setArr(arr.filter((item) => item.id !== id));
  };
  // 更新
  const update = (id) => {
    setArr(
      arr.map((item) => (item.id === id ? { ...item, name: "赵六" } : item))
    );
  };
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => del(item.id)}>删除</button>
            <button onClick={() => update(item.id)}>更新</button>
          </li>
        ))}
      </ul>
      <button onClick={add}>增加</button>
    </div>
  );
}
export default App;
```

```js
// Class 组件
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
      ],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.arr.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => this.del(item.id)}>删除</button>
              <button onClick={() => this.update(item.id)}>更新</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.add()}>增加</button>
      </div>
    );
  }
  // 增加
  add() {
    this.setState({
      arr: [...this.state.arr, { id: 3, name: "王五" }],
    });
  }
  // 删除
  del(id) {
    this.setState({
      arr: this.state.arr.filter((item) => item.id !== id),
    });
  }
  // 更新
  update(id) {
    this.setState({
      arr: this.state.arr.map((item) =>
        item.id === id ? { ...item, name: "赵六" } : item
      ),
    });
  }
}
export default App;
```
