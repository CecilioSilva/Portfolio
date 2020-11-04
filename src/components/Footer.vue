<template>
  <v-footer
    dark
    padless
    
    class="elevation-5"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="secondary">
        <strong class="subheading textColor--text hidden-sm-and-down" id="normal_text">Get connected with Me on social networks!</strong>
        <strong class="subheading textColor--text hidden-md-and-up" id="normal_text">Socials: </strong>
        <v-spacer></v-spacer>
        <div v-for="icon in icons" :key="icon.icon">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          class="mx-3"
          dark
          icon
          @click="openLink(icon.link)"
          :aria-label="icon.name"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon size="24px" color="textColor">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
        
        </template>
        <span>{{icon.tooltip}}</span>
        </v-tooltip>
        </div>
        
      </v-card-title>
      
      <v-card-text class="py-2 success--text text-center"  >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span id="normal_text" v-bind="attrs" v-on="on" style="cursor: pointer" @click="easterEgg()">{{ new Date().getFullYear() }} @ Cecilio Silva Monteiro</span> 
           </template>
              <span>😏</span>
            </v-tooltip>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
    data: () => ({
      icons: [
        {icon: 'mdi-whatsapp', link: 'https://wa.link/khilaz',name:'Whatsapp',tooltip:'Message Me'},
        {icon: 'mdi-gmail', link:'mailto:cjsilvamon@gmail.com?subject=Contact&body=Hello%20Cecilio%20Silva%20Monteiro%2C%0A%0A%0A%0AKind%20regards%2C%0A',name:'Mail',tooltip:'Mail Me'},
        {icon: 'mdi-linkedin', link:'https://www.linkedin.com/in/cecilio-silva-monteiro-24b3b719b/',name:'Linkedin',tooltip:'My Linkedin page'},
        {icon: 'mdi-github',link:'https://github.com/CecilioSilva',name:'Github',tooltip:'My Github page'}
      ],
    }),
  methods:{
    easterEgg: function () {		
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");		
    },
    openLink: function(link){
        window.open(link,"_blank");
        console.log(link)
    }
	}
};

</script>
