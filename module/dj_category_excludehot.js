// 电台非热门类型

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/category/excludehot`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
