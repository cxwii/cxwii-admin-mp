<script lang="ts" setup>
import type { SkuPopupLocaldata } from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup'
import { ref } from 'vue'

let isShowSuk = ref(false)
const open = () => {
  console.log('isShowSuk :>> ', isShowSuk.value)
  isShowSuk.value = !isShowSuk.value
}

const goodsInfo = ref({
  _id: '002',
  name: '迪奥香水',
  goods_thumb:
    'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
  spec_list: [
    // 选择的规
    {
      name: '香水规格',
      list: [
        {
          name: '20ml/瓶'
        },
        {
          name: '50ml/瓶'
        },
        {
          name: '70ml/瓶'
        }
      ]
    }
  ],
  sku_list: [
    {
      _id: '004',
      goods_id: '002',
      goods_name: '迪奥香水',
      image:
        'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
      price: 19800,
      sku_name_arr: ['50ml/瓶'],
      stock: 100
    },
    {
      _id: '005',
      goods_id: '002',
      goods_name: '迪奥香水',
      image:
        'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
      price: 9800,
      sku_name_arr: ['70ml/瓶'],
      stock: 100
    }
  ]
} as SkuPopupLocaldata)
</script>

<template>
  <vk-data-goods-sku-popup v-model="isShowSuk" :localdata="goodsInfo"> </vk-data-goods-sku-popup>
  <button @click="open">suk</button>
</template>

<style scoped lang="scss"></style>
