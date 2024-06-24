// 收藏与取消收藏歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.t = query.t == 1 ? 'subscribe' : 'unsubscribe'
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/api/playlist/${query.t}`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
