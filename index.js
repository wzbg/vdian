/* 
* @Author: zyc
* @Date:   2016-04-25 15:42:54
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:20:15
*/
'use strict'

const request = require('sync-request')

const Item = require('./lib/item')       // 商品API
const Cate = require('./lib/cate')       // 商品分类API
const Order = require('./lib/order')     // 订单API
const Seckill = require('./lib/seckill') // 限时折扣商品 API
const Coupon = require('./lib/coupon')   // 店铺优惠券 API
const Cps = require('./lib/cps')         // CPS API

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
      // const self = this
      // setTimeout(() => {
      //   self.TOKEN = ''
      // }, result.expire_in * 999)
      return this.TOKEN = result.access_token
    }
    throw { code: status.status_code, reason: status.status_reason }
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
    let { result, status } = json
    status = { code: status.status_code, reason: status.status_reason }
    if (!status.code) return result || status
    if (status.code === 10013) { // access_token无效
      this.TOKEN = ''
      return this.api(param, method, version)
    }
    // console.error(status)
    throw status
  }

  get item() { return new Item(this) }
  get cate() { return new Cate(this) }
  get order() { return new Order(this) }
  get seckill() { return new Seckill(this) }
  get coupon() { return new Coupon(this) }
  get cps() { return new Cps(this) }
}
