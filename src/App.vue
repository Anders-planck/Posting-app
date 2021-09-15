<template>
  <div id="app">
    <Navbar/>
    <transition mode="out-in" name="form" appear enter-active-class="animate__animated animate__fadeIn animate__faster">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name:'App',
  components:{
    Navbar,
  },methods:{
    alert(){
      console.log("alert")
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@900&family=Varela+Round&display=swap');
#app {
  color: #2c3e50;
  font-family: 'Klee One', cursive;
}
ol, ul {
  list-style: initial !important;
}
 
.container{
  width: 650px;
  min-width: 650px;
  margin: 0 auto;
}

@media only screen and (max-width: 900px){
  .container{
    width: 100%;
    min-width: 0;
    margin: 0 auto;
  }
}
@media only screen and (max-width:700px){
  .container{
    width: 100%;
    min-width: 0;
    margin: 0 auto;
  }
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
