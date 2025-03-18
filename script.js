document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name && email && category && message) {
        responseMessage.textContent = `Pesan Anda (${category}) berhasil dikirim!`;
        responseMessage.style.color = "#4CAF50";

        // Reset form setelah sukses
        document.getElementById("contactForm").reset();
    } else {
        responseMessage.textContent = "Harap isi semua bidang!";
        responseMessage.style.color = "#FF5733";
    }
});
// Tambahkan efek hover pada menu navigasi
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseover", function() {
        this.style.color = "#FFD700"; // Warna emas saat hover
    });
    function ubahBiodata() {
    document.getElementById("nama").innerText = "Kadaffi Piliang";
    document.getElementById("nim").innerText = "220709024";
    document.getElementById("jurusan").innerText = "Perpustakaan dan Sains Informasi";
    document.getElementById("fakultas").innerText = "Ilmu Budaya";
    document.getElementById("kampus").innerText = "Universitas Sumatera Utara";
    document.getElementById("email").innerText = "kadaffipiliang09@gmail.com";
    
    alert("Biodata telah diperbarui!");
}

    link.addEventListener("mouseout", function() {
        this.style.color = "white"; // Kembali ke warna default
    });
});

// Tampilkan alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di halaman About Me - Perpustakaan Kadaffi!");
};
