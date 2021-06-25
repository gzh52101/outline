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
 */
let arr = [10, 20, 30];
// 获取第一个大于10的数字
let num:number = arr.find(item => item > 10);
let res = num + 5;
