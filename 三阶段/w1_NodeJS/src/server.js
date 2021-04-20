const http = require('http');

// 创建一个http服务器
const server = http.createServer(function(request,response){
    // request: 请求对象（保存从客户端传来的信息）
    // response: 响应对象（可以通过该对象给客户端响应内容）

    // 设置状态码与响应头
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })

    response.write('<h1>利用http模块创建静态服务器</h1>');
    response.write('hello <strong>jingjing</strong>');

    // 结束响应
    response.end('<p><----------我是有底线的---------></p>');

});

server.listen(2101,()=>{
    console.log('服务器启动成功...')
})