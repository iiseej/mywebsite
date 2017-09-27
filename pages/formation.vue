<template>
  <v-layout column justify-center align-center>
      <div class="div1">
      </div>

      <div class="layer">
        <div class="title-dev">
          <h1>FORMATION </h1></br>
        </div>
      </div>

      <div class="div2">
        <div class="title">
          IMIE Nantes, formation Développeur Logiciel, Bac +2
        </div>
        <div class="content">
          <p>J'ai choisi cette formation car l'IMIE proposait des cours et un stage qui, de mon point de vue, allait être le tremplin idéal pour ma reconversion.
            La formation a débuté par 6 mois de cours où j'ai appris les bases indispensables du développement.
            J'ai travaillé sur les technologies suivantes : </br> <strong>HTML & CSS, PHP, SYMPHONY, MYSQL, JAVASCRIPT, NODEJS, JQUERY, MONGODB ...</strong></br></br>
            J'ai ensuite intégrée l'agence digitale Léo by Antares pour un <strong>stage de 3 mois</strong> en tant que développeur front-end.
          </p>
        </div>
      </div>
      <div class="div3">
        <div class="title">
          INSEEC Bordeaux, BACHELOR IN BUSINESS ADMINISTRATION, Bac +4
        </div>
        <div class="content">
          <p>Je suis extrêmement content d'avoir réalisé ce parcours à vocation internationale qui a grandement construit la personne que je suis devenue.
          Au delà de m'avoir apporté des connaissances techniques en Marketing, Finance et <strong>Management</strong>, l'Inseec m'a permis de m'ouvrir sur le monde, sur les personnes et m'a fait rencontré des amis pour la vie.
         J'ai eu la chance d'aller étudier <strong>un semestre académique à Hong-Kong</strong>, un mois à la Fac en <strong>Espagne</strong> et de réaliser un stage à <strong>Londres</strong> et deux stages à Paris. </p>

        </div>
      </div>


  </v-layout>

</template>

<script>
  export default {
    data: () => ({
      show: false,
      cards: [
        {
          company: 'Antares',
          src: 'antares.png',
          headline: 'Developpeur Web',
          time: 'juin 2017 à Septembre 2017',
          type: 'stage',
          comp: 'Vuejs',
          show: false
        },
        {
          company: 'BPA accelerator',
          src: 'bpa.jpg',
          headline: 'Consultant Startups',
          time: 'mai 2015 à septembre 2015',
          type: 'CDI',
          comp: 'Business Plan',
          show: false
        },
        {
          company: 'MACIF',
          src: 'macif.gif',
          headline: 'Directeur d\'agence',
          time: 'avril 2011 à décembre 2013',
          type: 'CDI',
          comp: 'Management',
          show: false
        },
        {
          company: 'MACIF',
          src: 'macif.gif',
          headline: 'Cadre technique',
          time: 'septembre 2010 à avril 2011',
          type: 'CDI',
          comp: 'Management',
          show: false
        },
        {
          company: 'MACIF',
          src: 'macif.gif',
          headline: 'Téléconseiller',
          time: 'mai 2009 à septembre 2010',
          type: 'CDI',
          comp: 'Management',
          show: false
        },
        {
          company: 'Ambassade de France en Mongolie',
          src: 'macif.gif',
          headline: 'Attaché comptable',
          time: 'août 2007 à août 2008',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false
        }
      ]
    })
  }
</script>

<style scoped lang="css">
.div1{
  background-size: cover;
  background-position: center;
  background-image: url(/static/formation.jpg);
}
</style>
