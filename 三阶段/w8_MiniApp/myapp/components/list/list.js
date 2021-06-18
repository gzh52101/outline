const mybehavior = require('../../behaviors/index.js')

Component({
    // 公共配置mixins
  behaviors:[mybehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:1
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 生命周期函数（老版本）
  created(){
    console.log('created 1')
  },

  // 生命周期对象（新版本）
  lifetimes:{
    created(){
      console.log('created 2')
    }
  }
})
