// @react-app-rewired 2.0版前的配置
// const path = require('path');
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // 修改配置
//     // 添加路径别名
//     // config.resolve.alias['@'] = path.join(__dirname,'./src/')
//     Object.assign(config.resolve.alias,{
//         '@':path.join(__dirname,'./src/'),
//         '$':path.join(__dirname,'./src/components')
//     })

//     // 添加babel插件
//     // config.module.rules[0].use[0].options.plugins
//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);
//     config = injectBabelPlugin(
//         ['@babel/plugin-proposal-class-properties',{loose:true}],
//         config
//     );

//     // 返回最终修改的配置
//     return config;
// }

// @ 2.0+ 的配置: 把所有配置方法移置到了customize-cra模块
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    useBabelRc,
    fixBabelImports
} = require('customize-cra');

module.exports = override(
    // addDecoratorsLegacy(),
    // addBabelPlugin(),
    useBabelRc(),
    disableEsLint(),
)