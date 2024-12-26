---
title: Nest JS 接收 navigator.sendBeacon 发送请求传参
createTime: 2024/12/26 21:18:58
permalink: /article/0n8kwqjh/
tags:
  - NestJS
  - JavaScript
---
`前端使用 navigator.sendBeacon 发送请求，后端接收参数时需要特殊处理`
<!-- more -->

## 问题复现

在前端页面关闭或者刷新时，我们可能会需要发送一些数据到后端，比如用户关闭页面时，我们需要记录一下用户关闭页面的时间，以便后续分析用户的行为。

在前端，我们可以使用 `navigator.sendBeacon` 方法来发送请求，这个方法会异步发送一个 HTTP 请求，并且不会阻塞页面的关闭或者刷新。


具体实现代码：

```javascript
// 前端代码
const data = {
  userId: '123',
  closeTime: new Date().toISOString(),
};

navigator.sendBeacon('/api/close', JSON.stringify(data));
```

后端代码：

```typescript
// 后端代码
@Controller('api')
export class ApiController {
  @Post('close')
  async close(@Body() body: any) {
    console.log(body);
  } 
}
```

如上面所示，我们使用 `navigator.sendBeacon` 方法发送了一个 POST 请求，请求的 URL 是 `/api/close`，请求的 body 是一个 JSON 字符串。

但是，当我们打印 `body` 时，发现 `body` 是一个空对象 `{}`，而不是我们期望的 JSON 对象。


## 问题分析

这是因为 `@Body()` 装饰器默认只能解析 `application/json` 格式的请求体，而 `navigator.sendBeacon` 发送的请求体是 `text/plain` 格式的。

我们可以通过打印 `req.headers['content-type']` 来验证这一点：

```typescript
// 后端代码
@Controller('api')
export class ApiController {
  @Post('close')
  async close(@Body() body: any, @Req() req: Request) {
    console.log(req.headers['content-type']);
    console.log(body);
  } 
}
```

## 解决方案

我们可以通过自定义中间件来解析 `text/plain` 格式的请求体，然后将解析后的数据传递给控制器。

具体实现代码：

```typescript
// text-plain.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TextPlainMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.is('text/plain')) {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // 将数据块拼接成字符串
            });
            req.on('end', () => {
                req.body = JSON.parse(body); // 将字符串解析成 JSON 对象
                next();
            });
        } else {
            next();
        }
    }
}
```

```typescript
// app.module.ts 也可以 添加到 对应的实体module中
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TextPlainMiddleware } from './text-plain.middleware';

@Module({
  //...
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 将中间件应用到对应的路由上
    consumer.apply(TextPlainMiddleware).forRoutes('api/close');
  }
}
```

设置好中间件之后，我们就可以在控制器中正常解析请求体了。

```typescript
// api.controller.ts
import { Controller, Post, Body, Req } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Post('close')
    async close(@Body() body: any, @Req() req: Request) {
        console.log(body);
    } 
}
```
通过以上代码，我们就可以成功解析 `text/plain` 格式的请求体，并将解析后的数据传递给控制器。

