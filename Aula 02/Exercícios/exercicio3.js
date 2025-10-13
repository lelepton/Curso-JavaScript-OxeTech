// Descrição: Peça ao usuário sua idade usando prompt. Com base na idade, 
// defina uma variável permitido que será true se a idade for maior ou igual a 18, 
// e false caso contrário. Mostre com alert uma mensagem do tipo: "Entrada permitida" 
// ou "Entrada negada".

let idade = prompt("Informe sua idade: ");
let permitido = idade >= 18;

permitido ? alert("Entrada permitida") : alert("Entrada negada");