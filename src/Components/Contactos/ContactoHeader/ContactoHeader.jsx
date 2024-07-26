// Importo librerías
import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCamera } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { SiWhatsapp } from "react-icons/si";
import { BsArrowRightCircleFill } from "react-icons/bs";

// Estilos
import './ContactoHeader.css';
/* Importo form de busqueda */
import FormBusquedaDeContactos from '../FormBusquedaDeContactos/ContactoForm.jsx';

const ContactoHeader = ({ search, onSearchChange }) => {
  const [searchVisible, setSearchVisible] = useState(false);/* Inicio estado en false */
  const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
  const handleSearchClick = () => {
    if (searchVisible) {
      setSearchVisible(false);
    } else {
      setSearchVisible(true);
    }
  };

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
        
        <BsThreeDotsVertical className='icons' onClick={openModal} />
            </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Search"
          className="modal"
          overlayClassName="overlay"
        
        >
          <div className="modal-header">
            <h2 className='title'>Menu</h2>
            <button onClick={closeModal} className="close-button">X</button>
          </div>
          <div className='modal-body'></div>
          <p className='subtitle'><BsArrowRightCircleFill  className='icons-arrow'/>Administracion de anuncios</p>
          <p className='subtitle'><BsArrowRightCircleFill  className='icons-arrow'/>Nuevo grupo</p>
          <p className='subtitle'> <BsArrowRightCircleFill  className='icons-arrow'/>Comunidades</p>
          <p className='subtitle'> <BsArrowRightCircleFill  className='icons-arrow'/>Etiquetas</p>
          <p className='subtitle'> <BsArrowRightCircleFill  className='icons-arrow'/>Dispositivos vinculados </p>
          <p className='subtitle'><BsArrowRightCircleFill  className='icons-arrow'/>Mensajes destacados</p>
          <p className='subtitle'> <BsArrowRightCircleFill  className='icons-arrow'/>Ajustes</p>
        </Modal>
      </div>
 
  )
}


export default ContactoHeader
{/*   <p className='subtitle'>Administracion de anuncios</p>
                  <p className='subtitle'>Nuevo grupo</p>
                  <p className='subtitle'>Comunidades</p>
                  <p className='subtitle'>Etiquetas</p>
                  <p className='subtitle'>Dispositivos vinculados </p>
                  <p className='subtitle'>Mensajes destacados</p>
                  <p className='subtitle'>Ajustes</p> */}