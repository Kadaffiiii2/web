const books = [
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "Pendekatan hidup dengan menerima keterbatasan dan ketidaksempurnaan.",
    cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    file: "https://drive.google.com/file/d/1MmDJxq5Ai79g2K8Hg-YwuVOvKP4qb8mT/view?usp=drivesdk"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description: "Pelajaran keuangan dari dua figur ayah yang berbeda.",
    cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    file: "https://drive.google.com/file/d/1MkWfM-S075XMs_tHclD340QiJN_210NL/view?usp=sharing"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "Formula sukses berdasarkan pola pikir dan kebiasaan.",
    cover: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    file: "https://drive.google.com/file/d/1MkdhNi-LzfK5pBekQ4PxRQFwYD8k7Bc1/view?usp=sharing"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Membangun kebiasaan baik dari hal-hal kecil.",
    cover: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    file: "https://drive.google.com/file/d/1MrzVmz8G2gJ4R6PJWxtfwwJVnCww7BDK/view?usp=sharing"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "Sejarah singkat manusia dari awal peradaban.",
    cover: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    file: "https://drive.google.com/file/d/1Ms1l9amiEeSGSRqkh48HuM39oS-7uxRQ/view?usp=sharing"
  }
];

const events = [
  {
    title: "Lomba Karya Tulis Ilmiah & Poster",
    image: "https://i.imgur.com/7pDtl9S.jpeg",
    link: "https://www.instagram.com/p/DH5v_rsTEV6/?igsh=ajJtdzdwYWQydzUx"
  },
  {
    title: "Lomba Eco Accounting: Business Model Canvas",
    image: "https://i.imgur.com/9XhcD1B.jpeg",
    link: "https://www.instagram.com/p/DHSfJVspH0K/?igsh=bWE0Z2hibm9jbmpz"
  },
  {
    title: "Lomba Esay Nasional",
    image: "https://i.imgur.com/AeSg9va.jpeg",
    link: "https://www.instagram.com/p/DHj8wJDzdr4/?igsh=bThlamxuajZ2dHo5"
  },
  {
    title: "Lomba Video Kreatif Akuntansi",
    image: "https://i.imgur.com/uGljZYU.jpeg",
    link: "https://www.instagram.com/p/DIL8op8TGpx/?igsh=Yjh4aHBhaDI4aGwx"
  }
];

const bookList = document.getElementById("bookList");
books.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.innerHTML = `
    <h4>${book.title}</h4>
    <p><strong>${book.author}</strong></p>
    <img src="${book.cover}" alt="${book.title}" />
    <p>${book.description}</p>
    <a href="${book.file}" target="_blank">Baca Buku</a>
  `;
  bookList.appendChild(bookDiv);
});

const eventList = document.getElementById("eventList");
events.forEach(evt => {
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";
  eventDiv.innerHTML = `
    <h4>${evt.title}</h4>
    <img src="${evt.image}" alt="${evt.title}" />
    <p>🕒 09.00 - 10.00</p>
    <p>📍 Ruang Konferensi</p>
    <a href="${evt.link}" target="_blank">Lihat Detail</a>
  `;
  eventList.appendChild(eventDiv);
});
