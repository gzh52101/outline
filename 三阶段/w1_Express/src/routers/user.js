const express = require('express')
const router = express.Router();

const userlist = [{
    id:1,
    name:'laoxie',
    password:123456
},{
    id:2,
    name:'jingjing',
    password:123
},{
    id:3,
    name:'tiantian',
    password:1234
}];

router.get('/',(req,res)=>{
    res.send(userlist);
})

// 修改用户信息(可修改所有信息)
router.put('/:id',(req,res)=>{
    // 1.获取前端传入的数据
    // 2.修改数据库
    // 3.响应
    res.send('用户修改成功')
})

// 删除用户
router.delete('/:id',(req,res)=>{

})
// 获取用户信息
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = userlist.find(item=>item.id==id);
    res.send(user);
})

module.exports = router;