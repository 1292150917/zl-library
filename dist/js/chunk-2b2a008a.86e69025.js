(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b2a008a","chunk-39249654"],{"00e1":function(t,e,r){"use strict";var n=r("ab2c"),s=r.n(n);s.a},"189e":function(t,e,r){var n={"./1.access_token获取.md":"3b70","./2.授权code获取openid.md":"b757"};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="189e"},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("d3b7");function n(t,e,r,n,s,a,o){try{var i=t[a](o),c=i.value}catch(l){return void r(l)}i.done?e(c):Promise.resolve(c).then(n,s)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(s,a){var o=t.apply(e,r);function i(t){n(o,s,a,i,c,"next",t)}function c(t){n(o,s,a,i,c,"throw",t)}i(void 0)}))}}},"3b70":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("1.access_token获取")]),r("br"),r("p",[t._v("来源：小白 时间：2020年12月22日17:27:50")]),r("br"),r("hr"),r("blockquote",[r("p",[t._v("环境：node，request包")])]),r("blockquote",[r("p",[t._v("难度：简单")])]),r("br"),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 使用")]),t._v("\n\ngetAccessToken({"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appid")]),t._v(":"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"xxxxx"')]),t._v(","),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("secret")]),t._v(":"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appsecret"')]),t._v("})\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/** \n    @description:access_token获取\n    @param appid {string}\n    @param secret {string}\n    @return:\n*/")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("getAccessToken")]),t._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ appid, secret }")]),t._v(") ")]),t._v("{\n\trequest({\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${appid}")]),t._v("&secret="),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${secret}")]),t._v("`")]),t._v(",\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("method")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'get'")]),t._v(",\n\t},(err,res) =>{\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v("(err){\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(err) "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//异常接口")]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v("\n\t\t}"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v("{\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("JSON")]),t._v(".parse(resv.body)) "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//用户数据")]),t._v("\n\t\t}\n\t})\n}\n")])]),r("br"),r("h5",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html"}},[t._v("》官网文档传送门《")])])])}],a=r("2877"),o={},i=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=i.exports},"8d0f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"log"},[r(t.is,{tag:"div"})],1)},s=[],a=(r("d3b7"),r("ac1f"),r("5319"),r("ddb0"),r("96cf"),r("1da1")),o=r("8bbf"),i=r.n(o),c={data:function(){return{is:"",modelKey:""}},components:{},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.created();case 1:case"end":return e.stop()}}),e)})))()},methods:{created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,r("189e");case 3:s=e.sent,t.list=s.keys(),a=t.list[n.replace(/A/,"")],i.a.component(n,r("dbf1")("".concat(a)).default),t.is=n;case 8:case"end":return e.stop()}}),e)})))()}}},l=c,u=r("2877"),p=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=p.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",i=s.toStringTag||"@@toStringTag";function c(t,e,r,n){var s=e&&e.prototype instanceof d?e:d,a=Object.create(s.prototype),o=new O(n||[]);return a._invoke=x(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",p="suspendedYield",h="executing",v="completed",f={};function d(){}function _(){}function m(){}var g={};g[a]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(T([])));b&&b!==r&&n.call(b,a)&&(g=b);var w=m.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(s,a,o,i){var c=l(t[s],t,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"===typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,o,i)}),(function(t){r("throw",t,o,i)})):e.resolve(p).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,i)}))}i(c.arg)}var s;function a(t,n){function a(){return new e((function(e,s){r(t,n,e,s)}))}return s=s?s.then(a,a):a()}this._invoke=a}function x(t,e,r){var n=u;return function(s,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===s)throw a;return N()}r.method=s,r.arg=a;while(1){var o=r.delegate;if(o){var i=k(o,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:p,c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var s=l(n,t.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,f;var a=s.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function r(){while(++s<t.length)if(n.call(t,s))return r.value=t[s],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return _.prototype=w.constructor=m,m.constructor=_,m[i]=_.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[o]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,s,a){void 0===a&&(a=Promise);var o=new L(c(e,r,n,s),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),w[i]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function s(n,s){return i.type="throw",i.arg=t,r.next=n,s&&(r.method="next",r.arg=e),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var s=n.arg;S(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(s){Function("r","regeneratorRuntime = r")(n)}},ab2c:function(t,e,r){},b041:function(t,e,r){"use strict";var n=r("00ee"),s=r("f5df");t.exports=n?{}.toString:function(){return"[object "+s(this)+"]"}},b757:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("2.授权code获取openid")]),r("br"),r("p",[t._v("来源：小白 时间：2020年12月22日17:27:50")]),r("br"),r("hr"),r("blockquote",[r("p",[t._v("环境：node，request包")])]),r("blockquote",[r("p",[t._v("难度：简单")])]),r("br"),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 使用")]),t._v("\n\ngetCode2Session({"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appid")]),t._v(":"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"xxxxx"')]),t._v(","),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("secret")]),t._v(":"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appsecret"')]),t._v("})\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/** \n    @description:授权code获取openid\n    @param appid {string} 小程序管理后台的appid\n    @param secret {string} 小程序管理后台的secret\n    @param code {string} 小程序登录code\n    @return:\n*/")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("getCode2Session")]),t._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ appid, secret, code }")]),t._v(") ")]),t._v("{\n\trequest({\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`https://api.weixin.qq.com/sns/jscode2session?appid="),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${appid}")]),t._v("&secret="),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${secret}")]),t._v("&js_code="),r("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${code}")]),t._v("&grant_type=authorization_code`")]),t._v(",\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("method")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'get'")]),t._v(",\n\t},(err,res) =>{\n\t\t"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v("(err){\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(err) "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//异常接口")]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v("\n\t\t}"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v("{\n\t\t\t"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("JSON")]),t._v(".parse(resv.body)) "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//用户数据")]),t._v("\n\t\t}\n\t})\n}\n")])]),r("p",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80"}},[t._v("》此接口文档地址《")])])])}],a=r("2877"),o={},i=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=i.exports},c478:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"log"},[r("ul",t._l(t.list,(function(e,n){return r("li",{key:n,on:{click:function(e){return t.renderUrl(n)}}},[t._v(" "+t._s(e.replace(/(\.md|\.\/)/g,""))+" ")])})),0)])},s=[],a=(r("d3b7"),r("ddb0"),{data:function(){return{list:[]}},created:function(){var t=r("189e");this.list=t.keys()},components:{},methods:{renderUrl:function(t){this.$router.push({path:"/miniProgramRender/A"+t})}}}),o=a,i=(r("00e1"),r("2877")),c=Object(i["a"])(o,n,s,!1,null,"1c91305c",null);e["default"]=c.exports},d3b7:function(t,e,r){var n=r("00ee"),s=r("6eeb"),a=r("b041");n||s(Object.prototype,"toString",a,{unsafe:!0})},dbf1:function(t,e,r){var n={".":"c478","./":"c478","./1.access_token获取.md":"3b70","./2.授权code获取openid.md":"b757","./index":"c478","./index.vue":"c478","./render":"8d0f","./render.vue":"8d0f"};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="dbf1"},ddb0:function(t,e,r){var n=r("da84"),s=r("fdbc"),a=r("e260"),o=r("9112"),i=r("b622"),c=i("iterator"),l=i("toStringTag"),u=a.values;for(var p in s){var h=n[p],v=h&&h.prototype;if(v){if(v[c]!==u)try{o(v,c,u)}catch(d){v[c]=u}if(v[l]||o(v,l,p),s[p])for(var f in a)if(v[f]!==a[f])try{o(v,f,a[f])}catch(d){v[f]=a[f]}}}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);