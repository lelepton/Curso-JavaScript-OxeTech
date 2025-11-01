function calcular(n1, n2, operador) {
    switch(operador) {
        case '+':
            return n1 + n2; 

        case '-':
            return n1 - n2;
        
        case '*':
            return n1 * n2;

        case '/':
            if (n2 != 0) {
                return n1 / n2;
            } else {
                return "Não é possível calcular a divisão por 0.";
            }
        
        case '%':
            if (n2 != 0) {
                return n1 % n2;
            } else {
                return "Não é possível calcular o resto da divisão por 0.";
            }
    }
}

while(true) {
    let n1 = Number(prompt('Número 1: '));
    let n2 = Number(prompt('Número 2: '));
    let operador = prompt('Operador (+, -, *, /, %');
    const operadores = ['+', '-', '*', '/', '%'];

    if (!n1 || !n2 || !operador) {
        alert('Valor(es) não informado(s). Tente novamente.');
        continue;
    }

    if (!operadores.includes(operador)) {
        alert('Operador informado inválido. Tente novamente.');
        continue;
    }

    let resultado = calcular(n1, n2, operador);
    alert(resultado);

    let continuar = confirm('Deseja realizar outro cálculo?');
    if (continuar) {
        continue;
    } else {
        break;
    }
}

