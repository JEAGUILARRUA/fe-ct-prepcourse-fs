/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   if (x == y) {
      return (true); 
   }  else if (x >= y) {
      return (false);
   } 
}    sonIguales(10, 10);


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   if (str1 == str2) {
      return (true);
   } else if (str1 >= str2) {
      return (false);
  }
}       tienenMismaLongitud("100", "100");


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   if (num < 90) {
      return (true); 
   }  else if (num >= 90) {
      return (false);
   }
}       menosQueNoventa(80);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   if (num > 50) {
      return (true);
   }  else (num >= 50); {
      return (false);
   }
}       mayorQueCincuenta(70);



function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   if (num % 2 === 0) {
      return (true);
   }  else if (num % 2 != 0); {
      return (false);
   }
}       esPar(6);





function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   if (num % 2 === 1) {
      console.log(true)
   } else if (num % 2 != 0) {
      console.log(false);
   }
}     esImpar(3);




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
