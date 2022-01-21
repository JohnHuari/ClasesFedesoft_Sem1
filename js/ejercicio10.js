let dia = prompt("ingresa un dia a la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("Entre semana");
} else {
  if (dia === "sabado" || dia === "domingo") {
    alert("fin de semana");
  } else {
    alert("la fecha ingresada no es valida");
  }
}
