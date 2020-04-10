<template>
  <transition name="fade" @before-enter="beforeEnter" @after-enter="showContent = true"
              @after-leave="afterLeave"
  >
    <div v-on-escape="closeModal" v-focus-trap v-if="show"
         class="fixed inset-0 z-50 flex min-w-full min-h-full p-5 focus:outline-none"
    >
      <div class="absolute inset-0 w-full h-full c-bg-backdrop" @click.self="closeModal"></div>
      <transition name="scale" @before-leave="show = false" @after-enter="afterChildrenEnter">
        <div v-show="showContent"
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
    name: 'Modal',
    props: {
      anchor: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show: false,
        showContent: false,
        canGoBack: true
      }
    },
    watch: {
      '$route.hash'(value) {
        // Open the modal if user goes to #modal-anchor
        // or close the modal if user goes out of #modal-anchor
        if (value === this.anchor) {
          // We first refresh canGoBack to true because now we have history for sure
          this.canGoBack = true
          this.show = true
        } else {
          // We first check for premature back navigation, to cancel the entire modal
          if (!this.showContent) this.show = false
          this.showContent = false
        }
      },
      show(value) {
        this.$emit('blur', value)
      }
    },
    mounted() {
      // Open the modal if #modal-anchor is initially in the address bar
      if (this.$route.hash === this.anchor) {
        this.show = true
        // Set canGoBack to false, since the modal is already open
        // and the router has no history to go back
        this.canGoBack = false
      } else {
        // Set canGoBack to true because there will be history when modal is open
        this.canGoBack = true
      }
    },
    methods: {
      beforeEnter() {
        document.querySelector('html').style.overflowY = 'hidden'
      },
      afterChildrenEnter() {
        // Init function must be present in children, in order to pass the closeModal function
        this.$children.map((value) => {
          if (value.init) value.init(this.closeModal)
        })
      },
      afterLeave() {
        document.querySelector('html').style.overflowY = 'auto'
      },
      closeModal() {
        this.canGoBack
          ? this.show || this.showContent
          ? this.$router.go(-1)
          : false
          : this.$router.replace(this.$route.fullPath.split('#')[0])
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
