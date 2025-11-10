function filtrarDevedores(arrayDividas) {
    let devedores = arrayDividas.filter((divida) => (divida > 80));
    return devedores;
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  
const devedores = filtrarDevedores(dividas);  
console.log(devedores);
// Resultado esperado: [95.90, 180.50, 105.99]