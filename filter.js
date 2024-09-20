const numeros = [1,2,3,4,5,6];

const pares = [];
for(var i = 0; i < numeros.length; i ++ ){
    if( numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}
console.log('resultado com for ', pares);
console.log('**************************')

const numeros2 = [1,2,3,4,5,6];

const pares2 =
 numeros2.filter(numero => numero % 2 === 0);
console.log('resultado com filter ', pares2);