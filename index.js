/* 
* @Author: zyc
* @Date:   2016-04-25 15:42:54
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-27 02:40:18
*/
'use strict'

const request = require('sync-request')

const base = 'https://api.vdian.com/'

module.exports = class {
  constructor (APPKEY, SECRET) {
    this.APPKEY = APPKEY
    this.SECRET = SECRET
  }

  get token() {
    if (this.TOKEN) return this.TOKEN
    const res = request('GET', base + 'token', {
      qs: {
        grant_type: 'client_credential',
        appkey: this.APPKEY,
        secret: this.SECRET
      }
    })
    const json = JSON.parse(res.body)
    const { result, status } = json
    if (result && result.access_token) {
      const self = this
      setTimeout(() => {
        self.TOKEN = ''
      }, result.expire_in * 999)
      return this.TOKEN = result.access_token
    }
    throw `${status.status_code}：${status.status_reason}`
  }

  api (param, method, version) {
    const res = request('POST', base + 'api', {
      qs: {
        public: JSON.stringify({
          version: version || '1.0',
          access_token: this.token,
          format: 'json',
          method
        }),
        param: JSON.stringify(param)
      }
    })
    const json = JSON.parse(res.body)
    const { result, status } = json
    if (!status.status_code) return result
    throw `${status.status_code}：${status.status_reason}`
  }
}