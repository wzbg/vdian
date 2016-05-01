/* 
* @Author: zyc
* @Date:   2016-04-29 16:28:23
* @Last Modified by:   zyc
* @Last Modified time: 2016-05-01 03:29:09
*/
'use strict'

const vdian = require('../vdian')

const itemDao = vdian.item

let skus = itemDao.updateSku({
  itemid: '1828694125',
  skus: [{
    id: '5214604347',
    title: '型号1',
    price: 1000,
    stock: 100,
    sku_merchant_code: 100
  }]
})
skus = itemDao.updateSku('1828694125', {
  skus: [{
    id: '5214604354',
    title: '型号2',
    price: 2000,
    stock: 100,
    sku_merchant_code: 200
  }]
})
skus = itemDao.updateSku('1828694125', {
  id: '5214604362',
  title: '型号3',
  price: 3000,
  stock: 100,
  sku_merchant_code: 300
})
skus = itemDao.updateSku('1828694125', {
  skus: [{
    id: '5214604374',
    title: '型号4',
    price: 4000,
    stock: 100,
    sku_merchant_code: 400
  }]
}, {
  id: '5214604375',
  title: '型号5',
  price: 5000,
  stock: 100,
  sku_merchant_code: 500
})
console.log(skus)