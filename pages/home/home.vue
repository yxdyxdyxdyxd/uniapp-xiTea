<template>
	<view class="home">
		<swiper class="banner-swiper" circular autoplay :interval="5000" :duration="1000">
			<swiper-item class="banner-swiper-item" v-for="(item, index) in banners" :key="item._id"><image :src="item.src" mode="widthFix"></image></swiper-item>
		</swiper>
	</view>
</template>

<script>
import { home } from '../../api/home.js';
export default {
	data() {
		return {
			banners:[]
		};
	},
	mounted() {
		this.init()
	},
	methods: {
		init(){
			home('home_banner').then(res=>{
				this.banners=res.data
			})
		}
	}
};
</script>

<style lang="less">
page {
	max-height: 100vh;
}
.banner-swiper{
	width: 100%;
	height: 600upx;
	image{width: 100%;}
}
</style>
