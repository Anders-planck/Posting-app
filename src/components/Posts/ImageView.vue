<template>
<div class="image">
    <transition-group appear name="image" v-if="!showBox" tag="div"
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__bounceOut">
        <div class="bloc" key="1" >
            <img v-for="(image,index) in ImagePreview" :key="index" :src="image.src" :alt="image.name"
                :class="className" />
            <div class="flou"></div>
        </div>

        <div class="add" v-if="getLength" @click="MoreImage" key="2">
            <AddIcon size="48px"/>
        </div>
    </transition-group>


    <transition-group appear name="bloc" v-if="showBox" tag="div"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeInUp">
        <div class="bloc"  key="1">
            <img v-for="(image,index) in images" :key="index" :src="image.src" :alt="image.name"
                :class="className" />
            <div class="flou"></div>
        </div>
        <div class="close" @click="LessImage" key="2">
            <CloseIcon size="40px"/>
        </div>
    </transition-group>

    



    <!-- <transition v-if="showModal" appear name="bounce" enter-to-class="animate__animated animate__backInUp"
        enter-active-class="animate__animated animate__backInUp"
        leave-active-class="animate__animated animate__bounceOutUp">
        <div class="">
            <div class="close">
                <CloseIcon class="closeIcon" color="#fff" v-on:ToogleNavMobile="ToogleNavMobile" />
            </div> 
            hello common
        </div>
    </transition> -->
</div>
</template>

<script>
import AddIcon from "@/components/Icons/AddIcon"
import CloseIcon from "@/components/Icons/CloseIcon"
export default {
    name:'ImageView',
    components:{
        AddIcon,
        CloseIcon
    },
    props:{
        images:{
            type:Array,
            require:true
        }
    },
    data(){
        return{
            with:null,
            height:null,
            className:null,
            ImagePreview:[],
            showBox:false,
        }
    },
    mounted(){
        this.getSize();
    },
    created(){
        this.getArray()
    },
    computed:{
        getLength(){
            if(this.$props.images.length>6){
                return true 
            }
            return false
        }
    },
    methods:{
        getSize(){
            if(this.ImagePreview.length==1){
                this.className= "image1"
                return this.className
            }
            if(this.ImagePreview.length==2){
                this.className= "image2"
                return this.className
            }

            if(this.ImagePreview.length==3){
                this.className= "image3"
                return this.className
            }

            if(this.ImagePreview.length==4){
                this.className= "image4"
                return this.className
            }

            if(this.ImagePreview.length==5){
                this.className= "image5"
                return this.className
            }

            if(this.ImagePreview.length>=6){
                this.className= "image6"
                return this.className
            }

        },
        getArray(){
            if(this.$props.images.length>6){
                this.$props.images.forEach((image ,index) => {
                    if(index <6)
                        this.ImagePreview.push(image)
                });
                console.log(this.ImagePreview)
            }else{
                this.ImagePreview=this.$props.images
            }   
        },
        MoreImage(){
            this.showBox=true
            this.className='any'
        },
        LessImage(){
            this.showBox=false
            this.className=this.getSize()
        }
    }
}
</script>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}

img {
    object-fit: cover;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
}


.add,.close{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.048);
    margin: 10px auto ;
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


.bloc{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;

    

    img{
        z-index: 10;
        border-radius: 5px;
        margin: 2px;
        &:last-child{
            grid-column-start: 1;
            grid-column-end: 5;
        }
        &:first-child{
            grid-column-start: 1;
            grid-column-end: 4;
        }
    }

    .any{

        width: 49% !important;
        height: 210px !important;
        transition: all 0.2s ease-in-out !important;
        &:hover{
            transform:scale(1.3);
            object-fit: contain;
            z-index: 15;
            border-radius: 10px !important;
        }
    }

    .image1{
        width: 100% !important;
        height: 210px !important;
    }

    .image2{
        width: 49% !important;
        height: 210px !important;
    }
    .image3{
        width: 32.33% !important;
        height: 210px !important;
    }

    .image4{
        width: 24% !important;
        height: 210px !important;
    }

    .image5{
        width: 19% !important;
        height: 210px !important;
    }

    .image6{
        width: 15.66% !important;
        height: 210px !important;
    }

    .flou{
        position:absolute;
        background: #ffde5917;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
}

</style>