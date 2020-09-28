<template>
	<view class="store">
		<view class="head-image"><image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/fbd8ec7bc19541d1a692870bff4485b2.png?sign=1533d7559de73e7ad51f6e94b61c3f83&t=1601291533" mode="widthFix"></image></view>
		<swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in banners" :key="item._id">
				<view class="swiper-item">
					<image :src="item.src" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="banner-section">
			<image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/a3df4889c4154c51b8395337c6625d75.png?sign=266251269160e6633e756cea9ab596d1&t=1601292264" mode="widthFix"></image>
			<image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/f421c2db0d9d4cd19116dc1a450e0bf3.png?sign=32ef42bf6e88af209710425ab1c94cf1&t=1601292291" mode="widthFix"></image>
		</view>
		<view class="content-section">
			<view class="new-recommend">
				<view class="section-head">
					<view class="title">新 品 推 荐</view>
					<view class="subtitle">NEW ARRIVALS</view>
				</view>
				<view class="section-body">
					<image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/821f48529dab4a61a8b497e4867b9760.png?sign=59f59ed34e074e62aa275e4c7e13a6c4&t=1601292319" mode="widthFix"></image>
					<image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/16ae5b0a73ce4abc9dcd4f4c97a1cdd6.jpg?sign=375efa7d5e01aec35dcc881f10ca9703&t=1601292343" mode="widthFix"></image>
				</view>
			</view>
			<view class="section-head">
				<view class="title">猜 你 喜 欢</view>
				<view class="subtitle">YOU MAY ALSO LIKE</view>
			</view>
		</view>
		<view class="you-may-like">
			<navigator class="goods" url="" v-for="item in storeList" :key="item._id" open-type="navigate" hover-class="none">
				<image :src="item.thumbnail" mode="widthFix"></image>
				<view class="info">
					<view class="desc">
						<view class="title">{{item.name}}</view>
						<view class="subtitle">{{item.itemSalesVolume}}人已购买</view>
					</view>
					<view class="info-bottom">
						<view class="price">￥{{item.salePrice}}</view>
						<view class="action"><image src="/static/common/round_add_normal.png"></image></view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import { home, whereData } from '../../api/home.js';
export default {
	data(){
		return{
			banners:[],
			storeList:[]
		}
	},
	mounted(){
		this.init()
	},
	methods:{
	async init(){
			let bannerRes=await whereData('home_banner',{belongTo:'store'})
			if(bannerRes&&bannerRes.data){
				this.banners=bannerRes.data
			}	
			let list=await home('store')
			if(list&&list.data){
				this.storeList=list.data
			}
		}
	}
};
</script>
<style lang="less">
@import './stores.less';
</style>
