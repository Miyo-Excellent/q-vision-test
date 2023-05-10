/**
 * Prueba 1 Invertir una cadena de texto
 * Escribe una función que tome una cadena de texto como entrada y devuelva una cadena de
 * texto con las letras invertidas. Por ejemplo, si la entrada es "Hola mundo", la salida debería ser
 * "odnum aloH".
 */
export function invertirCadena(cadena: string): string {
    let resultado: string = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado += cadena.charAt(i);
    }
    return resultado;
}

/**
 * Esta función utiliza un bucle for para recorrer la cadena de texto de derecha a izquierda y construir
 * una nueva cadena de texto con las letras invertidas. La variable resultado se inicializa como una
 * cadena vacía, y en cada iteración del bucle se agrega el carácter correspondiente de la cadena original
 * utilizando el método charAt().
 * Para usar esta función con el ejemplo que proporcionaste, puedes hacer lo siguiente:
 */
// const entrada: string = "Hola mundo";
// const salida: string = invertirCadena(entrada);
// console.log(salida); // "odnum aloH"
