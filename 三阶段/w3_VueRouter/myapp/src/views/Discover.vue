<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                :default-active="currentPath"
                router
                @select="changeMenu"
            >
                <el-menu-item :index="baseUrl + item.path" v-for="item in menu" :key="item.path">
                    {{item.text}}
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <!-- 用于显示Discover组件下的子路由 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
  name: "Discover",
  data() {
    return {
      menu: [
        {
          path: "/man",
          text: "男表"
        },
        {
          path: "/girl",
          text: "女表"
        },
        {
          path: "/boy",
          text: "童表"
        }
      ],
      baseUrl:'/discover',
      currentPath:'/discover/man'
    };
  },
  methods:{
      changeMenu(index){
          console.log('index=',index);
          this.currentPath = index;
      }
  },
  created(){
    //   console.log('created',this.$route);
    //   this.baseUrl = this.$route.path;
    //   this.currentPath = this.baseUrl + '/man'
  }
};
</script>
<style>
</style>

