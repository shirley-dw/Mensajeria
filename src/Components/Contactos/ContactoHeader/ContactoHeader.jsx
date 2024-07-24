import React, { useState } from 'react'/* Importo react + useState */
import { CiCamera } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoMdSearch } from 'react-icons/io'
import './ContactoHeader.css';
import { SiWhatsapp } from "react-icons/si";
import FormBusquedaDeContactos from '../FormBusquedaDeContactos/ContactoForm.jsx'; /* Importo form de busqueda */


/*  Function contactoHeader con props "Search y onSearchChange" */
const ContactoHeader = ({ search, onSearchChange }) => {
  const [searchVisible, setSearchVisible] = useState(false);/* Inicio estado en false */

  /* Function handleSearchClick */
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible) /* La instacion y digo que cuando sea diferente se ejecute */
  }

  return ( 
    <div className={`contact-header ${searchVisible ? 'search-visible' : ''}`}>{/*  Si el estado es true, se ejecuta la clase search-visible */}
      {searchVisible && (
        /* Paso las props a FormBusquedaDeContactos */
        <FormBusquedaDeContactos
          search={search}
          onSearchChange={onSearchChange}
        />
      )}
      <SiWhatsapp className='logo-icons' />
      <div className='logo'>WhatsApp</div>
      <div className='icons'>

        <CiCamera />
        <IoMdSearch onClick={handleSearchClick} />  
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default ContactoHeader
