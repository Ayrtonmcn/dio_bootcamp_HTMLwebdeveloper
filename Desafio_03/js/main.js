let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i < 5; i++) {
  valor = gets();
  
  if (valor % 2 == 0) {
    par++;
  } else {
    impar++;
  }
  if (valor > 0) {
    positivo++;
  }
  if (valor < 0) {
    negativo++;
  }
}

console.log(par + ' valor(es) par(es)');
console.log(impar + ' valor(es) impar(es)');
console.log(positivo + ' valor(es) positivo(s)');
console.log(negativo + ' valor(es) negativo(s)');