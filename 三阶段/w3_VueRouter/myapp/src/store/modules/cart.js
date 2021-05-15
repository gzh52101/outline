import request from '../../utils/request';
import { Message } from 'element-ui'

export default {
    // 核心配置
    // state: 状态，类似于组件中的data
    state: {
        cartlist: [],
    },
    // getters: 类似于组件中的computed属性
    getters: {
        totalPrice(state) {
            return state.cartlist.reduce((prev, item) => prev + item.sales_price * item.qty, 0)
        },
        count(state) {
            return state.cartlist.length;
        }
    },
    // mutation: 修改state的唯一方式，类似于组件中的methods
    mutations: {

        addToCart(state, payload) {
            // state: 上面的state
            // payload: 调用addToCart时传入的参数
            state.cartlist.unshift(payload)
        },
        removeCart(state, id) {
            state.cartlist = state.cartlist.filter(item => item._id != id);
        },
        clearCart(state) {
            state.cartlist = []
        },
        changeGoodsQty(state, { id, qty }) {
            console.log('changeGoodsQty', id, qty)
            state.cartlist = state.cartlist.map(item => {
                if (item._id == id) {
                    item.qty = qty;
                }
                return item;
            })
        }
    },
    actions: {
        changeGoodsQtyAsync(context, { id, qty }) {
            // context：一个类似与store的对象
            request.get('/goods/' + id).then(({ data }) => {
                console.log('inventory=', id, qty, data.inventory)
                if (qty > data.inventory) {
                    qty = data.inventory;
                    Message({
                        type: 'warning',
                        message: `库存不足，最大能购买${data.inventory}个商品`
                    });
                }
                context.commit('changeGoodsQty', { id, qty })
            })
        }
    }
}