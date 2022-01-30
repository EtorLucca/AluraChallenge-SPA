import React from "react";
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { validarCpf, validarPassword } from "../../models/cadastro";
import FormularioCadastro from "./FormularioCadastro";
import { api } from "../../services/api";
import "./styles.css";
import logo from "../../img/logo.png"

function RegisterPage() {

  return (
    <Container className="form" component="article" maxWidth="sm">
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
    </Container>
  );
}

function onSubmitForm(dados) {
  
  api.post("/users", dados)
   
}

export default RegisterPage;
