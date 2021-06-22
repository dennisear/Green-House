//------------------------------------FUNCIONES PARA MOSTRAR Y OCULTAR EL CONTENIDO ------------------------------------

let btnItems = document.querySelectorAll(".item .btn-item") //Seleccionar elementos del acordeón

for(let i=0; i<btnItems.length; i++){  //Recorre los elementos, para que se abra el acordeón
   //console.log() --Para ver si el bucle funciona
   
    btnItems[i].addEventListener("click", function(e){
      //console.log(e.target)  --Para ver el elemento en el que se da click
   
        let btn = e.target; //Variable en la que se guarda el elemento en el que se hizo click
        
        if (btn.className=="btn-item active"){ //Clase activa del boton
            removeClase() // Se oculta el contenido
        } else {
            removeClase() //Se  también el contenido
            btn.classList.add("active")
        }
    })
//        if (btn.className=="btn-item active"){ //Clase activa del boton
//          btn.classList.remove("active") // Se muestra el contenido
//        } else{
//          btn.classList.add("active") //Se oculta el contenido
//        }
//    })
}

//------------------------------------FUNCIÓN PARA MOSTRAR Y OCULTAR EL CONTENIDO DE UN ELEMENTO A LA VEZ------------------------------------
function removeClase(){

    for(let i=0; i<btnItems.length; i++){  //Recorre los elementos, para que se abra el acordeón
        btnItems[i].classList.remove("active") //Se muestra el contenido
    }
}