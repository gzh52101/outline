<template>
    <div>
        Mine
        <!-- 用户A -->
        <List :datalist="['laoxie','jingjing','tiantian']" :price="100" index="10" />
        <!-- 用户B -->
        <List :datalist="['javascript','html','css','php','nodejs']" :price="200" />
        <!-- 用户C -->
        <List :datalist="['hello everybody']" />
        <!-- 用户D -->
        <!-- <List :datalist="{username:'laoxie',password:123,role:'admin'}" /> -->
        <!-- 用户E -->
        <List :datalist="[10,20,30]" age="22" />
    </div>
</template>
<script>
import List from '@/components/List.vue'

export default {
    name:'Mine',
    data(){
        return {

        }
    },
    components:{
        List
    }
}
</script>
<style>

</style>

