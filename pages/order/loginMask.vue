<template>
	<view class="order-login">
		<view class="tips">
			<view>您还没有登录</view>
			<view>请登录后查看您的茶克拉订单</view>
		</view>
		<button type="default" @tap="openLogin" hover-class="none">登录查看</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			openLogin(){
				this.$emit('openLogin',true)
			}
		}
	}
</script>

<style lang="less">
	.order-login{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.tips{
					  color: #343434;
					  display: flex;
					  flex-direction: column;
					  align-items: center;
					  margin-bottom:  50rpx;
					  view{
						  color: #999;
					  }
		}
			button {
				width: 50%;
						font-size: 28upx;
						border-radius: 4upx;
						background-color: #333;
						color: #fff;
						padding: 10upx 0;
			}
	}
</style>
