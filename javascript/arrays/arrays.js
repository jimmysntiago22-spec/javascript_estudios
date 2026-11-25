/*arrays o arreglos
un array es una estructura de datos que nos permite almacenar multiples valores en una sola variable, estos valores pueden ser de cualquier tipo de dato, como numeros, cadenas de texto, booleanos, objetos, etc. Los arrays son muy utiles para organizar y manipular datos de manera eficiente.
*/

// Declaracion de un array vacio
let numeros = [5, 4, 8, 12, 16, 35, 44, 2];
// llenar un array con elementos, cada elemento denntro del array se separa por comas

document.write(`elementos`, numeros);
document.write(`<br>`);

// un array puede creearse directamente sin ser invocado
numeros = [5, 10, 15, 20, 30, 25]
document.write(`elementos`, numeros);
document.write(`<br>`);

//viasualizar uno o alguno de los elementos del array segun parametro o indice indicado
document.write(`elementos discriminando: `, numeros[3]);
document.write(`<br>`);
document.write(`elementos discriminando: `, numeros[0]);

// cambiar un elemento del array indicando el indice de pocicion  y/o ubicacion existente y el valor del elemento a cambiar
numeros[3] = 84;
document.write(`cambio de elemento: `, numeros);
document.write(`<br>-------------------`);

// array con valores de tipo texto o string
let frutas = [`manzanas`, `peras`, `mandarinas`, `naranjas`, `kiwi`];
document.write(`<br>`);
document.write(`divesas frutas: `, frutas);
document.write(`<br>`);

// metodos de array

//ver la cantidad de elementos
document.write(`cantida de elementos del array de frutas: `, frutas.length);
document.write(`<br>`);
document.write(`cantida de elementos del array de numeros: `, numeros.length);
document.write(`<br>-------------------`);
document.write(`<br>`);

let abecedario = [`a`, `c`, `b`, `g`, `e`, `j`, `d`, `h`, `i`, `f`];
document.write(abecedario);
document.write(`<br>`);
document.write(abecedario.sort()); //organiza el abecedario
document.write(`<br>`);

//funcion reverce organiaza alfabetica mente pero en reversa
document.write(abecedario.reverce()); //organiza el abecedario en reversa
document.write(`<br>`);
