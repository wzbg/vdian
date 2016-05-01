/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:01
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:22:53
*/
'use strict'

const vdian = require('../vdian')

const couponDao = vdian.coupon

let result = couponDao.delete({ couponId: '1988895' }, '1988895')
console.log(result)