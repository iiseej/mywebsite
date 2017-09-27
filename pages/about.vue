<template>
  <v-layout column justify-center align-center>
      <div class="div1">
      </div>

      <div class="layer">
        <div class="title-dev">
          <h1>UN PEU PLUS SUR MOI</h1></br>
        </div>
      </div>

      <div class="div2">
        <div class="title">

        </div>
        <div class="content">
          <p>Moi c'est Fabien, j'ai 33 ans et comme de nombreux trentenaires, à mes 30 ans, j'ai quitté un poste confortable de Directeur d'agence d'assurance car je ne m'épanouissais pas assez à mon goût.
            Je voulais trouver un métier dans lequel j'allais être intellectuellement challengé, où je devrais me remettre perpetuellement en question, un métier sans limites. Comme une évidence, je me suis lancé dans une carrière de Développeur et j'adore ça !.
            </p></br>
          <p></p>
        </div>
      </div>

  </v-layout>

</template>

<script>
  export default {
    data: () => ({
      show: false,
      missions: [
        'Développé un composant de réinitilisation de mot de passe en personnalisant totalement celui proposé par Laravel.',
        'Refait l\'ensemble des formulaires en migrant de Bootstrap à Element.io ',
        'Créer des règles personnalisées de validation des formulaires',
        'Créer un outils de drag & drop afin que le client puisse glisser le fichier Excel de son choix et le convertir en un JSON exploitable par notre API'
      ],
      likes: [
        'Résoudre des problèmes', 'être créatif'
      ]
    })
  }
</script>

<style scoped lang="css">
.div1{
  background-size: cover;
  background-position: center;
  background-image: url(/static/fabpray.jpg);

}
.content {
  text-align: justify;
}

</style>
