<template>
    <div class="post">
        <ImageView :images="post.images" />
        <div class="info">
            <PostAuthorInfo :post="post" />
        </div>

        <div class="info">
            <PostTitle :title="post.title" />
            <PostDescription :description="post.description" />
        </div>

        <div class="footer">
            <PostFooter :reply="post.comments" :at="post.at" :like="post.liked" @toogleStateComments="toogleAreaComment"/>
        </div>
        
        <transition name="commentArea" appear enter-active-class="animate__animated animate__fadeInDown animate__bouncIn" leave-active-class="animate__animated animate__bounceOut">
            <div class="comments info" v-if="showAreaComment">
                <PostComment class="Comment" v-for="(comment,index) in post.comments" :comment="comment" :key="index"/>
                <div class="form">
                    <textarea v-model="comment" :placeholder="placeholder"></textarea>
                    <div class="Send">
                        <SendIcon/>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ImageView from '@/components/Posts/ImageView'
import PostDescription from '@/components/Posts/PostDescription'
import PostTitle from '@/components/Posts/PostTitle'
import PostFooter from '@/components/Posts/PostFooter'
import PostAuthorInfo from '@/components/Posts/PostAuthorInfo'
import PostComment from '@/components/Posts/PostComment'
import SendIcon from '@/components/Icons/SendIcon'

export default {
    name:'Post',
    props:{
        post:{
            type:Object,
            require:true
        }
    },
    components:{
        ImageView,
        PostDescription,
        PostTitle,
        PostFooter,
        PostAuthorInfo,
        PostComment,
        SendIcon
    },
    data(){
        return{
            placeholder:'write your comment here :) ...',
            comment:'',
            showAreaComment:false,
        }
    },
    methods:{
        toogleAreaComment(){
            console.log('bon')
            this.showAreaComment=!this.showAreaComment
        }
    }
}
</script>

<style scoped lang="scss">
    .post{
        margin-top: 2rem;
        padding: 1rem;
        box-shadow: 3px 8px 34px 2px rgba(44, 62, 80, 0.080);
        border-radius:5px;
        display: flex;
        flex-direction: column;


        .info{
            margin-top:0.5rem ;
            padding:0.1rem;
            &:first-child{
                padding: 1rem;
            }
        }

        .footer{
            height: 35px;
            padding: 2px;
        }

        .comments{
            border: 1px solid rgba(7, 7, 7, 0.116);
            border-radius: 5px;
            
            

            .form{
                display: flex;
                justify-content: start;
                align-items: center;
                textarea{
                    padding: 0.5rem;
                    width: calc(100% - 100px);
                    min-height: 100px;
                    height: 100px;
                    max-height: 100px;
                    border:1px solid  rgba(0, 0, 0, 0.103);
                    font-family: 'Hind Siliguri', sans-serif;
                    
                }
                .Send{
                    height: 100px;
                    width: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.103);
                }
            }

        }

    }
</style>