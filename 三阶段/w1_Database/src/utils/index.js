const crypto = require('crypto');
const {key} = require('../config')

exports.formatData = function({code=200,data=[],msg='success'}={}){
    if(code === 400 && msg=='success'){
        msg = 'fail'
    }else if(code === 401 && msg=='success'){
        msg = 'no permission'
    }
    return {
        code,
        data,
        msg
    }
}


exports.formatPassword = function(password){
    const hash = crypto.createHash('sha256');

    hash.update(password+key);

    password = hash.digest('hex');
    return password;
}