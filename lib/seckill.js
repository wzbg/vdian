/* 
* @Author: zyc
* @Date:   2016-04-25 17:24:12
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-28 02:23:39
*/
'use strict'

const dateFormat = require('dateformat')

module.exports = class { // 限时折扣商品 API
  constructor (vdian) {
    this.vdian = vdian
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=获取限时折扣商品列表
  * page_size  单页条数，最大100条，建议100条以下
  * page_num   页码，从1开始
  * orderby    排序方式如下：
  *              time---上架时间
  *              sold---销量
  *              stock--库存
  */
  list (param = {}) { // 获取限时折扣商品列表
    if (!param.page_size || param.page_size < 1) param.page_size = 30
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    param.orderby = param.orderby || 'time'
    return this.vdian.api(param, 'vdian.seckill.list.get')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=设置限时折扣商品
  * itemid      商品id
  * price       折扣价格
  * quantity    限购数量，不限购传999999
  * start_time  开始时间，如2015-11-18 17:00:00
  * end_time    结束时间，如2015-11-20 17:00:00
  */
  set (itemid, price) { // 设置限时折扣商品
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof price === 'object') {
        param = price
      } else {
        param.price = price
      }
      param.itemid = itemid
    }
    param.quantity = param.quantity || 999999
    param.start_time = param.start_time || new Date()
    if (!param.end_time) {
      const endtime = new Date(param.start_time)
      endtime.setMonth(endtime.getMonth() + 1)
      param.end_time = endtime
    }
    if (param.start_time instanceof Date) {
      param.start_time = dateFormat(param.start_time, 'yyyy-mm-dd HH:MM:ss')
    }
    if (param.end_time instanceof Date) {
      param.end_time = dateFormat(param.end_time, 'yyyy-mm-dd HH:MM:ss')
    }
    return this.vdian.api(param, 'vdian.seckill.item.set')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=删除限时折扣商品
  * 
  */
  delete (itemid) { // 删除限时折扣商品
    return this.vdian.api({ itemid }, 'vdian.seckill.item.delete')
  }
}
