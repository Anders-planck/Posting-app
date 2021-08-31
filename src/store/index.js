import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step:1,
    post:{
      online:false,
      at:"",
      liked:{
        state:false,
        nber:0,
      },
      author:{
        name:'',
        foto:'',
      },
      tags:[],
      title:'',
      description:'',
      images:[],
      comments:[],
    },
    posts:[],
  
  },
  mutations: {
    nextStep: state => state.step++,
    backStep: state => state.step--,
    setStep: (state,payload) =>( state.step= payload)
  },
  actions: {
  },
  getters:{
    getPost: state => state.post,
    getPosts: state => state.posts,
    getStep: state => state.step,
  },
  modules: {  }
})
