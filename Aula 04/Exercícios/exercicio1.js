while(confirm('Deseja verificar a idade?')) {
    let nome = prompt('Qual o seu nome?');
    let idade = Number(prompt('Qual a sua idade?'));

    function verificarIdade(nome, idade) {
        nome = nome || "Visitante";
        
        if (!idade) {
            alert('Idade não informados.');
        } else if (idade < 0 || idade > 120) {
            alert('A idade informada é inválida.');
        } else {
            if (idade < 18) {
                alert(`Olá, ${nome}! Você é menor de idade.`);
            } else {
                alert(`Olá, ${nome}! Você é maior de idade.`);
            }
        }
    }

    verificarIdade(nome, idade);
}