/* 
* @Author: zyc
* @Date:   2016-04-25 17:24:37
* @Last Modified by:   zyc
* @Last Modified time: 2016-04-28 03:17:16
*/
'use strict'

module.exports = class { // CPS API
  constructor (vdian) {
    this.vdian = vdian
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=搜索CPS商品列表
  * keyword       关键词:必选，最长20个字符
  * page_size     返回条数：选填、默认20，最大200
  * mix_price     min_price-价格区间下限：选填
  * max_price     max_price-价格区间上限：选填
  * min_cps_rate  min_cps_rate-分成比例上限：选填
  * man_cps_rate  man_cps_rate-分成比例下限：选填
  */
  search (param) { // 搜索CPS商品列表
    if (typeof param !== 'object') param = { keyword: param }
    return this.vdian.api(param, 'vdian.cps.item.search')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取CPS商品详情
  * itemid  商品ID
  */
  get (itemid) { // 获取CPS商品详情
    return this.vdian.api({ itemid }, 'vdian.cps.item.get')
  }

  /*
  * http://wiki.open.weidian.com/index.php?title=获取商品公开详情
  * itemid  商品ID
  */
  getpublic (itemid) { // 获取商品公开详情
    return this.vdian.api({ itemid }, 'vdian.item.getpublic')
  }
}
