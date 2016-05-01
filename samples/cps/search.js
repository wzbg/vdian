/* 
* @Author: zyc
* @Date:   2016-04-29 16:26:39
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 05:40:31
*/
'use strict'

const vdian = require('../vdian')

const cpsDao = vdian.cps

let cps = cpsDao.search({ keyword: 'wq' })
cps = cpsDao.search('mayi')
console.log(cps)