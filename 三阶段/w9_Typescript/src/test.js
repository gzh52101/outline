// 1. 类型注解
var username = 'laoxie';
// username = 100; // 报错
// 2.类型推论
var num = 100;
// num = true; // 报错
num.toFixed(2);
// 声明变量不指定类型，也不赋值，则变量类型被指定为any
// any类型在实际开发中很少使用，一般用于兼容一些老代码
var a; // 尽量少用这样声明一个变量
a = 100;
a = '120';
// 3. 函数
function add(a, b) {
    return a + b;
}
add(10, 20); // 30
add('10', 20); // '1020'
