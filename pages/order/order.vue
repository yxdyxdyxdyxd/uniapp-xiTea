<template>
	<view class="order">
		<view class="navbar">
			<button type="default">
				<image src="/static/order/order_icon_talk2.0.png"></image>
				<view>想对你说</view>
			</button>
		</view>
		<view class="order-tabs">
			<view class="tabs" :class="{ active: tabIndex === '0' }" @tap="switchTab('0')">当前订单</view>
			<view class="tabs" :class="{ active: tabIndex === '1' }" @tap="switchTab('1')">历史订单</view>
		</view>
		<swiper class="swiper" :current="0" :duration="300" :show-scrollbar="false">
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
							<view class="item" @tap="switchMenuTab('store')">门店订单</view>
							<view class="item" @tap="switchMenuTab('depStore')">百货订单</view>
						</view>
						<view class="item">
							<image src="/static/order/batch_invoice_icon.png" mode=""></image>
							<view>批量开票</view>
						</view>
					</view>
					<swiper :current="orderMenuIndex" :duration="300" :show-scrollbar="false">
						<swiper-item>
							<scroll-view scroll-y="true"><view></view></scroll-view>
						</swiper-item>
						<swiper-item><view class="swiper-item"></view></swiper-item>
					</swiper>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: '0',
			orderMenuIndex: 'store'
		};
	},
	mounted() {},
	methods: {
		switchTab(data) {
			this.tabIndex = data;
		},
		switchMenuTab(data) {},
		handleSwiperItemChange() {
			return true;
		}
	}
};
</script>

<style lang="less">
@import './order.less';
</style>
