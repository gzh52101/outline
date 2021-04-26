const express = require('express');

const userRouter = require('./user')
const goodsRouter = require('./goods')
const regRouter = require('./reg')
const loginRouter = require('./login')

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

router.use('/user',userRouter);
router.use('/goods',goodsRouter);
router.use('/reg',regRouter);
router.use('/login',loginRouter);


module.exports = router;