/* Importaciones librerias */
import { useParams } from 'react-router-dom';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegBell, FaRegBookmark } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { PiLockLaminatedFill } from "react-icons/pi";
import { MdOutlinePhone, MdOutlineVideocam, MdSearch, MdLock, MdOutlineTimelapse } from "react-icons/md";

/* Hooks */
import useContactos from '../../hooks/useContact';

/* Estilos */
import './InfoScreen.css';
const InfoScreen = () => {
  const { contactoID } = useParams();
  const { contacto, loading } = useContactos(contactoID);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (contacto) {
    return (
      <div className="info-screen">
        {contacto && (
          <>
            <div className="info-header">
              <img className="profile-pic" src={'/Imagenes/' + contacto.thumbnail} alt="Foto perfil" />
              <h1>{contacto.nombre}</h1>
              <p>Última conexión: {contacto.ultima_conexion}</p>
            </div>

            <div>  <div className="opciones">
              <div className="icon-container"><MdOutlinePhone className="icons" /><p>Llamar</p></div>
              <div className="icon-container"><MdOutlineVideocam className="icons" /><p>Video</p></div>
              <div className="icon-container"><MdSearch className="icons" /><p>Buscar</p></div>
            </div>
            
              <div className="decorado">
                <div className="avanced"><FaRegBell className="icons" /><p>Notificaciones</p></div>
                <div className="avanced"><AiOutlinePicture className="icons" /><p>Visibilidad de archivos multimedia<span className="sub">Desactivada</span></p></div>
                <div className="avanced"><FaRegBookmark className="icons" /><p>Mensajes conservados</p></div>
                <div className="avanced"><MdLock className="icons" /><p>Cifrado<span>Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</span></p></div>
                <div className="avanced"><MdOutlineTimelapse className="icons" /><p>Mensajes temporales <span>90 dias</span></p></div>
                <div className="avanced"><PiLockLaminatedFill className="icons" /><p>Restringir chat<span>Restringe y oculta este chat en este dispositivo</span></p> </div>
              </div>
            </div>
          </>
        )}

      </div>

    );
  }
  return <div>No se encontró el contacto.</div>;
}

export default InfoScreen;