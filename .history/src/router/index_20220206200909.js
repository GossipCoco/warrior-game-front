import { createWebHistory, createRouter } from "vue-router"

import Home from '../components/Page/Home'
import SignIng from '../components/Page/SignIn'
import Register from '../components/Page/Register'
import UserLayout from '../components/User/UserLayout'
import CharacterLayout from '../components/Character/CharacterLayout'
import CharacterDetails from '../components/Character/CharacterDetails'
import DashboardLayout from '../components/Dashboard/DashboardLayout'

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
        path:'/logout',
        redirect: '/signin'
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/user',
                name: 'user',
                component: UserLayout
            },{
                path: '/character',
                name: 'character',
                component: CharacterLayout
            },
            {
                path: '/character/:id',
                name: 'characterDetails',
                component: CharacterDetails
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: DashboardLayout
            }
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;