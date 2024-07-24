/* Importaciones librerias */
import { useParams, Link} from "react-router-dom"; // Se utiliza una sola importación y se extraen los hook y componente a utilizar.
import { IoInformationCircleOutline } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdPhone } from "react-icons/md";


/* Componentes */
import './ChatHeaderInfo.css';

/* Custom Hook */
import useContactos from "../../hooks/useContact";

/*  Define un componente llamado ChatHeaderInfo y lo exporta para ser usado en otros archivos.
  El componente devuelve un elemento div con la clase chat-header-info,(Contiene el encabezado de la pantalla de chat */

const ChatHeaderInfo = () => {
  const { id } = useParams();

  /* Estados del hook */
  const { contacto, loading } = useContactos(id);

  /* const handleProfileClick = () => {
    navigate(/contactInfo/${contacto.id});
  }; */

  /* invocación del hook pasando como parámetro el id obtenido por useParams() */
  useContactos(id);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="chat-header-info">
        <div className="contact">
          <Link to={"/"}>
            <SlArrowLeft className="arrow" />
          </Link>
          
          {
            contacto && <>
              <img className="fotoperfil" src={'/Imagenes/' + contacto.thumbnail} alt="Foto perfil" />
              <div className="chat-header">
                <div className="profile-name">{contacto.nombre}</div>
                <div className="status-text">{contacto.ultima_conexion}</div>
              </div>
            </>
          }
        </div>
        <div className="icons">
          <GoDeviceCameraVideo />
          <MdPhone />
          <Link to={`/contactInfo/${id}`} /* onClick={handleProfileClick} */>
            <IoInformationCircleOutline className="info" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ChatHeaderInfo;