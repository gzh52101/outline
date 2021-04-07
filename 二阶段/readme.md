# 笔记

## day7-1: 继承与闭包

### 继承
* 原型链：当前对象到Object的原型对象之间的链条
    * 原型：原型对象(`prototype`,`__proto__`)
        > 在js中，一切皆对象，任何的对象都存在原型
    * 属性访问规则：在原型链中查找
        > 1. 先从当前对象中查找，找到则返回，否则进入第2步
        2. 在原型对象中查找，找到则返回，否则进入第3步
        3. 在原型对象的原型中查找，找到则返回，否则继续往原型中查找，依此类推
        4. 直到Object的原型对象中查找（终点），找到则返回，否则（属性：得到undefined，方法：xxx is not a function）
* 内置原型对象
    ```js
        let username = 'jingjing';
        username.toUpperCase();
        username.length;// 8
    ```
    * 类型
        * Number
        * String
        * Boolean
        * Array
        * Function
        * Date
        * RegExp
        * ...
    * 扩展内置原型对象
        > 原则：判断不存在时才添加
    * 重置原型对象：一次性扩展多个方法
        > 避免覆盖原始属性/方法
        ```js
            if(!Date.prototype.formatDate){
                Date.prototype.formatDate = function(){}
            }
            if(!Date.prototype.fromNow){
                Date.prototype.fromNow = function(){}
            }
            // ...

            // 重置原型对象
            Date.prototype = {
                formatDate(){},
                fromNow(){},
                //...
                ...Date.prototype,
            }
        ```
        * Object.assign(target,obj1,obj2,...,objN)

* 继承方式
    * 原型链继承法
        > 核心：拿父类实例来充当子类原型对象
    * 借用构造函数法
        > 核心：借父类的构造函数来增强子类实例，相当于把父类的实例属性复制一份给子类实例
        * Fn.call/Fn.apply
    * 组合继承(最常用的继承方式)
        * 继承属性：借用构造函数法
        * 继承方法：原型链继承法
        * 缺点（原型链继承法的缺点）：
            1. 在原型对象中生成多余的属性
            2. 多次执行父类构造函数
    * 原型式继承(原型链继承法升级版)
        > 核心：先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时构造函数的一个新实例
    * 寄生组合继承法（完美解决方案）
        * 继承属性：借用构造函数法
        * 继承方法：原型式继承法


## day7-2

### 面试题
1. 说说call & apply & bind三者的共同和不同点

### 复习
* 继承
    * 原型对象
        * 理解原生js对象对应的原型
    * 原型链
        * 属性访问规则
    * 继承方式
        * 原型链继承法
        * 借用构造函数法
            * call()
            * apply()
        * 原型式继承法
            * 封装：inherit()
            * ES5: Object.create()
### 知识点
* ES6类继承
    * 实例属性
    * 原型方法
    * 静态方法（类方法）
        ```js
            function User(){

            }
            User.hello = function(){}

            User.hello();
        ```

* call&apply的使用
* 闭包
    > 闭包是指有权访问另一函数作用域中的变量的函数
    * 特点
        * 函数嵌套
        * 返回内部函数
    * 垃圾回收机制
        * 自动
        * 回收方式
            * 引用计数（IE6）
            * 标记清除
    
* Gulp
    * 环境安装
        * NodeJS
        * npm
    * gulp安装
        * 全局安装：npm install -g gulp
            > 一台电脑只需要安装一次，gulp -v 查询安装是否成功
            * 全局安装gulp是为了执行gulp任务
        * 本地安装：npm install gulp
            > 每个项目都需要安装一次
            * 本地安装为了在gulpfile.js文件中使用gulp
    * 使用步骤
        1. 在根目录下创建`gulpfile.js`文件
            * gulpfile.js就是一个nodejs模块
        2. 创建任务
        3. 运行任务
            > gulp 任务名

* NodeJS模块：commonJS规范
    1. 安装： npm install
    2. 引用: require()