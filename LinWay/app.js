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
    userInfo: null,
    products: [
      {
        brand_id: 0,
        brand_name: '圣兹',
        series:[
          {
            series_id:0,
            series_name: '沙拉酱系列',
            items: [
              {
                item_id: 0,
                item_name: ''
              },
              {

              }
            ]
          },
          {
            series_id: 1,
            series_name: '番茄酱系列',
            items: [
              {

              },
              {

              }
            ]
          },
          {
            series_id: 2,
            series_name: '风味酱系列',
            items: [
              {

              },
              {

              }
            ]
          }
        ]
      },
      {
        brand_id: 1,
        brand_name: '罗曼可',
      },
      {
        brand_id: 2,
        brand_name: '金点',
      }
    ]
  }
})