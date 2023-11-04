<script lang="ts" setup>
import { ref } from 'vue'
import CustomNavbar from '@/pages/index/components/customNavbar.vue'

import { useUserStore } from '@/store/modules/user'
import { http } from '@/utils/http'

const userStore = useUserStore()
userStore.setUsername('admin')
uni.setStorageSync('username', userStore.getUsername)

const test = async () => {
  const res = await http({
    method: 'POST',
    url: '/login'
  })
  console.log('res :>> ', res)
}
</script>
<template>
  <CustomNavbar />
  <view>首页</view>
  <uni-card
    title="基础卡片"
    sub-title="副标题"
    extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  >
    <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>
  <button @click="test"> test </button>
</template>

<style scoped lang="scss"></style>
