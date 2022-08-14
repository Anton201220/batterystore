import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import ProductInfo from './components/ProductInfo'
import Login from './components/Login'
import Order from './components/Order'
import Admin from './components/Admin'
import Orders from "./components/Orders"
import AdminProduct from './components/AdminProduct'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/details/:prod',
            component: ProductInfo,
            name: 'details'
        },

        {
            path:'/login',
            component: Login,
            name: 'login'
        },
        {
            path:'/order/:id',
            component: Order,
            name: 'order'
        },
         {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                  path: 'orders',
                  component: Orders
                },
               {
                  path: 'products',
                  name: 'products',
                  component: AdminProduct
                }],
            beforeEnter: (to,from,next) => {
               
                //console.log('Before')

                if(!localStorage.getItem('token')) {
                    next(false)
            }

                 else {
                   next()
                }
            },
            
        }
    ]

})