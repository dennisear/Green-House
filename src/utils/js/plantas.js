//------------------------------------ACCORDION------------------------------------
let btnItems = document.querySelectorAll(".item .btn-item") //Select accordion elements

for (let i = 0; i < btnItems.length; i++) {  //Loops through the elements
  btnItems[i].addEventListener("click", function (e) {
    let btn = e.target; //Variable in which the element that was clicked is saved
    if (btn.className == "btn-item active") { //Button active class
      removeClase() // The content is hidden
    } else {
      removeClase() 
      btn.classList.add("active")
    }
  })
}
function removeClase() { //Show an option and hide the previously selected option
  for (let i = 0; i < btnItems.length; i++) {  //Loops through the elements
    btnItems[i].classList.remove("active") 

  }
}

//------------------------------------ SLIDER PAGE: PLANTAS------------------------------------
let slideIndex = 1;
showSlides(slideIndex); //Show slider 1
function plusSlides(n) { // Previous / Next controls
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

// -- PLANTAS ANUALES --
modal = modals('16', 'AFELANDRA', '46', '47', '48', 'Las hojas son grandes, de color verde y con vetas blancas. Tienen unas inflorescencias de color amarillo que duran, aproximadamente, seis semanas y su tallo es leñoso en la base y herbáceo en el extremo.', 'Planta tropical arbustiva originaria de Brasil (Minas Gerais, Pernambuco, Rio de Janeiro y Sao Paulo) donde vive en el húmedo sotobosque.', 'Su precio apróximado es de COP17,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('17', 'BEGONIA BIG', '49', '50', '51', 'Son plantas terrestres (a veces epífitas) herbáceas, algunas de porte semiarbustivo o incluso pequeños árboles y otras trepadoras, perennes excepto en climas fríos, es el aérea donde la planta muere.', 'Son oriundas de las regiones tropicales y subtropicales de América, África y Asia.', 'Su precio apróximado es COP11,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('18', 'BEGONIA BIG', '52', '53', '54', 'Sus hojas son simples, normalmente palmatidivididas, a veces casi enteras y dentadas, estipuladas -estípulas libres o soldadas, papiráceas-, pecioladas. Las hojas basales se disponen generalmente formando una roseta; las hojas caulinares, alternas u opuestas.', 'Su hábitat comprende todas las regiones templadas del mundo incluidas las zonas montañosas de los trópicos, aunque se encuentran mayoritariamente en la región oriental del Mediterráneo.', 'Su precio apróximado es COP17,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('19', 'KALANCHOE', '55', '56', '57', 'Las formas de las hojas varían según la especie, generalmente carnosas con cubierta cérea, de color verde medio a oscuro; en algunas especies pubescentes; con bordes serrados, crenados o dentados, raramente enteras.', 'Nativas del Viejo Mundo aunque unas cuantas han sido introducidas en el Nuevo Mundo y crecen en estado silvestre.', 'Su precio apróximado es COP11,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('20', 'NOVIO', '58', '59', '60', 'La planta mide entre 90 y 120 cm. y tiene numerosos ramilletes de pequeñas flores de 3-10 mm de diámetro con cinco pétalos blancos. Florece durante el verano, aunque en las regiones tropicales se cultiva durante todo el año con excepción del invierno, pues es sensible a las temperaturas bajas.', 'Es originaria de Europa Oriental, Siberia y Asia Central, y vive en las estepas en suelos secos, arenosos y pedregosos, a menudo calizos al igual que otras especies del género Gypsophila (que significa "amante del yeso").', 'Su precio apróximado es COP13,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('21', 'NUEVA GUINEA', '61', '62', '63', 'Las flores varían mucho debido a la gran cantidad de variedades que hay. La Alegría guineana debe cultivarse en exposiciones con claridad pero sin sol directo o en semisombra.', 'Es originaria de Nueva Guinea, y es una de las fuentes de los populares híbridos de impatiens de Nueva Guinea. Fue la primera de las especies de Nueva Guinea, recogida en Papúa Nueva Guinea en 1884 por el teniente Hawker R.N.', 'Su precio apróximado es COP14,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- BROMELIAS --
modal = modals('22', 'BROMELIA DAVINE', '64', '65', '66', 'La flor de la Bromelia dura entre tres y seis meses. Cuando la Bromelia se marchita, ha llegado el momento de comprar una nueva, porque la Bromelia solo florece una vez.', 'Originarias principalmente de América; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de África (Pitcairnia feliciana) Muchas de ellas están dejando de existir (está en peligro de extinción ) en el Perú.', 'Su precio apróximado es COP51,750')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('23', 'BROMELIA GUZMANIA', '67', '68', '69', 'La Bromelia es una planta parásita muy fuerte y fácil de mantener su durabilidad  es de aproximadamente tres a seis meses. Este tipo de plantas se debe poner en un lugar con abundante  luz indirecta  y ponle agua regularmente entre sus hojas. Agregar abono para plantas a su agua no es necesario.', 'Originarias principalmente de América; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de África (Pitcairnia feliciana) Muchas de ellas están dejando de existir (está en peligro de extinción ) en el Perú.',  'Su precio apróximado es COP87,400')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('24', 'BROMELIA GUZMANIA JAZZ', '70', '71', '72', 'Las bromelias se pueden encontrar en tantas variedades y colores, incluso es muy posible que la selección vaya cambiando cada semana. En otras palabras, esta es una planta que siempre está disponible, o dicho de forma profesional: son plantas de disponibilidad permanente. Por eso podemos afirmar que la mejor estación para las bromelia es todo el tiempo.', 'Originarias principalmente de América; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de África (Pitcairnia feliciana) Muchas de ellas están dejando de existir (está en peligro de extinción ) en el Perú.', 'Su precio apróximado es COP87,400')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- BONSÁIS --
modal = modals('25', 'GUAYACÁN', '73', '74', '75', 'Lento crecimiento que alcanza 5-20 metros de altura con la copa redondeada, muy frondosa, por lo que resulta ideal como árbol de sombra. El tronco resquebrajado provee el verdadero lignum vitae, una madera muy dura.', 'Nativo de América tropical, con amplia distribución en las islas del Caribe (especialmente Jamaica, Puerto Rico, Cuba y República Dominicana), Colombia, Panamá, Venezuela y Costa Rica. Frecuentemente se encuentra en lugares llanos poco elevados y pedregosos, pero también puede formar parte del bosque seco hasta los 500m.', 'Su precio apróximado es COP86,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('26', 'JADE ROJO', '76', '77', '78', 'Es una planta de colección, diseñada para armonizar espacios de interior tales como casas u/o oficinas para darle a estos un toque mas natural y llamativo.', 'Originaria de Mozambique y algunas de las provincias sudafricanas (KwaZulu-Natal, Cabo Oriental).', 'Su precio apróximado es COP92,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('27', 'NARANJO', '79', '80', '81', 'Los bonsái naranjo son de la especie citrus, y al igual que sus hermanos de tamaño grande produce frutos. Dichos frutos son pequeñas naranjas de un color anaranjado y de un sabor más acido que la naranja común, podría compararse con el sabor del limón.', 'Crecen en climas templados y húmedos, como los mediterráneos. Crecen principalmente a menos de 400 metros de altura y además las naranjas no soportan bien las heladas.', 'Su precio apróximado es COP97,750')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- CÁCTUS Y SUCULENTAS --
modal = modals('28', 'SUCULENTA BLUE', '82', '83', '84', 'El rasgo característico de esta planta es su color azul y de la mano a su forma de roseta, la hace una planta hermosa y por eso tan popular. Su único problema es su lento crecimiento.', 'En cuanto al origen de las suculentas, podemos decir que prácticamente se encuentran en hábitats a lo largo de todo el mundo. Si bien es cierto que en su estado natural las encontraremos en zonas de escasez de agua, muchas de ellas se han naturalizado en zonas geográficas donde antes no se encontraban.', 'Su precio apróximado es COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('29', 'IVORY TOWERS', '85', '86', '87', 'Este es un suculento apilamiento único. Hojas grandes en esta belleza, que es una crassula poco común. Este híbrido Crassula "Ivory Tower" tiene hojas aterciopeladas de color verde plateado.', 'La adaptación de las suculentas les permite colonizar entornos áridos o en los que la captación de agua es limitada, aquellos que reciben poca competencia por parte de otras especies vegetales y en los que los herbívoros son escasos.', 'Su precio apróximado es COP25,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('30', 'JADE', '88', '89', '90', 'Aunque crece lentamente, esta planta es una de las más longevas y existen más de 1,400 variedades. Es conocida también como la “planta del dinero”, ya que, en la cultura china, esta simboliza la buena suerte y la abundancia económica.', 'Originalmente llamada Crassula Ovata, esta atractiva planta es originaria de Mozambique y pertenece a la familia de las suculentas, con más de 1,400 variedades.', 'Su precio apróximado es COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- HELECHOS --
modal = modals('31', 'ESPÁRRAGO', '91', '92', '93', 'La esparraguera produce diminutas flores al final del verano, casi insignificantes. Luego se transforman en bayas pequeñas, primero verdes y luego rojas cuando están maduras.', 'Florece en verano pudiendo continuar hasta principios de otoño. Ama la luz, pero no el sol directo, por lo cual la ubicación ideal es aquella en que reciba luz brillante filtrada. Admite sombra; de hecho es preferible ubicarla a la sombra antes que en sol pleno que hará amarillear su follaje.', 'Su precio apróximado es de COP17,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('32', 'ALIENTO DE NIÑO', '94', '95', '96', 'Se desempeña mejor en suelos ligeramente ácidos y ricos en materia orgánica. Se recomienda mantener el suelo húmedo, regando libremente en clima seco, aplicar un mantillo de verano para retener la humedad y fertilizar regularmente para una mejor visualización.', 'Por lo general, los helechos crecen en selvas lluviosas tropicales. También pueden hallarse en otros lugares cálidos y húmedos en los que hay abundante sombra. Muy pocas especies de helecho crecen en regiones frías y áridas.', 'Su precio apróximado es de COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('33', 'ALIENTO DE NIÑO', '97', '98', '99', 'Es un helecho de aspecto interesante con frondas alargadas y un agradable color verde-azul. Su capacidad para tolerar condiciones de poca luz y su cuidado relativamente fácil lo hacen en una gran opción para la casa.', 'Phlebodium aureum se encuentra sobre todo en los bosques tropicales de Sudamérica, aunque su área de distribución natural también se extiende a Norteamérica.', 'Su precio apróximado es COP20,700')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('34', 'PEINE', '100', '101', '102', 'No tolera ambientes secos ni calurosos. Necesita alta humedad en todo momento. No regar sobre las hojas, sino directo a la tierra o la base de la planta. Ideal para interiores. Proteger en exterior.', 'Por lo general, los helechos crecen en selvas lluviosas tropicales. También pueden hallarse en otros lugares cálidos y húmedos en los que hay abundante sombra. Muy pocas especies de helecho crecen en regiones frías y áridas.', 'Su precio apróximado es COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)