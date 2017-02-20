// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from './pages/Create.vue'
import index from './pages/index.vue'
Vue.use(VueRouter)
require('!style!css!less!./assets/css/main.less');

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:index},
    {path:'/Create',component:Create}
  ]
});
/* eslint-disable no-new */
var vm = new Vue({
  router,
  el: '#app',
  template:
    `
    <div>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
    </div>
    `,
}).$mount('#app')
