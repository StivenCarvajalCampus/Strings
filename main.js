/* El substring()método no cambia la cadena original.
Si el inicio es mayor que el final, los argumentos se intercambian: (4, 1) = (1, 4).
Los valores iniciales o finales inferiores a 0 se tratan como 0.*/
let text = "Vallenato ";
let text2 = "Vallenato mas que musica un sentimiento hecho cancion";
let result = text.substring(5);
console.log(result)