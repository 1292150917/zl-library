<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-07 14:38:08
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-07 15:09:02
-->
## unxt服务端渲染-seo
</br>
来源：小白   时间：2021年1月7日14:38:32
</br>

---
> 采用node/unxt

> 难度：简单

</br>

### unxt介绍 

Nuxt.js 是一个基于 Vue.js 的通用应用框架。

通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。

我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。

Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置。

除此之外，我们还提供了一种命令叫：nuxt generate ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

我们相信这个命令所提供的功能，是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步。

作为框架，Nuxt.js 为 客户端/服务端 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。

### 1安装

为了快速入门，Nuxt.js团队创建了脚手架工具 create-nuxt-app。

确保安装了npx（npx在NPM版本5.2.0默认安装了）：

```javascript
$ npx create-nuxt-app <项目名>
```

或者用yarn ：

```javascript
$ yarn create nuxt-app <项目名>
```

注意：这里我用两个命令报错了，为了偷懒索性我换npm安装了  npm命令为`npm init nuxt-app@latest <my-project>`

### 2目录

</br>

```javascript
|-- nuxt
    |-- .nuxt
    |-- assets //资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
    |-- components //组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。
    |-- layouts //布局目录 layouts 用于组织应用的布局组件。
    |-- middleware //middleware 目录用于存放应用的中间件。
    |-- pages //页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。
    |-- plugins //插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
    |-- static  //静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
                // 举个例子: /static/robots.txt 映射至 /robots.txt
                // 若无额外配置，该目录不能被重命名。
    |-- store   //store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。
    |-- nuxt.config.js //nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
    |-- package.json //package.json 文件用于描述应用的依赖关系和对外暴露的脚本接口。
```

### 3语法


语法基本跟vue一致下方提供几个重要的API

</br>

#### 3.1 asyncData 方法

</br>

>你可能想要在服务器端获取并渲染数据。Nuxt.js添加了asyncData方法使得你能够在渲染组件之前异步获取数据。

如：我需要请求个列表展示到页面上面去，但是我需要列表的数据也是html渲染上去的是可以被爬虫收录的。这个时候就可以为如下代码
</br>

```html
<template>
    <ul>
        <li v-for="(item, index) in list" :key="index">{{ item.good_name }}</li>
    </ul>
</template>
```
```javascript
async asyncData() {
    var list = [];
    await axios
      .get("http://127.0.0.1:8031/hosnode/mall_goods_info/queryList")
      .then((s) => {
        list = s.data.data.data;
    });
    return {
      project: "nuxt",
      list,
    };
},
```
</br>

这个时候代码中就会被渲染 如下是源代码
</br>

![charles 1](http://www.zzf9.com/admin/images/2021-01-07-fewf.jpg)
</br>

看这里接口返回的数据就被渲染成html了
</br>


### 打包

</br>

nuxt提供了两种打包方式`generate`跟`build`

"generate"和"build"打包方式主要有两个区别，文件的区别，和发布的区别
</br>

#### generate打包方式
</br>
  1-1:使用generate打包后每个对应的页面都会生成一个html，你在打包的时候不能关闭后台，他会请求后台数据生成首屏的数据</br>
  1-2:这样打包有一个弊端，当你首屏的数据发生更改的时候，对不起，他还是显示的是之前的数据，要想改变的话，需要重新打包发布才行。</br>
  1-3:所以，如果你的首屏是动态的就不建议使用这种打包方式了。</br>
  1-4:有人看到每个页面都生成了HTML页面，以为不再请求后台（我最开始就是这样认为的），实际上不是的，他的首屏数据之前渲染好了，但是其它数据还是从后台获取，比如翻页，第二页数据是从新请求后台的，你再次返回第一页也是再次请求的。</br>
</br>

#### build打包方式
</br>

    build打包生成的是动态页面，当然是同样具有SEO功能。
</br>

#### 明显区别
</br>

```javascript

generate
  使用generate打包和之前使用vue打包一样，生成一个dist文件夹，然后各种发布操作和vue一样的

build
  1、build打包就比较复杂了，他会生成一个.nuxt文件夹，然后你如果要发布的话，嘿嘿…

```