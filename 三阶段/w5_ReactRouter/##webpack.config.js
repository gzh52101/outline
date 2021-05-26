
const path = require('path'); 

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/[name].[hash:5].js',
        // publicPath:'/mange',
    },
    devServer:{
        // contentBase:path.join(__dirname,'./public'),
        static:path.join(__dirname,'./public'),
        // proxy:{
        // }
    },
    resolve:{
        // 路径别名
        alias:{
            '@': path.join(__dirname,'./src'),
            '$': '@/components',
        },

        // 模块模块扩展名
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        plugins:['@babel/plugin-proposal-class-properties'],
                        presets:['@babel/preset-react']
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.s[ca]ss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        // new HtmlWebpackPlugin({
            // template:'./public/index.html',
        //     filename:'login.html'
        // }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/index.html')
        }),
    ]
}