let positivo = 0;
let negativo = 0;

while (true) {
    let numero = Number(prompt('Digite um número: '));

    if (numero < 0) {
        negativo += 1;
    } else if (numero > 0) {
        positivo += 1;
    } else {
        positivo += 1;
        break;
    }
};

alert(`Quantidade de números positivos: ${positivo}
Quantidade de números negativos: ${negativo}`);