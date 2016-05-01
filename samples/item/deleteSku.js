/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:31
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 03:36:11
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let skus = itemDao.deleteSku({
  itemid: '1828694125',
  skus: ['5214604347']
})
skus = itemDao.deleteSku('1828694125', {
  skus: ['5214604354']
})
skus = itemDao.deleteSku('1828694125', '5214604362')
skus = itemDao.deleteSku('1828694125', {
  skus: ['5214604374']
}, '5214604375')
console.log(skus)