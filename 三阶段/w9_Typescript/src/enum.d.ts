/**
 * enum枚举类型
 */
declare enum Code {
    Success = 200,
    Fail = 400
}
interface IRes {
    code: Code;
    msg: string;
    data: any[];
}
declare const res: {
    code: Code;
    msg: string;
    data: never[];
};
