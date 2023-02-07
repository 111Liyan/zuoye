import {login} from "../../../Api/Login"
const state={

}

const mutations={

}

const actions={
	list(ctx,obj){
		login(obj).then(res=>{
			console.log(res);
		})
	}

}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}