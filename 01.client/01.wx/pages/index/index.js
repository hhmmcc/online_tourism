//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index:0
  },
  onClick:function(){
    
    this.setData({
      index: 1
    });
    

 },
 onHide:function(){
   this.setData({
     index: 0
   });
 }
})
