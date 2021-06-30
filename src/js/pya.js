//------------------------------------ACORDEÓN------------------------------------


//-------Mostrar y ocultar el contenido-------

let btnItems = document.querySelectorAll(".item .btn-item") //Seleccionar elementos del acordeón

for (let i = 0; i < btnItems.length; i++) {  //Recorre los elementos, para que se abra el acordeón

  btnItems[i].addEventListener("click", function (e) {
    let btn = e.target; //Variable en la que se guarda el elemento en el que se hizo click

    if (btn.className == "btn-item active") { //Clase activa del boton
      removeClase() // Se oculta el contenido
    } else {
      removeClase() //Se  también el contenido
      btn.classList.add("active")
    }
  })
}

function removeClase() { //Muestra una opción, oculta seleccionada con anterioridad

  for (let i = 0; i < btnItems.length; i++) {  //Recorre los elementos, para que se abra el acordeón
    btnItems[i].classList.remove("active") //Se muestra el contenido

  }
}



//------------------------------------SLIDER------------------------------------

let slideIndex = 1;
showSlides(slideIndex); //Muestra slider 1


function plusSlides(n) { // Controles anterior/Siguiente
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

//------------------------------------MODAL-----------------------------------

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";


const obj = [{
  key: "modal1", content: "modal1 content", P="HOLI"
}, {
  key: "modal2", content: "modal2 content"
}, {
  key: "modal3", content: "modal3 content"
}, {
  key: "modal4", content: "modal4 content"
}, {
  key: "modal5", content: "modal5 content"
}, {
  key: "modal6", content: "modal6 content"
}, {
  key: "modal7", content: "modal7 content"
}, {
  key: "modal8", content: "modal8 content"
}, {
  key: "modal9", content: "modal9 content"
}, {
  key: "modal10", content: "modal10 content"
}, {
  key: "modal11", content: "modal11 content"
}, {
  key: "modal12", content: "modal12 content"
}, {
  key: "modal13", content: "modal13 content"
}, {
  key: "modal14", content: "modal14 content"
}, {
  key: "modal14", content: "modal15 content"
}, {
  key: "modal15", content: "modal16 content"
}, {
  key: "modal16", content: "modal1 content"
}, {
  key: "modal17", content: "modal7 content"
}, {
  key: "modal18", content: "modal8 content"
}, {
  key: "modal19", content: "modal9 content"
}, {
  key: "modal20", content: "modal20 content"
}, {
  key: "modal21", content: "moda21 content"
}, {
  key: "modal22", content: "modal22 content"
}, {
  key: "modal23", content: "modal23 content"
}, {
  key: "modal24", content: "modal24 content"
}, {
  key: "modal25", content: "modal25 content"
}, {
  key: "modal26", content: "modal26 content"
}, {
  key: "modal27", content: "modal27 content"
}, {
  key: "modal28", content: "modal28 content"
}, {
  key: "modal29", content: "modal29 content"
}, {
  key: "modal30", content: "modal30 content"
}, {
  key: "modal31", content: "modal31 content"
}, {
  key: "modal32", content: "modal32 content"
}]

for (const el of openEls) {
  el.addEventListener("click", (event) => {

    const res = obj.filter(e => e.key === event.target.dataset.open)[0].content

    document.getElementById("modal1").querySelector(".modal-content").innerHTML = "this is " + res
    document.getElementById("modal1").classList.add(isVisible);

  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});