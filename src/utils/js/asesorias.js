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
