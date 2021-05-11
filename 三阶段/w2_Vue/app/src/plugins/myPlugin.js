/**
 * Vue插件
    * 一个对象（提供install方法）
    * 一个函数
 */

const myPlugin = {
    install:function(Vue){
        // 插件功能
        // 1. 添加全局方法和属性
        Vue.ajax = function(url){

        }
        Vue.tags = '厉害的Vue，牛逼的Vue';

        // 2. 指令，过滤器
        Vue.directive('focus',{
            inserted(el){
                el.focus();
            }
        })
        Vue.filter('formatMoney',(values)=>{
            return values
        })
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

          // 原型方法
        // 所有的组件实例都基于Vue的原型
          Vue.prototype.ajax = ()=>{

          }
    }
}

export default myPlugin;


// 使用
// Vue.use(myPlugin);