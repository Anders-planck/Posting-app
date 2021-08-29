<template>
  <div class="posts container">
      <div class="actions">
        <Actions/>
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

export default {
  name: 'Posts',
  components: {
    Actions,
    PostsView
  }
}
</script>

<style scoped lang="scss">

  .posts{
    margin: 5rem auto;
    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1rem ;
    padding-top: 2rem;
    box-shadow: 0px 7px 27px 0px #E4E4E4;
    z-index: 1;
    
    .actions{
      width: 250px;
    }
    .postsView{
      width: 650px;
    }
  }
</style>
