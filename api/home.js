// promise 封装获取云服务的数据方法
const db = wx.cloud.database();

let home = function(banner){
	return new Promise((resolve,reject)=> {
		const banners = db.collection(banner);
		// 集合使用get 请求获取json 数据
		banners.get().then(res=>{
			resolve(res);
		}).catch(err=>{
			reject(err)
		})
	})
}

export { home }