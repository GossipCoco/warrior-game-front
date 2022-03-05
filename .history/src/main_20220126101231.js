import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import io from 'socket.io-client'
import IOController from '../src/api/SocketIoApi'
import BootstrapVue3 from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGamepad, faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/css/layout.css'
import './assets/css/navbar.css'
import './assets/css/components.css'
import './assets/css/text.css'

IOController.initSocket(io)

library.add(faUser, faHouseUser, faGamepad)

const app = createApp(App)
app.use(BootstrapVue3)
app.use(FontAwesomeIcon)
app.use(Vuex)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')