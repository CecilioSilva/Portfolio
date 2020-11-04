<template>
  <div class=" ma-10" >
    <h1 class="textColor--text" id="normal_text"><span class="info--text">Welcome to my portfolio website </span>(){</h1>
    <p class="px-10 pu-3" id="normal_text" style="font-size: 22px;"><span class="accent--text"> Where</span> I show the projects that I finished 
        and I am currently working on;</p> 
        <p class="px-10 pu-0 commentColor--text" id="normal_text" style="font-size: 22px;">// And I tell you something about Me and My hobbies</p>
    <h1 class="textColor--text pb-10" id="normal_text">};</h1>
    <h1 class="text-center info--text pa-5" id="normal_text">>Projects</h1>
    <v-layout row wrap justify-space-around >
      
      <v-flex xs12 md4 class="pa-2" v-for="pc in projectCards" :key='pc.title'>
        <a :href="pc.route">
        <v-img :src="pc.imglink" alt="Cover Image 🔃" class="rounded-t-lg"></v-img>
        </a>
        <div class="primary pa-4 rounded-b-lg elevation-10" id="normal_text">
          <p class="title"  id="normal_text"> <span class="info--text font-weight-bold" id="normal_text">{{pc.title}}</span> <span id="normal_text"> (){</span></p>
          <p id="text" class="pl-3"><span class="accent--text font-weight-bold">{{pc.first}}</span> {{pc.text}}</p>
          <p id="normal_text" class="title">};</p>
           <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn center class="secondary textColor--text"  v-bind="attrs" v-on="on" :aria-label="pc.title" id="normal_text" router :to="pc.route">{{pc.title}}</v-btn> 
            </template>
            <span class="">Read More: {{pc.title}}</span>
          </v-tooltip>
          
          <span v-for="icon in pc.icons" :key='icon' class="pa-3">
            <v-icon class="ml-2" size="30px" color="error" >{{icon}}</v-icon>
          </span>
          
          
        </div>
        
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  data() {
        return{
            projectCards: [
                {imglink: 'https://i.imgur.com/7uYocck.png', title: 'First Website',          first:'This',   text:'is my first website. that I made in the first week of software development. This was the first time I worked with Html and CSS.',                                   icons: ['mdi-language-html5','mdi-language-css3'],              route: '/firstwebsite'},
                {imglink: 'https://i.imgur.com/9fgPdpk.png', title: 'My First Game',          first:'This',   text:'is the first game I made. that started out as personal project but I finished as school project with a group of classmates. it was made in the Unity game engine.', icons: ['mdi-language-csharp','mdi-unity','mdi-account-group'], route: '/risingofthefireboi'},
                {imglink: 'https://i.imgur.com/GiTwPn7.png', title: 'Database',               first: 'This',  text: 'is a database I made in Microsoft Access. It has full CRUD Functionality. I made this in my database class',                                                       icons:['mdi-microsoft-access',] ,                               route: '/database'},
                {imglink: 'https://i.imgur.com/0TThu2B.png', title: 'My Room In 3d',          first: 'In',    text: '2019 I redesigned my room. To plan where everything would and what wall color I wanted. I created a 3d render of my room.',                                        icons:['mdi-video-3d','mdi-file-cad-box',] ,                    route: '/room'},
                {imglink: 'https://i.imgur.com/iPVAR89.png', title: 'Procedural generation',  first: 'I',     text: 'really love algorithms that generate random images. I this program makes random images with: Cellular Automata',                                                   icons:['mdi-language-python',] ,                                route: '/proceduralgen'},
                {imglink: 'https://i.imgur.com/fSDjcNT.png', title: 'Maze Generation',        first: 'I',     text: 'really like mazes, so I made a multiple program that would generate mazes based on different algorithms.',                                                         icons:['mdi-language-python','mdi-language-ruby',] ,            route: '/mazegen'},
                {imglink: 'https://i.imgur.com/7UOXVZJ.png', title: 'Conways Game Of life',   first: 'While', text: 'I watching youtube I found out about Conway\'s game of life. I tought it was really cool so I made my own version in python.',                                     icons:['mdi-language-python',] ,                                route: '/conway'},
                {imglink: 'https://i.imgur.com/D1XyvxI.png', title: 'Current Portfolio',      first: 'This',  text: 'I my current portfolio website. It is Entirely made by me in Vuetify',                                                                                             icons:['mdi-vuetify','mdi-language-javascript','mdi-vuejs',] ,  route: '/portfolio'},
                
                //{imglink: '', title: '',first:'',text:'',icons: ['',''], route: ''},

            ],
        }
    }
}

</script>

