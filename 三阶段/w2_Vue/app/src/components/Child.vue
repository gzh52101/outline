<template>
    <div>
        <h4>Child</h4>
        <p>myname:{{cname}}</p>
        <p>parentName:{{$parent.cname}}</p>
        <p>parentData: {{componentCount}}</p>
        <!-- <button @click="componentCount=20">修改count</button> -->
    </div>
</template>
<script>
export default {
    name:'Child',
    // 接收父组件传入的属性，改属性在组件实例化时自动写入实例（改属性无法修改）
    props:['componentname','componentCount'],
    data(){
        console.log('Child',this);
        return {
            cname:'Child'
        }
    }
}
</script>
<style>

</style>
