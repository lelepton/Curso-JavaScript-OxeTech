// Descrição: Crie um programa que peça ao usuário o valor de uma compra. 
// Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.

let valor = Number(prompt("Informe o valor da compra: "));

valor > 100 ? desconto = valor * 0.10 : desconto = valor * 0.05;

alert(`Valor original: R$${valor}
Desconto aplicado: R$${desconto}
Valor final: R$${valor - desconto}`);