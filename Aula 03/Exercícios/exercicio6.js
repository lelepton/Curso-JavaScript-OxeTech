let n = Number(prompt('N: '));
let somaDosPares = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        somaDosPares += i;
    } else {
        continue;
    }
};

alert(`A soma dos números pares de 1 até ${n} é: ${somaDosPares}.`)