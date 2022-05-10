import React from "react";

//Creación de componente funcional.
function Colores(props) {
    console.log(props)
    return (
      <figure>
        <div>
        <div className="tarjeta">
        <img className="centrada" src={props.thumnbail} alt={props.title} />
        <div className="cont-titulo">
        <figcaption clasName="titulo-fetcheado">{props.title}</figcaption>
        </div>
        </div>
        </div>
      </figure>
    );
}

export default Colores;