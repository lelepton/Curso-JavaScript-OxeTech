let peso = Number(prompt('Peso (kg): '));
let altura = Number(prompt('Altura (m)'));
let imc;
imc = (peso / (altura * altura)).toFixed(2);

if (!peso || !altura) {
    alert('Peso ou altura não informados.');
} else if (imc < 18.5) {
    alert(`Seu IMC é: ${imc}\nVocê está abaixo do peso.`);
} else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC é: ${imc}\nVocê tem peso normal.`);
} else if (imc >= 25 && imc <= 29.9) {
    alert(`Seu IMC é: ${imc}\nVocê tem sobrepeso.`);
} else if (imc >= 30 && imc <= 34.9) {
    alert(`Seu IMC é: ${imc}\nVocê tem obesidade grau 1.`);
} else if (imc >= 35 && imc <= 39.9) {
    alert(`Seu IMC é: ${imc}\nVocê tem obesidade grau 2.`);
} else {
    alert(`Seu IMC é: ${imc}\nVocê tem obesidade grau 3.`);
};