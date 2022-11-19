import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dateB:'',
    dateC:'',

  },
  getters: {
  },
  mutations: {
    dateBs(state,date){
      state.dateB=date
    },
    dateCs(state,date){
      state.dateC=date
    }
  },
  actions: {
  },
  modules: {
  }
})
