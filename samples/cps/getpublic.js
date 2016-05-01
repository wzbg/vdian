/* 
* @Author: zyc
* @Date:   2016-04-29 16:27:01
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:40:24
*/
'use strict'

const vdian = require('../vdian')

const cpsDao = vdian.cps

let cps = cpsDao.getpublic({ itemid: '1828694125' })
cps = cpsDao.getpublic('1828694125')
console.log(cps)