import { createRouter, createWebHistory } from 'vue-router'
import DashboardPetugasView from '../presentation/views/petugas/DashboardPetugasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../presentation/views/auth/LoginView.vue'),
    },
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
    {
      path: '/admin',
      name: 'admin-dashboard',
      component: () => import('../presentation/views/admin/DashboardAdminView.vue'),
    },
    {
      path: '/admin/revenue',
      name: 'admin-revenue',
      component: () => import('../presentation/views/admin/RevenueAdminView.vue'),
    },
    {
      path: '/admin/members',
      name: 'admin-members',
      component: () => import('../presentation/views/admin/MembersAdminView.vue'),
    },
    {
      path: '/admin/members/add',
      name: 'admin-members-add',
      component: () => import('../presentation/views/admin/MembersAddAdminView.vue'),
    },
    {
      path: '/admin/reports',
      name: 'admin-reports',
      component: () => import('../presentation/views/admin/ReportsAdminView.vue'),
    },
    {
      path: '/admin/audit',
      name: 'admin-audit',
      component: () => import('../presentation/views/admin/AuditAdminView.vue'),
    },
    {
      path: '/admin/audit/detail',
      name: 'admin-audit-detail',
      component: () => import('../presentation/views/admin/AuditDetailAdminView.vue'),
    },
    // To implement later:
  ],
})

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('authRole')
  
  if (to.name !== 'login' && !role) {
    next({ name: 'login' })
  } else if (to.name === 'login' && role) {
    if (role === 'admin') {
      next('/admin')
    } else {
      next('/')
    }
  } else if (to.path.startsWith('/admin') && role !== 'admin') {
    next('/')
  } else {
    next()
  }
})

export default router
