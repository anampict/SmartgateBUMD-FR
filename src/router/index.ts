import { createRouter, createWebHistory } from 'vue-router'
import DashboardPetugasView from '../presentation/views/petugas/DashboardPetugasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardPetugasView,
    },
    // To implement later:
    // {
    //   path: '/admin',
    //   name: 'admin-dashboard',
    //   component: () => import('../views/admin/DashboardAdminView.vue'),
    // }
  ],
})

export default router
