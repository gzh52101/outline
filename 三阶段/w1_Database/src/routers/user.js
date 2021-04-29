const express = require('express');
// const mysql = require('mysql');
// const query = require('../db/mysql');
const mongo = require('../db/mongo')
const { formatData } = require('../utils');
const token = require('../utils/token')
const router = express.Router();


// //创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });


// 查询数据库：connection.query()

const colName = 'user';

// 获取所有用户
router.get('/',async (req,res)=>{
    const {page=1,size=10} = req.query;
    const skip = (page-1)*size;
    const limit = size*1;

    // 读取数据库，查询所有用户，并响应给前端
    // const sql = `select * from user`;

    // const result = await query(sql);

    // res.send(result);

    // // 连接数据库
    // connection.connect();

    // connection.query(sql,(err,result,fields)=>{
    //     console.log(err,result,fields);
    //     res.send(result)

    //     // 关闭数据库连接，释放资源占用
    //     connection.end();
    // })

    const result = await mongo.find(colName,{},{skip,limit,projection:{password:0}});

    res.send(formatData({
        data:result
    }))
});

router.get('/verify',(req,res)=>{
    // 从请求头中获取token
    const authorization = req.get('Authorization');
    const result = token.verify(authorization);
    if(result){
        res.send(formatData())
    }else{
        res.send(formatData({code:401}))
    }
})

// 新增用户
router.post('/',(req,res)=>{
    // 通过id查询用户信息，并响应给前端
    
    res.send()
})

// router.route('/:id')
// .get((req,res)=>{

// })
// .delete((req,res)=>{

// })
// .put((req,res)=>{

// })

router.get('/:id',async (req,res)=>{
    // 通过id查询用户信息，并响应给前端
    const {id} = req.params;
    const result = await mongo.find(colName,{_id:id},{projection:{password:0}})
    
    res.send(formatData({
        data:result[0]
    }))
})

router.delete('/',async (req,res)=>{
    const {ids} = req.query; // ['id1','id2','id3']
    await mongo.remove(colName,{_id:{$in:ids}})

})

// 删除用户
router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    const sql = `delete from user where id=${id}`;

    try{
        await query(sql);
        res.send('删除成功')
    }catch(err){
        res.send('删除失败')
    }

    

    // // 连接数据库
    // connection.connect();

    // // 通过id查询用户信息，并删除数据
    // connection.query(sql,(err,result,fields)=>{
    //     connection.end();
    //     if(err){
    //         return res.send(400)
    //     }
    //     res.send('删除成功')
        
    // });
    
})

// 修改用户
router.put('/:id',(req,res)=>{
    // 通过id修改用户信息
    
    res.send()
})

module.exports = router;