// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        key: '名称',
        value: '广州凌威食品有限公司'
      },
      {
        key: '地址',
        value: '广州市增城区石滩三江荔三路760号'
      },
      {
        key: '电话',
        value: '(86) 020 - 32851891  32851893'
      },
      {
        key: '邮箱',
        value: 'gzlinway@126.com'
      },
      {
        key: '网站',
        value: 'http://www.gzlinway.com'
      },
      {
        key: '淘宝网址',
        value: 'https://shop179835553.taobao.com/index.htm?spm=2013.1.w5002-17292787360.2.64f52187y6OI0f'
      },
      {
        key: '阿里巴巴',
        value: 'https://gzlinway.1688.com'
      },
    ],
    selectable: true,
    contact_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/contact/contact_us.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '联系我们'
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