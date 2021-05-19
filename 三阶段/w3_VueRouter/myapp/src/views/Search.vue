<template>
    <div>
        Search
        <el-input
            placeholder="请输入搜索内容"
            v-model="keyword"
        >
            <template v-slot:append>
                <el-button
                    type="success"
                    icon="el-icon-search"
                    @click="search"
                ></el-button>
            </template>
        </el-input>
    </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      result:[]
    };
  },
  methods:{
      search(){
          this.$request.get('/goods/search',{
              keyword:this.keyword
          }).then(({data})=>{
              console.log('data=',data)
              this.result = data.result;
          })
      }
  }
};
</script>
<style>
</style>

