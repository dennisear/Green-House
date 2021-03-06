//------------------------------------ACCORDION------------------------------------
function men(content){
  switch (content) {
    case 1: 
      let content1 = document.getElementById("pa")
      content1.classList.toggle("active")
      break;
    case 2: 
      let content2 = document.getElementById("bro") 
      content2.classList.add("active")
      break;
    case 3: 
      let content3 = document.getElementById("bon") 
      content3.classList.toggle("active")
      break;
    case 4: 
      let content4 = document.getElementById("cs") 
      content4.classList.toggle("active")
      break;
    case 5: 
      let content5 = document.getElementById("phel") 
      content5.classList.toggle("active")
      break;
  }
}

function anim1(){
  document.getElementById("pa").classList.toggle("active")
  document.getElementById("but1").onclick = function (){
    anim1();
  }
}
function anim2(){
  document.getElementById("bro").classList.toggle("active")
  document.getElementById("but2").onclick = function (){
    anim2();
  }
}
function anim3(){
  document.getElementById("bon").classList.toggle("active")
  document.getElementById("but3").onclick = function (){
    anim3();
  }
}
function anim4(){
  document.getElementById("cs").classList.toggle("active")
  document.getElementById("but4").onclick = function (){
    anim4();
  }
}
function anim5(){
  document.getElementById("phel").classList.toggle("active")
  document.getElementById("but5").onclick = function (){
    anim4();
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

//------------------------------------ CONTENT OF MODALS -----------------------------------
function modals(id, title, first, second, third, description, habitat, price){ //Function that displays the template of the modals
  return `
  <div class="modal" id="modal${id}">
    <div class="modal-dialog">
        <section class="modal-header">
            <P>${title}</P>
            <button class="close-modal" aria-label="close modal" data-close> ??? </button>
        </section>
        <section class="modal-content">
            <ul class="slider">
                <li id="slide${first}"><div class="s1">${description}</div></li>
                <li id="slide${second}"><div class="s2">${habitat}</div></li>
                <li id="slide${third}"><div class="s3">${price}</div></li>
            </ul>
            <nav class="sliderMenu">
                <ul class="menuSlider">
                    <li><a href="#slide${first}">Descripci??n</a></li>
                    <li><a href="#slide${second}">Distribuci??n y h??bitat</a></li>
                    <li><a href="#slide${third}">Precio apr??x</a></li>
                </ul>
            </nav>
        </section>
    </div>
  </div>`
}

// -- PLANTAS ANUALES --
modal = modals('16', 'AFELANDRA', '46', '47', '48', 'Las hojas son grandes, de color verde y con vetas blancas. Tienen unas inflorescencias de color amarillo que duran, aproximadamente, seis semanas y su tallo es le??oso en la base y herb??ceo en el extremo.', 'Planta tropical arbustiva originaria de Brasil (Minas Gerais, Pernambuco, Rio de Janeiro y Sao Paulo) donde vive en el h??medo sotobosque.', 'Su precio apr??ximado es de COP17,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('17', 'BEGONIA BIG', '49', '50', '51', 'Son plantas terrestres (a veces ep??fitas) herb??ceas, algunas de porte semiarbustivo o incluso peque??os ??rboles y otras trepadoras, perennes excepto en climas fr??os, es el a??rea donde la planta muere.', 'Son oriundas de las regiones tropicales y subtropicales de Am??rica, ??frica y Asia.', 'Su precio apr??ximado es COP11,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('18', 'BEGONIA BIG', '52', '53', '54', 'Sus hojas son simples, normalmente palmatidivididas, a veces casi enteras y dentadas, estipuladas -est??pulas libres o soldadas, papir??ceas-, pecioladas. Las hojas basales se disponen generalmente formando una roseta; las hojas caulinares, alternas u opuestas.', 'Su h??bitat comprende todas las regiones templadas del mundo incluidas las zonas monta??osas de los tr??picos, aunque se encuentran mayoritariamente en la regi??n oriental del Mediterr??neo.', 'Su precio apr??ximado es COP17,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('19', 'KALANCHOE', '55', '56', '57', 'Las formas de las hojas var??an seg??n la especie, generalmente carnosas con cubierta c??rea, de color verde medio a oscuro; en algunas especies pubescentes; con bordes serrados, crenados o dentados, raramente enteras.', 'Nativas del Viejo Mundo aunque unas cuantas han sido introducidas en el Nuevo Mundo y crecen en estado silvestre.', 'Su precio apr??ximado es COP11,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('20', 'NOVIO', '58', '59', '60', 'La planta mide entre 90 y 120 cm. y tiene numerosos ramilletes de peque??as flores de 3-10 mm de di??metro con cinco p??talos blancos. Florece durante el verano, aunque en las regiones tropicales se cultiva durante todo el a??o con excepci??n del invierno, pues es sensible a las temperaturas bajas.', 'Es originaria de Europa Oriental, Siberia y Asia Central, y vive en las estepas en suelos secos, arenosos y pedregosos, a menudo calizos al igual que otras especies del g??nero Gypsophila (que significa "amante del yeso").', 'Su precio apr??ximado es COP13,500')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('21', 'NUEVA GUINEA', '61', '62', '63', 'Las flores var??an mucho debido a la gran cantidad de variedades que hay. La Alegr??a guineana debe cultivarse en exposiciones con claridad pero sin sol directo o en semisombra.', 'Es originaria de Nueva Guinea, y es una de las fuentes de los populares h??bridos de impatiens de Nueva Guinea. Fue la primera de las especies de Nueva Guinea, recogida en Pap??a Nueva Guinea en 1884 por el teniente Hawker R.N.', 'Su precio apr??ximado es COP14,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- BROMELIAS --
modal = modals('22', 'BROMELIA DAVINE', '64', '65', '66', 'La flor de la Bromelia dura entre tres y seis meses. Cuando la Bromelia se marchita, ha llegado el momento de comprar una nueva, porque la Bromelia solo florece una vez.', 'Originarias principalmente de Am??rica; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de ??frica (Pitcairnia feliciana) Muchas de ellas est??n dejando de existir (est?? en peligro de extinci??n ) en el Per??.', 'Su precio apr??ximado es COP51,750')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('23', 'BROMELIA GUZMANIA', '67', '68', '69', 'La Bromelia es una planta par??sita muy fuerte y f??cil de mantener su durabilidad  es de aproximadamente tres a seis meses. Este tipo de plantas se debe poner en un lugar con abundante  luz indirecta  y ponle agua regularmente entre sus hojas. Agregar abono para plantas a su agua no es necesario.', 'Originarias principalmente de Am??rica; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de ??frica (Pitcairnia feliciana) Muchas de ellas est??n dejando de existir (est?? en peligro de extinci??n ) en el Per??.',  'Su precio apr??ximado es COP87,400')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('24', 'BROMELIA GUZMANIA JAZZ', '70', '71', '72', 'Las bromelias se pueden encontrar en tantas variedades y colores, incluso es muy posible que la selecci??n vaya cambiando cada semana. En otras palabras, esta es una planta que siempre est?? disponible, o dicho de forma profesional: son plantas de disponibilidad permanente. Por eso podemos afirmar que la mejor estaci??n para las bromelia es todo el tiempo.', 'Originarias principalmente de Am??rica; desde el norte de Estados Unidos, hasta Argentina, y una especie en el oeste de ??frica (Pitcairnia feliciana) Muchas de ellas est??n dejando de existir (est?? en peligro de extinci??n ) en el Per??.', 'Su precio apr??ximado es COP87,400')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- BONS??IS --
modal = modals('25', 'GUAYAC??N', '73', '74', '75', 'Lento crecimiento que alcanza 5-20 metros de altura con la copa redondeada, muy frondosa, por lo que resulta ideal como ??rbol de sombra. El tronco resquebrajado provee el verdadero lignum vitae, una madera muy dura.', 'Nativo de Am??rica tropical, con amplia distribuci??n en las islas del Caribe (especialmente Jamaica, Puerto Rico, Cuba y Rep??blica Dominicana), Colombia, Panam??, Venezuela y Costa Rica. Frecuentemente se encuentra en lugares llanos poco elevados y pedregosos, pero tambi??n puede formar parte del bosque seco hasta los 500m.', 'Su precio apr??ximado es COP86,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('26', 'JADE ROJO', '76', '77', '78', 'Es una planta de colecci??n, dise??ada para armonizar espacios de interior tales como casas u/o oficinas para darle a estos un toque mas natural y llamativo.', 'Originaria de Mozambique y algunas de las provincias sudafricanas (KwaZulu-Natal, Cabo Oriental).', 'Su precio apr??ximado es COP92,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('27', 'NARANJO', '79', '80', '81', 'Los bons??i naranjo son de la especie citrus, y al igual que sus hermanos de tama??o grande produce frutos. Dichos frutos son peque??as naranjas de un color anaranjado y de un sabor m??s acido que la naranja com??n, podr??a compararse con el sabor del lim??n.', 'Crecen en climas templados y h??medos, como los mediterr??neos. Crecen principalmente a menos de 400 metros de altura y adem??s las naranjas no soportan bien las heladas.', 'Su precio apr??ximado es COP97,750')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- C??CTUS Y SUCULENTAS --
modal = modals('28', 'SUCULENTA BLUE', '82', '83', '84', 'El rasgo caracter??stico de esta planta es su color azul y de la mano a su forma de roseta, la hace una planta hermosa y por eso tan popular. Su ??nico problema es su lento crecimiento.', 'En cuanto al origen de las suculentas, podemos decir que pr??cticamente se encuentran en h??bitats a lo largo de todo el mundo. Si bien es cierto que en su estado natural las encontraremos en zonas de escasez de agua, muchas de ellas se han naturalizado en zonas geogr??ficas donde antes no se encontraban.', 'Su precio apr??ximado es COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('29', 'IVORY TOWERS', '85', '86', '87', 'Este es un suculento apilamiento ??nico. Hojas grandes en esta belleza, que es una crassula poco com??n. Este h??brido Crassula "Ivory Tower" tiene hojas aterciopeladas de color verde plateado.', 'La adaptaci??n de las suculentas les permite colonizar entornos ??ridos o en los que la captaci??n de agua es limitada, aquellos que reciben poca competencia por parte de otras especies vegetales y en los que los herb??voros son escasos.', 'Su precio apr??ximado es COP25,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('30', 'JADE', '88', '89', '90', 'Aunque crece lentamente, esta planta es una de las m??s longevas y existen m??s de 1,400 variedades. Es conocida tambi??n como la ???planta del dinero???, ya que, en la cultura china, esta simboliza la buena suerte y la abundancia econ??mica.', 'Originalmente llamada Crassula Ovata, esta atractiva planta es originaria de Mozambique y pertenece a la familia de las suculentas, con m??s de 1,400 variedades.', 'Su precio apr??ximado es COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)

// -- HELECHOS --
modal = modals('31', 'ESP??RRAGO', '91', '92', '93', 'La esparraguera produce diminutas flores al final del verano, casi insignificantes. Luego se transforman en bayas peque??as, primero verdes y luego rojas cuando est??n maduras.', 'Florece en verano pudiendo continuar hasta principios de oto??o. Ama la luz, pero no el sol directo, por lo cual la ubicaci??n ideal es aquella en que reciba luz brillante filtrada. Admite sombra; de hecho es preferible ubicarla a la sombra antes que en sol pleno que har?? amarillear su follaje.', 'Su precio apr??ximado es de COP17,250')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('32', 'ALIENTO DE NI??O', '94', '95', '96', 'Se desempe??a mejor en suelos ligeramente ??cidos y ricos en materia org??nica. Se recomienda mantener el suelo h??medo, regando libremente en clima seco, aplicar un mantillo de verano para retener la humedad y fertilizar regularmente para una mejor visualizaci??n.', 'Por lo general, los helechos crecen en selvas lluviosas tropicales. Tambi??n pueden hallarse en otros lugares c??lidos y h??medos en los que hay abundante sombra. Muy pocas especies de helecho crecen en regiones fr??as y ??ridas.', 'Su precio apr??ximado es de COP15,000')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('33', 'ALIENTO DE NI??O', '97', '98', '99', 'Es un helecho de aspecto interesante con frondas alargadas y un agradable color verde-azul. Su capacidad para tolerar condiciones de poca luz y su cuidado relativamente f??cil lo hacen en una gran opci??n para la casa.', 'Phlebodium aureum se encuentra sobre todo en los bosques tropicales de Sudam??rica, aunque su ??rea de distribuci??n natural tambi??n se extiende a Norteam??rica.', 'Su precio apr??ximado es COP20,700')
document.querySelector('.list-container').insertAdjacentHTML('afterend', modal)
modal = modals('34', 'PEINE', '100', '101', '102', 'No tolera ambientes secos ni calurosos. Necesita alta humedad en todo momento. No regar sobre las hojas, sino directo a la tierra o la base de la planta. Ideal para interiores. Proteger en exterior.', 'Por lo general, los helechos crecen en selvas lluviosas tropicales. Tambi??n pueden hallarse en otros lugares c??lidos y h??medos en los que hay abundante sombra. Muy pocas especies de helecho crecen en regiones fr??as y ??ridas.', 'Su precio apr??ximado es COP15,000')
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