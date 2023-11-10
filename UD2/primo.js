function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    var i = 2;
    while (i * i <= numero) {
        if (numero % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
var numero = 71;
if (esPrimo(numero)) {
    console.log("".concat(numero, " es primo."));
}
else {
    console.log("".concat(numero, " no es primo."));
}
