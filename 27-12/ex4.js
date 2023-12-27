// Custo inicial do notebook
let custo = 3000;

let descontoPercentual = 25;

let desconto = custo * (descontoPercentual / 100);

let precoVenda = custo - desconto;

console.log(
  `Para vender o notebook com 25% de desconto, o preço de venda seria R$${precoVenda.toFixed(
    2
  )}.`
);
