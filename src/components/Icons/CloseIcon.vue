<template>
    <svg @click="ToogleNavMobile" :width="IconSize" :height="IconSize" :fill="IconColor" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 50 50" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Layer_1">
            <path
                d="M44,1H6C3.243,1,1,3.243,1,6v38c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V6C49,3.243,46.757,1,44,1z M47,44   c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h38c1.654,0,3,1.346,3,3V44z" />
            <polygon
                points="42.293,6.293 25,23.586 7.707,6.293 6.293,7.707 23.586,25 6.293,42.293 7.707,43.707 25,26.414 42.293,43.707    43.707,42.293 26.414,25 43.707,7.707  " />
        </g>
        <g />
    </svg>
</template>

<script>
    export default {
        name: 'CloseIcon',
        props:{
            size:{
                type:String,
                require:false
            },
            color:{
                type:String,
                require:false
            }
        },
        data(){
            return{
                IconSize:null,
                IconColor:null,
            }
        },
        mounted(){
            this.getSize();
            this.getColor();
        },
        methods:{
            getSize(){
                if (this.$props.size){
                    this.IconSize=this.$props.size
                    return
                }
                this.IconSize="30px"
                return
            },
            getColor(){
                if (this.$props.color){
                    this.IconColor=this.$props.color
                    return
                }
                this.IconColor="#000000"
                return
            },
            ToogleNavMobile(){
                this.$emit("ToogleNavMobile")
            }
        },
    }
</script>