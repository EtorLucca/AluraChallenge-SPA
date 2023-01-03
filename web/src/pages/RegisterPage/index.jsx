import React from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { validarEmail, validarName, validarPassword } from "../../models/cadastro";
import FormularioCadastro from "./FormularioCadastro";
import { api } from "../../services/api";
import "./registerpage.css";
import logo from "../../img/logo.svg"

function RegisterPage() {

  return (
    <div id="register">
      <img className="logo" src={logo} alt="logo" />
      <div className="registerContainer">
        <ValidacoesCadastro.Provider
          value={{ password: validarPassword, name: validarName, email: validarEmail }}
        >
          <FormularioCadastro onSubmit={onSubmitForm} />
        </ValidacoesCadastro.Provider>
      </div>
    </div>
  );
}

function onSubmitForm(dados) {
  
  api.post("/users", dados)
   
}

export default RegisterPage;
