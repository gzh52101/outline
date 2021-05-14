<template>
    <div>
        <el-carousel height="150px">
            <el-carousel-item
                v-for="item in recommendList"
                :key="item._id"
            >
                <img :src="baseUrl + item.img_url" />
            </el-carousel-item>
        </el-carousel>
        <h3>最新商品</h3>
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in newList" :key="item._id">
                <img :src="baseUrl + item.img_url" @click="goto(item._id)"/>
                <h4>{{item.goods_name}}</h4>
                <p class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></p>
                <p>销量：{{item.sales_qty}}</p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {baseUrl} from '../utils/request'
export default {
  name: "Home",
  data() {
    return {
        recommendList:[],
        newList:[],
        baseUrl
    };
  },
  methods:{
      goto(id){
        // /goods/xxx
        // this.$router.push('/goods/'+id)
        // this.$router.push({
        //     path:'/goods/'+id,
        //     params:{
        //         id
        //     }
        // })
        this.$router.push({
            // path:'/goods/'+id
            name:'goods',
            params:{
                id,
                username:'test',
                age:18
            },
            query:{
                id,
                from:'home'
            }
        })
      }
  },
  async created() {
      // {code,data,msg}
      // 推荐商品
    const {data:recommendList} = await this.$request.get("/goods", {
      sort: "price",
      size: 3,
      total: false
    });
    this.recommendList = recommendList

    // 请求商品列表
     const {data:newList} = await this.$request.get("/goods", {
      total: false
    });
    this.newList = newList
  },

  // 路由守卫
  beforeRouteLeave(to,from,next){
      // 离开当前页面时触发
      console.log('Home.beforeRouteLeave')
      next();
  }
};
</script>
<style scoped>
/* 
    scoped: 局部样式（该样式只能在当前组件生效） 
    原理：给当前组件添加data-v-[hash]属性，然后通过属性选择器实现局部样式
*/
.el-carousel{text-align:center;}
.el-carousel img{
    /* width:100%; */
    height:150px;
}
.el-col img{width:100%;}
</style>


