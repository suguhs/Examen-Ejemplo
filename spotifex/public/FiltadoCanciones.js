import React, { useState } from "react";

const FiltradoCanciones = ({ canciones }) => {
  const [artista, setArtista] = useState(""); // Estado para almacenar el artista ingresado

  // Filtrar las canciones según el artista ingresado
  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.track_artist.toLowerCase().includes(track_artist.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar por Artista</h2>
      <input
        type="text"
        placeholder="Escribe el nombre del artista..."
        value={artista} // El valor del input es el estado artista
        onChange={(e) => setArtista(e.target.value )} // Actualizamos el estado artista y recogemos el valor del input y onchange hace que se actualice el estado artista
      />
      <ul>
        {cancionesFiltradas.map((cancion) => (
          <li key={cancion.track_id}>{cancion.track_name}</li>    // Se recorre el array de canciones filtradas y se muestra el nombre de cada una
        ))}
      </ul>
    </div>
  );
};

export default FiltradoCanciones;
