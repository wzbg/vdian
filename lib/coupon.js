/* 
* @Author: zyc
* @Date:   2016-04-27 03:26:17
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-28 03:02:03
*/
'use strict'

const dateFormat = require('dateformat')

module.exports = class { // 店铺优惠券 API
  constructor (vdian) {
    this.vdian = vdian
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=创建店铺优惠券
  * reduce      优惠券金额(优惠额度，单位元)
  * leastCost   可以用券的最低订单金额(单位元)
  * stock       优惠券数量
  * buyerLimit  每人限领张数
  * startTime   优惠券生效时间，如2015-11-20 17:00:00
  * endTime     优惠券失效时间，如2015-11-20 17:00:00
  * openGet     true;false,是否在店铺中公开领取
  * showFinish  ???
  * title       分享文案(优惠券标题) 分享文案须输入50个字符内的英文、数字、汉字
  */
  create (param) { // 创建店铺优惠券
    param.startTime = param.startTime || new Date()
    if (!param.endTime) {
      const endtime = new Date(param.startTime)
      endtime.setMonth(endtime.getMonth() + 1)
      param.endTime = endtime
    }
    if (param.startTime instanceof Date) {
      param.startTime = dateFormat(param.startTime, 'yyyy-mm-dd HH:MM:ss')
    }
    if (param.endTime instanceof Date) {
      param.endTime = dateFormat(param.endTime, 'yyyy-mm-dd HH:MM:ss')
    }
    param.openGet = param.openGet ? true : false
    param.showFinish = param.showFinish ? true : false
    return this.vdian.api(param, 'create.shop.coupon')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=删除优惠券
  * couponId  优惠券ID
  */
  delete (couponId) { // 删除优惠券
    return this.vdian.api({ couponId }, 'delete.coupon')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=获取优惠券详情
  * couponId  优惠券ID
  */
  detail (couponId) { // 获取优惠券详情
    return this.vdian.api({ couponId }, 'get.shop.coupon.detail')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=根据状态获取优惠券列表
  * page_num   订单翻页(初始页为1)
  * page_size  单页条数
  * status     优惠券状态（可领取:1,已领完:2,已经过期:3,还未开始:4,已删除:-1）
  */
  list (param = {}) { // 根据状态获取优惠券列表
    if (!param.page_size || param.page_size < 1) param.page_size = 30
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    param.status = param.status || 1
    return this.vdian.api(param, 'get.shop.coupon.list')
  }

  /**
  * http://wiki.open.weidian.com/index.php?title=获取优惠券使用和领取报表
  * page_num   订单翻页(初始页为1)
  * page_size  单页条数
  * couponId   优惠券ID
  */
  report (couponId, param) { // 获取优惠券使用和领取报表
    if (typeof couponId === 'object') {
      param = couponId
    } else {
      param = param || {}
      param.couponId = couponId
    }
    if (!param.page_size || param.page_size < 1) param.page_size = 30
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    return this.vdian.api(param, 'get.shop.coupon.report')
  }
}
