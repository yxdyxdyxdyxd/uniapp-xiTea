<template>
	<view class="home">
		<swiper class="banner-swiper" circular autoplay :interval="5000" :duration="1000">
			<swiper-item class="banner-swiper-item" v-for="(item, index) in banners" :key="item._id"><image :src="item.src" mode="widthFix"></image></swiper-item>
		</swiper>
		<view class="content">
			<view class="section-top">
				<navigator class="nav" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<image src="/static/home/home_icon_ziqu1.png" mode="widthFix"></image>
					<view class="text-tip">门店自取</view>
					<view class="text-info">下单免排队</view>
				</navigator>
				<navigator class="nav" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<image src="/static/home/home_icon_waimai1.png" mode="widthFix"></image>
					<view class="text-tip">外卖</view>
					<view class="text-info">无需接触 送喜到家</view>
				</navigator>
			</view>
			<view class="section-mid">
				<navigator class="nav-mid" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<view class="mid-title">
						<image src="/static/home/home_icon_baihuo1.png" mode="widthFix"></image>
						<view class="mid-tip">喜茶百货</view>
					</view>
					<view class="text-info">灵感商品 立即选购</view>
				</navigator>
				<navigator class="nav-mid" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<view class="mid-title">
						<image src="/static/home/home_icon_qiye1.png" mode="widthFix"></image>
						<view class="mid-tip">企业团餐</view>
					</view>
					<view class="text-info">50份起送</view>
				</navigator>
			</view>
			<view class="section-bottom">
				<navigator class="nav-mid" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<view class="integral">
						<view>我的积分</view>
						<view v-if="integralShow" class="integral-num">101</view>
						<view v-else class="integral-done">--</view>
					</view>
					<view class="integral-tips">可兑换喜茶劵和丰富灵感周边</view>
				</navigator>
				<navigator class="nav-mid-code" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<image src="/static/home/home_icon_erweima.png" mode="widthFix"></image>
					<view>会员码</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
import { whereData } from '../../api/home.js';
export default {
	data() {
		return {
			banners: [],
			integralShow:false,
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			whereData('home_banner',{belongTo:'home'}).then(res => {
				this.banners = res.data;
			});
		}
	}
};
</script>

<style lang="less">
.home {
	width: 100%;
	height: 100%;
	.banner-swiper {
		width: 100%;
		height: 600upx;
		image {
			width: 100%;
		}
	}
	.content {
		padding: 0 30upx;
		position: relative;
		top: -60upx;
		.section-top {
			display: flex;
			background-color: #fff;
			border-radius: 12upx;
			padding: 60upx 0;
			margin-bottom: 30rpx;
			box-shadow: 0 20rpx 20rpx -20rpx rgba(#333, 0.1);
			.nav:nth-child(1):after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				width: 2upx;
				background-color: #c8c7cc;
			}
		}
		.nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			flex: 1;
			flex-shrink: 0;
			image {
				width: 100upx;
				margin-bottom: 20upx;
			}
			.text-tip {
				font-size: 48upx;
				font-weight: 500;
				margin-bottom: 10upx;
			}
		
		}
		.text-info {
			color: #999;
			font-size: 28upx;
		}
		.section-mid {
			display: flex;
			justify-content: space-between;
			margin-bottom: 30upx;
			.nav-mid {
				width: 335upx;
				background-color: #eaebec;
				padding: 30upx 0;
				border-radius: 12rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.mid-title{
					width: 100%;
					display: flex;	
					justify-content: center;
					align-items: center;
					font-size: 32upx;
					image {
						width: 60upx;
						height: 60upx;
						margin-right: 10upx;
					}
				}
			}
		}

		.section-bottom{
			margin-bottom: 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26upx;
			color: #999;
			padding: 0 10upx;
			.nav-mid{
				display: flex;
				flex-direction: column;
				flex: 1;
			}
			.integral{
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: #343434;
				margin-bottom: 10upx;
			}
			.integral-num{
				margin-left: 10upx;
				font-size: 42upx;
			}
			.integral-done{
				margin-left: 10upx;
			}
		}
		.nav-mid-code{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 30upx;
			position: relative;
			image{
				width: 60upx;
				height: 60upx;
				margin-bottom: 10upx;
			}
		}
	}
}
</style>
