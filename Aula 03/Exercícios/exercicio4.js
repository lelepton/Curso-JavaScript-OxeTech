let n1 = Number(prompt('Digite o primeiro número: '));
let n2 = Number(prompt('Digite o segundo número: '));

let escolha = Number(prompt(`
--- Operações ---
1 - soma
2 - subtração
3 - multiplicação
4 - divisão
-----------------

Escolha uma operação: 
`));

switch (escolha) {
    case 1:
        alert('Resultado da soma: ' + (n1 + n2));
        break;
    case 2:
        alert('Resultado da subtração: ' + (n1 - n2));
        break;
    case 3:
        alert('Resultado da multiplicação: ' + (n1 * n2));
        break;
    case 4:
        alert('Resultado da divisão: ' + (n1 / n2));
        break;
    default:
        alert('Falha ao realizar operação.');
        break;
};