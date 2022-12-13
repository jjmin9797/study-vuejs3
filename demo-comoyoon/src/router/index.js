import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/como-main';
import AboutUs from '@/pages/como-aboutus';
import Promotion from '@/pages/promotion/como-promotion';
import PromotionDetail from '@/pages/promotion/como-promotion-detail';
import Flower from '@/pages/flower/como-flower';
import FlowerDetail from '@/pages/flower/como-flower-detail';
import Dessert from '@/pages/dessert/como-dessert';
import Reservation from '@/pages/reservation/como-reservation';
import ErrorPage from '@/pages/como-notfound-error';



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
        },
        {
            path: '/promotion',
            name: 'Promotion',
            component: Promotion
        },
        {
            path: '/reservation',
            name: 'Reservation',
            component: Reservation
        },
        {
            path: '/promotionDetail',
            name: 'PromotionDetail',
            component: PromotionDetail
        },
        {
            path: '/flower',
            name: 'Flower',
            component: Flower
        },
        {
            path: '/dessert',
            name: 'Dessert',
            component: Dessert
        },
        {
            path: '/flowerDetail',
            name: 'FlowerDetail',
            component: FlowerDetail
        },
        {
            path: '/:catchAll(.*)',
            component: ErrorPage
        },

        
        
        
    ]
})
export default router;