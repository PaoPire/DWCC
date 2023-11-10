let entradaUsuario = prompt("Introduce tu edad:");

if (entradaUsuario === null) {
  console.log("Entrada cancelada.");
} else {
  let edad = parseInt(entradaUsuario);

  if (!isNaN(edad)) {
    if (edad >= 0 && edad <= 12) {
      console.log("Neno");
    } else if (edad >= 13 && edad <= 18) {
      console.log("Adolescente");
    } else if (edad >= 19 && edad <= 30) {
      console.log("Xoven");
    } else if (edad >= 31 && edad <= 64) {
      console.log("Adulto");
    } else if (edad >= 65 && edad <= 100) {
      console.log("Xubilado");
    } else {
      console.log("Edad fuera del rango especificado.");
    }
  } else {
    console.log("Por favor, introduce un número válido.");
  }
}