/*
    Webpack配置文件
        * entry: 入口（告诉webpack从哪开始分析项目）
        * output: 出口（告诉webpack把编译的文件输出到哪里）
        * devServer: 开发服务器
        * loader:    加载器
            > module.rules
        * plugins:  插件
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    // 入口文件
    entry:'./src/index.js',

    // 出口
    output:{
        path:path.join(__dirname,'./dist'),
        // 输入js文件名称：默认main.js
        filename: "js/[name]-[hash:5]-bundle.js",
        // publicPath:'/manage', // 上线文件到飞根目录时非常有用
    },

    // 开发服务器
    devServer:{
        // contentBase:path.join(__dirname,'./public'),
        static:path.join(__dirname,'./public'),
        // proxy:{

        // }
    },

    // 加载器
    module:{
        rules:[
            // 编译JSX的加载器: babel-loader
            {
                test:/\.js$/, // 匹配后缀名为.js的文件
                // loader:'babel-loader', // 简单写法（适用于不需要配置额外参数时使用）
                // use:'babel-loader'
                // use: ['babel-loader','...']
                use:[{
                    loader:'babel-loader',
                    // 对加载器的细节配置
                    options:{
                        //babel插件
                        plugins:[
                            '@babel/plugin-proposal-class-properties'
                        ], 
                        presets:['@babel/preset-react'], // 插件集
                    }
                }]
            },

            // 其他加载器
            // css加载器: 加载器的执行顺序从后往前执行
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            
            // sass加载器
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },

            // 图片
            {
                test:/\.(jpe?g|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192, // 图片小于等于8K，则以base64编码显示（减少http请求）
                        // 图pain超过8k，使用file-loader处理，路径基于output与服务器根目录
                        name: 'img/[name]-[hash:5].[ext]'
                    }
                }]
            }
        ]
    },

    // webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        
        // 创建一个html文件
        new HtmlWebpackPlugin({
            // 以某个文件作为模板创建html文件
            template:'./public/template.html',
            // filename:'login.html'
        }),

        // 复制静态资源图片到编译目录dist
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets/img", to: "img" },
                // { from: "other", to: "public" },
            ],
        })
    ]
}