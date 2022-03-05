import { createWebHistory, createRouter } from "vue-router"

import Home from '../components/Page/Home'
import SignIng from '../components/Page/SignIn'

const routes = [    
    {
        path:'/',
        redirect: '/signin'
    },
    {
        path: '/signin',
        name: 'Signin',
        component: SignIng
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;