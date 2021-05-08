<template>
    <div>
        <h4>Parent</h4>
        <p>myname:{{cname}}</p>
        <!-- <Child :componentCount="count" :qty="qty" v-on:changeqty="changeQty"></Child> -->
        <Child :componentCount="count" :qty.sync="qty"></Child>
    </div>
</template>
<script>
import Child from './Child.vue';

export default {
    name:'Parent',
    data(){
        return {
            cname:'Parent',
            count:10,
            qty:1
        }
    },
    components:{
        Child
    },
    methods:{
        changeQty(qty){
            console.log('6666',qty)
            this.qty = qty;
        }
    }
}
</script>
