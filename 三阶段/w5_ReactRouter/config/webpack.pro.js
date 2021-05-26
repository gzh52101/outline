
const path = require('path');
const base = require('./webpack.base');
module.exports = {
    ...base,
    mode:'production',
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'js/[name].[hash:5].js',
        // publicPath:'/mange',
    },
}