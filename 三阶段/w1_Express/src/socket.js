const ws = require('ws');
const path = require('path');
const http = require('http');
const express = require('express')

// // websocket服务器
// const wsServer = new ws.Server({
//     port:1001
// });

// wsServer.on('connection',(client)=>{
//     // 监听客户端消息
//     client.on('message',(data)=>{
//         console.log('data=',data);

//         // 服务器主动给客户端发消息
//         client.send(data.repeat(10))
//     })
// })

// websocket服务器+express服务器合二为一

// express服务器
const app = express();
const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath))

// app.use('/api',allrouter);

// 利用http模块创建服务器用于连接express与websocket
const server = http.Server(app); // 连接express服务器

// 创建websokcet服务器
const wsServer = new ws.Server({
    // port:1001
    server, // 连接websocket服务器
});

wsServer.on('connection',(client)=>{
    // 监听客户端消息
    client.on('message',(data)=>{
        // 服务器接收到消息,广播给其他客户端
        // wsServer.clients: 连接服务器的客户端组成的数组[client1,client2,client3...]
        wsServer.clients.forEach(item=>{
            item.send(data);
        })
    })
})

// 注意: 必须使用中间层服务(http创建的服务器)器来监听端口
server.listen(2101,()=>{
    console.log('server is running at port 2101');
})
