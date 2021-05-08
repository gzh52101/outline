<template>
    <tr :class="{'table-primary':item.checked}">
        <td><input type="checkbox" v-model="item.checked" /></td>
        <td>{{idx+1}}</td>
        <td>{{item.todo}}</td>
        <td>{{item.addtime}}</td>
        <td>{{item.complete ? '是' : '否'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <!-- <button class="btn btn-outline-primary" @click="complete(item.id)">完成</button>
                <button class="btn btn-outline-danger" @click="remove(idx)">删除</button> -->
                <!-- <TodoButton class="btn-outline-primary" @click.native="complete(item.id)">
                    完成
                </TodoButton>
                <TodoButton class="btn-outline-danger" @click.native="remove(idx)">删除</TodoButton> -->
                <TodoButton class="btn-outline-primary" @click.native="completeItem(item.id)">
                    完成
                </TodoButton>
                <TodoButton class="btn-outline-danger" @click.native="removeItem(idx)">删除</TodoButton>
            </div>
        </td>
    </tr>
</template>
<script>
import TodoButton from './TodoButton.vue'
// import Bus from './Bus'

export default {
    name:'TodoItem',
    props:['item','idx',
    // 'complete','remove'
    ],
    data(){
        return {
            
        }
    },
    components:{
        TodoButton
    },
    methods:{
        completeItem(id){
            // Bus.$emit('complete',id)
            this.$root.$emit('complete',id)
        },
        removeItem(idx){
            // Bus.$emit('remove',idx)
            this.$root.$emit('remove',idx)
        }
    }
}
</script>

