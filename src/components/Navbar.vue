<template>
    <div class="header">
        <header class="container">
            <nav>
                <div class="logo">
                    <router-link to="/" class="logo-word">POSTING</router-link>
                </div>
                <ul class="links" v-if="!Mobile">
                    <li v-for="link in links" :key="link.path">
                        <router-link class="link" :to="link.path">{{link.name}}</router-link>
                    </li>
                </ul>

                <transition name="fade" appear>
                    <MenuIcon class="menuIcon" v-if="Mobile && !MobileNavbar" v-on:ToogleNavMobile="ToogleNavMobile" />
                </transition>
            </nav>




            <transition appear name="bounce" enter-to-class="animate__animated animate__backInUp"
                enter-active-class="animate__animated animate__backInUp"
                leave-active-class="animate__animated animate__bounceOutUp" v-if="Mobile && MobileNavbar">
                <div class="MobileLinks">
                    <div class="close">
                        <CloseIcon class="closeIcon" color="#fff" v-on:ToogleNavMobile="ToogleNavMobile" />
                    </div>
                    <ul>
                        <li v-for="link in links" :key="link.path">
                            <router-link class="link" :to="link.path">{{link.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </header>
    </div>
</template>

<script>
import MenuIcon from "@/components/Icons/MenuIcon"
import CloseIcon from "@/components/Icons/CloseIcon"

export default {
    name:'Navbar',
    components:{
        MenuIcon,
        CloseIcon,
    },
    data (){
        return{
            Mobile:null,
            MobileNavbar:null,
            widthScreen:800,
            window:null,
            links:[
                {
                    name:"Posts",
                    path:"/",
                },
                {
                    name:"Sign Up",
                    path:"#",
                },
                {
                    name:"Sign In",
                    path:"#r",
                },
            ],
        }
    },
    created(){
        window.addEventListener('resize',this.checkScreen)
        this.checkScreen()
    },
    computed:{

    },
    methods:{
        ToogleNavMobile(){
            console.log("value",this.MobileNavbar)
            this.MobileNavbar=!this.MobileNavbar
        }, 
        checkScreen(){
            this.window=window.innerWidth
            if(this.window <= this.widthScreen){
                this.Mobile=true
                this.MobileNavbar=false
                return
            }else{
                this.Mobile=false
                this.MobileNavbar=false
                return
            }
        },
        alert(){
            console.log("alert")
        }
    }
}
</script>

<style scoped lang='scss'>
*{
margin:0;
padding: 0;    
}
.header {
    position: sticky;
    top: 0;
    box-shadow: 0px 7px 27px 0px #E4E4E4;
    margin: 0;
    padding: 5px;
    background: #fff;
    z-index: 99;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
    .menuIcon {
        cursor: pointer;
        width: 32px;
        margin-top: 10px;
    }
    
    .logo {
        cursor: pointer;
        margin-top: 10px;
        margin-left: 10px;

        .logo-word {
            font-family: 'Varela Round', sans-serif;
            font-weight: 900;
            color: #2c3e50;
            text-decoration: none;
            font-size: 2rem;
            letter-spacing: 0.5rem;
            text-shadow: -3px 2px 6px rgba(44, 62, 80, 0.57);
        }
    }

    .links {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;

        li {
            
            margin-right: 1.5rem;
            .link {
                text-decoration: none;
                color: #2c3e50;
                text-transform: uppercase;
                font-weight:300;
                font-family: 'Varela Round', sans-serif;

                &.router-link-exact-active {
                    color: #42b983;
                }

            
            }
                &:last-child{
                    margin-right: 0;
                }
        }
    }
}





header {
    z-index: 3;
    background: #fff;
    

    .link {
        text-decoration: none;
        color: #2c3e50;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Varela Round', sans-serif;

        &:hover {
            color: #42b983;
            transform: scale(0.97);
        }
    }
}

.MobileLinks {
    background: #000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 241px;
    height: 100vh;
    padding: 10px 1px;
    display: flex;
    flex-direction: column;
    border: none;
    z-index: 5;

    .close {
        flex: .1;
        position: relative;
        padding: 0 5px;
        display: flex;
        justify-content: end;
        align-items: flex-start;

    }

    ul {
        margin: 0;
        padding: 0;
        width: 240px;
        list-style: none;
        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 5px;

        li {
            height: 60px;
            width: 240px;

            //border: 1px solid #121213;
            //border-left: none;
            .link {
                display: block;
                width: 100%;
                height: 100%;
                color: white;
                display: flex;
                justify-content: flex-start;
                padding: 10px;
                border-top: 1px solid white;
                align-items: center;
                font-size: 1.4rem;
                transition: all 0.2s ease-in-out;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }

            &:last-child {
                .link {
                    border-bottom: 1px solid white;
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/*     .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
        transform: scale(0);
        }
        50% {
        transform: scale(1.25);
        }
        100% {
        transform: scale(1);
        }
    } */

@media only screen and (max-width: 800px){
  .container{
    width: 100% !important;
  }

  header{
      
      nav{
          display: flex ;
          justify-content: space-between;
          align-items: center;
      }
  }
}

</style>