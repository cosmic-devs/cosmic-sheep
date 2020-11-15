<template>
  <div>
    <!-- Modals -->
    <modal :anchor="'#contact'" @blur="(value) => { blur = value }">
      <contact-form/>
    </modal>
    <!-- End Modals -->
    <div v-blur="blur">
      <header class="p-3 text-right border-b border-gray-100 border-solid shadow">
        <div class="mx-auto max-w-2xl">
          <n-link to="/" class="mb-0 text-2xl text-blue-500 leading-none">
            cosmic sheep
          </n-link>
          <p class="-mt-1 text-sm text-blue-500 opacity-50">
            study group
          </p>
        </div>
      </header>
      <div class="mt-12 mx-auto px-3 max-w-2xl">
        <section class="pb-20 mb-32">
          <h2 class="mb-6 font-bold text-2xl text-center text-blue-600">Bem-vindos</h2>
            <p class="text-gray-700 text-center">Estamos em construção, <br>agradeço a compreensão e a visita <br>🐑🚧 </p>
<!--          <ul class="text-gray-700 text-center">-->
<!--            <li class="mb-2 hover:text-blue-400" v-for="post in posts" :key="post.id">-->
<!--              <n-link :to="`posts/${post.slug}`">-->
<!--                {{ formatDate(post.createdAt) }} - {{ post.title }}-->
<!--              </n-link>-->
<!--            </li>-->
<!--          </ul>-->
        </section>
        <section>
          <div class="text-center">
            <h2 class="font-bold text-gray-600 text-lg">
              Siga-nos até a próxima esfera:
            </h2>
            <p class="mb-3 font-bold text-center text-blue-600 text-xl">
<!--              <a target="_blank" rel="nofollow" href="https://discord.gg/Z4TPUEX">discord</a> ⩩-->
<!--              <a target="_blank" rel="nofollow" href="https://www.instagram.com/cosmicsheep.io">instagram</a> ⩩-->
              <span class="pointer-events-none">⩩</span> <a href="#contact">contato</a>
              <!-- Nosso e-mail: <a class="text-blue-800 hover:text-blue-700" href="mailto:contact@cosmicsheep.io">contact@cosmicsheep.io</a> -->
            </p>
          </div>
        </section>
        <footer>
          <p class="text-xs text-gray-600 text-center mt-8">
            <!-- somos ∴ arquivos ∴ livros ∴ campanhas -->
            A eternidade é feita de momento a momento
          </p>
          <picture>
            <source srcset="~assets/img/logo.webp" type="image/webp">
            <source srcset="~assets/img/logo.png" type="image/png">
            <img class="my-3 w-4 mx-auto" src="~assets/img/logo.png" alt="Logo Cosmic Sheep Michael Urantia">
          </picture>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import posts from '~/apollo/queries/posts'
  import Modal from '~/components/Modal'
  import ContactForm from '~/components/ContactForm'

  export default {
    transition: {
      name: 'slide-fade'
    },
    components: {ContactForm, Modal},
    apollo: {
      posts: {
        query: posts
      }
    },
    data() {
      return {
        blur: false
      }
    },
    head: {
      title: 'Cosmic Sheep | Home'
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString('ko-KR', {
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
</style>
