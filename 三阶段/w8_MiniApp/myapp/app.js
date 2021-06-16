// app.js
App({
  onLaunch() {console.log('app.onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log('app.onShow',options)
  },
  onHide(){
    console.log('app.onHide')
  },

  // 自定义数据
  globalData: {
    userInfo: null
  },
  baseUrl: 'http://120.76.247.5:2001',
  fetch(url, data, config = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...config,
        url: this.baseUrl + '/api' + url,
        data,
        success: ({ data }) => {
          resolve(data);
        },
        fail() {
          reject()
        }
      })
    })
  }
})
