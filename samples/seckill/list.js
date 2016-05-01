/* 
* @Author: zyc
* @Date:   2016-04-29 16:24:51
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:47:08
*/
'use strict'

const vdian = require('../vdian')

const seckillDao = vdian.seckill

let seckills = seckillDao.list() // 不传参数
seckills = seckillDao.list({}) // 传空参数
seckills = seckillDao.list({ // 传所有参数
  page_size: 2,
  page_num: 1,
  orderby: 'sold'
})
console.log(seckills)