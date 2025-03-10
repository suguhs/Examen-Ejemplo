import React from "react";

const ListadoCanciones = ({ canciones }) => { // Se recibe un array de canciones de SpotiMain.js
  return (
    <div>
      <h2>Lista de Canciones</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Duración (s)</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion) => ( // Se recorre el array de canciones y se muestra la información de cada una como un foreach
            // Se muestra la información de cada canción en una fila de la tabla
            <tr key={cancion.id}>
              <td>{cancion.track_id}</td>
              <td>{cancion.trac_name}</td>
              <td>{cancion.track_artist}</td>
              <td>{cancion.track_album_name}</td>
              <td>{cancion.duration_ms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoCanciones;
// En este componente, se recibe un array de canciones y se muestra una tabla con la información de cada una.