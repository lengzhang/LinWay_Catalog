//app.js
App({
  onLaunch: function (options) {
    // Do something initial when launch.
    wx.setTabBarStyle({
      color: '#dbdbdb',
      selectedColor: '#d81e06',
      borderStyle: 'white'
    })
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  onPageNotFound: function (options) {

  },
  globalData: {
    userInfo: null
  }
})