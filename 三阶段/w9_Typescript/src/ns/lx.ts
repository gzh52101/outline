namespace LX {
    // 这里声明的变量、接口、类等都处在当前命名空间内，外部无法直接访问
    type ns = number | string;
    export let username:string = 'laoxie';
    export interface IGoods{
        price:number;
        name:string;
        id:ns;
    }
}