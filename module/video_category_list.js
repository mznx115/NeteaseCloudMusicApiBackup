// 视频分类列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 99,
  }
  return request(
    'POST',
    `https://music.163.com/api/cloudvideo/category/list`,
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
