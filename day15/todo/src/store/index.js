import Vue from 'vue'
import Vuex from 'vuex'
import vuexP from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[vuexP()],
  state: {
    list:[]
  },
  getters: {
  },
  mutations: {
    add(state,val){
      // console.log(val);
     state.list.push(val)
    },
    bjs(state,val){
      console.log(val);
      let i=state.list.findIndex(item=>item.date===val.date)
      state.list.splice(i,1,{
        ...val
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
