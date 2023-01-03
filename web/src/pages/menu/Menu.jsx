import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <nav className="menu">
      <div className="title">Menu</div>
      <div className="menuNav">
        <NavLink to="/editor" className="navDiv">
          <div className="navText code">
            <span>Editor de código</span>
          </div>
        </NavLink>
        <NavLink to="/comunidade" className="navDiv">
          <div className="navText comunity">
            <span>Projetos Salvos</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;
