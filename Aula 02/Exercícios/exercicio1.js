// Descrição: Crie um programa que solicite ao usuário os seguintes dados: 
// nome, idade , altura, gênero e estudante.

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let altura = prompt("Qual a sua altura?");
let genero = prompt("Qual o seu gênero?");
let estudante = prompt("Você é estudante? (verdadeiro/falso)");

alert(`Bem-vindo(a) ${nome}!
Seu perfil
Nome: ${nome}
Idade: ${idade}
Altura: ${altura}
Gênero: ${genero}
Estudante: ${estudante}`);