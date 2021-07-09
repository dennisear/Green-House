//------------------------------------ACCORDION------------------------------------

function menu(content){
  switch (content) {
    case 1: 
     let contenido1 = document.getElementById("pinos")
     contenido1.classList.toggle("active")
      break;
    case 2: 
      let contenido2 = document.getElementById("palmas") 
      contenido2.classList.add("active")
      break;
    case 3: 
      let contenido3 = document.getElementById("nativos") 
      contenido3.classList.toggle("active")
      break;
    case 4: 
      let contenido4 = document.getElementById("introducidos") 
      contenido4.classList.toggle("active")
      break;
  }
}

function animar1(){
  document.getElementById("pinos").classList.toggle("active")
  document.getElementById("boton1").onclick = function (){
    animar1();
  }
}
function animar2(){
  document.getElementById("palmas").classList.toggle("active")
  document.getElementById("boton2").onclick = function (){
    animar2();
  }
}
function animar3(){
  document.getElementById("nativos").classList.toggle("active")
  document.getElementById("boton3").onclick = function (){
    animar3();
  }
}
function animar4(){
  document.getElementById("introducidos").classList.toggle("active")
  document.getElementById("boton4").onclick = function (){
    animar4();
  }
}


//------------------------------------ CONTENT OF MODALS -----------------------------------
function modals(id, title, first, second, third, description, habitat, price){ //Function that displays the template of the modals
  return `
  <div class="modal" id="modal${id}">
    <div class="modal-dialog">
        <section class="modal-header">
            <P>${title}</P>
            <button class="close-modal" aria-label="close modal" data-close> ✕ </button>
        </section>
        <section class="modal-content">
            <ul class="slider">
                <li id="slide${first}"><div class="s1">${description}</div></li>
                <li id="slide${second}"><div class="s2">${habitat}</div></li>
                <li id="slide${third}"><div class="s3">${price}</div></li>
            </ul>
            <nav class="sliderMenu">
                <ul class="menuSlider">
                    <li><a href="#slide${first}">Descripción</a></li>
                    <li><a href="#slide${second}">Distribución y hábitat</a></li>
                    <li><a href="#slide${third}">Precio apróx</a></li>
                </ul>
            </nav>
        </section>
    </div>
  </div>`
}

