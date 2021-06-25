"use strict";
/**
 * 泛型编程
 */
function createNumberArray(length, item) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(item);
    }
    return res;
}
function createStringArray(length, item) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(item);
    }
    return res;
}
function createArray(length, item) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(item);
    }
    return res;
}
createNumberArray(3, 10); // [10,10,10]
createStringArray(3, 'tiantian'); //['tiantian','tiantian','tiantian']
createArray(3, 10);
createArray(3, 'laoxie');
const goods = {
    id: 1,
    name: 'goods1'
};
const goods2 = {
    id: 'abc',
    name: 'goods1'
};
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p = new Person('laoxie');
/**
 * 类型断言
 * 明确告诉TS编译器变量的类型，格式：xxx as 类型
 */
let arr = [10, 20, 30];
// 获取第一个大于10的数字
// let num = arr.find(item=>item>10); // number|undefined
function getNumber(n) {
    if (n > 5) {
        return n + n;
    }
}
var num = getNumber(15);
let res = num + 5;
//# sourceMappingURL=main.js.map