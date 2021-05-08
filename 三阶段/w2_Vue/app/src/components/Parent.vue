<template>
    <div>
        <h4>Parent</h4>
        <p>myname:{{cname}}</p>
        <Child :componentCount="count"></Child>
    </div>
</template>
<script>
import Child from './Child.vue';

export default {
    name:'Parent',
    data(){
        return {
            cname:'Parent',
            count:10
        }
    },
    components:{
        Child
    }
}
</script>
