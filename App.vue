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

<style>
	/*每个页面公共css */
</style>
