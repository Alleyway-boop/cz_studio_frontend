import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/team',
        name: 'team',
        component: () => import( '../views/Team.vue')
    },
    {
        path: '/applyTeam',
        name: 'applyTeam',
        component: () => import( '../views/ApplyTeam.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( '../views/About.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import( '../views/News.vue')
    },
    {
        path: '/news/:newsId',
        name: 'newsDetail',
        component: () => import( '../views/NewsDetail.vue')
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import( '../views/Rules.vue')
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: () => import( '../views/Dynamic.vue')
    },
    {
        path: '/dynamic/:dynamicId',
        name: 'dynamicDetail',
        component: () => import( '../views/DynamicDetail.vue')
    },
    {
        path: '/competition/:competitionId',
        name: 'competitionDetail',
        component: () => import( '../views/CompetitionDetail.vue')
    },
    {
        path: '/dynamic/:dynamicId/edit',
        name: 'articleEdit',
        meta: {
            requireAuth: true
        },
        component: () => import( '../views/ArticleEdit.vue')

    },
    {
        path: '/articleEdit',
        name: 'articleEdit',
        meta: {
            requireAuth: true
        },
        component: () => import( '../views/ArticleEdit.vue')

    },
    {
        path: '/contentManagement',
        name: 'contentManagement',
        meta: {
            requireAuth: true
        },
        component: () => import( '../views/ContentManagement.vue')

    },
    {
        path: '/productList',
        name: 'productList',
        meta: {
            requireAuth: true
        },
        component: () => import( '../views/ProductList.vue')

    },
    {
        path: '/personalCenter',
        name: 'personalCenter',
        meta: {
            requireAuth: true
        },
        component: () => import( '../views/PersonalCenter.vue')

    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})
export default router
