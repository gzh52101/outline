// webpack
import Vue from 'vue'

// 引入一个.vue文件（vue的单文件组件）
import App from './App.vue'
console.log('App=',App)

// 导入模块对象中所有属性并赋值给all变量
// import * as all from './module/a';
// console.log('all=',all);

// // 默认导入
// import a from './module/a'
// // 特定导入
// import {username as myname} from './module/a'

// console.log('username=',myname);

new Vue({
  // el,
  // template,
  // 渲染方法
  // 用于创建虚拟节点的方法
  // render: createElement => createElement(App),
  render:function(createElement){
    // const vNode = createElement('div',{
    //   // class -> v-bind:class
    //   'class':{'box':true},
    //   // style->v-bind:style
    //   style:{color:'#f00'},

    //   //v-bind
    //   attrs:{myname:'laoxie'},
    //   // v-on
    //   on:{},
    //   ref:'box'
    // },[
    //   createElement('h2',{},'标题666')
    // ]);
    // console.log('vNode=',vNode);
    // return vNode;
    return createElement(App)
  }
}).$mount('#app')

{/* <div v-bind:class="xxx" v-on:click="xxx" ref="box"></div> */}