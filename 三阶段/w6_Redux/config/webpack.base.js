const path = require('path'); 

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'../src/index.js'),
    resolve:{
        // 路径别名
        alias:{
            '@': path.join(__dirname,'../src'),
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
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{loose:true}],
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }],
                            // ["import", {
                            //     "libraryName": "antd-mobile",
                            //     "libraryDirectory": "es",
                            //     "style": "css" // `style: true` 会加载 less 文件
                            // },'antdm']
                        ],
                        presets:['@babel/preset-react']
                    }
                }],
                exclude:path.join(__dirname,'../node_modules')
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
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
            template:path.join(__dirname,'../public/index.html'),
            hash:true, // 给html代码中的静态资源添加随机hash值：a.jpg -> a.jpg?sdklfjsldkfj
        }),
    ]
}