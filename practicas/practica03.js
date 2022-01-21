/*
en un HTML vamos a tener los siguientes textos
nombre, edad,direccion,telefono,documento
tenemos boton para ingresar datos
ingresamos datos
deben salir en el HTML
agregamos localstorage
*/
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUser = document.getElementById("edadUser");
let direccionUser = document.getElementById("direccionUser");
let telefonoUser = document.getElementById("telefonoUser");
let documentoUser = document.getElementById("documentoUser");

const cambiarDatos = () => {
  let nombre = prompt("ingresa tu nombre");
  localStorage.setItem("nombre", nombre);
  let edad = prompt("ingresa tu edad");
  localStorage.setItem("edad", edad);
  let direccion = prompt("ingresa tu direccion");
  localStorage.setItem("direccion", direccion);
  let telefono = prompt("ingresa tu telefono");
  localStorage.setItem("telefono", telefono);
  let documento = prompt("ingresa tu documento de identidad");
  localStorage.setItem("documento", documento);

  /*nombreUsuario.innerHTML = "Bienvenido/a "+ nombre;
  el += sirve para concatenar datos existentes*/
  nombreUsuario.innerHTML += nombre;
  edadUser.innerHTML += edad;
  direccionUser.innerHTML += direccion;
  telefonoUser.innerHTML += telefono;
  documentoUser.innerHTML += documento;
};

if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Usuario: " + localStorage.getItem("nombre");
}
if (localStorage.getItem("edad")) {
  edadUser.innerHTML = "Edad: " + localStorage.getItem("edad");
}
if (localStorage.getItem("direccion")) {
  direccionUser.innerHTML = "Direccion: " + localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
  telefonoUser.innerHTML = "Telefono: " + localStorage.getItem("telefono");
}
if (localStorage.getItem("documento")) {
  documentoUser.innerHTML =
    "Documento de identidad: " + localStorage.getItem("documento");
}

// Eventos
ejecutar.onclick = () => {
  cambiarDatos();
};
