/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return (string);
}   devolverString('caramelo');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return (x + y);
}  suma(3, 5);

function resta(x, y) {
   // Retorna el resultado de la resta.
   return (x - y);
}  resta(10, 3);


function divide(x, y) {
   // Retorna el resultado de su división.
   return (x / y);
}  divide(10, 2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return (x * y);
}  multiplica(4, 5);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   console.log(x % y);
}  obtenerResto(20, 4);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
