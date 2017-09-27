<template>
  <v-layout column justify-center align-center>
    <div class="div1">
    <video class="video" preload="preload" src="dark.mov" autoplay="autoplay" loop="loop">
    </video>
    <div id="videoMessage">
    </p>
    </div>
    </div>

      <div class="layer">
        <div class="intro">

        </div>
        <div class="title-dev">
          <h1>DEVELOPPEUR </h1></br>
          <h1>Front end</h1>
        </div>
      </div>

<!-- <div class="sections"> -->
      <div class="div2">
        <div class="title">
          Bonjour et bienvenue
        </div>
        <div class="content">
          Disponible
        </div>
      </div>
      <div class="div3">
        <div class="title">
          Développeur front-end
        </div>
        <div class="content ">
          Pour vous, je peux développer un site ou une application web en utilisant les compétences suivantes :
           <div class="skills">
            <div class="skill" >
              <span class="skill"><strong>{{ skillModel }}</strong></span>
            </div>
           </div>
        </div>
      </div>

  </v-layout>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    skillModel: null,
    skills: [
      { name: 'HTML & CSS' },
      { name: 'Javascript' },
      { name: 'JQuery' },
      { name: 'Vue.js (React or Angular)' },
      { name: 'Bootstrap ou tout framework Vuejs (Elementio, Vuetify, Quasar)' },
      { name: 'Responsive design' },
      { name: 'expérience RESTFul API' },
      { name: 'Git' }
    ]
  }),
  methods: {
    setSkill () {
      let counter = 0
      setInterval(() => {
        this.skillModel = this.skills[counter].name
        counter++
        if (counter >= this.skills.length) {
          counter = 0
        }
        console.log(counter)
      }, 2000)
    }
  },
  created () {
    this.setSkill()
  }
}
</script>

<style scoped lang="css">

.skill{
color: #41b883;
}
</style>
