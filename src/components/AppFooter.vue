<template>
  <footer class="bg-[#131313] border-t border-white/5 pt-20 pb-10 relative z-10">
    <div class="max-w-screen-2xl mx-auto px-6 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <router-link class="flex items-center gap-3 mb-6" to="/">
            <span class="font-display-xl text-white uppercase italic text-2xl tracking-tighter leading-none">WAR <span class="text-brand-red">GYM</span></span>
          </router-link>
          <p class="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
            Temukan lokasi WARGYM, pilihan kelas kebugaran, fasilitas latihan, dan personal trainer untuk mendukung perjalanan fitness Anda.
          </p>
          <div class="flex items-center gap-3">
            <a href="https://www.instagram.com/wargym_team" target="_blank" class="w-10 h-10 rounded-md bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-brand-red hover:text-black transition-colors" title="Instagram">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@wargym_team" target="_blank" class="w-10 h-10 rounded-md bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-brand-red hover:text-black transition-colors" title="TikTok">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61 1.25-5.26 3.63-6.35 1.46-.66 3.14-.8 4.68-.45v4.13c-.93-.31-2.03-.38-2.92.1-.9.46-1.48 1.35-1.54 2.37-.09 1.23.83 2.5 2.05 2.71 1.45.26 3.01-.54 3.48-1.93.18-.54.21-1.13.21-1.7V.02z"/></svg>
            </a>
            <a href="https://wa.me/6282130066694" target="_blank" class="w-10 h-10 rounded-md bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-brand-red hover:text-black transition-colors" title="WhatsApp Admin">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.539 1.78.835 2.801.835 3.178 0 5.767-2.586 5.768-5.766 0-3.18-2.589-5.767-5.773-5.773zm7.551 5.764c0 4.167-3.39 7.557-7.551 7.557-1.326 0-2.58-.344-3.676-.948l-4.355 1.141 1.163-4.248c-.689-1.157-1.054-2.487-1.054-3.856 0-4.167 3.39-7.557 7.551-7.557 4.162 0 7.552 3.39 7.552 7.557zm-3.829 3.518c-.208.587-1.037 1.077-1.428 1.121-.392.043-.902.164-3.037-.673-2.564-1.006-4.204-3.606-4.331-3.774-.128-.168-1.033-1.373-1.033-2.618 0-1.246.654-1.859.886-2.112.232-.253.507-.317.676-.317.169 0 .338.002.486.01.157.008.368-.06.576.438.213.509.728 1.777.791 1.906.063.129.105.281.021.449-.084.168-.127.273-.253.42-.127.147-.267.329-.381.442-.128.127-.26.265-.112.521.148.256.657 1.082 1.411 1.753.971.865 1.79 1.134 2.046 1.261.256.127.406.106.556-.064.15-.17.643-.749.815-1.006.172-.257.344-.213.578-.127.234.086 1.488.701 1.745.829.257.128.428.192.492.299.064.107.064.622-.144 1.209z"/></svg>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb8PvuFLo4hlrtXHgX2j" target="_blank" class="w-10 h-10 rounded-md bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-brand-red hover:text-black transition-colors" title="Saluran WhatsApp">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16.881 4.346A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.633 2.77 1.633H12a2.25 2.25 0 0 0 2.25-2.25v-1.17c1.398-.225 2.76-.566 4.072-1.015a.75.75 0 0 0 .506-.71V5.056a.75.75 0 0 0-.947-.71ZM19.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM21.75 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" /></svg>
            </a>
          </div>
        </div>

        <!-- Empty Column for Spacing -->
        <div class="hidden lg:block lg:col-span-1"></div>

        <div class="grid grid-cols-2 gap-8 lg:col-span-2">
          <!-- Perusahaan Column -->
          <div>
            <h4 class="font-headline-md text-white tracking-widest text-sm sm:text-lg mb-6">Perusahaan</h4>
            <router-link to="/team" class="footer-link text-xs sm:text-sm">Tentang Kami</router-link>
            <router-link to="/contact" class="footer-link text-xs sm:text-sm">Hubungi Kami</router-link>
            <router-link to="/informasi" class="footer-link text-xs sm:text-sm">Informasi</router-link>
          </div>

          <!-- Layanan Column -->
          <div>
            <h4 class="font-headline-md text-white tracking-widest text-sm sm:text-lg mb-6">Layanan</h4>
            <router-link to="/fasilitas" class="footer-link text-xs sm:text-sm">Fasilitas</router-link>
            <router-link to="/informasi#daftar-harga" class="footer-link text-xs sm:text-sm">Membership</router-link>
            <router-link to="/personal-trainer" class="footer-link text-xs sm:text-sm">Personal Trainer</router-link>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-on-surface-variant/60 font-body-md text-sm">
        <a href="#" class="hover:text-white transition-colors mb-4 md:mb-0">Kebijakan Privasi</a>
        <p>&copy; {{ currentYear }} WARGYM Jombang. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
