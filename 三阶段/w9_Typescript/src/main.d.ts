/**
 * 泛型编程
 */
declare function createNumberArray(length: number, item: number): number[];
declare function createStringArray(length: number, item: string): string[];
declare function createArray<T>(length: number, item: T): T[];
interface IGoods<T, U> {
    id: T;
    name: U;
}
declare const goods: IGoods<number, string>;
declare const goods2: IGoods<string, string>;
declare class Person<T> {
    name: T;
    constructor(name: T);
}
declare const p: Person;
/**
 * 类型断言
 * 明确告诉TS编译器变量的类型，格式：xxx as 类型
 */
declare let arr: Array<number>;
declare function getNumber(n: any): number | void;
declare var num: number | void;
declare let res: number;
