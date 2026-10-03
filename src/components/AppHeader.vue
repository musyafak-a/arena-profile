<template>
  <header class="fixed top-0 w-full z-50 bg-black/95 shadow-2xl border-b border-white/10">
    <div class="flex items-center justify-between h-20 px-6 md:px-16 w-full max-w-screen-2xl mx-auto">
      <router-link class="flex items-center gap-3" to="/">
        <span class="font-display-xl text-white uppercase italic text-2xl tracking-tighter leading-none hidden sm:inline">WAR <span class="text-brand-red">GYM</span></span>
      </router-link>

      <nav class="hidden lg:flex items-center justify-center gap-8 h-full">
        <template v-for="item in navItems" :key="item.id">
          <!-- Dropdown -->
          <div v-if="item.children" class="dropdown relative h-full flex items-center">
            <a class="nav-link font-label-caps text-label-caps text-on-surface-variant hover:text-brand-red transition-colors py-2 cursor-pointer uppercase" :class="{ 'active text-white': isActive(item.id) }">
              {{ item.title }}
              <span class="material-symbols-outlined text-[14px] align-middle">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <router-link v-for="child in item.children" :key="child.title" :to="child.url">{{ child.title }}</router-link>
            </div>
          </div>
          <!-- Normal link -->
          <div v-else class="h-full flex items-center">
            <router-link
              :to="item.url"
              class="nav-link font-label-caps text-label-caps hover:text-brand-red transition-colors py-2 uppercase"
              :class="isActive(item.id) ? 'active text-brand-red font-bold' : 'text-on-surface-variant'"
            >{{ item.title }}</router-link>
          </div>
        </template>
      </nav>

      <div class="flex items-center">
        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = true" class="lg:hidden text-white hover:text-brand-red transition-colors focus:outline-none">
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <div v-show="mobileMenuOpen" class="fixed inset-0 z-[100] lg:hidden">
      <!-- Backdrop -->
      <transition name="fade">
        <div v-show="mobileMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm" @click="mobileMenuOpen = false"></div>
      </transition>

      <!-- Sidebar Panel -->
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div v-show="mobileMenuOpen" class="fixed inset-y-0 right-0 w-[260px] sm:w-[320px] bg-[#131313] border-l border-brand-red/20 shadow-2xl overflow-y-auto">
          <div class="flex items-center justify-between p-6 border-b border-white/10">
            <span class="font-display-xl text-white uppercase italic text-2xl tracking-tighter leading-none">WAR <span class="text-brand-red">GYM</span></span>
            <button @click="mobileMenuOpen = false" class="text-white hover:text-brand-red transition-colors focus:outline-none">
              <span class="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          <div class="p-6 flex flex-col gap-6">
            <template v-for="(item, idx) in navItems" :key="item.id">
              <div class="flex flex-col gap-4" :class="{ 'border-b border-white/10 pb-6': idx < navItems.length - 1 }">
                <template v-if="item.children">
                  <span class="font-label-caps text-brand-red text-xs tracking-widest uppercase">{{ item.title }}</span>
                  <router-link v-for="child in item.children" :key="child.title" :to="child.url" class="font-headline-md text-white hover:text-brand-red text-xl uppercase transition-colors" @click="mobileMenuOpen = false">{{ child.title }}</router-link>
                </template>
                <template v-else>
                  <router-link :to="item.url" class="font-headline-md text-xl uppercase transition-colors" :class="isActive(item.id) ? 'text-brand-red' : 'text-white hover:text-brand-red'" @click="mobileMenuOpen = false">{{ item.title }}</router-link>
                </template>
              </div>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { title: 'BERANDA', url: '/', id: 'home' },
  {
    title: 'OUR SERVICE', url: null, id: 'service',
    children: [
      { title: 'Personal Training', url: '/personal-trainer' },
      { title: 'Informasi', url: '/informasi' },
    ]
  },
  { title: 'FASILITAS', url: '/fasilitas', id: 'fasilitas' },
  { title: 'TEAM KITA', url: '/team', id: 'team' },
  { title: 'KONTAK', url: '/contact', id: 'contact' },
]

function isActive(id) {
  const nameMap = {
    home: ['home'],
    service: ['informasi', 'personal-trainer'],
    fasilitas: ['fasilitas'],
    team: ['team'],
    contact: ['contact'],
  }
  return (nameMap[id] || []).includes(route.name)
}
</script>
