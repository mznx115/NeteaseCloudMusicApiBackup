// 歌曲详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.ids = query.ids.split(/\s*,\s*/)
  const data = {
    c: '[' + query.ids.map((id) => '{"id":' + id + '}').join(',') + ']',
  }
  return request('POST', `https://music.163.com/api/v3/song/detail`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
