import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/pages/HomePage.vue'
import FormView from '../components/pages/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../components/pages/AboutPages.vue')
    // }
  ]
})

export default router
