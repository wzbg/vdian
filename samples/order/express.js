/* 
* @Author: zyc
* @Date:   2016-04-29 16:23:54
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:01:10
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.express({ order_id: '774424663152941', express_no: 888 })
result = orderDao.express('774424663152941', { express_no: 888 })
result = orderDao.express('774424663152941', 888)
console.log(result)