// ============================
// CHICKEN KATSU – script.js
// ============================

// 1. NAVBAR – berubah warna saat di-scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 2. HAMBURGER MENU – untuk tampilan mobile
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Tutup menu saat link diklik (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// 3. SCROLL REVEAL – elemen muncul saat di-scroll
const revealElements = document.querySelectorAll(
  '.menu-card, .varian-card, .section-header, .about-flex, .kontak-inner'
);

// Tambahkan class 'reveal' ke semua elemen target
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop observe setelah muncul
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => observer.observe(el));

// 4. TOMBOL PESAN – feedback saat diklik
document.querySelectorAll('.btn-order').forEach(btn => {
  btn.addEventListener('click', function () {
    const cardTitle = this.closest('.menu-card').querySelector('.card-title').textContent;
    const original  = this.textContent;

    // Ubah teks tombol jadi konfirmasi
    this.textContent = '✓ Ditambahkan!';
    this.style.background = '#2E7D32';

    // Tampilkan notifikasi kecil
    showToast(`🍗 ${cardTitle} ditambahkan ke pesanan!`);

    // Kembalikan ke semula setelah 2 detik
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 2000);
  });
});

// 5. TOAST NOTIFICATION – notifikasi kecil di pojok layar
function showToast(message) {
  // Hapus toast lama kalau ada
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(60px);
    background: #3D1F00;
    color: white;
    padding: 14px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    z-index: 9999;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s;
    opacity: 0;
    white-space: nowrap;
  `;
  document.body.appendChild(toast);

  // Animasi muncul
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  // Hilang otomatis
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// 6. SMOOTH ACTIVE LINK – highlight nav berdasarkan section aktif
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = '#D62828';
        }
      });
    }
  });
});

console.log('🍗 Chicken Katsu website loaded!');
