import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './app.vue'
import _ from 'loadsh'
import $ from 'jquery'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(ElementUI)

const mixin = {}

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
