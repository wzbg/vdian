/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:27
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:20:07
*/
'use strict'

const vdian = require('../vdian')

const couponDao = vdian.coupon

let report = couponDao.report({ // 传 param
  couponId: '1988895',
  page_size: 2,
  page_num: 1
})
report = couponDao.report('1988895', { // 直接传 couponId
  page_size: 2,
  page_num: 1
})
report = couponDao.report('1988895') // 只传 couponId
console.log(report)