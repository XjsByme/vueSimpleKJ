// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 引入主文件
import App from './App'
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'
Vue.use(VueRouter)
Vue.use(VueResource)
    /* eslint-disable no-new */
let router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Goods,
        redirect: '/goods'
    }, {
        path: '/goods',
        component: Goods
    }, {
        path: '/ratings',
        component: Ratings
    }, {
        path: '/seller',
        component: Seller
    }]
})
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
