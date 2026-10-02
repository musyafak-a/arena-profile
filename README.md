# WARGYM Jombang - Company Profile (Vue 3 + Vite)

Aplikasi Web Company Profile resmi **WARGYM Jombang** yang telah dimigrasikan dari Laravel Blade ke **Vue 3 (Composition API) + Vite**, siap dihosting dan dideploy secara gratis serta cepat di **Vercel** atau platform Jamstack lainnya.

---

## 🚀 Fitur & Struktur Halaman

Projek ini mencakup seluruh halaman company profile dengan desain brutalist-industrial yang identik:
- **Beranda (/)**: Hero carousel video/foto, Info Jam & Fasilitas Utama, Google Reviews rating, Lokasi & Google Maps embed.
- **Fasilitas (/fasilitas)**: Daftar inventori alat gym (Cardio, Strength, Lainnya) dengan filter interaktif & pencarian real-time.
- **Team Kita (/team)**: Profil dan cerita pendirian WARGYM Jombang.
- **Personal Trainer (/personal-trainer)**: Daftar pelatih/coach profesional dengan spesialisasi masing-masing.
- **Informasi Layanan (/informasi)**: Jam operasional lengkap, paket harga membership/harian, dan tata tertib.
- **Kontak (/contact)**: Saluran resmi WhatsApp CS, Instagram, TikTok, dan Channel Komunitas.
- **Tutorial (/tutorial)**: Coming soon page untuk edukasi gerakan gym.

---

## 🛠️ Menjalankan di Lokal (Development)

1. Masuk ke folder project:
   `ash
   cd c:\laragon\www\arenafitness-profile
   `

2. Jalankan development server:
   `ash
   npm run dev
   `

3. Buka browser di URL lokal yang ditampilkan (biasanya http://localhost:5173).

---

## 📦 Build Produksi

Untuk menghasilkan bundle statis yang dioptimasi:
`ash
npm run build
`
Hasil build akan tersimpan di folder dist/.

---

## 🌐 Cara Deploy ke Vercel

### Metode 1: Hubungkan ke GitHub (Rekomendasi)
1. Buat repository baru di GitHub (misalnya: wargym-profile).
2. Push repositori lokal ke GitHub:
   `ash
   git remote add origin https://github.com/USERNAME/wargym-profile.git
   git branch -M main
   git push -u origin main
   `
3. Buka dashboard [Vercel](https://vercel.com) dan klik **Add New Project**.
4. Import repository GitHub tersebut.
5. Vercel akan otomatis mendeteksi framework **Vite**:
   - **Build Command**: ite build
   - **Output Directory**: dist
6. Klik **Deploy**! File ercel.json sudah disediakan untuk menangani SPA routing otomatis tanpa 404 pada sub-halaman.

### Metode 2: Deploy langsung via Vercel CLI
`ash
npm i -g vercel
vercel
`
Ikuti instruksi di terminal hingga URL live diberikan.
