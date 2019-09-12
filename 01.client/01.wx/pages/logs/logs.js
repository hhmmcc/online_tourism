const app = getApp();
Page({
  data: {
    windowHeight: null,
    isShow: false,
    line: 0,
    listIdex: 0,
    arrayRank:[],
    topcisContent:[],
    likeCount:9,
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (option) {
    var that = this;
    wx.request({
      url: 'http://localhost:8666/tourism',
      success:function(res){
      console.log(res.data.data);
        that.setData({
          topcisContent: res.data.data,
        });
        app.globalData.topcisContent = res.data;
      }
    })
    wx.request({
      url: 'http://192.168.3.86:8888/hotrank',
      success:function(res){
        that.setData({
          arrayRank:res.data,
          });
      }
    })
   
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) + 'rpx';
        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },

  tabChange: function (res) {
    let query = res.currentTarget.dataset.line;
    this.setData({
      line: query,
    });
  },
  onChangeList: function (res) {
    let query = res.currentTarget.dataset.index;
    this.setData({
      listIdex: query,
    });
  },
  toNavigateRewardPrice: function (userId) {
    let userid = userId.currentTarget.dataset.user;
    let userIndex = userId.currentTarget.dataset.userindex;
    wx.navigateTo({
      url: '../reward/reward?userid=' + userid + '&&userIndex=' + userIndex,//传递参数
    })
  },
  toNavigateCommentView: function (userId) {
    let userid = userId.currentTarget.dataset.user;
    let userIndex = userId.currentTarget.dataset.userindex;
    wx.navigateTo({
      url: '../comment/comment?userid=' + userid + '&&userIndex=' + userIndex,
    })
  },
  toContenLike:function(count){
    let userindex = count.currentTarget.dataset.userindex;
    let user = count.currentTarget.dataset.user;
    console.log(app.globalData.topcisContent[user].topicContent[userindex].likeCount++);
  },
  toRecordView: function () {
    wx.navigateTo({
      url: '../record/record',
    })
  },
  showBounced: function () {
    this.setData({
      isShow: true,
    })
  },
  closeView: function () {
    this.setData({
      isShow: false,
    })
  }
})
