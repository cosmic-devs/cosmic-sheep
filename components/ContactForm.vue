<template>
  <form class="px-6 py-3 text-sm text-gray-700" name="contactForm" @submit.prevent="sendEmail">
    <div class="flex mb-1">
      <div class="w-full mr-4">
        <label class="text-xs text-blue-700" for="floatName">
          Name
        </label>
        <input id="floatName" v-model="name" name="name" type="text" required
               class="block w-full p-2 mb-2 text-gray-700 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:bg-white"
        />
      </div>
      <div class="w-full">
        <label class="text-xs text-blue-700" for="floatEmail">
          E-mail
        </label>
        <input id="floatEmail" v-model="email" type="email" name="email" required
               class="block w-full p-2 mb-2 text-gray-700 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:bg-white"
        />
      </div>
    </div>
    <div class="w-full mb-1">
      <span class="flex">
        <label class="text-xs text-blue-700" for="floatMessage">
          Message
        </label>
        <span class="inline-block w-full text-xs text-right text-blue-700">
          {{ message.text.length }} / {{ message.maxlength }}
        </span>
      </span>
      <textarea id="floatMessage" v-model="message.text" name="message" required rows="6"
                :maxlength="message.maxlength"
                class="block w-full p-2 text-gray-700 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:bg-white"
      ></textarea>
    </div>
    <div class="flex mt-4 mb-2 justify-end">
      <button name="cancel" aria-label="cancel"
              @click.prevent="$emit('send')"
              class="mr-4 z-10 sm:w-32 rounded-lg button--blue focus:outline-none focus:shadow-outline hvr-outline-out"
      >
        CANCEL
      </button>
      <button type="submit" name="send" aria-label="send"
              class="z-10 sm:w-32 rounded-lg button--blue focus:outline-none focus:shadow-outline hvr-outline-out"
      >
        SEND
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: {
          text: '',
          maxlength: 1000
        }
      }
    },
    methods: {
      sendEmail() {
        this.$emit('send')
        const discord = 'https://discordapp.com/api/webhooks/696743990061563956/_u3EdcrEmA3cqd_X2RTmb0NCvx0plIMmeRFNUgghk8erhaGR6NOl82bY1DE2dsroe71h'
        this.$axios.$post(discord, {
          username: this.name + ' - ' + this.email,
          content: this.message.text,
          tts: true
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
          this.$toast.info('Your message was sent!', {
            duration: 5000,
            theme: 'outline'
          })
        }).catch(() => {
          this.$toast.error('Can\'t send your message, please try again later.', {
            duration: 5000,
            theme: 'outline'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .hvr-outline-out:before {
    @apply border-blue-700 rounded-lg border opacity-0 transition-all
  }

  .hvr-outline-out:hover:before {
    @apply opacity-100
  }

  .hvr-outline-out:active:before {
    left: -4px;
    right: -4px;
    top: -4px;
    bottom: -4px;
  }
</style>
