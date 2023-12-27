const peso = Number(prompt('Quanto vc pesa'));

const altura = Number(prompt('Sua altura'));

let calcImc = peso / (altura * altura);
let classif;

if (calcImc <= 18.5) {
  classif = 'Magreza';
} else if (calcImc <= 24.9) {
  classif = 'Normal';
} else if (calcImc <= 29.9) {
  classif = 'Sobrepeso';
} else if (calcImc <= 39.9) {
  classif = 'Obesidade';
} else {
  classif = 'Obesidade Grave';
}

alert(`Seu IMC é ${calcImc} e sua classificação atual é ${classif}`);
