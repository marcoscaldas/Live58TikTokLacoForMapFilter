const numeros = [1,2,3,4,5];
const dobrados = []; 
for(var cont = 0 ; cont < numeros.length;
     cont ++ ){
dobrados.push(numeros[cont] * 2);
}
console.log('Resultado com for ', dobrados);

console.log('*************************');

const numeros2 = [1,2,3,4,5];
const dobrados2 = numeros2.map(numero => numero * 2)
console.log('Resultado com map ', dobrados2);


