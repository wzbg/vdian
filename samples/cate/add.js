/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:51
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 04:24:34
*/
'use strict'

const vdian = require('../vdian')

const cateDao = vdian.cate

let cates = cateDao.add({
  cates: [{
    cate_name: '分类1',
    sort_num: 0
  }]
}, {
  cates: [{
    cate_name: '分类2'
  }]
}, {
  cate_name: '分类3',
  sort_num: 10
}, {
  cate_name: '分类4',
}, '分类5')
console.log(cates)