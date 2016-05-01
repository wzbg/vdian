/* 
* @Author: zyc
* @Date:   2016-05-01 03:47:59
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 16:19:39
*/
'use strict'

module.exports = class { // 商品分类API
  constructor (vdian) {
    this.vdian = vdian
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取商品分类
  * 无
  */
  get () { // 获取商品分类
    return this.vdian.api({}, 'vdian.shop.cate.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=新增商品分类
  * cates 分类对象
  *   cate_name  分类名称
  *   sort_num   分类排序
  */
  add (...cates) { // 新增商品分类
    const param = { cates: [] }
    cates.forEach((p, index) => {
      if (typeof p === 'object') {
        if (p.cates) {
          for (let cate of p.cates) {
            cate.sort_num = cate.sort_num || index
            param.cates.push(cate)
          }
        } else {
          p.sort_num = p.sort_num || index
          param.cates.push(p)
        }
      } else if (typeof p === 'string') {
        param.cates.push({
          cate_name: p,
          sort_num: index
        })
      }
    })
    return this.vdian.api(param, 'vdian.shop.cate.add')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=编辑商品分类
  * cates 分类对象
  *   cate_name  分类名称
  *   sort_num   分类排序
  *   cate_id    分类ID
  */
  update (...cates) { // 编辑商品分类
    const param = { cates: [] }
    for (let p of cates) {
      if (p.cates) {
        for (let cate of p.cates) {
          param.cates.push(cate)
        }
      } else {
        param.cates.push(p)
      }
    }
    return this.vdian.api(param, 'vdian.shop.cate.update')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=删除商品分类
  * cate_id  分类ID
  */
  delete (...cateid) { // 删除商品分类
    const result = { success: [], fail: [] }
    for (let param of cateid) {
      if (typeof param !== 'object') param = { cate_id: param }
      try {
        this.vdian.api(param, 'vdian.shop.cate.delete')
        result.success.push(param.cate_id)
      } catch (error) {
        result.fail.push({
          cateid: param.cate_id,
          reason: error.reason
        })
      }
    }
    return result
  }
}
