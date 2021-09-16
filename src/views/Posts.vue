<template>
  <div class="vue" :class="className.container">
    <div class="posts" :class="className.posts">
      <div class="postsStatus">
        <PostsStatusView />
      </div>
      <div class="postsView">
        <PostsView />
      </div>
    </div>

    <div class="suggestion"  v-if="suggestion">
      h
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Actions from "@/components/Posts/Actions"
  import PostsView from "@/components/Posts/PostsView"
  import PostsStatusView from "@/components/Posts/PostsStatusView"

  export default {
    name: 'Posts',
    components: {
      Actions,
      PostsView,
      PostsStatusView
    },
    data(){
      return{
        widthScreen:1000,
        suggestion:false,
        window:null,
        className:{
          container:'',
          posts:'',
        }
      }
    },
    created(){
        window.addEventListener('resize',this.checkScreen)
        this.checkScreen()
    },
    methods:{
      checkScreen(){
            this.window=window.innerWidth
            console.log(this.window)
            if(this.window <= this.widthScreen){
                this.suggestion=false
                this.className.container='single'
                this.className.posts='postsRisize'
              console.log(this.suggestion)  
            }else{
                this.suggestion=true
                this.className.container=''
                this.className.posts=''
                console.log(this.suggestion)
            }
      },
    }
  }
</script>

<style scoped lang="scss">
  .posts {
    width: 600px;

    .postsView {
      width: 100%;
    }

    .postsStatus {
      width: 100%;
      margin-bottom: 1rem;
      background: #ffffff;
    }
  }

  .suggestion {
    min-width: 300px;
    background: #000;   
    min-height: 30vh;
  }

  .single{
    display: flex ;
    width: 100% !important;
    padding: 0  1rem;
    justify-content: center !important;
    align-items: center;
  }

  .postsRisize{
    width: 100% !important;
    margin: 0 auto;
  }

  .vue{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 6rem !important;
    width: 1000px;
    margin :0 auto;
  }
</style>