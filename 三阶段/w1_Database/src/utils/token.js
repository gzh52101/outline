const jwt = require('jsonwebtoken');

const key = 'lx+jj';

// 生成token
exports.create = function create(data,expiresIn='1h'){
    const token = jwt.sign(data,key,{expiresIn})
    return token;
}

// 校验token
exports.verify = function verify(token){
    try{
        const data = jwt.verify(token,key)
        return true;
    }catch(err){
        return false;
    }
}