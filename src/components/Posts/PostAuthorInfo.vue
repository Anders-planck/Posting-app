<template>
    <div class="PostAuthorInfo">
        <div class="foto">
            <img :src="post.author.foto" />
        </div>
        <div class="infoAuthor">
            <span class="alias">
                {{post.author.name}}
            </span>
            <p>
                <span class="tag" v-for="tag in post.tags" :key="tag">
                    <span class="hastag">#</span>{{tag}}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PostAuthorInfo',
    props:{
        post:{
            type:Object,
            require:true
        }
    }


}
</script>

<style scoped lang="scss">
.PostAuthorInfo{
    display: flex;
    align-items: center;
    justify-content: start;

    .foto{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgb(131,58,180);
        background: linear-gradient(151deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 56%, rgba(252,176,69,1) 100%); 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:5px;

        img{
            width: 55px;
            height: 55px;
            border-radius: 50%;
        }
    }
    .infoAuthor{
        display: flex;
        justify-content: start;
        align-items: flex-start;
        flex-direction: column;
        .alias{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 900;
        }
        p{
            overflow-wrap: break-word;
            font-size: 12px;
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
            font-size: 13px;
        }
    }
}
</style>