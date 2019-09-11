// pages/page3/page3.js
Page({

  data: {

  },
  onLoad: function (options) {
   
  },
  toPersonalCenter(){
    wx.redirectTo({
        url: '../toPersonalCenter/toPersonalCenter',
      })
  },
  toWallet(){
    wx.redirectTo({
      url: '../toWallet/toWallet',
    })
  }
  
})