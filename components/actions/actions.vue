<template>
	<view class="actions-comp">
		<view v-if="!materialsBtn" class="addDel">
			<image class="btn" src="/static/common/round_minus.png" v-show="number" @tap="minus"></image>
			<view  v-show="number" class="number">{{ number }}</view>
			<image class="btn" src="/static/common/round_add_normal.png" @tap="add"></image>
		</view>
		<view v-else class="select">
			<button type="default" size="mini" class="select-btn" @tap="openMaterials">选规格</button>
			<view class="badge-number" v-show="number">{{ number }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
			default: 0
		},
		materialsBtn: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	},
	methods:{
		add(){
			this.$emit('add')
		},
		minus(){
			this.$emit('minus')
		},
		openMaterials(){
			this.$emit('openMaterials')
		}
	}
};
</script>

<style lang="less">
.actions-comp {
	margin-right: 20upx;
	.addDel {
		display: flex;
		align-items: center;
		.btn {
			width: 44upx;
			height: 44upx;
		}
		.number {
			width: 44upx;
			height: 44upx;
			margin: 0 20upx;
			text-align: center;
			line-height: 44upx;
			font-size: 36upx;
		}
	}
	.select {
		position: relative;
		.select-btn {
			border-radius: 50upx;
			background-color: #dba871;
			font-size: 26upx;
			color: #fff;
		}
		.badge-number {
			position: absolute;
			right: -16rpx;
			top: -14rpx;
			border-radius: 100%;
			width: 1.1rem;
			height: 1.1rem;
			background-color: #dba871;
			border: 2upx solid #fff;
			text-align: center;
			line-height: 1.1rem;
			font-size: 20upx;
			color: #fff;
		}
	}
}
</style>
