import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/index/login'
import Register from '@/components/index/register'
import AddArticle from '@/components/article/addArticle'
import EditArticle from '@/components/article/editArticle'
import Article from '@/components/article/article'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/index',
            redirect: '/'
        }, {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }, {
            path: '/addArticle',
            name: 'addArticle',
            component: AddArticle
        }, {
            path: '/editArticle',
            name: 'editArticle',
            component: EditArticle
        }, {
            path: '/article',
            name: 'article',
            component: Article
        }
    ]
})