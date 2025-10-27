let anoDeNascimento = Number(prompt('Digite o ano de nascimento: '));
let anoAtual = Number(prompt('Digite o ano atual: '));

let idade = anoAtual - anoDeNascimento;

if (!anoDeNascimento || !anoAtual) {
    alert('Ano de nascimento ou ano atual não informado. ');
} else if (idade < 18) {
    alert(`Você completa ${idade} anos em ${anoAtual} e ainda não poderá tirar a habilitação.`);
} else {
    alert(`Você completa ${idade} anos em ${anoAtual} e poderá tirar a habilitação.`);
};