/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:12
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 03:29:17
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let skus = itemDao.addSku({
  itemid: '1828694125',
  skus: [{
    title: '型号1',
    price: 1000,
    stock: 100,
    sku_merchant_code: 10
  }]
})
skus = itemDao.addSku('1828694125', {
  skus: [{
    title: '型号2',
    price: 2000,
    stock: 100,
    sku_merchant_code: 20
  }]
})
skus = itemDao.addSku('1828694125', {
  title: '型号3',
  price: 3000,
  stock: 100,
  sku_merchant_code: 30
})
skus = itemDao.addSku('1828694125', {
  skus: [{
    title: '型号4',
    price: 4000,
    stock: 100,
    sku_merchant_code: 40
  }]
}, {
  title: '型号5',
  price: 5000,
  stock: 100,
  sku_merchant_code: 50
})
console.log(skus)