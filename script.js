// Ambil elemen tombol hamburger dan navigasi
const hamburger = document.querySelector(".hamburger input");
const navMenu = document.querySelector("nav ul");

// Tambahkan event listener ke tombol hamburger
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
console.log(navMenu);
