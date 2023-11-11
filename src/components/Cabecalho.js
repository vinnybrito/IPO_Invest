import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="cabecalho-do-site">
      <div id="layout-logo">
        <h1 id="itech-future">
          <Link to="/" id="link-itech-future">
            iTech Future
          </Link>
        </h1>
      </div>
      <nav>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon" />
        </div>
        <ul id="list-ul-nav" className={menuOpen ? "show" : ""}>
          <li className="list-li-nav">
            <Link to="/" className="link-pages">
              Principal
            </Link>
          </li>

          <li className="list-li-nav">
            <Link to="/simulacoes" className="link-pages">
              IPO Invest
            </Link>
          </li>

          <li className="list-li-nav">
            <Link to="/ipo" className="link-pages">
              O que é IPO
            </Link>
          </li>

          <li className="list-li-nav">
            <Link to="/perfil" className="link-pages">
              Perfil
            </Link>
          </li>

          <li className="list-li-nav">
            <Link to="/login" className="link-pages">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
