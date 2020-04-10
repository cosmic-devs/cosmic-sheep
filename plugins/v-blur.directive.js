import Vue from 'vue';

/* use:
<component v-blur="true">

or

<component v-blur="blurConfig: {
            isBlurred: false,
            opacity: 0.3,
            filter: 'blur(1.2px)',
            transition: 'all .3s linear'
          }">
*/

const blurConfig = {

  options: Object.assign({
    opacity: 0.5,
    filter: 'blur(1.3px)',
    transition: 'all .5s linear'
  }),

  blur(el, bindingValue) {
    if (typeof bindingValue !== 'boolean' && typeof bindingValue !== 'object') {
      throw new Error(
        'Expected directive binding value type to be a boolean or an object but found ' +
        `${typeof bindingValue} instead`
      )
    }

    if (typeof bindingValue === 'boolean') {
      bindingValue = { isBlurred: bindingValue }
    }

    const opacity = bindingValue.opacity || blurConfig.options.opacity
    const filter = bindingValue.filter || blurConfig.options.filter
    const transition = bindingValue.transition || blurConfig.options.transition

    el.style.opacity = bindingValue.isBlurred ? opacity : 1
    el.style.filter = bindingValue.isBlurred ? filter : 'none'
    el.style.transition = transition
  },

  bind(el, binding) {
    blurConfig.blur(el, binding.value)
  },

  update(el, binding) {
    blurConfig.blur(el, binding.value)
  }
}

// v-blur
Vue.directive('blur', blurConfig)
