const crypto = require('crypto');
const {key} = require('../config')
const {ObjectId} = require('mongodb');

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

exports.formatId = function formatId(id) {

    // ['xxxx','xxxx','xxxx']
    if (Array.isArray(id)) {
        console.log('array')
        return id.map(item => {
            console.log('item=',item,typeof item);
            return formatId(item)
        })
    }

    // {$in:['xxxx','xxxx','xxxx']}
    if (typeof id === 'object') {
        let res = {}
        for (let key in id) {
            res[key] = formatId(id[key])
        }
        return res;
    }

    if (/^[a-fA-F0-9]{24}$/.test(id)) {
        console.log('string');
        return ObjectId(id)
    }
    return id;
}