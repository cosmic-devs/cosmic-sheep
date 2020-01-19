<template>
  <div id="index">
    <header class="h-screen">
      <!-- particles.js container -->
      <Particles class="absolute"/>
      <!-- particles.js lib - https://github.com/VincentGarreau/particles.js -->
      <div class="container relative flex flex-col md:flex-row-reverse md:flex-wrap items-center justify-around h-full">
        <div class="flex items-center justify-center md:flex-1">
          <div>
            <h1 class="relative pb-6 text-4xl md:text-6xl text-center text-blue-200">
              Cosmic Sheep<span class="text-3xl md:text-5xl text-blue-400"> .io</span>
            </h1>
            <p class="tracking-wider text-center text-blue-400 text-lg md:text-2xl">
              "A eternidade é feita de momento a momento..."
            </p>

            <!--to later
            <p class="py-6 text-xl tracking-wider text-center text-blue-600">
                Vivência e valores
            </p>
            <img class="w-40 mx-auto" src="img/head-camp-img.svg" alt="Camping image">
            -->
          </div>
        </div>
        <div class="w-auto max-w-sm p-6 mx-auto bg-blue-100 rounded-lg shadow-2xl">
          <h2 class="mb-2 text-3xl text-blue-600">Blog</h2>
          <ul class="font-semibold text-blue-700">
            <li class="hover:text-blue-400" v-for="post in posts" :key="post.id">
              <NuxtLink :to="`posts/${post.slug}`">
                {{ formatDate(post.createdAt) }} - {{ post.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="pb-10">
      <div class="pt-10">
        <h2 class="mb-2 text-3xl text-center">
          Em breve...
        </h2>
        <p class="mb-3 text-center">
          Nosso e-mail: <a class="text-blue-800 hover:text-blue-700" href="mailto:contact@cosmicsheep.io">contact@cosmicsheep.io</a>
        </p>
        <picture>
          <source srcset="~assets/img/logo.webp" type="image/webp">
          <source srcset="~assets/img/logo.png" type="image/png">
          <img class="w-4 mx-auto" src="~assets/img/logo.png" alt="Logo Cosmic Sheep Michael Urantia">
        </picture>
      </div>
    </section>
  </div>
</template>

<script>
  import posts from '~/apollo/queries/posts'
  import Particles from '~/components/Particles'

  export default {
    transition: {
      name: 'slide-fade'
    },
    components: {Particles},
    apollo: {
      posts: {
        prefetch: true,
        query: posts
      }
    },
    head: {
      title: 'Cosmic Sheep | Home'
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString(undefined, {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit'
        })
      }
    }
  }
</script>

<style>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform .4s, opacity .4s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }

  #index header {
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 60%, rgba(0, 148, 179, 1) 100%);
  }
</style>
