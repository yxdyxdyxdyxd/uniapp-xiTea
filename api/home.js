// promise 封装获取云服务的数据方法
const db = wx.cloud.database();

let home = function(name){
	return new Promise((resolve,reject)=> {
		const data = db.collection(name);
		// 集合使用get 请求获取json 数据
		data.get().then(res=>{
			resolve(res);
		}).catch(err=>{
			reject(err)
		})
	})
}

let whereData=function(name,param){
	return new Promise((resolve,reject)=>{
		const data= db.collection(name);
		data.where(param).get().then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
		
	})
}
export { home,whereData }