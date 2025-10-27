const senha = 1234;
let senhaDigitada;

do {
    senhaDigitada = Number(prompt('Digite a senha: '));
    if (senhaDigitada == senha) {
        alert('Acesso liberado.');
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
} while (senhaDigitada != senha);