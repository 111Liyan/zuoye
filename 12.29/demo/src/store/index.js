import { createStore } from 'vuex'

export default createStore({
  state: {
    list:[]
  },
  getters: {
  },
  mutations: {
		random(state, name) {
			state.list = [];
			state.list.push(name);
			console.log(state.list);
		},
	},
  actions: {
  },
  modules: {
  }
})
