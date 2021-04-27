const express = require('express')
const path = require('path')
const allRouter = require('./routers')
const app = express();

// 静态资源服务器
const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath))

// 数据接口
app.use('/api',allRouter)

const PORT = 2101;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})