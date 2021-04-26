const express = require('express');
const mongo = require('../db/mongo')
const router = express.Router();

const colName = 'goods'

router.get('/',async (req,res)=>{
    const {page=1,size=10} = req.query;
    const skip = (page-1)*size;
    const limit = size*1;
    const result = await mongo.find(colName,{},{skip,limit})
    res.send(result);
})

module.exports = router;