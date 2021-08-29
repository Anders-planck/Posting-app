<template>
    <div class="PostComment">
        <div class="foto">
            <img :src="comment.author.foto" alt="">
        </div>
        <div class="infoAuthor">
            <span class="alias">
                {{comment.author.name}}
            </span>
            <p>
                <span class="tag" v-for="tag in comment.author.tags" :key="tag">
                    <span class="hastag">#</span>{{tag}}
                </span>
            </p>
            <p class="message">
                {{comment.message}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PostComment',
    props:{
        comment:{
            type:Object,
            require:true
        }
    }


}
</script>

<style scoped lang="scss">
.PostComment{
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 1rem;
    .foto{
        min-width: 40px;
        min-height: 40px;            
        max-width: 40px;
        max-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgb(131,58,180);
        background: linear-gradient(151deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 56%, rgba(252,176,69,1) 100%); 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:5px;

        img{
            min-width:40;
            min-height: 35px;
            max-width: 35px;
            max-height: 35px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }
    .infoAuthor{
        background: rgba(0, 0, 0, 0.055);
        border-radius: 5px;
        display: flex;
        justify-content: start;
        align-items: flex-start;
        flex-direction: column;
        max-width:100%;
        padding: 0.5rem;
        overflow-wrap: break-word;
        overflow: hidden;
        .alias{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 900;
            font-size: 12px;
        }
        p{
            overflow-wrap: break-word;
            font-size: 10px;
            font-style: normal;
            .tag{
                font-family: 'Hind Siliguri', sans-serif;
                font-weight: 900;
                margin-right: 4px;        
            }
        }
        .hastag{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 900;
            font-size: 11px;
        }
        .message{
            font-size: 15px !important;
            overflow-wrap: break-word !important;
            margin-left: 10px;
        }
    }
}
</style>