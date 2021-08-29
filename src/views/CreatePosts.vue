<template>
  <div class="createPosts container">
      <Title title="Create POST"/>
      <PostForm :state="state" :post="post" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import PostForm from '@/components/Posts/PostForm'

export default {
    name:'CreatePosts',
    components:{
        Title,
        PostForm
    },
    data(){
        return {
            state: 'create',
            post:null,
        }
    }

}
</script>

<style lang="scss" scoped>

.createPosts{
    margin: 5rem auto;
    padding: 1rem ;
    padding-top: 2rem;
    box-shadow: 0px 7px 27px 0px #E4E4E4;
    
}


</style>