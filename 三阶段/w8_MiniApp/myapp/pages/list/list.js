import request from '../../utils/request'

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    iqlist: [],
    total: 0,
    hasMore:true
  },
  async getData() {
    let { page, iqlist } = this.data;
    // http://120.76.247.5:2001
    // wx.request({
    //   url:'http://120.76.247.5:2001/api/iq',
    //   data:{
    //     size:10
    //   },
    //   success:({data})=>{
    //     console.log('data=',data);
    //     this.setData({
    //       iqlist:data.data
    //     })
    //   }
    // })
    // wx.showNavigationBarLoading()
    const { data } = await app.fetch(
      '/iq', {
      size: 10,
      page
    }
    )
    iqlist = iqlist.concat(data.result)
    const total = data.total;
    this.setData({
      iqlist,
      total,
      hasMore: iqlist.length < total
    })

    // wx.hideNavigationBarLoading()
    // wx.showToast({
    //   title:'加载成功',
    //   icon:'none'
    // })
  },

  gotoDetail(e) {
    const { id } = e.currentTarget.dataset;

    wx.switchTab({
      url: '/pages/iq/iq?id=' + id,
      // url: '/pages/index/index?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let title = '';
    switch (options.type) {
      case 'hot':
        title = '热门面试题'
        break;
      case 'addtime':
        title = '最新面试题'
        break;
      default:
        title = '面试题列表'
    }
    wx.setNavigationBarTitle({
      title
    })

    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showLoading({
      title:'页面刷新中...'
    });
    this.setData({
      page:1,
      hasMore:true,
      iqlist:[],
    },async ()=>{
      await this.getData();
      wx.hideLoading()
      wx.stopPullDownRefresh();
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底')
    if(this.data.hasMore){
      this.setData({
        page: this.data.page + 1
      }, () => {
        this.getData();
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})