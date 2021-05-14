<template>
    <div v-if="goods._id">
        <img :src="goods.img_url" />
        <h1>{{goods.goods_name}}</h1>
        <p class="price"><del>{{goods.price.toFixed(2)}}</del><span>{{goods.sales_price.toFixed(2)}}</span></p>
        <p>销量：{{goods.sales_qty}}</p>
        <el-button type="warning" icon="el-icon-shopping-cart-full" :disabled="goods.inventory<1">添加购物车</el-button>
        <el-button type="danger" icon="el-icon-shopping-bag-2" :disabled="goods.inventory<1">立即购买</el-button>

        <h3>最新商品</h3>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="8" :md="6" v-for="item in hotList" :key="item._id">
                <img :src="baseUrl + item.img_url" @click="goto(item._id)"/>
                <h4>{{item.goods_name}}</h4>
                <p class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></p>
                <p>销量：{{item.sales_qty}}</p>
            </el-col>
        </el-row>
    </div>
     <div v-else v-loading.body="true" element-loading-text="拼命加载中">
    </div>
</template>
<script>
export default {
    name:'Goods',
    // props:['a','id','from'],
    data(){
        return {
           goods:{},
           hotList:[]
        }
    },
    // watch:{
    //     '$route.path':function(n,o){
    //         console.log('watch.$route.path')
    //         this.getData();
    //     }
    // },
    beforeRouteUpdate(to, from, next){
        console.log('Goods.beforeRouteUpdate=',to, from);
        this.getData(to.params.id);
        next();
    },
    beforeRouteEnter(to, from,next){
        console.log('Goods.beforeRouteEnter');
        // 只有从首页进入才能访问当前页面
        if(['/home','/discover'].includes(from.path)){
            next();
        }
    },
    beforeRouteLeave(to, from,next){
        console.log('Goods.beforeRouteLeave');
        next();
    },
    async created(){
        console.log('Goods',this);
        this.getData();

        // 获取热门商品
        const {data:hotList} = await this.$request.get('/goods',{
            total:false,
            sort:'sales_qty'
        });

        this.hotList = hotList;
    },
    methods:{
        goto(id){
            this.$router.push(`/goods/${id}`);
        },
        async getData(id){
            id = id || this.$route.params.id;
            console.log('id=',id)

            const {data} = await this.$request.get('/goods/'+id);
            console.log('data',data)
            data.img_url = this.baseUrl + data.img_url;
            data.big_img_url = this.baseUrl + data.big_img_url;
            this.goods = data;
        }
    }
}
</script>
<style scoped>
.el-col{height:400px;}
.el-col img{width:160px;}
</style>

