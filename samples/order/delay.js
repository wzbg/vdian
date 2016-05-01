/* 
* @Author: zyc
* @Date:   2016-04-29 16:24:28
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:18:34
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.delay({ order_id: '774424663152941', delay_time: 10 })
result = orderDao.delay('774424663152941', { delay_time: 7 })
result = orderDao.delay('774424663152941', 5)
result = orderDao.delay('774424663152941')
console.log(result)