/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:04
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 03:30:45
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.deleteImage({
  itemid: '1828687029',
  delete_imgs: ['http://wd.geilicdn.com/vshop395640-1390204649-1.jpg?']
})
result = itemDao.deleteImage('1828687029', {
  delete_imgs: ['http://wd.geilicdn.com/vshop395640-1390204649-2.jpg?']
})
result = itemDao.deleteImage('1828687029', 'http://wd.geilicdn.com/vshop395640-1390204649-3.jpg?')
result = itemDao.deleteImage('1828687029', {
  delete_imgs: ['http://wd.geilicdn.com/vshop395640-1390204649-4.jpg?']
}, 'http://wd.geilicdn.com/vshop395640-1390204649-5.jpg?')
console.log(result)