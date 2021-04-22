const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');

const goodsRouter = require('./goods');
const userRouter = require('./user');
const loginRouter = require('./login');
const regRouter = require('./reg');
const uploadRouter = require('./upload');

const cors = require('../filter/cors')
const permision = require('../filter/permision')

const router = express.Router();

// 格式化请求体数据
router.use(express.urlencoded(),express.json());
router.use(cors);
router.use(permision);

// /api/goods
router.use('/goods',goodsRouter)

// /api/user
router.use('/user',userRouter)

router.use('/reg',regRouter)
router.use('/login',loginRouter)

router.use('/upload',uploadRouter)

// 跨域解决方案之jsonp
router.get('/jsonp',(req,res)=>{
    // 接收全局函数名
    const {callback='getData'} = req.query;

    // 读取数据库
    let data = [{
        id:1,
        name:'goods1',
        price:998,
        imgurl:'img/goods1.jpg'
    },{
        id:2,
        name:'goods2',
        price:998,
        imgurl:'img/goods2.jpg'
    },{
        id:3,
        name:'goods3',
        price:998,
        imgurl:'img/goods3.jpg'
    }]
    res.send(`${callback}(${JSON.stringify(data)})`)
})

const allowOrigin = 'http://localhost:3000,http://localhost:8080'.split(',')
// 跨域解决方案之CORS
router.use('/cors',(req,res,next)=>{
    // 判断客户端访问的域名是否在allowOrigin中
    const currentOrigin = req.get('Origin');
    if(allowOrigin.includes(currentOrigin)){
        // res.header("Access-Control-Allow-Origin", currentOrigin);
        // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATCH,DELETE,OPTIONS");
        // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Token");

        res.set({
            "Access-Control-Allow-Origin": currentOrigin,
            "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Token"
        })

        // 处理预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            res.send('cors data')
            next();
        }
    }else{
        next();
    }
})

// 跨域解决方案之服务器代理
// 目标地址：https://offer.qfh5.cn/api/iq?sort=hot
// 代理步骤
// 1. 请求：http://localhost:2101/api/proxy/iq?sort=hot
// 2. 改为目标服务器：https://offer.qfh5.cn/api/proxy/iq?sort=hot
// 3. 删除多余路径：https://offer.qfh5.cn/api/iq?sort=hot
const proxyMiddleware = createProxyMiddleware({
    // 目标服务器
    target: 'https://offer.qfh5.cn', 
    changeOrigin: true,
    pathRewrite:{
        '^/api/proxy':'/api'
    }
})
router.use('/proxy',proxyMiddleware);

// SSR
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
router.get('/goodslist',(req,res)=>{
    // BSR: 把数据返回给前端，在前端生成html结构并渲染
    // res.send(goodslist)

    // SSR：在服务器生成html结构，并返回给前端渲染
    let result = goodslist.map(item=>{
        return `<li data-id="${item.id}">
            <h4>${item.name}</h4>
            <img src="${item.imgurl}" />
            <p class="price">价格：${item.price}</p>
        </li>`
    }).join('');
    result = '<ul class="goodslist">' + result + '</ul>'
    res.send(result);
})

module.exports = router;