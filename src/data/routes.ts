import type { Routes } from '@/types/interfaces'

const routes: Routes[] = [
    {
        id: 1,
        url: 'blog',
        text: 'Blog',
        isInMenu: true,
        orderMenu: 3,
    },
    {
        id: 2,
        url: 'contact',
        text: 'Contact',
        isInMenu: true,
        orderMenu: 4,
    },
    {
        id: 3,
        url: 'error',
        text: 'Error',
        isInMenu: false,
    },
    {
        id: 4,
        url: 'features',
        text: 'Features',
        isInMenu: true,
        orderMenu: 1,
    },
    {
        id: 5,
        url: 'login',
        text: 'Login',
        isInMenu: false,
    },
    {
        id: 6,
        url: 'pricing',
        text: 'Pricing',
        isInMenu: true,
        orderMenu: 2,
    },
]

export default routes
