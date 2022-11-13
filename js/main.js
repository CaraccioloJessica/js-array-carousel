// IMG ARRAY
let images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp", 
]

//INDEX ATTUALE
let index = 0;

// VARIABILE CONTAINER
let itemContenitore = document.querySelector(".item-container");

for (let i = 0; i < images.length; i++){
  itemContenitore.innerHTML+=
  `<div class="item" id="slide${i}">
    <img src="${images[i]}">
  </div>`
}

// IMMAGINI ATTIVE
let imgVisualizzata = document.getElementById("slide" + index);
imgVisualizzata.classList.add("active");

// NAVIGAZIONE
const up = document.querySelector(".up");
const down = document.querySelector(".down");

//  BOTTONE SU
up.addEventListener("click",
 function () {
  index++;
  if (index > 4) {
    index = images.length + 1;
  }
  imgVisualizzata.classList.remove("active");
  imgVisualizzata = document.getElementById("slide" + index);
  imgVisualizzata.classList.add("active");  
  }
);

// BOTTONE GIU
down.addEventListener("click",
function (){
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  imgVisualizzata.classList.remove("active");
  imgVisualizzata = document.getElementById("slide" + index);
  imgVisualizzata.classList.add("active");
  }
);
  