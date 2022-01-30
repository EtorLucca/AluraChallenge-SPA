import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { Button, TextField } from "@material-ui/core";
import "./styles.css";
import logo from "../../img/logo.png";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <div id="login">
      <img className="logo" src={logo} />
      <div className="form">
        <h1 className="title">Faça seu Login</h1>
        <div className="field">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="cadastro">
          <span className="text">Ainda não possui cadastro?</span>
          <Link to="/register">Cadastrar</Link>
        </div>
        <div className="actions">
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
