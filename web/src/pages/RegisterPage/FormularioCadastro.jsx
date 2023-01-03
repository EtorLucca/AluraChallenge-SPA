import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DadosCadastro from "./DadosCadastro";
import "./registerpage.css";

function FormularioCadastro({ onSubmit }) {
  const [ready, setReady] = useState(false);
  const [dadosColetados, setDados] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if(ready === true) {
      onSubmit(dadosColetados);
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    }
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    setReady(true)
  }

  return (
    <DadosCadastro id="register" onSubmit={coletarDados}/>
  );
}

export default FormularioCadastro;
