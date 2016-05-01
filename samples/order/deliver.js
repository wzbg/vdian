/* 
* @Author: zyc
* @Date:   2016-04-29 16:23:44
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 15:54:19
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.deliver({ order_id: '774424663152941' }) // 传 param
result = orderDao.deliver('774424663152941') // 直接传 orderId
console.log(result)