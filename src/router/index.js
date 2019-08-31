import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'

Vue.use(Router);
// 把准备好路由组件注册到路由里
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
