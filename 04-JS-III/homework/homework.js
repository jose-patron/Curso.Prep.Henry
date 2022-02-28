// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return (array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var i;
  for (i = 0; i < array.length; i++) {
    array[i]=array[i]+1;
  }
  return (array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var i;
  for (i = array.length; i > 0; i--) {
    array[i]=array[i-1];
  }
  array[0]=elemento;
  return (array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var text;
  var i;
  text='';
  for (i = 0; i < palabras.length; i++) {
    if (i===(palabras.length-1)){
      text=text + palabras[i];
    } else {
      text=text + palabras[i]+' ';
    }    
  }
  return (text);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var i;
  var bExist;
  bExist=false
  i = 0;
  while ((i < array.length) && (!bExist)) {
    if (array[i]===elemento){
       bExist=true
    } else {
      i=i+1;
    }
  }
  return (bExist);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i;
  var sum;
  sum=0;
  for (i = 0; i < numeros.length; i++) {
    sum=sum+numeros[i];
  }
  return (sum);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i;
  var sum;
  sum=0;
  for (i = 0; i < resultadosTest.length; i++) {
    sum=sum+resultadosTest[i];
  }
  return (sum/resultadosTest.length);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var i;
  var higher;
  higher=numeros[0];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > higher){
       higher = numeros[i];
    }
  }  
  return (higher);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var i;
  var product;
  if (arguments.length===0){
    return (0);
  } else if (arguments.length===1){
     return (arguments[0]);
  } else {
    product=1;
    for (var i=0; i < arguments.length; i++) {
       product = product * arguments[i];
    }
     return (product);
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var i;
  var over18;
  over18=0
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18){
      over18=over18+1;
    }
  }
  return (over18);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia ===1 || numeroDeDia===7){
    return ('Es fin de semana');
  } else {
    return ('Es dia Laboral');
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var i;
  var temp;
  var multipleOf10;
  var dif;
  temp=n;
  i=0;
  while (temp>=1){
      temp=Math.floor(temp/10);
      i=i+1;
  }
  if (i==1){
     if (n==9){
       return (true);
     } else {
       return (false);
     }
  } else {
    multipleOf10 = Math.pow(10,i);
    dif = multipleOf10-n;
    if ((dif >=1) && (dif <= Math.pow(10,(i-1)))){
       return (true);
    } else {
       return (false);
    }
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var i;
  var j;
  var bAllEqual;
  bAllEqual=true;
  i=0;
  while ((i < arreglo.length) && (bAllEqual===true)) {
      j=0;
      while ((j< arreglo.length) && (bAllEqual===true)) {
        if (j>i){
          if (arreglo[i]!=arreglo[j]){
            bAllEqual=false;
          } else {
            j=j+1
          }
        } else {
          j=j+1
        }
      }
      i=i+1
  }
  return (bAllEqual);    
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var i;
  var newArray = [];
  var bOkEnero;
  var bOkMarzo;
  var bOkNoviembre;
  bOkEnero=false;
  bOkMarzo=false;
  bOkNoviembre=false;
  i = 0;
  while (i < array.length) {
    if (array[i]==='Enero'){
      newArray[newArray.length] = 'Enero';
      bOkEnero=true;
    } else if (array[i]==='Marzo'){
      newArray[newArray.length] = 'Marzo';
      bOkMarzo=true;
    } else if (array[i]==='Noviembre'){
      newArray[newArray.length]='Noviembre';
      bOkNoviembre=true;
    }
    i=i+1;
  }
  if ((bOkEnero===true) && (bOkMarzo===true) && (bOkNoviembre===true)){
    return (newArray);
  } else {
    return ('No se encontraron los meses pedidos');
  }   
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var i;
  var newArray = [];
  i = 0;
  while (i < array.length) {
    if (array[i]>100){
      newArray[newArray.length]=array[i];
    } 
    i=i+1;
  }
    return (newArray);  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i;
  var newArray = [];
  for (i = 1; i <= 10; i++) {
    numero=numero+2;
    if (numero===i){
      break;
    } else {
      newArray[newArray.length]=numero;
    }
  }
  if (i>10){
    return (newArray);
  } else {
    return ('Se interrumpió la ejecución');
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i;
  var newArray = [];
  for (i = 1; i <= 10; i++) {     
     if (i===5){
       continue;
     } else {
      numero=numero+2; 
      newArray[newArray.length]=numero;
     }
  }
  return (newArray);    
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
