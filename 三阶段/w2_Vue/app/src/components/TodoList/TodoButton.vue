<template>
    <!-- <button class="btn" @click="handleClick">{{text}}</button> -->
    <!-- <button class="btn">{{text}}</button> -->
    <button class="btn"><slot/></button>
</template>
<script>
export default {
    name:'TodoButton',
    // props:['text'],
    data(){
        return {
            
        }
    },
    methods:{
        // handleClick(){
        //     this.$emit('click')
        // }
    }
}
</script>

