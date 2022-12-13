import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/como-main';
import AboutUs from '@/pages/como-aboutus';
import Promotion from '@/pages/promotion/como-promotion';
import PromotionDetail from '@/pages/promotion/como-promotion-detail';
import Flower from '@/pages/flower/como-flower';
import FlowerDetail from '@/pages/flower/como-flower-detail';



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
            path: '/flowerDetail',
            name: 'FlowerDetail',
            component: FlowerDetail
        },
        {
            path: '/:any',
            component: Main
        },

        
        
        
    ]
})
export default router;