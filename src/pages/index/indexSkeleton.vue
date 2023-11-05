<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/src/customNavbar" class="data-v-83a5a03c">
      <view
        class="navbar customNavbar--navbar data-v-f63aa915 customNavbar--data-v-f63aa915"
        style="padding-top: 44px"
      >
        <view class="logo customNavbar--logo data-v-f63aa915 customNavbar--data-v-f63aa915">
          <text
            class="logo-text customNavbar--logo-text data-v-f63aa915 customNavbar--data-v-f63aa915 sk-transparent sk-text-3-5714-242 sk-text"
            >cxwii-admin-mp</text
          >
        </view>
        <view class="search customNavbar--search data-v-f63aa915 customNavbar--data-v-f63aa915">
          <text
            class="icon-search customNavbar--icon-search data-v-f63aa915 customNavbar--data-v-f63aa915 sk-transparent sk-text-14-2857-600 sk-text"
            >搜索</text
          >
          <text
            class="icon-scan customNavbar--icon-scan data-v-f63aa915 customNavbar--data-v-f63aa915"
          ></text>
        </view>
      </view>
    </view>
    <scroll-view :refresher-enabled="true" :scroll-y="true" class="data-v-83a5a03c">
      <view is="components/src/cxwiiTest" class="r data-v-83a5a03c">
        <view class="carousel cxwiiTest--carousel">
          <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator cxwiiTest--navigator" hover-class="none">
                <image class="image cxwiiTest--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator cxwiiTest--indicator">
            <text class="dot cxwiiTest--dot active cxwiiTest--active"></text>
            <text class="dot cxwiiTest--dot"></text>
            <text class="dot cxwiiTest--dot"></text>
          </view>
        </view>
      </view>
      <view class="data-v-83a5a03c sk-transparent sk-text-14-2857-991 sk-text">首页</view>
      <view is="node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card" class="data-v-83a5a03c">
        <view
          class="uni-card card--uni-card uni-card--shadow card--uni-card--shadow uni-card--border card--uni-card--border"
          style="margin: 15px; padding: 0 10px; box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
        >
          <view class="uni-card__header card--uni-card__header">
            <view class="uni-card__header-box card--uni-card__header-box">
              <view class="uni-card__header-avatar card--uni-card__header-avatar">
                <image
                  class="uni-card__header-avatar-image card--uni-card__header-avatar-image sk-image"
                  mode="aspectFit"
                ></image>
              </view>
              <view class="uni-card__header-content card--uni-card__header-content">
                <text
                  class="uni-card__header-content-title card--uni-card__header-content-title uni-ellipsis card--uni-ellipsis sk-transparent sk-text-14-2857-337 sk-text"
                  >基础卡片</text
                >
                <text
                  class="uni-card__header-content-subtitle card--uni-card__header-content-subtitle uni-ellipsis card--uni-ellipsis sk-transparent sk-text-14-2857-908 sk-text"
                  >副标题</text
                >
              </view>
            </view>
            <view class="uni-card__header-extra card--uni-card__header-extra">
              <text
                class="uni-card__header-extra-text card--uni-card__header-extra-text sk-transparent sk-text-0-0000-18 sk-text"
                >额外信息</text
              >
            </view>
          </view>
          <view class="uni-card__content card--uni-card__content" style="padding: 10px">
            <text class="data-v-83a5a03c sk-transparent sk-text-18-1818-535 sk-text"
              >这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text
            >
          </view>
          <view class="uni-card__actions card--uni-card__actions"></view>
        </view>
      </view>
      <button class="data-v-83a5a03c sk-transparent sk-button sk-pseudo sk-pseudo-circle">
        test
      </button>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-242 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-600 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-991 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-337 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42rpx;
  position: relative !important;
}
.sk-text-14-2857-908 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-18 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24rpx;
  position: relative !important;
}
.sk-text-18-1818-535 {
  background-image: linear-gradient(
    transparent 18.1818%,
    #eeeeee 0%,
    #eeeeee 81.8182%,
    transparent 0%
  ) !important;
  background-size: 100% 44rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
