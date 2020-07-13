var GenerateAssetPlugin = require('generate-asset-webpack-plugin')
var createServerConfig = function(compilation) {
    let cfgJson = {
        // 默认指向 window.location.origin
        baseURL: ''
    }
    return JSON.stringify(cfgJson)
}

module.exports = {
    // publicPath: ProjectConfig.publicPath,
    productionSourceMap: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: {
        plugins: [
            new GenerateAssetPlugin({
                filename: 'serverconfig.json',
                fn: (compilation, cb) => {
                    cb(null, createServerConfig(compilation))
                },
                extraFiles: []
            })
        ]
    },
    //configureWebpack: (config) => {},

    // 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件
    // (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
    // 如果你试图修改这些插件的选项，请确认运行 vue inspect
    pages: {
        index: {
            // page的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist 的输出为 index.html
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '首页'
        }
    },
    // @vue/cli-plugin-pwa插件
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
}
