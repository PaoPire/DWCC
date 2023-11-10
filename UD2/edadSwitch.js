let entradaUsuario = prompt("Introduce tu edad:");

if (entradaUsuario === null) {
  console.log("Entrada cancelada.");
} else {
  let edad = parseInt(entradaUsuario);

  if (!isNaN(edad)) {
    switch (true) {
      case edad >= 0 && edad <= 12:
        console.log("Neno");
        break;
      case edad >= 13 && edad <= 18:
        console.log("Adolescente");
        break;
      case edad >= 19 && edad <= 30:
        console.log("Xoven");
        break;
      case edad >= 31 && edad <= 64:
        console.log("Adulto");
        break;
      case edad >= 65 && edad <= 100:
        console.log("Xubilado");
        break;
      default:
        console.log("Edad fuera del rango especificado.");
    }
  } else {
    console.log("Por favor, introduce un número válido.");
  }
}
