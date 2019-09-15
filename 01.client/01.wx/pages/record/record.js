Page({
  data: {
    windowHeight: null,
    changeSaying:false,
    indexSelect: 0,
    titles: [],
    ranks: [],
    rankIcon: [],
    headImg: '',
    i:1,
    imgs: [],
    footprintImg:'',
    backgrandImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3667678122,3437809409&fm=26&gp=0.jpg'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth) - 80) + 'rpx';
        that.setData({
          windowHeight: windowHeight
        });
      }
    });

    wx.request({
      url: 'http://192.168.1.107:8888/rank',
      success: function(res) {
        console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            titles: res.data.titles,
            ranks: res.data.titles[2].cardContent,
            rankIcon: res.data.titles[0].cardContent.splice(0, 3),
            headImg: res.data.titles[0].cardContent[0].url,
            imgs: res.data.titles[0].cardContent,
            footprintImg: res.data.titles[1].cardContent[0].url,
          });
        }
        console.log(that.data.backgrandImg, that.data.headImg, that.data.imgs)
      }
    })
  },

  changeBackImg: function(event) {
    let index = event.currentTarget.dataset.id;
    let i= this.data.i;
    if (index == 11) {
      i < 6 ? i++ : i=1;
      this.setData({
        backgrandImg: this.data.imgs[i].url,
        i:i,
      });
    }
    if(index == 13){
      this.setData({
        changeSaying:true,
      })
    }  
  },

  onChange: function(e) {
    let id = e.currentTarget.dataset.indexs;
    this.setData({
      indexSelect: id
    });
  },
  getHeight: function(e) {
    console.log(e);
  },
  closeSayingBox: function () {
    this.setData({
      changeSaying: false,
    })
  },
  backHomePage: function () {
    wx.switchTab({
      url: '../logs/logs',
    });
  },
 
})