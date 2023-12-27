let idade = parseInt(prompt('Digite a sua idade:'));

let anoAtual = new Date().getFullYear();

let anoNascimento = anoAtual - idade;

console.log(`Você nasceu no ano de ${anoNascimento}.`);
