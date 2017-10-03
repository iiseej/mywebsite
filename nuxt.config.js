module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fabien Malmasson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'static/fonts/fonts.css' }

    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/style.css'
  ],
  modules: [
    '@nuxtjs/font-awesome',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#35495e' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
