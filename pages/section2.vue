<template lang="html">
  <div>
    <section>
      <v-parallax src="work2.jpg" height="380">
        <v-layout column align-center justify-center>
          <h1 class="mb-2 display-3">Expérience professionnelle</h1>
          <!-- <em>A 30 ans, j’ai su quitter un poste confortable afin de trouver un métier dans lequel je pouvais m’éclater tant sur le plan intellectuel qu’humain.
Après une v1 dans les assurances, me voici en version 2: développeur et j’adore ça!</em> -->
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="../cv.pdf"
          >
            Télécharger mon CV
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Léo by antares</div>
              </v-card-title>
              <v-card-text>
                Configuration de l'environnement de travail sous Docker: Php-fpm, Redis, Postgres, Apache.</br>
              </br>Développement de fonctionnalités d'un logiciel Saas permettant l'optimisation de livraisons. Développement réalisé avec le framework Vue.js (similaire à  React et Angular)
                respectant la version EcmaScript 6 de JavaScript. Le code est ensuite compilé avec Babel afin de permettre la compatibilité avec l'ensemble des browsers.</br>
              </br>Front end : refonte de l'ensemble des formulaires de l'application pour passer du framework CSS Bootstrap à Element. Création de plusieurs composants ajoutant de nouvelles fonctionnalités avec notament un parser et mapping de fichier Excel ou Csv.
            </br></br>Back end: personnalisation de la fonction de réinitilisation de mot de passe de Laravel, modification de Models, de Controllers, de Requests. Manipulation de données en BDD sous Tinker.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Dans une autre vie...</div>
              </v-card-title>
              <!-- <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text> -->
              <v-list three-line>
                        <template v-for="job in jobs">
                          <!-- <v-subheader v-if="job.company" v-text="job.company"></v-subheader> -->
                          <!-- <v-divider v-else-if="job.divider" v-bind:inset="job.inset"></v-divider> -->
                          <v-list-tile>
                            <!-- <v-list-tile-avatar>
                              <img v-bind:src="job.avatar">
                            </v-list-tile-avatar> -->
                            <v-list-tile-content v-if="job.show" @click="job.show = !job.show">
                              <v-list-tile-title v-html="job.headline"></v-list-tile-title>
                              <v-list-tile-sub-title>{{ job.company }}</v-list-tile-sub-title>
                              <v-list-tile-sub-title class="skills">Compétences : {{ skillsList(job) }}</v-list-tile-sub-title>
                              <!-- <span v-for="(skill, index) in jobs[index].skills"class="skill"><strong>{{ skill | capitalize }}</strong></span> -->
                            </v-list-tile-content>
                            <v-list-tile-content v-else @click="job.show = !job.show" @mouseleave="job.show = !job.show">
                              <v-list-tile-title v-html="job.headline"></v-list-tile-title>
                              <v-list-tile-sub-title v-html="job.resume"></v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                        </template>
                      </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</div>
</template>

<script>
// import _ from 'lodash'

export default {
  name: 'section2',
  data: () => ({
    jobs: [
      {
        company: 'BPA accelerator',
        src: 'bpa.jpg',
        headline: 'Consultant Startups',
        time: 'mai 2015 à septembre 2015',
        type: 'CDI',
        comp: 'Business Plan',
        show: true,
        resume: 'Après leur rencontre, nous faisions pour le compte de jeunes startups ayant déjà fait une levée de fonds, leurs Business Plan et Plan de financement afin de les aider dans l\'obtention de subventions publiques et/ou privées permettant le financement de leur projet innovant.',
        skills: ['Ecoute', 'Analyse', 'esprit de synthèse']
      },
      {
        company: 'MACIF',
        src: 'macif.gif',
        headline: 'Directeur d\'agence',
        time: 'avril 2011 à décembre 2013',
        type: 'CDI',
        comp: 'Management',
        show: true,
        resume: 'Manager d\'une agence de 6 conseillers commerciaux, ma mission était d\'organiser et planifier l\'activité, former les collaborateurs, et commercialiser les produits du groupe Macif.',
        skills: ['Management', 'Sens de la diplomatie', 'pédagogie']
      },
      {
        company: 'MACIF',
        src: 'macif.gif',
        headline: 'Cadre technique',
        time: 'septembre 2010 à avril 2011',
        type: 'CDI',
        comp: 'Management',
        show: true,
        resume: 'Sur un call-center de 80 personnes, je m\'occupais de la régulation des flux téléphoniques, aide aux téléconseillers pour les dossiers techniques ou demandant des dérogations.',
        skills: ['Analyse de risque', 'rapidité de réflexion', 'connaisance de l\'assurance']
      },
      {
        company: 'MACIF',
        src: 'macif.gif',
        headline: 'Téléconseiller',
        time: 'mai 2009 à septembre 2010',
        type: 'CDI',
        comp: 'Management',
        show: true,
        resume: 'Commercialisation par téléphone des produits du groupe Macif après une formation interne au monde de l\'assurance',
        skills: ['Ecoute', 'compréhension du besoin', 'communication orale', 'tenacité']
      },
      {
        company: 'Ambassade de France en Mongolie',
        src: 'macif.gif',
        headline: 'Attaché comptable',
        time: 'août 2007 à août 2008',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: true,
        resume: 'Attaché comptable de l\'Ambassade de France de la Mongolie, j\'étais en charge de la réalisation des budgets et de la comptabilité.',
        skills: ['forte adaptibilité', 'autonomie', 'ouverture d\'esprit']
      }
    ]
  }),
  methods: {
    skillsList (job) {
      return job.skills.join(' - ')
    }
  }
}
</script>

<style lang="css">

</style>
