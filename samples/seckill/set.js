/* 
* @Author: zyc
* @Date:   2016-04-29 16:25:06
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:01:10
*/
'use strict'

const vdian = require('../vdian')

const seckillDao = vdian.seckill

// let result = seckillDao.set({
//   itemid: '1828694125',
//   price: 2000,
//   start_time: new Date(),
//   end_time: '2016-05-01 06:00:00'
// })
// let result = seckillDao.set('1828694125', {
//   price: 2000,
//   start_time: new Date(),
//   end_time: '2016-05-01 06:06:06'
// })
let result = seckillDao.set('1828694125', 2000)
console.log(result)