<template>
  <div class="PostValidate">
      <h1 class="title" v-if="online">Do you want to create this post and post it ?</h1>

      <h1 class="title" v-if="!online">Do you want to create this post and post it later?</h1>
    
      <p class="confirm mt-6">
          Confirm 
          <input type="checkbox" v-model="confirm"/>
      </p>
      <div class="button">
        <button  :class="{'disable': !confirm}"> Create Post</button>
      </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
    name:'PostValidate',
    props:{
        online:{
            type:Boolean,
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
    components:{
        
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
</style>