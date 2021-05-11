<template>
    <div>
        <h1>Vue的扩展</h1>
        <p>{{msg}}</p>
        <p v-bind:username="username | uppercase">过滤器：{{msg | uppercase}}</p>
        <!-- <p>过滤器：{{username | uppercase}}</p> -->
        <p>方法：{{upperCase(msg)}}</p>
        <p>价格(美元)：{{price | money('$')}}</p>

        <!-- 以下代码等效于：money(toFixed(price)) -->
        <p>价格(RMB)：{{price | toFixed | money}}</p>
        <p>价格：{{price | formatMoney}}</p>
    </div>
</template>
<script>
import {userMixin} from '../mixins'
export default {
    name:'Test',
    mixins:[userMixin],
    // inject:['money','qq'],
    inject:{
        mymoney:'money',
        mycompany:{
            from:'company',
            default:'alibaba'
        }
    },
    data(){
        return {
            msg:'hello',
            username:'laoxie',
            price:199998.12345
        }
    },
    methods:{
        upperCase(data){
            return data.toUpperCase()
        }
    },
    filters:{
        money(acount,flag='￥'){
            // 过滤器中的第一个参数：acount金额
            return flag + acount
        },
        toFixed(number,length=2){
            if(typeof number != 'number'){
                number = Number(number);
            }
            return number.toFixed(length)
        },
        // 100 -> 100
        // 10000->10,000
        // 1000000->1,000,000
        formatMoney(value){
            if (!value) return ''
            if(typeof value !== 'string'){
                value = value.toString();
            }
            return value.replace(/(?<!\.)\B(?=(\d{3})+(?!\d))/g,',')
        }
    },
    created(){
        console.log('Test.created',this);

        // this.ajax()
    }
}
</script>
