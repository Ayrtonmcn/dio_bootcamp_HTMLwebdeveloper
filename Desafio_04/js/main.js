let valor = Number(gets());
let cedulas = [100, 50, 20, 10, 5, 2, 1];
let quantidade = 0;

console.log(valor);

for (i = 0; i < 7; i++) {
    quantidade = Math.floor(valor / cedulas[i]);
    valor = valor % cedulas[i];
    console.log(`${quantidade} nota(s) de R$ ${cedulas[i]},00`);
} 
