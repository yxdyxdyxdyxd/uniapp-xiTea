<template>
	
		<uni-popup ref="popup" type="bottom">
			<view class="login-dialong">
				<view class="close-box">
					<image src="/static/common/clousex-big.png" ></image>
				</view>
				<view class="tips">
					<view class="welcome-text">
						<view class="text-big">欢迎登陆大东星球~</view>
						<view class="subtitle">登录后消费可获取积分，享受更好的服务体验</view>
					</view>
					<view class="login-text">
						<button class="login-btn" type="default" open-type="getUserInfo">微信一键登陆</button>
						<view class="text-box">点击登陆大东茶，即表示已阅读并同意<text class="privacy">《大东隐私政策》</text></view>
						<view class="privacy">《大东茶小程序服务指南》</view>
					</view>
				</view>
			</view>
		</uni-popup>
	
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default{
		data(){
			return{}
		}
	}
</script>

<style lang="less">
	.login-dialong{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius:24upx 24upx 0 0;
		height: 50vh;
		padding: 50upx 40upx;
		.close-box{
			display: flex;
			justify-content: flex-end;
			image{
				width: 40upx;
				height: 40upx;
			}
		}
		.tips{
			display: flex;
			flex: 1 1 auto;
			flex-direction: column;
			justify-content: space-between;
			.welcome-text{
				display: flex;
				flex-direction: column;
			}
			.text-big{
				font-size: 36upx;
				font-weight: bold;
				color: #343434;
				margin-bottom: 30upx;
			}
			.subtitle{
				font-size: 26upx;
				color: #999;
			}
			.login-text{
				display: flex;
				flex-direction: column;
			}
			.login-btn{
				width: 100%;
				font-size: 32upx;
				margin-bottom: 30upx;
			}
			.text-box{
				text-align: center;
				margin-bottom: 30upx;
				font-size:24upx ;
				color: #999;
			}
			.privacy{
				text-align: center;
				font-size:24upx ;
				color: #DBA871;
			}
		}
	}	
</style>
