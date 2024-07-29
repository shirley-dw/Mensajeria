//Importo librerias
import React, { useState } from "react"
import { IoCameraOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
//Importo estilos
import './MensajeForm.css'
const MensajeForm = ({ submitMensaje }) => {
    const [mensaje, setMensaje] = useState('') // Estado inicial vacío
    const handleSubmit = (e) => { // Función que se ejecuta cuando se envia el formulario
        e.preventDefault();
        setMensaje(e.target.nuevomensaje.value);
        submitMensaje(e.target.nuevomensaje.value);
        e.target.reset()
    }
//Render
    return (
        <form onSubmit={handleSubmit} className="form">
            <a href="" className='icons-emoji'><BsEmojiSmile /></a>
            <input className='input-mensaje' type='text' name='nuevomensaje' placeholder='Escribe un mensaje' />
            <a href="" className='icons-input'><IoCameraOutline /></a>
            <a href="" className='icons-input'><MdAttachFile /></a>
            <button type="submit" className='btn-send'><MdSend /></button>
        </form>

    )
}
export default MensajeForm
