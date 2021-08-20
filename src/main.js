import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter, faVuejs, faJsSquare, faReact, faPython, faNodeJs, faGit} from '@fortawesome/free-brands-svg-icons'


library.add(faGithub, faLinkedin, faTwitter, faVuejs, faJsSquare, faReact,faPython, faNodeJs, faGit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
