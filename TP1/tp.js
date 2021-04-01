/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. 
No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. 
El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(text) {

  if (typeof(text) == 'string' ) {
    let textLowerCase = text.toLowerCase()
    let arrayText = textLowerCase.split('')
    let letterCount = 0

    for (const letter of arrayText) {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
          letterCount++
        }
    }
    console.log(`La cantidad de vocales sin acento que tiene el texto:  "${text}"   es:   ${letterCount}`);
    return letterCount
  }else {
    return -1
  }
  
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules 
(para ellos está creado el archivo .gitignore en este proyecto) 
Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  const url = 'https://github.com/kmsueldo/Fizzmod-TPs.git'

  return url
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  
  return url
}



/* ************************************************************ */
/* ********************PROBAR FUNCIONES************************ */
/* ************************************************************ */

/* -------------------FUNCION CONTAR VOCALES----------------------- */

let texto = 'hOlA 1 como EstAs?'
contarVocales(texto)

/* -------------------FUNCION URL REPOSITORIO----------------------- */

urlRepo()
console.log(urlRepo());




module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
