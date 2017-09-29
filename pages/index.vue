<template lang="html">
  <div id="app">
    <v-app light>
     <main>
       <section1 id="home"></section1>
       <section2 id="experience-pro"></section2>
       <section3 id="formation"></section3>
       <section4 id="international"></section4>

       <v-footer class="foot grey darken-2">
         <!-- <v-layout row wrap align-center> -->
           <!-- <v-flex xs12> -->
             <div class="white--text ml-3">
               Made with
               <v-icon class="red--text">favorite</v-icon>
               by Fabien Malmasson
             </div>
           <!-- </v-flex> -->
         <!-- </v-layout> -->
       </v-footer>
     </main>
   </v-app>
  </div>

</template>

<script>
import section1 from './section1.vue'
import section2 from './section2.vue'
import section3 from './section3.vue'
import section4 from './section4.vue'

export default {
  components: {
    section1,
    section2,
    section3,
    section4
  },
  data: () => ({
    title: 'Fabien Malmasson'
  })
}
</script>

<style lang="css">
.subtitle{
  color: #1697f6;
}
.foot{
  display: flex;
  justify-content: center;
}
</style>
