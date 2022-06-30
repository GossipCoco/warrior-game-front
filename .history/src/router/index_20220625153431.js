import { createWebHistory, createRouter } from "vue-router"

import Home from '../components/Page/Home'
import Login from '../components/Page/Login'
import Logout from '../components/Page/Logout'
import Register from '../components/Page/Register'
import UserLayout from '../components/User/UserLayout'
import CharacterLayout from '../components/Character/CharacterLayout'
import CharacterDetails from '../components/Character/CharacterDetails'
import CharacterCreate from '../components/Character/CharacterCreate'
import DashboardLayout from '../components/Dashboard/DashboardLayout'
import GameLayout from '../components/Game/GameLayout'
import AllClans from '../components/Character/AllClans'
import ClanDetails from '../components/Character/ClanDetails'
import AdminLayout from '../components/Admin/AdminLayout'
import PageError from '../components/Page/404'

const routes = [    
    {
        path:'/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/logout',
        name: 'Logout',
        component: Logout
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
                path: '/allCharacter',
                name: 'character',
                component: CharacterLayout
            },{
                path: '/character/:id',
                name: 'characterDetails',
                component: CharacterDetails
            },{
                path: '/character/create',
                name: 'characterCreate',
                component: CharacterCreate
            },{
                path: '/dashboard',
                name: 'Dashboard',
                component: DashboardLayout
            },{
                path: '/game',
                name: 'Game',
                component: GameLayout
            },{
                path: '/allClans',
                name: 'allClans',
                component: AllClans
            },{
                path: '/clan/:id',
                name: 'clanDetails',
                component: ClanDetails
            },{
                path: '/admin',
                name: 'Admin',
                component: AdminLayout
            }
        ]
    },
    { path: '/404', name: 'Page 404', component: PageError },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;