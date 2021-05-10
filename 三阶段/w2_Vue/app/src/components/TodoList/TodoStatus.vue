<template>
    <div>
        <!-- 待办事项：{{list.length}}，完成：{{completeList.length}}，未完成：{{unCompleteList.length}} -->
        <!-- <div class="defaultslot">
            <slot/>
        </div>
        <div class="footer">
            <slot name="footer"/>
        </div> -->
        <slot :list="list" :completelist="completeList" :unCompleteList="unCompleteList" a="10" :b="20" />
    </div>
</template>
<script>
export default {
    name:'TodoStatus',
    props:['list'],
    data(){
        return {
            
        }
    },
    computed:{
        completeList(){
            return this.list.filter(item=>item.complete)
        },
        unCompleteList(){
            return this.list.filter(item=>!item.complete)
        }
    }
}
</script>

