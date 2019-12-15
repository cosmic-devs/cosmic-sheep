<template>
  <div v-if="post" class="container px-6 markdown">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
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
        title: (this.post ? `${this.post.title}` : 'Loading')
      }
    }
  }
</script>
