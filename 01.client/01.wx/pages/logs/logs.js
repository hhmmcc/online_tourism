const app = getApp();
Page({
  data: {
    windowHeight: null,
    show:false,
    isShow: false,
    isShowBarrage: false,
    textColor:"white",
    barrage:[],
    line: 0,
    listIdex: 0,
    arrayRank:[],
    topcisContent:[],
    imgs:[],
    likeCount:9,
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (option) {
    var that = this;
    wx.request({
      url: 'http://192.168.3.109:8888/tourism',
      success:function(res){
        that.setData({
          topcisContent: res.data,
        });
        app.globalData.topcisContent = res.data;
        console.log(that.data.topcisContent)
      }
    })
    wx.request({
      url: 'http://192.168.3.109:8888/hotrank',
      success:function(res){
        that.setData({
          arrayRank:res.data,
          });
      }
    })

    wx.request({
      url: 'http://192.168.3.109:8888/logs',
      success: function (res) {
        console.log(res);
        that.setData({
          imgs:res.data,
        })
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
  },

  //搜索框
  showInput:function(){
    this.setData({
      show:true,
    })
  },
  closeInput:function(){
    this.setData({
      show:false,
    })
  },
  //弹幕框
  showBarrageBox:function(){
    this.setData({
      isShowBarrage:true,
    });
    //打开定时器
    // timer = setInterval(this.barrageText_move, 800),
      this.data.textColor = "rgb(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ")";
    // //设置弹幕字体的水平位置样式
    // var textWidth = -(this.data.bind_shootValue.length*0);
    //设置弹幕字体的垂直位置样式
    var barrageText_height = (Math.random()) * 266;
  },


  barrageText_move:function(){
    let topcisContent = this.data.topcisContent;
    let barrage_content=[];
//获得每个人的评论内容
    for (let i = 0; i < topcisContent.length;i++){
      let text_content = topcisContent[i].topicContent;
      for (let j = 0; j < text_content.length;j++){
        barrage_content.push = text_content[j].content;
      }
    }

this.setData({
  barrage: barrage_content
})

// //设置每个评论出现的位置
//     let textMove = barrage_style_arr[i].barrage_phoneWidth;
//     for (let index = 0; index < barrage_content.length;index++){
//       textMove = barrage_content[index].length;

//     }
  
  },


  //关闭弹幕
  closeBarrage: function () {
    this.setData({
      isShowBarrage: false,
    })
    clearInterval(timer);
  },


})
