<template>
  <div v-if="post" class="container markdown">
    <div class="mb-10" v-html="$md.render(post.body)"></div>
    <p>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
  import post from '~/apollo/queries/post'

  export default {
    apollo: {
      post: {
        query: post,
        prefetch: ({route}) => ({id: route.params.id}),
        variables() {
          return {id: this.$route.params.id}
        }
      }
    },
    methods: {},
    head() {
      return {
        title: (this.post ? `Cosmic Sheep | ${this.post.title}` : 'Loading...')
      }
    }
  }
</script>
