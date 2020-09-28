import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		userInfo:{}
	},
	mutations:{
		GET_USER(state, userInfo){
			state.userInfo=userInfo
		}
	},
	actions:{}
})
export default store