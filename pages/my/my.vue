<template>
	<view class="my-info">
		<image class="head-image" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png" mode="widthFix"></image>
		<view class="content">
			<view class="welcome">
				<view class="welcome-text-top">你好 立即登录开启喜茶星球之旅</view>
				<view class="welcome-text-top" v-if="false">吃瓜啵？大大东</view>
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
					<image src="https://6465-devl-ed2ju-1303192015.tcb.qcloud.la/xiTea_order/0bdb360866d94aa4a4404c0b676a1982.jpg?sign=d047d8f1ac3fdb69449ae6880295aae8&t=1600955640" class="avatar"></image>
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
					<swiper-item class="swiper-item">
						<view class="swiper-wrapper">
							<image src="" mode=""></image>
							<view class="desc">
								<view class="title"></view>
								<view class="subtitle"></view>
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
	</view>
</template>

<script>
export default {
	data() {
		return {
			giftList: [
				{
					src: '/static/my/member_benefits/me_rights_icon_free.png',
					title: '星球赠饮券',
					number: '1'
				},
				{
					src: '/static/my/member_benefits/me_rights_icon_1jia1.png',
					title: '买一赠一券',
					number: '1'
				},
				{
					src: '/static/my/member_benefits/me_rights_icon_2jia1.png',
					title: '买二赠一券',
					number: '2'
				},
				{
					src: '/static/my/member_benefits/me_rights_icon_qingshi.png',
					title: '喜茶轻食券',
					number: '2'
				},
				{
					src: '/static/my/member_benefits/me_rights_icon_youxian_new.png',
					title: '优先券',
					number: '2'
				},
				{
					src: '/static/my/member_benefits/me_rights_icon_waimai_new.png',
					title: '免运费券',
					number: '2'
				}
			],
			bottomList: [
				{
					title: '会员码',
					subtitle: '门店扫码积分、喜茶钱包和阿喜有礼卡支持'
				},
				{
					title: '兑换中心',
					subtitle: '兑换星球会员、喜茶券和阿喜有礼卡'
				},
				{
					title: '星球封面'
				},
				{
					title: '联系客服'
				},
				{
					title: '消息中心'
				},
				{
					title: '更多'
				}
			]
		};
	},
	mounted() {},
	methods: {}
};
</script>
<style lang="less">
@import './my.less';
</style>
