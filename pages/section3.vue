<template lang="html">
  <div>
    <section>
      <v-parallax src="formation.jpg" height="380">
        <v-layout column align-center justify-center>
          <h1>Formation</h1>
          <!-- <em>A 30 ans, j’ai su quitter un poste confortable afin de trouver un métier dans lequel je pouvais m’éclater tant sur le plan intellectuel qu’humain.
Après une v1 dans les assurances, me voici en version 2: développeur et j’adore ça!</em> -->
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="../cv.pdf">
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
                <div class="headline">IMIE Nantes, Bac +2</div>
                <div class="headline">Développeur Logiciel</div>
              </v-card-title>
              <v-card-text>
                Titre de niveau 3 réalisé en 9 mois dont 3 mois de stage.
                <p>J'ai choisi cette formation car l'IMIE proposait des cours et un stage qui, de mon point de vue, allait être le tremplin idéal pour ma reconversion.
                  La formation a débuté par 6 mois de cours où j'ai appris les bases indispensables du développement.
                  J'ai travaillé sur les technologies suivantes : </br> <strong>HTML & CSS, PHP, SYMPHONY, MYSQL, JAVASCRIPT, NODEJS, JQUERY, MONGODB ...</strong></br></br>
                  J'ai ensuite intégré l'agence digitale Léo by Antares pour un <strong>stage de 3 mois</strong> en tant que développeur front-end.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Inseec Bordeaux, Bac +4</div>
                <div class="headline">Bachelor in Business Administration</div>
              </v-card-title>
              <v-card-text>
                Cursus international, 15 mois de stages en entreprise
                <p>Je suis extrêmement content d'avoir réalisé ce parcours à vocation internationale qui a grandement construit la personne que je suis devenue.
                Au delà de m'avoir apporté des connaissances techniques en Marketing, Finance et <strong>Management</strong>, l'Inseec m'a permis de m'ouvrir sur le monde, sur les personnes, et m'a fait rencontré des amis pour la vie.
               J'ai eu la chance d'aller étudier <strong>un semestre académique à Hong-Kong</strong>, un mois à la Fac en <strong>Espagne</strong>, de réaliser un stage à <strong>Londres</strong> et deux stages à Paris. </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</div>
</template>

<script>
export default {
  name: 'section2',
  data: () => ({
    skills:
    [
      {
        name: 'HTML'
      },
      {
        name: 'CSS'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'PHP'
      },
      {
        name: 'Versioning'
      },
      {
        name: 'DevTools'
      },
      {
        name: 'Command Line'
      }
    ]
  })
}
</script>

<style lang="css">
</style>
