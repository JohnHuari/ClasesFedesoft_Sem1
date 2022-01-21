const datosUsuario = () => {
    let nombreUsuario = prompt("Cual es tu Nombre?");
    let edadUsuario = prompt("Cual es tu Edad?");
    let direccionUsuario = prompt("Cual es tu Direccion?");
    let doctoUsuario = prompt("Cual es tu nro documento?");
    let telefonoUsuario = prompt("Cual es tu telefono?");
    alert("Tu nombre es: "+nombreUsuario + " Tu direccion es: "+direccionUsuario+" Tu edad es: "+edadUsuario+" tu telefono es:"+ telefonoUsuario+" tu documento es: "+doctoUsuario)
}

console.log(datosUsuario);