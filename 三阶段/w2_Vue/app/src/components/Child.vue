<template>
    <div>
        <h4>Child</h4>
        <p>myname:{{cname}}</p>
        <p>parentName:{{$parent.cname}}</p>
        <p>parentData: {{componentCount}}</p>
        <!-- <button @click="componentCount=20">修改count</button> -->
        <button @click="change">qty:{{qty}}</button>
    </div>
</template>
<script>
export default {
    name:'Child',
    // 接收父组件传入的属性，改属性在组件实例化时自动写入实例（改属性无法修改）
    props:['componentname','componentCount','qty'],
    data(){
        console.log('Child',this);
        return {
            cname:'Child'
        }
    },
    methods:{
        change(){
            // this.$emit('changeqty',this.qty+1)
            this.$emit('update:qty',this.qty+1)
        }
    }
}
</script>
<style>

</style>
