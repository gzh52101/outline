const express = require('express');

const goodsRouter = require('./goods');
const userRouter = require('./user');
const loginRouter = require('./login');
const regRouter = require('./reg');
const uploadRouter = require('./upload');

const router = express.Router();

// 格式化请求体数据
router.use(express.urlencoded(),express.json());
router.use((req,res,next)=>{
    console.log('headers=',req.get('user-agent'))
    next();
})

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

module.exports = router;