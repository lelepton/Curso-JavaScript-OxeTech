function calcularTotalVendas(array) {
    let total = array.reduce((acumulador, valor) => acumulador + valor, 0);
    return total;
}

const vendas = [150, 200, 100, 50];  
let totalVendas = calcularTotalVendas(vendas);  
console.log(totalVendas);
// Resultado esperado: 500