<template>
    <svg enable-background="new 0 0 48 48" :height="IconSize" id="Layer_1" version="1.1" viewBox="0 0 48 48"
        :width="IconSize" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Layer_3">
            <path
                d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M4,24   C4,12.954,12.954,4,24,4c4.85,0,9.293,1.727,12.755,4.597L8.597,36.755C5.727,33.293,4,28.85,4,24z M24,44   c-4.756,0-9.119-1.667-12.552-4.439l28.112-28.111C42.333,14.881,44,19.244,44,24C44,35.046,35.046,44,24,44z"
                fill="#241F20" />
        </g>
    </svg>
</template>


<script>
    export default {
        name: 'NothingIcon',
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
            AddPost(){
                this.$emit("AddPost")
            }
        },
    }
</script>