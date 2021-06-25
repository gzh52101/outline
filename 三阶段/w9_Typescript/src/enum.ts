/**
 * enum枚举类型
 */

enum Code{
    Success=200,
    Fail=400,
}

interface IRes{
    code:Code,
    msg:string,
    data:any[]
}

const res = {
    code:Code.Fail,
    msg:'',
    data:[]
}