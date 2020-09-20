<script>
	export default {
		onLaunch: function() {
					wx.cloud.init({
								env: 'devl-ed2ju', // 云开发创建环境的 id 复制过来就行
								traceUser: true
							});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	page {
		background-color: #F8F8F8;
		height: 100%;
		font-size: 26upx;
		color: #343434;
	}
</style>
