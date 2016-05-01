/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:18
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:09:24
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let result = itemDao.setCate({
  item_ids: ['1828694125'],
  cate_ids: ['77938642']
})
result = itemDao.setCate(['1828694125'], {
  cate_ids: ['77935468']
})
result = itemDao.setCate('1828694125', {
  cate_ids: ['77942191']
})
result = itemDao.setCate('1828694125', ['77942192'])
result = itemDao.setCate('1828694125', '77942193')
console.log(result)