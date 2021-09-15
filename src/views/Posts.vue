<template>
  <div class="posts container">
      <div class="postsStatus">
        <PostsStatusView/>
      </div>

      <div class="postsView">
        <PostsView/>
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
  }
}
</script>

<style scoped lang="scss">

  .posts{
    width: 650px;
  
    .postsView{
      width: 100%;
    }

    .postsStatus{
      width: 100%;
      margin-top: 3rem;
      margin-bottom: 5rem;
      background: #ffffff;
    }
  }
</style>
