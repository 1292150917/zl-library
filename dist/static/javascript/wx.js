/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-24 14:22:26
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-28 14:25:31
 */

/** 全局参数
    @description:全局参数
    @param access_token {string} 必填 接口调用凭证  
    @return:
*/

/** 
    access_token获取
    @example   
    getAccessToken({appid:"xxx",secret:""})
    @param appid {string}
    @param secret {string}
    @return:
*/
async function getAccessToken({ appid, secret }) {
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
            method: 'get',
        }, (err, res) => {
            if (err) {
                reject(err)
                return
            } else {
                Promise(JSON.parse(res.body))
            }
        })
    })
}

/** 
    code换取openid
    @example  getCodeOpenId({appid:"xxx",secret:"",code:""})
    @param appid {string} 公众号管理后台的appid
    @param secret {string} 公众号管理后台的secret
    @param code {string} 前端返回的code
    @return:
*/

function getCodeOpenId({ appid, secret, code }) {
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`,
            method: 'get',
        }, (err, res) => {
            if (err) {
                reject(err)
                return
            } else {
                Promise(JSON.parse(res.body))
            }
        })
    })
}

/** 
    openid获取基本用户信息
    @example  getUserInfo({ openid, access_token})
    @description:openid获取基本用户信息
    @param openid {string} 个人信息的openid
    @return:
*/
function getUserInfo({ openid, access_token }) {
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${access_token}&openid=${openid}&lang=zh_CN`,
            method: 'get',
        }, (err, res) => {
            if (err) {
                reject(err)
                return
            } else {
                Promise(JSON.parse(res.body))
            }
        })
    })

}

/** 
    发送模板消息
    @example  templateSend({ touser, template_id, url, miniprogram, data, appid, pagepath, access_token})
    @description:发送模板消息
    @param touser {string} 必填 接收者openid
    @param template_id {string} 必填 模板ID  
    @param data {string} 必填 模板数据  
    @param url {string} 否 模板跳转链接（海外帐号没有跳转能力）  
    @param miniprogram {string} 否 跳小程序所需数据，不需跳小程序可不用传该数据  
    @param appid {string} 必填 所需跳转到的小程序appid（该小程序appid必须与发模板消息的公众号是绑定关联关系，暂不支持小游戏）  
    @param pagepath {string} 否 所需跳转到小程序的具体页面路径，支持带参数,（示例index?foo=bar），要求该小程序已发布，暂不支持小游戏
    @param color {string} 否 模板内容字体颜色，不填默认为黑色  
    @return:
*/
function templateSend({ touser, template_id, url, miniprogram, data, appid, pagepath, access_token }) {
    var _miniprogram = miniprogram || null
    if (appid && typeof miniprogram !== 'object') {
        _miniprogram = {
            appid,
            pagepath: pagepath || null
        }
    }
    var fromData = {
        touser,
        template_id,
        url: url || null,
        miniprogram: _miniprogram,
        data
    };
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${access_token}`,
            method: 'POST', //请求方式，默认为get
            headers: {
                //设置请求头
                'content-type': 'application/json'
            },
            body: JSON.stringify(fromData)
        }, (error, response, body) => {
            if (err) {
                console.log(err) //异常接口
                reject(err)
                return
            } else {
                if (!error && response.statusCode == 200) {
                    console.log(response.body) //发送完成
                    Promise(response.body)
                }
            }
        })
    })
}


/** 
    开发接入
    @example  templateSend({ token})
    @description:开发接入
    @param token {string} 必填 令牌(Token)
    @return:
*/
function getOpenDev({ token }) {
    return Promises((Promise, reject) => {
        try {
            var crypto = require('crypto'); //引入加密模块
            var signature = req.query.signature,//微信加密签名
                timestamp = req.query.timestamp,//时间戳
                nonce = req.query.nonce,//随机数
                echostr = req.query.echostr;//随机字符串
            //2.将token、timestamp、nonce三个参数进行字典序排序
            var array = [token, timestamp, nonce];
            array.sort();
            //3.将三个参数字符串拼接成一个字符串进行sha1加密
            var tempStr = array.join('');
            const hashCode = crypto.createHash('sha1'); //创建加密类型 
            var resultCode = hashCode.update(tempStr, 'utf8').digest('hex'); //对传入的字符串进行加密
            //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
            if (resultCode === signature) {
                res.send(echostr);
            } else {
                res.send('mismatch');
            }
            Promise(true)
        } catch (error) {
            reject(error)
        }
    })
}


/** 
    获取模板列表
    @example  templateSend({ access_token})
    @description:获取模板列表
    @param access_token {string} 必填 接收者openid
    @return:
*/
function getTemplateList({ access_token }) {
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/cgi-bin/template/get_all_private_template?access_token=${access_token}`,
            method: 'get',
        }, (err, res) => {
            if (err) {
                console.log(err) //异常接口
                reject(err)
                return
            } else {
                console.log(JSON.parse(resv.body)) //用户数据
                Promise(JSON.parse(resv.body))
            }
        })
    })

}


/** 
    删除模板
    @example  templateSend({  access_token, template_id })
    @description:删除模板
    @param access_token {string} 接口调用凭证
    @param template_id {string} 模板ID
    @return:
*/
function deleteTemplateList({ access_token, template_id }) {
    return Promises((Promise, reject) => {
        request({
            url: `https://api.weixin.qq.com/cgi-bin/template/del_private_template?access_token=${access_token}`,
            method: 'POST', //请求方式，默认为get
            headers: {
                //设置请求头
                'content-type': 'application/json'
            },
            body: JSON.stringify({ template_id })
        }, (error, response, body) => {
            if (err) {
                console.log(err) //异常接口
                Promise(reject)
                return
            } else {
                if (!error && response.statusCode == 200) {
                    console.log(response.body) //发送完成
                    Promise(response.body)
                }
            }
        })
    })

}
async function Promises(callback) {
    return new Promise((Promise, reject) => {
        callback(Promise, reject)
    })
}