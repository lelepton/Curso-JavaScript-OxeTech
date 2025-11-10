function calcularMedia(arrayNotas) {
    let arrayOrdenado = arrayNotas.sort((a, b) => b - a);
    let tresMelhores = arrayOrdenado.slice(0, 3);

    let soma = tresMelhores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = soma / tresMelhores.length;
    return media;
}

const notas = [5, 8, 9, 3, 10, 7]; 
let mediaTresMelhores = calcularMedia(notas);  
console.log(mediaTresMelhores);