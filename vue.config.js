/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-08-03 09:05:34
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 11:23:27
 */
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    chainWebpack: config => {
        var cdnjs = ''
        var cdncss = ''
        var cndUrl = 'https://cdn.bootcss.com'
        if (process.env.NODE_ENV === 'production') {
            function heftUrl(item) {
                return /(http|https)/.test(item) ? item : cndUrl + item
            }
            cdnjs = function () {
                return [
                    '/vue/2.6.11/vue.min.js',
                    'https://unpkg.com/element-ui/lib/index.js',
                    '/vuex/3.0.1/vuex.min.js',
                    '/axios/0.19.2/axios.min.js',
                    '/vue-router/3.2.0/vue-router.min.js',
                ].map(item => heftUrl(item))
            }
        }
        config.plugin('html')
            .tap(args => {
                cdnjs ? args[0].cdnjs = cdnjs() : ''
                cdncss ? args[0].cdncss = cdncss() : ''
                return args
            })
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader("vue-loader")
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({ raw: true })
    },
    configureWebpack: {
        externals: process.env.NODE_ENV === 'production' ? {
            vue: "Vue",
            'vue-router': 'VueRouter',
            vuex: "Vuex",
            axios: 'axios',
            "element-ui": 'ELEMENT'
        } : {},
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
}