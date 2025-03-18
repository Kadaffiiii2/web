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
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = "☀️ Light Mode";
    } else {
        this.textContent = "🌙 Dark Mode";
    }
});
