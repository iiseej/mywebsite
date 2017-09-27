<template>
  <div>
      <div class="div1">
      </div>

      <div class="layer">
        <div class="title-dev">
          <h1>AVENTURES </h1></br>
          <h1>INTERNATIONALES</h1>
          <p class="subtitle">« Voyager, c’est grandir. C’est la grande aventure. Celle qui laisse des traces dans l’âme. »
Marc Thiercelin</p>
        </div>
      </div>

      <div class="div2">
        <v-card v-for="card in cards">
        <v-card-media :src="card.media" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h2 class="title">{{ card.headline}}</h2>
            <div class="resume">{{ card.resume }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
      </v-card>
      </div>

</div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
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
          resume: 'Pendant 6 mois, de sepetembre 2014 à mars 2015, je suis parti à la découverte de la vie à Mexico grâce à mes amis Aubin et Romain pendant près de 3 mois. J\'ai ensuite pris mon sac à dos  pour découvrir le reste du pays : grottes de Tolantongo, Puerto Escondido sur la côte Ouest, les pyaramides incroyables de Teotihuacan, Palenque, Chitzen Itza, la côte Est et la lagune de Bacalar, Playa del Carmen, Tulum...',
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
          resume: 'Après 1 an passé dans le froid de la Mongolie, j\'ai rejoint mes amis Sebastien et Julien à Brisbane, sur la côte Est de l\' Australie. Après 3 mois passé dans cette ville, me voilà parti pour un road trip qui m\'amena à longer toute la côte : des Whitesundays à Cairns, de Cairns à Melbourne, de Melbourne à la Tasmanie, de la Tasmanie à Sydney.',
          type: 'CDI',
          comp: 'Management',
          show: false
        },
        {
          media: 'mongolia.jpg',
          headline: 'Mongolie, Volontariat International',
          resume: 'En 2007, Tout juste diplômé, j\'ai eu une énorme envie de changement et j\'ai tout naturellement postulé à une annonce un peu spéciale, celle du Ministère des Affaires Etrangères qui cherchait un comptable pour l\'Ambassade de France dans un pays que je ne connaisais pas mais dont la capitale m\'était oralement sympathique : Oulan-Bator. Je suis donc resté un an, le temps de mon Volontariat International. J\'en ai profité pour visiter ce somptueux pays, ses paysages infinis dénouées de cables electriques, de routes, de tout...Un court road-trip m\'a amené à découvrir les steppes mongoles à cheval et le désert de Gobi à chameau. Cette expérience d\'un an m\'a, sans aucun doute, changé à jamais.',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false
        },
        {
          media: 'japan.jpg',
          headline: 'Japon, Voyage',
          resume: 'Il faisait encore - 40°C lorsque mes premières vacances à l\'Ambassade sont arrivées du coup je suis allé au Japon. Après tout, de la Mongolie, c\'est quand même un peu moins loin que de la France. Je suis parti 3 semaines visiter Tokyo et j\'ai absolument adoré. Au final, j\'y trouvais moins de différences qu\'en Mongolie(des voitures, pas de trous dans les routes, des escalators, un métro ...). C\'est à peu près tout concernant les ressemblances avec la France car le Japon c\'est quand même u n autre monde.j\'ai eu la chance de pouvoir y manger les meilleurs sushis de ma vie et passer un extraordinaire séjour.',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false
        },
        {
          media: 'thai.jpg',
          headline: 'Thaïlande, Voyages',
          resume: 'Je suis allé 2 fois en Thaïlande tellement j\'adore ce pays. En tout, j\'y suis resté plus d\'1 mois. J\'ai passé mon diplôme de plongée "PADI" à Koh Tao, je suis allé faire du scooter au nord, à Chiang Mai, de l\'escalade au sud à Tonzai, des soirées trop bruyantes à Bangkok...',
          comp: 'Management',
          show: false
        },
        {
          media: 'vietnam.jpg',
          headline: 'Vietnam, Voyages',
          resume: 'J\'ai découvert le Vietnam en prolongement d\'un séjour en Thaïlande. Avec des amis, nous avons découvert ce pays du sud au nord: Ho Chi Min, Nha Trang, Hanoi et la splendide Baie d\'Halong (une des plus belles choses que j\'ai pu voir).',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false
        },
        {
          media: 'hk.jpg',
          headline: 'Hong-Kong, Semestre académique',
          resume: 'Que dire de cette expérience démesurée ! C\'était la 1ere fois que je prenais l\'avion et j\'ai atterit direcetment dans une des villes les plus densément peuplée du monde.C\'était aussi la 1ere fois que j\'allais en Asie et en plus j\'y allais pour étudier à la Fac, le pied. Cette ville m\'a fasciné et j\'ai eu la chance de rencontrer des personnes formidables. Cette aventure reste à jamais gravée en moi.',
          type: 'Volontariat International en Administration',
          comp: 'Management',
          show: false
        },
        {
          media: 'london.jpg',
          headline: 'Angletterre, Stage',
          resume: 'Londres a été le décor de mon premier stage en Ecole de commerce dans un bureau situé en plein Oxford Circus. J\'y suis resté 3 mois pour un stage de comptabilité. J\'ai adoré l\'ambiance qui règne dans cette ville.',
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
  background-image: url(/static/map.jpg);
}
.div2{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  height: 3000px;
  width: 100%;
}
.card {
  height: 500px;
  width: 24%;
  margin: 2% 1% 0% 1%;
}
.subtitle{
  color: white;
  font-style: italic;
}
.resume{
  display: flex;
  align-items: center;
  height: 300px;
}

</style>
