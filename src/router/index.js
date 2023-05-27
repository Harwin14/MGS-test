import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/DashboardBarang/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/addBarang',
      name: 'createBarang',
      component: () => import('../views/DashboardBarang/FormAdd.vue')
    },
    {
      path: `/updateBarang/:id`,
      name: 'updateBarang',
      component: () => import('../views/DashboardBarang/FormEdit.vue')
    },
    {
      path: '/supplier',
      name: 'barang',
      component: () => import('../views/DashboardSupplier/index.vue')
    },
    {
      path: '/addSupplier',
      name: 'createSupplier',
      component: () => import('../views/DashboardSupplier/FormAdd.vue')
    },
    {
      path: `/updateSupplier/:id`,
      name: 'updateSupplier',
      component: () => import('../views/DashboardSupplier/FormEdit.vue')
    }
  ]
})

export default router
