"use strict";
// 函数类型注解
// 声明式：指定参数与返回值类型
function add(a, b) {
    return a + b;
}
// 赋值式: 处理指定函数参数与返回值类型，还需要指定变量类型
let sum = function (a, b) {
    return a + b;
};
// 可选参数
sum(10, 20);
sum(10); // 不报错，因为第2个参数可选
// sum(10,20,30);//报错，多了一个参数
function getData(url, page = 1, ...res) {
    console.log('getData', url, page, res);
}
getData('/api/list');
//# sourceMappingURL=function.js.map