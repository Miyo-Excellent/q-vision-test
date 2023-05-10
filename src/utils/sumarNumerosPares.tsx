/**
 * Esta función utiliza un bucle for para recorrer el arreglo de números y sumar los números pares.
 * La variable suma se inicializa como cero, y en cada iteración del bucle se verifica si el elemento
 * actual es par utilizando el operador módulo %. Si el elemento actual es par, se agrega a suma.
 */

export function sumarNumerosPares(numeros: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
    }
    return suma;
}

/**
 * Para usar esta función con el ejemplo que proporcionaste, puedes hacer lo siguiente:
 */

// const numeros: number[] = [1, 2, 3, 4, 5, 6];
// const sumaNumerosPares: number = sumarNumerosPares(numeros);
// console.log(sumaNumerosPares); // 12
