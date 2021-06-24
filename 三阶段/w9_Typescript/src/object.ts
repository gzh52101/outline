/**
 * 对象类型注解
    * 字面量
    * 接口Interface: 描述对象类型数据结构
 */
type Goods = {
    id: number,
    name: string,
    price: number,
    imgurl: string,
    sales: boolean
}
let goods: Goods = {
    id: 1,
    name: 'goods1',
    price: 100,
    imgurl: 'img/g1.jpg',
    sales: true
}

// 用于描述一个对象的属性结构
interface IPerson {
    name: string;

    // 可选属性
    age?: number;

    // 只读属性
    readonly gender: '男' | '女' | '保密';

    // 函数
    say?:()=>void;

    // 任意属性（不推荐）
    // [s:string]:any
}

let jj: IPerson = {
    name: 'jingjing',
    gender: '女',
}
let tt: IPerson = {
    name: 'tiantian',
    age: 28,
    gender: '男',
    say(){
        console.log(`hello my name is ${this.name}`)
    }
}
// tt.gender = '保密'; //不可修改