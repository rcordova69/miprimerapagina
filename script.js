//alert("Hola este es mi Javascript");

/*let nombree="Raúl";

var nombre1="Junior"

const nombre2="Córdova";
//nombre2="Crespo";

console.log(nombree);
console.log(nombre1);
console.log(nombre2);*/

/* SELECCIONAR ELEMENTOS
let contenidoAcerca = "Acerca";
let titulo = document.querySelector(".parrafo1");
console.log(titulo);*/

//CONDICIONALES

//let contenidoAcer

/*let nombre="Pedro";
let pais="Uruguay";
let deporte="voley";

let parrafo = document.querySelector(".parrafo2");
console.log(parrafo);

function cambiarTexto(nombre, pais, deporte){
    let contenido = `Mi nombre es ${nombre}, nací en ${pais} y vivo en Lima actualmente. Me gusta mucho jugar al ${deporte} y viajar a pueblitos alrededor de mi país. Me apasiona programar para ayudar a los pequeños negocios a mejorar su rendimiento en esta era digital.`;
    return contenido;
}

parrafo.innerText= cambiarTexto(nombre, pais, deporte);*/
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carácteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});