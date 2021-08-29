<template>
<transition-group appear name="listPost" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__bounceOut" class="listPosts" tag="div">
    <Post v-for="(post,index)  in posts" :key="index" :post="post"/>
</transition-group>
</template>

<script>
import Post from "@/components/Posts/Post"

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
    },
}
</script>
