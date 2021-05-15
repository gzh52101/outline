export default {
    state:{
        showNav:true, // 是否显示导航栏
    },
    getters:{

    },
    mutations:{
       displayNav(state,visibility){
           state.showNav = visibility;
       },
       
    }
}