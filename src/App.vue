<template>
  <div class="app">
      <v-app>
        <Navbar /> 
        <v-content class="secondary textColor--text">    
            <router-view></router-view>
        </v-content>
        <Footer/>
      </v-app>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  darkTheme: true,

};
</script>

