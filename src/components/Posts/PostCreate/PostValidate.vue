<template>
  <div class="PostValidate">
      <h1 class="title" v-if="post.online">Do you want to create this post and post it ?</h1>

      <h1 class="title" v-if="!post.online">Do you want to create this post and post it later?</h1>
    
      <p class="confirm mt-6">
          <p class="mb-3 form-group checkbox">
            <label for="confirm" class="label check">
                Confirm
            </label>
            <input type="checkbox" id="confirm" name="confirm"  v-model="confirm" class="confirm" />
        </p>
      <div class="button">
        <button @click="addPost" :class="{'disable': !confirm}">Create Post</button>
      </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import moment from 'moment'
export default {
    name:'PostValidate',
    props:{
        post:{
            type:Object,
            require:true
        }
    },
    components:{
        Title,
    },
    data(){
        return {
            confirm:false
        }
    },
    computed:{
            posts(){
                return this.$store.getters.getPosts
            },
    },
    methods:{
        addPost(){
            this.confirm=false
            this.post.id=this.posts.length
            this.post.at= moment().format('L - h:mm a')
            this.$store.commit('addPost',this.post)
            this.$store.commit('resetPost')
            this.$store.commit('setStep',1)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.confirm{
    font-family: 'Varela Round', sans-serif;
    font-size: 1.2rem;
}
.button{
    width: 100%;
    text-align: right;
    margin: 1rem auto ;
    button{
        color: #fff;
        font-family: 'Varela Round', sans-serif;
        padding: 1rem 2rem;
        background: #42b983;
        border-radius: 5px;
        font-size: 1.2rem;
        &:disabled{
            color: #e01235;
        }
    }
}

.disable{
    cursor: not-allowed;
    color: #2c3e50;
    background: #d2d9db !important;
}

    *{
        margin: 0;
    }
    .title{
        font-family: 'Hind Siliguri', sans-serif;
        font-weight: bold;
        font-size: 2rem;
    }


.label{
    font-family: 'Varela Round', sans-serif;
    font-weight: 900;
    margin-bottom: 2px;
    font-size: 1.2rem;
    position: relative;
    text-transform: capitalize;
    display: inline-block;
}



.check{
    margin-right: 20px;
}
</style>