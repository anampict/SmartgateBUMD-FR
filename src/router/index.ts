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
    {
      path: '/operasional',
      name: 'operasional',
      component: () => import('../presentation/views/petugas/OperasionalPetugasView.vue'),
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: () => import('../presentation/views/petugas/HardwarePetugasView.vue'),
    },
    {
      path: '/histori',
      name: 'histori',
      component: () => import('../presentation/views/petugas/HistoriPetugasView.vue'),
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: () => import('../presentation/views/petugas/RevenuePetugasView.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../presentation/views/petugas/MembersPetugasView.vue'),
    },
    {
      path: '/members/add',
      name: 'members-add',
      component: () => import('../presentation/views/petugas/MembersAddView.vue'),
    },
    {
      path: '/histori/detail',
      name: 'histori-detail',
      component: () => import('../presentation/views/petugas/DetailTransaksiView.vue'),
    },
    // To implement later:
  ],
})

export default router
