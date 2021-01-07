/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-21 18:06:31
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-28 16:44:16
 */
// hidden是否导航显示  false为不显示 默认为true
const routes = [
    {
        path: '/',
        name: 'About',
        redirect: "/curd",
        component: resolve => require(['../views/index'], resolve),
        meta: {
            name: '生成工具'
        },
        children: [
            {
                path: '/curd',
                name: 'curd',
                component: resolve => require(['../views/curd'], resolve),
                meta: {
                    name: '前端CURD生成'
                }
            },
            {
                path: '/form',
                name: 'form',
                component: resolve => require(['../views/form'], resolve),
                meta: {
                    name: 'FORM生成',
                    url: "http://form.zzf9.com/#/form",
                }
            },
        ]
    },
    {
        path: '/',
        name: 'ord',
        component: resolve => require(['../views/index'], resolve),
        meta: {
            name: '轮子'
        },
        children: [
            {
                path: '/Dave',
                name: 'Dave',
                component: resolve => require(['../views/form'], resolve),
                meta: {
                    name: 'Dave',
                    url: "http://dave.zzf9.com/",
                }
            },
            {
                path: '/vueTool',
                name: 'vueTool',
                component: resolve => require(['../views/form'], resolve),
                meta: {
                    name: 'ui组件库',
                    url: "https://1292150917.github.io/vueToolOfficial/dist/index.html#/brief"
                }
            },
        ]
    },
    {
        path: "/",
        name: "",
        component: resolve => require(['../views/index'], resolve),
        meta: {
            name: 'node快捷API',
            url: "",
        }, 
        children: [
            {
                path: "/miniProgram",
                name: "miniProgram",
                component: resolve => require(['../views/miniProgram'], resolve),
                meta: {
                    name: '微信小程序',
                },
            },
            {
                path: "/miniProgramRender/:id",
                name: "miniProgramRender",
                component: resolve => require(['../views/miniProgram/render'], resolve),
                meta: {
                    name: '微信小程序',
                    hidden: false
                },
            },
            {
                path: "/officialAccounts",
                name: "officialAccounts",
                component: resolve => require(['../views/officialAccounts'], resolve),
                meta: {
                    name: '微信公众号'
                },
            },
            {
                path: "/officialAccountsRender/:id",
                name: "officialAccountsRender",
                component: resolve => require(['../views/officialAccounts/render'], resolve),
                meta: {
                    name: '微信公众号',
                    hidden: false
                },
            },
            {
                path: "/clo",
                name: "clo",
                component: resolve => require(['../views/form'], resolve),
                meta: {
                    name: 'JS插件方式',
                    url: "http://plug.zzf9.com/out/",
                },
            },

        ]
    },
    {
        path: "/",
        name: "",
        component: resolve => require(['../views/index'], resolve),
        meta: {
            name: '个人',
            url: "",
        },
        children: [
            {
                path: "/zzf9",
                name: "zzf9",
                component: resolve => require(['../views/form'], resolve),
                meta: {
                    name: '博客',
                    url: "http://zzf9.com/",
                },
            },
            {
                path: "/log",
                name: "log",
                component: resolve => require(['../views/log'], resolve),
                meta: {
                    name: '日志',
                },
            },
            {
                path: "/logRender/:id",
                name: "logRender",
                component: resolve => require(['../views/log/render'], resolve),
                meta: {
                    name: '日志文档',
                    hidden: false
                },
            },

        ]
    }
]
export default routes
