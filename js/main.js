// IMG ARRAY
let images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp", 
]

let activeItems = 0;

// VARIABILI GENERALI
let items = document. querySelector(".item");

// NAVIGAZIONE
const next = document.querySelector(".next");
items.classList.add("active");

for (let i = 0; i < images.length; i++){
  items.innerHTML+=`<img src="${images[i]}">`
 }
