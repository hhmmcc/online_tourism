// pages/declar/declar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     aop:1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img2.78dm.net/forum/201609/25/120008y08a0fe5oz08g48r.jpg',
      'http://img.hb.aicdn.com/04b93d5f18cbb29b1e878e1c1f6e5ece0cfa80e48fb5e-VxLL7l_fw658',
      'http://pic2.orsoon.com/2017/0606/20170606045811516.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  locationMap:function(){
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//使用微信内置地图查看位置。
          latitude: 30.6742080000,//要去的纬度-地址
          longitude: 104.0642080000,//要去的经度-地址
          name: "成都中心A地铁口",
          address: '成都中心A地铁口'
        })
      }
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
  changeLocation:function(){
    wx.redirectTo({
      url: '../change/change',
    })
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../chang/chang'
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
  chuXian:function(res){
    let datp = res.currentTarget.dataset.yjs;
    this.setData({
      aop:datp
    });
    console.log(res.currentTarget.dataset.yjs)
  },
  chuXianq: function (res) {
    let datp = res.currentTarget.dataset.yjs;
    this.setData({
      aop: datp
    });
    console.log(res.currentTarget.dataset.yjs)
  },
  closeLocation:function(){
    this.setData({
      aop: 1
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})