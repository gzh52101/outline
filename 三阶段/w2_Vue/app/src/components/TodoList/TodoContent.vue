<template>
    <table
        class="table table-striped"
        ref="table"
    >
        <thead>
            <tr>
                <th><input
                        type="checkbox"
                        v-model="checkAll"
                    />全选</th>
                <th>#</th>
                <th>待办事项</th>
                <th>添加时间</th>
                <th>是否完成</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- <TodoItem
                v-for="(item,idx) in list"
                :key="item.id"
                :item="item"
                :idx="idx"
                :remove="remove"
                :complete="complete"
            ></TodoItem> -->
            <TodoItem
                v-for="(item,idx) in list"
                :key="item.id"
                :item="item"
                :idx="idx"
            ></TodoItem>
        </tbody>
    </table>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoContent",
  props: ["list",
//   'complete','remove'
  ],
  data() {
    return {
        checkAll:false
    };
  },
  components: {
    TodoItem
  }
};
</script>

