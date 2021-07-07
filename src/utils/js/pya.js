

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

//------------------------------------MODAL-----------------------------------

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
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