"use strict";
let goods = {
    id: 1,
    name: 'goods1',
    price: 100,
    imgurl: 'img/g1.jpg',
    sales: true
};
let jj = {
    name: 'jingjing',
    gender: '女',
};
let tt = {
    name: 'tiantian',
    age: 28,
    gender: '男',
    say() {
        console.log(`hello my name is ${this.name}`);
    }
};
// tt.gender = '保密'; //不可修改
//# sourceMappingURL=object.js.map