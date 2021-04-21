const express = require('express');

// 创建一个http服务器
const app = express();

// 静态资源服务器
const static = express.static('../public',{
    // 设置缓存事件
    maxAge:1000*10
});
app.use(static)

// const middleware = function(req,res,next){
//     // req: request对象(被express处理过)
//     // res: response对象(被express处理过)
//     // next: 是一个函数,用于执行下一个中间件
//     console.log('中间件1')

//     // res.write()
//     // res.end(JSON.stringify({a:10,b:20}))
//     // res.send({a:10,b:'20'})

//     next();
// }
// app.use(middleware)
// app.use(function(req,res,next){
//     console.log('中间件2')
//     next();
// },function(req,res,next){
//     console.log('中间件3')
//     next()
// })

// app.use('/user',(req,res,next)=>{
//     console.log('user中间件')
// });

// 编写数据接口

let goodslist = [];
for(let i=0;i<10;i++){
    const goods = {
        id:i+1,
        name:'goods'+i,
        price:(Math.random()*1000).toFixed(2),
        imgurl:'img/goods'+i+'.jpg'
    }
    goodslist.push(goods)
}
// 获取所有商品
app.get('/goods',(req,res)=>{
    console.log('goodslist')
    
    res.send(goodslist)
});
// 获取指定id的商品
app.get('/goods/:id',(req,res)=>{
    // req.params = {id,a}
    // 获取动态路由参数
    const {id} = req.params;

    // const goods = goodslist.filter(item=>item.id==10)[0]
    const goods = goodslist.find(item=>item.id==id);
    res.send(goods)
});

app.post('/reg',(req,res)=>{
    res.send('注册成功')
})
app.get('/login',(req,res)=>{
    res.send('登录成功')
})


app.patch('/changepassword',(req,response对象)=>{
    res.send('修改密码成功')
});

// 修改用户信息(可修改所有信息)
app.put('/user',(req,res)=>{
    // 1.获取前端传入的数据
    // 2.修改数据库
    // 3.响应
    res.send('用户修改成功')
})

// 删除用户
app.delete('/user',(req,res)=>{

})
// 获取用户信息
app.get('/user',(req,res)=>{

})

// 监听端口
app.listen(2101,()=>{
    console.log('server is running at port 2101');
})