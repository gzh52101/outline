/**
 * 泛型编程
 */

function createNumberArray(length:number,item:number):number[]{
    let res:number[] = []
    for(let i=0;i<length;i++){
        res.push(item);
    }
    return res;
}
function createStringArray(length:number,item:string):string[]{
    let res:string[] = []
    for(let i=0;i<length;i++){
        res.push(item);
    }
    return res;
}

function createArray<T>(length:number,item:T):T[]{
    let res:T[] = []
    for(let i=0;i<length;i++){
        res.push(item);
    }
    return res;
}

createNumberArray(3,10);// [10,10,10]
createStringArray(3,'tiantian'); //['tiantian','tiantian','tiantian']
createArray(3,10);
createArray<string>(3,'laoxie')


interface IGoods<T,U>{
    id:T,
    name:U
}

const goods:IGoods<number,string> = {
    id:1,
    name:'goods1'
}

const goods2:IGoods<string,string> = {
    id:'abc',
    name:'goods1'
}

class Person<T>{
    name:T;
    constructor(name:T){
        this.name = name
    }
}
const p = new Person<string>('laoxie')


/**
 * 类型断言
 * 明确告诉TS编译器变量的类型，格式：xxx as 类型
 */

let arr:Array<number> = [10,20,30];

// 获取第一个大于10的数字
// let num = arr.find(item=>item>10); // number|undefined
function getNumber(n):number|void{
    if(n>5){
        return n+n;
    }
}
var num = getNumber(15);

let res = num as number + 5;
