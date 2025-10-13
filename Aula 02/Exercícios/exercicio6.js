// Descrição: Crie um programa em JavaScript que solicite ao usuário seu nome, 
// peso (em kg) e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) 
// utilizando a fórmula: IMC = peso / (altura * altura)
// Depois, utilize a função confirm() para exibir uma mensagem de confirmação com os dados 
// inseridos. Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: 
// "Nome, seu IMC é X", onde Nome é o nome informado e X é o IMC calculado.
// Caso o usuário cancele, exiba a mensagem: "Você saiu do programa."

let nome = prompt("Nome: ");
let peso = Number(prompt("Peso: "));
let altura = Number(prompt("Altura: "));
let imc;
imc = (peso / (altura * altura)).toFixed(2);

let confirmacao = confirm(`Seus dados: \nNome: ${nome} \nPeso: ${peso}kg \nAltura: ${altura}m. \nDeseja continuar?`);

confirmacao ? alert(`${nome}, seu IMC é ${imc}`) : alert("Você saiu do programa.");