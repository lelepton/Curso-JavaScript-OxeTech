// Descrição: Crie um programa que simule um estoque. Peça ao usuário: quantidade atual 
// no estoque (number) e a quantidade que deseja remover (number). Mostre no console: 
// se a quantidade for válida (não negativa), mostre "Estoque atualizado: X". 
// Caso contrário, mostre "Operação inválida: quantidade insuficiente no estoque".

estoqueAtual = Number(prompt("Estoque: "));
quantidadeParaRemover = Number(prompt("Remover: "));

estoqueAtual - quantidadeParaRemover >= 0 ? console.log(`Estoque atualizado: ${estoqueAtual - quantidadeParaRemover}`) : console.log("Operação inválida: quantidade insuficiente no estoque");