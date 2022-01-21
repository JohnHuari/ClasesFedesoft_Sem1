//DOM
//Data object model
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("ingresa tu nombre");
  /*nombreUsuario.innerHTML = "Bienvenido/a "+ nombre;
  el += sirve para concatenar datos existentes*/
  nombreUsuario.innerHTML  += nombre;
};

// Eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
