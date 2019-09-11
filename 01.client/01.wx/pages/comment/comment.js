const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentImag:null,
    user_name:null,
    userContent:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = app.globalData.topcisContent[options.userid].topicContent[options.userIndex].imgs;
    let user_name = app.globalData.topcisContent[options.userid].topicContent[options.userIndex].user_name;
    let userContent = app.globalData.topcisContent[options.userid].topicContent[options.userIndex].content;
    console.log(url);
    this.setData({
      contentImag: url,
      user_name: user_name,
      userContent: userContent
    });
  },

})