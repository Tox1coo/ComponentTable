import Vue from 'vue'
import App from './App.vue'

Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if(!(event.target === el.parentElement || el.parentElement.contains(event.target))){
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        }
      }
      window.addEventListener('click', el.clickOutsideEvent);
    },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
