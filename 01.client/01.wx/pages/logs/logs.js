//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    windowHeight: null,
    isShow: false,
    line: 0,
    listIdex: 0,
    color: "",
    arrayList: [
      { title: "全部内容" },
      { title: "精华内容" },
      { title: "旅行攻略" },
      { title: "旅行女子图鉴" },
      { title: "结伴同游" },
      { title: "旅行问答" },
      { title: "故事分享" },
      { title: "一日一图" },
      { title: "旅途音乐" }
    ],
    arrayRank: [
      { name: "hmc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "xxx", src: "http://img2.imgtn.bdimg.com/it/u=3216184292,1116537532&fm=11&gp=0.jpg" },
      { name: "xxx", src: "http://img2.imgtn.bdimg.com/it/u=3216184292,1116537532&fm=11&gp=0.jpg" },
      { name: "hmc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmcc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmcc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmccc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmccc", src: "http://img3.imgtn.bdimg.com/it/u=4219800219,733625680&fm=26&gp=0.jpg" },
      { name: "hmc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmccc", src: "http://img5.imgtn.bdimg.com/it/u=1341251641,1856723926&fm=26&gp=0.jpg" },
      { name: "hmc", src: "http://img5.imgtn.bdimg.com/it/u=358824665,996889746&fm=26&gp=0.jpg" }
    ],
    arrayContentItem: [
      {
        name: "旅行菌",
        title: "#旅行女子图鉴#",
        content: "今天心情很好",
        imgs: [
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img0.imgtn.bdimg.com/it/u=364356807,675598281&fm=26&gp=0.jpg" },
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img5.imgtn.bdimg.com/it/u=1813981557,1511985548&fm=26&gp=0.jpg" },
        ]
      },
      {
        name: "存在",
        title: "#结伴同游#",
        content: "今天心情很好，结伴同游",
        imgs: [
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img0.imgtn.bdimg.com/it/u=364356807,675598281&fm=26&gp=0.jpg" },
        ]
      },
      {
        name: "荒芜",
        title: "#旅行问答#",
        content: "旅行的意义在于享受",
        imgs: [
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img0.imgtn.bdimg.com/it/u=364356807,675598281&fm=26&gp=0.jpg" },
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },

        ]
      },
      {
        name: "旅行者",
        title: "#故事分享#",
        content: "今天心情很好，这世界很好",
        imgs: [
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img0.imgtn.bdimg.com/it/u=364356807,675598281&fm=26&gp=0.jpg" },
          { src: "http://img2.imgtn.bdimg.com/it/u=124617016,2168959786&fm=26&gp=0.jpg" },
          { src: "http://img5.imgtn.bdimg.com/it/u=1813981557,1511985548&fm=26&gp=0.jpg" },
          { src: "http://img5.imgtn.bdimg.com/it/u=1813981557,1511985548&fm=26&gp=0.jpg" },
          { src: "http://img5.imgtn.bdimg.com/it/u=1813981557,1511985548&fm=26&gp=0.jpg" },
        ]
      }
    ],
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

  tabChange: function (res) {
    let query = res.currentTarget.dataset.line;
    this.setData({
      line: query,
    });
    console.log(this.data.line);
  },
  onChangeList: function (res) {
    let query = res.currentTarget.dataset.index;
    this.setData({
      listIdex: query,
    });
  },
  toNavigateRewardPrice: function () {
    wx.navigateTo({
      url: '../reward/reward',
    })
  },
  toNavigateCommentView: function () {
    wx.navigateTo({
      url: '../comment/comment',
    })
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
