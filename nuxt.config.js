const { createApolloFetch } = require('apollo-fetch')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api-useast.graphcms.com/v1/ck472jwp102hi01bq2mniai9u/master'
      }
    },
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  },
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: function () {
      const staticRoutes = [
      // static routes
      ];

      const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/ck472jwp102hi01bq2mniai9u/master';
      const apolloFetch = createApolloFetch({ uri: GRAPHCMS_API })
      const query = `
      {
        posts {
          slug
        }
      }
      `;

      return apolloFetch({ query }) // all apolloFetch arguments are optional
        .then(result => {

          const { data } = result
          // const postRoutes = data.posts.map(post => `/post/${post.slug}?id=${post.id}`);
          const postRoutes = data.posts.map(post => `/post/${post.slug}`);
          // const tagRoutes =   data.tags.map(tag => `/tags/${tag.name}`);

          // return staticRoutes.concat([...postRoutes, ...tagRoutes]);
          return staticRoutes.concat([...postRoutes]);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
