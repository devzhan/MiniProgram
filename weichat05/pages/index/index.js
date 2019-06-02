//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
    navLeftItems: [
      { id : 0,name:'家电'},
      { id  :1 ,name:'数码'},
      { id: 2, name: '母婴' },
      { id: 3, name: '生鲜' }],
    navRightItems: [
      { id: 0, parent_id:0,brands: ['TCL', '美的']},
      { id: 1, parent_id:1,brands: ["华为", 'OPPO'] }
      ,
      { id: 2, parent_id: 2, brands: ["飞鹤", '帮宝适'] }
      ,
      { id: 3, parent_id: 3, brands: ["牛肉", '羊肉'] }
      
    ],
    curNav:1,
    curIndex: 0

  },
  
  onLoad: function () {
  },
  switchRightTab: function(e){
    console.log(e)
    let id = e.target.dataset.id
    let index = e.target.dataset.id
    this.setData({
      curIndex : index,
      curNav : id
    })
    console.log(id)
    console.log(index)

  }
})
