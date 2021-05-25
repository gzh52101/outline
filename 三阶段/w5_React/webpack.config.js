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
                        plugins:[], //插件
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
            }
        ]
    },

    // webpack插件
    plugins:[
        // 创建一个html文件
        new HtmlWebpackPlugin({
            // 以某个文件作为模板创建html文件
            template:'./public/template.html',
            // filename:'login.html'
        })
    ]
}