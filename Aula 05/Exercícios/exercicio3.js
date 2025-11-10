function somarNumeros(arrayNumeros) {
    let acumulador = 0;
    for (let i in arrayNumeros) {
        if (arrayNumeros[i] % 2 === 0 && arrayNumeros[i] % 3 === 0) {
            acumulador += arrayNumeros[i];
        }
    }
    return acumulador;
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let soma = somarNumeros(numeros);
console.log(soma);
// Resultado esperado: 42 (6 + 24 + 12)