console.log("Los primeros 10 números de la sucesión de Fibonacci: ");
var fibo = [0, 1];
for (var i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i]);
}
