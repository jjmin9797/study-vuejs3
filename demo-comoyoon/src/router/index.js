import { createRouter, createWebHistory } from "vue-router"
import Main from '../pages/como-main';
import AboutUs from '../pages/como-aboutus';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            component: AboutUs
        }
    ]
})
export default router;