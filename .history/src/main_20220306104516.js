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
import { faCat, faEnvelope, faGamepad, faHome, faHouseUser, faUser, faUserAlt, faUserCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import jwt from './api/JwtApi'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/css/layout.css'
import './assets/css/navbar.css'
import './assets/css/components.css'
import './assets/css/card.css'
import './assets/css/text.css'
import './assets/css/signInRegister.css'

IOController.initSocket(io)

library.add(faUser, faHouseUser, faGamepad, faUser, faHome, faEnvelope, faUserCog, faCat, faUserAlt, faUsers, faCat)
axios.interceptors.request.use(function (config) {
    const token = jwt.GetUser()
    config.headers.Authorization =  token
    return config
})

const app = createApp(App)
app.use(BootstrapVue3)
app.use(FontAwesomeIcon)
app.use(Vuex)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')