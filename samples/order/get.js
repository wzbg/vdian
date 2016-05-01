/* 
* @Author: zyc
* @Date:   2016-04-29 16:23:34
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 15:48:32
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let order = orderDao.get({ order_id: '774424663152941' }) // 传 param
order = orderDao.get('774424663152941') // 直接传 orderId
console.log(order)