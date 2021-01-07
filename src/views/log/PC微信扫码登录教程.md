<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-23 11:20:58
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-25 15:41:58
-->
## PC微信扫码登录教程
</br>
来源：小白   时间：2020年12月22日15:33:21
</br>

---
> 需要微信开放平台账号

> 难度：一般

</br>

### 1.创建网站应用 获取AppID和AppSecret

</br>

#### 1.1基本信息

</br>

选择创建网站应用，没什么可说的

![charles 1](http://www.zzf9.com/admin/images/log-12-23-1.jpg)

根据以下步骤配置内容

```javascript
注意图片尺寸跟网站应用尺寸

这里的图片为一个大logo 一个小logo
```
![charles 1](http://www.zzf9.com/admin/images/log-20-12-23-2.jpg)

确认进行下一步

</br>


#### 1.2网站信息 -回调域名

</br>

这里是让你配置一个回调域名就好了，就是说扫码以后他需要跳回到那个域名 就通俗的为回调域名

![charles 1](http://www.zzf9.com/admin/images/log-20-12-23-35v.jpg)

提交审核后为成功

</br>

#### 1.3提交成功

</br>

![charles 1](http://www.zzf9.com/admin/images/b9d46bb029202683fc4883ac93f6d20.png)


</br>

#### 1.4.查看审核信息


</br>

![charles 1](http://www.zzf9.com/admin/images/log-20-12-23-v15.jpg)

点击查看后 可以查看审核详情页面 

![charles 1](http://www.zzf9.com/admin/images/log-20-12-23-gwre.jpg)

等待审核通过后拿到appid

![charles 1](http://www.zzf9.com/admin/images/log-20-12-24-vfg3.jpg)

如上图 appid是自动送的 但是AppSecret 需要手动生成操作  

生成也很简单 管理员扫码 然后查看AppSecret（请自主保存 以免丢失）


</br>

### 2生成二维码

</br>

#### 2.1  跳转页面扫码方式

</br>



效果

![charles 1](http://www.zzf9.com/admin/images/log-20-12-24-vte.jpg)

```javascript

/** 
    @description:通过code获取access_token的接口
    @param appid {string} 应用唯一标识，在微信开放平台提交应用审核通过后获得
    @param redirect_uri {string} 页面跳转回调地址
    @param response_type {string} 写死为code
    @param scope {string} 应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login
    @return:
*/

// 页面跳转方式
window.open(openWeiXin({ appid: "", redirect_uri: 'xxx'))

 function openWeiXin({ appid, redirect_uri, response_type = "code", scope = 'snsapi_login', style = '', href = '' }) {
     return `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&style=${style}&href=${href}&scope=${scope}#wechat_redirect`
 }

```

</br>

扫码登录即可 这个时候他会给你回调域名里面添加code  请继续通过code操作即可

</br>

#### 2.2  内置自己代码中

</br>

效果

![charles 1](http://www.zzf9.com/admin/images/log-20-12-24-45674.jpg)

第一步先引入cdn

```javascript
<!-- 支持https -->
<script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>

```

第二步在使用的地方写方法

```javascript


var obj = new WxLogin({
 self_redirect: true,
 id: "login_container", //容器id  他会自动在容器中添加img
 appid: "appid",
 scope: "snsapi_login",
 redirect_uri: "redirect_uri",
 state: "",
 style: "black",
 href: ""
);

```
| 参数	 | 是否必须	| 说明
| :----  | :----  | :----  |
| self_redirect	 | 否	| true：手机点击确认登录后可以在 iframe 内跳转到 redirect_uri，false：手机点击确认登录后可以在 top window 跳转到 redirect_uri。默认为 false。
| id	 |是	| 第三方页面显示二维码的容器id
| appid	 |是	| 应用唯一标识，在微信开放平台提交应用审核通过后获得
| scope	 |是	| 应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
| redirect_uri	 | 是	| 重定向地址，需要进行UrlEncode
| state	 |否	| 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验
| style	 |否	| 提供"black"、"white"可选，默认为黑色文字描述。详见文档底部FAQ
| href	 |否	| 自定义样式链接，第三方可根据实际需求覆盖默认样式。详见文档底部FAQ
</br>


扫码登录即可 这个时候他会给你回调域名里面添加code  请继续通过code操作即可

</br>

### 3扫码成功获取code

</br>

扫码成功的跳转URL为：`https://plug.zzf9.com?code=091K7T000lL9TK1vTS000nSWDn2K7T0Q&state=` 其中code为微信扫码返回的code 注意前端获取 有大用

### 根据code获取access_token跟openid

注意access_token注意存储 并且access_token会两小时过期一次
具体逻辑为，前端拿到code掉接口发送给后端 后端去请求接口获取用户access_token跟openid继续操作  所以前端只用把code给后端

#### 3.1通过code掉用接口

前端代码

```javascript
// 省略...
// 拿到code去掉接口给 后端
```

node代码

---
> 环境：node，request包

> 难度：简单

</br>

```javascript

// 使用

getAccessToken({appid:"xxxxx",secret:"appsecret"})

/** 
    @description:通过code获取access_token的接口
    @param appid {string} 应用唯一标识，在微信开放平台提交应用审核通过后获得
    @param secret {string} 应用密钥AppSecret，在微信开放平台提交应用审核通过后获得
    @param code {string} 填写第一步获取的code参数
    @return:
*/
function getUauth2Token({ appid, secret,code }) {
	request({
		url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`,
		method: 'get',
	},(err,res) =>{
		if(err){
			console.log(err) //异常接口
			return
		}else{
			console.log(JSON.parse(resv.body)) //用户数据
		}
	})
}


```

正确返回应该为

```json
{
    "access_token":"ACCESS_TOKEN", //接口调用凭证
    "expires_in":7200, //access_token接口调用凭证超时时间，单位（秒）
    "refresh_token":"REFRESH_TOKEN", //用户刷新access_token
    "openid":"OPENID", //授权用户唯一标识
    "scope":"SCOPE" //用户授权的作用域，使用逗号（,）分隔
}
```

</br>

#### 4获取个人信息 利用openid

前端把openid发给后端 后端请求用户数据给前端 或者后端自己拿openid请求wx的接口去拿用户信息


前端代码

```javascript
// 省略...
// 拿到code去掉接口给 后端
```

node代码

---
> 环境：node，request包

> 难度：简单

</br>

```javascript

// 使用

getAccessToken({appid:"xxxxx",secret:"appsecret"})

/** 
    @description:获取用户个人信息（UnionID机制）
    @param access_token {string} 调用凭证
    @param openid {string} 普通用户的标识，对当前开发者帐号唯一
    @param lang {string} 国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语，默认为zh-CN
    @return:
*/
function getSnsUserinfo({ access_token, openid,lang }) {
	request({
		url: `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=${lang || 'zh-CN'}`,
		method: 'get',
	},(err,res) =>{
		if(err){
			console.log(err) //异常接口
			return
		}else{
			console.log(JSON.parse(resv.body)) //用户数据
		}
	})
}


```

正确返回应该为

```json
{
    "openid":"OPENID",
    "nickname":"NICKNAME",
    "sex":1,
    "province":"PROVINCE",
    "city":"CITY",
    "country":"COUNTRY",
    "headimgurl": "https://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
    "privilege":[
        "PRIVILEGE1",
        "PRIVILEGE2"
    ],
    "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"
}
```


### 友情链接

</br>

[微信开放平台](https://open.weixin.qq.com/) 
</br>

[文档地址](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)
