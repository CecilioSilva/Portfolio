<template>
    <nav class="primary">
       <v-toolbar app>
           
           <v-toolbar-title x-large class="accent--text font-weight-bold headline" >
              <span id="title" style="cursor: pointer" @click="openLink2('/')">CJ Silva Monteiro.</span> 
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <div class="hidden-sm-and-down" >
               <v-tooltip bottom >
                    <template  v-slot:activator="{ on, attrs }">
                        <v-btn depressed class="error--text mr-2" aria-label="Home" v-bind="attrs" v-on="on" router :to="'/'"><span id="normal_text">home</span></v-btn>
                    </template>
                    <span>The Homepage</span>
                </v-tooltip>
                
                <v-tooltip bottom >
                    <template  v-slot:activator="{ on, attrs }">
                        <v-btn depressed class="error--text mr-2" v-bind="attrs" v-on="on" aria-label="About me" router :to="'/about'"><span id="normal_text">About Me</span></v-btn>
                    </template>
                    <span>The About-me page</span>
                </v-tooltip>


                <v-menu depressed class="error--text  mr-2" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" depressed class="mr-2" aria-label="Projects"><span class="error--text" id="normal_text">Projects</span></v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="plink in pLinks" :key="plink.text" link router :to="plink.route">
                            <v-list-item-title id="normal_text" class="error--text">> <span class="textColor--text">{{plink.text}}</span> </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-tooltip bottom >
                    <template  v-slot:activator="{ on, attrs }">
                        <v-btn color="secondary" v-bind="attrs" v-on="on" class="error--text x-large" aria-label="Contact" @click="openLink('mailto:cjsilvamon@gmail.com?subject=Contact&body=Hello%20Cecilio%20Silva%20Monteiro%2C%0A%0A%0A%0AKind%20regards%2C%0A')">
                    <span id="normal_text">Contact</span>
                    <v-icon right>mdi-email-open-outline</v-icon>
                </v-btn>
                </template>
                    <span>Contact Me</span>
                </v-tooltip>

           </div>
           <v-app-bar-nav-icon x-large @click="drawer = !drawer" aria-label="Menu" class="hidden-md-and-up"></v-app-bar-nav-icon>
           
       </v-toolbar>
       <v-spacer></v-spacer>
        <v-navigation-drawer v-model="drawer" app temporary class="primary hidden-md-and-up" id="normal_text">
           <v-list-item class="accent--text elevation-2" id="normal_text" > <span class="accent--text text-center" id="normal_text">> Menu</span> </v-list-item>

           <v-list nav class="secondary">
               <v-list-item-group v-model="group">
                  
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="error-text">
                        <v-icon class="mr-2 error--text" >{{link.icon}}</v-icon>
                        <v-list-item-title id="normal_text" class="error-text">> {{link.text}}</v-list-item-title>
                        
                    </v-list-item>
                    <v-list-item @click="openLink('mailto:cjsilvamon@gmail.com?subject=Contact&body=Hello%20Cecilio%20Silva%20Monteiro%2C%0A%0A%0A%0AKind%20regards%2C%0A')" class="error-text">
                        <v-icon class="mr-2 error--text" >mdi-email-open-outline</v-icon>
                        <v-list-item-title id="normal_text" class="error-text">> Contact</v-list-item-title>
                        
                    </v-list-item>
               </v-list-item-group>

           </v-list>
         
           <v-list-item class="accent--text elevation-2" id="normal_text"> <span class="accent--text text-center" id="normal_text">> Projects</span> </v-list-item>
           
           <v-list class="secondary">
               <v-list-item-group v-model="group">
                  
                    <v-list-item v-for="plink in pLinks" :key="plink.text" router :to="plink.route" class="error-text">
                        <v-icon class="mr-2 error--text" >{{plink.icon}}</v-icon>
                        <v-list-item-title id="normal_text" class="error-text">> {{plink.text}}</v-list-item-title>
                        
                    </v-list-item>
               </v-list-item-group>
           </v-list>
           
           <v-divider></v-divider>
           <v-spacer></v-spacer>
           <div>
            <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                class="mx-3 align-content-center pt-4 pl-5"
                icon
                @click="openLink(icon.link)"
                :aria-label="icon.name"
                >
                <v-icon size="30px" color="info">
                    {{ icon.icon }}
                </v-icon>
            </v-btn>  
           </div>
         
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
export default {
    data() {
        return{
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Home', route: '/'},
                {icon: 'mdi-account-circle-outline', text: 'About Me', route: '/about'},

            ],
            pLinks: [
                {icon: 'mdi-language-html5', text: 'First Website', route: '/firstwebsite'},
                {icon: 'mdi-unity', text: 'My first game', route: '/risingofthefireboi'},
                {icon: 'mdi-microsoft-access', text: 'Database', route: '/database'},
                {icon: 'mdi-video-3d', text: 'My Room In 3d', route: '/room'},
                {icon: 'mdi-language-python', text: 'Procedural generation', route: '/proceduralgen'},
                {icon: 'mdi-language-python', text: 'Maze Generation', route: '/mazegen'},
                {icon: 'mdi-language-python', text: 'Conways Game Of life', route: '/conway'},
                {icon: 'mdi-vuetify', text: 'Current Portfolio', route: '/portfolio'},
            ],
            icons: [
                { icon: 'mdi-whatsapp', link: 'https://wa.link/khilaz',name:'Whatsapp'},
                {icon: 'mdi-gmail', link:'mailto:cjsilvamon@gmail.com?subject=Contact&body=Hello%20Cecilio%20Silva%20Monteiro%2C%0A%0A%0A%0AKind%20regards%2C%0A',name:'Mail'},
                {icon: 'mdi-linkedin', link:'https://www.linkedin.com/in/cecilio-silva-monteiro-24b3b719b/',name:'Linkedin'},
                {icon: 'mdi-github',link:'https://github.com/CecilioSilva',name:'Github'}
            ],
        }
    },
    methods:{
    openLink: function(link){
        window.open(link,"_blank");
        console.log(link)
    },
    openLink2: function(link){
        window.open(link,"_self");
        console.log(link)
    }
	}
}
</script>

<style>
    #title{
        font-family: 'Fira Mono', monospace;
        font-weight: 400;
    }
</style>
