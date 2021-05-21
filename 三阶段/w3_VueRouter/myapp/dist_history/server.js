const express =  require('express')
const fs = require('fs');

const app = express();

app.use(express.static('./public'))

app.use('/api',function(){})

app.use((req,res)=>{
    fs.readFile('./public/index.html',(err,content)=>{
        console.log('content=',content);
        if(err){
            res.sendStatus(404);
        }else{
            res.set({
                'Content-Type':'text/html;charset=utf-8'
            });
            res.send(content);
        }
    })
})

app.listen(2101,()=>{
    console.log('server is runing at port 2101')
})