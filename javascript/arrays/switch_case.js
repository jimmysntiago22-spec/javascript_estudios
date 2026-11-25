/* condicional switch case

el switch case es una estructura de control que nos permite ejecutar diferentes bloques de código según el color de una expresión. Es útil cuando tenemos múltiples condiciones que evaluar y queremos evitar el uso excesivo de if-else.
es util para comparar un valor con diferentes casos posibles y ejecutar el bloque de código correspondiente al caso que coincida. Si no hay coincidencia, se puede definir un caso por defecto (default) que se ejecutará si ninguno de los casos anteriores coincide.
*/

let valor;
valor = parseInt(prompt(`ingrese valores numericos ente 1 y 3`));

switch (valor) {
  case 1:
    document.write(`usted ingreo el numero : `, valor);
    break;
  case 2:
    document.write(`usted ingreo el numero : `, valor);
    break;
  case 3:
    document.write(`usted ingreo el numero : `, valor);
    break;
  default:
    document.write(`el numero esta fuera el rango o no es un numero valido`);
    break
}

document.write("<br>")

let color;
color = prompt(`ingrese uno de estos colores: rojo, verde o azul`);

switch (color) {
  case `rojo`:
    document.write(`usted ingreo el color : `, color);
    break;
  case `verde`:
    document.write(`usted ingreo el color : `, color);
    break;
  case `azul`:
    document.write(`usted ingreo el color : `, color);
    break;
  default:
    document.write(`el color esta fuera el rango o no es un color valido`);
    break
}