<template>
  <v-app light>
    <navBar></navBar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <!-- <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  import navBar from './../components/navBar'
  export default {
    components: { navBar },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { to: '/', title: 'Welcome', icon: 'apps' },
          { to: '/inspire', title: 'Inspire', icon: 'bubble_chart' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
