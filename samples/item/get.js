/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:14
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-30 03:13:54
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let item = itemDao.get({ itemid: '1826690737' }) // 传 param
item = itemDao.get('1828687029') // 直接传 itemid
console.log(item)