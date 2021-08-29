<template>
    <div class="form">
        <div class="mb-6 form-group">
            <label for="title" class="label">
                Title
                <span class="require">*</span>
            </label>
            <input type="text" name="title" v-model="Post.title" class="input" />
        </div>
        <div class="mb-6 form-group">
            <label for="Description" class="label">
                description
                <span class="require">*</span>
            </label>
            <Editor/>
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor"

export default {
    name:'PostForm',
    props:{
        state:{
            type: String,
            require: true
        },
        post:{
            type: Object,
            require: true
        }
    },
    components:{
        Editor,
    },
    created(){
        this.inizialize()
    },
    data(){
        return{
            Post:null,
        }
    },
    methods:{
        inizialize(){
            if(this.$props.state=='create' && this.$props.post==null){
                this.Post=this.getEmptyPost()
            }
        },
        getEmptyPost(){
            let post= {
                at: '',
                title: '',
                description: '',
                images: [],
            }
            return post             
        },

    }

}
</script>

<style lang="scss" scoped>

.label{
    font-family: 'Varela Round', sans-serif;
    font-weight: 900;
    margin-bottom: 2px;
    font-size: 1.2rem;
    position: relative;
    text-transform: capitalize;
    display: inline-block;
}

.input{
    border: 2px solid rgba(0, 0, 0, 0.089);
    border-radius: 5px !important;
    padding: 0.5rem;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.1rem;
    display: block;
}

.require{
    font-size: 1.3rem;
    color:#eb2f06 ;
    position: absolute;
    top: -5px;
    right: -10px;
}

.textarea{
    font-family: 'Varela Round', sans-serif;
}


</style>