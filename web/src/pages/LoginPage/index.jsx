import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./loginpage.css";
import logo from "../../img/logo.svg";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <div id="login">
      <img className="logo" alt="logo" src={logo} />
      <div className="form">
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
          ></input>
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
          ></input>
        </div>
        <div className="actions">
          <button className="btnSubmit" onClick={handleLogin}>
            Entrar na Plataforma
          </button>
        </div>
        <div className="cadastro">
          <Link to="/register"><span className="text">Ainda não possui conta? Crie uma agora!</span></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
