import React from "react";
import "../Estilos/perfil.css";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <div className="grid-container">
        <img
          className="imagen-perfil"
          src={require(`../img/${props.imagen}.jpg`)}
          alt="Foto de desarrollador"
        />
        <div className="contenedor-texto-perfil">
          <p className="nombre-perfil">
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className="cargo-perfil">
           Con el genero {props.genero} en <strong>{props.origen}</strong>
          </p>
          <p className="texto-perfil">"{props.perfil}" </p>
        </div>
      </div>
       {/* Agregamos los botones para seguir en LinkedIn, YouTube y Twitter */}
       <button className="face" onClick={() => window.open(props.facebook, '_blank')}>
                 Seguir en Facebook
        </button>
        <button className="youtube" onClick={() => window.open(props.youtube, '_blank')}>
            Seguir en YouTube
        </button>
        <button className="x" onClick={() => window.open(props.x, '_blank')}>
            Seguir en Twitter
        </button>
    </div>
    
  );
}
export default Perfil;
