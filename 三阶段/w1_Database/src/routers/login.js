const express = require('express');
const mongo = require('../db/mongo')
const {formatData,formatPassword} = require('../utils')
const token = require('../utils/token')

const router = express.Router();

// 登录
router.get('/',async (req,res)=>{
    // 获取前端传入的用户名和密码，查询数据库是否能匹配
    let {username,password} = req.query;

    password = formatPassword(password)


    const result = await mongo.find('user',{username,password})
    if(result.length>0){
        // 生成token并返回给前端
        const authorization = token.create({username},30);
        const data = result[0];
        data.authorization = authorization
        res.send(formatData({data}))
    }else{
        res.send(formatData({code:401}))
    }
})

module.exports = router;