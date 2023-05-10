/**
 * Para ordenar el arreglo de objetos por una propiedad específica, podemos usar el método sort() de JavaScript.
 * Este método toma una función de comparación como argumento, que compara dos elementos del arreglo y devuelve
 * un valor negativo, cero o positivo dependiendo de si el primer elemento es menor, igual o mayor que el segundo
 * elemento.
 *
 * En nuestro caso, queremos ordenar el arreglo por la propiedad "edad", por lo que podemos escribir la función
 * de comparación de la siguiente manera:
 */

export function compareByAge(a: {edad: number}, b: {edad: number}) {
    return a.edad - b.edad;
}

/**
 * Esta función compara dos objetos por su propiedad "edad", y devuelve un valor negativo si el primer objeto
 * tiene una edad menor que el segundo objeto, cero si ambos objetos tienen la misma edad, y un valor positivo
 * si el primer objeto tiene una edad mayor que el segundo objeto.
 *
 * A continuación, podemos utilizar esta función para ordenar el arreglo de objetos:
 */

// function sortByAge(arr: {nombre: string, edad: number}[]) {
//     return arr.sort(compareByAge);
// }

/**
 * Esta función toma un arreglo de objetos con propiedades "nombre" y "edad", y devuelve el mismo arreglo ordenado
 * por la propiedad "edad".
 *
 * Podemos probar la función con el siguiente código:
 */

// const people = [
//     {nombre: "Ana", edad: 25},
//     {nombre: "Pedro", edad: 20},
//     {nombre: "María", edad: 30}
// ];
// const sortedPeople = sortByAge(people);
// console.log(sortedPeople);
// Output: [{nombre: "Pedro", edad: 20}, {nombre: "Ana", edad: 25}, {nombre: "María", edad: 30}]
