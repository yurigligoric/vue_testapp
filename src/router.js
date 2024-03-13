import { createRouter, createWebHistory } from "vue-router";
import HiWorld from './components/HiWorld.vue'
import About from "./components/AboutMe.vue";
import ProductMe from "./components/ProductMe.vue";


const routes = [
    {path: '/', component: HiWorld },
    {path: '/product', component: ProductMe },
    {path: '/about', component: About },


]

const router = createRouter({
    history: createWebHistory(),
    routes })

export default router

