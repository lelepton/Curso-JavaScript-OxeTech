let valorInicial = Number(prompt('Valor inicial: '));
let valorFinal = Number(prompt('Valor final: '));

let resultado = '';

while (valorInicial <= valorFinal) {
    resultado += (valorInicial + ' ');
    valorInicial++;
};

alert(resultado);