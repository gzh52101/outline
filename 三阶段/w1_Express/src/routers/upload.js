const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// 1.简单上传：设置上传文件路径(目录不存在会自动创建)
// let uploadMiddleware = multer({ dest: '../public/uploads/avatar' })

// 2. 控制上传细节
// 配置上传参数
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，只有一层目录时可自动创建
    destination:'../public/uploads/avatar',

    // 格式化文件名
    filename: function (req, file, cb) {
        console.log('file=',file);
        // 获取文件后缀名
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})

// 设置文件保存目录
let uploadMiddleware = multer({storage});

// /api/upload/avatar
router.post('/avatar',uploadMiddleware.single('avatar'),(req,res)=>{
    // multer.single()中间件会把请求体中文件格式化到req.file属性
    console.log('file=',req.file);
    res.send('头像上传成功')
})

// /api/upload/goods
router.post('/goods',uploadMiddleware.array('goods',5),(req,res)=>{
    // multer.array()中间件会把请求体中文件格式化到req.files属性
    console.log('files=',req.files);
    console.log('body=',req.body);
    res.send('商品上传成功')
})

module.exports = router;