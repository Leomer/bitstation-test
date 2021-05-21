import React from "react";
import {Link} from 'react-router-dom';

import "./Navegation.css";

const Navegation = () => {
  return (
    <header>
        <img src="" alt="logo" />
      <nav>
        <ul>
          <li><Link className="linkbar" to="/">HOME</Link></li>
          <li><Link className="linkbar" to="/Contact">CONTACTANOS</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navegation;
