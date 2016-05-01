/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:47
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-30 02:01:31
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.delete({ itemid: '1828436492' })
result = itemDao.delete('1828436492')
result = itemDao.delete('1828672547', '1828687009')
console.log(result)