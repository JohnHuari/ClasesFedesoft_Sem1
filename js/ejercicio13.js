//local storage
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("ingresa tu nombre");
  nombreUsuario.innerHTML  += nombre;
  // guarda la informacion en la  memoria del computador
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML=" Bienvenido/a: "+localStorage.getItem("nombre")
} 
// Eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
