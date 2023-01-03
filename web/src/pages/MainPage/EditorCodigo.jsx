import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { aplicaHighlight } from "./AplicaHighlight";
import { useEffect } from "react";
import "./githubdark.css";
import Menu from "../menu/Menu";

//----------------------novo código--------------------------------------------------
import { createRepository } from "../../services/api";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

//-----------------------------------------------------------------------------------

function EditorCodigo() {
  const [color, setColor] = useState("#6BD1FF");
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [code, setCode] = useState("");
  const [linguagem, setLinguagem] = useState("");
  const [disabled, setDisabled] = useState(true);

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
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleNewRepo = async () => {
    setColor(document.getElementById("color").value);

    try {
      await createRepository( novoProjeto, user?.id);
      navigate("/comunidade");
    } catch (err) {
      console.error(err);
    }
  };

//------------------------------------------------------------------------------

  return (
    <div className="wrapperMain">
      <Menu />
      <form id="main__editor">
        <div className="principal">
          <div className="title">Editor de Código</div>
          <div className="codeEditor" id="code__editor">
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
              <div className="codeWrapper" id="code__wrapper">
                <code
                  type="text"
                  className={`text__editor hljs ${linguagem}`}
                  id="code"
                  aria-required="true"
                  contentEditable="true"
                  aria-label="Editor de código"
                  value={code}
                  onBlur={(e) => {
                    setCode(document.querySelector(".text__editor").innerText);
                  }}
                >
                </code>
              </div>
            </div>
          </div>
          <Button 
            id="main__button"
            disabled={disabled}
            variant="contained" 
            className="main__button"
            color="primary"
            onClick={()=>{aplicaHighlight(linguagem)}}
          >
            Visualizar com o highlight
          </Button>
        </div>
        <div className="barraLateral">
          <div className="title">Seu Projeto</div>
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
          <div className="title">Personalização</div>
          <div className="flex__tablet">
            <div className="project__language" id="project__language">
              <select 
                name="languageSelect"
                className="project__language--select"
                id="project__language--select"
                onChange={(e) => {
                  setLinguagem(e.target.value)
                  setDisabled(false);
                }}
              >
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
      </form>
    </div>
  );
}

export default EditorCodigo;
