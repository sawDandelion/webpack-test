import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

const mixin = {};

mixin.install = (vue) => {
  vue.mixin({
    data() {
      return {
        xxx: 'xxx1'
      }
    }
  })
}

Vue.use(mixin)

new Vue({
  render: (h) => h(App)
}).$mount(root)