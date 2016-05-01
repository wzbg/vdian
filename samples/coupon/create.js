/* 
* @Author: zyc
* @Date:   2016-04-29 16:25:42
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:08:18
*/
'use strict'

const vdian = require('../vdian')

const couponDao = vdian.coupon

let result = couponDao.create({
  reduce: 10,
  leastCost: 1000,
  stock: 100,
  buyerLimit: 1,
  title: '优惠券'
})
console.log(result)