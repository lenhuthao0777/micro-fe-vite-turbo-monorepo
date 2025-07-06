import { type App } from 'vue';
import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from 'vue-router';

export default (app: App) => {
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'hello',
      component: import('./components/HelloWorld.vue'),
      meta: {
        permissions: 1,
      },
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  // router.beforeEach(AuthGuard)

  app.use(router);
};
