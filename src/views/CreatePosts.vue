<template>
  <div class="createPosts container">
      <Title title="CREATE POST" class="title mb-3"/> 
      <PostCreation/>
  </div>
</template>

<script>
import Title from '@/components/Title'
import PostCreation from '@/components/Posts/PostCreation'
export default {
    name:'CreatePosts',
    components:{
        Title,
        PostCreation
    },

}
</script>

<style lang="scss" scoped>

.createPosts{
    margin: 5rem auto;
}

.title{
    text-align: center;
}


</style>