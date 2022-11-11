// IMG ARRAY
const image = [
  "01.webp","02.webp","03.webp","04.webp","05.webp", 
]

// VARIABILI GENERALI
const items = document.getElementsByClassName("item");

let activeItems = 0;



// NAVIGAZIONE
const next = document.querySelector(".next");

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