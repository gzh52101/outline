<template>
  <!-- 这里的代码在编译阶段由webpack处理 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <hello-world></hello-world> -->
    Hello H5 2101
    <Parent/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Parent
  },
  // template:'<div>test</div>',
  // render(createElement){
  //   return createElement('div',{attrs:{id:'app'}},[
  //     createElement('img',{attrs:{alt:'Vue logo',src:'./assets/logo.png'}}),
  //     createElement(HelloWorld)
  //   ])
  // }
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
</style>
