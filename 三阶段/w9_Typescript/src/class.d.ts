/**
 * Class类
    * 修饰符
        * public
        * private   私有属性
 */
declare class Person {
    type: string;
    private category;
    protected readonly key: number | string;
    constructor(name: string, age: number);
    show(): string;
}
declare class Student extends Person {
    constructor(name: string, age?: number);
    getInfo(): void;
}
declare const p: Person;
declare const s: Student;
