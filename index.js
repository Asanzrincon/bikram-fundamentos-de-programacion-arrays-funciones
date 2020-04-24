let arrayVacio = [];
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let holaMundo = ["Hola", "Mundo"];

let suma = (num1, num2) => {
    return (num1 + num2);
}

let potenciacion = (num1, num2) => {
    let acum = 1;
    for(let i = 0; i < num2; i++) {
        acum *= num1;
    }
    return (acum);
}

let esPar = (num1) => {
    return (num1 % 2 === 0);
}

let ordenarArray = (array) => array.sort((a, b) => a - b);
let ordenarArray2 = (array) => array.sort((a, b) => b - a);
console.log(ordenarArray2([25, -25, 7, 0, 1, 2]));

let eliminarDuplicados = (array) => {
    let result = [];
    for (const i in array) {
        if (result.find(el => array[i] === el) === undefined)
            result.push(array[i]);
    }
    return(result);
}

let obtenerPares = array => array.filter(el => el % 2 === 0);
let obtenerImpares = array => array.filter(el => el % 2 === 1);

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

let arrayFunciones = [(num1, num2) => num1 + num2, (num1, num2) => num1 - num2, (num1, num2) => num1 * num2];

let arrayBidimensional  = [[0, 1, 2], ['a', 'b', 'c']];

let pintarArray = (array) => {
    let texto = "[";

    for(let i in array) {
        texto += array[i];
        if (i < array.length - 1)
            texto += ", ";
    }
    texto += "]";
    return (texto);
}

let separarPalabras = (string) => string.split(" ");

let arrayMapi = (array, funct) => {
    let ret = [];
    for (const i in array) {
        ret.push(funct(array[i]));
    }
    return(ret);
}

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
let multiplicacion = (a, b) => a * b;
let division = (a, b) => a / b;

let esPrimo = (num) => {
    if (num <= 2)
        return (false);
    for (i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return true;
}