const express = require('express')

// 创建一个路由中间件
const router = express.Router();


let goodslist = [];
for(let i=0;i<100;i++){
    const goods = {
        id:i+1,
        name:'goods'+i,
        price:(Math.random()*1000).toFixed(2),
        imgurl:'img/goods'+i+'.jpg'
    }
    goodslist.push(goods)
}
// 获取所有商品
// /goods
router.get('/',(req,res)=>{
    console.log('goodslist=',req.query);
    const {page=1,size=10} = req.query;

    // [0,1,2,3,...99]
    // page     index
    // 1        0
    // 2        10
    // 3        20
    // 推导公式: index = (page-1)*size
    const index = (page-1)*size;
    const end = index+size*1;
    const result = goodslist.slice(index,end);
    
    res.send(result)
});
// 获取指定id的商品
// /goods/10
router.get('/:id',(req,res)=>{
    // req.params = {id,a}
    // 获取动态路由参数
    const {id} = req.params;

    // const goods = goodslist.filter(item=>item.id==10)[0]
    const goods = goodslist.find(item=>item.id==id);
    res.send(goods)
});

router.delete('/:id',(req,res)=>{
    // 获取动态路由参数
    const {id} = req.params;

    // const goods = goodslist.filter(item=>item.id==10)[0]
    goodslist = goodslist.filter(item=>item.id!=id);
    res.send(`删除商品${id}成功`)
});

router.post('/',(req,res)=>{
    console.log('query=',req.query)
    console.log('body=',req.body)
    res.send('添加商品成功')
})

module.exports = router;