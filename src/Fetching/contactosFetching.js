/* CONTACTOS FETCHING */

export const ObtenerContactos = async () => {/* Función ObtenerContactos, async indica que esta devuelve una promesa, significa que puede ser utilizada con await para esperar a que se complete la operacion asincrona */

 const response = await fetch('/mensajeria.json', { method: "GET" }); /* Method fetch para realizar una solicitud HTTP GET a la ruta mensajeria.json */
  return  response.json();/* Una vez que obtiene el objeto Response, uso el method json() para parsear los datos devueltos en formato JSON*/
};


/*
· El codigo define una función asíncrona  ObtenerContactos, se encarga de obtener una lista de contactos desde el archivo JSON ubicado en la ruta /mensajeria.json.
· El objeto { method: "GET" }) especifica que se trata de una solicitud GET, la función fetch devuelve una promesa que se resuelve con un objeto Response cuando se completa la solicitud
· El método json() devuelve una promesa que se resuelve con los datos parseados. */