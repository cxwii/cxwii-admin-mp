<script lang="ts" setup></script>
<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-title uni-common-mt">
        Vertical Scroll
        <text>\n纵向滚动</text>
      </view>

      <view>
        <scroll-view scroll-y class="scroll-Y">
          <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
          <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
          <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.scroll-Y {
  height: 300rpx;
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}
.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
</style>
