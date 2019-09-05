// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:null,
    indexSelect:0,
    titles:[{
      index:0,
      name:"打卡"
    }, {
        index: 1,
        name: "足迹"
      }, {
        index: 2,
        name: "排名"
      }
    ],
    imgs: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3377302992,3361149372&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3146277763,293920617&fm=111&gp=0.jpg"
    ]
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (option) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)-80) + 'rpx';
        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },

  onChange:function(e){
    let id = e.currentTarget.dataset.indexs;
    this.setData({
      indexSelect: id
    });
    // switch(id){
    //  case 1: wx.navigateTo({
    //   url: '../footprint/footprint',
    // });
    // break;
    // case 2: wx.navigateTo({
    //     url: '../ranking/ranking',
    // });
    // };
  },
  getHeight:function(e){
    console.log(e);
  }


})