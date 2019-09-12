// pages/page3/page3.js
Page({

  data: {
    user:[
    ],
    post:[
    ],
    money:[
    ],
    mine:[
    ],
    find:[
    ],
    setUp:[
    ]

  },
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:8666/page',
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res);
          let user = res.data.user;
          let post = res.data.post;
          let money = res.data.money;
          let mine = res.data.mine;
          let find = res.data.find;
          let set = res.data.set;
          that.setData({
            user: user 
            , post: post 
            , money: money 
            , mine: mine
            , find: find
            , setUp: set
            });
        }
      }
    })
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