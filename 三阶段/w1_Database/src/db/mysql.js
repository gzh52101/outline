const mysql = require('mysql');


// //创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });
// module.exports = function query(sql){
//     connection.connect();
//     return new Promise((resolve,reject)=>{
//         connection.query(sql,(err,result,fields)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(result);
//             }

//             connection.end();
//         })
//     })
// }

// 使用连接池方式（官方是推荐）
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
});

module.exports = function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,result,fields)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}