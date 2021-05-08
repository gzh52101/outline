<template>
    <div class="input-group">
            <input type="text" ref="input" class="form-control" v-model="todo" @keyup.enter="addItem">
            <button class="btn btn-primary" type="button" @click="addItem">添加</button>
          </div>
</template>
<script>
export default {
    name:'TodoForm',
    data(){
        return {
            todo:''
        }
    },
    methods:{
        addItem(){
            this.$emit('additem',this.todo);

            this.todo = '';
            this.$refs.input.focus();
        }
    }
}
</script>

