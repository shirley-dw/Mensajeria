import React from 'react';
import './ContactoFooter.css';
import { BsFillChatLeftTextFill, BsTelephone  } from "react-icons/bs";/* Iconos chat y llamadas */
import { RiChatSmile3Line } from "react-icons/ri";/* Icono novedades */
import { LiaToolsSolid } from "react-icons/lia";/* Icono herramientas */

export const ContactoFooter = () => {
    return (
        <div className="contact-footer">
            <div className="access"><BsFillChatLeftTextFill className='icons' />Chats</div>
            <div className="access"><BsTelephone className='icons'/>Llamadas</div>
            <div className="access"><RiChatSmile3Line className='icons'/>Novedades</div>
            <div className="access"><LiaToolsSolid className='icons'/>Herramientas</div>
        </div>
    );
};

export default ContactoFooter;