/* 
* @Author: zyc
* @Date:   2016-04-29 16:25:14
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 06:01:19
*/
'use strict'

const vdian = require('../vdian')

const seckillDao = vdian.seckill

let result = seckillDao.delete({ itemid: '1828694125' }, '1828687029')
console.log(result)