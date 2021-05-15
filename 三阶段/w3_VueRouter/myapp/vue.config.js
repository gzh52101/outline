module.exports = {
    lintOnSave:'warning',
    devServer:{
        proxy:{
            '/api':{
                // 目标服务器
                target: 'https://10.3.133.6:2101', 
                changeOrigin: true,
                pathRewrite:{
                    '^/api/':'/api'
                },
            },
            '/jd':{
                target: 'https://www.jd.com', 
            }
            
        }
    }
}