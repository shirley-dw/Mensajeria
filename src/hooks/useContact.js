
/* Importaciones de react */
import { useState, useEffect } from 'react';

/* Función fetching */
import { ObtenerContactos } from '../Fetching/contactosFetching';


const useContactos = (id) => {
    /* estados */
    const [contacto, setContacto] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Consulta */
    useEffect(() => {
        const fetchContactos = async () => {
            try {
                const contactos = await ObtenerContactos();
                const dataContacto = contactos.find(contacto => contacto.id === Number(id));
                setContacto(dataContacto);
            } catch (error) {
                console.error("Error al obtener contactos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchContactos();
    }, [id]);

    /* Se retorna los estados */
    return { contacto, loading };
};

export default useContactos;