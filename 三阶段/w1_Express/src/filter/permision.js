module.exports = function(req,res,next){
    if(req.method==='DELETE'){
        if(req.isadmin){
            next();
        }else{
            res.send('你没有全权限')
        }

    }else{
        next();
    }
}