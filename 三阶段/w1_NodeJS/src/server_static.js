const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = require('./mime');
const url = require('url');

/**
 * 静态资源服务器
 *  - 根据不同的访问路径响应不同的内容
 */
const server = http.createServer((req, res) => {
    // 获取访问路径
    // console.log('url=',req.url)
    // if(req.url === '/favicon.ico'){
    //     res.end('')
    // }else if(req.url === '/index.html'){
    //     // 读取index.html内容
    //     fs.readFile('./index.html',(err,content)=>{
    //         // err: 读取失败时的错误信息，默认为null
    //         console.log('content=',content.toString());
    //         res.writeHead(200,{
    //             'content-type':'text/html;charset=utf-8'
    //         })
    //         res.end(content)
    //     });

    // }else if(req.url.startsWith('/img')){
    //     // 转成绝对径路：
    //     // '/img/didi.jpeg' -> F:\mydoc\kphone\class\gz_h5_2101\三阶段\w1_NodeJS\src\img\didi.jpeg
    //     const realPath = path.join(__dirname,req.url);

    //     // 获取图片扩展名
    //     const ext = path.extname(req.url).slice(1);
    //     console.log('ext',ext);

    //     fs.readFile(realPath,(err,content)=>{
    //         // err: 读取失败时的错误信息，默认为null
    //         res.writeHead(200,{
    //             'content-type':`${mime[ext]};charset=utf-8`
    //         })
    //         res.end(content)
    //     });
    // }

    const { pathname } = url.parse(req.url);
    const realpath = path.join(__dirname, pathname);
    const extname = path.extname(pathname).substring(1);

    fs.readFile(realpath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/plain;charset=utf8' });
            res.end('404');
            return;
        }
        res.writeHead(200, { 'content-type': mime[extname] + ';charset=utf8' });
        res.end(data);
    })

})

server.listen(2101, () => {
    console.log('server is runing on port 2101...')
})