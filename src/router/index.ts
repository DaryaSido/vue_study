
import MainLayout1 from '@/layouts/MainLayout1.vue';
import MainViewComposition from '@/views/MainViewComposition.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainViewComposition,
      meta: {
        layout: MainLayout1,

      }
    },
     {
      path: '/options',
      name: 'options',
      component:()=> import('@/views/SuperViewOptions.vue'),
    },

    {
      path: '/auth',
      name: 'authorization',
      component:()=> import('@/views/AuthViewComposition.vue'),
         meta: {
        layout: MainLayout1,

      }
    },
      {
      path: '/users',
      name: 'users',
      component:()=> import('@/views/UsersViewComposition.vue'),
         meta: {
        layout: MainLayout1,

      }
    },
      {
      path: '/user/:id',
      name: 'user',
      component:()=> import('@/views/UserViewComposition.vue'),
         meta: {
        layout: MainLayout1,

      }
    },
        {
      path: '/news',
      name: 'news',
      component:()=> import('@/components/composition/PostsComposition.vue'),
         meta: {
        layout: MainLayout1,

      }
    },
  ],
 
})
const isAuth = false;
 router.beforeEach((to) => {
if(to.name==='users' && !isAuth) {
alert('Авторизуйтесь');
return {
  name: 'authorization',
};
};
  })

export default router
