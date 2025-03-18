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
