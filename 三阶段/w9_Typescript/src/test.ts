// 1. 类型注解
let username:string = 'laoxie';
// username = 100; // 报错

// 2.类型推论
let num = 100;
// num = true; // 报错
num.toFixed(2)

// 声明变量不指定类型，也不赋值，则变量类型被指定为any
// any类型在实际开发中很少使用，一般用于兼容一些老代码
let a; // 尽量少用这样声明一个变量
a = 100;
a = '120'


// 3. 函数类型
function add(a:number,b:number):number{
    return a+b;
}

add(10,20);// 30
// add('10',20);// '1020'
function show(visibility:boolean):void{
    const box = document.getElementById('box');
    box.style.display = visibility ? 'block' : 'none';
}
let getData:(url:string,page:number,size:number)=>void = function(url:string,page:number,size:number):void{

}

// 4. 字面量类型
// 表示这个变量只能是字面量对应的值
let qty:10 = 10; // 类似于const qty:number = 10;
// qty = 100; // 报错

// 5. 联合类型
let index:number|string = 10;
let gender:'男'|'女'|'保密' = '男'
gender = '女'

// 6. 类型别名
// 给类型设置一个名称
type Gender = '男'|'女'|'保密';
let xingbie:Gender = '女'
let xb:Gender = '保密'