<template>
    <div>
        <el-steps :active="1" finish-status="success">
            <el-step title="购物车"></el-step>
            <el-step title="结算"></el-step>
            <el-step title="购物完成"></el-step>
        </el-steps>
        <el-table
            ref="multipleTable"
            :data="goodslist"
            tooltip-effect="dark"
            style="width: 100%"
        >
            <!-- 设置列 -->
            <el-table-column
                type="selection"
                width="50"
            >
            </el-table-column>
            <el-table-column
                type="index"
                width="30"
            >
            </el-table-column>
            <el-table-column
                prop="img_url"
                label="商品图片"
                width="100"
            >
                <template v-slot:default="{row}">
                    <img
                        style="width:60px;"
                        :src="row.img_url"
                      @click="goto(row._id)"
                    />
                </template>
            </el-table-column>
            <el-table-column
                label="商品信息"
                show-overflow-tooltip
            >
                <template v-slot:default="{row}">
                    <h4>{{row.goods_name}}</h4>
                    <p class="price"><del>{{row.price}}</del><span>{{row.sales_price}}</span></p>
                    <el-input-number v-bind:value="row.qty" controls-position="right" @change="changeQty(row._id,$event)" size="mini" :min="1" :max="5" style="width:80px"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column width="80">
              <template v-slot:default="{row}">
                <el-button size="mini" type="danger" plain  icon="el-icon-delete" circle @click="remove(row._id)"></el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-row :gutter="20" style="margin-top:20px;">
            <el-col :span="12">
                <el-button type="danger" plain @click="clear">清空购物车</el-button>
            </el-col>
            <el-col :span="12" style="text-align:right">
                <span class="price" style="margin-right:20px;"><span>{{totalPrice}}</span></span>
                <el-button type="success" size="large">去结算</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      // goodslist: [
      //   {
      //     _id: 1,
      //     goods_name: "goods1",
      //     price: 1998,
      //     sales_price: 998,
      //     img_url:
      //       "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
      //     qty: 2
      //   },
      //   {
      //     _id: 2,
      //     goods_name: "goods2",
      //     price: 1998,
      //     sales_price: 998,
      //     img_url:
      //       "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
      //     qty: 1
      //   },
      //   {
      //     _id: 3,
      //     goods_name: "goods3",
      //     price: 1998,
      //     sales_price: 998,
      //     img_url:
      //       "http://120.76.247.5:2003/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
      //     qty: 1
      //   }
      // ]
    };
  },
  computed:{
      totalPrice(){
          // const result = this.goodslist.reduce((prev,item)=>prev+item.sales_price*item.qty,0);
          // return result.toFixed(2)
          return this.$store.getters.totalPrice.toFixed(2);
      },
      goodslist(){
        return this.$store.state.cartlist
      }
  },
  methods:{
      changeQty(id,qty){
          console.log('changeQty',id,qty)
          this.$store.commit('changeGoodsQty',{id,qty})
      },
      remove(id){
        this.$store.commit('removeCart',id)
      },
      clear(){
        this.$store.commit('clearCart');
      },
      goto(id){console.log('goto=',id)
        this.$router.push('/goods/'+id);
      }
  }
};
</script>
<style>
</style>

