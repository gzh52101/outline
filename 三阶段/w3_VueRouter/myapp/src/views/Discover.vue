<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :default-active="currentPath"
        router
        @select="changeMenu"
      >
        <el-menu-item
          :index="parentPath + '/'+ item.name"
          v-for="item in menu"
          :key="item._id"
        >
          {{item.text}}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 用于显示Discover组件下的子路由 -->
      <!-- <router-view></router-view> -->
      <el-row :gutter="20">
        <el-col
          :xs="12"
          :sm="8"
          :md="6"
          v-for="item in goodslist.result"
          :key="item._id"
        >
          <img
            :src="item.img_url"
            @click="goto(item._id)"
          />
          <h4>{{item.goods_name}}</h4>
          <p class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></p>
          <p>销量：{{item.sales_qty}}</p>
        </el-col>
      </el-row>
      <el-pagination
        background
        layout="total, prev, pager, next,sizes"
        :total="goodslist.total"
        :page-size="8"
        :page-sizes="[8,16,32,48]"
        @current-change="changePage"
        @size-change="changeSize"
      >
      </el-pagination>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Discover",
  data() {
    return {
      menu: [],
      parentPath: "/discover",
      currentPath: "/discover/man",
      goodslist: {},
      page: 1,
      size: 8
    };
  },
  watch: {
    $route: function(n, o) {
      const { cat } = n.params;
      this.getData(cat);
    }
  },
  methods: {
    changeMenu(index) {
      console.log("index=", index);
      this.currentPath = index;
    },
    async getData(category) {
      const { size, page } = this;
      const cat = category || this.$route.params.cat;

      const current = this.menu.find(item => item.name === cat);
      if(!current) return ;
      const { data: goodslist } = await this.$request.get("/goods", {
        category: current.text,
        size,
        page
      });
      console.log("goodslist=", goodslist); // [{_id,name,text}]
      this.goodslist = goodslist;
      this.goodslist.result = this.goodslist.result.map(item => {
        item.img_url = this.baseUrl + item.img_url;
        return item;
      });
    },
    changePage(page) {
      console.log("page=", page);
      this.page = page;
      this.getData();
    },
    changeSize(size) {
      this.size = size;
      this.getData();
    },
    goto(id){console.log('id',id)
      // this.$router.push('/goods/'+id);
      this.$router.push({name:'goods',params:{id}});
    }
  },
  async created() {
      console.log('Discover.created');
    //   this.baseUrl = this.$route.path;
    //   this.currentPath = this.baseUrl + '/man'

    // 获取分类

    const { data: categories } = await this.$request.get("/category", {
      total: false
    });
    console.log("categories=", categories); // [{_id,name,text}]
    this.menu = categories;

    this.getData();
  },
  destroyed(){
    console.log('Discover.destroyed')
  },
  activated(){
    
    console.log('Discover.activated')
  },
  deactivated(){
    console.log('Discover.deactivated')

  }
};
</script>
<style scoped>
.el-col {
  height: 400px;
}
.el-col img {
  width: 160px;
}
</style>

