# 🍗 Chicken Katsu – Website Tugas Perancangan Web

## Struktur Folder

```
chicken-katsu/
├── index.html      ← halaman utama
├── style.css       ← semua tampilan & warna
├── script.js       ← interaktivitas
├── images/         ← taruh semua foto di sini
│   ├── hero-katsu.jpg   (foto besar di bagian atas)
│   ├── menu-1.jpg       (Chicken Katsu Original)
│   ├── menu-2.jpg       (Katsu Rice Box)
│   ├── menu-3.jpg       (Double Katsu)
│   ├── menu-4.jpg       (Katsu Wrap)
│   ├── menu-5.jpg       (Katsu Sandwich)
│   ├── menu-6.jpg       (Katsu Don)
│   └── about.jpg        (foto dapur/tim)
└── README.md
```

## Cara Menambahkan Foto

1. Siapkan 7 foto produk (6 menu + 1 hero)
2. Rename foto sesuai nama di atas
3. Masukkan ke folder `images/`
4. Buka `index.html` di browser — foto langsung muncul!

> Jika foto belum ada, website tetap tampil dengan placeholder emoji otomatis.

## Cara Membuka Website

- Klik dua kali file `index.html` → terbuka di browser
- Atau pakai VS Code + ekstensi Live Server untuk preview langsung

## Fitur Website

- ✅ Navbar fixed dengan efek blur saat scroll
- ✅ Hero section dengan visual produk
- ✅ Grid 6 katalog produk
- ✅ 4 kartu varian saus (Matah, Setan, Ijo, Lava)
- ✅ Section About Us
- ✅ CTA Kontak / WhatsApp
- ✅ Animasi scroll reveal
- ✅ Toast notification saat klik "Pesan"
- ✅ Responsive mobile

## Cara Kustomisasi

| Yang ingin diubah | Lokasi |
|---|---|
| Nama brand | `index.html` → `.logo-text` |
| Harga menu | `index.html` → `.card-price` |
| Nomor WhatsApp | `index.html` → `href="https://wa.me/62..."` |
| Warna utama | `style.css` → `:root { --red: ...; }` |
| Alamat & jam buka | `index.html` → section `#kontak` |
