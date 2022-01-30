import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import "./githubdark.css";
import { useEffect } from "react";

//----------------------novo código--------------------------------------------------
import { createRepository } from "../../services/api";
import { AuthContext } from "../../contexts/auth";
//import { useNavigate } from "react-router-dom";

//-----------------------------------------------------------------------------------

function EditorCodigo() {
  const [color, setColor] = useState("#6BD1FF");
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [code, setCode] = useState("");

  const novoProjeto = {
    color,
    nomeProjeto,
    descricao,
    code,
  };

  useEffect(() => {
    let codeEditor = document.getElementById("code__editor");
    codeEditor.style.backgroundColor = color;
  }, [color]);

//------------------código novo-------------------------------------------------
  //const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleNewRepo = async () => {
    setColor(document.getElementById("color").value);

    try {
      await createRepository( novoProjeto, user?.id);
      //navigate("/comunidade");
    } catch (err) {
      console.error(err);
    }
  };

//------------------------------------------------------------------------------

  return (
    <main id="main__editor">
      <div className="principal">
        <div className="code__editor" id="code__editor">
          <div className="code__editor--text">
            <div className="elipse red">
              <span className="none">.</span>
            </div>
            <div className="elipse yellow">
              <span className="none">.</span>
            </div>
            <div className="elipse green">
              <span className="none">.</span>
            </div>
            <div className="code__wrapper">
              <code
                className="text__editor hljs"
                aria-required="true"
                contentEditable="true"
                aria-label="Editor de código"
                value={code}
                onBlur={() => {
                  setCode(document.querySelector(".text__editor").innerText);
                }}
              >
                Digite o seu código aqui!
              </code>
            </div>
          </div>
        </div>
        <div className="main__button">Visualizar com o highlight</div>
      </div>
      <div className="barra__lateral">
        <div className="project__title">SEU PROJETO</div>
        <div>
          <input
            type="text"
            className="project__name"
            required
            placeholder="Nome do seu projeto"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            required
            className="project__description"
            placeholder="Descrição do seu projeto"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="project__title">PERSONALIZAÇÃO</div>
        <div className="flex__tablet">
          <div className="project__language">
            <select className="project__language--select">
              <option className="project__language--option" value="javascript">
                JavaScript
              </option>
              <option className="project__language--option" value="css">
                CSS
              </option>
              <option className="project__language--option" value="html">
                HTML
              </option>
              <option className="project__language--option" value="php">
                PHP
              </option>
            </select>
          </div>
          <div className="project__color">
            <input
              id="color"
              type="color"
              value={color}
              onInput={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
        </div>
        <Button
          onClick={handleNewRepo}
          color="primary"
          variant="contained"
          className="project__save"
        >
          Salvar projeto
        </Button>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
      <script src="./AplicaHighligth.js"></script>
    </main>
  );
}

export default EditorCodigo;
