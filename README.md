# vdian

> 微店 非官方 SDK for node.js

## 使用方法请参照 [官方文档](http://wiki.open.weidian.com/)

## 技术支持
请发邮件至：yecheng@amandapp.com

## 初始化
```javascript
const Vdian = require('vdian')
const vdian = new Vdian(APPKEY, SECRET) // 证书信息
const itemDao = vdian.item              // 商品API
const cateDao = vdian.cate              // 商品分类API
const orderDao = vdian.order            // 订单API
const seckillDao = vdian.seckill        // 限时折扣商品 API
const couponDao = vdian.coupon          // 店铺优惠券 API
const cpsDao = vdian.cps                // CPS API
```

## 安装
### Node.js 安装
```sh
npm install vdian
```

## 使用方法及代码示例
### 商品接口
在 samples/item 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 list.js，将其中的参数改成你自己的 item 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/item
 node list
 ```

### 商品分类接口
在 samples/cate 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 get.js，将其中的参数改成你自己的 cate 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/cate
 node get
 ```

### 订单接口
在 samples/order 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 list.js，将其中的参数改成你自己的 order 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/order
 node list
 ```

### 限时折扣商品接口
在 samples/seckill 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 list.js，将其中的参数改成你自己的 seckill 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/seckill
 node list
 ```

### 店铺优惠券接口
在 samples/coupon 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 list.js，将其中的参数改成你自己的 coupon 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/coupon
 node list
 ```

### CPS接口
在 samples/cps 目录下的代码示例，使用方法：
 - 将 sample/vdian.js 中需要的参数修改
 - 打开需要执行的某个实例文件，如 search.js，将其中的参数改成你自己的 cps 实例参数
 - 执行示例文件即可, 如:

 ```javascript
 cd samples/cps
 node search
 ```

## API
### [商品接口](Item)
  * `get (param)` - [vdian.item.get] - 获取单个商品
  * `list (param = {})` - [vdian.item.list.get] - 获取全店商品
  * `add (param = {})` - [vdian.item.add] - 创建微店商品
  * `update (itemid, param = {})` - [vdian.item.update] - 更新商品信息
  * `delete (...itemids)` - [vdian.item.delete] - 删除单个商品
  * `addImage (itemid, ...imgs)` - [vdian.item.image.add] - 添加商品图片
  * `deleteImage (itemid, ...imgs)` - [vdian.item.image.delete] - 删除商品图片
  * `addSku (itemid, ...skus)` - [vdian.item.sku.add] - 添加商品型号
  * `updateSku (itemid, ...skus)` - [vdian.item.sku.update] - 更新商品型号
  * `deleteSku (itemid, ...skus)` - [vdian.item.sku.delete] - 删除商品型号
  * `setCate (itemids, ...cateids)` - [vdian.item.cate.set] - 设置商品的分类
  * `cancelCate (itemid, ...cateids)` - [vdian.item.cate.cancel] - 取消商品的分类
  * `onSale (itemid, opt = 1)` - [weidian.item.onSale] - 商品上下架
  * `setTop (...itemids)` - [vdian.set.top.item] - 设置店长推荐
  * `cancelTop (...itemids)` - [vdian.cancel.top.item] - 取消店长推荐

### [商品分类接口](Cate)
  * `get ()` - [vdian.shop.cate.get] - 获取商品分类
  * `add (...cates)` - [vdian.shop.cate.add] - 新增商品分类
  * `update (...cates)` - [vdian.shop.cate.update] - 编辑商品分类
  * `delete (...cateid)` - [vdian.shop.cate.delete] - 删除商品分类

### [订单接口](Order)
  * `list (param = {})` - [vdian.order.list.get] - 获取订单列表
  * `get (param)` - [vdian.order.get] - 获取订单详情
  * `deliver (param)` - [vdian.order.deliver] - 订单发货
  * `express (orderId, expressNo)` - [vdian.order.express.modify] - 修改物流信息
  * `modify (orderId, param = {})` - [vdian.order.modify] - 修改订单价格
  * `refund (orderId, isAccept = 0)` - [vdian.order.refund.accept] - 订单退款
  * `cancel (orderId, reason)` - [vdian.order.cancel] - 取消订单
  * `delay (orderId, delayTime = 3)` - [vdian.order.delay.accept] - 延长确认收货时间

### [限时折扣商品接口](Seckill)
  * `list (param = {})` - [vdian.seckill.list.get] - 获取限时折扣商品列表
  * `set (itemid, price)` - [vdian.seckill.item.set] - 设置限时折扣商品
  * `delete (...itemids)` - [vdian.seckill.item.delete] - 删除限时折扣商品

### [店铺优惠券接口](Coupon)
  * `create (param = {})` - [create.shop.coupon] - 创建店铺优惠券
  * `delete (...couponIds)` - [delete.coupon] - 删除优惠券
  * `detail (param)` - [get.shop.coupon.detail] - 获取优惠券详情
  * `list (param = {})` - [get.shop.coupon.list] - 根据状态获取优惠券列表
  * `report (couponId, param = {})` - [get.shop.coupon.report] - 获取优惠券使用和领取报表

### [CPS接口](Cps)
  * `search (param)` - [vdian.cps.item.search] - 搜索CPS商品列表
  * `get (param)` - [vdian.cps.item.get] - 获取CPS商品详情
  * `getpublic (param)` - [vdian.item.getpublic] - 获取商品公开详情

## 贡献者

https://github.com/wzbg/vdian

## 依赖
- [`dateformat`](https://www.npmjs.com/package/dateformat) - A node.js package for Steven Levithan's excellent dateFormat() function.
- [`sync-request`](https://www.npmjs.com/package/sync-request) - Make synchronous web requests with cross platform support.

#### 我们在代码中使用了ES6的不定参数、默认参数和解构等新特性，使用本SDK请升级到6.0或以上版本的node.js，在此声明。

## License
The MIT License (MIT)

Copyright (c) 2016