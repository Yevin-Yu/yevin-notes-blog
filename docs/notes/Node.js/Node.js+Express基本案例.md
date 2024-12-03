---
title: Node.js + Express 基本案例
author: 耶温
createTime: 2024/10/29 16:38:07
tags:
  - Node.js
  - Express
  - MySQL
permalink: /Node.js/longxhij/
---

Node.js + Express + MySQL 封装后台接口，基本案例。

## 初始化项目

新建项目文件夹，进入项目文件夹，初始化项目。

```bash
mkdir express-api
cd express-api
npm init -y
```

下载 `express` 模块，用于创建服务器。

```bash
npm install express
```

新建 `app.js` 文件，创建服务器。

```js
const express = require('express'); // 引入 express 模块
const cors = require('cors'); // 需要先要安装 cors 模块，用于解决跨域问题 npm install cors
const app = express(); //   创建服务器实例

// 中间件
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 json 数据

//  设置监听端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```


## 链接 MySQL 数据库

下载 `mysql2` 模块，用于连接 MySQL 数据库。

```bash
npm install mysql2
```

新建 `db.js` 文件，连接数据库。

```js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'xxx.xx.xx.xx', // 数据库地址
  user: 'xxxx',    //  数据库用户名
  password: 'xxxx', //  数据库密码
  database: 'xxxx',     //  数据库名称
});

module.exports = pool;
```
后续，可以在我们需要的地方引入 `db.js` 文件，使用 `db.getConnection()` 方法获取数据库连接，执行 SQL 语句，最后释放连接。

```js
const db = require('./db');

router.get('/',async (req, res) => {
    //  查询数据库
    const sql = 'SELECT * FROM users'; // SQl  语句
    const connection = await db.getConnection(); // 获取连接
    const [rows] = await connection.query(sql); // 执行 SQL 语句
    connection.release(); // 释放连接

    res.status(200).send(rows);// 返回数据
});
```

## 封装路由

根据功能模块不同，建立不同的路由文件,如 `router/user.js` 。 后续我们可以根据不同功能，在对应的文件中添加不同的接口。

```js
const db = require('./db'); // 引入数据库连接
const express = require('express');
const router = express.Router();

//  获取用户列表
router.get('/',async (req, res) => {
    //  查询数据库
    const sql = 'SELECT * FROM users'; // SQl  语句
    const connection = await db.getConnection(); // 获取连接
    const [rows] = await connection.query(sql); // 执行 SQL 语句
    connection.release(); // 释放连接

    res.status(200).send(rows);// 返回数据
});


module.exports = router;
```

在`app.js`中引入路由。

```js
const userRouter = require('./router/user'); // 引入路由
app.use('/api/user', userRouter); //加载路由 置路由前缀
```


## 限制请求频率

我们可以使用 `express-rate-limit` 模块来限制请求频率，防止恶意攻击。

```bash
npm install express-rate-limit
```

在 `app.js` 中引入 `express-rate-limit` 模块，并根据具体需要设置限制规则。

```js
const express = require('express');
const app = express();

const rateLimit = require('express-rate-limit');
// 限制请求频率
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 分钟
    max: 150, // 限制每个 IP 在 15 分钟内最多请求 100 次
    message: '请求过于频繁，请稍后再试' // 返回的错误信息
})
app.use(limiter); // 加载限制规则
```

## 测试接口

前端通过 Axios 发送请求，测试接口是否正常。

```js
import axios from 'axios';

//  获取用户列表
const getUserList = async () => {
    const res = await axios.get('http://localhost:3000/api/user');
    console.log(res.data);
}
getUserList();
```
