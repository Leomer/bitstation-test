import React, { Fragment } from "react";
import "./Home.css";
import pcb from "./images/pcb.png";

const Home = () => {
  return (
    <Fragment>
      <img className="test" src={pcb} alt="pcb" />
      <div className="homecontainer">
        <div className="column">
            <div className="item">
                <p>MANTENIMIENTO</p>
                <p>Nos encargamos de dejar tus equipos Bit Station como nuevos!</p>
            </div>
        </div>
        <div className="column">
            <p>REPARACION</p>
            <p>¿Tu equipo se estropeó?</p>
            <p>No te preocupes, nosotros nos encargamos de dejarlo como nuevo :) </p>
        </div>
        <div className="column">
            <p>FABRICANTES</p>
            <p>¿Necesitas tecnología a medida?</p>
            <p>Nosotros desarrollamos equipos personalizados para cubrir tus necesidades!</p>
            <p>¿Una alarma en casa..?</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
