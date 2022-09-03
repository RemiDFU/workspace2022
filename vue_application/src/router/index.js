import {createRouter, createWebHashHistory} from 'vue-router'
import MyHome from '@/views/MyHome'
import MenuPage from '@/views/MenuPage'
import DynamicPage from '@/views/DynamicPage'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: MyHome
        },
        {
            name: 'menu',
            path: '/menu',
            component: MenuPage
        },
        {
            name: 'dynamic',
            path: '/dynamic/:id',
            component: DynamicPage,
            props: true
        },
        // Quand path err 404 retour Home
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: MyHome 
        },
    ]
})

export default router;