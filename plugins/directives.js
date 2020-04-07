import Vue from 'vue'

const focusTrap = {
  retainFocus(event) {
    let key = ''

    const focusable = focusTrap.el.querySelectorAll('button:not([disabled]), [href], iframe, video, input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])')
    const focusableArray = Array.prototype.slice.call(focusable)

    //filter out any disabled elements
    const availableFocusable = focusableArray.filter(item => !item.disabled)

    const first = availableFocusable[0]
    const last = availableFocusable[availableFocusable.length - 1]

    /**
     * If the last focusable element is a radio group, store it's name to handle
     * the default behavior of skipping a group or focusable radio boxes
     */
    let lastRadioGroupName = null
    if (last.type === 'radio') {
      console.log('last focusable is radio')
      lastRadioGroupName = last.name
    }

    // if not first or last or radio group, exit early
    if (event.target !== first && event.target !== last && event.target.name !== lastRadioGroupName) {
      return
    }

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        key = 'shift-tab'
      } else {
        key = 'tab'
      }
    } else {
      return
    }

    if (event.target === first && key === 'shift-tab') {
      event.preventDefault()
      last.focus()
    } else if ((event.target === last || event.target.name === lastRadioGroupName) && key === 'tab') {
      // if you are on the last radio grouping or last focusable element, return to first element
      event.preventDefault()
      first.focus()
    }
  },
  inserted(el) {
    el.tabIndex = '-1'
    focusTrap.el = el
    el.addEventListener('keydown', focusTrap.retainFocus)
  },
  unbind(el) {
    el.removeEventListener('keydown', focusTrap.retainFocus)
  }
}

const escape = {
  bind(el, {value, modifiers}) {
    el._keyHandler = (e) => {
      if ('key' in e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          e.preventDefault()
          value()
        }
      }
    }
    el.addEventListener('keydown', el._keyHandler)
  },
  unbind(el) {
    el.removeEventListener('keydown', el._keyHandler)
  }
}

Vue.directive('focus-trap', focusTrap)
Vue.directive('escape', escape)
