import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../pages/HomePage.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../pages/AboutPage.vue')
      },
      {
        path: 'react',
        name: 'React',
        component: () => import('../pages/ReactPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router