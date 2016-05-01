/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:23
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-29 18:31:16
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let items = itemDao.list() // 不传参数
items = itemDao.list({}) // 传空参数
items = itemDao.list({ // 传所有参数
  page_size: 2,
  update_start: '2016-04-28 00:00:00',
  update_end: new Date(),
  page_num: 1,
  status: 1,
  orderby: 1
})
console.log(items)