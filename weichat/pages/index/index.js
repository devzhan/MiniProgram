//index.js
//获取应用实例
var app = getApp()
var common =require("../../utils/common.js")
console.log("全局" + app.globalData)

Page({
  data:{
    metto:'hello world',
    userInfo:{},
    id :1,
    age :20,
    boolean :false,
    arr :[1,2,3],
    navbar:["首页","搜索","我"],
    currentTab:0,
    array:[{
      message:"foo"
    },{
      message:"bar"
    }],
    arrayNum:[1,2,3,4,5,6,7,8,9]

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
    wx.redirectTo({
      url: '../test/test',
    }),
    console.log(11)
  },
  gotomenu:function(){
    wx.navigateTo({
      url: "../menu/menu"
    })
    // common.sayHello("owen")
  },
  changeBg:function(){
    var bol = this.data.boolean;
    console.log("changebg")
    this.setData({
      boolean :!bol,
    })

  } ,
  navbarTap: function (e) {

    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      
    });

  }
},
 

)
