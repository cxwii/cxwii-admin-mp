<script lang="ts" setup>
// 使用scoped会导致pagee失效,因为他是最顶级父对象
// 最好的方式就是再用一个单独<style></style>来设置
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from '@/pages/index/src/customNavbar.vue'
import { useUserStore } from '@/store/modules/user'
import { loginApi } from '@/api/User/index'
import type { cxwiiTestRefType } from '@/types/components'

// 骨架文件,由开发者工具生成
import indexSkeleton from '@/pages/index/indexSkeleton.vue'
import type { InputNumberBoxEvent } from '@/components/vk-data-input-number-box/vk-data-input-number-box'

const userStore = useUserStore()
userStore.setUsername('admin')
uni.setStorageSync('username', userStore.getUsername)

const userData = ref()
const test = async () => {
  const res = await loginApi({
    username: 'admin',
    password: '123456'
  })
  console.log('res :>> ', res)
  console.log('res :>> ', res)
  userData.value = res.data

  const res2 = await uni.login()
  console.log('登录 :>> ', res2)
}

const phonenumber: UniHelper.ButtonOnGetphonenumber = async (e) => {
  const res = await uni.login()
  // 一般登录就是这三个参数
  console.log('小程序凭证 :>> ', res.code)
  console.log('手机号 :>> ', e.detail.encryptedData)
  console.log('加密用的算法 :>> ', e.detail.iv)
}

// 实例的类型定义
const cxwiiTestRef = ref<cxwiiTestRefType>()

// 控制骨架屏(可以放在onLoad中,加载完数据前显示,加载完后隐藏)
const isSkeleton = ref(false)

onLoad(() => {
  test()
})

const test3 = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (success) => {
      console.log('success :>> ', success)
      // 用这个api上传(给图片临时地址就好了)
      // uni.uploadFile({
      //   url: '',
      //   fileType: 'image',
      //   filePath: tempFilePaths[0],
      //   name: 'file',
      //   success: ({ data, statusCode }) => {},
      //   fail: (error) => {}
      // })
    }
  })
}

const count = ref(1)

const onChange = (ev: InputNumberBoxEvent) => {
  console.log('步进器 :>> ', ev)
}

// sku算法
</script>
<template>
  <indexSkeleton v-if="isSkeleton" />
  <template v-else>
    <CustomNavbar />
    <scroll-view scroll-y refresher-enabled>
      <cxwiiTest ref="cxwiiTestRef" />
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
      <button open-type="getPhoneNumber" @getphonenumber="phonenumber"> 获取手机号码 </button>
      <navigator url="/pages/test/test" hover-class="navigator-hover">
        跳转路由(skuTest)
      </navigator>
      <navigator url="/subPages/subPageTest/subPageTest"> 跳转子包 </navigator>
      <button @click="test3"> 拍照api </button>
      <view>步进器</view>
      <!-- 这里应该还要一个index作为唯一标识 -->
      <vk-data-input-number-box v-model="count" :min="1" :max="100" @change="onChange" />
    </scroll-view>
  </template>
</template>

<style scoped lang="scss">
page {
  background-color: pink;
}
</style>