/*PINOS*/
modal = modals('1', 'MYROXYLON BALSAMUM', '1', '2', '3', 'El color de su resina es pardo claro a rojiza. El bálsamo es moldeable en caliente y se fractura en un patrón similar al vidrio flint cuando está frío. La resina seca tiene un complejo aroma consistente principalmente de notas de canela y de vainilla con un suave carácter floral.', 'Los árboles espontáneos abundan en Colombia y Venezuela. Los árboles se cultivan particularmente en Cuba.', 'Su precio apróximado es de COP27,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('2', 'ABIES GUATEMALESIS', '4', '5', '6', 'Es una especie arbórea que puede alcanzar una altura de 50 metros y un diámetro de 1 metro. Se localiza entre el rango altitudinal de los 2400 a los 3500 msnm, en las zonas de vida “Bosque Muy Húmedo Montano Subtropical', 'Natural de Centroamérica se encuentra en el sur de México, Guatemala, norte de Honduras y en el sur de El Salvador. Debido a la pérdida de su hábitat, se encuentra catalogada como especie en peligro de extinción.', 'Su precio apróximado es COP243,581')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('3', 'PINACEAE', '7', '8', '9', 'Se trata de un género de árboles siempre verdes y gran parte de ellos se caracteriza por poseer grandes dimensiones, es poco común encontrar especies arbustivas. Los pinos son plantas monoicas. La disposición de las ramas le otorga una forma piramidal a la copa. Las hojas se disponen en macroblastos y braquiblastos', 'La mayoría de los pinos habitan en bosques templados, crecen en áreas que tienen suficiente humedad. Éstas especies forman los bosques templados. Algunos actores aseguran que en México existen hasta 70 especies y subespecies del genero pinus.', 'Su precio apróximado es COP250,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('4', 'CUPRESSUS', '10', '11', '12', '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam autem reprehenderit officiis modi earum harum similique accusamus ipsa sint! Doloremque obcaecati ad cumque placeat tempore architecto, aspernatur esse quisquam! Voluptates!', '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam autem reprehenderit officiis modi earum harum similique accusamus ipsa sint! Doloremque obcaecati ad cumque placeat tempore architecto, aspernatur esse quisquam! Voluptates!', 'Su precio apróximado es COP00,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

/* PALMAS */
modal = modals('5', 'ASTROCARYUM ALATUM', '13', '14', '15', 'Tiene tallos solitarios, con troncos que alcanzan los 4–6 m de alto y 20–30 cm de diámetro. Las hojas de 9–15, 6–7 m de largo, ampliamente patentes; pinnas unas 100 a cada lado, más o menos arregladas regularmente y patentes en el mismo plano, segmentos terminales confluentes a bífidos. Frutos subglobosos a ovoides, de 6–7 cm de largo y 4–5 cm de diámetro, de color café-amarillos, laxamente cubiertos de espinas negras', 'Es común en bosques alterados, pastizales o bosques maduros. Se distribuyen por la zona atlántica de Nicaragua, Honduras a Colombia a una altura de 15–400 m. Su floración se produce durante todo el año.', 'Su precio apróximado es COP252,047')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('6', 'EUTERPE OLERACEA', '16', '17', '18', 'También es conocida con el nombre de palma manaca. Crece en el norte de Brasil, Guyana Francesa, Surinam, Guyana, Trinidad y Venezuela y en el Magdalena Medio y la región del Pacífico en Colombia. Su consumo data de tiempos precolombinos y es un alimento muy importante en la dieta amazónica. El cultivo intensivo del asaí se ha extendido dentro del territorio brasileño, durante los años 1980 y 1990.', 'Crece en bosques húmedos de las tierras bajas, en zonas inundables cerca de las riberas de los ríos.Es propia del Andén Pacífico, donde se conoce como palma murrapo o naidí y forma extensas asociaciones en las vegas inundables de los ríos, a menos de 100 m de altitud.', 'Su precio apróximado es COP332,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('7', 'BACTRIS GASIPAES', '19', '20', '21', 'La planta llega a medir hasta 20 metros de alto, es nativa de las regiones tropicales y subtropicales de América. Se aprovecha su fruto, una drupa de gran valor alimentario, su madera y el cogollo tierno, que se cosecha para extraer palmito.', 'Es frecuente encontrarla en la Amazonia. Crece bien en asociaciones, por ejemplo como sombra de café, cacao, árbol de pan y cítricos. Fue plantada desde épocas precolombinas por los indígenas. Hay numerosas variedades incluso sin espinas y una sin semilla.', 'Su precio apróximado es COP461,214')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('8', 'SABAL MAURITIIFORMIS', '22', '23', '24', 'El tronco suele ser verde durante algún tiempo.El peciolo de la hoja llega a alcanzar más de tres metros de largo. Es de crecimiento lento, pudiendo tardar unos doce años antes de mostrar su tallo; pero ya antes resulta decorativa.Vegeta tanto en zonas húmedas como secas, e incluso se desarrolla en suelos calizos.Posee fruto negro, de 8 a 11 mm en diámetro.', 'Las especies son nativas de las regiones tropicales templadas a cálidas del Nuevo Mundo, desde el sureste de Estados Unidos al sur a través del Mar Caribe, México y Centroamérica hasta Colombia y Venezuela en el norte de América del Sur.', 'Su precio apróximado es COP350,854')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

/* NATIVOS */
modal = modals('9', 'SALIX HUMBOLDTIANA WILD', '25', '26', '27', 'Todos los sauces tienen la corteza acuosa; la madera es dura, flexible y normalmente suave. Poseen esbeltas y fibrosas ramas y a menudo raíces estoloníferas, cuyas características más notables son su dureza, largura y resistencia. También desarrollan fácilmente raíces aéreas.', 'En Colombia presente tanto en zonas montañosas como a lo largo de los ríos de zonas bajas (Cauca, Magdalena, Amazonas), entre 0 y 2900 m.', 'Su precio apróximado es COP56,627')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('10', 'FICUS SOATENSIS', '28', '29', '30', 'Nace como epifita sobre troncos y ramas de otros árboles. A medida que va creciendo tiende a desarrollar raíces aéreas y contrafuertes para anclarse al suelo y suele terminar estrangulando a su anfitrión, por lo que forma parte del grupo de los ficus estranguladores.', 'Bosque Andino, Soata (Boyaca, Colombia) desde los 1800-3000 msnm.', 'Su precio apróximado es COP356,991')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('11', 'BIGNONIACEAE', '31', '32', '33', 'La componen primordialmente árboles, arbustos, lianas, y unas pocas hierbas. Los miembros de la familia se distribuyen ampliamente, tanto en el viejo mundo como en el nuevo mundo, distribuidos mayormente en los trópicos y subtrópicos, pero además con un número de especies de zonas templadas. La familia incluye unas 650 especies en 110 géneros.', 'En Colombia se ha plantado en los departamentos de Antioquia, Cauca, Putumayo y Nariño, en este último en el valle de Sibundoy; en el departamento de Cundinamarca se observa en los municipios que conforman la Sabana de Bogotá y sus alrededores.', 'Su precio apróximado es COP290,248')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('12', 'BRUGMANSIA ARBOREA', '34', '35', '36', 'Son arbustos o pequeños árboles que alcanzan alturas de 3 a 11 metros. Las hojas son alternas, generalmente largas de 10 a 30 cm y con una anchura de 4 a 18 cm con bordes enteros o someramente dentados, a menudo con base del limbo asimétrica, y cubiertas de finas vellosidades.', 'A lo largo de los Andes de Colombia hasta el norte de Chile e incluso el sudeste de Brasil, se han descrito unas sesenta especies, de las cuales solo una decena, incluidos los híbridos, están aceptadas.', 'Su precio apróximado es COP70,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

/* INTRODUCIDOS */
modal = modals('13', 'ELAEIS GUINEENSIS', '37', '38', '39', 'Como todas las especies de su género Elaeis tiene un tronco (estipe) alto y único. Las inflorescencias se producen en las axilas de las hojas, las cuales son grandes y de tipo pinnado compuesto, con folíolos que parten desde el raquis sobre dos planos regulares. Los folíolos son lanceolados.', 'Es una planta propia de la región tropical calurosa (selva húmeda tropical cálida), crece a altitudes por debajo de los 500 msnm, aunque se desarrolla bien en regiones pantanosas.', 'Su precio apróximado es COP756,738')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('14', 'ELAEIS GUINEENSIS', '40', '41', '42', 'Como todas las especies de su género Elaeis tiene un tronco (estipe) alto y único. Las inflorescencias se producen en las axilas de las hojas, las cuales son grandes y de tipo pinnado compuesto, con folíolos que parten desde el raquis sobre dos planos regulares. Los folíolos son lanceolados.', 'Es una planta propia de la región tropical calurosa (selva húmeda tropical cálida), crece a altitudes por debajo de los 500 msnm, aunque se desarrolla bien en regiones pantanosas.', 'Su precio apróximado es COP756,738')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('15', 'ELAEIS GUINEENSIS', '43', '44', '45', 'Como todas las especies de su género Elaeis tiene un tronco (estipe) alto y único. Las inflorescencias se producen en las axilas de las hojas, las cuales son grandes y de tipo pinnado compuesto, con folíolos que parten desde el raquis sobre dos planos regulares. Los folíolos son lanceolados.', 'Es una planta propia de la región tropical calurosa (selva húmeda tropical cálida), crece a altitudes por debajo de los 500 msnm, aunque se desarrolla bien en regiones pantanosas.', 'Su precio apróximado es COP756,738')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)


//------------------------------------MODAL OPERATION-----------------------------------

const openEls = document.querySelectorAll("[data-open]"); //Constant to open the modal
const closeEls = document.querySelectorAll("[data-close]"); //Constant to close the modal
const isVisible = "is-visible";

for (const el of openEls) { //Constant to make the modal visible
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
for (const el of closeEls) { //Constant to close the modal when the required button is clicked
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
document.addEventListener("click", e => { //Close the modal when clicking outside of it
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.addEventListener("keyup", e => { //Close the modal when the ESC key is pressed
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});