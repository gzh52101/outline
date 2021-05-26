
const path = require('path');
const base = require('./webpack.base');
module.exports = {
    ...base,
    mode:'development',
    devServer:{
        // contentBase:path.join(__dirname,'./public'),
        static:path.join(__dirname,'../public'),
        // proxy:{
        // }
    },
}