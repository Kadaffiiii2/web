// Validasi Form Kontak
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const category = document.getElementById("category")?.value;
    const message = document.getElementById("message")?.value;
    const responseMessage = document.getElementById("responseMessage");

    if (name && email && category && message) {
        if (responseMessage) {
            responseMessage.textContent = `Pesan Anda (${category}) berhasil dikirim!`;
            responseMessage.style.color = "#4CAF50";
        }
        this.reset();
    } else {
        if (responseMessage) {
            responseMessage.textContent = "Harap isi semua bidang!";
            responseMessage.style.color = "#FF5733";
        }
    }
});

// Fungsi pencarian
document.getElementById("searchButton")?.addEventListener("click", function () {
    const query = document.getElementById("searchInput")?.value.trim().toLowerCase();
    if (!query) return;

    let results = [];

    // Cek di daftar buku
    document.querySelectorAll(".book-card").forEach(card => {
        const title = card.querySelector(".book-title")?.textContent.toLowerCase();
        if (title?.includes(query)) results.push(card);
    });

    // Tampilkan hasil
    if (results.length > 0) {
        alert(`Ditemukan ${results.length} hasil untuk: "${query}"`);
        window.scrollTo({ top: results[0].offsetTop - 80, behavior: 'smooth' });
    } else {
        alert("Buku tidak ditemukan.");
    }
});

// Validasi Login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername")?.value.trim();
    const password = document.getElementById("loginPassword")?.value.trim();
    const loginMsg = document.getElementById("loginMessage");

    if (username === "" || password === "") {
        if (loginMsg) {
            loginMsg.textContent = "Username dan password harus diisi!";
            loginMsg.style.color = "red";
        }
    } else if (username === "admin" && password === "1234") {
        if (loginMsg) {
            loginMsg.textContent = "Login berhasil!";
            loginMsg.style.color = "green";
        }
        this.reset();
    } else {
        if (loginMsg) {
            loginMsg.textContent = "Username atau password salah!";
            loginMsg.style.color = "red";
        }
    }
});

// Dropdown Sidebar dengan Klik
document.querySelectorAll('.dropdown-toggle')?.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah aksi default link
        const parent = this.parentElement;
        parent.classList.toggle('active'); // Tambah/hapus class active
    });
});

// Fitur drag geser slider
function enableDragScroll(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    enableDragScroll("event-slider");
    enableDragScroll("news-slider");
});
