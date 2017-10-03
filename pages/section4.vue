<template lang="html">
  <div>
    <section>
      <v-parallax src="aventures.jpg" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h2 class="white--text">Aventures Internationales</h2>
          <em class="white--text">« Voyager, c’est grandir. C’est la grande aventure. Celle qui laisse des traces dans l’âme. »
            Marc Thiercelin</em>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Cliquez sur les vignettes</h2>
            <span class="subheading">
              pour plus de détails
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="card in cards" xs12 md4>
                <v-card
                @mouseleave="card.show = false">
                  <v-card-media
                  @click.native="card.show = !card.show"
                    class="card-picture white--text"
                    height="200px"
                    :src="'../' + card.media">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="card-title">{{ card.headline }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text v-show="card.show">
                  {{ card.resume }}
                </v-card-text>
              </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
</div>
</template>

<script>
export default {
  name: 'section4',
  data: () => ({
    cards: [
      {
        media: 'phil.jpg',
        headline: 'Philippines, Bénévolat',
        resume: '1 mois de bénévolat en avril 2015 pour l\'ONG Off grid aid afin de construire des abris écologiques résistant aux typhons. J\'ai pu découvrir la technologie "EarthBag", utilisant le sol sous nos pieds, des sacs et des barbelés.',
        type: 'Bénévolat',
        comp: 'Vuejs',
        show: false
      },
      {
        media: 'mexico.jpg',
        headline: 'Mexique, Voyage',
        resume: 'Pendant 6 mois, de septembre 2014 à mars 2015, je suis parti à la découverte de la vie à Mexico grâce à mes amis Aubin et Romain pendant près de 3 mois. J\'ai ensuite pris mon sac à dos pour découvrir le reste du pays : grottes de Tolantongo, Puerto Escondido sur la côte ouest, les incroyables pyramides de Teotihuacan, Palenque, Chitzen Itza, la côte Est et la lagune de Bacalar, Playa del Carmen, Tulum…',
        type: 'CDI',
        comp: 'Business Plan',
        show: false
      },
      {
        media: 'costa.jpg',
        headline: 'Costa-Rica, Bénévolat',
        resume: 'Juste après avoir quitté la Macif, je suis parti tout le mois de janvier 2014 afin de prêter mains fortes en tant que bénévole à l\'association A.S.V.O. Je suis resté une semaine avec les rangers du parc Manuel Antonio puis je suis parti dans la péninsule de Nicoya afin d\'aider à la sauvergarde des tortues. ',
        type: 'CDI',
        comp: 'Management',
        show: false
      },
      {
        company: 'MACIF',
        media: 'australia.jpg',
        headline: 'Australie, Voyage',
        resume: 'Après 1 an passé dans le froid de la Mongolie, j\'ai rejoint mes amis Sebastien et Julien à Brisbane, sur la côte Est de l\' Australie. Après 3 mois passés dans cette ville, me voilà parti pour un road trip qui m\'amena à longer toute la côte : des Whitesundays à Cairns, de Cairns à Melbourne, de Melbourne à la Tasmanie, de la Tasmanie à Sydney.',
        type: 'CDI',
        comp: 'Management',
        show: false
      },
      {
        media: 'mongolia.jpg',
        headline: 'Mongolie, V.I.A',
        resume: 'En 2007, tout juste diplômé, j\'ai eu une énorme envie de changement et j\'ai tout naturellement postulé à une annonce un peu spéciale, celle du Ministère des Affaires étrangères qui cherchait un comptable pour l\'Ambassade de France dans un pays que je ne connaissais pas, mais dont la capitale m\'était oralement sympathique : Oulan-Bator. Je suis donc resté un an, le temps de mon Volontariat International. J\'en ai profité pour visiter ce somptueux pays, ses paysages infinis dénoués de câbles électriques, de routes, de tout...Un court road-trip m\'a amené à découvrir les steppes mongoles à cheval et le désert de Gobi à chameau. Cette expérience d\'un an m\'a, sans aucun doute, changé à jamais.',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: false
      },
      {
        media: 'japan.jpg',
        headline: 'Japon, Voyage',
        resume: 'Il faisait encore - 40°C lorsque mes premières vacances à l\'Ambassade sont arrivées du coup je suis allé au Japon. Après tout, de la Mongolie, c\'est quand même un peu moins loin que de la France. Je suis parti 3 semaines visiter Tokyo et j\'ai absolument adoré. Au final, j\'y trouvais moins de différences qu\'en Mongolie(des voitures, pas de trous dans les routes, des escalators, un métro ...). C\'est à peu près tout concernant les ressemblances avec la France, car le Japon c\'est quand même  un autre monde.j\'ai eu la chance de pouvoir y manger les meilleurs sushis de ma vie et passer un extraordinaire séjour.',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: false
      },
      {
        media: 'thai.jpg',
        headline: 'Thaïlande, Voyages',
        resume: 'Je suis allé 2 fois en Thaïlande tellement j\'adore ce pays. En tout, j\'y suis resté plus de 1 mois. J\'ai passé mon diplôme de plongée "PADI" à Koh Tao, je suis allé faire du scooter au nord, à Chiang Mai, de l\'escalade au sud à Tonzai, des soirées trop bruyantes à Bangkok…',
        comp: 'Management',
        show: false
      },
      {
        media: 'vietnam.jpg',
        headline: 'Vietnam, Voyages',
        resume: 'J\'ai découvert le Vietnam en prolongation d\'un séjour en Thaïlande. Avec des amis, nous avons découvert ce pays du sud au nord: Ho Chi Min, Nha Trang, Hanoi et la splendide baie d\'Halong (une des plus belles choses que j\'ai pu voir).',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: false
      },
      {
        media: 'hk.jpg',
        headline: 'Hong-Kong, université',
        resume: 'Que dire de cette expérience démesurée ! C\'était la 1ere fois que je prenais l\'avion et j\'ai atterri directement dans une des villes les plus densément peuplées du monde.C\'était aussi la 1ere fois que j\'allais en Asie et en plus j\'y allais pour étudier à la Fac, le pied. Cette ville m\'a fasciné et j\'ai eu la chance de rencontrer des personnes formidables. Cette aventure reste à jamais gravée en moi.',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: false
      },
      {
        media: 'london.jpg',
        headline: 'Angletterre, Stage',
        resume: 'Londres a été le décor de mon premier stage en École de commerce dans un bureau situé en plein Oxford Circus. J\'y suis resté 3 mois pour un stage de comptabilité. J\'ai adoré l\'ambiance qui règne dans cette ville.',
        type: 'Volontariat International en Administration',
        comp: 'Management',
        show: false
      }
    ]
  })
}
</script>

<style lang="css">


.card-picture{
  cursor: pointer;
}
.card-title{
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.44);
}
</style>
