// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brands: [
      {
        id: 0,
        name: '',
      },
      {
        id: 1,
        name: '圣兹',
      },
      {
        id: 2,
        name: '罗曼可',
      },
      {
        id: 3,
        name: '金点',
      }
    ],
    curId: 1,
    curIndex: 1,
    open: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  switchBrand: function (e) {
    let id = e.target.dataset.id;
    if (id > 0) {
      let index = parseInt(e.target.dataset.index);
      this.setData({
        curId: id,
        curIndex: index,
        open: false
      })
    }
  },

  tap_nav_switch: function (e) {
    if (this.data.open) {
      console.log("true");
      this.setData({
        open: false
      })
    }
    else {
      console.log("false");
      this.setData({
        open: true
      })
    }
  }
})