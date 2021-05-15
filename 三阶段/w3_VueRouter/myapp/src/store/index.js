import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // 核心配置
    // state: 状态，类似于组件中的data
    state:{
        cartlist:[{
            _id: 1,
            goods_name: "goods1",
            price: 1998,
            sales_price: 998,
            img_url:
              "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
            qty: 2
          },
          {
            _id: 2,
            goods_name: "goods2",
            price: 1998,
            sales_price: 998,
            img_url:
              "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
            qty: 1
          },
          {
            _id: 3,
            goods_name: "goods3",
            price: 1998,
            sales_price: 998,
            img_url:
              "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
            qty: 1
          }],
    },
    // getters: 类似于组件中的computed属性
    getters:{
        totalPrice(state){
            return state.cartlist.reduce((prev,item)=>prev+item.sales_price*item.qty,0)
        },
        count(state){
            return state.cartlist.length;
        }
    },
    // mutation: 修改state的唯一方式，类似于组件中的methods
    mutations:{
        addToCart(state,payload){
            // state: 上面的state
            // payload: 调用addToCart时传入的参数
            state.cartlist.unshift(payload)
        },
        removeCart(state,id){
            state.cartlist = state.cartlist.filter(item=>item._id != id);
        },
        clearCart(state){
            state.cartlist = []
        },
        changeGoodsQty(state,{id,qty}){
            console.log('changeGoodsQty',id,qty)
            state.cartlist = state.cartlist.map(item=>{
                if(item._id == id){
                    item.qty = qty;
                }
                return item;
            })
        }
    }
});

console.log('store=',store);

export default store;