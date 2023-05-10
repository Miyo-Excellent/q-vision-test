/**
 * Esta función utiliza un bucle for para recorrer el arreglo de números y encontrar el número más grande.
 * La variable maximo se inicializa como el primer elemento del arreglo, y en cada iteración del bucle se
 * compara el elemento actual con maximo. Si el elemento actual es mayor que maximo, se actualiza maximo
 * con el valor del elemento actual.
 */
export function encontrarNumeroMasGrande(numeros: number[]): number {
    let maximo: number = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

/**
 * Para usar esta función con el ejemplo que proporcionaste, puedes hacer lo siguiente:
 */

// const numeros: number[] = [1, 3, 5, 2, 4];
// const numeroMasGrande: number = encontrarNumeroMasGrande(numeros);
// console.log(numeroMasGrande); // 5
