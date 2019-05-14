const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
function getSearchMusic(keyword,pageindex,callbackcount,callback){
  wx.request({
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
    data:{
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w: keyword,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf-8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: callbackcount,
      p: pageindex,
      remoteplace: 'txt.mqq.all',
      _: Date.now()
    },
    method: 'GET',
    header: {'content-Type': 'application/json' },
    success: function(res){
      console.log('res----', res)
      if(res.statusCode==200){
        callback(res.data);
      }
    },
    fail:function(){
      console.log("fail")
      var searchSongList={
        song:{
          curnum: 1,
          list: [{
            songname:"向往",
            isonly:0,
            singer:{name:"李健"}
          }],
        }
        ,
        zhida: "pop",
        isFromSearch: true,

      };
      callback({data:searchSongList})
    }
  })
}

module.exports = {
  getSearchMusic: getSearchMusic
}
