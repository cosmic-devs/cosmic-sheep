<template>
  <div>
    <header class="h-screen">
      <!-- particles.js container -->
      <Particles class="absolute" />
      <!-- particles.js lib - https://github.com/VincentGarreau/particles.js -->
      <div class="container flex flex-row-reverse flex-wrap items-center h-full relative">
        <div class="flex flex-1 items-center justify-center">
          <div>
            <h1 class="text-center text-blue-200 text-4xl relative pb-6">
              Cosmic Sheep<span class="text-3xl text-blue-400"> .io</span>
            </h1>
            <p class="text-center tracking-wider text-blue-400">
              "A eternidade é feita de momento a momento..."
            </p>

            <!--to later
            <p class="text-center text-xl py-6 tracking-wider text-blue-600">
                Vivência e valores
            </p>
            <img class="w-40 mx-auto" src="img/head-camp-img.svg" alt="Camping image">
            -->
          </div>
        </div>
        <div class="mx-auto rounded-full bg-blue-100 w-auto p-10 shadow-2xl">
          <h2 class="text-2xl font-bold mb-2">Blog</h2>
          <ul class="text-blue-700 font-semibold">
            <li class="hover:text-blue-400" v-for="post in posts" :key="post.id">
              <NuxtLink :to="`post/${post.slug}`">
                {{ formatDate(post.createdAt) }} - {{ post.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="pb-10">
      <div class="pt-10">
        <h2 class="text-center text-3xl text-blue-500 mb-2">
          Em breve...
        </h2>
        <p class="text-center mb-3">
          Nosso e-mail: <a class="text-blue-800 hover:text-blue-700" href="mailto:contact@cosmicsheep.io">contact@cosmicsheep.io</a>
        </p>
        <img class="w-4 mx-auto" src="~assets/img/logo.png" alt="Logo Cosmic Sheep Michael">
      </div>
    </section>
  </div>
</template>

<script>
  import posts from '~/apollo/queries/posts'
  import Particles from '~/components/Particles'

  export default {
    transition: 'default',
    components: {Particles},
    comments: {
      particles
    },
    apollo: {
      posts: {
        prefetch: true,
        query: posts
      }
    },
    head: {
      title: 'Cosmic Sheep | Posts'
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
  /* Transitions using the page hook */
  .page-enter-active {
    transition: all 0.10s ease-out;
  }

  .page-leave-active {
    transition: all 0.10s ease-in;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  /* Additional vertical padding used by kbd tag. */
  .py-05 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }

  .markdown {
    @apply text-gray-900 leading-normal break-words;
  }

  .markdown > * + * {
    @apply mt-0 mb-4;
  }

  .markdown li + li {
    @apply mt-1;
  }

  .markdown li > p + p {
    @apply mt-6;
  }

  .markdown strong {
    @apply font-semibold;
  }

  .markdown a {
    @apply text-blue-700 font-semibold;
  }

  .markdown strong a {
    @apply font-bold;
  }

  .markdown h1 {
    @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
  }

  .markdown h2 {
    @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
  }

  .markdown h3 {
    @apply leading-snug text-lg font-semibold mb-4 mt-6;
  }

  .markdown h4 {
    @apply leading-none text-base font-semibold mb-4 mt-6;
  }

  .markdown h5 {
    @apply leading-tight text-sm font-semibold mb-4 mt-6;
  }

  .markdown h6 {
    @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
  }

  .markdown blockquote {
    @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
  }

  .markdown code {
    @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-05;
  }

  .markdown pre {
    @apply bg-gray-100 rounded p-4;
  }

  .markdown pre code {
    @apply block bg-transparent p-0 overflow-visible rounded-none;
  }

  .markdown ul {
    @apply text-base pl-8 list-disc;
  }

  .markdown ol {
    @apply text-base pl-8 list-decimal;
  }

  .markdown kbd {
    @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
  }

  .markdown table {
    @apply text-base border-gray-600;
  }

  .markdown th {
    @apply border py-1 px-3;
  }

  .markdown td {
    @apply border py-1 px-3;
  }

  /* Override pygments style background color. */
  .markdown .highlight pre {
    @apply bg-gray-100 !important;
  }
</style>
