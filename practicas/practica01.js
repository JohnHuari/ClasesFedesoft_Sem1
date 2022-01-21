/*
por medio de un boton pedimos al usuario el nombre
despues el prompt del nombre aparecen mas prompt pidiendo edad, direccion, docto, telf
en un alert concatenado se muestra el mensaje
"hola" nombre "tu edad es" edad "tu direccion es" direccion " tu documento es" docto "tu telefono es" "telefono"
*/

const datosUsuario = () => {
    let nombreUsuario = prompt("Cual es tu Nombre?");
    let edadUsuario = prompt("Cual es tu Edad?");
    let direccionUsuario = prompt("Cual es tu Direccion?");
    let doctoUsuario = prompt("Cual es tu nro documento?");
    let telefonoUsuario = prompt("Cual es tu telefono?");
    alert("Tu nombre es: "+nombreUsuario + " Tu direccion es: "+direccionUsuario+" Tu edad es: "+edadUsuario+" tu telefono es:"+ telefonoUsuario+" tu documento es: "+doctoUsuario)
}

console.log(datosUsuario);