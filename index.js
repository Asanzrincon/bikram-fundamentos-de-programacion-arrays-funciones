//-------------------------------------------------------------------------

//Arrays

//1.- Crear variable de nombre de arrayVacio cuyo valor sea un array vacÍo. ✅

let arrayVacio = []; 

//2.- Crear variables de nombre arrayNumeros declarada con un array de números del 0 al 9 (0,1,2...). ✅

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par). ✅

let arrayNumerosPares = [0, 2, 4, 6, 8] 

//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0,1,2],['a','b', 'c']]. ✅

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']] 

//-------------------------------------------------------------------------

//Funciones

//5.- Crea la función 'suma' que acepte como argumento dos números y devuelva el resultado de su suma. ✅

function suma(num1, num2){
  let num1 = Math.floor(Math.random());
  let num2 = Math.floor(Math.random()); 
  return num1 + num2; 
}

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b). ✅

function potenciacion (num1, num2){
  let num1 = Math.floor(Math.random());
  let num2 = Math.floor(Math.random());
  return Math.pow(num1, num2); //Math.pow() ¿? > 
}

//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]. ✅

function separarPalabras(){

  let texto = "hola mundo";
  return texto.split(',', [4]);
}

console.log(separarPalabras);

//8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces. ✅

let str = "xxx";
let num = 3;

function repetirString (str, num){
  return (str + num);
}

console.log(repetirString);

//-------------------------------------------------------------------------

//Mezclando Arrays y Funciones

//10.- Crear la función 'ordenarArray' que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor. ✅

function ordenarArray(){
  let numeros = [4, 3, 7, 5, 2];
  numeros.sort(function(a, b) {return a - b}); // --> 2, 3, 4, 5, 7
}

console.log(ordenarArray);

//11.- Crear la función 'obtenerPares' que acepta como argumento un array de números y devuelva un array con los elementos pares. ✅

function obtenerPares(){
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (numeros = numeros% 2==0);
}

console.log(obtenerPares);

//12.- Crear la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0,1,2] String salida: '[0,1,2]'.

function pintarArray(){
}

//13.- Crear la función arrayMapi que acepte como argumento un Array y una función que devuelva un array en el que se haya aplicado la función a cada elemento de array.

//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los dublicados.
//-------------------------------------------------------------------------

//Arrays

//15.- Crear variable de nombre arrayNumeroNeg declarada con un array de números del 0 al -9 (0, -1, -2...). ✅

let arrayNumeroNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16.- Crear una variable de nombre 'holaMundo' declarada con valor array con las palabras 'Hola' y 'Mundo'. ✅

let holaMundo = ["Hola", "Mundo"];

//17.- Crear vairbale de nombre 'loGuardoTodo' declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'. ✅

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//18.- Crear variable de nombre 'arrayDeArrays' declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'dirección']]. ✅

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'dirección']];

//-------------------------------------------------------------------------

//Funciones

//19.- Crea la función multiplicación que acepte como argumento dos números y devuelva el resultado de su multiplicación. ✅

function multiplicacion (){
  let num1 = Math.floor(Math.random());
  let num2 = Math.floor(Math.random());
  return num1 * num2;
}

console.log(multiplicacion);

//20.- Crea la funcioón división que acepte como argumento dos números y devuelva el resultado de su división. ✅

function división(){
  let num1 = Math.floor(Math.random());
  let num2 = Math.floor(Math.random());
  return num1 / num2;
}

console.log(división);

//21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar. ✅

function esPar(){
  let num = Math.floor(Math.random());
  if(num% 2==0){
    return true;
  } else {
    return false;
  }
}

console.log(esPar);


//22.- Crea el array 'arrayFunciones' que tenga como valor las funciones: suma, restay multiplicacion (todas aceptan dos números como arumentos y devuelve el resultado de su operación). 

let arrayFunciones = 

//-------------------------------------------------------------------------

//Mezclando Arrays y Funciones

//23.- Crea la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor. ✅

function ordenarArray2(){
  let numeros = [4, 3, 7, 5, 2];
  numeros.sort(function(a, b){return b- a});
}

console.log(ordenarArray2);

//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares. ✅

function obtenerImpares(){
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (numeros = numeros% 2==1);
}

console.log(obtenerImpares);

//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6 ✅

function sumarArray (){
  let numeros = [1, 2, 3];
  return 1 + 2 + 3;

}

console.log(sumarArray);

//26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva la multiplicación de los número en el Array: [2,3,4] resultado 24. ✅

function multiplicarArray (){
  let numeros = [2, 3, 4];
  return 2 * 3 * 4;
}

console.log(multiplicarArray);