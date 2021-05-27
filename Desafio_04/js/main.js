let valor = Number(gets());
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;

console.log(valor);

if (valor > 1) {
  nota100 = Math.floor(valor / 100);
  valor = valor % 100;
  nota50 = Math.floor(valor / 50);
  valor = valor % 50;
  nota20 = Math.floor(valor / 20);
  valor = valor % 20;
  nota10 = Math.floor(valor / 10);
  valor = valor % 10;
  nota5 = Math.floor(valor / 5);
  valor = valor % 5;
  nota2 = Math.floor(valor / 2);
  valor = valor % 2;
  nota1 = Math.floor(valor / 1);
  valor = valor % 1;
}

console.log(nota100 + ' nota(s) de R$ 100,00');
console.log(nota50 + ' nota(s) de R$ 50,00');
console.log(nota20 + ' nota(s) de R$ 20,00');
console.log(nota10 + ' nota(s) de R$ 10,00');
console.log(nota5 + ' nota(s) de R$ 5,00');
console.log(nota2 + ' nota(s) de R$ 2,00');
console.log(nota1 + ' nota(s) de R$ 1,00');
