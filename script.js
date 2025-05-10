// script.js

// Fungsi untuk toggle menu dropdown
document.querySelectorAll('nav li').forEach(function(menuItem) {
  menuItem.addEventListener('mouseenter', function() {
    let submenu = this.querySelector('ul');
    if (submenu) submenu.style.display = 'block';
  });

  menuItem.addEventListener('mouseleave', function() {
    let submenu = this.querySelector('ul');
    if (submenu) submenu.style.display = 'none';
  });
});

// Fungsi untuk menampilkan alert pada menu "Contact Us"
const contactMenu = document.querySelector('nav a[href="#contact"]');
if (contactMenu) {
  contactMenu.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Silakan hubungi kami melalui email: perpustakaan@kadaffi.ac.id");
  });
}

// Fungsi menyambut pengguna saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  console.log("Selamat datang di Perpustakaan Kadaffi!");
});
