/* Variables para Javascript */
// Var (se recomienda ya no usar var)
// se remocomienda usar LET
// const  no permite reemplazar la variable.

let nombre = prompt("Cual es tu nombre?");

const nombreUsuario = () => {
    let nombreUsuario = prompt("Cual es tu nombre?");
    alert("Tu nombre es: "+ nombreUsuario);
    console.log("tu nombre es "+ nombreUsuario)
}

console.log(nombre);