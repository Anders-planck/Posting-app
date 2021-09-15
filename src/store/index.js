import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const newPost= function (){
  return {
    id:null,
    online:false,
    at:"",
    liked:{
      state:false,
      nber:0,
    },
    author:{
      name:'Planck Anders',
      foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
    },
    tags:[],
    title:'',
    description:'',
    images:[],
    comments:[],
  }
}


const newStatus= function (){
  return {
    id:null,
    online:false,
    at:"",
    liked:{
      state:false,
      nber:0,
    },
    author:{
      name:'Planck Anders',
      foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
    },
    tags:[],
    images:[],
    comments:[],
  }
}
export default new Vuex.Store({
  state: {
    step:1,
    post:newPost(),
    posts:[
      newPost(),
    ],
    status:[
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
    ],
    oneStatus: newStatus(),
  
  },
  mutations: {
    nextStep: state => state.step++,
    backStep: state => state.step--,
    setStep: (state,payload) =>( state.step= payload),
    addPost: (state, payload) => (state.posts.push(payload)),
    addStatus: (state, payload) => (state.status.push(payload)),
    setCommentPost: (state,payload) => (state.posts[payload.id].comments.push(payload)),
    setCommentStatus: (state,payload) => (state.status[payload.id].comments.push(payload)),
    resetPost: state => state.post= newPost(),
    resetStatus : state=> state.oneStatus=newStatus()
  },
  actions: {
  },
  getters:{
    getPost: state => state.post,
    getStatus: state => state.oneStatus, 
    getPosts: state => state.posts,
    getStep: state => state.step,
    getStatus: state => state.status
  },
  modules: {  }
})
