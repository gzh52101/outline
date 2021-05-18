const express = require('express');

const userRouter = require('./user')
const goodsRouter = require('./goods')
const regRouter = require('./reg')
const loginRouter = require('./login')

const svgCaptcha = require('svg-captcha')
const session = require('express-session')
const utils = require('../utils')

const multer = require('multer')
const formData = multer();
// formData.single()
// formData.array();
// formData.none();

const router = express.Router();

router.use(
    express.urlencoded({extended:true}),
    express.json(),
    express.raw(),

    // 格式化formData<文本类型数据>到req.body
    formData.none(),
)

// session
router.use(session({
    secret: 'laoxie',
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}))


router.use('/user',userRouter);
router.use('/goods',goodsRouter);
router.use('/reg',regRouter);
router.use('/login',loginRouter);

// 生成验证码
router.get('/vcode',(req,res)=>{
    const captcha = svgCaptcha.create({
        // 过滤字符
        ignoreChars:'0ol1i',
        noise:3,
    });

    // 把验证码保存在Session
    req.session.vcode = captcha.text.toLocaleLowerCase();

    console.log('captcha=',captcha);
    res.send(captcha.data)
});


module.exports = router;