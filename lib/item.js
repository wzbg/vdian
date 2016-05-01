/* 
* @Author: zyc
* @Date:   2016-04-25 17:22:54
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:27:59
*/
'use strict'

const dateFormat = require('dateformat')

module.exports = class { // 商品API
  constructor (vdian) {
    this.vdian = vdian
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取单个商品
  * itemid  商品ID
  */
  get (param) { // 获取单个商品
    if (typeof param !== 'object') param = { itemid: param }
    return this.vdian.api(param, 'vdian.item.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取全店商品
  * page_size     单页条数，默认值30，最大200条，建议100条以下
  * update_start  商品更新时间段开始时间，精确到秒，如：2014-11-12 16:36:08
  * update_end    商品更新时间段结束时间，精确到秒，如：2014-11-12 16:36:08
  * page_num      返回页码 初始页为1
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
  list (param = {}) { // 获取全店商品
    if (!param.page_num || param.page_num < 1) param.page_num = 1
    for (let key in param) {
      if (param[key] instanceof Date) {
        param[key] = dateFormat(param[key], 'yyyy-mm-dd HH:MM:ss')
      }
    }
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
  add (param = {}) { // 创建微店商品
    param.bigImgs = param.bigImgs || []
    param.free_delivery = param.free_delivery || 0
    param.remote_free_delivery = param.remote_free_delivery || 0
    return this.vdian.api(param, 'vdian.item.add', 1.1)
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=更新商品信息
  * itemID                商品ID
  * price                 商品价格
  * item_name             如：“这个是一段商品描述”
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
  update (itemid, param = {}) { // 更新商品信息
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.update')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除N个商品
  * itemid  商品ID
  */
  delete (...itemids) { // 删除N个商品
    const result = { success: [], fail: [] }
    for (let param of itemids) {
      if (typeof param !== 'object') param = { itemid: param }
      try {
        this.vdian.api(param, 'vdian.item.delete')
        result.success.push(param.itemid)
      } catch (error) {
        result.fail.push({
          itemid: param.itemid,
          reason: error.reason
        })
      }
    }
    return result
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=添加商品图片
  * itemid  商品ID
  * imgs    图片URL字符数组,单个商品最多添加40张图片
  *           注意：图片URL必须进行URLEncode
  */
  addImage (itemid, ...imgs) { // 添加商品图片
    let param = { imgs: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of imgs) {
        if (typeof p === 'object' && p.imgs) {
          for (let img of p.imgs) {
            param.imgs.push(img)
          }
        } else if (typeof p === 'string') {
          param.imgs.push(p)
        }
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
  deleteImage (itemid, ...imgs) { // 删除商品图片
    let param = { delete_imgs: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of imgs) {
        if (typeof p === 'object' && p.delete_imgs) {
          for (let img of p.delete_imgs) {
            param.delete_imgs.push(img)
          }
        } else if (typeof p === 'string') {
          param.delete_imgs.push(p)
        }
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
  addSku (itemid, ...skus) { // 添加商品型号
    let param = { skus: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of skus) {
        if (p.skus) {
          for (let sku of p.skus) {
            param.skus.push(sku)
          }
        } else {
          param.skus.push(p)
        }
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
  updateSku (itemid, ...skus) { // 更新商品型号
    let param = { skus: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of skus) {
        if (p.skus) {
          for (let sku of p.skus) {
            param.skus.push(sku)
          }
        } else {
          param.skus.push(p)
        }
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
  deleteSku (itemid, ...skus) { // 删除商品型号
    let param = { skus: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of skus) {
        if (p.skus) {
          for (let sku of p.skus) {
            param.skus.push(sku)
          }
        } else {
          param.skus.push(p)
        }
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'vdian.item.sku.delete')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=设置商品的分类
  * item_ids  商品ID数组
  * cate_ids  分类ID数组
  */
  setCate (itemids, ...cateids) { // 设置商品的分类
    let param = { cate_ids: [] }
    if (itemids instanceof Array) {
      param.item_ids = itemids
    } else if (typeof itemids === 'string') {
      param.item_ids = [itemids]
    } else {
      param = itemids
    }
    for (let p of cateids) {
      if (p.cate_ids) {
        for (let cateid of p.cate_ids) {
          param.cate_ids.push(cateid)
        }
      } else if (p instanceof Array) {
        for (let cateid of p) {
          param.cate_ids.push(cateid)
        }
      } else {
        param.cate_ids.push(p)
      }
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
  cancelCate (itemid, ...cateids) { // 取消商品的分类
    let param = { cate_ids: [] }
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      for (let p of cateids) {
        if (p.cate_ids) {
          for (let cateid of p.cate_ids) {
            param.cate_ids.push(cateid)
          }
        } else if (p instanceof Array) {
          for (let cateid of p) {
            param.cate_ids.push(cateid)
          }
        } else {
          param.cate_ids.push(p)
        }
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
  onSale (itemid, opt = 1) { // 商品上下架
    let param = {}
    if (typeof itemid === 'object') {
      param = itemid
    } else {
      if (typeof opt === 'object') {
        param = opt
      } else {
        param.opt = opt
      }
      param.itemid = itemid
    }
    return this.vdian.api(param, 'weidian.item.onSale')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=设置店长推荐
  * itemid  商品ID
  */
  setTop (...itemids) { // 设置店长推荐
    const result = { success: [], fail: [] }
    for (let param of itemids) {
      if (typeof param !== 'object') param = { itemID: param }
      try {
        this.vdian.api(param, 'vdian.set.top.item')
        result.success.push(param.itemID)
      } catch (error) {
        result.fail.push({
          itemid: param.itemID,
          reason: error.reason
        })
      }
    }
    return result
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=取消店长推荐
  * itemid  商品ID
  */
  cancelTop (...itemids) { // 取消店长推荐
    const result = { success: [], fail: [] }
    for (let param of itemids) {
      if (typeof param !== 'object') param = { itemID: param }
      try {
        this.vdian.api(param, 'vdian.cancel.top.item')
        result.success.push(param.itemID)
      } catch (error) {
        result.fail.push({
          itemid: param.itemID,
          reason: error.reason
        })
      }
    }
    return result
  }
}
