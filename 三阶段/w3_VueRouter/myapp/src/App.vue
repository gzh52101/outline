<template>
  <!-- <div id="app"> -->

  <!-- <h1>VueRouter路由</h1> -->

  <!-- <ul> -->
  <!-- <router-link v-for="item in menu" :key="item.path" :to="item.path" tag="span" active-class="current" >{{item.text}}</router-link> -->
  <!-- </ul> -->
  <!-- <nav><span v-for="item in menu" :class="{current:item.path===currentPath}" :key="item.path" @click="goto(item)">{{item.text}}</span> </nav>-->
  <el-container>
    <el-header style="padding:0;background-color:#545c64" v-show="showNav">
      <el-row>
        <!-- <el-col :span="18"> -->
        <el-col
          :xs="20"
          :sm="18"
          :md="16"
        >
          <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :default-active="currentPath"
          >
            
            <el-menu-item
              :index="item.path"
              v-for="item in menu"
              :key="item.path"
            >
            <el-badge :value="cartCount" class="cart-badge" v-if="item.name === 'cart'">
              <i :class="item.icon"></i> {{item.text}}
            </el-badge>
            <template v-else>
              <i :class="item.icon"></i> {{item.text}}
            </template>
            </el-menu-item>
          </el-menu>
        </el-col>
        <!-- <el-col :span="6"  -->
        <el-col
          :xs="4"
          :sm="6"
          :md="8"
          style="padding-right:10px;text-align:right;line-height:60px;"
        >
          <template v-if="isLogin">
            <strong style="color:#fff;margin-right:5px;">{{userInfo.username}}</strong>
            <el-button type="text" @click="logout">退出</el-button>
          </template>
          <template v-else>
            <el-button
              type="text"
              @click="goto('/reg')"
            >注册</el-button>
            <el-button
              type="text"
              @click="goto('/login')"
            >登录</el-button>
          </template>
        </el-col>
      </el-row>

    </el-header>
    <el-header v-show="!showNav">
      <el-button icon="el-icon-arrow-left" circle @click="goBack"></el-button>
    </el-header>
    <el-main style="overflow:hidden;">
      <router-view/>
      <router-view name="main"></router-view>
      <router-view name="footer"></router-view>
    </el-main>
  </el-container>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          path: "/home",
          name: "home",
          icon: "el-icon-s-home",
          text: "首页"
        },
        {
          path: "/discover",
          name: "discover",
          icon: "el-icon-view",
          text: "发现"
        },
        {
          path: "/cart",
          name: "cart",
          icon: "el-icon-shopping-cart-2",
          text: "购物车"
        },
        // {
        //   path: "/login",
        //   name: "login",
        //   icon: "el-icon-right",
        //   text: "登录"
        // },
        // {
        //   path: "/reg",
        //   name: "reg",
        //   icon: "el-icon-key",
        //   text: "注册"
        // },
        {
          path: "/mine",
          icon: "el-icon-user",
          name: "mine",
          text: "我的"
        }
      ],
      currentPath: "/home",
      // userInfo:null,
    };
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin;
    },
    cartCount(){
      return this.$store.getters.count;
    },
    userInfo(){
      return this.$store.state.user.userInfo;
    },
    showNav(){
      return this.$store.state.common.showNav;
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    goto(item) {
      // 1.通过路径字符串跳转
      // this.$router.push(path);
      // this.$router.replace(path);

      if (typeof item === "object") {
        // 2.通过对象跳转
        // 2.1：通过path属性跳转
        this.$router.push({ path: item.path });

        // 2.2：通过路由名称跳转
        // this.$router.push({name:item.name})
      } else {
        this.$router.push(item);
      }

      this.currentPath = item.path;
    },
    goBack(){
      this.$router.back();
    },
    logout(){
      // this.userInfo = null;
      // localStorage.removeItem('userInfo')
      this.$store.commit('logout');
    }
  },
  created() {
    console.log("App.created", this);

    const { path } = this.$route;
    this.currentPath = path;

    // // 判断用户是否登录
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // if(userInfo){
    //   this.userInfo = userInfo;
    // }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
nav span {
  margin: 0 10px;
}
.current {
  color: #f00;
  font-weight: bold;
}
.price span::before,.price del::before{
  content:'￥'
}
.price del{color:#666;margin-right:5px;}
.price span{color:#f00}
.cart-badge .el-badge__content.is-fixed{
  top:12px;
}
</style>
