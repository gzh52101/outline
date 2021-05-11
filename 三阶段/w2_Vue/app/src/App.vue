<template>
  <!-- 这里的代码在编译阶段由webpack处理 -->
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <hello-world></hello-world> -->
    Hello H5 2101
    <!-- <Parent/> -->
    <!-- <TodoList/> -->
    <!-- <input v-baseurl:http="'jingjing.com'" /> -->
    <Test />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Parent from './components/Parent.vue'
import TodoList from './components/TodoList/TodoList.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',

  // 父组件共享数据：provide
  provide:{
    money:10000000,
    house:10,
    qq:666688,
    company:'alimama'
  },
  components: {
    // HelloWorld,
    Parent,
    TodoList,
    Test,
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
