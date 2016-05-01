/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:00
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 04:29:22
*/
'use strict'

const vdian = require('../vdian')

const cateDao = vdian.cate

let cates = cateDao.update({
  cates: [{
    sort_num: 10,
    cate_id: '78187965'
  }]
}, {
  cates: [{
    sort_num: 20,
    cate_id: '78187966'
  }]
}, {
  sort_num: 30,
  cate_id: '78187967'
}, {
  sort_num: 40,
  cate_id: '78187968'
}, {
  sort_num: 50,
  cate_id: '78187969'
})
console.log(cates)