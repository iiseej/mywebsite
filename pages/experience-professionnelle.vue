<template>
  <v-layout column justify-center align-center>
      <div class="div1">
      </div>

      <div class="layer">
        <div class="title-dev">
          <h1>EXPERIENCE </h1></br>
          <h1>PROFESSIONNELLE</h1>
        </div>
      </div>

      <div class="div2">
        <div class="title">
          LEO ANTARES, Nantes, Développeur Front-End
        </div>
        <div class="content">
          <p>Développement d'un logiciel SAAS qui rend service aux logisticiens des entreprises en permettant d’optimiser et retracer
            toutes les phases de la chaîne logistique.
          J'ai travaillé avec le framework <strong>Vue.js</strong> (comparable à React ou Angular).</br>Missions:</br>
        <li v-for="mission in missions"> {{ mission }} </li></br>
      Technologies et outils utilisés : <strong>VUE.js, LARAVEL, POSTGRESQL, DOCKER, AWS, GIT, BITBUCKET...</strong> </p>

        </div>
      </div>
      <div class="div3">
        <div class="title">
          Mes dernières expériences professionnelles
        </div>
        <div class="content-jobs">
          <v-card v-for="(job, index) in jobs" class="card-job">
        <!-- <v-card-media :src="job.src" height="200px">
        </v-card-media> -->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ job.headline }}</h3><h2 class="job-title">{{ job.company }}</h2>
            <div class="job-resume">{{ job.resume }}</div>
          </div>
        </v-card-title>

        <div class="skills">
          <h2 class="job-title">Compétences</h2>
          <div class="skills-li">
          <span v-for="(skill, index) in jobs[index].skills"class="skill"><strong>{{ skill | capitalize }}</strong></span>
          </div>
        </div>
      </v-card>

        </div>
      </div>

  </v-layout>

</template>

<script>
  export default {
    data: () => ({
      show: false,
      missions: [
        'Développer un composant de réinitilisation de mot de passe en personnalisant celui proposé par Laravel.',
        'Refait l\'ensemble des formulaires en migrant de Bootstrap à Element.io ',
        'Créer des règles personnalisées de validation de formulaires',
        'Créer un outils de drag & drop afin que le client puisse glisser le fichier Excel de son choix et le convertir en un JSON exploitable par notre API'
      ],
      jobs: [
        {
          company: 'BPA accelerator',
          src: 'bpa.jpg',
          headline: 'Consultant Startups',
          time: 'mai 2015 à septembre 2015',
          type: 'CDI',
          comp: 'Business Plan',
          show: false,
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
          show: false,
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
          show: false,
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
          show: false,
          resume: 'Commercialisation par téléphone des produits du groupe Macif après une formation interne au monde de l\'assurance',
          skills: ['Ecoute', 'compréhension du besoin', 'communication orale', 'tenacité']
        },
        {
          company: 'Ambassade de France',
          src: 'macif.gif',
          headline: 'Attaché comptable',
          time: 'août 2007 à août 2008',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false,
          resume: 'Attaché comptable de l\'Ambassade de France de la Mongolie, j\'étais en charge de la réalisation des budgets et de la comptabilité.',
          skills: ['forte adaptibilité', 'autonomie', 'ouverture d\'esprit']
        }
      ]
    }),
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style scoped lang="css">
li{
  position: relative;
  display: block;
  padding: .4em .4em .4em 2em;
  *padding: .4em;
  margin: .5em 0;
  background: #ddd;
  color: #444;
  text-decoration: none;
  border-radius: .3em;
  transition: all .3s ease-out;
}
.div1{
  background-size: cover;
  background-position: center;
  background-image: url(/static/office2.jpg);

}
.content-jobs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-job{
  margin: 0 1% 1% 1%;
  width: 18%;
}
.job-title{
  font-size: 20px;
}
.content{
  text-align: justify;
}
.skill{
  margin-left: 0;
  color: #35495e;
}
.skills{
  margin-left: 5%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.skills-li{
  margin-left: 0%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.job-resume{
  text-align: justify;
  height:150px;
}
</style>
