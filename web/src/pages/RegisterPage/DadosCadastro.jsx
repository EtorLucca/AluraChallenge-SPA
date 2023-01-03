import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <>
      <div className="formContainer">
        <div className="field">
          <span className="label">Nome</span>
          <input
            className="input name"
            type="text"
            name="name"
            id="name"
            placeholder="Insira o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validarCampos}
          ></input>
          <span className="error">{erros.name.texto}</span>
        </div>
        <div className="field">
          <span className="label">Endereço de e-mail</span>
          <input
            className="input email"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validarCampos}
          ></input>
          <span className="error">{erros.email.texto}</span>
        </div>
        <div className="field">
          <span className="label">Senha</span>
          <input
            className="input senha"
            type="password"
            name="password"
            id="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validarCampos}
          ></input>
          <span className="error">{erros.password.texto}</span>
        </div>
        <div className="actions">
          <button className="btnSubmit" onClick={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
              onSubmit({ name, email, password });
            } else {
              alert("Todos os campos são obrigatórios!")
            }
          }}>
            Cadastrar
          </button>
        </div>
        <div className="register">
          <Link to="/">
            <span className="text">Já tenho cadastro</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DadosUsuario;
