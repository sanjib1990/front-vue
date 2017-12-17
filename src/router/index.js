import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Welcome/Home.vue'
import config from "@/constants/config";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Project',
        component: () => import(/* webpackChunkName: "project" */"@/components/Project/Project")
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import(/* webpackChunkName: "skills" */"@/components/Skills/Skills")
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/components/About/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(config.baseURL),
    routes
})

export default router
