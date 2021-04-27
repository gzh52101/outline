const express = require('express');
const mongo = require('../db/mongo')
const {formatData,formatPassword} = require('../utils')

const router = express.Router();

// 登录
router.get('/',async (req,res)=>{
    // 获取前端传入的用户名和密码，查询数据库是否能匹配
    let {username,password} = req.query;

    password = formatPassword(password)


    const result = await mongo.find('user',{username,password})
    if(result.length>0){
        res.send(formatData({data:result[0]}))
    }else{
        res.send(formatData({code:401}))
    }
})

module.exports = router;