var util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    swiperCurrent: 0,
    boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'new_movies' },
      { key: 'top250' },
    ]
  },
  onLoad: function () {
    wx.showLoading({ title: '拼命加载中...' })

    var that = this;
    const tasks = this.data.boards.map(board => {
      return app.douban.find(board.key, 1, 8)
        .then(d => {
          board.title = d.title
          board.movies = d.subjects
          return board
        })
    })

    Promise.all(tasks).then(boards => {
      console.log("豆瓣数据：",boards)
      console.log("boards 0：", boards[0])

      this.setData({ boards: boards, loading: false })
      wx.hideLoading()
    })

    
  },
  //图片点击事件
  onImageTap: function (e) {
    var item = e.target.dataset.item
    console.log(item)

  }
})