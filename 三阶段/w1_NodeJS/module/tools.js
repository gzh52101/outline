// 定义一个函数
const sum = (a,b)=>{
    return a+b;
}

// 导出：module.exports
// module.exports = {
//     sum,
//     test:'test'
// };

// exports导出：module.exports的引用
exports.sum = sum;
exports.div = function(){
    console.log('div')
};