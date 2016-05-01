/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:42
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 04:24:12
*/
'use strict'

const vdian = require('../vdian')

const cateDao = vdian.cate

let cates = cateDao.get()
console.log(cates)