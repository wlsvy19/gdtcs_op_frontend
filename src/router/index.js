import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/MainDashboard.vue'),
  },
  {
    path: '/2110',
    name: 'WorkStatMgt',
    component: () => import('@/views/WorkMgt/WorkStatMgt.vue'),
  },
  {
    path: '/2111',
    name: 'OzTest',
    component: () => import('@/views/WorkMgt/OzTest.vue'),
  },
  {
    path: '/6110',
    name: 'KecTrnRcpList',
    component: () => import('@/views/TrnRcpMgt/KecTrnRcpList.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
