// webpack
import Vue from 'vue'

// 引入一个.vue文件（vue的单文件组件）
import App from './App.vue'
console.log('App=',App)

import myPlugin from './plugins/myPlugin'

// 导入模块对象中所有属性并赋值给all变量
// import * as all from './module/a';
// console.log('all=',all);

// // 默认导入
// import a from './module/a'
// // 特定导入
// import {username as myname} from './module/a'

// console.log('username=',myname);

// 2. 定义全局指令
// Vue.directive('baseurl',function(){
//   // 这个函数= bind() + update()
// })
Vue.directive('baseurl',{
  bind(el,binding,vNode){
    // el: 指令所在的节点
    // binding: 指令信息
    console.log('bind',el,binding);
    let {arg,value:url,modifiers} = binding
    if(arg){
      if(modifiers.ssl){
        arg = arg + 's';
      }
      if(!url.startsWith('http')){
        url = arg + '://' + url

      }
    }
    el.value = url
  },
  inserted(el,binding,vNode){
    console.log('inserted',)
  },
  update(){},
  componentUpdated(){},
  unbind(){}
})

// 3. 全局过滤器
Vue.filter('uppercase',function(value){
  // value: 过滤器前面的数据
  // console.log('value=',value)
  return value.toUpperCase();
});

// 4. mixin
Vue.mixin({
  data(){
    return {
      id:123
    }
  },
  methods:{
    getData(){
      return 100;
    }
  },
  created(){
    console.log('全局mixin.created')
  }
});

// 5. 安装插件
Vue.use(myPlugin)

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