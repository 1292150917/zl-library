/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-07-14 10:49:10
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-07 16:21:26
 */ 
import Vue from 'vue'
import ElementUI from 'element-ui';
import router from './router'
import App from './App.vue';
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
