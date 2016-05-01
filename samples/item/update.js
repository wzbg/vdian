/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:39
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-30 02:44:29
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let item = itemDao.update({ // 传 param
  itemid: '1828436492',
  item_name: '修改商品'
})
item = itemDao.update('1828687029', { // 直接传 itemid
  price: 2000
})
console.log(item)