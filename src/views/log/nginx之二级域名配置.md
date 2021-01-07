<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-07 16:22:47
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-07 16:40:09
-->
## nginx之二级域名配置
</br>
来源：小白   时间：2021年1月7日16:23:09
</br>

---
> 需要 已备案域名，服务器带nginx一个

> 难度：简单

</br>

此处案例为阿里云案例，具体位置请去对应的工作台查找

### 1.先解析二级域名配置

先去添加解析

![charles 1](http://www.zzf9.com/admin/images/2021-01-01-458few.jpg)

下图的

```javascript

主要是主机记录值您需要配置二级域名 
比如我的域名是 zzf9.com 
我这里可以写plug
那么我最终访问就为plug.zzf9.com
```
然后添加保存

![charles 1](http://www.zzf9.com/admin/images/2021-01-07freg.jpg)

这个时候云端的域名解析就已经完成了 是不是很简单  下面我们去配置nginx

关于nginx的基本配置 [请去查看](http://plug.zzf9.com/#/logRender/A2)

### 2.配置nginx

nginx基本配置此处不在说明 此处举例：我把home/www目录下的代码代理到二级域名上面

```nginx
    server {
        listen       80;
        server_name  plug.zzf9.com; //注意这里是解析的二级域名
        location / {
            root   /home/www;
            index  index.html index.htm;
        }
    }
```

### 3.访问地址就OK  

就是这么轻松简单