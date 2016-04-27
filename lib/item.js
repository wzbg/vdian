/* 
* @Author: zyc
* @Date:   2016-04-25 17:22:54
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-27 03:26:52
*/
'use strict'

module.exports = class { // 商品API
  constructor (vdian) {
    this.vdian = vdian
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取单个商品
  * itemid  商品ID
  */
  get (itemid) { // 获取单个商品
    return this.vdian.api({ itemid }, 'vdian.item.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取全店商品
  * page_size     单页条数，默认值30，最大200条，建议100条以下
  * update_start  商品更新时间段开始时间，精确到秒，如：2014-11-12 16:36:08
  * update_end    商品更新时间段结束时间，精确到秒，如：2014-11-12 16:36:08
  * page_num      返回页码
  * status        status =1 或不传为在架商品，status=2 为下架商品
  * orderby       默认值1。
  *               排序方式如下：
  *                 1---优先推荐
  *                 2---优先已售完
  *                 3---销量倒序
  *                 4---销量正序
  *                 5---库存倒序
  *                 6---库存正序
  */
  list (param) { // 获取全店商品
    param = param || {}
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    return this.vdian.api(param, 'vdian.item.list.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=创建微店商品
  * price                 商品价格
  * itemName              如：“这个是一段商品描述”
  *                         最多6000个字符（注意：请使用POST方式调用）
  * stock                 库存
  * sku                   商品型号
  *                         stock：库存
  *                         title：sku名称
  *                         price：价格
  * bigImgs               商品图片（默认为无图）
  * titles                商品图片描述
  * cate_id               商品分类id，多个分类通过“,”分割
  * free_delivery         是否包邮：1不包邮，0包邮（默认为0包邮）
  * remote_free_delivery  偏远地区是否包邮：1不包邮，0包邮（默认为0包邮）
  */
  add (param) { // 创建微店商品
    param = param || {}
    param.bigImgs = param.bigImgs || []
    param.free_delivery = param.free_delivery || 0
    param.remote_free_delivery = param.remote_free_delivery || 0
    return this.vdian.api(param, 'vdian.item.add', 1.1)
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=更新商品信息
  * itemID                商品ID
  * price                 商品价格
  * itemName              如：“这个是一段商品描述”
  *                         最多6000个字符（注意：请使用POST方式调用）
  * stock                 库存
  * sku                   商品型号
  *                         stock：库存
  *                         title：sku名称
  *                         price：价格
  * bigImgs               商品图片（默认为无图）
  * titles                商品图片描述
  * cate_id               商品分类id，多个分类通过“,”分割
  * free_delivery         是否包邮：1不包邮，0包邮（默认为0包邮）
  * remote_free_delivery  偏远地区是否包邮：1不包邮，0包邮（默认为0包邮）
  */
  update (itemid, param) { // 更新商品信息
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      param.itemid = itemid
    }
    param.bigImgs = param.bigImgs || []
    param.free_delivery = param.free_delivery || 0
    param.remote_free_delivery = param.remote_free_delivery || 0
    return this.vdian.api(param, 'vdian.item.update')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除单个商品
  * itemid  商品ID
  */
  delete (itemid) { // 删除单个商品
    return this.vdian.api({ itemid }, 'vdian.item.delete')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=添加商品图片
  * itemid  商品ID
  * imgs    图片URL字符数组,单个商品最多添加40张图片
  *           注意：图片URL必须进行URLEncode
  */
  addImage (itemid, imgs) { // 添加商品图片
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof imgs === 'object') {
        if (imgs instanceof Array) {
          param.imgs = imgs
        } else {
          param = imgs
        }
      } else if (typeof imgs === 'string') {
        param.imgs = [imgs]
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.image.add')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除商品图片
  * itemid       商品ID
  * delete_imgs  需要删除的图片URL字符数组,单个商品单次最多同时删除9张图片
  *                注意：图片URL必须进行URLEncode
  */
  deleteImage (itemid, imgs) { // 删除商品图片
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof imgs === 'object') {
        if (imgs instanceof Array) {
          param.delete_imgs = imgs
        } else {
          param = imgs
        }
      } else if (typeof imgs === 'string') {
        param.delete_imgs = [imgs]
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.image.delete')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=添加商品型号
  * itemid  商品ID
  * skus    更新sku，必须上传sku的id字段
  *           title，必选，最多70个汉字
  *           price，必选，输入范围0.01-99999999999.99
  *           stock，必选，取值范围（0-999999999）
  *           sku_merchant_code，可选，最长40个字符,可以为空
  */
  addSku (itemid, skus) { // 添加商品型号
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof skus === 'object') {
        param = skus
      } else {
        param.skus = skus
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.sku.add')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=更新商品型号
  * itemid  商品ID
  * skus    更新sku，必须上传sku的id字段
  *           id，必选，商品型号的ID
  *           title，必选，最多70个汉字
  *           price，必选，输入范围0.01-99999999999.99
  *           stock，必选，取值范围（0-999999999）
  *           sku_merchant_code，可选，最长40个字符,可以为空
  */
  updateSku (itemid, skus) { // 更新商品型号
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof skus === 'object') {
        param = skus
      } else {
        param.skus = skus
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.sku.update')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除商品型号
  * itemid  商品ID
  * skus    型号ID数组
  */
  deleteSku (itemid, skus) { // 删除商品型号
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof skus === 'object') {
        if (skus instanceof Array) {
          param.skus = skus
        } else {
          param = skus
        }
      } else if (typeof skus === 'string') {
        param.skus = [skus]
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.sku.delete')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取商品分类
  * 无
  */
  getCate () { // 获取商品分类
    return this.vdian.api({}, 'vdian.shop.cate.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=新增商品分类
  * cates 分类对象
  *   cate_name  分类名称
  *   sort_num   分类排序
  */
  addCate (cates) { // 新增商品分类
    let param = {}
    if (cates instanceof Array) {
      param.cates = cates.map((cate, index) => {
        if (typeof cate === 'string') {
          return { cate_name: cate, sort_num: index }
        }
        return cate
      })
    } else {
      param = cates
    }
    return this.vdian.api(param, 'vdian.shop.cate.add')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=编辑商品分类
  * cates 分类对象
  *   cate_name  分类名称
  *   sort_num   分类排序
  *   cate_id    分类ID
  */
  updateCate (cates) { // 编辑商品分类
    let param = {}
    if (cates instanceof Array) {
      param.cates = cates
    } else {
      param = cates
    }
    return this.vdian.api(param, 'vdian.shop.cate.update')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除商品分类
  * cate_id  分类ID
  */
  deleteCate (cateid) { // 删除商品分类
    return this.vdian.api({ cate_id: cateid }, 'vdian.shop.cate.delete')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=设置商品的分类
  * item_ids  商品ID数组
  * cate_ids  分类ID数组
  */
  setCate (itemids, cateids) { // 设置商品的分类
    let param = {}
    if (itemids instanceof Array) {
      if (cateids instanceof Array) {
        param.cate_ids = cateids
      } else {
        param = cateids
      }
      param.item_ids = itemids
    } else {
      param = itemids
    }
    return this.vdian.api(param, 'vdian.item.cate.set')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=取消商品的分类
  * itemid    商品ID
  *             单次调用只能取消一个商品的分类
  * cate_ids  分类ID数组
  *             必须是已存在的分类id
  *             单次支持同时取消最多20个分类
  */
  cancelCate (itemid, cateids) { // 取消商品的分类
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (cateids instanceof Array) {
        param.cate_ids = cateids
      } else {
        param = cateids
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.cate.cancel')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=商品上下架
  * itemid  商品ID
  * opt     1表示商品上架，2表示商品下架（默认为1上架）
  */
  onSale (itemid, opt) { // 商品上下架
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof opt === 'object') {
        param = opt
      } else {
        param.opt = opt || 1
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'weidian.item.onSale')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=设置店长推荐
  * itemid  商品ID
  */
  setTop (itemid) { // 设置店长推荐
    return this.vdian.api({ itemID: itemid }, 'vdian.set.top.item')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=取消店长推荐
  * itemid  商品ID
  */
  cancelTop (itemid) { // 取消店长推荐
    return this.vdian.api({ itemID: itemid }, 'vdian.cancel.top.item')
  }
}
