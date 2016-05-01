/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:18
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:11:35
*/
'use strict'

const vdian = require('../vdian')

const couponDao = vdian.coupon

let coupons = couponDao.list() // 不传参数
coupons = couponDao.list({}) // 传空参数
coupons = couponDao.list({ // 传所有参数
  page_size: 2,
  page_num: 1,
  status: 1
})
console.log(coupons)