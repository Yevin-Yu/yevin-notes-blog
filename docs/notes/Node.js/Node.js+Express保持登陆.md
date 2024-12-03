---
title: Node.js + Express 保持登陆
author: 耶温
createTime: 2024/11/01 14:58:36
permalink: /Node.js/8rt7wyb3/
tags:
  - Node.js
  - Express
  - MySQL
---

Node.js+Express 通过 token 来保持用户登录状态。并且服务器保存密码哈希值，不直接保存明文密码。

主要流程：

1.  注册时，将用户密码进行哈希处理，保存到数据库中
2.  登录时，将用户输入的密码进行哈希处理，与数据库中的哈希值进行比对，如果一致，则登录成功
3.  登录成功后，生成一个 token，返回给客户端
4.  客户端将 token 存储在本地（例如 localStorage 或 cookie）
5.  客户端每次请求时，将 token 添加到请求头中
6.  服务器验证 token，如果正确，则返回请求的数据


## 注册

我们在用户注册时，使用 bcrypt 库对密码进行哈希处理，然后将哈希值保存到数据库中。不在数据库中保存明文密码。

```js
// routes/login.js
const express = require('express');
const router = express.Router();
const db = require('../../db/db');  // 引入数据库连接
const bcrypt = require('bcrypt'); // 引入 bcrypt 库

// 注册
router.post('/register', async (req, res) => {
    const { email, password, username } = req.body;
    try {
        //  查询用户信息
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();
        // 验证是否存在用户
        if (rows.length !== 0) return res.status(201).send({
            code: 201,
            message: '用户已存在'
        });
        // 创建用户
        const connection2 = await db.getConnection();
        await connection2.query('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, await bcrypt.hash(password, 10), username]);
        connection2.release();
        res.status(200).send({
            code: 200,
            message: '注册成功'
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: '系统错误'
        });
    }
})
```
如上，我们使用 `await bcrypt.hash(password, 10)` 对密码进行哈希处理，然后将哈希值保存到数据库中。

## 登陆

在用户登录时，我们同样使用 bcrypt 库对用户输入的密码进行哈希处理，然后将哈希值与数据库中的哈希值进行比对，如果一致，则登录成功。

如果登陆成功，我们使用 jsonwebtoken 库生成一个 token，返回给客户端。

```js
// routes/login.js
const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const bcrypt = require('bcrypt');

const secretKey = 'xxxx-xxxx-xxxx-xxxx-xxxx'; // 密钥
const jwt = require('jsonwebtoken'); // 引入 jsonwebtoken 库

// 登录
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        //  查询用户信息
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();
        // 验证是否存在用户
        if (rows.length === 0) return res.status(401).send({
            code: 401,
            message: '用户名或密码错误'
        });
        // 对比密码哈希
        const isPasswordValid = await bcrypt.compare(password, rows[0].password);
        if (!isPasswordValid) {
            return res.status(401).send({
                code: 401,
                message: '用户名或密码错误'
            });
        }
        // 更新最后登录时间
        const connection2 = await db.getConnection();
        await connection2.query('UPDATE users SET last_login = NOW() WHERE email = ?', [email]);
        connection2.release();

        // 验证成功，返回用户信息
        // 用户名密码验证成功，生成JWT Token
        const token = jwt.sign({ email: rows[0].email, user_id: rows[0].user_id }, secretKey, { expiresIn: '168h' });
        res.status(200).json({
            code: 200,
            message: '登录成功',
            data: {
                token: token,
            }
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: '系统错误'
        });
    }
});
```
如上，登陆成功之后，我们把邮箱和用户id 一起作为 payload 生成 token，并返回给客户端。


## 中间件验证

客户端将 token 存储在本地，并在每次请求时，将 token 添加到请求头中。服务器设置一个中间件验证 token，如果正确，则返回请求的数据。


前端请求设置 token，示例为 Vue3 + axios。
```js
// axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
```


后端设置中间件验证 token，并将用户信息存储在 req.user 中。方便后续操作。


封装一个中间件，用于验证 token 并将用户信息存储在 req.user 中。
```js
// authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = 'xxxx-xxxx-xxxx-xxxx-xxxx'; // 密钥 需要和登陆时生成的 token 保持一致
// 中间件函数
const authMiddleware = (req, res, next) => {
    // 从 cookies 中获取 token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // 提取 token

    if (!token) {
        return res.status(401).json({
            code: 401,
            message: '当前未登录，请先登录'
        });
    }
    // 验证 token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                code: 401,
                message: '登录状态已过期，请重新登录'
            });
        }
        // 将解码后的用户信息附加到请求对象上
        req.user = decoded;
        next(); // 继续处理请求
    });
};

module.exports = authMiddleware;
```

再需要验证 token 的路由中，使用该中间件。比如我们的获取用户信息的接口。
```js
// user.js
const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const authMiddleware = require('../../tools/authMiddleware');

// 获取数据接口
router.get('/', authMiddleware, async (req, res) => {
    const sql = 'SELECT username, email, last_login FROM users where user_id = ?';
    const connection = await db.getConnection();
    const [rows] = await connection.query(sql, [req.user.user_id]);
    connection.release();
    res.status(200).send({
        code: 200,
        data: rows[0],
        message: '获取用户信息成功',
    });
});
module.exports = router;
```
