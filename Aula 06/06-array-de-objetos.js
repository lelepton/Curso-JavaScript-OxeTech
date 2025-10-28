const produtos = [
  {
    id: 1,
    nome: "Café",
    preco: 9.9,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 25,
  },
  {
    id: 2,
    nome: "Leite",
    preco: 5.5,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 40,
  },
  {
    id: 3,
    nome: "Pão",
    preco: 7.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
  {
    id: 4,
    nome: "Queijo",
    preco: 22.9,
    categoria: "Frios",
    emEstoque: true,
    estoque: 12,
  },
  {
    id: 5,
    nome: "Bolo de Chocolate",
    preco: 15.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
];

// 1. Listar apenas nomes e preços
for (let index in produtos) {
  console.log(produtos[index].nome);
  console.log(produtos[index].preco);
}
// --------- OU -----------
produtos.forEach((produto) => console.log(`${produto.nome} - R$${produto.preco.toFixed(2)}`));



// 2. Criar um array com os nomes
let nomes = [];
for (let index in produtos) {
  nomes.push(produtos[index].nome);
}
console.log(nomes);
// --------- OU -----------
const nomesDosProdutos = produtos.map((produto) => produto.nome);
console.log(nomes);



// 3. Filtrar produtos em estoque
let estoque = [];
for (let index in produtos) {
  if (produtos[index].emEstoque == true) {
    estoque.push(produtos[index].nome);
  }
}
console.log(estoque);
// --------- OU -----------
const emEstoque = produtos.filter((produto) => produto.emEstoque);
console.log(emEstoque);



// 4. Calcular o preço total de todos os produtos
precoTotal = 0;
for (let index in produtos) {
  precoTotal += (produtos[index].preco * produtos[index].estoque);
}
console.log(precoTotal.toFixed(2));
// --------- OU -----------
const total = produtos.reduce((soma, produto) => soma + produto.preco * produto.estoque, 0);
console.log(total);



// 5. Encontrar um produto específico
let produto = "Queijo";
for (let index in produtos) {
  if (produtos[index].nome === produto) {
    console.log(`Produto ${produto} encontrado!`);
}
// --------- OU -----------
const produtoEncontrado = produtos.find((produto) => produto.nome === "Queijo");
console.log(produtoEncontrado);
// --------- OU PELO INDEX -----------
const produtoIndex = produtos.findIndex((produto) => produto.nome === "Queijo");
console.log(produtos[produtoIndex]);