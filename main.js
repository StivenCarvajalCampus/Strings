//El slice()método extrae una parte de una cadena.
/*Los parámetros de inicio y fin especifican la parte de la cadena que se va a extraer.
La primera posición es 0, la segunda es 1, ...
Un número negativo selecciona desde el final de la cadena.*/
let text = "Vallenato ";
let text2 = "Vallenato mas que musica un sentimiento hecho cancion";
let result = text.slice(0, 5);
console.log(result)