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
