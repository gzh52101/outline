const express = require('express');
const mongo = require('../db/mongo');

const router = express.Router();

const colName = 'user';

// 注册
router.post('/',async (req,res)=>{
    const {username,password} = req.body;

    // 写入数据库
    try{
        await mongo.insert(colName,{username,password})
        res.send('注册成功')
    }catch(err){
        res.send('注册失败')
    }
})

// 检测用户名是否存在
router.get('/check',(req,res)=>{

})

module.exports = router;