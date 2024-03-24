import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/features/login/pages/Login.vue') },
  {
    path: '/chat/:interlocutorId?',
    component: () => import('@/features/chat/pages/Chat.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
