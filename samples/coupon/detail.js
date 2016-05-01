/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:10
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:14:03
*/
'use strict'

const vdian = require('../vdian')

const couponDao = vdian.coupon

let coupon = couponDao.detail({ couponId: '1988895' }) // 传 param
coupon = couponDao.detail('1988895') // 直接传 couponId
console.log(coupon)