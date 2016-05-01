/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:38
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:18:34
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.onSale({
  itemid: '1828694125',
  opt: 1
})
result = itemDao.onSale('1828694125', {
  opt: 2
})
result = itemDao.onSale('1828694125', 1)
result = itemDao.onSale('1828694125')
console.log(result)