<template>
  <div class="text-center">
    <v-layout row wrap justify-space-around >
      <v-flex xs10 md12>
        <h1 id="normal_text" class="info--text mt-12">>About me</h1>
      </v-flex>
    <v-flex xs10 md6>
      <div id="normal_text" class="text-left">
        <p>
            <span class="accent--text font-weight-bold">Hello</span> , I am Cecilio Silva Monteiro. I am {{ new Date().getFullYear() - 2002 }} years old. I live in Capelle Aan Den IJssel. I go to the Techniek College Rotterdam where i follow the course application and media Development. My hobbies are Gaming, programming, making things and watching videos. My future goals are getting better at programing and get a job in game or app development.
        </p>
        </div>
        <v-divider></v-divider>
       
        <v-layout row wrap justify-space-around>
           <v-flex xs10 md12>
            <h1 id="normal_text" class="info--text mt-12 pb-4">>Skills</h1>
          </v-flex>
          <v-flex xs3 md1 v-for="icon in skills" :key="icon.icon">
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon size="40px" class="pb-2" color="error" v-bind="attrs" v-on="on" >{{icon.icon}}</v-icon>
                </template>
              <span class="">{{icon.tooltip}}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
         <v-divider></v-divider>
         
    </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around >
    <v-flex xs10 md12>
        <h1 id="normal_text" class="info--text mt-12">>Hobbies</h1>
      </v-flex>
    <v-flex xs10 md6>
      <div id="normal_text" class="text-left">
        <p>
            <span class="accent--text font-weight-bold">I</span> Have alot of hobbies, like: 3d printing, game development, prop making, watching movies and tv-shows.
            i spend most of my days working on random projects that i most of the time don't finish 😆.
        </p>
        </div>
        <v-divider></v-divider>
    </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
      data() {
        return{
            skills: [
                {icon:'mdi-git', tooltip:'Git'},
                {icon:'mdi-github', tooltip:'GitHub'},
                {icon:'mdi-language-html5', tooltip:'Html'},
                {icon:'mdi-language-css3', tooltip:'CSS3'},
                {icon:'mdi-language-python', tooltip:'Python'},
                {icon:'mdi-language-javascript', tooltip:'Javascript'},
                {icon:'mdi-vuetify', tooltip:'Vuetify'},
                {icon:'mdi-vuejs', tooltip:'Vue.Js'},
                {icon:'mdi-wordpress', tooltip:'Wordpress'},
            ],
        }
    }
}
</script>

