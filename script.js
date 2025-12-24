// 1. Inisialisasi Library AOS (Animate On Scroll)
// Ini membuat elemen muncul perlahan saat di-scroll
AOS.init({
    once: false,       // Animasi bisa berulang saat scroll naik-turun
    mirror: true,      // Animasi berfungsi saat scroll ke atas
    duration: 1000,    // Durasi animasi (ms)
    offset: 100        // Jarak dari bawah layar sebelum animasi mulai
});


// 2. Efek Mengetik (Typewriter Effect) untuk Deskripsi
// Ini membuat teks muncul seolah-olah sedang diketik manual
const textElement = document.querySelector('.description');
const textToType = "The best way to explain about what I'm doing. Building digital experiences with code and creativity.";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        // Hapus isi awal HTML dulu jika baru mulai
        if(index === 0) textElement.innerHTML = ""; 
        
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Kecepatan mengetik (makin kecil makin cepat)
    }
}

// Jalankan efek mengetik setelah halaman selesai dimuat (delay sedikit agar animasi fade-up selesai dulu)
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1500); 
});


// 3. Efek 3D Tilt pada Glass Card (Skill Section)
// Membuat kartu skill bergerak mengikuti arah mouse (Tanpa library tambahan)
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posisi X mouse dalam kartu
        const y = e.clientY - rect.top;  // Posisi Y mouse dalam kartu
        
        // Hitung rotasi berdasarkan posisi mouse
        const xRotation = -((y - rect.height / 2) / 10); 
        const yRotation = (x - rect.width / 2) / 10;
        
        // Terapkan transformasi CSS via JS
        card.style.transform = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        card.style.borderColor = '#7f42a7'; // Ubah warna border saat hover
    });

    // Reset posisi saat mouse keluar
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});


// 4. Smooth Scroll untuk Link Navigasi (Backup jika CSS smooth scroll tidak jalan di browser lama)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});