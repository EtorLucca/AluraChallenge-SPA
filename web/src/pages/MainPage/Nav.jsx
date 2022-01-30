import React from "react";
import { Button } from "@material-ui/core";
import logo from "../../img/logo.png";

function Nav({ onLogout }) {
  
  return (
    <div className="nav">
      <img className="logo" src={logo} />
      <Button color="primary" mode="dark" variant="contained" onClick={onLogout}>Sair</Button>
    </div>
  );
}

export default Nav;
