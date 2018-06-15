// pages/linway/linway.js
var intro_title = '简介'

var introduction = '广州凌威食品有限公司成立于2010年，新厂区位于广州增城区三江荔三路，占地面积约1万多平方米，与广州东鹏特饮、广东工业大学、华立学院邻近，集聚人气，交通便捷 ……\n\n公司集研发生产于一体，主要生产餐饮烘焙酱料，沙拉酱、蛋黄酱、番茄酱、披萨酱、甜辣酱及水果果酱、果膏等……食品原料。产品广泛应用于中西式餐饮、烘焙、食品加工等行业, 操作简单，使用方便。\n\n现代化的生产车间，完全符合省A级标准，具备药品级的密封式自动化生产设备及透风系统，完善的管理确保所生产的产品品质更安全稳定，多年的安全生产与诚信经营得到众多商家与用户的认可。2017年“中国食品工业协会”指定“圣兹”牌沙拉酱为中国中西式面点技能大赛“指定产品”。我们坚信，高品质产品必受客户青睐，无论何时，我们都一如既往地以诚信构筑企业文化核心。\n\n广州凌威出品 — 自然带出美食的鲜甜美味……'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro: introduction,
    imageUrls: [
      'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway/view00.png',
      'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway/view01.png',
      'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway/view02.png',
      'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway/view03.png',
      'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway/view04.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    vertical: false,
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
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
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