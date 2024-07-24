import React, { useState } from "react"
import './MensajeForm.css'
/* Iconos de input */
import { IoCameraOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
/*  Creo un componente de MensajeForm con su prop y lo exporta para ser usado en otros archivos */

const MensajeForm = ({submitMensaje}) => { 
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje(e.target.nuevomensaje.value);
        submitMensaje(e.target.nuevomensaje.value);
        e.target.reset()
    }
/* Cuando se envía el formulario, se llama a la función handleSubmit que se definió anteriormente */
    return (
            <form onSubmit={handleSubmit} className="form">
                <a href="" className='icons-emoji'><BsEmojiSmile /></a>
                <input className='input-mensaje' type='text' name='nuevomensaje' placeholder='Escribe un mensaje'/>
                <a href="" className='icons-input'><IoCameraOutline /></a>
                <a href="" className='icons-input'><MdAttachFile /></a>
                <button type="submit" className='btn-send'><MdSend /></button>
            </form>
     
    )
}
 export default MensajeForm
