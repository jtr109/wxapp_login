//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function(res) {
        let code = res.code
        if (code) {
          console.log('获取用户登录凭证: ' + code)
        } else {
          console.log('获取用户登录态失败' + res.errMsg)
        }
      }
    })
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == 'function' && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    // 属于后台的数据
    APPID: 'wx7a5177f039a65816',
    SECRET: '92f762f63cb64d6dc3193db8108850fa'
  }
})
