//El método .raw() en JavaScript se utiliza para crear un objeto de plantilla de etiquetas crudas (raw template tag). Este objeto es utilizado para acceder al contenido sin procesar de una plantilla de etiqueta de plantilla (template literal).

const message = `Hola \nMundo`;

console.log(message); // Salida: Hola 
                       //         Mundo

const rawMessage = String.raw`Hola \nMundo`;

console.log(rawMessage); // Salida: Hola \nMundo