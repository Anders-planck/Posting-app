<template>
    <div class="form">
        <div class="mb-3 form-group">
            <label for="title" class="label">
                Title
                <span class="require">*</span>
            </label>
            <input type="text"  placeholder="Your title here... " name="title" v-model="post.title" class="input" />
        </div>

        <div class="mb-6 form-group">
            <div class="fields">
                <label for="title" class="label">
                    Tags
                </label>
                <div class="add"  @click="AddTag">
                    <AddIcon size="25px"/>
                </div>
            </div>
            <transition-group name="listTag" enter-active-class="animate__animated animate__backInLeft animate__faster">
            <div v-for="(tag,index) in post.tags" :key="index" class="fields mt-3 form-group">
                <label :for="tag" class="label add text-gray-400">
                    <span class="text-gray-500">#</span>{{index+1}}
                </label>
                <input type="text"  placeholder=" Your tag..." v-model="post.tags[index]" class="input inputItem " />
                <div class="add"  @click="RemoveTag(index)">
                    <CloseIcon size="23px"/>
                </div>
            </div>
            </transition-group>
        </div>

        
        <div class="mb-6 form-group">
            <label for="Description" class="label">
                description
                <span class="require">*</span>
            </label>
            <Editor inputName="description" :post="post" class="mt-2"/>
        </div>

        

        <div class="mb-6 form-group">
            <div class="fields">
                <label for="title" class="label">
                    Images
                </label>
                <!-- <div class="add"  @click="AddImage">
                    <AddIcon size="25px"/>
                </div> -->
            </div>

            <!-- <transition-group name="listImage" enter-active-class="animate__animated animate__backInLeft animate__faster">
            <div v-for="(image,index) in post.images" :key="index" class="fields mt-3 form-group">
                <label :for="image" class="label add text-gray-400">
                    <span class="text-gray-500">#</span>{{index+1}}
                </label>
                <input type="file"  class="input inputItem" @change="onFileSelected" />
                <div class="add"  @click="RemoveImage(index)">
                    <CloseIcon size="23px"/>
                </div>
            </div>
            </transition-group> -->
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>

        <div class="mb-3 form-group checkbox">
            <label for="online" class="label check">
                Online
                <span class="require">*</span>
            </label>
            <input type="checkbox" id="online" name="online"  v-model="post.online" class="check" />
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor"
import AddIcon from '@/components/Icons/AddIcon'
import CloseIcon from '@/components/Icons/CloseIcon'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name:'Form',
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
        AddIcon,
        CloseIcon,
        vueDropzone: vue2Dropzone
    },
    created(){
        // this.inizialize()
    },
    
    data(){
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    methods:{
        /* inizialize(){
            if(this.$props.state=='create' && this.$props.post==null){
                this.post=this.getEmptyPost()
            }
        },
        getEmptyPost(){
            let post= {
                online:true,
                at: '',
                title: '',
                description: '',
                images: [],
                tags:[],
            }
            return post             
        }, */
        AddTag(){
            this.post.tags.push('');
        },
        RemoveTag(index){
            this.post.tags.splice(index,1);
        },
        AddImage(){
            this.post.images.push('');
        },
        RemoveImage(index){
            this.post.images.splice(index,1);
        },
        onFileSelected(event){
            this.post.images[this.post.images.length-1]=event.target.files[0]
            console.log(this.post.images)
        },
    }

}
</script>

<style lang="scss" scoped>

.label{
    font-family: 'Varela Round', sans-serif;
    font-weight: 900;
    margin-bottom: 2px;
    font-size: 1rem;
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
    width: 100%;
    display: block;
}
.inputItem{
    width: 80% !important;
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


.fields{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.add,.close{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
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

.check{
    margin-right: 20px;
}



</style>