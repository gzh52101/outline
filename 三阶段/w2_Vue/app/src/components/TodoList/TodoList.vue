<template>
    <div class="container-fluid mt-5">
        <TodoForm @additem="addItem"></TodoForm>
        <!-- <TodoContent :list="list" :remove="removeItem" :complete="completeItem"></TodoContent> -->
        <TodoContent :list="list">
            <!-- 练习：利用插槽实现TodoContent的可定义话 -->
        </TodoContent>
        <TodoStatus :list="list">
            <!-- <p>hello</p>
            <p>slot</p>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
            <template v-slot:footer>
                <div class="page">xxxx</div>
                <div class="page">xxxx</div>
            </template> -->
            <!-- scope类似于props -->
            <template v-slot:default="{list,completelist,unCompleteList}">
                <button>待办事项数量：{{list.length}}</button>
                <button>完成：{{completelist.length}}</button>
                <button>未完成：{{unCompleteList.length}}</button>
            </template>
        </TodoStatus>
        <!-- <TodoStatus :list="list">
            <template v-slot:default="{list,completelist,unCompleteList}">
                <ul>
                    <li>待办事项数量：{{list.length}}</li>
                    <li>完成：{{completelist.length}}</li>
                    <li>未完成：{{unCompleteList.length}}</li>
                </ul>
            </template>
        </TodoStatus> -->
    </div>
</template>
<script>
import TodoForm from './TodoForm.vue'
import TodoContent from './TodoContent.vue'
import TodoStatus from './TodoStatus.vue'
// import Bus from './Bus';

import 'bootstrap/dist/css/bootstrap.css'


export default {
    name:'TodoList',
    data(){
        return {
            list: [{
                id: 1,
                todo: '定个小目标睡一整天',
                complete: true,
                checked:true,
                addtime: Date.now()
            }, {
                id: 2,
                todo: '赚他一个亿津巴布韦币',
                complete: false,
                checked:true,
                addtime: Date.now() + 3600
            }, {
                id: 3,
                todo: '迎娶白富美，达到人生巅峰',
                complete: false,
                checked:false,
                addtime: Date.now() + 360 * 1000
            }],
        }
    },
    methods:{
        addItem(todo){
            let item = {
                id: Math.ceil(Math.random()*10000),
                todo,
                complete: false,
                checked:false,
                addtime: Date.now()
            }

            this.list.unshift(item);
        },
        removeItem(idx){
            this.list.splice(idx,1)
        },
        completeItem(id){
            this.list.forEach(item=>{
                if(item.id === id){
                    item.complete = true;
                }
            })
        }
    },
    components:{
        TodoForm,
        TodoContent,
        TodoStatus,
    },
    created(){
        // 这里的代码在组件实例化时自动执行
        // Bus.$on('remove',this.removeItem)
        // Bus.$on('complete',this.completeItem)
        this.$root.$on('remove',this.removeItem)
        this.$root.$on('complete',this.completeItem)
    }
}
</script>

