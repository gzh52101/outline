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

* 修改镜像源
    > npm config set registry=https://registry.npm.taobao.org/

## day7-4

### 复习
* 闭包
    * 垃圾回收机制
    * 变量常驻内存
    * 形成条件
        * 函数嵌套
        * 返回函数
    * 应用
* Gulp: 构建工具
    * 环境
        * NodeJS
        * npm
    * 安装
        * 全局安装：为了在命令行使用
        * 局部安装：为了在gulpfile中使用
    * 使用步骤
        1. 在根目录中创建gulpfile.js
        2. 创建任务
        3. 执行任务
    * gulp API
        * gulp.task()
        * gulp.src(globs)
        * gulp.dest()

### 知识点
* css预解析器
    * sass      功能强大
    * less      入门简单
    * stylus    综合sass和less的特点
```css
    // <div class="list"><h4>标题</h4><ul><li></li></ul></div>
    .list{
        font-size:16px;
        padding:10px;
        margin:10px;
    }
    .list h4{font-size:20px;border-bottom:2px soild #ddd;}
    .list li{padding-left:10px;border-bottom:1px dotted #ddd}

     .datalist{
        font-size:14px;
        padding:10px;
        margin:10px;
    }
    .datalist h4{font-size:20px;}
    .datalist li{padding-left:10px;border-bottom:1px dotted #ddd}

    h1{font-size:30px}
    h2{font-size:26px}
    h3{font-size:20px}
    h4{font-size:18px}
    h5{font-size:16px}
    h6{font-size:14px}

    // sass
    $pd:10px;
    .list{
        font-size:16px;
        padding:$pd;
        margin:10px;
        h4{font-size:20px;}
        li{padding-left:10px;border-bottom:1px dotted #ddd}
    }

    .datalist{ @extends .list}

    // 循环

```

* sass语法
    > 兼容所有css语法，在css中融入编程思想
    * 注释
    * 变量
        > 以$开头
        * 全局变量
        * 局部变量
            > 在局部修改全局变量：!global;
        * 默认变量
        * 特殊用法
    * 函数
        * 自定义函数
            > @function
        * 内置函数
    * mixin
        > @mixin
    * 继承： 
        > @extend
    * 循环
        * @for from xx to xxx
        * @for from xx through xxx
    * 条件
        * @if
        * @else
        * @else if
    * 运算
    * 嵌套
        > &

* sass编译
    * 依赖
        * gulp-sass
        * node-sass/sass
    ```js
        function buildSass(){
             gulp.src('./src/sass/*.scss')
            .pipe(sass({outputStyle:''}))
            .pipe(gulp.dest('./src/css'))
        }
        gulp.task('buildSass',(done)=>{
            //gulp.src('./src/sass/*.scss')
            //.pipe(sass({outputStyle:''}))
            //.pipe(gulp.dest('./src/css'))
            buildSass();
            done();
        })

        // 监听
        gulp.task('default',()=>{
            gulp.watch('./src/sass/*.scss',gulp.series('buildSass'))

        })
    ```

## day7-5

### 面试题
* 如何让声明a变量，让(a==1&&a==2&&a==3)条件成立

### 知识点
* SVN: 集中式版本管理工具(服务器挂了，SVN无法使用)
* git：分布式版本管理工具（服务器挂了，git依然可以使用）
    * 安装
    * 配置
        ```js
            git config --global user.name "Your Name"
            git config --global user.email "email@example.com"
        ```
    * 
* 版本管理工具(git/svn) 与 代码托管服务器(github/gitee/gitlap)
* git核心术语
    * 仓库：Repository
        > .git就是git仓库
        * 本地仓库
        * 公共仓库（远程仓库）
    * 工作区：Working Directory
        > .git所在的目录
    * 暂存区: stage/index
    * 版本库: Repository

* 创建仓库(仓库初始化)
    > git init
* git使用步骤
    * 本地仓库操作
        1. 添加修改删除文件
        2. 添加到暂存区: 
            * git add <文件>
            * git add <文件夹>
            * git add .
        3. 提交到版本库
            > 把暂存区中的文件提交到版本库
            * git commit -m "备注"
    * 远程仓库操作
        1. 创建远程仓库
            > 得到远程仓库地址
        2. 关联本地仓库与远程仓库
            * 添加远程仓库：git remote add origin <url>
                > 删除远程仓库：git remote remove origin
            * 克隆：git clone <url>
        3. 推送与拉取
            * 推送：把本地仓库代码推送到远程仓库
                > git push origin master （git push 远程仓库名 分支名）
            * 拉取：把远程仓库的代码拉取到本地仓库并合并代码
                * git pull origin master
                * git fetch/git merge

    * 远程仓库url
        * https
            * 每次提交都需要输入用户密码
            * 速度不如ssh快
        * ssh
            * 需要配置公钥到github账号
        

* git 常用命令
    * git status    查看仓库状态


## day7-6

### 复习
* 版本管理工具
    * SVN   集中式
    * git   分布式
* git核心术语
    * 仓库
        * 暂存区
        * 版本库
    * 工作区
* git使用
    * git init
        > .git文件夹
    * git使用
        * 本地仓库操作
            1. 增加修改删除操作
            2. git add: 把**修改**添加到暂存区
            3. git commit: 把暂存区文件提交到版本库
        * 远程仓库操作
            > github,gitlap（本地部署：在本地创建一个类似与github的服务器）,gitee,....
            * 创建
            * 关联本地仓库
                * git remote
            * 推送
                * git push
            * 拉取与合并
                * git pull
            * 克隆
                * git clone

### 知识点

* 版本回退
    * git reset
        * git reset --hard [commitid]
        * 参数
            * --hard:工作区、暂存区、版本库的文件同时回退
            * --mixed（默认）：暂存区、版本库的文件回退
            * --soft：仅仅回退版本库中的文件
    * git log
    * git reflog
* HEAD： 最新版本指针
* 过滤清单: .gitignore
    * package.json

* 分支
    * 创建：git branch <分支名>
    * 切换：git checkout <分支名>
        > 创建并切换：git checkout -b <分支名>
    * 合并：
        * 合并本地分支：git merge <分支名>
        * 合并远程分支：git merge origin/分支名
    * 删除：git branch -d <分支名>