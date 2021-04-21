const express = require('express');

const goodsRouter = require('./goods');
const userRouter = require('./user');
const loginRouter = require('./login');
const regRouter = require('./reg');
const uploadRouter = require('./upload');

const router = express.Router();

// 格式化请求体数据
router.use(express.urlencoded(),express.json());

// /api/goods
router.use('/goods',goodsRouter)

// /api/user
router.use('/user',userRouter)

router.use('/reg',regRouter)
router.use('/login',loginRouter)

router.use('/upload',uploadRouter)

module.exports = router;