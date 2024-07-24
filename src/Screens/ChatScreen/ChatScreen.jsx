import React, { useState} from "react";
import { ChatHeaderInfo, ListaMensajes, MensajeForm, InfoScreen } from '../index.js' /* Importa tres componentes desde el archivo */
import './ChatScreen.css' /* Importa el arhivo ChatScreen.css */

const ChatScreen = ({ contactoID }) => {
    const [mensajes, setMensajes] = useState([]); /* Estado inicial de los mensajes*/


    
    /* Define una función addMensaje que se usa para agregar un nuevo mensaje al estado mensajes. La función toma un parámetro mensajeNuevo que es el texto del nuevo mensaje. La función utiliza la función setMensajes para actualizar el estado mensajes agregando un nuevo objeto que representa el nuevo mensaje. */
    const addMensaje = (mensajeNuevo) => {
        const msjNuevo = {
            author: 'yo',
            text: mensajeNuevo,
            estado: 'visto',
            day: 'hoy',
            hour: '11:18',
            id: mensajes.length + 1
        }
        setMensajes([...mensajes, msjNuevo]);
    }
    return (
        <>
            <ChatHeaderInfo />
            <div>
                <div className='chat'> {/* Se utiliza para mostrar el encabezado de la pantalla de chat */}
                    <div className='ChatScreen'>
                        <ListaMensajes contactoID={contactoID} mensaje={mensajes[mensajes.length - 1]}  />
                    </div>
                    <MensajeForm submitMensaje={addMensaje} /> 
                    <InfoScreen contactoID={contactoID} />
                </div>
            </div>
        </>
    )
}
export default ChatScreen
/* Resumen:  El componente ChatScreen define una pantalla de chat que muestra un encabezado, una lista de mensajes y un formulario para enviar nuevos mensajes. El estado mensajes se utiliza para almacenar la lista de mensajes y se actualiza cuando se agrega un nuevo mensaje. */

