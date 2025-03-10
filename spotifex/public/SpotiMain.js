import React, { useState, useEffect } from 'react';
import FiltradoCanciones from './FiltradoCanciones';
import ListadoCanciones from './ListadoCanciones';
import MasPopular from './MasPopular';

const Canciones = () => {
    const [canciones, setCanciones] = useState([]); // Estado para almacenar las canciones


//Con estado se refiere a la información que se almacena en el componente, y que puede cambiar a lo largo del tiempo.
//useState es un hook que nos permite añadir estado a los componentes funcionales de React.

    // Función para obtener las canciones
    const obtenerCanciones = async () => {
        try {
            const data = await fetch('json/Spotify.json'); // Fetch para obtener los datos
            if (!data.ok) throw new Error('No se pudo cargar los datos'); // Comprobamos si la respuesta es exitosa
            const cancionesData = await data.json(); // Convertimos la respuesta en JSON
            setCanciones(cancionesData); // Actualizamos el estado con los datos obtenidos
        } catch (error) {
            console.log("Error: ", error); // Si hay un error, lo mostramos
        }
    };

    // useEffect para ejecutar obtenerCanciones cuando el componente se monta
    useEffect(() => {
        obtenerCanciones();
    }, []); // El array vacío asegura que solo se ejecute una vez

    return (
        <div>
            <h1>SpotifEx</h1>
            <FiltradoCanciones canciones={canciones} />
            <ListadoCanciones canciones={canciones} />
            <MasPopular canciones={canciones} />
        </div>
    );
}

export default Canciones;
