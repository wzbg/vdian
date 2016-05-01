/* 
* @Author: zyc
* @Date:   2016-04-29 16:24:11
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:09:29
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.refund({ order_id: '774424663152941', is_accept: 1 })
result = orderDao.refund('774424663152941', { is_accept: 1 })
result = orderDao.refund('774424663152941', 1)
result = orderDao.refund('774424663152941')
console.log(result)