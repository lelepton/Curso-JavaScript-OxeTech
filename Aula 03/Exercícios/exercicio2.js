let idade = Number(prompt('Qual a sua idade? '));

if (!idade) {
    alert('Idade não informada.');
} else if (idade >= 65) {
    alert('Você é um idoso.');
} else if (idade >= 18) {
    alert('Você é um adulto.');
} else if (idade >= 13) {
    alert('Você é um adolescente.');
} else {
    alert('Você é uma criança.');
};