/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:27
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:13:21
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.cancelCate({
  itemid: '1828694125',
  cate_ids: ['77938642']
})
result = itemDao.cancelCate('1828694125', {
  cate_ids: ['77935468', '77942191']
})
result = itemDao.cancelCate('1828694125', ['77942192'], '77942193')
console.log(result)