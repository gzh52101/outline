# 三阶段

## 三阶段课程介绍
* 第一周：NodeJS
    * mySQL
    * mongoDB
* 第2-4周：Vue
* 第5-7周：React
* 第8周：小程序
* 第9周：混合开发


## day1-1

* NodeJS: ECMAScript
    > 在nodejs中没有DOM与BOM

* nodeJS多版本共存工具：nvm
    * nvm version   查看版本
    * nvm list      查看安装列表
    * nvm install   安装node版本
    * nvm uninstall 卸载已安装的node版本
    * nvm use       切换（使用）node版本

* 模块化：commonJS规范
    * 引入： require()
        > require查找顺序
    * 导出
        * module.exports（推荐）
        * exports

* 模块化开发规范
    * commonJS      nodejs采用的规范
    * ESModule      ES6推出的模块化规范
    * AMD           require.js框架支持的规范
    * CMD           sea.js框架支持的规范

* 模块化开发的优点
    1. 更新迭代更容易
    2. 分工更容易
    3. 复用

* 模块分类
    * 内置模块：nodejs自带的模块，可以直接引用
        * http
        * fs    filesystem
        * url
        * ....
        ```js
            const fs = require('fs');
        ```
    * 自定义模块：自己编写的符合commonJS规范的模块
        > 引用路径必须采用相对路径写法
        ```js
            const tools = require('./tools')
            
        ```
    * 第三方模块: 需要通过`npm install`安装（安装到node_modules），安装完成可直接引用
        ```js
            const gulp = require('gulp');
        ```
        

* 内置模块


* mime类型
    > 每一种文件都对应有一个mime类型
    * text/plain    纯文本
    * text/html     html
    ...