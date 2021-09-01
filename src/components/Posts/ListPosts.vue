<template>
    <div>
        <transition-group v-if="posts!=0" appear name="listPost" enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__bounceOut" class="listPosts" tag="div">
            <Post v-for="(post,index)  in posts"  :key="index" :post="post" />
        </transition-group>

        <div v-if="posts.length==0" class="empty">
            <Title title="No Post   :("/>
        </div>
    </div>
</template>

<script>
import Post from "@/components/Posts/Post"
import Title from '@/components/Title'

export default {
    name:'ListPosts',
    props:{
        posts:{
            type:Array,
            require:true
        }
    },
    components:{
        Post,
        Title
    },
}
</script>

<style lang="scss" scoped>
.empty{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
}
</style>
