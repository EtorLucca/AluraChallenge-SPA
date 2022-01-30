import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import "./styles.css";

function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (etapaAtual === formularios.length) {
      onSubmit(dadosColetados);
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    }
  });

  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega onSubmit={coletarDados} />
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper className="stepper" activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
