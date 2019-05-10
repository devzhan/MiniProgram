//index.js
//获取应用实例
var app = getApp()
console.log("全局" + app.globalData)

Page({
  data:{
    metto:'hello world',
    userInfo:{}
  },
  onLoad:function(){
    console.log("page onLoad")   
    var that = this
    app.getUserInfo(function(userInfo){
        that.setData({
          userInfo:userInfo
        })
    } )
  },
  onReady:function(){
    console.log("page onReady")
  },
  onShow:function(){
    console.log("page show")
  },
  onHide:function(){
    console.log("page hide")
  },

  onShareAppMessage:function(){
    console.log('page onShareAppMessage')
  },
  onUnload:function(){
    console.log('page onUnload')
  },
  changeMotto:function(){
    this.setData({
      // motto:"你好世界",
      motto:app.globalData.info,
      
    })
    console.log(app.globalData.info)
  }, 
  gototest :function(){
    wx.navigateTo({
      url: '../test/test?type=2',
    })
  },
  gotomenu:function(){
    wx.navigateTo({
      url: '../menu/menu',
    })
  }
}

)
