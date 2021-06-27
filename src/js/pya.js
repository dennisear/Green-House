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

//-------Mostrar y ocultar el contenido de uno a la vez-------
function removeClase() {

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