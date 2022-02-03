import React from "react";
import { Typography } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { validarCpf, validarPassword } from "../../models/cadastro";
import FormularioCadastro from "./FormularioCadastro";
import { api } from "../../services/api";
import "./registerpage.css";
import logo from "../../img/logo.png"

function RegisterPage() {

  return (
    <div id="register">
      <img className="logo" src={logo} alt="logo" />
      <div className="container">
      <Typography className="h1" variant="h3" component="h1" align="center">
        Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, password: validarPassword }}
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
