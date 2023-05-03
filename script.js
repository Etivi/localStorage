// localStorage.setItem("llave", [1, 2, 3, 4])

// Como convertir un objeto json a string
// Como converitr un array a string

// Para convertir un objeto JSON a una cadena de texto en JavaScript, puedes usar el método JSON.stringify(). 
// Este método toma un objeto JavaScript y devuelve una cadena de texto JSON.
// Por ejemplo:

let objeto = { nombre: "Juan", edad: 30 };
let json = JSON.stringify(objeto);
console.log(json);
// Resultado: {"nombre":"Juan","edad":30}

// Para convertir un array a una cadena de texto en JavaScript, puedes usar el método join(). 
// Este método toma todos los elementos de un array y los concatena en una cadena de texto, 
// separados por un separador especificado (o una coma por defecto)
// Por ejemplo:

let array = [1, 2, 3, 4, 5];
let cadena = array.join("-");
console.log(cadena);
// Resultado: "1-2-3-4-5"


