const express = require('express');
const mongo = require('../db/mongo');
const {formatData,formatPassword} = require('../utils')


const router = express.Router();

const colName = 'user';

// 注册
router.post('/',async (req,res)=>{
    let {username,password} = req.body;

    console.log('password1=',password)
    // 加密密码
    password = formatPassword(password)

    console.log('password2=',password)

    // 写入数据库
    try{
        await mongo.insert(colName,{username,password})
        // res.send('注册成功')
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:400}))
    }
})

// 检测用户名是否存在
router.get('/check',async (req,res)=>{
    const {username} = req.query;

    const result = await mongo.find(colName,{username});
    if(result.length > 0){
        res.send(formatData({code:400}))
    }else{
        res.send(formatData())
    }
})

module.exports = router;