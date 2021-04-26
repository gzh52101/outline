const express = require('express')
const allRouter = require('./routers')
const app = express();

// 静态资源服务器
app.use(express.static('../public'))

// 数据接口
app.use('/api',allRouter)

const PORT = 2101;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})