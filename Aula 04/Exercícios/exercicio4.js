const calcularDesconto = (preco, porcentagemDesconto) => preco - (preco * (porcentagemDesconto / 100));

while(true) {
    let preco;
    preco = Number(prompt('Digite o preço do produto: ')).toFixed(2);
    let porcentagemDesconto = Number(prompt('Digite quantos porcentos de desconto o produto receberá: '));

    if (!preco || !porcentagemDesconto) {
        alert('Preço ou porcentagem não informados.');
        continue;
    }

    let novoValor;
    novoValor = calcularDesconto(preco, porcentagemDesconto).toFixed(2);
    alert(`Preço original do produto: R$${preco}\nPreço do produto após desconto de ${porcentagemDesconto}%: R$${novoValor}`);

    continuar = confirm('Deseja calcular o desconto de outro produto?');
    if (continuar) {
        continue;
    } else {
        break;
    }
}
