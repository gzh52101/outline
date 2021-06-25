"use strict";
/**
 * Class类
    * 修饰符
        * public
        * private   私有属性
 */
class Person {
    constructor(name, age) {
        // 公有属性：可以在任意地方访问
        // type:string = '人类'; // 等效以下写法
        this.type = '人类';
        // 私有属性：只能在当前类中访问
        this.category = 'person';
        // 受保护属性：只能在当前类和子类中访问
        this.key = 10;
    }
    show() {
        return this.category;
        // this.key = 20; // 不能修改只读属性
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }
    getInfo() {
        this.key;
    }
}
const p = new Person('laoxie', 18);
p.type; // 人类
// p.category;// 报错
p.show();
// p.key; // 报错：不能在实例中访问受保护的属性
const s = new Student('jingjing', 38);
s.type; // 人类
// s.category;// 报错
s.show();
//# sourceMappingURL=class.js.map