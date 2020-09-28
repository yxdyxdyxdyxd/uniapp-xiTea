<template>
	<view class="order">
		<view class="navbar">
			<button type="default" class="talk-btn">
				<image src="/static/order/order_icon_talk2.0.png"></image>
				<view>想对你说</view>
			</button>
		</view>
		<view v-if="isLogin">
		<view class="order-tabs">
			<view class="tabs" :class="{ active: tabIndex === '0' }" @tap="switchTab('0')">当前订单</view>
			<view class="tabs" :class="{ active: tabIndex === '1' }" @tap="switchTab('1')">历史订单</view>
		</view>
		<swiper class="swiper" :current="tabIndex" :duration="300" :show-scrollbar="false">
			<!-- 当前订单 -->
			<swiper-item @touchmove.stop="handleSwiperItemChange">
				<view class="now-order">
					<image src="cloud://devl-ed2ju.6465-devl-ed2ju-1303192015/xiTea_order/0bdb360866d94aa4a4404c0b676a1982.jpg"></image>
					<view class="tips">
						<view>您今天还没有下单</view>
						<view>快去选择一杯喜欢的茶吧</view>
					</view>
					<button type="default" hover-class="none">去下单</button>
				</view>
			</swiper-item>
			<!-- 历史订单 -->
			<swiper-item @touchmove.stop="handleSwiperItemChange">
				<view class="history-order">
					<view class="menu">
						<view class="menu-btn">
							<view class="item" :class="{ active: orderMenuIndex === '0' }" @tap="switchMenuTab('0')">门店订单</view>
							<view class="item" :class="{ active: orderMenuIndex === '1' }" @tap="switchMenuTab('1')">百货订单</view>
						</view>
						<view class="item">
							<image src="/static/order/batch_invoice_icon.png" mode=""></image>
							<view>批量开票</view>
						</view>
					</view>
					<swiper class="history-swiper" :current="orderMenuIndex" :duration="300" :show-scrollbar="false">
						<swiper-item @touchmove.stop="handleSwiperItemChange">
							<scroll-view scroll-y="true" class="order-success">
								<view class="order-list">
									<view class="order-success-box">
										<view class="heard">
											<view class="order-nane">九尾茶克拉</view>
											<view class="order-status">
												<view>已完成</view>
												<image src="/static/common/black_arrow_right.png"></image>
											</view>
										</view>
										<scroll-view scroll-x="true">
											<view class="order-image"><image src=""></image></view>
										</scroll-view>
										<view class="info">
											<view class="info-left">
												<view>订单编号：</view>
												<view>下单时间：</view>
											</view>
											<view class="info-right">￥888</view>
										</view>
										<view class="action">
											<button type="default" hover-class="none">开发票</button>
											<button type="default" hover-class="none">查看评论</button>
											<button type="default" plain hover-class="none">再来一单</button>
										</view>
									</view>
								</view>
							</scroll-view>
						</swiper-item>
						<swiper-item @touchmove.stop="handleSwiperItemChange">
							<view class="stores">
								<image src="/static/order/default_img_order.png"></image>
								<view>您还没有下单</view>
								<view>快去百货商城逛逛吧</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</swiper-item>
		</swiper>
		</view>
		<loginMask v-else @openLogin="openLogin"></loginMask>
		<login v-if="showLogin" :showLogin.sync="showLogin" @loginSuccess="loginSuccess"></login>
	</view>
</template>

<script>
	import loginMask from './loginMask.vue'
export default {
	components:{loginMask},
	data() {
		return {
			tabIndex: '0',
			orderMenuIndex: '0',
			isLogin:false,
			showLogin:false
		};
	},
	mounted() {
		this.init()
		console.log(this.isLogin)
	},
	methods: {
		init(){
			if(uni.getStorageSync('userInfo')){//判断是否登录
				this.isLogin=true
			}
		},
		switchTab(data) {
			this.tabIndex = data;
		},
		switchMenuTab(data) {
			this.orderMenuIndex=data
		},
		handleSwiperItemChange() {
			return true;
		},
		openLogin(data){
			this.showLogin=data
		},
		loginSuccess(){
			this.isLogin=true
		}
	}
};
</script>

<style lang="less">
@import './order.less';
</style>
