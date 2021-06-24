/**
 * 数组类型注解
    * 元素类型+[]
    * 泛型
    * 接口
 */

// 元素类型+[]
let arr:number[] = [10,20,30]

// 泛型
let namelist:Array<string> = ['laoxie','jingjing','tiantian']


// 元组Tuple
// 固定长度与类型的数组
let person:[string,number,boolean] = ['laoxie',18,true]

person = ['10',20,false]

// 数组中包含对象
// 字面量
let goodslist:{id:number,name:string,price:number,imgurl:string,sales:boolean}[] = [
    {id:1,name:'goods1',price:100,imgurl:'img/g1.jpg',sales:true},
    {id:2,name:'goods2',price:120,imgurl:'img/g2.jpg',sales:false},
    {id:3,name:'goods3',price:130,imgurl:'img/g3.jpg',sales:true},
]
// 接口
interface IGoods{
    readonly id:number|string,
    name:string,
    price:number,
    sales_price?:number,
    imgurl:string,
    smallImgs?:string[],
    sales:boolean
}
// let goodsData:Array<IGoods> = []
let goodsData:IGoods[] = [
    {id:1,name:'goods1',price:100,imgurl:'img/g1.jpg',sales:true},
    {id:2,name:'goods2',price:120,imgurl:'img/g2.jpg',sales:false},
    {id:3,name:'goods3',price:130,imgurl:'img/g3.jpg',sales:true},
]