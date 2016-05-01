/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:55
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:25:44
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.cancelTop({ itemID: '1828694125' }, '1828687029')
console.log(result)