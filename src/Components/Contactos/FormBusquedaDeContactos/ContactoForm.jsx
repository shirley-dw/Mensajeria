import React  from 'react'/* Importo react */
import './ContactoForm.css'/* importo css */
import { MdArrowForwardIos } from "react-icons/md";

function FormBusquedaDeContactos({ search, onSearchChange, onBackButtonClick }) { /* Function formdebusqueda con prop "search y onSearchChange" */
  const handleChange = (event) => { /* function "HandleChange" le paso un evento  */
    if (typeof onSearchChange === 'function') {/* Condicion if cuando onSearchChange sea estricta igualdad a function */
      onSearchChange(event.target.value) /* Devuelve la busqueda */
      event.preventDefault()
    } else {/* Condicion si onSearchChange no es estrictamente igual a function */
      console.error('onSearchChange no es una función');
    }

    if (typeof onBackButtonClick === 'function') {/* Condicion if cuando onBackButtonClick sea estricta igualdad a function */
      onBackButtonClick();
    }
  }

  return (/* Retorno de elementos JSX */
    <>
    <form className="form-search">{/* Formulario */}
      <input /* Input del form */
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />
     <button><MdArrowForwardIos className='back'onClick={onBackButtonClick} /></button> 
    </form>{/* Cierro el form */}
    </>
  );
}

export default FormBusquedaDeContactos