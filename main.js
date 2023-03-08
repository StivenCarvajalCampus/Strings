/*El match()método compara una cadena con una expresión regular **

El match()método devuelve una matriz con las coincidencias.

El match()método devuelve nulo si no se encuentra ninguna coincidencia.*/
let textmatch = "Vallenato mas que musica un sentimiento hecho cancion ";
let result = textmatch.match(/to/g);
console.log(result)