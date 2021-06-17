// pages/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    player:null
  },
  play(){
    const {player} = this.data;
    console.log('paused=',player.paused)
    if(player.paused){

      player.play();
    }else{
      player.pause()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let {player} = this.data;
    if(!player){
      player = wx.createInnerAudioContext()
      this.setData({
        player
      })
    }
    player.src = 'https://m801.music.126.net/20210617110226/2ff14ccbdbd125b13edb5254eda542f8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7150237012/288e/e749/081f/8ca6430d593518eaddc65be19bf56513.m4a'
    player.autoplay = true;
    player.onCanplay(function(){
      console.log('canplay');console.log('player=',player)
      player.play()
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})