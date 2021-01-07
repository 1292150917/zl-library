/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-07-14 10:49:10
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-21 18:07:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
originalReplace.replace = function replace(location) {
     return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)



const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
