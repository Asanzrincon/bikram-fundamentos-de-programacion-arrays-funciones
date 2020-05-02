let randomize = (maxNum = 177, min = 0) => {
    return (Math.floor(Math.random() * maxNum) + min);
}

let generateArray = (elementos = randomize(), min = 0, max = randomize()) => {
    let array = [];
    for (let i = 0; i < elementos; i++) {
        array.push(randomize(max) - min);
    }
    return(array);
}

let printArray = (array) => {
    return ("[" + array.map(element => element).join(", ") + "]");
}

let randomizeArrayOrder = (array) => {
    let rndArray = generateArray(array.length);
    for(let i = 0; i < array.length; i++) {
        if (rndArray[i] < rndArray[i + 1])
        {
            let temp = rndArray[i];
            rndArray[i] = rndArray[i + 1];
            rndArray[i + 1] = temp;
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return (array);
}
describe("Pair Programming", ()=> {
    // Ejercicios sobre arrays
    describe("Arrays", () => {
        //Declarar un array vacío
        it("1.- Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio", () => {
            expect(arrayVacio).toEqual([]);
        });
        //Declarar un array numérico
        it("2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)", () => {
            expect(arrayNumeros).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        //Declarar un array números pares
        it("3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)", () => {
            expect(arrayNumerosPares).toEqual([0, 2, 4, 6, 8]);
        });
        //Declarar un array bidimensional
        it("4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]", () => {
            expect(arrayBidimensional).toEqual([[0, 1, 2], ['a', 'b', 'c']]);
        });
    });

    //Ejercicios sobre funciones
    describe("Funciones", () => {
        //función suma
        describe("5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma", () => {
            //En cada iteración prueba la función con números aleatorios
            for (let i = 0; i < 5; i++) {
                let num1 = randomize(), num2 = randomize();
                it (`suma(${num1}, ${num2})`, () => {
                    expect(suma(num1, num2)).toBe(num1 + num2);
                });
            }
        });
        //función potenciación (elevar x a y [x^y])
        describe("6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]", () => {
            //En cada iteración prueba la función con números aleatorios (exponente máximo = 10, base máxima = 50)
            for (let i = 0; i < 5; i++) {
                let num1 = randomize(50), num2 = randomize(10);
                it(`potenciacion(${num1}, ${num2})`, () => {
                    expect(potenciacion(num1, num2)).toBe(num1 ** num2);
                });
            }
        });
        //función split para dividir un string en un array de palabras
        describe("7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras", () => {
            it("Hola que tal?", () => {
                expect(separarPalabras("Hola que tal?")).toEqual("Hola que tal?".split(" "));
            });
            it("The Bridge for life", () => {
                expect(separarPalabras("The Bridge for life")).toEqual("The Bridge for life".split(" "));
            });
            it("A ver como separas esto", () => {
                expect(separarPalabras("A ver como separas esto")).toEqual("A ver como separas esto".split(" "));
            });
        });
        //función que concatena un string sobre si mismo reiteradamente
        describe("8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces", () => {
            it("convertir ja en jajajajajajajaja", () => {
                expect(repetirString("ja", 8)).toBe("jajajajajajajaja");
            });
            it("escribir estoy castigado 10 veces", () => {
                expect(repetirString("estoy castigado ", 10)).toBe("estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado estoy castigado ")
            })
        })
        //función para comprobar si un número es primo
        describe("9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es", () => {
            let isPrimo = (num) => {
                if (num <= 2)
                    return (false);
                for (i = 2; i  < num; i++)
                    if (num % i === 0)
                        return false;
                return true;
            }
            let getPrimo = () => {
                let i;
                do {
                    i = randomize(1999);
                } while (!isPrimo(i));
                return (i);
            }
            let getNoPrimo = () => {
                let i;
                do {
                    i = randomize(1999);
                } while (isPrimo(i));
                return (i);
            }
            for (let i = 0; i < 2; i++)
            {
                let num = getPrimo();
                it(`El número ${num} es primo`, () => {
                    expect(esPrimo(num)).toBe(true);
                });
            }
            for (let i = 0; i < 2; i++) {
                let num = getNoPrimo();
                it(`El número ${num} no es primo`, () => {
                    expect(esPrimo(num)).toBe(false);
                });
            }
        });
    });

    //Mezclando arrays y funciones
    describe("Mezclando Arrays y Funciones", () => {
        //función para ordenar un array numérico de menor a mayor
        describe("10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor", () => {
            let orderArray = (array) => array.sort((a, b) => a - b);
            for(let i = 0; i < 5; i++) {
                let array = generateArray(randomize(15), -randomize());
                it(`Ordenar ${printArray(array)}`, () => {
                    expect(ordenarArray(array)).toEqual(orderArray(array));
                });
            }
        });
        //función obtener valores pares de un array
        describe("11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva un array con los elementos que sean pares", () => {
            //En cada iteración prueba con valores aleatorios
            let getEven = array => array.filter(element => element % 2 === 0)
            for (let i = 0; i < 5; i++) {
                let array = generateArray(randomize(7, 3));
                it(`Pares en ${printArray(array)}`, () => {
                    expect(obtenerPares(array)).toEqual(getEven(array));
                })
            }
        });
        //función que transforma un array en un string
        describe("12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'", () => {
            //En cada iteración prueba con valores aleatorios
            for (let i = 0; i < 5; i++) {
                let array = generateArray(randomize(7, 3));
                it(`Pintar array ${printArray(array)}`, () => {
                    expect(pintarArray(array)).toBe(printArray(array));
                })
            }
        });
        //función que itera sobre un array aplicando una función a cada uno de sus elementos
        describe("13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array", () => {
            let array, func;
            let arrmapi = (array, func) => array.map(el => func(el));

            array = generateArray(randomize(7, 3));
            func = (element) => element * 25;
            it(`Array ${printArray(array)}`, () => {
                expect(arrayMapi(array, func)).toEqual(arrmapi(array, func));
            });
            array = generateArray(randomize(7, 3));
            func = (element) => element / 25;
            it(`Array ${printArray(array)}`, () => {
                expect(arrayMapi(array, func)).toEqual(arrmapi(array, func));
            });
            array = generateArray(randomize(7, 3));
            func = (element) => element ** 2;
            it(`Array ${printArray(array)}`, () => {
                expect(arrayMapi(array, func)).toEqual(arrmapi(array, func));
            });
            array = generateArray(randomize(7, 3));
            func = (element) => "hola" + element;
            it(`Array ${printArray(array)}`, () => {
                expect(arrayMapi(array, func)).toEqual(arrmapi(array, func));
            });
        });
        //función que elimina los valores repetidos en un array
        describe("14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver un array en el que se hayan eliminado los duplicados", () => {
            let deleteDuplicates = (array) => Array.from(new Set(array));
            //Concatena el mismo array y ordena de forma aleatoria los valores
            let generateDupArray = () => {
                let array = generateArray(randomize(6, 3));
                return (randomizeArrayOrder(array.concat(array).concat(array)));
            }
            //En cada iteración prueba con un array diferente
            for(let i = 0; i < 5; i++) {
                let array = generateDupArray();
                it(`Eliminar duplicados de ${printArray(array)}`, () => {
                    expect(eliminarDuplicados(array)).toEqual(deleteDuplicates(array));
                });
            }
        });

    });
});
describe("proyecto", () => {
    // Ejercicios sobre arrays
    describe("Arrays", () => {
        //Declarar un array numérico negativo
        it("15.- Crea una variable de nombre 'arrayNumerosNeg' cuyo valor sea el array de numeros del 0 al -9 incluidos (0, -1, -2...)", () => {
            expect(arrayNumerosNeg).toEqual([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
        });
        //Declarar un array strings
        it("16.- Crea una variable de nombre 'holaMundo' cuyo valor sea un array con las palabras 'Hola' y 'Mundo'", () => {
            expect(holaMundo).toEqual(["Hola", "Mundo"]);
        });
        //Declarar un array con múltiples tipos de datos
        it("17.- Crea una variable de nombre 'loGuardoTodo' cuyo valor sea un array con los valores 'hola', 'que', 23, 42.33 y 'tal'", () => {
            expect(loGuardoTodo).toEqual(['hola', 'que', 23, 42.33, 'tal']);
        });
        //Declarar un array bidimensional
        it("18.- Crea una variable de nombre 'arrayDeArrays' cuyo valor sea el siguiente array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]", () => {
            expect(arrayDeArrays).toEqual([[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]);
        });
    });

    //Ejercicios sobre funciones
    describe("Funciones", () => {
        //función multiplicacion
        describe("19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion", () => {
            //En cada iteración prueba la función con números aleatorios
            for (let i = 0; i < 5; i++) {
                let num1 = randomize(), num2 = randomize();
                it(`multiplicacion(${num1}, ${num2})`, () => {
                    expect(multiplicacion(num1, num2)).toBe(num1 * num2);
                });
            }
        });
        //función division
        describe("20.- Crea la función 'division' que acepte como argumentos dos números y devuelva como resultado su division", () => {
            //En cada iteración prueba la función con números aleatorios
            for (let i = 0; i < 5; i++) {
                let num1 = randomize(), num2 = randomize(197, 1);
                it(`division(${num1}, ${num2})`, () => {
                    expect(division(num1, num2)).toBe(num1 / num2);
                });
            }
        });
        //función booleana para comprobar si un número es par
        describe("21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar", () => {
            //En cada iteración prueba la función con números aleatorios
            for (let i = 0; i < 5; i++) {
                let num1 = randomize();
                it(`esPar(${num1})`, () => {
                    expect(esPar(num1)).toBe(num1 % 2 === 0);
                });
            }
        });
        //array de funciones
        describe("22.- Crea una variable de nombre 'arrayFunciones' que tenga el valor de un array con las funciones: suma, resta y multiplicacion (todas aceptan 2 números como argumento y devuelve el resultado de su operación)", () => {
            //En cada iteración comprueba la función suma en la posición 0 del array
            describe("Suma en posición 0", () => {
                for (let i = 0; i < 5; i++) {
                    let num1 = randomize(), num2 = randomize();
                    it(`suma(${num1}, ${num2})`, () => {
                        expect(arrayFunciones[0](num1, num2)).toBe(num1 + num2);
                    });
                }
            });
            //En cada iteración comprueba la función resta en la posición 1 del array
            describe("Resta en posición 1", () => {
                for (let i = 0; i < 5; i++) {
                    let num1 = randomize(), num2 = randomize();
                    it(`resta(${num1}, ${num2})`, () => {
                        expect(arrayFunciones[1](num1, num2)).toBe(num1 - num2);
                    });
                }
            });
            //En cada iteración comprueba la función multiplicación en la posición 2 del array
            describe("Multiplicación en posición 2", () => {
                for (let i = 0; i < 5; i++) {
                    let num1 = randomize(), num2 = randomize();
                    it(`multiplicación(${num1}, ${num2})`, () => {
                        expect(arrayFunciones[2](num1, num2)).toBe(num1 * num2);
                    });
                }
            });
        });

    });

    //Mezclando arrays y funciones
    describe("Mezclando Arrays y Funciones", () => {
        //función para ordenar un array numérico de mayor a menor
        describe("23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor", () => {
            let orderArray2 = (array) => array.sort((a, b) => b - a);
            for (let i = 0; i < 5; i++) {
                let array = generateArray(randomize(15), -randomize());
                it(`Ordenar ${printArray(array)}`, () => {
                    expect(ordenarArray2(array)).toEqual(orderArray2(array));
                });
            }
        });
        //función obtener valores impares de un array
        describe("24.- Crea la función 'obtenerImpares' que acepte como argumento un array de números y devuelva un array con los elementos que sean impares", () => {
            //En cada iteración prueba con valores aleatorios
            let getOdd = array => array.filter(element => element % 2 === 1)
            for (let i = 0; i < 5; i++) {
                let array = generateArray(randomize(7, 3));
                it(`Imares en ${printArray(array)}`, () => {
                    expect(obtenerImpares(array)).toEqual(getOdd(array));
                })
            }
        });
        //función que suma todos los valores del array
        describe("25.- Crear la función 'sumarArray' que acepte como argumento un array numérico y devuelva el resultado de la suma de los elementos", () => {
            let addArray = (array) => {
                let acum = 0;
                for (const i in array)
                    acum += array[i];
                return (acum);
            }
            for (let i = 0; i <= 5; i++) {
                let array = generateArray(randomize(7, 3));
                it(`Sumar array ${printArray(array)}`, () => {
                    expect(sumarArray(array)).toBe(addArray(array));
                })
            }
        });
        //función que multiplica todos los valores del array
        describe("26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva el resultado de la multiplicación de los elementos", () => {
            let multArray = (array) => {
                let acum = 1;
                for (const i in array)
                    acum *= array[i];
                return (acum);
            }
            for (let i = 0; i <= 5; i++) {
                let array = generateArray(randomize(7, 3));
                it(`Sumar array ${printArray(array)}`, () => {
                    expect(multiplicarArray(array)).toBe(multArray(array));
                })
            }
        });
    });
});