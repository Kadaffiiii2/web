// Validasi Form Kontak
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name && email && category && message) {
        responseMessage.textContent = `Pesan Anda (${category}) berhasil dikirim!`;
        responseMessage.style.color = "#4CAF50";
        this.reset();
    } else {
        responseMessage.textContent = "Harap isi semua bidang!";
        responseMessage.style.color = "#FF5733";
    }
});

// Fungsi pencarian
document.getElementById("searchButton")?.addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!query) return;

    let results = [];

    // Cek di daftar buku
    document.querySelectorAll(".book-card").forEach(card => {
        const title = card.querySelector(".book-title").textContent.toLowerCase();
        if (title.includes(query)) results.push(card);
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

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const loginMsg = document.getElementById("loginMessage");

    if (username === "" || password === "") {
        loginMsg.textContent = "Username dan password harus diisi!";
        loginMsg.style.color = "red";
    } else if (username === "admin" && password === "1234") {
        loginMsg.textContent = "Login berhasil!";
        loginMsg.style.color = "green";
        this.reset();
    } else {
        loginMsg.textContent = "Username atau password salah!";
        loginMsg.style.color = "red";
    }
});
