<!-- App.vue是我们的主组件，页面入口文件 ，所有页面都是在App.vue下进行切换的。
 也是整个项目的关键，app.vue负责构建定义及页面组件归集。-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Notify></Notify>
    <router-link to="/hello">查看表单</router-link>
    <router-link to="/menu">查看菜单</router-link>
    <router-link to="/music">去听music</router-link>
    <!-- 路由-->
    <router-view/>

  </div>
</template>

<script>
    import Notify from "./components/Notify";
    export default {
        components: {Notify},
        name: 'App'
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
