/* Importaciones de react */
import { useState, useEffect } from 'react';

/* Función fetching */
import { ObtenerMensajes } from '../Fetching/mensajesFetching.js';


const useMensajes = (id) => {
    /* estados */
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Consulta */
    useEffect(() => {
        const fetchMensajes = async () => {
            try {
                const mensajes = await ObtenerMensajes();
                const dataMensajes = mensajes.find(mensajes => mensajes.id === Number(id));
                setMensajes(dataMensajes);
            } catch (error) {
                console.error("Error al obtener mensajes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMensajes();
    }, [id]);
}
return { mensajes, loading };


export default useMensajes;