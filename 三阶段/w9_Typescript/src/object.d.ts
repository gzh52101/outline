/**
 * 对象类型注解
    * 字面量
    * 接口Interface: 描述对象类型数据结构
 */
declare type Goods = {
    id: number;
    name: string;
    price: number;
    imgurl: string;
    sales: boolean;
};
declare let goods: Goods;
interface IPerson {
    name: string;
    age?: number;
    readonly gender: '男' | '女' | '保密';
    say?: () => void;
}
declare let jj: IPerson;
declare let tt: IPerson;
