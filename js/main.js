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

let creaImg = document.createElement("img");

creaImg.src = images[0];

items.appendChild(creaImg);

// NAVIGAZIONE
const next = document.querySelector(".next");

