/* 
* @Author: zyc
* @Date:   2016-04-29 16:24:02
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:05:48
*/
'use strict'

const vdian = require('../vdian')

const orderDao = vdian.order

let result = orderDao.modify({ order_id: '774424663152941', total_items_price: 8888, express_price: 12  })
result = orderDao.modify('774424663152941', { total_items_price: 8888, express_price: 12 })
console.log(result)