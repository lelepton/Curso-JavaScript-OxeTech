function converterMoeda(arrayDolar) {
    let arrayReal = arrayDolar.map((valor) => valor * 5);
    return arrayReal;
}

const precosDolares = [10, 20, 30]; 
precoReais = converterMoeda(precosDolares); 
console.log(precoReais);
// Resultado esperado: [50, 100, 150]