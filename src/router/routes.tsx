import { lazy } from "react";
// import Home from '@/views/Home'
import Vote from '@/views/demo-reudex/Vote'

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    //     meta: {
    //         title: 'home'
    //     }
    // },
    {
        path: '/',
        name: 'vote',
        component: Vote,
        meta: {
            title: 'vote'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: lazy(() => import('@/views/Detail')),
        meta: {
            title: ''
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: lazy(() => import('@/views/Personal')),
        meta: {
            title: ''
        }
    }, 
    {
        path: '/login',
        name: 'login',
        component: lazy(() => import('@/views/Login')),
        meta: {
            title: ''
        }
    }, 
    {
        path: '/store',
        name: 'store',
        component: lazy(() => import('@/views/Store')),
        meta: {
            title: ''
        }
    },
    {
        path: '/update',
        name: 'update',
        component: lazy(() => import('@/views/Update')),
        meta: {
            title: ''
        }
    },
    {
        path: '*',
        name: '404',
        component: lazy(() => import('@/views/Page404')),
        meta: {
            title: ''
        }
    },
]

export default routes