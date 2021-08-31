<template>
    <div class="PostCreation container">
        <div class="menu">
            <div class="menuItem cursor-pointer" @click="position(1)" :class="{'active':step==1}">
                Create
            </div>
            <div class="menuItem cursor-pointer" @click="position(2)" :class="{'active':step==2}">
                Preview
            </div>
            <div class="menuItem cursor-pointer" @click="position(3)" :class="{'active':step==3}">
                validate
            </div>
        </div>
        <div class="content">
            <transition mode="out-in" name="form" appear enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__zoomOutLeft animate__faster">
                <div class="form" v-show="step==1">
                    <Form state="create" :post="post" />
                    <div class="arrow">
                        <div class="content">
                            <button @click="next">
                                <NextArrowIcon size="30px" /></button>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" name="preview" appear enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__zoomOutLeft animate__faster">
                <div class="form" v-show="step== 2">
                    <PostPreview :post="post" />
                    <div class="arrow">
                        <div class="content mr-3">
                            <button @click="back" class="">
                                <BackArrowIcon size="30px" />
                            </button>
                        </div>
                        <div class="content">
                            <button @click="next">
                                <NextArrowIcon size="30px" />
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" name="preview" appear enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__zoomOutLeft animate__faster">
                <div class="form" v-show="step== 3">
                    <PostValidate :post="post"/>
                    <div class="arrow">
                        <div class="content">
                            <button @click="back">
                                <BackArrowIcon size="30px" />
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor"
import AddIcon from '@/components/Icons/AddIcon'
import CloseIcon from '@/components/Icons/CloseIcon'
import NextArrowIcon from '@/components/Icons/NextArrowIcon'
import BackArrowIcon from '@/components/Icons/BackArrowIcon'
import Title from '@/components/Title'
import Form from '@/components/Posts/PostCreate/Form'
import PostPreview from '@/components/Posts/PostCreate/PostPreview'
import PostValidate from '@/components/Posts/PostCreate/PostValidate'

export default {
    name:'PostCreation',
    components:{
        Editor,
        AddIcon,
        CloseIcon,
        Title,
        Form,
        NextArrowIcon,
        BackArrowIcon,
        PostPreview,
        PostValidate
    },
    data(){
        return{
            
        }
    },
    computed:{
        post(){
            return this.$store.getters.getPost

        },
        step(){
            return this.$store.getters.getStep
        }
    },
    methods:{
        next(){
            console.log(this.$store.getters.getPost)
            this.$store.commit('nextStep')
        },
        back(){
            this.$store.commit('backStep')
        },
        position(index){
            this.$store.commit('setStep',index);
        },
    }

}
</script>

<style lang="scss" scoped>
.PostCreation{
    border: 2px solid #000;
    border-radius: 5px;
    max-width: 900px;
    background: #fff;
    box-shadow: 0px 7px 27px 0px #E4E4E4;
    .menu{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .menuItem{
            padding: 1rem;
            width: 33.33%;
            border: 1px solid rgba(0, 0, 0, 0.185);
            border-top: none;
            font-family: 'Varela Round', sans-serif;
            text-align: center;
            text-transform: capitalize;
        }
        
    }
}
.active{
    border-bottom: 8px solid #42b983e1 !important;
}

.direction{
    display: flex;
    justify-content:space-between ;
    align-items: center;
}

.content{
    padding: 1rem;
}
.arrow{
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: end;
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        background: rgba(0, 0, 0, 0.048);
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
        }
        span{
            display: block;
        }
    }
}

</style>