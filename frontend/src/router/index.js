import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MenuView.vue')
    },
    
   
    {
      path: '/inventario',
      name: 'inventario',
      component: () => import('../views/InventarioView.vue')

    },

    {
      path: '/proveedores',
      name: 'proveedores',
      component: () => import('../views/ProveedorView.vue')

    },

    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuariosView.vue')

    },

    {
      path: '/crearUsuarios',
      name: 'crearUsuarios',
      component: () => import('../views/CrearUsuariosView.vue')

    },

    {
      path: '/administrarPermisos',
      name: 'administrarPermisos',
      component: () => import('../views/AdministrarPermisosView.vue')

    },

    {
      path: '/sede',
      name: 'sede',
      component: () => import('../views/SedeView.vue')

    },
    {
      path: '/acerca',
      name: 'acerca',
      component: () => import('../views/AcercaDeView.vue')

    },
    {
      path: '/salir',
      name: 'salir',
      component: () => import('../views/SalirView.vue')

    }
  
  
  ]
})

export default router
