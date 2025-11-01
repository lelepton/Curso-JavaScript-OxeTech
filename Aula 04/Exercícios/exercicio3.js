const mensagemDeBoasVindas = function (nome) {
    const d = new Date();
    let hora = d.getHours();

    if (hora >= 6 && hora <= 11) {
        alert(`Bom dia, ${nome}!`);
    } else if (hora >= 12 && hora <= 17) {
        alert(`Boa tarde, ${nome}!`);
    } else if (hora >= 18 && hora <= 23) {
        alert(`Boa noite, ${nome}!`);
    } else {
        alert(`Olá, ${nome}!`);
    }
}

let nome = prompt('Digite o seu nome: ');
mensagemDeBoasVindas(nome);