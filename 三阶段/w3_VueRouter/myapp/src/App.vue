<template>
  <div id="app">
    <h1>VueRouter路由</h1>
    <nav>
      <!-- <ul> -->
      <router-link v-for="item in menu" :key="item.path" :to="item.path" tag="span" active-class="current">{{item.text}}</router-link>
      <!-- </ul> -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      menu:[{
        path:'/home',
        text:'首页'
      },{
        path:'/login',
        text:'登录'
      },{
        path:'/reg',
        text:'注册'
      },{
        path:'/mine',
        text:'我的'
      }]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav span{margin:0 10px;}
.current{color:#f00;font-weight: bold}
</style>
