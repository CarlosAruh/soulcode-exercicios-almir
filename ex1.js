const qNotas = Number(prompt('Quantas notas vc calculara'));
let notas = [];

for (let i = 1; i <= qNotas; i++) {
  let nota = Number(prompt(`Notas ${1}`));
  notas.push(nota);
}

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

const media = somaNotas / qNotas;

console.log(`A média é ${media}`);
