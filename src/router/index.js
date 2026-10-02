import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/CompanyProfile.vue'),
    meta: { title: 'Company Profile | WARGYM Jombang' }
  },
  {
    path: '/fasilitas',
    name: 'fasilitas',
    component: () => import('../views/Fasilitas.vue'),
    meta: { title: 'Fasilitas | WARGYM Jombang' }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue'),
    meta: { title: 'Team Kita | WARGYM Jombang' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: 'Kontak Kami | WARGYM Jombang' }
  },
  {
    path: '/informasi',
    name: 'informasi',
    component: () => import('../views/Informasi.vue'),
    meta: { title: 'Informasi & Layanan | WARGYM Jombang' }
  },
  {
    path: '/personal-trainer',
    name: 'personal-trainer',
    component: () => import('../views/PersonalTrainer.vue'),
    meta: { title: 'Personal Trainer | WARGYM Jombang' }
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import('../views/Tutorial.vue'),
    meta: { title: 'Tutorial | WARGYM Jombang' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'WARGYM Jombang'
})

export default router
