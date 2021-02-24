import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRouterMap = [
    {
        path: "/",
        name: "首页",
        component: resolve => require(['../pages/index'], resolve)
    }
]

const router = new VueRouter({
    routes: constantRouterMap
})

export default router
