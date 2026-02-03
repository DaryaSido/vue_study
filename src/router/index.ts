import MainContent from '@/components/composition/MainContent.vue'
import MainViewComposition from '@/views/MainViewComposition.vue'
import SuperView from '@/views/SuperViewOptions.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainViewComposition,
    },
     {
      path: '/options',
      name: 'options',
      component: SuperView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
