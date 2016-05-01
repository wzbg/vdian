/* 
* @Author: zyc
* @Date:   2016-04-29 16:29:09
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 04:38:46
*/
'use strict'

const vdian = require('../vdian')

const cateDao = vdian.cate

let result = cateDao.delete({
  cate_id: '78187965'
}, '78187966', {
  cate_id: '78187967'
}, '78187968', {
  cate_id: '78187969'
})
console.log(result)