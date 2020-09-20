<template>
	<view class="select-list">
		<view class="header">
			<!-- 输入框 -->
			<view class="search-box">
				<view class="search-input">
					<image src="/static/common/search-icon.png"></image>
					<view>搜索</view>
				</view>
			</view>
			<!-- 城市距离 -->
			<view class="city">
				<view class="city-box">
					<view class="city-select">
						<image src="/static/common/star_normal.png" class="icon-left"></image>
						<view class="address">佛山顺德</view>
						<image src="/static/common/black_arrow_right.png" class="icon-right"></image>
					</view>
					<view class="btn-select">
						<button type="default" hover-class="none" plain>自取</button>
						<button type="default" hover-class="none" plain>外卖</button>
					</view>
				</view>
				<view class="distance">距离您1.1km</view>
			</view>
			<!-- 滚动栏 -->
			<view class="scroll-notice">
				<swiper class="swiper" autoplay :interval="3000" vertical circular :duration="1000">
					<swiper-item v-for="item in notices" :key="item._id">
						<view class="notice-info">
							<image :src="item.image"></image>
							<view class="notice-content">{{ item.content }}</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="more">
					<text>更多</text>
					<image src="/static/common/gray_arrow_down.png"></image>
				</view>
			</view>
		</view>
		<!-- 点单列表 -->
		<view class="main">
			<!-- 左侧Tab -->
			<scroll-view class="menu-bar" scroll-y scroll-with-animation>
				<view class="menu-item" :class="{ active: currentCategoryId == item.id }" v-for="(item,index) in categories" :key="index" @tap="handleMenu(item.id)">
					<image class="menu-image" :src="item.category_image_url" mode="widthFix"></image>
					<view class="menu-title">{{ item.name }}</view>
				</view>
			</scroll-view>
			<!-- 右侧商品详情列表 -->
			<scroll-view class="list" scroll-y scroll-with-animation :scroll-top="goodsScrollTop" @scroll="goodsScroll">
				<view class="list-box">
					<!-- 轮播广告 -->
					<view id="banner">
						<view class="banner-top">
							<swiper class="swiper-top" indicator-dots autoplay :interval="3000" :duration="1000" circular>
								<swiper-item v-for="item in categoriesBannerTop" :key="item._id"><image :src="item.src" mode="widthFix"></image></swiper-item>
							</swiper>
						</view>
						<view class="banner-buttom">
							<swiper class="swiper-top" indicator-dots autoplay :interval="3000" :duration="1000" circular>
								<swiper-item v-for="item in categoriesBannerBottom" :key="item._id"><image :src="item.src" mode="widthFix"></image></swiper-item>
							</swiper>
						</view>
					</view>
					<!-- 商品 -->
					<view class="goods-list" v-for="(item,index) in categories" :key="index" :id="`list-${item.id}`">
						<view class="goods-name">{{ item.name }}</view>
						<view class="goods-box">
							<view class="goods-details" v-for="goods in item.products" :key="goods.id">
								<image class="goods-image" :src="goods.images[0].url" mode="widthFix"></image>
								<view class="goods-content">
									<view class="name">{{ goods.name }}</view>
									<view class="labels">
										<view class="label" v-for="label in goods.labels" :key="label.id">{{ label.name }}</view>
									</view>
									<view class="description">{{ goods.description }}</view>
									<view class="price">
										<view>￥{{ goods.price }}</view>
										<actions></actions>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { home, whereData } from '../../api/home.js';
import Actions from '../../components/actions/actions.vue';
export default {
	components: { Actions },
	data() {
		return {
			notices: [],
			categories: [],
			categoriesBannerTop: [],
			categoriesBannerBottom: [],
			currentCategoryId: 0,
			goodsScrollTop: 0
		};
	},
	mounted() {
		this.init();

			
	},
	methods: {
		async init() {
			let noticesRes = await home('notice');
			if (noticesRes.data) {
				this.notices = noticesRes.data;
			}
			let categoriesRes = await home('categories');
			console.log(categoriesRes, noticesRes);
			if (categoriesRes.data) {
				this.categories = categoriesRes.data;
			}
			let bannerRes = await home('home_banner');
			if (bannerRes.data) {
				bannerRes.data.forEach(item => {
					if (item.belongTo === 'categoricesTop') {
						this.categoriesBannerTop.push(item);
					} else if (item.belongTo === 'categoricesBottom') {
						this.categoriesBannerBottom.push(item);
					}
				});
			}
				this.calcSize();
			
		},
		handleMenu(id) {
			this.goodsScrollTop = this.categories.find(item => item.id == id).top
			console.log(this.goodsScrollTop)

				this.currentCategoryId = id;
		
			
			console.log(this.currentCategoryId,id,this.goodsScrollTop)
		},
		goodsScroll(e) {
			// console.log(e)
		},
		calcSize() {
			let h = 0;
			let view = uni.createSelectorQuery().select('#banner'); //获取节点
			//获取节点信息
			view.fields(
				{
					size: true
				},
				data => {
					h += Math.floor(data.height);
				}
			).exec();
			this.categories.forEach(item=>{
				let goodDom=uni.createSelectorQuery().select(`#list-${item.id}`);
				goodDom.fields({size: true},data=>{
					item.top=h;
					h += Math.floor(data.height);
					item.bottom=h
				}).exec()
			})
			console.log(this.categories)
		}
	}
};
</script>

<style lang="less">
@import './index.less';
</style>
