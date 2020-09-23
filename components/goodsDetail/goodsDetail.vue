<template>
	<uni-popup ref="popup" type="center" @change="fn">
		<view class="goods-detail">
			<view class="header">
				<image src="/static/index/menupopup_btn_share_normal.png"></image>
				<image @tap="closeFn" src="/static/index/round_close_btn.png"></image>
			</view>
			<swiper class="swiper" indicator-dots autoplay :interval="3000" :duration="1000">
				<swiper-item v-for="item in goods.images" :key="item.id"><image class="swiper-img" :src="item.url"></image></swiper-item>
			</swiper>
			<scroll-view scroll-y class="content">
				<view class="wrapper">
					<view class="title">{{ goods.name }}</view>
					<view class="labels" v-for="item in goods.labels" :key="item.id">
						<view class="label" :style="{ color: item.label_color }">{{ item.name }}</view>
					</view>
					<view class="describe">产品描述</view>
					<view class="describe-text">{{ goods.description }}</view>
					<view class="materials" v-for="item in goods.materials" :key="item.group_name">
						<view class="group-name">{{ item.group_name }}</view>
						<view class="values">
							<view class="value" v-for="value in item.values" :key="value.id">{{ value.name }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="bottom">
				<view class="align-items-center">
					<view class="price-and-materials">
						<view class="price">￥{{ goods.price }}</view>
						<view class="bottom-materials"></view>
					</view>
					<actions></actions>
				</view>
				<button type="default" class="add-cart">加入购物袋</button>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import Actions from '@/components/actions/actions.vue';
export default {
	components: { uniPopup, Actions },
	props: {
		showGoods: {
			type: Boolean,
			default: false
		},
		goods: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {
			close:true
		};
	},
	mounted() {
		this.$refs.popup.open();
	},
	methods: {
		fn(){
			this.close=!this.close
			if(this.close){
				this.$emit('update:showGoods', false);
			}
		},
		closeFn() {
			this.$emit('update:showGoods', false);
		}
	}
};
</script>

<style lang="less">
.goods-detail {
	background-color: #fff;
	width: 90vw;
	.header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 11;
		padding: 20upx 30upx;
		display: flex;
		justify-content: flex-end;
		image {
			width: 60upx;
			height: 60upx;
		}
		image:nth-child(1) {
			margin-right: 30upx;
		}
	}
	.swiper {
		height: 426upx;
	}
	.swiper-img {
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		font-size: 24upx;
		color: #999;
		min-height: 1vh;
		max-height: calc(100vh - 100rpx - 426rpx - 250rpx);
		.wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding: 30upx 30upx 20upx;
		}
		.title {
			font-size: 36upx;
			color: #999;
			font-weight: 500;
			margin-bottom: 10upx;
		}
		.labels {
			display: flex;
			font-size: 20upx;
			margin-bottom: 10upx;
			overflow: hidden;
			flex-wrap: wrap;
			.label {
				max-width: 40%;
				padding: 6upx 10upx;
				margin-right: 10upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.describe {
			margin-bottom: 10upx;
		}
		.describe-text {
			margin-bottom: 20upx;
		}
		.materials {
			width: 80%;
			margin-bottom: 20upx;
			.group-name {
				padding: 10upx 0;
			}
			.values {
				display: flex;
				flex-wrap: wrap;
				overflow: hidden;
			}
			.value {
				background-color: #f5f5f7;
				color: #343434;
				padding: 10upx 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 12upx;
			}
			.selected {
				background-color: #dba871;
				color: #fff;
			}
		}
	}
	.bottom {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-top: 1rpx solid rgba(#c8c7cc, 0.3);
		.align-items-center {
			display: flex;
			align-items: center;
		}
		.price-and-materials {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			margin-right: 10upx;
		}
		.price {
			color: #dba871;
			font-size: 36upx;
			font-weight: bold;
		}
		.bottom-materials {
			font-size: 24upx;
			color: #999;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.add-cart {
			width: 100%;
			margin-top: 20upx;
			font-size: 32upx;
			border-radius: 6upx;
			background-color: #dba871;
			color: #fff;
		}
	}
}
</style>
