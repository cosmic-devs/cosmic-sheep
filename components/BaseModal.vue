<template>
  <transition name="fade" @before-enter="beforeEnter" @after-enter="state.showContent = true"
              @after-leave="afterLeave"
  >
    <div v-on-escape="escapeHandler" v-focus-trap v-if="state.show"
         class="fixed inset-0 z-50 flex min-w-full min-h-full p-5 focus:outline-none"
    >
      <div class="absolute inset-0 w-full h-full c-bg-backdrop" @click.self="$emit('close')"></div>
      <transition name="scale" @before-leave="state.show = false" @after-enter="afterChildEnter">
        <div v-show="state.showContent"
             class="z-10 flex flex-col w-full max-w-lg max-h-full mx-auto my-auto bg-white rounded-lg shadow-md"
        >
          <div class="flex-initial">
            <slot name="header"></slot>
          </div>
          <div class="flex-1 overflow-auto">
            <slot/>
          </div>
          <div class="flex-initial">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BaseModal',
    props: {
      state: {
        type: Object,
        required: true
      }
    },
    watch: {
      '$route.hash'(value) {
        // Open the contact modal if user goes to #modal-id
        // or close the contact modal if user goes out of #modal-id
        if (value.split('#')[1] === this.state.id) {
          // We first refresh canGoBack to true because now we have history for sure
          this.state.canGoBack = true
          this.state.show = true
        } else {
          // We first check for premature back navigation, to cancel the entire modal
          if (!this.state.showContent) this.state.show = false
          this.state.showContent = false
        }
      }
    },
    mounted() {
      // Open the contact modal if #modal-id is initially in the address bar
      if (this.$route.hash.split('#')[1] === this.state.id) {
        this.state.show = true
        // Set canGoBack to false, since the modal is already open
        // and the router has no history to go back
        this.state.canGoBack = false
      } else {
        // Set canGoBack to true because there will be history when modal is open
        this.state.canGoBack = true
      }
    },
    methods: {
      beforeEnter() {
        document.querySelector('html').style.overflowY = 'hidden'
      },
      afterChildEnter() {
        if (this.$children[0].init) this.$children[0].init()
      },
      afterLeave() {
        document.querySelector('html').style.overflowY = 'auto'
      },
      escapeHandler() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .c-bg-backdrop {
    background-color: rgba(71, 73, 78, 0.55)
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .scale-enter-active, .scale-leave-active {
    @apply transition ease-out transform scale-100 duration-500 opacity-100
  }

  .scale-enter, .scale-leave-to {
    @apply scale-110 opacity-25
  }
</style>
