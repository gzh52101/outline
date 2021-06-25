/**
 * 数组类型注解
    * 元素类型+[]
    * 泛型
    * 接口
 */
declare let arr: number[];
declare let namelist: Array<string>;
declare let person: [string, number, boolean];
declare let goodslist: {
    id: number;
    name: string;
    price: number;
    imgurl: string;
    sales: boolean;
}[];
interface IGoods {
    readonly id: number | string;
    name: string;
    price: number;
    sales_price?: number;
    imgurl: string;
    smallImgs?: string[];
    sales: boolean;
}
declare let goodsData: IGoods[];
