<template lang="html">
  <v-toolbar fixed>
      <!-- <v-spacer></v-spacer> -->
    <div>
    <v-toolbar-title class="grey--text darken-2">F. Malmass<span class="title-end">ON</span></v-toolbar-title>
  </div>
  <v-btn icon class="grey--text darken-2"
    v-for="icon in icons"
    :href="icon.link"
    v-tooltip:bottom="{ html: icon.tooltip }"
    >
    <v-icon>{{ icon.name }}</v-icon>
  </v-btn>
  <v-spacer></v-spacer>
  <a href="../cv.pdf" target="_blank"> CV</a>
    <div class="item grey--text darken-2" v-for="(item, index) in items">
      <router-link :to="item.link">{{ item.title }}</router-link>
    </div>
    <router-link to="#home"><v-icon>home</v-icon></router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: 'navbar',
  data: () => ({
    title: 'Fab',
    items: [{
      title: 'EXPERIENCE PROFESSIONNELLE',
      link: '#experience-pro'
    },
    {
      title: 'FORMATION',
      link: '#formation'
    },
    {
      title: 'AVENTURES INTERNATIONALES',
      link: '#international'
    }
    ],
    icons: [{
      name: 'fa-github-square',
      link: 'https://github.com/iiseej',
      tooltip: 'profile Github'
    },
    {
      name: 'fa-linkedin',
      link: 'https://linkedin.com/in/fabien-malmasson-564b881b',
      tooltip: 'profile Linkedin'
    }
    ]
  })
}
</script>

<style scoped lang="css">

a{
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgb(110, 110, 110);
  text-decoration: none;
}
a:hover{
  color: black;
}
.item {
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
}
.toolbar__content .item :hover   {
color: black;
}
/*.application--light .toolbar {
    background-color: transparent;
    color: rgba(0,0,0,.87);
}*/
.menu_block{
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1)
}
.title-end{
font-weight: 700px;
color: black;
}
.toolbar__title {
  line-height: 80px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .20em;
    margin-left: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /*color: grey;*/
    padding-right: 30px;
}
.profile{
  width: auto;
  height: 64px;
}
.menu-icon{
  margin-right: 5px;
}
</style>
