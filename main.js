let text = "Vallenato ";
let text2 = "vallenato mas que musica un sentimiento hecho cancion";
//El trim()método elimina los espacios en blanco de ambos lados de una cadena.

let result = text.replace(/^\s+|\s+$/gm,'');
console.log(result)