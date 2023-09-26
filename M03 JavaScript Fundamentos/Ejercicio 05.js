/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
    if (num > 0) {
      return ('Es positivo');
    }else(num < 0); {
      return ('Es negativo');
   }if (num === 0); {
  return ('false');
    } 
}      esPositivo(1);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
    return (str + "!");
}
       agregarSimboloExclamacion('hello word');

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
     return (nombre + apellido);
}
      combinarNombres("Soy ", "Henry");

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   return ("Hola " + nombre);
}
  obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   return(alto * ancho);
}
    obtenerAreaRectangulo(10, 5);



function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
    console.log(lado * 4);
}
      retornarPerimetro(10);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   console.log((base * altura)/2);
}
     areaDelTriangulo(10, 15);


function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   console.log(euro * 1.20);
}      
   deEuroAdolar(10);


   function esVocal(letra) {
      // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
      // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
      // Si no es vocal, tambien debe retornar "Dato incorrecto".
       switch(letra){
         case "a":
         case "e":
         case "i":
         case "o":
         case "u":  
         return ("Es Vocal");
         break;
         default:
         return ("Dato incorrecto");
       } if (letra.length>1); {
         return ("Dato incorrecto");
       }
   }       esVocal("a");
   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};

