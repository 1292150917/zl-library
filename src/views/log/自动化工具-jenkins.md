<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-23 09:52:25
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-23 10:35:32
-->


## 自动化工具-jenkins

</br>

环境：java liunx

来源：小白   时间：2020年12月23日09:52:42

</br>

---

> 难度：简单

> 友情说明：jenkins只是java开发的，如果你熟悉java的raw包更好，但是你不熟悉也不妨碍你使用。

</br>

### 1.首先确保java和maven正常工作。

</br>

```javascript
Java配置：使用 java -version 查看是否安装java
maven安装：使用 mvn -v 查看是否安装有maven
```


</br>

### 2.yum安装Jenkins


</br>

这里推荐使用yum方式安装Jenkins，最简单方便。

yum的repos中默认是没有Jenkins的，需要先将Jenkins存储库添加到yum repos。

```javascript
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```
</br>

```javascript
yum install jenkins
```

随后就可以看到系统开始自动下载安装。
出现提示是否下载的时候输入y并按回车。
耐心等待安装完成。

![charles 1](http://www.zzf9.com/admin/images/1608689165.jpg)


</br>

### 3.启动

</br>

修改完配置后，保存退出。
好了，现在配置文件也修改好了，可以启动Jenkins了。
输入启动命令以启动Jenkins服务。

```Javascript
service jenkins start
```
![charles 1](http://www.zzf9.com/admin/images/fwefb.jpg)
出现OK表示Jenkins启动成功。
在浏览器输入ip:8081进入Jenkins登录页面。


</br>

### 4.环境


</br>

进入后显示页面

![charles 1](http://www.zzf9.com/admin/images/b454.jpg)

进入登录页面后，Jenkins提示我们需要输入超级管理员密码进行解锁，根据提示，我们可以在`/var/lib/jenkins/secrets/initialAdminPassword`文件里找到密码。

输入命令以找到密码。

```javascript
tail /var/lib/jenkins/secrets/initialAdminPassword
```

找到密码后，复制密码，粘贴到Jenkins解锁页面，点击Continue继续初始化配置。短暂的等待后，进入插件安装页面

![charles 1](http://www.zzf9.com/admin/images/fwe45.jpg)

这里我们点击的`Install suggested plugins`，安装默认插件，当然你也可以点击另一个按钮安装指定的插件  插件是可以后面补充的

点击后，页面进入了插件下载安装页面

```javascript
安装插件，有时候会报类似的错误：An error occurred during installation: No such plugin: cloudbees-folder
 
上面的错误显示是，安装插件cloudbees-folder失败，是因为下载的Jenkins.war里没有cloudbees-folder插件，
 
                      需要在网上下载：http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/
 
下载cloudbees-folder.hpi放在 /var/lib/jenkins/plugins  即可
```

![charles 1](http://www.zzf9.com/admin/images/vretreter789.jpg)

耐心等待全部安装完成。安装完成后，页面自动进入了管理员账户注册页面

![charles 1](http://www.zzf9.com/admin/images/fewg43a.jpg)

输入完信息点击`Save and Finish`。

出现下一步骤继续`start using jenkins`

![charles 1](http://www.zzf9.com/admin/images/bdrte4.jpg)

至此，Jenkins安装并初始化完成了


</br>

### 5.配置


</br>

默认情况是Jenkins是使用Jenkins用户启动的，但这个用户目前系统并没有赋予权限，这里我们将启动用户修改为root；
另外Jenkins默认端口是8080，这个跟tomcat的默认端口冲突，我们也修改一下默认端口。
输入命令进入Jenkins配置文件


`vi`编写文件`/etc/sysconfig/jenkins`jenkis配置地址可自行修改
`vi`进入以后按键`a`进入编写模式

```javascript
vi /etc/sysconfig/jenkins
```


在配置文件中往上滑 找到JENKINS_USER="jenkins"  `jenkins`可能是其他内容 
里面找到JENKINS_PORT="8030"
再次修改端口

![charles 1](http://www.zzf9.com/admin/images/v4444444444.jpg)

此处修改配置

```javascript
JENKINS_USER="root"
JENKINS_PORT="8081"
```

![charles 1](http://www.zzf9.com/admin/images/v804.jpg)

修改完配置后，保存退出。 

```javascript
按完esc后输入冒号（英文的），然后就转换到了末行模式了，末行模式决定是否保存文件。
```

末行模式下可以按x来保存，`x`命令可以保存编辑好的文件。

也可以用到wq来保存，如果是`q!`则不保存的。


好了，现在配置文件也修改好了，可以重新启动Jenkins了。

```Javascript
启动 service jenkins start

重启 service jenkins restart

停止 service jenkins stop
```