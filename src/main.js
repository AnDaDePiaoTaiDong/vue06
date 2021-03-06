// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件.
import Vue from 'vue'
import App from './App'
import router from './router'

import Resource from 'vue-resource'
Vue.use(Resource);

import axios from 'axios'
Vue.prototype.$axios = axios;

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI); //使用elementUI

Vue.config.productionTip = false;
window.bus=new Vue ();

/* eslint-disable no-new app*/
new Vue({
  el: '#app',
  router,
  //挂载组件
  components: { App },
  //使用组件
  template: '<App/>'
});
