
export const ObtenerMensajes = async () => {/* Función ObtenerContactos, async indica que esta devuelve una promesa, significa que puede ser utilizada con await para esperar a que se complete la operacion asincrona */

    const response = await fetch('/mensajeria.json', { method: "GET" }); /* Method fetch para realizar una solicitud HTTP GET a la ruta mensajeria.json */
    return  response.json();/* Una vez que obtiene el objeto Response, uso el method json() para parsear los datos devueltos en formato JSON*/
  };
  
