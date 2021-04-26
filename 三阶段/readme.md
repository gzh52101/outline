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
    * http
    * path
    * url
    * fs

* mime类型
    > 每一种文件都对应有一个mime类型
    * text/plain    纯文本
    * text/html     html
    ...

## day1-2

### 复习
* Node: ECMAScript
    > 2009推出的服务端语言
* REPL
* 请求（requst）与响应（response）
    * url参数
    * 请求头与请求体
    * 响应头与响应体
* 模块化开发
    > 每个模块具有独立作用域，要使用模块中的变量，必须导出
    * 优点
        * 复用
        * 分工
        * 更新迭代
    * 规范
        * commonJS      NodeJS（后端，同步）
        * ESModule      ES6（前端，同步）
        * AMD           require.js（前端，异步）
        * CMD           sea.js（前端，异步）
    * 使用
        * 引入
            > 引入模块
            * commonJS: `require()`
            * ESMoudle: `import`
            * AMD/CMD: `require()`
        * 导出
            > 暴露接口
            * commonJS: `module.exports` 与 `exports`
            * ESModule: `export`
            * AMD/CMD: `define()`
    * 分类
        * 内置模块（原生模块）
        * 自定义模块
        * 第三方模块
* 静态资源服务器
    > 静态资源: 图片，js，css，html，字体等文件
    * 依赖模块
        * http
        * url
        * path
        * fs
    * mime类型
        > 服务告诉浏览响应的内容类型(响应头：Content-Type)

## 知识点

* express/koa
    * 中间件（middleware）
        * 定义：是一个函数
        * 使用中间件：`use([path],middleware...)`
            ```js
                app.use(function(){})
            ```
        * 分类
            * 内置中间件: express自带的中间件
                * express.static()
                * express.Router()
                * express.urlencoded()
                * express.json()
            * 自定义中间
                * 参数: `(req,res,next)=>{}`
            * 第三方中间
* 浏览器缓存
    * 强制缓存: 200 from cache
        > 缓存时间未过期,浏览器直接从本地获取
    * 协商缓存: 304
        > 缓存时间已过,浏览器发请求到服务器进行询问,如果服务的文件没有修改,则返回304,浏览器直接从本地获取(如果服务器文件有修改,服务器返回新的文件,状态码为200)
* RESTful规范
    > 要求使用不同的**请求类型**和**路径**实现相应的接口功能
    * 请求类型
        * get       查
        * post      增
        * put       改(全改)
        * patch     改(部分修改)
        * delete    删
* 路由
    * 获取请求参数
        * 动态路由: `req.params`
        * url参数: `req.query`
        * 请求体:
            > 通过请求体发送的数据,必须通过对应的中间件处理
            * x-www-form-urlencode: express.urlencode()
            * json: express.json
            * ...
    * 图片上传
        * multer

## day1-3

### 复习
* express / koa
    * 中间件Middleware
        * 内置中间件
        * 自定义中间件
        * 第三方中间件
    * 处理请求参数
        * url参数: req.query
        * 动态路由: req.params
        * 请求体: 
            * req.body
            * req.file
            * req.files
        * 请求头: req.get()
    * RESTful接口规范
        * 请求类型
        * 请求地址
    * 模块化路由
        * express.Router()
* 浏览器缓存
    * 协商缓存: 304
    * 强制缓存: 200 from cache
* formData  

* 学习要求
    * 查看文档的能力
        * 技术文档
        * 需求文档
    * 查找问题的能力
    * 解决问题的能力
    * 描述问题的能力

### 知识点
* 跨域
    * 为什么存在跨域限制
    * 解决方案
        * JSONP
        * CORS: Cross Origin Resource Sharing
            > 需要目标服务求授权（通过响应头）才能跨域访问数据
            * Access-Control-Allow-Origin
                * 单域名
                * `*`
            * Access-Control-Allow-Methods
            * Access-Control-Allow-Headers
        * 代理
            * http-proxy-middleware
        * iframe
        * postMessage
    * 复杂跨域
* 过滤器
    > 用于控制接口访问权限

* 页面渲染模式
    * 客户端渲染： BSR
        > 通过ajax请求数据到前端遍历生成html结构再渲染到页面（页面开始是空页面）
        * 优点
            * 局部刷新
            * 用户体验
            * 用户交互
    * 服务器渲染： SSR
        > 页面结构和内容在服务器生成后再返回给前端渲染
        * 优点
            * SEO搜索引擎优化
            * 速度较快
* 爬虫
    * 分析html结构
    * request
    * cheerio

* 作业：
    1. 爬取一个网站的数据到本地json文件（包括图片）
    2. 编写接口, 包含CRUD


## day 1-4

###  知识点
* mock数据
    > json-server
* nodeJS包管理工具
    * npm
        * npm install
        * npm uninstall
        * npm init
        * npm list
        * npm login
        * npm publish
    * cnmp
    * yarn
        * 安装： yarn add <模块名>
        * 安装依赖： yarn/yarn install
        * 卸载： yarn remove <模块名>
    * npm脚本
        * 添加添加：添加到package.json中的scripts
        * 运行脚本：npm run <脚本名称>