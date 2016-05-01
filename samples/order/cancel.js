/* 
* @Author: zyc
* @Date:   2016-04-29 16:24:19
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:12:53
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.cancel({ order_id: '774424663152941', reason: '取消原因' })
result = orderDao.cancel('774424663152941', { reason: '取消原因' })
result = orderDao.cancel('774424663152941', '取消原因')
console.log(result)