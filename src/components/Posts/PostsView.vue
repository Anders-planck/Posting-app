<template>
  <div class="postsView">
    <Title title="Events"/>
    <Description :description="description"/>
    <ListPosts :posts="posts"/>
  </div>
</template>

<script>
import Title  from '@/components/Title'
import Description  from '@/components/Description'
import ListPosts  from '@/components/Posts/ListPosts'

export default {
  name:'PostsView',
  components:{
    Title,
    Description,
    ListPosts,
  },
  data(){
    return{
      description:"Estelle is a  author and speaker. She speaks and leads workshops on web development all over the world. ",
      posts:[
        {
          at:"07/08/21 - 4h30 pm",
          liked:{
            state:true,
            nber:48,
          },
          author:{
            name:'Planck Anders',
            foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
            tags:['music', 'mood', 'life'],
          },
          title:'Music of the word',
          description:'Here we will focus on a list that showcases only the best CSS image gallery you can try out. The examples below are beautifully well done and you can make them from scratch and customize them with just a touch of extra CSS.',
          images:[
                {
                    name:"wood",
                    ext:"jpeg",
                    src:"https://img.redbull.com/images/c_crop,w_6720,h_4480,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2018/07/17/4f3fb5c2-8f05-48a9-9720-f58d934752c2/music-collection"
                },
                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N3Ea_5oJLZJwGc2TnlHunDCa47jtUk3ayifnh1mbBJjiRw50y3Mhyoh2_nhyAi_gtXo&usqp=CAU"
                },
          ],
          comments:[
            {
              author:{
                name:'Planck Anders',
                foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
                tags:['music', 'mood', 'life'],
              },
              message:"I Like this sssssssssssssss ssssssssssssssssss sssssssssssssssssss ssssssssssssssssss sssssssssssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssssssssss ssssss sssss ssss :) ...."
            },
            {
              author:{
              name:'Vanelle Siewe',
              foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/118993977_2707077182884584_6897333527490397953_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=LlQ_aB0R22wAX8VmWoS&_nc_ht=scontent-mxp1-1.xx&oh=6b76fe7b4adb2dc638be98ba9752bd48&oe=614FDCFB',
              tags:['wood', 'basket', 'peres']
            },
              message:"Woooauuuuhhhh :) ...."
            },
          ],
        },

        {
          at:"07/08/21 - 4h30 pm",
          liked:{
            state:false,
            nber:20,
          },
          author:{
            name:'Tokam Ivan',
            foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/43950958_353952805349008_3809490241836810240_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xYbjQAXB7XwAX-F1oT4&_nc_ht=scontent-mxp1-1.xx&oh=65e989ff609cd52f383a27964ee98787&oe=614DAA6E',
            tags:['Song' ,'cool']
          },
          title:'The Rock of The my Live',
          description:'Here we will focus on a list that showcases only the best CSS image gallery you can try out. The examples below are beautifully well done and you can make them from scratch and customize them with just a touch of extra CSS.',
          images:[
                {
                    name:"wood",
                    ext:"jpeg",
                    src:"https://img.redbull.com/images/c_crop,w_6720,h_4480,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2018/07/17/4f3fb5c2-8f05-48a9-9720-f58d934752c2/music-collection"
                },
          ],
          comments:[
            {
              author:{
                name:'Planck Anders',
                foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
                tags:['music', 'mood', 'life'],
              },
              message:"Cool :) ...."
            }
          ],
        },

        {
          at:"07/08/21 - 4h30 pm",
          liked:{
            state:true,
            nber:480,
          },
          author:{
            name:'Vanelle Siewe',
            foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/118993977_2707077182884584_6897333527490397953_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=LlQ_aB0R22wAX8VmWoS&_nc_ht=scontent-mxp1-1.xx&oh=6b76fe7b4adb2dc638be98ba9752bd48&oe=614FDCFB',
            tags:['wood', 'basket', 'peres']
          },
          title:'Word with Song',
          description:'Here we will focus on a list that showcases only the best CSS image gallery you can try out. The examples below are beautifully well done and you can make them from scratch and customize them with just a touch of extra CSS.',
          images:[],
          comments:[
            {
              author:{
                name:'Planck Anders',
                foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
                tags:['music', 'mood', 'life'],
              },
              message:"I Like this :) ...."
            }
          ],
        },
        
        {
          at:"07/08/21 - 4h30 pm",
          liked:{
            state:true,
            nber:48,
          },
          author:{
            name:'Planck Anders',
            foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
            tags:['music' ,'mood', 'life'],
          },
          title:'Music of the word',
          description:'Here we will focus on a list that showcases only the best CSS image gallery you can try out. The examples below are beautifully well done and you can make them from scratch and customize them with just a touch of extra CSS.',
          images:[
                {
                    name:"wood",
                    ext:"jpeg",
                    src:"https://img.redbull.com/images/c_crop,w_6720,h_4480,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2018/07/17/4f3fb5c2-8f05-48a9-9720-f58d934752c2/music-collection"
                },
                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N3Ea_5oJLZJwGc2TnlHunDCa47jtUk3ayifnh1mbBJjiRw50y3Mhyoh2_nhyAi_gtXo&usqp=CAU"
                },

                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/199843347_3626754290882970_2052775688931473357_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OC5NynyT0SoAX87k3_X&_nc_ht=scontent-mxp1-1.xx&oh=edbab60d85a311e10e39194058518752&oe=614CEEBE"
                },

                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/188745684_3606226956269037_706493480536233708_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ycNftE4ZiwYAX8eo93O&_nc_ht=scontent-mxp1-1.xx&oh=16099645d0e87223bb0c03f3b11cc3b4&oe=614DD9FA"
                },

                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/169295261_1141099873004012_5304725154530815269_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=lA-XvuDSqo0AX-MT6zP&_nc_ht=scontent-mxp1-1.xx&oh=4bb652fb07e3f1a35c7a97b74ebdcd9f&oe=614CC89D"
                },

                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/105032386_949628295476736_4160763802849125046_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=84a396&_nc_ohc=DN5rpQP2uJMAX_gER6S&_nc_ht=scontent-mxp1-1.xx&oh=85db65af3b3628d9c2bac6b7e5e6e1df&oe=614E2EE8"
                },

                {
                    name:"wood-ios",
                    ext:"jpeg",
                    src:"https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/118443973_998903583882540_5102772794709008629_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=84a396&_nc_ohc=UE4I3hSwtEQAX-twyht&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=d9ac81100701d5e4da3af7585a65d9b5&oe=614F395D"
                },
          ],
          comments:[{
              author:{
              name:'Planck Anders',
              foto:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/69245733_725030284603206_5683149216247971840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2wstdYB3PNQAX89jAUm&tn=L8SKpZX-hIdGHkiX&_nc_ht=scontent-mxp1-1.xx&oh=9067fd6a9e1a4aa9a72add11944ddd40&oe=614F37FD',
              tags:['music','mood', 'life'],
            },
            message:"I Like this :) ...."
          }],
        },
      ]
    }
  }
}
</script>

<style>

</style>