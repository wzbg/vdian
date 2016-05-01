/* 
* @Author: zyc
* @Date:   2016-04-29 16:23:19
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 15:46:36
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let orders = orderDao.list() // 不传参数
orders = orderDao.list({}) // 传空参数
orders = orderDao.list({ // 传所有参数
  order_type: 'finish',  
  page_num: 1,
  page_size: 2,
  add_start: '2016-04-28 00:00:00',
  add_end: new Date(),
  update_start: '2016-04-28 00:00:00',
  update_end: new Date()
})
console.log(orders)