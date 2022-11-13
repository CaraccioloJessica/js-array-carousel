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

// LOOP CHE CREA DIV CONTENENTE TAG IMG IN BASE ALLA LUNGHEZZA DELL'ARRAY
for (let i = 0; i < images.length; i++){
  itemContenitore.innerHTML+=
  `<div class="item" id="slide${i}">
    <img src="${images[i]}">
  </div>`
}

// VARIABILI IMMAGINI VISUALIZZATE
let imgVisualizzata = document.getElementById("slide" + index);
imgVisualizzata.classList.add("active");

// NAVIGAZIONE
const up = document.querySelector(".up");
const down = document.querySelector(".down");

//  BOTTONE SU CLICCATO
up.addEventListener("click",
 function () {
  // AVANZA DI 1 NELL'INDICE
  index++;
  // SE L'INDICE PASSA L'ULTIMA FOTO DELL'ARRAY
  if (index > images.length - 1) {
    // INDICE TORNA A 0
    index = 0;
  }

  // DISPLAY NONE ALL'ITEM
  imgVisualizzata.classList.remove("active");
  // AVANZA DI 1
  imgVisualizzata = document.getElementById("slide" + index);
  // DAI DISPLAY BLOCK
  imgVisualizzata.classList.add("active");  
  }
);

// BOTTONE GIU CLICCATO
down.addEventListener("click",
function (){
  // DIMINUISCE DI 1 NELL'INDICE
  index--;
  // SE INDICE ATTUALLE VA SOTTO LO 0
  if (index < 0) {
    // IMPOSTA INDICE NELL'ULTIMA FOTO DELL'ARRAY
    index = images.length - 1;
  }

  // DISPLAY NONE ALL' ITEM
  imgVisualizzata.classList.remove("active");
  // AVANZA DI 1
  imgVisualizzata = document.getElementById("slide" + index);
  // DAI DISPLAY BLOCK
  imgVisualizzata.classList.add("active");
  }
);
  