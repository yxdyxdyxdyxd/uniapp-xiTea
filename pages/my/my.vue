<template>
	<view class="my-info">
		<image class="head-image" src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_categories/01954797f3fb470cb6ba1606476c658c.png?sign=0da9368cbbbd895185ed226b504463d0&t=1601088581" mode="widthFix"></image>
		<view class="content">
			<view class="welcome">
				<view class="welcome-text-top" v-if="!isLogin" @tap="openLogin">你好 立即登录开启喜茶星球之旅</view>
				<view class="welcome-text-top" v-if="isLogin">吃瓜啵？{{userInfo.nickName}}</view>
				<view class="welcome-text-bottom">得闲饮茶HEYTEA一下</view>
			</view>
			<view class="member-card">
				<view class="info">
					<view class="title">
						<view class="title-big">GO会员</view>
						<view class="tips">
							<view>成为星球会员享双倍积分</view>
							<image src="/static/my/icon_arrow.png"></image>
						</view>
					</view>
					<image @tap="openLogin" v-if="!isLogin" src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/touxiang.png?sign=56c787f97087d5b93ac546832755195e&t=1601088158" class="avatar"></image>
					<image v-if="isLogin" :src="userInfo.avatarUrl" class="avatar"></image>
					<view class="lv">Lv1</view>
				</view>
				<view class="card">
					<navigator class="grid" url="" open-type="navigate">
						<image src="/static/my/me_icon_points.png"></image>
						<view class="value">0</view>
						<view class="title">积分商城</view>
					</navigator>
					<navigator class="grid" url="" open-type="navigate">
						<image src="/static/my/me_icon_quan.png"></image>
						<view class="value">0</view>
						<view class="title">喜茶劵</view>
					</navigator>
					<navigator class="grid" url="" open-type="navigate">
						<image src="/static/my/me_icon_wallet.png"></image>
						<view class="value">0</view>
						<view class="title">钱包</view>
					</navigator>
					<navigator class="grid" url="" open-type="navigate">
						<image src="/static/my/me_icon_gift_card.png"></image>
						<view class="value">0</view>
						<view class="title">阿喜有礼</view>
					</navigator>
				</view>
			</view>
			<view class="broadcast">
				<view class="broad-title">星球播报</view>
				<swiper class="swiper" :autoplay="true" next-margin="50px" :interval="5000" :duration="500" circular>
					<swiper-item class="swiper-item" v-for="item in broadList" :key="item._id">
						<view class="swiper-wrapper">
							<image :src="item.coverPic"></image>
							<view class="desc">
								<view class="title">{{item.title}}</view>
								<view class="subtitle">{{item.subtitle}}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="task">
				<view class="task-text">
					<view class="title">任务中心</view>
					<view class="en-text">MISSION CENTER</view>
				</view>
				<view class="image-wrapper"><image src="/static/my/b3d3a98e3c7f450aaa32fbec6aecdfaf.png"></image></view>
			</view>
		</view>
		<view class="open-gift">
			<view class="gift-header">
				<view class="title">开通礼包</view>
				<view class="subtitle">更多</view>
			</view>
			<view class="gift-box">
				<view class="grid" v-for="(item, index) in giftList" :key="index">
					<image :src="item.src"></image>
					<view class="title-box">
						<view class="gift-name">{{ item.title }}</view>
						<view class="number">{{ item.number }}</view>
					</view>
				</view>
			</view>
		</view>
		<uni-list :border="false">
			<uni-list-item v-for="(item, index) in bottomList" :title="item.title" :key="index" :rightText="item.subtitle" link></uni-list-item>
		</uni-list>
		<login v-if="showLogin" @loginSuccess="loginSuccess" :showLogin.sync="showLogin"></login>
	</view>
</template>

<script>
	import { home } from '../../api/home.js';
	import login from '@/components/login/login.vue'
	import{giftList,bottomList} from './config.js'
export default {
	components:{login},
	data() {
		return {
			showLogin:false,
			userInfo:{},
			isLogin:false,
			broadList:[],
			giftList:giftList,
			bottomList: bottomList
		};
	},
	mounted() {
		this.init()
	},
	methods: {
	async init(){
			if(uni.getStorageSync('userInfo')){
				this.userInfo=uni.getStorageSync('userInfo')
				this.isLogin=true
			}
			let broadRes=await home('broadcast')
			if(broadRes&&broadRes.data){
				this.broadList=broadRes.data
			}
		},
		openLogin(){
			this.showLogin=true
		},
		loginSuccess(data){
			this.userInfo=data
			this.isLogin=true
		}
	}
};
</script>
<style lang="less">
@import './my.less';
</style>
