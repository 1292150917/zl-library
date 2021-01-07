<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-22 15:42:59
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-24 17:42:17
-->
## nginx基本说明
</br>
来源：小白   时间：2020年12月22日15:43:17
</br>

---
> 采用nginx+liunx

> 难度：简单

</br>

### 1.基本配置

</br>

```nginx
#运行用户
user nginx;
#启动进程,通常设置成和cpu的数量相等  auto为自适应
worker_processes auto;
# 全局错误日志
error_log /var/log/nginx/error.log;

# 包含以下文件
include /usr/share/nginx/modules/*.conf;

#工作模式及连接数上限
events {
    #单个后台worker process进程的最大并发链接数
    worker_connections 1024;
}

http {
    #设定日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    #设定日志存储地址   
    access_log  /var/log/nginx/access.log  main;

    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
    #对于普通应用，必须设为 on,
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    #连接超时时间
    keepalive_timeout   65;
    # types_hash_max_size影响散列表的冲突率。types_hash_max_size越大，
    # 就会消耗更多的内存，但散列key的冲突率会降低，检索速度就更快。
    # types_hash_max_size越小，消耗的内存就越小，但散列key的冲突率可能上升。
    types_hash_max_size 2048;
    # 包含以下文件
    include             /etc/nginx/mime.types;
    # 指定mime.types文件中没有记述到的后缀名的处理方法
    default_type        application/octet-stream;

    server {
        # 指定端口号。
        listen       80;
        server_name  plug.zzf9.com;
        location / {
            root   /home/plug;
            index  index.html index.htm;
        }
    }
}


```

</br>

### 2.server模块 

注意：案例服务器ip为：49.68.52.34（模拟IP）

</br>


####  2.1本地html转发指定页面/ip
我本地代码在服务器文件夹`/home/form`中，我需要让他通过域名/ip访问
```nginx
server {
    listen       80;
    server_name  plug.zzf9.com;
    location / {
        root   /home/form;
        index  index.html index.htm;
    }
}
```

如果代码解释为：监听80端口转发到plug.zzf9.com上面，采用 `location.root`中的index.html的代码

</br>

####  2.2监听本地端口转发域名
我需要监听本地端口`8080`并且转发到域名`plug.zzf9.com`上面则nginx中添加代码
此处为监听 `plug.zzf9.com`的80端口 然后转发到本地8080端口中  在使用upstream转发 端口的8080
```nginx
    server {
        listen 80;
        server_name plug.zzf9.com;
        location / {
            proxy_pass http://127.0.0.1:8080;
        }
    }
    upstream plug.zzf9.com {
        server plug.zzf9.com:8080 weight=1;
    }
```
如果代码解释为：监听8080端口转发到plug.zzf9.com上面  这个时候你请求 `plug.zzf9.com` 就为你请求了`49.68.52.34:8080（模拟IP:8080）`
</br>

### 3.location模块 

注意

</br>

```html
语法规则： location [=|~|~*|^~] /uri/ { … }

= 开头表示精确匹配

^~ 开头表示uri以某个常规字符串开头，理解为匹配 url路径即可。nginx不对url做编码，因此请求为/static/20%/aa，可以被规则^~ /static/ /aa匹配到（注意是空格）。以xx开头

~ 开头表示区分大小写的正则匹配                     以xx结尾

~* 开头表示不区分大小写的正则匹配                以xx结尾

!~和!~*分别为区分大小写不匹配及不区分大小写不匹配 的正则

/ 通用匹配，任何请求都会匹配到。

```

例子，有如下匹配规则：

```javascript
location = / {
   #规则A
}
location = /login {
   #规则B
}
location ^~ /static/ {
   #规则C
}
location ~ \.(gif|jpg|png|js|css)$ {
   #规则D，注意：是根据括号内的大小写进行匹配。括号内全是小写，只匹配小写
}
location ~* \.png$ {
   #规则E
}
location !~ \.xhtml$ {
   #规则F
}
location !~* \.xhtml$ {
   #规则G
}
location / {
   #规则H
}
```

那么产生的效果如下：

访问根目录/， 比如http://localhost/ 将匹配规则A

访问 http://localhost/login 将匹配规则B，http://localhost/register 则匹配规则H

访问 http://localhost/static/a.html 将匹配规则C

访问 http://localhost/a.gif, http://localhost/b.jpg 将匹配规则D和规则E，但是规则D顺序优先，规则E不起作用， 而 http://localhost/static/c.png 则优先匹配到 规则C

访问 http://localhost/a.PNG 则匹配规则E， 而不会匹配规则D，因为规则E不区分大小写。

访问 http://localhost/a.xhtml 不会匹配规则F和规则G，

http://localhost/a.XHTML不会匹配规则G，（因为!）。规则F，规则G属于排除法，符合匹配规则也不会匹配到，所以想想看实际应用中哪里会用到。

</br>

####  3.1默认显示indexdb.html

由于代码原因，我本地不存在index.html 本地就一个indexdb.html需要显示 我也不想改文件名 本地代码目录为`/usr/www`

```nginx
server {
    listen       80;
    server_name  dave.zzf9.com;
    location / {
         root   /usr/www;
         index  indexdb.html indexdb.htm;
    }
}
```
location.index 为默认显示地址 改为indexdb.html即可
</br>

####  3.2我需要配置一个静态的图片目录 并且支持访问

我前端上传的图片需要默认保存在一个地址上面 所以这里需要配置

```nginx
server {
    listen       80;
    server_name  www.zzf9.com;
    location / {
        root   /usr/www;
        index  index.html index.htm;
    }
    location /img {
        # 注意alias会把location后面配置的路径丢弃掉 alias后面配置根目录
        alias  /usr/www;
        index  index.html index.htm;
    }
}
```
location.index 为默认显示地址 改为indexdb.html即可
</br>