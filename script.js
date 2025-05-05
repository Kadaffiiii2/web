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
        const tracks = [
  {
    title: "1. Paragraphs - Luke Chiang",
    spotifyId: "3Db7xz96RCGC1zEUpvyvAJ"
  },
  {
    title: "2. Shouldn't Be - Luke Chiang",
    spotifyId: "0sQLnDvAFf0drVRxE7C4Da"
  },
  {
    title: "3. Anchor - Novo Amor",
    spotifyId: "6sDQmWvMLwFgJCI6vnzPFZ"
  },
  {
    title: "4. Bundle of Joy - Michael Giacchino",
    spotifyId: "1r3OsSUJrJ0OfZKx6DJVg6"
  },
  {
    title: "5. Lights Are On - Tom Rosenthal",
    spotifyId: "7muTWZKEhzOuV2a5h7cXDL"
  }
];

const playlistContainer = document.getElementById("playlist");

tracks.forEach((track) => {
  const trackDiv = document.createElement("div");
  trackDiv.className = "track";

  const title = document.createElement("div");
  title.className = "track-title";
  title.textContent = track.title;

  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator`;
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.loading = "lazy";

  trackDiv.appendChild(title);
  trackDiv.appendChild(iframe);
  playlistContainer.appendChild(trackDiv);
});

    }
});
