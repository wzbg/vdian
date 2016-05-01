/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:48
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:40:25
*/
'use strict'

const vdian = require('../vdian')

const cpsDao = vdian.cps

let cps = cpsDao.get({ itemid: '1828694125' })
cps = cpsDao.get('1828694125')
console.log(cps)