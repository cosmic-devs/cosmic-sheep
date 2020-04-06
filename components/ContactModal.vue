<template>
  <transition name="fade" @after-enter="contactModal.showForm = true">
    <div v-if="contactModal.show" class="fixed inset-0 z-50 grid min-w-full min-h-full p-5 c-bg-backdrop grid-rows-12"
         @click.self="$emit('close')"
    >
      <transition name="scale">
        <div v-show="contactModal.showForm"
             class="w-full max-w-xl row-span-6 mx-auto my-auto bg-white rounded-lg shadow-md"
        >
          <contact-form @click.self.stop="" @send="$emit('close')"/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import ContactForm from '~/components/ContactForm'

  export default {
    name: 'ContactModal',
    components: {ContactForm},
    props: {
      contactModal: {
        type: Object,
        required: true
      }
    },
    mounted() {
      document.onkeydown = (e) => {
        if (e.key === 'Escape') {
          this.$emit('close')
        }
      }
      this.$once('hook:beforeDestroy', () => {
        document.onkeydown = null
      })
    }
  }
</script>

<style scoped>
  .c-bg-backdrop {
    background-color: rgba(71, 73, 78, 0.51)
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
