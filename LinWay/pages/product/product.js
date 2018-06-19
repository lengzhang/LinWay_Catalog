// pages/product/product.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id: 0,
    open: false,
    test: app.globalData.test,
    products: '',
    scroll_top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      products: app.globalData.products
    })
    wx.setNavigationBarTitle({
      title: '产品'
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

  },

  switchBrand: function (e) {
    let id = e.currentTarget.dataset.id;
    let top = (this.data.scroll_top == 0 ? -1 : 0);
    this.setData({
      cur_id: id,
      open: false,
      scroll_top: top
    })
  },

  tap_nav_switch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      })
    }
    else {
      this.setData({
        open: true
      })
    }
  },

  close_nav: function (e) {
    this.setData({
      open: false
    })
  },

  tap_item: function (e) {
    wx.navigateTo({
      url: "/pages/item/item?brand_id=" + e.currentTarget.dataset.brand_id + "&series_id=" + e.currentTarget.dataset.series_id + "&item_id=" + e.currentTarget.dataset.item_id
    })
  }
})