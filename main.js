/*El charCodeAt()método devuelve el Unicode del carácter en un índice especificado (posición) en una cadena.

El índice del primer carácter es 0, el segundo es 1, ....

El índice del último carácter es la longitud de la cadena: 1 (consulte los ejemplos a continuación).*/
let text = "Vallenato ";
let text2 = "Vallenato mas que musica un sentimiento hecho cancion";
let primero = text.charCodeAt(0)
console.log(primero);
//Ultimo
let ultimo = text.charCodeAt(text.length -1);
console.log(ultimo);
//Por Defecto
let pordefecto= text.charCodeAt()
console.log(pordefecto)
//Fuera de rango
let noexiste = text.charCodeAt(22)
console.log(noexiste) 