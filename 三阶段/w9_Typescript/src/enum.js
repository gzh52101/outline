"use strict";
/**
 * enum枚举类型
 */
var Code;
(function (Code) {
    Code[Code["Success"] = 200] = "Success";
    Code[Code["Fail"] = 400] = "Fail";
})(Code || (Code = {}));
const res = {
    code: Code.Fail,
    msg: '',
    data: []
};
//# sourceMappingURL=enum.js.map