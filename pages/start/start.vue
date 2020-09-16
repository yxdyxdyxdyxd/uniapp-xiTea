<template>
	<view class="start_banner">
		<swiper class="swiper_box" @change="swiperchange" indicator-dots="true" indicator-active-color="#fff">
			<swiper-item v-for="item in banners" :key="item._id"><image mode="aspectFill" bindtap="imgClick" :src="item.src" /></swiper-item>
		</swiper>
		<view class="btn" v-if="swiperMaxNumber-1===swiperCurrent"><button type="primary" size="mini" @tap="gotoHome" class="weui-btn mini-btn">进入店铺</button></view>
	</view>
</template>

<script>
import { home } from '../../api/home.js';
import config from '../../config.js'
export default {
	data() {
		return {
			banners: [],
			swiperMaxNumber: 0,
			swiperCurrent: 0
		};
	},
	mounted() {
		this.init();

	},
	methods: {
		init() {
			//读取到用户有存储version，直接跳转到首页
			var version = uni.getStorageSync('version')
			if(version&&version===config.version){
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
			home('start_banner').then(res => {
				this.banners = res.data;
				this.swiperMaxNumber=res.data.length
			});
		},
		swiperchange(e){
			this.swiperCurrent=e.detail.current
		},
		gotoHome() {
			//把版本存储在本地再跳转
			uni.setStorageSync('version', config.version)
			uni.switchTab({
				url: '/pages/home/home'
			})
		}
	}
};
</script>

<style lang="less">
.start_banner {
	swiper {
		width: 100vw;
		height: 100vh;
	}
	swiper-item {
		width: 100vw;
		height: 100vh;
	}
	image {
		width: 100vw;
		height: 100vh;
	}
	.btn {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 50rpx;
		display: flex;
		justify-content: center;
	}
}
</style>
