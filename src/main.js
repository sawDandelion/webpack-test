import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

const mixin = {},
  test = {
    a: '123'
  }

mixin.install = (vue) => {
  vue.util.defineReactive(test, 'a')
  Object.defineProperty(test, 'a', {
    get: () => {
      return test.a
    },
    set: (val) => {
      test.a = val
    }
  })
  console.log(test.a, 'testttttttt')
  setTimeout(() => {
    test.a = '321'
  }, 2000)
  vue.mixin({
    beforeCreate() {
      this.test = test
    },
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