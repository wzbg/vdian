/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:30
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-30 02:38:09
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let item = itemDao.add({
  itemName: '测试商品',
  price: 1000,
  stock: 100,
  bigImgs: ['http://wd.geilicdn.com/vshop395640-1390204649-1.jpg', 'http://img.geilicdn.com/open_1459286043171_386.jpg']
})
console.log(item)