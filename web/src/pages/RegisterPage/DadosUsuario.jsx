import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (possoEnviar()) {
            onSubmit({ email, password });
          }
        }}
      >
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="email"
          label="email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          onBlur={validarCampos}
          error={!erros.password.valido}
          helperText={erros.password.texto}
          id="senha"
          label="senha"
          name="senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Próximo
        </Button>
      </form>
      <div className="login__link">
        <Link to="/">Já tenho cadastro</Link>
      </div>
    </>
  );
}

export default DadosUsuario;
