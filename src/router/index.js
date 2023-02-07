/*Archivo de rutas para el proyecto*/

import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Order from '../views/Order.vue'
import ProductOrder from '../views/ProductOrder.vue'
import OrderDetail from '../views/OrderDetail.vue'


const routes = [
    {
        path:'/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/register',
        name: 'Register',
        component: Register
    },
    {
        path:'/products',
        name: 'Product',
        component: Product
    },
    {
        path: '/carritoCompra',
        name: 'Order',
        component: Order
    },
    {
        path: '/orders',
        name: 'ProductOrder',
        component: ProductOrder
    },
    {
        path: '/order_detail/:idProduct',
        name: 'OrderDetail',
        component: OrderDetail
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router