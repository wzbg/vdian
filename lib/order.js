/* 
* @Author: zyc
* @Date:   2016-04-25 17:23:34
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-27 03:27:22
*/
'use strict'

module.exports = class { // 订单API
  constructor (vdian) {
    this.vdian = vdian
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取订单列表
  * order_type      
  *   支持入参：
  *     unpay（未付款订单）
  *     pend（待处理订单，已就是待发货订单）
  *     refund（退款中订单，version参数必须传1.1）
  *     close（关闭的订单）
  *     finish（完成的订单）
  *     refund（退款中订单）
  *   当version为1.1时： 此参数为可选，不传返回全部状态的订单
  * page_num      订单翻页 初始页为1
  * page_size     单页条数 默认为30条每页 最多支持200条,建议每页不超过100条
  * add_start     订单创建时间段的开始时间，如：2014-11-12 16:36:08 精确到秒
  * add_end       订单创建时间段的结束时间，如：2014-11-12 16:36:08 精确到秒
  * update_start  订单更新时间段的开始时间，如：2014-11-12 16:36:08 精确到秒
  * update_end    订单更新时间段的结束时间，如：2014-11-12 16:36:08 精确到秒
  */
  list (param) { // 获取订单列表
    param = param || {}
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    return this.vdian.api(param, 'vdian.order.list.get', 1.1)
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取订单详情
  * order_id  订单ID
  */
  get (orderId) { // 获取订单详情
    return this.vdian.api({ order_id: orderId }, 'vdian.order.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=订单发货
  * order_id        订单ID
  * express_type    支持快递类型（默认为无需物流发货）
  * express_no      快递单号，特殊必选
  * express_custom  自定义快递，特殊可选
  */
  deliver (param) { // 订单发货
    if (typeof param !== 'object') param = { order_id: param }
    param.express_type = param.express_type || 999
    return this.vdian.api(param, 'vdian.order.deliver')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=修改物流信息
  * order_id        订单ID
  * express_type    支持快递类型
  * express_no      快递单号，特殊必选
  * express_custom  自定义快递，特殊可选
  * express_note    订单备注（卖家）
  */
  express (orderId, expressNo) { // 修改物流信息
    let param = {}
    if (typeof orderId === 'object') {
      param = orderId
    } else {
      if (typeof expressNo === 'object') {
        param = expressNo
      } else {
        param.express_no = expressNo
      }
      param.order_id = orderId
    }
    return this.vdian.api(param, 'vdian.order.express.modify')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=修改订单价格
  * order_id           订单ID
  * total_items_price  修改订单的商品总价
  * express_price      修改订单运费价格
  */
  modify (orderId, param) { // 修改订单价格
    if (typeof orderId === 'object') {
      param = orderId
    } else {
      param.order_id = orderId
    }
    return this.vdian.api(param, 'vdian.order.modify')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=订单退款
  * order_id   订单ID
  * is_accept  是否退款（默认为0拒绝退款）
  *              只有传1时才会进行退款
  *              传0拒绝退款
  *              只有在订单状态为“accept_refunding”时，商家才能传0拒绝退款
  */
  refund (orderId, isAccept) { // 订单退款
    let param = {}
    if (typeof orderId === 'object') {
      param = orderId
    } else {
      if (typeof isAccept === 'object') {
        param = isAccept
      } else {
        param.is_accept = isAccept || 0
      }
      param.order_id = orderId
    }
    return this.vdian.api(param, 'vdian.order.refund.accept')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=取消订单
  * order_id  订单ID
  * reason    取消原因
  */
  cancel (orderId, reason) { // 取消订单
    let param = {}
    if (typeof orderId === 'object') {
      param = orderId
    } else {
      if (typeof reason === 'object') {
        param = reason
      } else {
        param.reason = reason
      }
      param.order_id = orderId
    }
    return this.vdian.api(param, 'vdian.order.cancel')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=延长确认收货时间
  * order_id    订单ID
  * delay_time  延长时间，可填3/5/7/10/15/20天
  */
  delay (orderId, delayTime) { // 延长确认收货时间
    let param = {}
    if (typeof orderId === 'object') {
      param = orderId
    } else {
      if (typeof delayTime === 'object') {
        param = delayTime
      } else {
        param.delay_time = delayTime
      }
      param.order_id = orderId
    }
    return this.vdian.api(param, 'vdian.order.delay.accept')
  }
}