<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-22 11:12:39
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 14:07:44
-->
</br>

## MD文件转换html的方法 （loader的应用）
</br>
来源：小白   时间：2020年12月22日11:52:32
</br>

---
> 采用vue-markdown-loader

> 提供脚手架CLI/2.+，以及CLI/3.+的方式

> 难度：简单

</br>


### 1.安装插件vue-markdown-loader
</br>

``` javascript
npm install vue-markdown-loader -D
```
安装npm包vue-markdown-loader -D （-D就是–save-dev） 会存在`package.json`的`devDependencies`这个里面
</br></br>

### 2.修改配置webpack
(vue/cli3)脚手架的vue.config.js  如果未存在可以新建

```javascript

module.exports = {
    chainWebpack:config =>{
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader("vue-loader")
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({ raw: true })
    }
}

```

(vue/cli2)脚手架的 build/webpack.base.conf.js

```javascript
module.exports = {
    module:{
        rules:[
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
            }
        ]
    }
}
```
</br>

### 3.使用MD

</br>

```html
<template>
    <MD><MD>
</template>
```

```javascript
import MD from './md'
export default{
    components:{
        MD
    }
}
```
</br>

### 4.问题

</br>

#### 4.1代码不会高亮

采用插件工具例如：`highlight`

index.html的 cdn引入

```javascript
<link rel="stylesheet" href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css">
<script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>
```

觉得丑可以把css下载到本地 然后修改本地样式即可

</br>

采用highlight的loader  请自行百度