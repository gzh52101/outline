// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    iqlist:{}
  },
  getData(){
    // http://120.76.247.5:2001
    wx.request({
      url:'http://120.76.247.5:2001/api/iq',
      data:{
        size:10
      },
      success:({data})=>{
        console.log('data=',data);
        this.setData({
          iqlist:data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底')
    this.getData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})