//-------------------------------------------------------------------------

//ARRAYS
// 1.- 

let arrayVacio = []; 

// 2.-

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// 3.- 

let arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- 

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']] 

//FUNCIONES
// 5.- 

function suma(a, b) {
  return a + b;
}

// 6.- 

function potenciacion(a, b) {
  if (b == 0) { return 1 };
  let result = a;
  for (i = 1; i < b; i++) {
      console.log('iteracion' + i);
      result *= a;
      console.log(result);
  }
  return result;
}

// 7.-

function separarPalabras(string){
  let arr = string.split(" ");
  return arr;
}

// 8.- 

function repetirString(string, number) {
  let result = " ";
  for (let i = 0; i < number; i++) {
      result += string;
  }
  return result;
}

// 9.- 

//❌

//MEZCLANDO ARRAYS Y FUNCIONES
// 10.- 

function ordenarArray(array){
  array.sort((a, b) => a - b)
  return array;
}

// 11.-

function obtenerImpares (array) {
  let pares = []
  for (i= 0; i < array.lenght; i++){
    if (array [i] % 2 == 0){
      pares.push(array[i]);
    }
  }
}

// 12.- 

function pintarArray(array) {
  let result = '[' + array.join(", ") + ']';
  return result;
}

// 13.-

//❌

// 14.- 

//❌

//ARRAYS
// 15.- 

let arrayNumeroNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16.- 

let holaMundo = ['Hola', 'Mundo'];

// 17.- 

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18.- 

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'dirección']];

//FUNCIONES
// 19.- 

function multiplicacion(a, b){
  return a*b;
};

console.log(multiplicacion);

// 20.- 

function division(a, b) {
   return a / b; 
};

// 21.- 

let numero = Math.floor(Math.random());

function esPar(num){
  if(numero%2===0){
    return true;
  } else {
    return false;
  }
};

// 22.- 

const arrayFunciones = [suma, resta, multiplicacion];

function suma(a, b) { 
  return a + b };
function resta(a, b) { 
  return a - b };
function multiplicacion(a, b) { 
  return a * b 
};


//MEZCLANDO ARRAYS Y FUNCIONES
// 23.-

function compare(functionarray) {
  return a - b;
}

function ordenarArray2(functionarray) {
  let orderedArray = arr.sort(compare)
  return orderedArray;
}

// 24.- 

function obtenerImpares(functionarray){
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (numeros = numeros% 2==1);
}


// 25.- 

//❌

// 26.- 

//❌
