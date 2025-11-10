function exibirNomes(arrayNomes) {
    arrayNomes.forEach((nome) => console.log(`Bem-vindo, ${nome}!`));
}

const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

// Resultado esperado:
// Bem-vindo, Lucas!
// Bem-vindo, Marina!
// Bem-vindo, João!