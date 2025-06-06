---
title: Node.js版本管理 - n
author: 耶温
createTime: 2024/06/04 20:20:08
permalink: /Node.js/cznd3edy/
tags:
  - Node.js
---
## 前言

在同时开发多个项目，切换项目会发现某些项目启动不起来，查其原因。多数为 Node 版本和当前某些插件版本不兼容导致，需要卸载当前 Node.js 版本，安装所需 Node.js 版本，十分不方便。

「特别是一些 vue2.0 和 vue3.0 项目相互切换开发」。

## 使用环境

>   插件地址： https://github.com/tj/n

::: tip 提示
注意：该插件只适用于 Mac 或者 Linux，如果是 window 可以使用 nvm 版本管理软件。

我在另一篇笔记中介绍过 nvm 的使用，有兴趣的可以看看。[Node.js版本管理 - nvm](/article/fzej75xt/)
:::

## 使用方式

### 1.下载插件
```shell
npm install -g n  
// or
sudo npm install -g n
```

### 2.查看是否下载成功

```shell
n -V  
// v9.1.0
// 正常显示版本号，下载成功
```

### 3.下载对应node版本并切换至该版本
```shell
n xx 
n xx.xx
n xx.xx.x
//eg

n 14
n 14.17
n 14.17.6

//如果下载失败可以使用sudo
sudo n xx.xx.x
```

### 4.切换至对应版
```shell
n
// 如果切换不成功 可以添加  sudo n
```
输入n，回车。会出现node版本列表，上下键选择版本回车即可。

```shell
  ο node/14.17.6
    node/18.17.0

Use up/down arrow keys to select a version, return key to install, d to delete, q to quit
```
### 5.删除对应版本
```shell
n rm xx.xx.x  //删除对应版本
```
::: tip 提示
所有的下载或者删除失败，都可以尝试在命令行前 加sudo测试
:::