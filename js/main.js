// IMG ARRAY
const image = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp", 
]
// console.log(image)
let activeItems = 0;

// VARIABILI GENERALI
const items = document.getElementsByClassName("item");

// NAVIGAZIONE
const next = document.querySelector(".next");

// LOOP
for(let i = 0; i < image.length; i++) {
  
}

next.addEventListener("click",
function() {

  if (activeItems < items.length - 1){
    // RIMUOVERE CLASSE ACTIVE ALL'IMG SELEZIONATA
    items[activeItems].classList.remove("active");

    // INCREMENTO INDICE DELL'IMG DA VISUALIZZARE
    activeItems ++;

    // AGGIUNGERE CLASSE ACTIVE ALLA PROSSIMA IMG
    items[activeItems].classList.add("active");
  }

  if (activeItems === items.length - 1){
    // ALL'ULTIMA IMG DEL CAROUSEL RIMUOVERE FRECCIA
    next.classList.add("hidden");
  }
}
);