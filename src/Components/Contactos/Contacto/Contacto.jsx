/* importo react/ Link /CSS/ Imagenes */
import React from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";



/* Componente Contacto le paso props a contacto */
export const Contacto = ({ id, nombre, thumbnail, mensajes }) => {
/* Desestructuro la props contacto */

  const imagenes = '/Imagenes/' + thumbnail 

  const ultimoMensaje= mensajes[mensajes.length - 1] /* Ultimo mensaje en el array mensajeID */
  const horaUltimoMensaje = ultimoMensaje?.hour/* Hora del ultimo mensaje */

  return (/* Return devuelve elementos JSX. */
    <Link className="contact-link" to={`/mensaje/${id}`}>
      <div key={id} className="contact-item">{/* Link react-router-dom crea un enlace que lleva a una ruta específicada con to la URL a la que debe dirigir el enlace en él que concatena la cadena /mensaje/con el valor de la variable. */}
        <img src={imagenes} alt={nombre} className="img" />
        <div className="dato">
          <p className="name">
            <strong>{nombre}</strong>
          </p>
        </div>
        <div className="time">{horaUltimoMensaje}</div>
      </div>
    </Link>
  )
}

export default Contacto;