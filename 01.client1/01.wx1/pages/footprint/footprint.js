// pages/footprint/footprint.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   Component({
      data: {
        weekArr: ["日","一", "二", "三", "四", "五", "六"],
    yearMonth: [],
    rowNum: "",
    dateArr: [],
    currentMonth: "",
    year: "",
    weekNum: ""
  },
  created: function () { },
  attached: function () {
    let T = new Date()
    this.setData({
      currentMonth: T.getMonth() + 1,
      year: T.getFullYear()
    })
    //判断闰年
    let yeartype = (this.data.year % 4 == 0) && (this.data.year % 100 != 0 || this.data.year % 400 == 0)
    if (yeartype) {
      this.setData({
        yearMonth: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      })
    } else {
      this.setData({
        yearMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      })
    }
    let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
    let weekStr = ""
    this.setData({
      weekNum: new Date(currentMonthDay).getDay(),
      rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth] + new Date(currentMonthDay).getDay()) / 7)
    })
    for (let i = 0; i < this.data.rowNum; i++) {
      for (let j = 0; j < 7; j++) {
        this.data.dateArr.push(i * 7 + j)
      }
    }
    this.setData({
      dateArr: this.data.dateArr
    })
  },
  methods: {
    //获取下一个月份
    add: function () {
      this.triggerEvent("addone")
      this.setData({
        dateArr: []
      })
      if (this.data.currentMonth == 12) {
        this.setData({
          currentMonth: 1,
          year: this.data.year + 1
        })
      } else {
        this.setData({
          currentMonth: this.data.currentMonth + 1
        })
      }
      let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
      let weekStr = ""
      this.setData({
        weekNum: new Date(currentMonthDay).getDay(),
        rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth - 1] + new Date(currentMonthDay).getDay()) / 7)
      })
      for (let i = 0; i < this.data.rowNum; i++) {
        for (let j = 0; j < 7; j++) {
          this.data.dateArr.push(i * 7 + j)
        }
      }
      this.setData({
        dateArr: this.data.dateArr
      })
    },
    //获取上一个月份
    reduce: function () {
      this.triggerEvent("reduceone")
      this.setData({
        dateArr: []
      })
      if (this.data.currentMonth == 1) {
        this.setData({
          currentMonth: 12,
          year: this.data.year - 1
        })
      } else {
        this.setData({
          currentMonth: this.data.currentMonth - 1
        })
      }
      let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
      let weekStr = ""
      this.setData({
        weekNum: new Date(currentMonthDay).getDay(),
        rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth - 1] + new Date(currentMonthDay).getDay()) / 7)
      })
      for (let i = 0; i < this.data.rowNum; i++) {
        for (let j = 0; j < 7; j++) {
          this.data.dateArr.push(i * 7 + j)
        }
      }
      this.setData({
        dateArr: this.data.dateArr
      })
      console.log(this.data.dateArr)
    }
  }
})
//   },

 

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })