//DOM
//Data object model
let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
  let nombre = prompt("ingresa tu nombre");
  alert("Tu nombre es: " + nombre);
};

// Eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
