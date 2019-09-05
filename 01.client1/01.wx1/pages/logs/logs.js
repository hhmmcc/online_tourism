//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    windowHeight:null,
    isShow:false,
    logs: []
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (option) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) + 'rpx';
        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },
  toRecordView:function() {
    wx.navigateTo({
      url: '../record/record',
    })
  },
  showBounced:function(){
    this.setData({
      isShow: true,
    })
  },
  closeView:function(){
    this.setData({
      isShow: false,
    })
  }
})
