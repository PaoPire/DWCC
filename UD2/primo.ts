function esPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
    let i = 2;
    while (i * i <= numero) {
      if (numero % i === 0) {
        return false;
      }
      i++;
    }
    return true;
  }
  
  const numero = 71;
  if (esPrimo(numero)) {
    console.log(`${numero} es primo.`);
  } else {
    console.log(`${numero} no es primo.`);
  }